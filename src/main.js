import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
// import {routerMode} from './config/env'


Vue.use(VueRouter)
const router = new VueRouter({
	routes
})


new Vue({
	router
}).$mount('#app')

