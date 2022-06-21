<template>
  <footer>
    <div class="forum">
      <span class="bg-color"> SEND A MESSAGE</span>
      <h3>Get in <span class="bg-color-ft">Touch</span></h3>
      <span>We will respond to your message as soon as possible.</span>
      <form action="">
        <div>
          <input type="text" placeholder="Name">
          <input type="email" placeholder="Email">
        </div>
        <div>
          <input type="text" placeholder="Phone">
          <select name="info">
            <option value="more">more info</option>
          </select>
        </div>
        <div>
          <textarea name="messaggio" cols="30" rows="10"></textarea>
        </div>
       
      </form>
       <a class="getintouch btn-ft" href="#">SEND</a>
    </div>
    <div class="info">
      <h5>Example Inc.</h5>
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </span><br>
      <span>Lorem ipsum dolor sit amet consectetur.</span>
      <ul>
        <li> <a href="#">
            <font-awesome-icon class="cerchio-ft" icon="fa-solid fa-envelope" /> helllo@examle.com
          </a></li>
        <li><a href="#">
            <font-awesome-icon class="cerchio-ft" icon="fa-solid fa-phone" /> +1(305)1234-56778
          </a></li>
        <li><a href="#">
            <font-awesome-icon class="cerchio-ft" icon="fa-solid fa-location-dot" /> Main Avenue, 997
          </a></li>

      </ul>
      <a class="readmore btn-ft" href="#">VIEW MAP</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterNexgen',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



footer {
  display: flex;
  justify-content: space-around;
  background-color: #111117;
  color: white;
  padding: 50px;

  .bg-color {
    
    color: #097a7c;
    

  }

  h3 {
    font-size: 50px;
    font-weight: bold;

    .bg-color-ft {
      background-color: #097a7cc5;
      border-radius: 5px;
    }
  }
  form div input,select{
    margin:  5px;
    background-color: #2f2f2fde;
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    color: white;
    
  }
  form div textarea{
    margin: 5px;
    background-color: #2f2f2fde;
    width: 605px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    color: white;
    
  }
  .btn-ft{
    margin-top: 10px;
  }

  .info {

    ul li {
      display: block;
      padding: 10px;
      .cerchio-ft{
        background-color:#097a7c8a;
    color: #097a7c;
    padding: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50px;
      }

      a {
        text-decoration: none;
        color: #097a7c;
        vertical-align: middle;
      }
    }
  }
}
@import '../assets/BtnGet.scss';
@import '../assets/BtnMore.scss';
</style>
