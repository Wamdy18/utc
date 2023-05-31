<template>
  <div class="delivery-page">
    <Navbar/>
    <Header/>
    <div class="delivery">
      <div class="container">
        <h2>Доставка</h2>
        <p>Мы предлагаем доставку на любой объект на территории России и стран СНГ, где бы он не находился.</p>
        <p>Доставка от склада до терминала транспортной компании осуществляется <span class="w-500">бесплатно.</span></p>
      </div>
      <div class="car-div">
        <div class="car"></div>
        <hr>
      </div>
      <div class="container">
        <div class="div-btn">
            <MainButton class="m-btn">Перейти в каталог</MainButton>
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
import MainButton from '@/components/mainButton.vue'

export default {
  name: 'Delivery',
  components: {
    Navbar,
    Header,
    Footer,
    MainButton,
  },
  mounted() {
    let car = document.querySelector('.car');
    let pos = 0;
    setInterval(() => {
      pos = Number(car.style.left.substring(0, car.style.left.length - 2));
      if (pos > window.innerWidth) car.style.left = "-150px";
      else car.style.left = pos + 2 + "px";
    }, 50);
    console.log(car);
  }
}
</script>

<style scoped>
.delivery {
  min-height: 400px;
  background-image: url("../assets/delivery-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-block: 50px;
  position: relative;
}

h2 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    color: #303543;
    text-align: center;
    margin-bottom: 40px;
}
p {
  font-size: 14px;
  margin-bottom: 20px;
}
.w-500 {
  font-weight: 500;
  display: inline;
}
.car-div {
  position: relative;
  margin-top: 40px;
}
.car {
  height: 70px;
  width: 100px;
  background-image: url("../assets/car.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 0;
}
hr {
  position: absolute;
  size: 1px;
  width: 100vw;
  top: 65px;
}
.div-btn {
  display: flex;
  justify-content: center;
  margin-top: 140px;
}
</style>
