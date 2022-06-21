<template>
  <main>
    <!-- ciclo card rami -->
    <div class="card-container">
      <MyCard v-for="(item, index) in listaCard " :key="index" :cardObjet="item" />
    </div>
    <!-- sezione company -->
    <section class="company">
      <div class="company-text">
        <span class="color-green">ABOUT THE NETWORK</span>
        <h2><span class="bg-color" >The</span> Company</h2>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime reiciendis harum ducimus, ipsum iusto
          deserunt obcaecati necessitatibus labore quam quia? Culpa facilis nobis sed tempore incidunt.</span>
        <div class="company-card">
          <div>
            <h4 class="color-green">0</h4>
            <h3>Employees</h3>
            <span>Lorem, ipsum dolor sit amet. </span>
          </div>
          <div>
            <h4 class="color-green">0</h4>
            <h3>Partners</h3>
            <span>Lorem, ipsum dolor sit amet. </span>
          </div>
          <div>
            <h4 class="color-green"> 0</h4>
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
    <section class="action-project">
      <div class="titolo-sezione">
        <span class="color-green">WE DO MORE FOR EVERYONE</span>
        <h2>Action & <span class="bg-color-proj">Projects</span></h2>
      </div>
      <ul>
        <li><a href="#">ALL</a></li>
        <li><a href="#">ISTITUTIONAL</a></li>
        <li><a href="#">SOCIAL</a></li>
        <li><a href="#">EVENTS</a></li>
        <li><a href="#">INNOVATION</a></li>
        <li><a href="#">ENVIRONMENT</a></li>
        <li><a href="#">TECHNOLOGY</a></li>
      </ul>
      <div class="card-container-action">

        <CardAction v-for="(item, index) in CardActionProject" :key="index" :actionObjet="item" />
      </div>



    </section>

    <!-- sezione process management -->
    <section class="process-magement">
      <div class="titolo-sezione">
        <span class="color-green">HOW IT WORKS IN PRACTICE</span>
        <h2><span class="bg-color">Process</span> Management</h2>
        <span>we work with innovative methodologies to ensure that the entire reformatting process is done <br> from
          start to finish as planned.</span>
      </div>
      <ul >
        <li>
          <h4 class="cerchio">01</h4>
          <h3>collection of information</h3>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <h4 class="cerchio">02</h4>
          <h3>Strategic Plannig</h3>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <h4 class="cerchio">03</h4>
          <h3>Assignment of responsibilities</h3>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <h4 class="cerchio">04</h4>
          <h3>Formatting process</h3>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
        <li>
          <h4 class="cerchio">05</h4>
          <h3>continuity formalization</h3>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </li>
      </ul>
    </section>

    <!-- sezione feedback -->
    <section class="card-container">
      <div class="titolo-sezione feedback">
        <span class="color-green">CUSTOMER TESTIMONIALS</span>
        <h2>Trusted <span class="bg-color">feedback</span></h2>
        <span>we work intensively in serach of ideals that can add up in the lives of our customers. this is what <br>
          moves use and we are grateful for the recognition.</span>
      </div>
      <CardFeedback v-for="(item, index) in cardFeedback" :key="index" :cardFeed="item" />

    </section>

  </main>
</template>

<script>
import MyCard from '@/components/MyCard.vue'
import CardFeedback from '@/components/CardFeedback.vue'
import CardAction from '@/components/CardAction.vue'


export default {
  name: 'MyContenuti',
  components: {
    MyCard,
    CardFeedback,
    CardAction
  },
  data() {
    return {
      listaCard: [
        {
          icon: "fa-solid fa-user-group",
          title: "Human Capital",
          description: "Humanizing business: Harness the power of technology to improvethe way people work."

        },
        {
          icon: "fa-solid fa-chart-column",
          title: "Core Business",
          description: "It takes innovative approaches to transfrom, modernize, and run existing platforms."

        },
        {
          icon: "fa-solid fa-gauge-high",
          title: "Performace",
          description: "Archiving maximum impact ad value from investments in finace and supply chain."

        },
      ],
      cardFeedback: [
        {
          imglogo: require("../assets/img/logo-1.png"),
          feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, perspiciatis eaque sapiente ratione nam numquam vero sunt nemo! Accusamus quisquam molestias officiis dolorum praesentium sint accusantium nisi perferendis ratione."
        },
        {
          imglogo: require("../assets/img/logo-2.png"),
          feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, perspiciatis eaque sapiente ratione nam numquam vero sunt nemo! Accusamus quisquam molestias officiis dolorum praesentium sint accusantium nisi perferendis ratione."
        },
        {
          imglogo: require("../assets/img/logo-3.png"),
          feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis, perspiciatis eaque sapiente ratione nam numquam vero sunt nemo! Accusamus quisquam molestias officiis dolorum praesentium sint accusantium nisi perferendis ratione."
        }
      ],
      CardActionProject: [
        {
          categoria: "ISTITUTIONAL",
          copertina: require("../assets/img/project-1.jpg"),
          titolocard: "Accademic professional program in social media"

        },
        {
          categoria: "SOCIAL",
          copertina: require("../assets/img/project-2.jpg"),
          titolocard: "President's speach at the annual meeting"

        },
        {
          categoria: "EVENT",
          copertina: require("../assets/img/project-3.jpg"),
          titolocard: "International business trip in Shanghai"

        },
        {
          categoria: "INNOVATION",
          copertina: require("../assets/img/project-4.jpg"),
          titolocard: "Technology workshop with education theme"

        },
        {
          categoria: "ENVIRONMENT",
          copertina: require("../assets/img/project-5.jpg"),
          titolocard: "Donation of clothes and food to the parrner NGO"

        },
        {
          categoria: "TECHNOLOGY",
          copertina: require("../assets/img/project-6.jpg"),
          titolocard: "Confraternization of the procurement team"

        },

      ]


    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2{
  font-size: 50px;
  font-weight: bold;
}
.bg-color{
   background-color:#daeced;
    color: #097a7c;
    border-radius: 5px;
    
}
.bg-color-proj{
   background-color:#097a7cc5;
   border-radius: 5px;
}
.card-container {
  display: flex;
  background-color: #eef4ed;
  justify-content: center;
  padding: 150px;
  gap: 50px;
  flex-wrap: wrap;

}

.company {
  display: flex;
  justify-content: center;

  .company-text {
    text-align: center;
    padding: 100px;

    .company-card {
      display: flex;
      justify-content: space-around;
      padding: 20px;

      img{
        width: 50%;
        object-fit: contain;
      }
    }

    .bottoni {
      margin: 10px;
      padding: 20px;

      a {
        margin: 5px;

      }

      .color-g {
        color: #097a7c
      }
    }

  }

}
.process-magement{
  ul{
     display: flex;
    justify-content: center;
    li{
       display: inline-block;
      padding-left: 20px;
      text-align: center;
      padding: 20px;
  }
  } 
}

.action-project {
  color: white;
  background-color: black;

  ul {
    display: flex;
    justify-content: center;

    li {
      display: inline-block;
      padding-left: 20px;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }


  .card-container-action {
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
    gap: 5px;


  }
}

.titolo-sezione {
  text-align: center;
  padding: 100px;

}

.feedback {
  flex-basis: 100%;
}
.color-green{
  color: #097a7c
}

@import '../assets/BtnGet.scss';
@import '../assets/BtnMore.scss';
@import '../assets/cerchio.scss';
</style>
