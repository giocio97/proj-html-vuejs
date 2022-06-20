import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 import { faUser } from '@fortawesome/free-regular-svg-icons'
 import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
 import { faChartColumn } from '@fortawesome/free-solid-svg-icons'
 import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons'
 import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
 


 
 



// /* add icons to the library */
library.add(faUser,faUserGroup,faChartColumn, faGaugeHigh, faClock,faFacebookF, faTwitter, faLinkedinIn )



/* add font awesome icon component */
 Vue.component('font-awesome-icon', FontAwesomeIcon )



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
