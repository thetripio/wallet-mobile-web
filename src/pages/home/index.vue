<template>
    <div class="page home">
        <trip-title class="home-title">{{ $t('home.title') }}</trip-title>
        <nuxt-link class="network-switch" :to="localePath({path: 'option/network'})">
            {{ this.$network.get().key }}
            <i class="iconfont icon-connect"></i>
        </nuxt-link>
        <div class="card-account">
            <nuxt-link class="iconfont icon-gear" 
                :to="localePath('option')"></nuxt-link>
            <div class="card-title">
                {{ $t('home.accountTitle') }}
            </div>
            <div class="account-balance">
                <span class="account-currency">ETH</span>
                {{ formatBalance(balance) }}
            </div>
            <div class="account-address" @click="showAccount = true">
                {{ $account.get().address }}
                <i class="iconfont icon-qrcode"></i>
            </div>
        </div> 
        <modal-account v-model="showAccount"></modal-account>
        <shortcut-transfer></shortcut-transfer>
        <trip-list>
            <list-item v-for="(item, index) in currencys"
                :key="index"
                v-if="!item.isToken || item.address">
                <nuxt-link class="currency-item" 
                    :to="localePath({path: 'transactions', query: { tokenAddress: item.address }})">
                    <div class="currency-symbol">
                        <img :src="item.symbol" >
                    </div>
                    <div class="currency-name">
                        {{ item.name.toUpperCase() }}
                    </div>
                    <div class="digital-balance">
                        {{ item.isToken ? formatTokenBalance(item.balance, item.decimals) : formatBalance(item.balance) }}
                    </div>
                </nuxt-link>
            </list-item>
        </trip-list>
    </div>
</template>

<script>
    import TripPage from '../../components/trip-page';

    export default {
        middleware: 'auth',
        mixins: [ TripPage ],
        components: {
        },
        data() {
           return {
               balance: null,
               currencys: [],
               showAccount: false
           }
        },
        mounted() {
            this.getCurrencys();
        },
        methods: {
            getCurrencys() {
                this.currencys = [];
                this.$currencys.get().forEach((item, index) => {
                    item.balance = '';
                    this.getBalance(item);

                    this.currencys.push(item);
                });
                
            },
            async getBalance(item) {
                let err, balance;

                if(item.isToken) {
                    [err, balance] = await to(this.$wallet.getTokenBalance(this.$account.get().address, item.address));
                }
                else {
                    [err, balance] = await to(this.$wallet.getBalance(this.$account.get().address));
                    this.balance = balance;
                }

                item.balance = balance;
            },
            // TODO: 统一的转换模块
            formatBalance(bn) {
                if(!bn) {
                    return '';
                }
                let nu = this.$walletUtil.fromWei(bn).toString();
                
                return nu.substring(0, (nu.indexOf('.') + 5));
            },
            formatTokenBalance(bn, decimals) {
                if(!bn) {
                    return '';
                }

                let num = bn.dividedBy(Math.pow(10, decimals)).toString(10);

                return num.substring(0, (num.indexOf('.') + 5));
            }
        }
    }
</script>

<style lang="scss">
    .home {
        .home-title {
            &::after {
                content: 'beta';
                position: absolute;
                vertical-align: super;
                font-size: 12px;
                top: 0px;
                margin-left: 6px;
            }
        }
        .network-switch {
            position: absolute;
            right: 10px;
            top: 10px;
            height: 24px;
            line-height: 24px;
            color: #0097A7;
            font-size: 12px;
            .icon-connect {
                font-size: 20px;
                color: #0097A7;
                vertical-align: middle;
            }
        }
        .card-account {
            min-height:140px;
            padding: 22px 20px;
            border-radius:6px;
            background:linear-gradient(-90deg,rgba(0,180,190,1),rgba(0,151,167,1));
            box-shadow:0px 15px 20px -5px rgba(0,151,167,0.39);
            color: #fff;
            position: relative;
            .icon-gear {
                position: absolute;
                right: 0;
                top: 10px;
                height: 40px;
                width: 40px;
                font-size: 20px;
                text-align: center;
                color: #fff;
            }
            .card-title {
                margin-bottom: 14px;
                color: rgba(248, 248, 248, 0.8);
            }
            .account-balance {
                color: #F8F8F8;
                margin: 16px 0;
                font-size: 36px;
                word-break: break-all;
                .account-currency {
                    font-size: 16px;
                    vertical-align: super;
                }
            }
            .account-address {
                word-break: break-all;
                color: rgba(248, 248, 248, 0.8);
                font-size: 14px;
                line-height: 18px;
                padding-right: 66px;
                position: relative;
                .icon-qrcode {
                    position: absolute;
                    right: 0px;
                    height: 20px;
                    font-size: 20px;
                    top: 50%;
                    margin-top: -10px;
                }
            }
        }
        .currency-item {
            display: block;
            height: 38px;
            text-decoration: none;
            padding: 25px 0 25px 54px;
            position: relative;
            .currency-symbol {
                position: absolute;
                left: 0;
                img {
                    height: 38px;
                }
            }
            .currency-name {
                line-height: 38px;
                font-size: 20px;
            }
            .digital-balance {
                position: absolute;
                color: #181818;
                font-size: 18px;
                right: 28px;
                top: 50%;
                height: 22px;
                line-height: 22px;
                margin-top: -11px;
            }
        }
    }
</style>

