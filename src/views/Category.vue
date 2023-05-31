<template>
  <div class="category-page">
    <Navbar/>
    <!-- <Header/> -->
    <div class="catalog">
      <div class="container">
        <h2>Каталог товаров > {{ category != null && category.catName != null ? category.catName : "" }}</h2>
        <div class="catalog-flex">
          <div v-for="item in category.items" :key="item.id" class="card-wrapper">
              <router-link :to='"/catalog/" + category.catId + "/" + item.id'>
                <ProductCard :img="`../products/${item.img}`">
                    {{ item.title }}
                </ProductCard>
              </router-link>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import catalog from '@/data/catalog.json';
import ProductCard from "@/components/productCard.vue";

export default {
  name: 'Category',
  components: {
    Navbar,
    Header,
    ProductCard,
    Footer
  },
  data() {
    return {
      category: null
    }
  },
  created() {
    console.log(this.$route.params.categoryId)
    let catId = this.$route.params.categoryId;
    this.category = catalog.catalog.find(cat => cat.catId == Number(catId));
    console.log(this.category);
  },
}
</script>

<style scoped>    
.catalog {
  padding-block: 50px;
  min-height: calc(100vh - 250px);
}
.catalog h2 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  color: #303543;
  text-align: center;
}
.catalog-flex {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
}
.card-wrapper {
  width: 33%; 
  display: flex; 
  justify-content: center;
}

@media (max-width: 800px) {
  .card-wrapper {
    width: auto;
    margin-inline: 15px; 
    display: flex; 
    justify-content: center;
  }
  .catalog-flex {
  justify-content: space-around;

  }
}
</style>