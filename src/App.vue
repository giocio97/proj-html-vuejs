<template>
  <div id="app">
    <HeaderNexgen/>
    <MyContenuti/>
    <FooterNexgen/>
  </div>
</template>

<script>
 
 import HeaderNexgen from './components/HeaderNexgen.vue'
 import MyContenuti from './components/MyContenuti.vue'
 import  FooterNexgen from './components/FooterNexgen.vue'


export default {
  name: 'App',
  components: {
  HeaderNexgen,
  MyContenuti,
  FooterNexgen,
},

data(){
  return{
    contacts:[
      {email: "helllo@examle.com",
      telephone:"+1(305)1234-56778"}
    ]
      
    
  }
}
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  
}
</style>
