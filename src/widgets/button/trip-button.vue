<template>
    <button class="trip-button"
        :disabled="disabled"
        :class="[size,type, (long!=null ? 'long' : '')]"
        @click="handleClick"
        :readonly="loading">
        <i class="iconfont icon-loading load-loop"
            v-if="loading"></i>
        <slot></slot>
    </button>
</template>

<script>

    export default {
        props: ['size', 'type', 'long', 'disabled', 'loading'],
        components: {
        },
        data() {
            return {
                
            }
        },
        mounted() {
        },
        methods: {
            handleClick(e) {
                this.$emit('click', e);
            }
        }
    }
</script>

<style lang="scss">
    .trip-button {
        height: 44px;
        background-color: #0097A7;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        transition: color .2s linear,background-color .2s linear,border .2s linear;
        box-shadow: none;
        outline-width: 0;
        
        &.ghost {
            background-color: #fff;
            color: #0097A7;
        }
        &.large {
            height: 54px;
        }
        &.small {

        }
        &.long {
            width: 100%;
        }
        &[disabled] {
            background-color: #EEEFF2;
            color: #C8CBCF;
        }

        .icon-loading {
            display: inline-block;
            animation: load-loop 1s linear infinite;
            font-size: 30px;
            vertical-align: middle;
            line-height: 30px;
            height: 30px;
            margin-bottom: 3px;
        }
        @keyframes load-loop {
            0% {
                transform: rotate(0)
            }

            50% {
                transform: rotate(180deg)
            }

            to {
                transform: rotate(1turn)
            }
        }
    }
</style>

