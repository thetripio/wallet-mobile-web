<template>
    <div class="trip-form">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: 'tripForm',
        props: ['label'],
        components: {
        },
        data() {
            return {
                fields: []
            }
        },
        created () {
            this.$on('on-form-item-add', (field) => {
                if (field) this.fields.push(field);
                return false;
            });

            this.$on('on-form-item-remove', (field) => {
                if (field) this.fields.splice(this.fields.indexOf(field), 1);
                return false;
            });
        },
        mounted() {
        },
        methods: {
            validate() {
                let valid = true;
                this.fields.forEach(field => {
                    
                    let input = field.$children[0];
                    if(field.$children && !field.validate(input)) {
                        valid = false;
                        field.message = field.rules.message
                    }
                    else {
                        field.message = '';
                    }
                });

                return valid;
            }
        }
    }
</script>

<style lang="scss">
.trip-form {
    margin-top: 10px;
    .form-item {
        font-size: 14px;
        .form-label {
            height: 20px;
            line-height: 20px;
            margin-bottom: 10px;
            font-weight: bold;
            color: #333;
        }
        .form-content {
            .trip-input {
                width: 100%;
            }
        }
        .form-message {
            padding: 4px;
            height: 22px;
            line-height: 22px;
            font-size: 14px;
            color: #ed3f14;
            opacity: 0;
            transition: opacity .3s linear;
        }
    }
    &.style-line {
        .form-item {
            .form-label {
                height: 20px;
                line-height: 20px;
                margin-bottom: 0;
                font-weight: normal;
                color: #A5A5A5;
            }
            .form-content {
                .trip-input {
                    width: 100%;
                    padding: 14px 0;
                }
                .trip-input-append {
                    right: 0;
                }
            }
        }
    }
}
</style>

