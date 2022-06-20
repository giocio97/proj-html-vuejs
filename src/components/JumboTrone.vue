<template>
<div class="jumbo">
    <nav>
        <div><span id="nex">NEX</span><span>GEN</span></div>
        <ul>
            <li> <a href="#">HOME</a> </li>
            <li> <a href="#">ABOUT</a> </li>
            <li> <a href="#">PROJECTS</a> </li>
            <li> <a href="#">PROCESS</a> </li>
            <li> <a href="#">TESTIMONIAL</a> </li>
             <li> <font-awesome-icon icon="fa-regular fa-user" />  </li>
            <li> <a class="getintouch" href="#">GET IN TOUCH</a> </li>
        </ul>
    </nav>

    <div class="titolo">
        <span>HUMAN RESOURCES</span>
        <h1>Get More <br> Productivity</h1>
        <span>Plannig, recruitment and selection process and performance evaluation of employees.</span><br>
       <div class="bottoni">
         <a class="getintouch" href="#">GET IN TOUCH</a>
          <a class="readmore" href="#">READ MORE</a>
       </div>

    </div>
    

</div>
</template>

<script>
export default {
  name: 'JumboTrone',
  

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.jumbo{
background-image: url(../assets/img/bg-4.jpg);
opacity: 0.8 ;

height:50vh;


  color: white;
  padding: 10px;
  

  nav{
    display: flex;
  justify-content: space-around;
  padding: 20px;
  #nex{
    background-color:#097a7c7d;
    padding: 10px;
    border-bottom-left-radius: 50%;
     border-top-left-radius: 50%;
     color: #1a948f;
  }
  ul li {display: inline-block;
  padding-left: 20px;
        
        a{
          text-decoration: none;
          color: white;
        }
  }
  }
  .titolo{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    

    .bottoni{
        margin: 10px;
        padding: 20px;
        a{
            margin: 5px;
        }
    }
   
  }
 
    
        @import '../assets/BtnGet.scss';
         @import '../assets/BtnMore.scss';
   
  
}
</style>
