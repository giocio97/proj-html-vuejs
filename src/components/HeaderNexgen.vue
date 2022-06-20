<template>
 <div>
  <header>
    <span> <font-awesome-icon icon="fa-solid fa-clock" /> Open Hours: Mon - Sat - 9:00 - 18:00</span>
  
    <div>
     <ul>
        <li> <a href="#">email</a></li>
        <li><a href="#">telephone</a></li>
         <li><a href="#"> <font-awesome-icon icon="fa-brands fa-facebook-f" /> </a></li>
          <li><a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a></li>
           <li><a href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a></li>
         
     </ul>
    

    </div>
      
  

 </header>
 <JumboTrone/>
 
 </div>
 
  
</template>

<script>
import JumboTrone from '@/components/JumboTrone.vue'
export default {
  name: 'HeaderNexgen',
  components: {
   JumboTrone
},
  props:{
    linkArray:Object
  }

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header{
  background-color: #24343c;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-around;

  ul li {display: inline-block;
        margin-left: 5px;
        a{
          text-decoration: none;
          color: white;
        }
  }
}
</style>
