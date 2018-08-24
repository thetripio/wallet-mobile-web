<template>
    <div class="trip-input-wrapper">
        <textarea v-if="type=='textarea'"
            class="trip-input"
            :class="classes"
            :maxlength="maxlength"
            :placeholder="placeholder"
            :rows="rows"
            :readonly="readonly"
            :disabled="disabled"
            :value="currentValue"
            @input="handleInput"
            @blur="handleBlur">
        </textarea>
        <input v-else
            class="trip-input"
            :class="classes"
            :type="type || 'text'"
            :maxlength="maxlength"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :value="currentValue"
            @input="handleInput"
            @blur="handleBlur">
        <div class="trip-input-append">
            <slot name="append"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'value', 'type', 'mode', 'maxlength', 'placeholder', 'rows', 'readonly', 'disabled' ],
        data() {
           return {
               currentValue: this.value || ''
           }
        },
        computed: {
            classes() {

                let map = {
                    'line': 'style-line'
                };

                return map[this.mode] || '';
            }
        },
        mounted() {
			
        },
        methods: {
             handleInput (event) {
                let value = event.target.value;
                
                this.$emit('input', value);
                this.setCurrentValue(value);
                this.$emit('change', event);
            },
            handleBlur(event) {
                this.$emit('blur', event);
            },
            setCurrentValue (value) {
                if (value === this.currentValue) return;
                this.currentValue = value;
            },
        },
        watch: {
            value(val) {
                this.setCurrentValue(val);
            }
        }
    }
</script>

<style lang="scss">
    .trip-input-wrapper {
        position: relative;
        .trip-input {
            border-radius: 3px;
            border: 1px solid #DFDFDF;
            min-height: 18px;
            line-height: 18px;
            padding: 12px;
            font-size: 14px;
            box-sizing: border-box;
            transition: color .2s linear, background-color .2s linear, border .2s linear;
            &.style-line {
                border: none;
                border-bottom: 1px solid #DFDFDF;
                border-radius: 0;
                padding: 12px 0;
                font-size: 16px;
            }
            &[disabled] {
                border-color: #DFDFDF;
            }
            &:focus {
                border-color: #0097A7;
            }
        }

        .trip-input-append {
            position: absolute;
            right: 12px;
            height: 14px;
            line-height: 14px;
            top: 50%;
            margin-top: -7px;
        }

    }
</style>
