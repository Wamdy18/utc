<template>
  <div class="catalog-page">
    <Header/>
    Catalog
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'

export default {
  name: 'Catalog',
  components: {
    Header,
  }
}
</script>
