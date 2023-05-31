<template>
  <div class="contacts-page">
    <Navbar/>
    <Header/>
    <div class="contacts">
      <div class="container">
        <h2>Наши контакты</h2>
        <span class="contact-info">Адрес: 620020, г, Екатеринбург, ул. Начдива Онуфриева, д. 55, пом. 4</span>
        <span class="contact-info">Номера телефонов: +7 (967) 639-71-55, +7 (343) 346 71 55</span>
        <span class="contact-info">Почта: utstroi@bk.ru</span>
        <div class="socials">
          <a href="#" class="social"><span class="wa"></span></a>
          <a href="#" class="social"><span class="tg"></span></a>
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

export default {
  name: 'Contacts',
  components: {
    Navbar,
    Header,
    Footer
  }
}
</script>

<style scoped>
  .contacts {
    background-color: #F5F5F5;
    padding-block: 50px;
  }

  h2 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    color: #303543;
    text-align: center;
    margin-bottom: 40px;
}
.contacts .contact-info {
  font-size: 14px;
  margin-bottom: 20px;
}
.socials {
  display: flex;
}
.social {
  width: 30px;
  height: 30px;
  background-color: #6C718A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}
.social span {
  width: 15px;
  height: 15px;
  background-position: center;
  background-repeat: no-repeat;
}
.social .wa {
  background-image: url("../assets/icons/social-1.svg");
}
.social .tg {
  background-image: url("../assets/icons/social-2.svg");
}
</style>