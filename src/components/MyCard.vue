<template>
 <div class="card">
  
 <span class="cerchio"> <font-awesome-icon :icon="cardObjet.icon" /></span>
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
@import '../assets/cerchio.scss';
.card{
     flex-basis:calc(100% / 3);
    text-align: center;
   background-color: #ffffff;
   max-width: 300px;
   padding: 30px;
   border-radius: 10px;
   border: none;
   h4{padding: 20px;}
   
   .subtitle{
    padding: 10px;
   }
}
</style>
