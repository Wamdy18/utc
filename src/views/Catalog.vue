<template>
  <div class="catalog-page">
    <Navbar/>
    <Header/>
    Catalog
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'

export default {
  name: 'Catalog',
  components: {
    Navbar,
    Header
  }
}
</script>
