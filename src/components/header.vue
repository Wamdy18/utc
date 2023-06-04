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
            <SubmainRoundButton @click="showPhoneForm">Заказать звонок</SubmainRoundButton>
            <MainRoundButton @click="showRequestForm">Оставить заявку</MainRoundButton>
        </div>

        <div class="modal">
            <div class="overlayy"></div>
            <div class="modal-content">
                <div class="close-modal">
                  <span class="line"></span>
                  <span class="line2"></span>
                </div>
                <div class="modal-padding">
                    <h4>Оставить заявку</h4>
                    <form action="" id="requestForm" onsubmit="return false;">
                        <div class="row">
                            <span>ФИО</span>
                            <input type="text" autocomplete="off" placeholder="Укажите ваше ФИО" v-model="form.name">
                        </div>
                        <div class="row">
                            <span>Телефон</span>
                            <input type="text" autocomplete="off" placeholder="Укажите ваш номер телефона" v-model="form.phone">
                        </div>
                        <div class="row">
                            <span>Почта</span>
                            <input type="text" autocomplete="off" placeholder="Укажите вашу почту" v-model="form.email">
                        </div>
                        <div class="row">
                            <span>Почта</span>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Напишите комментарий, если необходимо"  v-model="form.message"></textarea>
                            <span class="tooltip">
                                В сообщение Вы можете указать, какой товар Вам необходим. В течение дня Вам поступит звонок или придет ответное письмо на почту.
                            </span>
                            <div class="form-btn">
                                <MainButtonSend @clicked="sendRequest('request')">Отправить</MainButtonSend>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal-phone">
            <div class="overlayy-phone"></div>
            <div class="modal-content">
                <div class="close-modal">
                  <span class="line"></span>
                  <span class="line2"></span>
                </div>
                <div class="modal-padding">
                    <h4>Заказать звонок</h4>
                    <form action="" id="phoneForm" onsubmit="return false;">
                        <div class="row">
                            <span>ФИО</span>
                            <input type="text" autocomplete="off" placeholder="Укажите ваше ФИО" v-model="formPhone.name">
                        </div>
                        <div class="row">
                            <span>Телефон</span>
                            <input type="text" autocomplete="off" placeholder="Укажите ваш номер телефона" v-model="formPhone.phone">
                        </div>
                        <div class="row">
                            <div class="form-btn">
                                <MainButtonSend @clicked="sendRequest('phone')">Отправить</MainButtonSend>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

            <!-- <div class="modal">
                <div class="modal-content">
                    asd
                </div> 
            </div> -->
    </div>
  </div>
    <div class="form-sent">
        <span>Заявка отправлена! Ожидайте ответа на почту или звонка на телефон.</span>
    </div>
</div>
</template>

<script>
import Contact from './contact.vue';
import MainRoundButton from './mainRoundBtn.vue';
import SubmainRoundButton from './submainRoundBtn.vue';
import MainButtonSend from './mainButtonSend.vue'; 

