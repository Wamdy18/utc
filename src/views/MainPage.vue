<template>
  <div class="main-page">
    <Navbar/>
    <Header/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'

export default {
  name: 'MainPage',
  components: {
    Navbar,
    Header,
  }
}
</script>
