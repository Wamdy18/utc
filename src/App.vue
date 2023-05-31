<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
  /*-----------------------------------*\
    #RESET
  \*-----------------------------------*/
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  li {
    list-style: none;
  }
  
  a,
  img,
  data,
  span,
  input,
  button,
  select,
  ion-icon,
  textarea {
    display: block;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img {
    height: auto;
  }
  
  input,
  button,
  select,
  textarea {
    background: none;
    border: none;
    font: inherit;
  }
  
  input,
  select,
  textarea {
    width: 100%;
    outline: none;
  }
  
  button {
    cursor: pointer;
  }
  
  address {
    font-style: normal;
  }
  
  html {
    font-size: 10px;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  
  body {
    background-color: white;
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 400;
    overflow: hidden;
    position: relative;
    min-height: 100vh;
  }
  
  body.loaded {
    overflow: overlay;
  }
  
  body.nav-active {
    overflow: hidden;
  }


.container {
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 15px;
}
</style>
