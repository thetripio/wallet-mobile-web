<template>
    <nuxt/>
</template>

<script>
// export default {
//     transition(to, from) {
//         if (!from) return 'slide-left'
//         return 'slide-right'
//     }
// }
</script>

<style lang="scss">
    .page {
        margin: 0 24px;
        transition: all .5s cubic-bezier(.55, 0, .1, 1);
        .trip-alert {
            margin: 0 -24px;
        }
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(30px, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-30px, 0);
    }
</style>