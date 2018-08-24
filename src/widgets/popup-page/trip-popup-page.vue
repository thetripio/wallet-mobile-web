<template>
    <div class="trip-popup-page" v-if="visible"
        :class="classes">
        <slot></slot>
        <div class="popup-page-close"
            @click="close">
            <i class="iconfont icon-close"></i>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
           return {
               visible: false,
               classes: ''
           }
        },
        mounted() {
			
        },
        beforeDestroy () {
            this.scrollable();
        },
        methods: {
            show() {
                this.visible = true;
                this.discrollable();
                setTimeout(()=>{
                    this.classes = 'popup';
                    this.scrollable();
                }, 500);
            },
            close() {
                this.classes = 'popdown';
                this.discrollable();
                setTimeout(()=>{
                    this.visible = false;
                    this.scrollable();
                }, 500);
            },
            discrollable: function (selector) {
                window.addEventListener("touchmove", this.preventEvent);
                var s = document.body.style; 
                s.overflowX = s.overflowY = "hidden";
            },
            scrollable: function (selector) {
                window.removeEventListener("touchmove", this.preventEvent);
                var s = document.body.style; 
                s.overflowX = s.overflowY = null;
            },
            preventEvent: function (e) {
                e.preventDefault();
            }
        }
    }
</script>

<style lang="scss">
    .trip-popup-page {
        min-height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 1000;
        background-color: #fff;
        transition: all .5s cubic-bezier(.55, 0, .1, 1);
        transform: translate(0, 800px);

        &.popup {
            transform-origin: 0 0;
            transform: translate(0, 0);
        }

        &.popdown {
            transform-origin: 0 0;
            transform: translate(0, 800px);
        }

        .icon-close {
            font-size: 40px;
            position: absolute;
            bottom: 20px;
            width: 50px;
            height: 50px;
            left: 50%;
            margin-left: -25px;
            text-align: center;
        }
    }
</style>

