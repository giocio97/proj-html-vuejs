<template>
  <div class="jumbo">
   <div class="black-cont">
     <nav>
      <div><span id="nex">NEX</span><span>GEN</span></div>
      <ul>
        <li> <a href="#">HOME</a> </li>
        <li> <a href="#">ABOUT</a> </li>
        <li> <a href="#">PROJECTS</a> </li>
        <li> <a class="active" href="#">PROCESS</a> </li>
        <li> <a href="#">TESTIMONIAL</a> </li>
        <li>
          <a href="#"> <font-awesome-icon icon="fa-regular fa-user" /></a>
        </li>
        <li> <a class="getintouch" href="#">GET IN TOUCH</a> </li>
      </ul>

      
    </nav>
     <div class="titolo">
      <span class="human">HUMAN RESOURCES</span>
      <h1>Get More <br> <span>Productivity</span> </h1>
      <span>Plannig, recruitment and selection process and performance evaluation of employees.</span><br>
      <div class="bottoni">
        <a class="getintouch" href="#">GET IN TOUCH</a>
        <a class="readmore" href="#">READ MORE</a>
      </div>
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
.jumbo {
  background-image: url(../assets/img/bg-4.jpg);
  height: 100vh;
  color: white;
  
  
  .black-cont{
    background-color: rgba(0, 0, 0, 0.442);
    height: 100%;
  }

  nav {
    display: flex;
    justify-content: space-around;
    padding: 40px;
    

    #nex {
      background-color: #097a7c7d;
      padding: 10px;
      border-bottom-left-radius: 50%;
      border-top-left-radius: 50%;
      color: #1a948f;
    }

    ul li {
      display: inline-block;
      padding-left: 20px;

      a {
        text-decoration: none;
        color: white;
        &:hover{
          color: #097a7c;
        }
      }
      .active{ color: #097a7c;}
    }
  }

  .titolo {

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px;
    h1{
      font-size: 50px;
      
      span{
        background-color: #097a7c;
       
      }
    }
    .human{
      color: #097a7c;
    }


    .bottoni {
      margin: 10px;
      padding: 20px;

      a {
        margin: 5px;
      }
    }

  }


  @import '../assets/BtnGet.scss';
  @import '../assets/BtnMore.scss';


}
</style>
