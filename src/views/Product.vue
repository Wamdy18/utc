<template>
  <div class="product-page">
    <Navbar/>
    <Header/>
    <div class="catalog">
      <div class="container">
        <h2>Каталог товаров > {{ category != null && category.catName != null ? category.catName : "" }} > {{ this.product ? this.product.title : "" }}</h2>
        <h3>{{ product.title }}</h3>
        <div class="flex mt-30">
          <img :src="`../../products/${product.img}`" class="product-img" alt="">
          <div class="right">
            <p>{{ product.description }}</p>
            <hr>
            <span class="under-hr">Оставьте заявку и мы вышлем Вам коммерческое предложение</span>
            <div class="btn-div">
              <MainButtonRequest>Оставить заявку</MainButtonRequest>
            </div>
          </div>
        </div>
      </div>
      
      <!-- <div>{{ product.title }}</div> -->
      <!-- <div>{{ product.description }}</div> -->
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'
import catalog from '@/data/catalog.json';
import MainButtonRequest from '@/components/mainButtonRequest.vue'


export default {
  name: 'Product',
  components: {
    Navbar,
    Header,
    MainButtonRequest
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

<style scoped>
h2 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  color: #303543;
  text-align: center;
  margin-bottom: 20px;
}
h3 {
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 500;
  color: #303543;
  text-align: center;
}
.flex {
  display: flex;
}

.mt-30 {
  margin-top: 30px;
}

img {
    width: 450px;
    height: 250px;
    margin-right: 50px;
}
hr {
  margin-top: 25px;
  border: none;
  border-top: 1px solid rgba(48,52,68,0.5);
  size: 1px;
}
.under-hr {
  margin-top: 5px;
  font-size: 10px;
  font-weight: 600;
  color: black;
}
.btn-div {
  display: flex;
  justify-content: center;
  margin-top: 45px;
}
</style>