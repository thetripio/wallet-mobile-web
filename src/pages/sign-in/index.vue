<template>
    <div class="sign-in">
        <div class="logo">
        	<img src="/images/logo.png">
        </div>
        
        <div class="button-wrap">
            <trip-button long 
                size="large"
                @click="popupPage('create')">
                {{ $t('signIn.create') }}
            </trip-button>
        </div>
        <div class="button-wrap" :to="localePath('import')">
            <trip-button long 
                size="large" 
                type="ghost"
                @click="popupPage('import')">
                {{ $t('signIn.import') }}
            </trip-button>
        </div>
        <trip-popup-page ref="popPage">
            <create-wallet v-if="popPage == 'create'"
                @success="redirect"></create-wallet>
            <import-wallet v-if="popPage == 'import'"
                @success="redirect"></import-wallet>
        </trip-popup-page>
    </div>
</template>

<script>
    import CreateWallet from './.create.vue'
    import ImportWallet from './.import.vue'

    export default {
        components: { CreateWallet, ImportWallet },
        data() {
           return {
               popPage: ''
           }
        },
        mounted() {
			
        },
        methods: {
            popupPage(page) {
                this.popPage = page;
                this.$refs.popPage.show();
            },
            redirect(account) {
                let url = '';
                // 站外跳转
                if(this.$route.query.redirectUrl) {
                    account = this.$account.get();
                    url = decodeURIComponent(this.$route.query.redirectUrl);
                    let lastChart = url.charAt(url.length - 1);
                    
                    if(url.indexOf('?') >= 0 && lastChart == '&') {
                        url += `address=${account.address}&publicKey=${account.publicKey}`;
                    }
                    else if(url.indexOf('?') >= 0 && lastChart != '&') {
                        url += `&address=${account.address}&publicKey=${account.publicKey}`;
                    }
                    else if(url.indexOf('?') < 0) {
                        url += `?address=${account.address}&publicKey=${account.publicKey}`;
                    }

                    window.location = url;
                }
                else {
                    // 站内跳转
                    url = decodeURIComponent(this.$route.query.redirectTo || 'home');
                    this.$router.push({
                        path: url
                    });
                }
            }
        }
    }
</script>

<style lang="scss">
    .sign-in {
    	position: absolute;
        width: 100%;
        height: 100%;
        background: url(/images/sign-in.png);
        background-size: cover;
        background-position: center;

        .logo {
        	margin: 130px 0 100px 0;
        	text-align: center;
            color: #fff;
            font-size:20px;

        	img {
                height: 122px;
            }
        }
        .button-wrap {
            margin: 0 24px 20px 24px;
            display: block;
        }
    }
</style>

