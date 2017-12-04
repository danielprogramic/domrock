import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import RelembrarSenha from '@/components/RelembrarSenha'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/dashboard',
      name: 'dashboard',
      component: Hello
    }, {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/relembrar-senha',
      name: 'relembrarSenha',
      component: RelembrarSenha
    },
    {
      path: '*',
      redirect: 'login'
    }
  ],
  mode: 'history'
})