<template>
 <footer>
  <div class="forum">
    <span>  SEND A MESSAGE</span>
    <h3>Get in <span>Touch</span></h3>
    <span>We will respond to your message as soon as possible.</span>
    <form action="">
      <div>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
      </div>
      <div>
        <input type="text" placeholder="Phone">
        <select name="info"></select>
      </div>
      <div>
        <textarea name="messaggio"  cols="30" rows="10"></textarea>
      </div>
      <a class="getintouch" href="#">SEND</a>
    </form>
  </div>
  <div class="info">
    <h5>Example Inc.</h5>
    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A enim, quia optio, minima ab dignissimos, odio perspiciatis deleniti inventore magnam officia ullam repellendus expedita molestias! Architecto amet inventore numquam aliquid!</span><br>
    <span>Lorem ipsum dolor sit amet consectetur.</span>
    <ul>
      <li><a href="#">telephone</a></li>
      <li><a href="#">Email</a></li>
      <li><a href="#">luogo</a></li>

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
footer{
  display: flex;
  justify-content: center;
  background-color: #111117;
  color: white;
  padding: 50px;
  .info{
    flex-basis: 50%;
    padding: 20px;
  }
  
  
}

</style>
