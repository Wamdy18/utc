<template>
  <div class="product-page">
    <Navbar/>
    <Header/>
    <div class="catalog">
      <h2>Каталог товаров > {{ category != null && category.catName != null ? category.catName : "" }} > {{ this.product ? this.product.title : "" }}</h2>
      <div>{{ product.title }}</div>
      <div>{{ product.description }}</div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'
import catalog from '@/data/catalog.json';

export default {
  name: 'Product',
  components: {
    Navbar,
    Header
  },
  data() {
    return {
      category: null,
      product: null,
    }
  },
  created() {
    console.log(this.$route.params.categoryId);
    let catId = this.$route.params.categoryId;
    this.category = catalog.catalog.find(cat => cat.catId == Number(catId));
    console.log(this.category);
    let productId = this.$route.params.productId;
    this.product = this.category.items.find(item => item.id == Number(productId));
    console.log(this.product);
  },
}
</script>
