<template>
    <div class="form-item">
        <div class="form-label" 
            v-if="label">
            {{ label }}
        </div>
        <div ref="formContent" class="form-content">
            <slot></slot>
        </div>
        <div class="form-message" :style="{'opacity': message ? 1 : 0}">
            {{ message }}
        </div>
    </div>
</template>

<script>
    import Emitter from '../emitter';

    export default {
        mixins: [ Emitter ],
        props: ['label', 'rules'],
        components: {
        },
        data() {
            return {
                message: ''
            }
        },
        computed: {
            // fieldValue: {

            // }
        },
        mounted() {
            this.dispatch('tripForm', 'on-form-item-add', this);
            this.bindingValidator();
        },
        beforeDestroy () {
            this.dispatch('tripForm', 'on-form-item-remove', this);
        },
        methods: {
            getInput() {

            },
            bindingValidator() {
                if(this.rules && 
                    this.rules.trigger && 
                    this.$children && 
                    this.$children.length > 0) {
                    let vm = this.$children[0];
                    vm.$on(this.rules.trigger, (e) => {
                        if(this.validate(e.target)) {
                            this.message = '';
                        }
                        else {
                            this.message = this.rules.message
                        }
                    });
                }
            },
            validate(input) {
                if(this.rules && this.$children) {

                    if(this.rules.validator && 
                        typeof this.rules.validator == 'function') {
                        return this.rules.validator(input.value)
                    }

                    if(this.rules.pattern) {
                        return this.rules.pattern.test(input.value);
                    }

                    if(this.rules.required === true) {
                        return input.value && input.value.length > 0;
                    }
                    
                    if(typeof this.rules.minlength == 'number') {
                        return input.value && input.value.length >= this.rules.minlength   
                    }
                    if(typeof this.rules.maxlength == 'number') {
                        return input.value && input.value.length <= this.rules.maxlength   
                    }
                }

                return true;
            }
        }
    }
</script>

<style lang="scss">
    
</style>

