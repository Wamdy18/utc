<template>
 <div class="navbar-div">
    <div class="container">
        <ul v-if="desktopScreen">
            <li><router-link to="/" :class="{'active-link' : true}">Главная</router-link></li>
            <li><router-link to="/catalog">Каталог товаров</router-link></li>
            <li><router-link to="/about">О компании</router-link></li>
            <li><router-link to="/delivery">Доставка</router-link></li>
            <li><router-link to="/contacts">Контакты</router-link></li>
        </ul>
        <span class="navbar-toggler" style="color: white" @click="click" v-else></span>
        <div class="overlay" :class="{'active': navbarActive}" @click="navbarActive = !navbarActive"></div>
    </div>
    <div class="navbar" :class="{'active': navbarActive}">
        <button class="close-btn" @click="navbarActive = !navbarActive">
            <span>Х</span>
        </button>
        <ul v-if="!desktopScreen">
            <li><router-link to="/" :class="{'active-link' : true}">Главная</router-link></li>
            <li><router-link to="/catalog">Каталог товаров</router-link></li>
            <li><router-link to="/about">О компании</router-link></li>
            <li><router-link to="/delivery">Доставка</router-link></li>
            <li><router-link to="/contacts">Контакты</router-link></li>
        </ul>
    </div>
 </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            desktopScreen: window.innerWidth > 800,
            navbarActive: false,
        }
    },
    methods: {
        click() {
            console.log('asd');
            this.navbarActive = !this.navbarActive
        }
    }
}
</script>

<style scoped>
.navbar-div {
    background-color: #303444;
    color: rgba(255, 255, 255, 0.5);
    padding-block: 25px;
}
.navbar-div .container {
    display: flex;
    justify-content: end;
}
.navbar-div ul{
    display: flex;
    justify-content: end;
    gap: 40px;
}
.navbar-div ul li a {
    text-transform: uppercase;
    font-weight: 400;
    transition: 0.2s ease all;
}
.navbar-div ul li a:hover {
    color: rgba(255, 255, 255, 1);
}
.router-link-active {
    border-bottom: 1px solid white;
    color: white;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0, 0%, 0%, 0.8);
  z-index: 1;
  transition: 500ms ease;
  pointer-events: none;
  opacity: 0;
}
.overlay.active {
  opacity: 1;
  pointer-events: all;
}

.navbar {
    position: fixed;
    background-color: #303444;
    top: 0;
    left: -360px;
    bottom: 0;
    max-width: 360px;
    width: 100%;
    padding-inline: 30px;
    padding-block-end: 50px;
    overflow-y: auto;
    visibility: hidden;
    z-index: 2;
    transition: 500ms ease;
}
.navbar.active {
    visibility: visible;
    transform: translateX(360px);
}
.navbar-toggler {
    display: block;
    width: 25px;
    height: 25px;
    cursor: pointer;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDcuNzVIM0MyLjU5IDcuNzUgMi4yNSA3LjQxIDIuMjUgN0MyLjI1IDYuNTkgMi41OSA2LjI1IDMgNi4yNUgyMUMyMS40MSA2LjI1IDIxLjc1IDYuNTkgMjEuNzUgN0MyMS43NSA3LjQxIDIxLjQxIDcuNzUgMjEgNy43NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMSAxMi43NUgzQzIuNTkgMTIuNzUgMi4yNSAxMi40MSAyLjI1IDEyQzIuMjUgMTEuNTkgMi41OSAxMS4yNSAzIDExLjI1SDIxQzIxLjQxIDExLjI1IDIxLjc1IDExLjU5IDIxLjc1IDEyQzIxLjc1IDEyLjQxIDIxLjQxIDEyLjc1IDIxIDEyLjc1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIxIDE3Ljc1SDNDMi41OSAxNy43NSAyLjI1IDE3LjQxIDIuMjUgMTdDMi4yNSAxNi41OSAyLjU5IDE2LjI1IDMgMTYuMjVIMjFDMjEuNDEgMTYuMjUgMjEuNzUgMTYuNTkgMjEuNzUgMTdDMjEuNzUgMTcuNDEgMjEuNDEgMTcuNzUgMjEgMTcuNzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");
    background-position: center;
    background-size: contain;
}
.navbar ul {
    margin-top: 20px;
    flex-direction: column;
    gap: 0;
}
.navbar ul li a{
    padding: 20px;
    border-bottom: rgba(255, 255, 255, 0.5) 1px solid;
}
.navbar ul li:first-child a{
    padding: 20px;
    border-top: rgba(255, 255, 255, 0.5) 1px solid;
}
.navbar ul li a{
    padding: 20px;
}
.close-btn {
    color: white;
    border: 1px solid currentColor;
    border-radius: 50%;
    margin-inline-start: auto;
    margin-block: 30px 20px;
    width: 30px;
    height: 30px;
}
</style>