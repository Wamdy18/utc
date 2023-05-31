<template>
  <div class="catalog-page">
    <Navbar/>
    <!-- <Header/> -->
    <Catalog/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'
import Catalog from '@/components/catalog.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'CatalogPage',
  components: {
    Navbar,
    Header,
    Catalog,
    Footer
  }
}
</script>
