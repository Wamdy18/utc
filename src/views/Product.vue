<template>
  <div class="product-page">
    <Navbar/>
    <!-- <Header/> -->
    <div class="product">
      <div class="container">
        <h2>Каталог товаров > {{ category != null && category.catName != null ? category.catName : "" }} > {{ this.product ? this.product.title : "" }}</h2>
        <h3>{{ product.title }}</h3>
        <div class="flex mt-30">
          <img :src="`../../products/${product.img}`" class="product-img" alt="">
          <div class="right">
            <p>{{ product.description }}</p>
            <hr>
            <span class="under-hr">Оставьте заявку и мы вышлем Вам коммерческое предложение</span>
            <div class="btn-div">
              <MainButtonRequest @click="showRequestForm">Оставить заявку</MainButtonRequest>
            </div>
          </div>
        </div>
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
      
      <!-- <div>{{ product.title }}</div> -->
      <!-- <div>{{ product.description }}</div> -->
  </div>
  <div class="form-sent">
        <span>Заявка отправлена! Ожидайте ответа на почту или звонка на телефон.</span>
    </div>
  </div>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import catalog from '@/data/catalog.json';
import MainButtonRequest from '@/components/mainButtonRequest.vue'
import MainButtonSend from '../components/mainButtonSend.vue'; 


export default {
  name: 'Product',
  components: {
    Navbar,
    Header,
    MainButtonRequest,
    Footer,
    MainButtonSend
  },
  data() {
    return {
      category: null,
      product: null,
      equestFormIsShow: false,
      form: {
          name: '',
          phone: '',
          email: '',
          message: '',
      },
    }
  },
  created() {
    console.log(this.$route.params.categoryId);
    let catId = this.$route.params.categoryId;
    this.category = catalog.catalog.find(cat => cat.catId == Number(catId));
    console.log(this.category);
    let productId = this.$route.params.productId;
    this.product = this.category.items.find(item => item.id == Number(productId));
    console.log(this.product);
  
  },
  mounted() {
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener("click", () => {
      const modal = document.querySelector('.modal');
      const overlayy = document.querySelector('.overlayy');
      modal.classList.remove("active");overlayy.classList.remove("active");
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
            }

            
        }
  }
}
</script>

<style scoped>
.product {
  padding-bottom: 100px;
  padding-top:100px;
  
}
h2 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  color: #303543;
  text-align: center;
  margin-bottom: 20px;
}
h3 {
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 500;
  color: #303543;
  text-align: center;
}
.flex {
  display: flex;
}

.mt-30 {
  margin-top: 30px;
}

img {
    width: 450px;
    height: 250px;
    margin-right: 50px;
}
hr {
  margin-top: 25px;
  border: none;
  border-top: 1px solid rgba(48,52,68,0.5);
  size: 1px;
}
.under-hr {
  margin-top: 5px;
  font-size: 10px;
  font-weight: 600;
  color: black;
}
.btn-div {
  display: flex;
  justify-content: center;
  margin-top: 45px;
}

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
  .flex {
    flex-direction: column;
  }
   img {
    margin-inline: auto;
    margin-bottom: 25px;
   }
}
</style>