export default {
    name: 'Header',
    components: {
        Contact,
        MainRoundButton,
        SubmainRoundButton,
        MainButtonSend
    },
    data() {
        return {
            phoneFormIsShow: false,
            requestFormIsShow: false,
            form: {
                name: '',
                phone: '',
                email: '',
                message: '',
            },
            formPhone: {
                name: '',
                phone: ''
            }
        }
    },
    mounted() {
        const closeModals = document.querySelectorAll('.close-modal');
        const closeModal1 = closeModals[0];
        const closeModal2 = closeModals[1];

        closeModal1.addEventListener("click", () => {
        const modal = document.querySelector('.modal');
        const overlayy = document.querySelector('.overlayy');
        const modal2 = document.querySelector('.modal-phone');
        const overlayy2 = document.querySelector('.overlayy-phone');
        console.log(modal2);
        console.log(overlayy2);

        
        modal.classList.remove("active");overlayy.classList.remove("active");
        modal2.classList.remove("active");overlayy2.classList.remove("active");
        });

        closeModal2.addEventListener("click", () => {
        const modal = document.querySelector('.modal');
        const overlayy = document.querySelector('.overlayy');
        const modal2 = document.querySelector('.modal-phone');
        const overlayy2 = document.querySelector('.overlayy-phone');
        console.log(modal2);
        console.log(overlayy2);

        
        modal.classList.remove("active");overlayy.classList.remove("active");
        modal2.classList.remove("active");overlayy2.classList.remove("active");
        });


        
    },
    methods: {
        showRequestForm() {
            this.phoneFormIsShow = true;
            console.log('asd');
            const modal = document.querySelector('.modal');
            const overlayy = document.querySelector('.overlayy');
            modal.classList.add("active");
            overlayy.classList.add("active");
            console.log(overlayy);
            overlayy.addEventListener("click", () => {modal.classList.remove("active");overlayy.classList.remove("active");});
        },
        showPhoneForm() {
            this.requestFormIsShow = true;
            console.log('asd');
            const modal = document.querySelector('.modal-phone');
            const overlayy = document.querySelector('.overlayy-phone');
            modal.classList.add("active");
            overlayy.classList.add("active");
            console.log(overlayy);
            overlayy.addEventListener("click", () => {modal.classList.remove("active");overlayy.classList.remove("active");});
        },
        sendRequest(type) {
            const TOKEN = "5724321490:AAGa_DkgwAlGOaC6XyMXnjRJyjNuOvxmLwk";
            const CHAT_ID = "-1001923492188";
            const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

            const form = document.getElementById('requestForm');
            const formPhone = document.getElementById('phoneForm');

            if (type == 'request') {
                const messageSentDiv = document.querySelector('.form-sent');

                let message = `<b>Заявка с сайта</b>\n\n`;
                    message += `<b>Отправитель: </b>${this.form.name}\n`;
                    message += `<b>Номер телефона: </b>${this.form.phone}\n`;
                    message += `<b>E-mail: </b>${this.form.email}\n\n`;
                    message += `<b>Сообщение:</b>\n${this.form.message}`;

                    this.axios.post(URI_API, {
                        chat_id: CHAT_ID,
                        parse_mode: 'html',
                        text: message
                    }).then((res) => {
                        this.form.name = "";
                        this.form.phone = "";
                        this.form.email = "";
                        this.form.message = "";
                        
                        this.requestFormIsShow = false;
                        const modal = document.querySelector('.modal');
                        const overlayy = document.querySelector('.overlayy');
                        modal.classList.remove("active");
                        overlayy.classList.remove("active");
                        messageSentDiv.style.display = 'block';
                        setInterval(() => {
                            messageSentDiv.style.display = 'none';
                        }, 5000);
                    })
            } else {
                const messageSentDiv = document.querySelector('.form-sent');

                let message = `<b>Заказ звонка с сайта</b>\n\n`;
                    message += `<b>Отправитель: </b>${this.formPhone.name}\n`;
                    message += `<b>Номер телефона: </b>${this.formPhone.phone}\n`;

                    this.axios.post(URI_API, {
                        chat_id: CHAT_ID,
                        parse_mode: 'html',
                        text: message
                    }).then((res) => {
                        this.formPhone.name = "";
                        this.formPhone.phone = "";
                        
                        const modal = document.querySelector('.modal-phone');
                        const overlayy = document.querySelector('.overlayy-phone');
                        modal.classList.remove("active");
                        overlayy.classList.remove("active");
                        messageSentDiv.style.display = 'block';
                        setInterval(() => {
                            messageSentDiv.style.display = 'none';
                        }, 5000);
                    })
            }

            
        }
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
/* .modal {
    display: none;
  pointer-events: none;
}
.modal.active {
    display: block;
    position: fixed;
    z-index: 5;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    pointer-events: all;
}
.modal-content {
    width: 200px;
    height: 200px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 6,
} */

.modal, .modal-phone {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    /* background-color: rgba(0,0,0,0.5); */
    pointer-events: none;
    display: none;
    z-index: 5;
}
.modal.active, .modal-phone.active {
    display: block;
}
.overlayy, .overlayy-phone {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    pointer-events: none;
    display: none;
    z-index: 5;
}
.overlayy.active, .overlayy-phone.active {
    pointer-events: all;
    display: block;
}
.modal-content {
    position: fixed;
    z-index: 6;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    pointer-events: all;
}
.modal-padding {
    padding: 50px 65px 40px 65px;
}

h4 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    color: #303543;
    text-align: center;
    margin-bottom: 20px;
}

form .row span {
    font-size: 12px;
    font-weight: 400;
    color: black;
    margin-bottom: 10px;
}
form .row input {
    border: 1px solid #303543;
    padding: 7px 10px;
    min-width: 350px;
}
form .row textarea {
    border: 1px solid #303543;
    padding: 7px 10px;
    min-width: 350px;
    resize: none;
}

form .row {
    margin-bottom: 20px;
}

form .row span.tooltip {
    font-size: 10px;
    font-weight: 500;
    color: rgba(0,0,0,0.5);
    margin-top: 7px;
}

.form-btn {
    display: flex;
    justify-content: center;
}

.close-modal {
  right: 35px;
  top: 25px;
  position: fixed;
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.close-modal span.line {
  width: 20px;
  height: 1px;
  background-color: #303543;
  transform: rotate(45deg);
  position: absolute;
  z-index: 7;
}
.close-modal span.line2 {
  width: 20px;
  height: 1px;
  background-color: #303543;
  transform: rotate(-45deg);
  position: absolute;
  z-index: 7;
}
.form-sent {
    display: none;
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 8;
    width: 300px;
    padding: 20px;
    font-size: 15px;
    border: 1px solid #303543;
    background-color: #303543;
    color: white
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