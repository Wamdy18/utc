<template>
    <div class="container">
        <div class="header">
    <router-link to="/">
        <img src="@/assets/logo.png" alt="logo" class="logo">
    </router-link>
    <div class="right">
        <div class="contacts">
            <Contact>
                <template v-slot:icon>
                    <img src='@/assets/icons/place.svg' alt="icon">
                </template>
                <template v-slot:main>
                    620020, г, Екатеринбург, ул. Начдива Онуфриева, д. 55, пом. 4
                </template>
                <template v-slot:submain>
                    Работаем на территории России и стран СНГ
                </template>
            </Contact>
            <Contact>
                <template v-slot:icon>
                    <img src='@/assets/icons/phone.svg' alt="icon">
                </template>
                <template v-slot:main>
                    +7 (967) 639-71-55, +7 (343) 346 71 55
                </template>
            </Contact>
            <Contact>
                <template v-slot:icon>
                    <img src='@/assets/icons/mail.svg' alt="icon">
                </template>
                <template v-slot:main>
                    utstroi@bk.ru
                </template>
            </Contact>
        </div>
        <div class="btns">
            <SubmainRoundButton>Заказать звонок</SubmainRoundButton>
            <MainRoundButton>Оставить заявку</MainRoundButton>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import Contact from './contact.vue';
import MainRoundButton from './mainRoundBtn.vue';
import SubmainRoundButton from './submainRoundBtn.vue';

export default {
    name: 'Header',
    components: {
        Contact,
        MainRoundButton,
        SubmainRoundButton
    }
}
</script>

<style scoped>
.header {
    margin-block: 50px;
    display: flex;
    justify-content: space-around;
}
.header .logo {
    margin-top: 20px;
}
.contacts {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.btns {
    display: flex;
    gap: 20px;
    margin-top: 18px;
}

@media (max-width: 800px) {
    .header {
        flex-direction: column;
        margin-block: 15px;
        align-items: center;
    }
    .logo {
        margin-top: 0;
        margin-bottom: 15px;
    }
    .btns {
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
    
}

</style>