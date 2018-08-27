<template>
    <div class="page generate-wallet">
        <trip-header :title="$t('signIn.create')"></trip-header>
        <trip-alert v-html="$t('signIn.alert')"></trip-alert>
        <trip-form ref="form" class="trip-form">
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
                    @click="create">
                    {{ $t('signIn.create') }}
                </trip-button>
            </form-item>
        </trip-form>
    </div>
</template>

<script>

    export default {
        components: {
        },
        data() {
            return {
                password: '',
                eye: false
            }
        },
        mounted() {
            // this.$TripModal.info({
            //     title: '请牢记',
            //     content: 'ddd'
            // });
        },
        methods: {
            create() {
                if(this.$refs.form.validate()) {
                    this.$wallet.generate();
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
   .generate-wallet{

   }
</style>

