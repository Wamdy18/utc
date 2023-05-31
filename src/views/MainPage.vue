<template>
  <div class="main-page">
    <Navbar/>
    <Header/>
    <Banner/>
    <Catalog/>
    <About/>
    <Advantages/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'
import Banner from '@/components/banner.vue'
import Catalog from '@/components/catalog.vue'
import About from '@/components/about.vue'
import Advantages from '@/components/advantages.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'MainPage',
  components: {
    Navbar,
    Header,
    Banner,
    Catalog,
    About,
    Advantages,
    Footer
  }
}
</script>
