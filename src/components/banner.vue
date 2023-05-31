<template>
  <div class="banner" id="banner">
    <div class="banner-bg slide active" data-slider-item>
        <img src="@/assets/banner-1.png" alt="">
        <div class="container">
            <div class="slider-text">
                <h1>Качественные комплектующие <br>для вашего объекта</h1>
                <ul>
                    <li><span class="triangle"></span>Высокое качество изделий</li>
                    <li><span class="triangle"></span>Большой выбор комплектующих</li>
                    <li><span class="triangle"></span>Приятные цены</li>
                </ul>
                <div class="div-btn">
                    <MainButton class="m-btn">Перейти в каталог</MainButton>
                </div>
            </div>
        </div>
    </div>
    <div class="banner-bg slide" data-slider-item>
        <img src="@/assets/banner-2.png" alt="">
        <div class="container">
            <div class="slider-text">
                <h1>Качественные комплектующие <br>для вашего объекта</h1>
                <ul>
                    <li><span class="triangle"></span>Высокое качество изделий</li>
                    <li><span class="triangle"></span>Большой выбор комплектующих</li>
                    <li><span class="triangle"></span>Приятные цены</li>
                </ul>
                <div class="div-btn">
                    <MainButton class="m-btn">Перейти в каталог</MainButton>
                </div>
            </div>
        </div>
    </div>
    <div class="banner-bg slide" data-slider-item>
        <img src="@/assets/banner-3.png" alt="">
        <div class="container">
            <div class="slider-text">
                <h1>Качественные комплектующие <br>для вашего объекта</h1>
                <ul>
                    <li><span class="triangle"></span>Высокое качество изделий</li>
                    <li><span class="triangle"></span>Большой выбор комплектующих</li>
                    <li><span class="triangle"></span>Приятные цены</li>
                </ul>
                <div class="div-btn">
                    <MainButton class="m-btn">Перейти в каталог</MainButton>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import MainButton from '@/components/mainButton.vue'

export default {
    name: 'Banner',
    components: {
        MainButton,
    },
    data() {
        return {
            bannerIndex: 0,
        }
    },
    created() {
        
    },
    mounted() {
        let sliderItems = document.querySelectorAll('[data-slider-item]');

        let activeSliderItem = sliderItems[this.bannerIndex];
        let lastActiveSliderItem = sliderItems[0];

        setInterval(() => {
            if (this.bannerIndex < 2) {
                this.bannerIndex += 1
                activeSliderItem = sliderItems[this.bannerIndex];
            } else {
                this.bannerIndex = 0;
                activeSliderItem = sliderItems[0];
            } 
            lastActiveSliderItem.classList.remove("active");
            activeSliderItem.classList.add("active");
            lastActiveSliderItem = activeSliderItem;
        }, 7000)
    }

}
</script>

<style scoped>
.banner {
    /* background-image: url(@/assets/banner-1.png); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    /* min-height: 50vh; */
    /* max-height: 50vh; */
    overflow: hidden;
    position: relative;
    max-height: 400px;
    height: 400px;
}
.banner-bg img {
    animation: smoothScale 7s linear forwards;
}
.banner-bg {
    height: 400px;
}
.banner img {
    width: 100%;
    transform: scale(1.15);
    height: 100%;
    object-fit: cover;
}
.slide {
    opacity: 0;
    visibility: hidden;
    display: none;
    overflow: hidden;
    position: relative;
}
.slide .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
.slide.active {
    opacity: 1;
    visibility: visible;
    display: block;
}
.slider-text {
    margin-top: 70px;
}

@keyframes smoothScale {
  0% {transform: scale(1);}
  100% {transform: scale(1.15);}
}

h1 {
    font-size: 32px;
    text-transform: uppercase;
    line-height: 40px;
    color: white;
    opacity: 0.9;
    font-weight: 500;
}
span.triangle {
    width: 9px;
    height: 9px;
    background-color: #E89238;
    transform: rotate(45deg);
    margin-right: 15px;
}
.slider-text ul {
    margin-top: 30px;
}
.slider-text ul li {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 10px;
}
.m-btn {
    margin-top: 30px;
    
}
.div-btn {
    display: flex;
    justify-content: right;
}

@media (max-width: 800px) {
    h1 {
        font-size: 24px;
        line-height: 26px;
    }
    .slider-text ul li {
        font-size: 14px;
    }
    .slider-text {
        margin-top: 30px;
    }
    .div-btn {
        justify-content: center;
        transform: scale(0.9);
        margin-top: 50px;
    }
}
</style>