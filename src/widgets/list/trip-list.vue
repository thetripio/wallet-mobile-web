<template>
    <div class="trip-list">
        <slot></slot>
        <slot name="loading" 
            v-if="loading">
        </slot>
        <slot name="error" 
            v-if="error">
        </slot>
        <slot name="empty" 
            v-if="empty">
        </slot>
        <slot name="end" 
            v-if="end">
        </slot>
    </div>
</template>

<script>

    export default {
        props: {
            loading: {
                type: Boolean,
                default: false
            },
            error: {
                type: Boolean,
                default: false
            },
            empty: {
                type: Boolean,
                default: false
            },
            end: {
                type: Boolean,
                default: false
            }
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
    .trip-list {
        
    }
</style>

