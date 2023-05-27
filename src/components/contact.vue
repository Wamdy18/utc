<template>
    <div class="contact">
        <div class="contact-icon">
            <slot name="icon"></slot>
        </div>
        <div class="contact-info">
            <span class="contact-main">
                <slot name="main"></slot>
            </span>
            <span class="contact-submain">
                <slot name="submain"></slot>
            </span>
        </div>
       
        
    </div>
</template>

<script>
export default {
    name: 'Contact',
    props: {
        img: {
            type: String,
            default: '',
        }
    }
}
</script>

<style scoped>
.contact {
    display: flex;
    align-items: center;
}
.contact-icon {
    width: 30px;
    min-width: 30px;
    height: 30px;
    min-height: 30px;
    border-radius: 50%;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
}
.contact-main {
    font-weight: 500;
    color: #6D718B;
}
.contact-submain {
    font-weight: 400;
    color: rgba(68, 70, 84, 0.5);
    font-size: 8;
}
</style>