<template>
 <div class="card">
 <img :src="cardFeed.imglogo" alt="logo">
 <p class="subtitle">{{cardFeed.feedback}}</p>

 </div>
 
  
</template>

<script>

export default {
  name: 'CardFeedback',
  props:{
    cardFeed:Object
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
  
   .subtitle{
    padding: 10px;
   }
}
</style>
