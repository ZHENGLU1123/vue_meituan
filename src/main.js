// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import './js/rem.js'
import './scss/reset.scss'
import store from './store'

Vue.use(VueResource)

let vm = new Vue({
	store
});
vm.$http.get('/static/data/data.txt').then(({bodyText})=>{
  	vm.$store.state.foodlist = JSON.parse(bodyText);
	new Vue({
	  router,
	  store,
	  template: '<App/>',
	  components: {	App },
	  beforeCreate(){
	  	this.$http.get('/static/data/data.txt').then(({bodyText})=>{
	  		this.$store.state.foodlist = JSON.parse(bodyText);
	  	});
	  }
	}).$mount('#app')
});
