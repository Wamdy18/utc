<template>
  <div class="advantages">
    <div class="container">
        <h2>О нас</h2>
        <div class="adv-row">
            <div class="advantage">
                <div class="adv-icon adv-icon-1"></div>
                <div class="adv-info">
                    <div class="adf-info-top">Низкие цены на большинство позиций</div>
                    <div class="adf-info-bottom">Постоянный мониторинг цен для сохранения конкуретности предложения</div>
                </div>
            </div>
            <div class="advantage">
                <div class="adv-icon adv-icon-2"></div>
                <div class="adv-info">
                    <div class="adf-info-top">Работа с техническими специалистами</div>
                    <div class="adf-info-bottom">Обеспечивает компетентность во всех вопросах производства</div>
                </div>
            </div>
            <div class="advantage">
                <div class="adv-icon adv-icon-3"></div>
                <div class="adv-info">
                    <div class="adf-info-top">Надежная сеть поставщиков</div>
                    <div class="adf-info-bottom">Обеспечивает стабильную работу производства и соблюдение сроков</div>
                </div>
            </div>
        </div>
        <div class="adv-row">
            <div class="advantage">
                <div class="adv-icon adv-icon-4"></div>
                <div class="adv-info">
                    <div class="adf-info-top">Служба поддержки всегда на связи</div>
                    <div class="adf-info-bottom">Мы доступны по любым нашим контактам в рабочее время, и готовы помочь с выбором</div>
                </div>
            </div>
            <div class="advantage">
                <div class="adv-icon adv-icon-5"></div>
                <div class="adv-info">
                    <div class="adf-info-top">Профессиональный штат сотрудников</div>
                    <div class="adf-info-bottom">Гарантирует быстрое обслуживание и компетентность на всех этапах</div>
                </div>
            </div>
            <div class="advantage">
                <div class="adv-icon adv-icon-6"></div>
                <div class="adv-info">
                    <div class="adf-info-top">Идеальный баланс цены и качества </div>
                    <div class="adf-info-bottom">Мы внимательно подходим к выбору ассортимента представленного нами</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Advantages',
}
</script>

<style scoped>
.advantages {
    background-color: #303444;
    padding-top: 50px;
    padding-bottom: 30px;
}

h2 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    color: white;
    text-align: center;
    margin-bottom: 50px;
}

.advantage {
    display: flex;
    width: 33%;
    margin-bottom: 30px;
}

.adv-row {
    display: flex;
    gap: 30px;
}

.adv-icon {
    width: 60px;
    min-width: 60px;
    height: 60px;
    min-height: 60px;
    margin-right: 15px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.adv-icon-1 {
    background-image: url("../assets/prem1.png");
}
.adv-icon-2 {
    background-image: url("../assets/prem2.png");
}
.adv-icon-3 {
    background-image: url("../assets/prem3.png");
}
.adv-icon-4 {
    background-image: url("../assets/prem4.png");
}
.adv-icon-5 {
    background-image: url("../assets/prem5.png");
}
.adv-icon-6 {
    background-image: url("../assets/prem6.png");
}
.adf-info-top {
    color: white;
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 13px;
}
.adf-info-bottom {
    color: #6C728B;
    font-weight: 400;
    margin-bottom: 8px;
    font-size: 11px;
}

@media (max-width: 800px) {
    .adv-row {
        flex-direction: column;
        align-items: center;
    }
    .advantage {
        width: 100%;
        margin-bottom: 0;
    }
    .adv-icon-3 {
        margin-bottom: 30px;
    }
}
</style>