<template>
    <div class="page import-wallet">
        <trip-header :title="$t('signIn.import')"></trip-header>
        <trip-alert v-html="$t('signIn.alert')"></trip-alert>
        <trip-form class="trip-form" ref="form">
            <form-item :label="$t('signIn.privateKey')"
                :rules="{ validator: validateKey, trigger: 'change', message: $t('signIn.privateKeyError')}">
                <trip-input type="textarea"
                    :placeholder="$t('signIn.privateKeyPlaceholder')" 
                    rows="5"
                    v-model="privateKey"></trip-input>
            </form-item>
            <form-item :label="$t('signIn.password')"
                :rules="{ minlength: 6, trigger: 'change', message: $t('signIn.passwordError')}">
                <trip-input :type="eye ? 'text' : 'password'"
                    :placeholder="$t('signIn.passwordPlaceholder')"
                    v-model="password">
                    <i class="iconfont"
                        :class="eye ? 'icon-eye-off': 'icon-eye'"
                        slot="append"
                        @click="eye=!eye"></i>
                </trip-input>
            </form-item>
            <form-item>
                <trip-button long
                    @click="importAccount">
                    {{ $t('signIn.import') }}
                </trip-button>
            </form-item>
        </trip-form>
    </div>
</template>

<script>

    export default {
        components: { },
        data() {
            return {
                privateKey: '',
                password: '',
                eye: false
            }
        },
        mounted() {
            
        },
        methods: {
            validateKey(val) {
                // if(val && val.indexOf('0x') != 0) {
                //     val += '0x';
                // }

                return this.$walletUtil.verifyPrivateKey(val);
            },
            importAccount() {
                if(this.$refs.form.validate()) {
                    this.$wallet.import(this.privateKey);
                    this.$account.set({
                        currency: this.$wallet.currency,
                        address: this.$wallet.address,
                        publicKey: this.$wallet.publicKey,
                        privateKey: this.$walletUtil.encrypt(this.$wallet.privateKey, this.password)
                    });

                    this.$emit('success');

                }
            }
        }
    }
</script>

<style lang="scss">
   .import-wallet{
   }
</style>

