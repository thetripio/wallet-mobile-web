<template>
    <div class="trip-list-item arrow-right" @click="handleClick">
       <slot></slot>
    </div>
</template>

<script>

    export default {
        data() {
           return {
           }
        },
        mounted() {
			
        },
        methods: {
            handleClick(e) {
                this.$emit('click', event);
            }
        }
    }
</script>

<style lang="scss">
    .trip-list-item {
        min-height: 80px;
        border-bottom: 1px solid #DBDBDB;
        position: relative;
        &.arrow-right {
            &::after {
                content: '';
                position: absolute;
                right: 5px;
                top: 50%;
                margin-top: -4px;
                border-top: 2px solid #A5A5A5;
                border-right: 2px solid #A5A5A5;
                height: 6px;
                width: 6px;
                transform:rotate(45deg);

            }
        }
    }
</style>

