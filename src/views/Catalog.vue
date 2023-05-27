<template>
  <div class="catalog-page">
    <Navbar/>
    Catalog
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'

export default {
  name: 'Catalog',
  components: {
    Navbar,
  }
}
</script>
