<template>
  <div class="catalog">
    <div class="container">
        <h2>Каталог товаров</h2>
        <div class="catalog-flex">
            <div v-for="(cat,index) in catalog" :key="index" class="card-wrapper">
                <router-link :to='"/catalog/" + cat.catId'>
                    <ProductCard :img="`products/${cat.img}`">
                        {{ cat.catName }}
                    </ProductCard>
                    <!-- <div>
                        {{ cat.catName }}
                        <img :src="`products/${cat.img}`" alt="">
                    </div> -->
                </router-link>
            </div>
        </div>
    </div>
    
    
  </div>
</template>

<script>
import catalog from '@/data/catalog.json';
import ProductCard from "@/components/productCard.vue";

export default {
    name: 'Catalog',
    components: {
        ProductCard,
    },
    data() {
        return {
            catalog: null,
        }
    },
    mounted() {
        this.catalog = catalog.catalog;
        console.log(this.catalog);
    }
}
</script>

<style scoped>
    .catalog {
        padding-block: 50px;
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
        justify-content: space-around;
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
    }
</style>