<template>
<div class="card-cont">
        <img :src="actionObjet.copertina" alt="copertina">
        <h5>{{actionObjet.titolocard}}</h5>
        

    </div>
 
  
</template>

<script>

export default {
  name: 'CardAction',
  props:{
    actionObjet:Object
   }
  

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.card-cont{
  
     flex-basis:calc( (100% / 3) - 5px );
     justify-self: center;
     padding: 20px;
     text-align: center;
     
      
     
    img{
      
       
    text-align: center;
     
   
    
    
    max-width: 300px;
    
    border-radius: 10px;
    border: none;
   }
   h5{
//    position: absolute;
//     bottom: 60px;
    color: white;
   }
}
</style>
