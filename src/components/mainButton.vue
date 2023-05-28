<template>
  <button class="main-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'MainButton',
}
</script>

<style scoped>
.main-btn {
    border: 1px solid #C6823C;
    background-color: #E89238;
    padding: 15px 30px;
    border-radius: 8px;
    color: white;
    max-width: fit-content;
    font-size: 14px;
}
</style>