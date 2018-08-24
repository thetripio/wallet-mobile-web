<template>
    <div class="trip-title">
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
        }
    }
</script>

<style lang="scss">
    .trip-title {
        font-size: 28px;
        height: 50px;
        line-height: 50px;
        margin: 10px 0;
    }
</style>

