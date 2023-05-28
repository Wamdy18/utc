<template>
  <div class="main-page">
    <Navbar/>
    <Header/>
    <Banner/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'
import Banner from '@/components/banner.vue'

export default {
  name: 'MainPage',
  components: {
    Navbar,
    Header,
    Banner
  }
}
</script>
