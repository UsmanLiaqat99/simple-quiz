<template>
    <it-button type="success" :disabled="disable">
        <slot></slot>
    </it-button>
</template>

<script>
export default {
    props: {
        disable: {
            default: 'false'
        }
    }
}
</script>