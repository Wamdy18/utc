<template>
  <div class="main-page">
    <Navbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'

export default {
  name: 'MainPage',
  components: {
    Navbar,
  }
}
</script>
