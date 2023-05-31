<template>
    <div class="product-card">
        <img :src="img" class="product-img" alt="">
        <div class="product-text">
            <span>
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        img: {
            type: String,
            default: "",
        }
    }

}
</script>

<style>
.product-card {
    max-width: 220px;
}
.product-card .product-text{
    background-color: #F5F5F5;
    min-height: 70px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.product-card .product-text span {
    margin-inline: 30px;
    font-size: 14px;
    font-weight: 400;
}
.product-card .product-img {
    width: 220px;
    height: 160px;
}
</style>