<template>
  <div class="contacts-page">
    <Navbar/>
    Contacts
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'

export default {
  name: 'Contacts',
  components: {
    Navbar,
  }
}
</script>
