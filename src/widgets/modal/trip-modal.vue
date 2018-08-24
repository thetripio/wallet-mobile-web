<template>
    <div class="trip-modal-wrap" v-if="visible">
        <div class="trip-modal">
            <div class="modal-close"
                @click="close">
                &times;
            </div>
            <div class="modal-title">
                {{ title }}
            </div>
            <div class="modal-content">
                <template v-if="content">
                    {{content}}
                </template>
                <slot v-else></slot>
            </div>
            <div class="modal-footer" v-if="buttons && buttons.length > 0">
                <trip-button v-for="(btn, index) in buttons"
                    :key="index"
                    @click="btn.click">
                    {{ btn.text }}
                </trip-button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['value', 'title', 'content', 'buttons'],
        data() {
           return {
               visible: this.value
           }
        },
        mounted() {
			
        },
        methods: {
            close() {
                this.visible = false;
                this.$emit('input', false);
                this.$emit('close');
            }
        },
        watch: {
            value (val) {
                this.visible = val;
            }
        }
    }
</script>

<style lang="scss">
    .trip-modal-wrap {
        position: fixed;
        overflow: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10001;
        background-color: rgba(55,55,55,.6);
        .trip-modal {
            background-color: #fff;
            border-radius:3px;
            position: relative;
            top: 100px;
            margin: 10px 24px;
            width: auto;
            
            .modal-title {
                padding: 30px 24px 0 24px;
                font-size: 22px;
                text-align: center;
            }
            .modal-close {
                position: absolute;
                right: 10px;
                font-size: 32px;
                color: #C8CBCF;
                cursor: pointer;
            }
            .modal-content {
                padding: 24px;
                min-height: 50px;
                font-weight: normal;
                word-wrap: break-word;
            }
            .modal-footer {
                display: flex;
                padding: 10px;
                .trip-button {
                    flex: 1;
                    margin-right: 6px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }

    }
</style>

