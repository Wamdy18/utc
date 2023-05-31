<template>
  <div class="about">
    <div class="container">
        <h2>О нас</h2>
        <div class="about-wrapper">
            <div class="left">
                <div class="fact">
                    <div class="fact-icon fact-icon-1"></div>
                    <div class="fact-info">
                        <span class="fact-info-top">10 лет</span>
                        <span class="fact-info-bottom">Успешной работы на рынке</span>
                    </div>
                </div>
                <div class="fact">
                    <div class="fact-icon fact-icon-2"></div>
                    <div class="fact-info">
                        <span class="fact-info-top">15 офисов</span>
                        <span class="fact-info-bottom">По всей России и странам СНГ</span>
                    </div>
                </div>
                <div class="fact">
                    <div class="fact-icon fact-icon-3"></div>
                    <div class="fact-info">
                        <span class="fact-info-top">1000+</span>
                        <span class="fact-info-bottom">Довольных клиентов</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <p><span class="w-500">ООО “УралТехСтрой”</span> — один из крупнейших в России производителей и поставщиков таких комплектующих, как решетчатый настил, грязезащитная решетка, габионные конструкции, геосинтетические материалы, добавки в бетон, шпалы деревянные.</p>
                <p>К нам обращаются как небольшие клиенты, занимающиеся частной стройкой, так и крупные строительные компании всей страны и СНГ. Мы активно развиваемся и расширяем каталог новыми комплектующими. Нам доверяют, потому что наши конструкции показывают свою прочность на протяжении многих лет.</p>
                <p>Закажите комплектующие для вашего объекта у нас, и вы будете приятно удивлены!</p>
                <div class="about-btn-div">
                    <router-link to="/about" class="about-btn">Подробнее</router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style scoped>
.about {
    padding-block: 50px;
    background-color: #F5F5F5;
}

.about-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.left {

}

h2 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    color: #303543;
    text-align: center;
}
.fact {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.fact-icon {
    width: 60px;
    min-width: 60px;
    height: 60px;
    min-height: 60px;
    background-size: cover;
    background-position: center;
    margin-right: 20px;
}
.fact-icon-1 {
    background-image: url("../assets/about-1.png");
}
.fact-icon-2 {
    background-image: url("../assets/about-2.png");
}
.fact-icon-3 {
    background-image: url("../assets/about-3.png");
}

.fact-info-top {
    font-weight: 500;
    font-size: 16px;
    color: #E89238;
    margin-bottom: 5px;
}
.fact-info-bottom {
    font-weight: 400;
    font-size: 12px;
    color: #303543;
}

.right {
    max-width: 500px;
    margin-left: 50px;
}

.right p {
    margin-bottom: 12px;
    
}
.right p span {
    display: inline;
    font-weight: 500;
}

.about-btn {
    color: #E89238;
    text-align: center;
    border: 1px solid #E89238;
    padding: 10px 40px;
    border-radius: 8px;
    display: inline-block;
    font-size: 12px;
    margin-top: 10px;
    transition: 250ms;
}
.about-btn:hover {
    color: white;
    background-color: #E89238;
}

@media (max-width: 800px) {
    .about-wrapper {
        flex-direction: column;
        margin-top: 20px;
    }
    .right {
        margin-left: 0;
        margin-top: 20px;
    }
    .left {
        /* display: flex; */
        margin-inline: auto;
    }
    .about-btn-div {
        display: flex;
        justify-content: center;
    }
}
</style>