import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from './components/Nav.vue'
import PlaygroundBtn from './components/PlaygroundBtn.vue'
import Whistles from './components/Whistles.vue'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Services from './components/Services.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Home },
	{ path: '/About', component: About },
	{ path: '/Contact', component: Contact },
	{ path: '/Services', component: Services }
];

const router =  new VueRouter({
	routes: routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})