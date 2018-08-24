<template>
    <canvas ref="qrcode" class="trip-qrcode">
    </canvas>
</template>

<script>
    import QRCode from 'qrcode';

    export default {
        props: [ 'message', 'width', 'options' ],
        data() {
           return {
           }
        },
        mounted() {
            var canvas = this.$refs.qrcode;
            let options = this.options || { };
            options.width = this.width;
            QRCode.toCanvas(canvas, this.message, options)
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    .trip-qrcode {

    }
</style>

