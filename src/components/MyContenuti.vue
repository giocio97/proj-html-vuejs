<template>
 <main>
  <!-- ciclo card rami -->
    <div class="card-container">
      <MyCard
      v-for="(item, index) in listaCard"
    :key="index"
    :cardObjet="item"
      />
    </div>
    <!-- sezione company -->
    <section class="company">
      <div class="company-text">
        <span>ABOUT THE NETWORK</span>
        <h2><span>The</span> Company</h2>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime reiciendis harum ducimus, ipsum iusto deserunt obcaecati necessitatibus labore quam quia? Culpa facilis nobis sed tempore incidunt.</span>
        <div class="company-card">
          <div>
              <h4>0</h4>
             <h3>Employees</h3>
              <span>Lorem, ipsum dolor sit amet. </span>
          </div>
          <div>
              <h4>0</h4>
             <h3>Partners</h3>
              <span>Lorem, ipsum dolor sit amet. </span>
          </div>
          <div>
              <h4>0</h4>
             <h3>Customers</h3>
              <span>Lorem, ipsum dolor sit amet. </span>
          </div>
        </div>
        <div class="bottoni">
         <a class="getintouch" href="#">GET IN TOUCH</a>
          <a class="readmore color-g" href="#">READ MORE</a>
       </div>

      </div>
      <img src="../assets/img/about-5.jpg" alt="about">
    </section>

<!-- sezione action and project -->
    <section>
      <div class="titolo-sezione">
        <span>WE DO MORE FOR EVERYONE</span>
        <h2>Action & <span>Projects</span></h2>
      </div>
    </section>
    
    <!-- sezione process management -->
    <section>
      <div class="titolo-sezione">
        <span>HOW IT WORKS IN PRACTICE</span>
        <h2><span>Process</span> Management</h2>
        <span>we work with innovative methodologies to ensure that the entire reformatting process is done <br> from start to finish as planned.</span>
      </div>
    </section>

    <!-- sezione feedback -->
    <section class="card-container">
       <div class="titolo-sezione">
        <span>CUSTOMER TESTIMONIALS</span>
        <h2>Trusted <span>feedback</span></h2>
        <span>we work intensively in serach of ideals that can add up in the lives of our customers. this is what <br> moves use and we are grateful for the recognition.</span>
      </div>
      <CardFeedback
       v-for="(item, index) in cardFeedback"
      :key="index"
      :cardFeed="item"

      />
      
    </section>

 </main>
</template>

<script>
import MyCard from '@/components/MyCard.vue'
import CardFeedback from '@/components/CardFeedback.vue'


export default {
  name: 'MyContenuti',
  components:{
    MyCard,
    CardFeedback,
},
 data(){
    return{
        listaCard:[
          {
          icon:"",
          title:"Human Capital",
          description: "Humanizing business: Harness the power of technology to improvethe way people work."  

        },
        {
          icon:"",
          title:"Core Business",
          description: "It takes innovative approaches to transfrom, modernize, and run existing platforms."  

        },
        {
          icon:"",
          title:"Performace",
          description: "Archiving maximum impact ad value from investments in finace and supply chain."  

        },
        ],
        cardFeedback:[
          {
            imglogo:require ("../assets/img/logo-1.png"),
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, perspiciatis eaque sapiente ratione nam numquam vero sunt nemo! Accusamus quisquam molestias officiis dolorum praesentium sint accusantium nisi perferendis ratione."
          },
          {
            imglogo:require  ("../assets/img/logo-2.png"),
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, perspiciatis eaque sapiente ratione nam numquam vero sunt nemo! Accusamus quisquam molestias officiis dolorum praesentium sint accusantium nisi perferendis ratione."
          },
          {
            imglogo:require ("../assets/img/logo-3.png"),
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, perspiciatis eaque sapiente ratione nam numquam vero sunt nemo! Accusamus quisquam molestias officiis dolorum praesentium sint accusantium nisi perferendis ratione."
          }
          ],
    }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-container{
  display: flex;
  background-color: #eef4ed;
  justify-content: center;
  padding: 150px;
  gap: 50px;
  flex-wrap: wrap;
  
}
.company{
  display: flex;
  justify-content: center;
  .company-text{
   text-align: center;
   padding: 100px;
   .company-card{
    display: flex;
    justify-content: center;
    padding: 20px;
   }
  .bottoni{
        margin: 10px;
        padding: 20px;
        a{
            margin: 5px;
            
        }
        .color-g{
          color: #097a7c
        }
    }

  }
  
}
.titolo-sezione{
  text-align: center;
  padding: 100px;
  
}

       @import '../assets/BtnGet.scss';
         @import '../assets/BtnMore.scss';

</style>
