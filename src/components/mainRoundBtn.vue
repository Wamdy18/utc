<template>
  <button class="main-r-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'MainRoundButton',
}
</script>

<style scoped>
.main-r-btn {
    border: 1px solid #E89238;
    background-color: #E89238;
    padding: 10px 30px;
    border-radius: 20px;
    text-transform: uppercase;
    color: white;
    max-width: fit-content;
}
</style>