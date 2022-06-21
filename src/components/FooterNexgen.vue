<template>
  <footer>
    <div class="forum">
      <span> SEND A MESSAGE</span>
      <h3>Get in <span>Touch</span></h3>
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
        <a class="getintouch" href="#">SEND</a>
      </form>
    </div>
    <div class="info">
      <h5>Example Inc.</h5>
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        </span><br>
      <span>Lorem ipsum dolor sit amet consectetur.</span>
      <ul>
        <li> <a href="#">
            <font-awesome-icon  icon="fa-solid fa-envelope" /> helllo@examle.com
          </a></li>
        <li><a href="#">
            <font-awesome-icon icon="fa-solid fa-phone" /> +1(305)1234-56778
          </a></li>
        <li><a href="#">
            <font-awesome-icon icon="fa-solid fa-location-dot" /> Main Avenue, 997
          </a></li>

      </ul>
      <a class="readmore" href="#">VIEW MAP</a>
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
@import '../assets/BtnGet.scss';
@import '../assets/BtnMore.scss';
@import '../assets/cerchio.scss';

footer {
  display: flex;
  justify-content: space-around;
  background-color: #111117;
  color: white;
  padding: 50px;

  .info {
    // flex-basis: 50%;
    // padding: 20px;

    ul li {
      display: block;
      padding: 10px;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>
