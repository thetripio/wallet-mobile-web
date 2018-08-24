<template>
    <div class="trip-message"
        :class="messageClass"
        :style="typeStyle"
        v-if="visible">
        {{ content }}
    </div>
</template>

<script>

    export default {
        props: ['content', 'duration', 'type'],
        data() {
           return {
               visible: true,
               messageClass: ''
           }
        },
        computed: {
            typeStyle() {

                let map = {
                    info: {
                        background: '#2d8cf0'
                    },
                    error: {
                        background: '#ed3f14'
                    }
                };

                return map[this.type] || {}
            }
        },
        mounted() {
            this.show();
            setTimeout(() => {
                this.close();
            }, this.duration || 3000);
			
        },
        methods: {
            show() {
                this.visible = true;
                setTimeout(() => {
                    this.messageClass = 'message-show';
                }, 100);
            },
            close() {
                this.messageClass = '';
                setTimeout(() => {
                    this.visible = false;
                }, 200);
            }
        }
    }
</script>

<style lang="scss">
    .trip-message {  
        font-size: 12px;
        position: fixed;
        padding: 0 0;
        background: #2d8cf0;
        color: #fff;
        top: 0;
        z-index: 10002;
        width: 100%;
        text-align: center;
        height: 0;
        line-height: 14px;
        transition: height 0.2s linear, padding 0.2s linear;
        overflow: hidden;
        
        &.message-show {
            padding: 8px 0;
            height: 14px;
        }
    }
</style>

