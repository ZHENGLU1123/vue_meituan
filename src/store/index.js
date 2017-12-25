import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		foodlist:{},
		buyeds:[],
		buynum:0,
		totalprice:0
	},
	mutations:{
		pushfood(state,data){
			for(let i=0;i<state.buyeds.length;i++){
				if(state.buyeds[i]==data){
					state.buyeds.splice(i,1,data);
					return;
				}
			}
			state.buyeds.push(data);
		},
		calc(state){
			state.buynum=0;
			state.totalprice=0;
			for(let i=0;i<state.buyeds.length;i++){
				state.buynum +=state.buyeds[i].num;
				state.totalprice +=state.buyeds[i].num*state.buyeds[i].price;
			}
		}
	},
	actions:{
		pushfood(context,data){
			context.commit('pushfood',data);
			context.commit('calc',data);
		}
	}
});