<template>
 <div class="card">
  
 <span class="icona"> <font-awesome-icon :icon="cardObjet.icon" /></span>
 <h4>{{cardObjet.title}}</h4>
 <span class="subtitle">{{cardObjet.description}}</span>

 </div>
 
  
</template>

<script>

export default {
  name: 'MyCard',
  props:{
    cardObjet:Object
   }
  

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
     flex-basis:calc(100% / 3);
    text-align: center;
   background-color: #ffffff;
   max-width: 300px;
   padding: 30px;
   border-radius: 10px;
   border: none;
   .icona{
    background-color:#daeced;
    color: #097a7c;
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin: 10px;
   }
   .subtitle{
    padding: 10px;
   }
}
</style>
