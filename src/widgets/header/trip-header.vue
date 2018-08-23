<template>
    <div class="trip-header-wrapper">
        <div class="trip-header">
            <div class="header-title">{{this.title}}</div>
        </div>

    </div>
</template>

<script>

    export default {
        props: ['title'],
        components: {
        },
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
    .trip-header-wrapper {
        padding-top: 60px;
        .trip-header {
            position: fixed;
            z-index: 10000;
            top: 0;
            left: 0;
            right: 0;
            height: 60px;
            line-height: 60px;
            font-size: 17px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid #dfdfdf;
            background-color: #fff;
            padding: 0 50px;
            .header-title {
                text-align: center;
            }
            .left-button{
                
            }
            .right-button{
                
            }
        }

    }
</style>

