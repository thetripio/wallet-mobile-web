<template>
    <div class="trip-alert">
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
    .trip-alert {
        background-color: #eaf4fe;
        position: relative;
        padding: 8px 48px 8px 16px;
        font-size: 12px;
        color: #495060;
    }
</style>

