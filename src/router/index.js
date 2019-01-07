import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home';
import Seller from '@/components/seller/seller';
import Goods from '@/components/goods/goods';
import Ratings from '@/components/ratings/ratings';
Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {path: '', component: Goods, alias: '/goods'},
        {path: '/seller', component: Seller},
        {path: '/ratings', component: Ratings}
      ]
    }
  ]
});
