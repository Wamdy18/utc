<template>
    <button class="main-btn" @click="callback">
      <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MainButtonSend',
    methods: {
        callback() {
            this.$emit('clicked')
        }
    }
}
</script>

<style scoped>
.main-btn {
    border: 1px solid #C6823C;
    background-color: #E89238;
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
    max-width: fit-content;
    font-size: 14px;
    text-transform: uppercase;
}
</style>