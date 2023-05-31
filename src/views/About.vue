<template>
  <div class="about-page">
    <Navbar/>
    <Header/>
    
    <div class="about">
      <h2>о компании</h2>
      <div class="container">
        <div class="about-flex">
          <div class="about-item">
            <div class="about-icon about-icon-1"></div>
            <div class="about-h">10 лет</div>
            <div class="about-text">Успешно производим и поставляем комплектующие для строительных объектов во множество городов России и стран СНГ.</div>
          </div>
          <div class="about-item">
            <div class="about-icon about-icon-2"></div>
            <div class="about-h">15 офисов</div>
            <div class="about-text">Именно столько мы имеем, если учитывать территорию всей России и стран СНГ. Прямо сейчас строится еще один.</div>
          </div>
          <div class="about-item">
            <div class="about-icon about-icon-3"></div>
            <div class="about-h">1000+</div>
            <div class="about-text">Клиентов, которые имели опыт работы с нами и остались довольны.  Большая часть из них являются нашими постоянными клиентами.</div>
          </div>
        </div>
      </div>
      <div class="banner"></div>
      <div class="container">
        <p>
          <span class="w-500">ООО “УралТехСтрой”</span> — один из крупнейших в России производителей и поставщиков таких комплектующих, как решетчатый настил, грязезащитная решетка, габионные конструкции, геосинтетические материалы, добавки в бетон, шпалы деревянные.
          <br><br>
          К нам обращаются как небольшие клиенты, занимающиеся частной стройкой, так и крупные строительные компании всей страны и СНГ. Мы активно развиваемся и расширяем каталог новыми комплектующими. Нам доверяют, потому что наши конструкции показывают свою прочность на протяжении многих лет.
          <br><br>
          Закажите комплектующие для вашего объекта у нас, и вы будете приятно удивлены!
        </p>
        <div class="div-btn">
            <MainButton class="m-btn">Перейти в каталог</MainButton>
        </div>
      </div>
    </div>
    
    <Advantages/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'
import Advantages from '@/components/advantages.vue'
import Footer from '@/components/footer.vue'
import MainButton from '@/components/mainButton.vue'

export default {
  name: 'About',
  components: {
    Navbar,
    Header,
    Advantages,
    Footer,
    MainButton
  }
}
</script>

<style scoped>
.about {
  background-color: #F5F5F5;
  padding-top: 50px;
  padding-bottom: 75px;
}
h2 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    color: #303543;
    text-align: center;
    margin-bottom: 40px;
}
.about-flex {
  display: flex;
  gap: 150px;
  margin-bottom: 60px;
}
.about-icon {
  text-align: center;
  width: 111px;
  min-width: 111px;
  height: 111px;
  min-height: 111px;
  background-size: cover;
  background-position: center;
}
.about-icon-1 {
  background-image: url("../assets/about-1.png");
}
.about-icon-2 {
  background-image: url("../assets/about-2.png");
}
.about-icon-3 {
  background-image: url("../assets/about-3.png");
}
.about-item {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-h {
  color: #E89238;
  font-size: 24px;
  margin-bottom: 12px;
  font-weight: 500;
  margin-top: 12px;
}
.about-text {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #303543;
}

.banner {
  width: 100vw;
  height: 300px;
  background-image: url("../assets/about-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 60px;
  margin-bottom: 50px;
}

p {
  font-size: 14px;
}

.w-500 {
  font-weight: 500;
  display: inline;
}

.div-btn {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}


@media (max-width: 800px) {
  .about-flex {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  .about-item {
    width: 50%;
  }
  .banner {
    background-position: -500px;
  }
}
</style>