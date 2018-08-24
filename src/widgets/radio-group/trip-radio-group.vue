<template>
    <div class="trip-radio-group">
        <slot></slot>
    </div>
</template>

<script>
    import { findComponentsDownward } from '../utils';

    export default {
        props: [ 'value' ],
        data() {
           return {
               currentValue: this.value,
               childrens: []
           }
        },
        mounted() {
			
        },
        methods: {
            updateValue() {
                this.childrens = findComponentsDownward(this, 'TripRadio');
                
                if (this.childrens) {
                    this.childrens.forEach(child => {
                        child.currentValue = this.currentValue === child.label;
                        child.group = true;
                    });
                }
            },
            change (data) {
                this.currentValue = data.value;
                this.updateValue();
                this.$emit('input', data.value);
                this.$emit('change', data.value);
            }
        },
        watch: {
            value () {
                if(this.currentValue !== this.value){
                    this.currentValue = this.value;
                    this.updateValue();
                }
            }
        }
    }
</script>

<style lang="scss">
</style>

