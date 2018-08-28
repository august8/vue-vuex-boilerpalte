import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../pages/HelloWorld.vue';
import TimeLine from '../pages/TimeLine.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/timeline',
    name: 'TimeLine',
    component: TimeLine,
  },
  ],
});
