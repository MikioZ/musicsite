
/* import Search from '../../src/views/header/right/search.vue'
import Home from '../../src/views/header/mid/home.vue'
import Discover from '../../src/views/header/mid/discover.vue'
import Library from '../../src/views/header/mid/library.vue' */



export const router = new VueRouter({
  routes:[
    {
      path:'/search',
      name: 'Search',
      component: () => import('../../src/views/header/right/search.vue'),
    },
    {
      pata:'/home',
      name:'Home',
      component:() => import('../../src/views/header/mid/home.vue'),
    },
    {
      pata:'/discover',
      name:'Discover',
      component:() => import('../../src/views/header/mid/discover.vue'),
    },
    {
      pata:'/library',
      name:'LIbrary',
      component:() => import('../../src/views/header/mid/library.vue'),
    },
  ]
})
