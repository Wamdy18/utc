<template>
  <div class="main-page">
    <Header/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'

export default {
  name: 'MainPage',
  components: {
    Header,
  }
}
</script>
