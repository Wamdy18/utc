<template>
  <div class="footer">
    <div class="container">
        <div class="footer-flex">
            <router-link to="/">
                <img src="@/assets/logo_footer.png" alt="logo" class="logo">
            </router-link>
            <div class="footer-center">
                <span>Контактная информация:</span>
                <div class="contacts">
                    <ContactFooter>
                        <template v-slot:icon>
                            <img src='@/assets/icons/place.svg' alt="icon">
                        </template>
                        <template v-slot:main>
                            620020, г, Екатеринбург, ул. Начдива Онуфриева, д. 55, пом. 4
                        </template>
                        <template v-slot:submain>
                            Работаем на территории России и стран СНГ
                        </template>
                    </ContactFooter>
                    <ContactFooter>
                        <template v-slot:icon>
                            <img src='@/assets/icons/phone.svg' alt="icon">
                        </template>
                        <template v-slot:main>
                            +7 (967) 639-71-55, +7 (343) 346 71 55
                        </template>
                    </ContactFooter>
                    <ContactFooter>
                        <template v-slot:icon>
                            <img src='@/assets/icons/mail.svg' alt="icon">
                        </template>
                        <template v-slot:main>
                            utstroi@bk.ru
                        </template>
                    </ContactFooter>
                </div>
            </div>
            <div class="footer-right">
                <span>Сайт разработан by <a href="https://wamdy18.github.io/portfolio/">Vladimir Petrov</a></span>
                <span>Copyright (c) ООО “УралТехСтрой”, 2020</span>
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
import ContactFooter from './contactFooter.vue';

export default {
    name: 'Footer',
    components: {
        ContactFooter,
    }
}
</script>

<style scoped>
.footer {
    background-color: #6C718A;
    padding-block: 30px;
    color: white
}
.footer-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer-center {
    font-size: 12px;
    font-weight: 400;
}
.footer-center > span {
    margin-bottom: 20px;
}
.contacts {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.footer-right span:first-child {
    margin-bottom: 5px;
}
.footer-right span a{
    display: inline;
    border-bottom: 1px solid white;
}

@media (max-width: 800px) {
    .footer-flex {
        flex-direction: column;
        gap: 20px;
    }
}
</style>