<template>
    <label>
        <input class="trip-radio" 
            type="radio"
            :name="name"
            :checked="currentValue"
            @change="handleChange">
        <slot></slot>
    </label>
</template>

<script>
    import Emitter from '../emitter';
    import { findComponentUpward } from '../utils';

    export default {
        mixins: [ Emitter ],
        props: [ 'value', 'name', 'label' ],
        data() {
           return {
               currentValue: this.value,
               parent: findComponentUpward(this, 'TripRadioGroup'),
           }
        },
        mounted() {
			if(this.parent) {
                this.parent.updateValue();
            }
        }, 
        methods: {
            handleChange(e) {
                let value = e.target.checked;
                this.currentValue = value;

                this.$emit('input', value);

                if(this.parent) {
                    this.parent.change({
                        value: this.label,
                        checked: this.value
                    });
                }
                else {
                    this.$emit('change', value);
                }
            }
        }
    }
</script>

<style lang="scss">
    .trip-radio {
        position: relative;
        width: 18px;
        height: 18px;
        display: inline-block;
        background: transparent;
        vertical-align: middle;
        
         &:before {
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            border: 1px solid #cfcfcf;
            background: transparent;
            border-radius: 10px;
            transition: background-color 20ms ease-in-out;
            left: -1px;
            top: -1px;
        }
        &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -5px;
            margin-left: -5px;
            display: table;
            width: 8px;
            height: 4px;
            border: 2px solid #fff;
            border-top: 0;
            border-right: 0;
            transform: rotate(-45deg);
            opacity: 0;
            transition: opacity 0.05s ease-in-out;
        }
        &:checked {
            &:before {
                background: #0097A7;
                border-color: #0097A7;
            }
            &:after {
                opacity: 1;
            }
        }
    }
</style>

