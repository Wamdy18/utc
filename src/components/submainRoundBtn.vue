<template>
  <button class="submain-r-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'SubmainRoundButton',
}
</script>

<style scoped>
.submain-r-btn {
    border: 1px solid #E89238;
    background-color: transparent;
    padding: 10px 30px;
    border-radius: 20px;
    text-transform: uppercase;
    color: #E89238;
    max-width: fit-content;
}
</style>