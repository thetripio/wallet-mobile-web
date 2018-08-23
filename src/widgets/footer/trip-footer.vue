<template>
    <div class="trip-footer-wrapper">
        <div class="trip-footer">
            <slot></slot>
        </div>
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
        }
    }
</script>

<style lang="scss">
    .trip-footer-wrapper {
        padding-bottom: 50px;
        .trip-footer {
            position: fixed;
            z-index: 10000;
            bottom: 0;
            left: 0;
            right: 0;
            min-height: 44px;
            padding: 10px;
            background-color: #fff;
        }
    }
</style>

