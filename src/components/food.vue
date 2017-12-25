<template>
  	<div class="food_list">
  		<div class="food_title">{{food_list.title}}</div>
  		<ul>
  			<li v-for="(val,index) in food_list.foods">
  				<router-link to="/xiang"><img :src="val.imgurl"/></router-link>
  				<h4>{{val.name}}</h4>
  				<p>{{val.desc}}...）</p>
  				<span>月售{{val.sells}}&nbsp;&nbsp;&nbsp;赞{{val.fav}}</span>
  				<b>&yen;{{val.price}}</b>
  				<i>已买:{{val.num}}</i>
  				<button @click='addCar(index)'>&nbsp;</button>
  			</li>
  		</ul>
  		<router-view></router-view> 
  	</div>
  	
</template>

<script>
export default {
	data(){
		return {
			food_list:this.$store.state.foodlist[this.$route.params.id]
		}
	},
	methods:{
		addCar(index){
			let food_data = this.food_list.foods[index];
			food_data.num++;
			this.$store.dispatch('pushfood',food_data);
		}
	},
	watch:{
		'$route'(){
			this.food_list=this.$store.state.foodlist[this.$route.params.id]
		}
	}
}
</script>

<style scoped>
	.food_list{
		left: 0;
		top: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		padding-top: 0.72rem;
		padding-bottom: 0.84rem;
		padding-left: 1.42rem;
		z-index: 1;
		overflow-y: scroll;
		background: #FFF;
	}
	.food_title{
		line-height: 0.62rem;
		height: 0.62rem;
		font-size:0.22rem;
		padding-left: 0.3rem;
		position: relative;
		color: #242424;
	}
	.food_title:before{
		content: "";
		position: absolute;
		left: 0.18rem;
		top: 50%;
		margin-top: -0.09rem;
		height: 0.18rem;
		width: 0.04rem;
		background: #ffca49;
	}
	.food_list ul{
		margin:0 0.2rem 0 0.18rem;
	}
	.food_list ul li{
		padding-left: 1.16rem;
		position: relative;
		margin-bottom: 0.5rem;
	}
	.food_list ul li img{
		position: absolute;
		left: 0;
		top: 0;
		width: 1rem;
		height: auto;
	}
	.food_list ul li h4{
		font-size:0.24rem;
		color: #111111;
		font-weight: bold;
		line-height: 0.26rem;
		padding-bottom: 0.1rem;
	}
	.food_list ul li p{
		font-size: 0.18rem;
		line-height: 0.24rem;
		height: 0.48rem;
		overflow:hidden;
		color: #bababa;
	}
	.food_list ul li b{
		display: block;
		font-size:0.24rem;
		color: #fb4136;
	}
	.food_list ul li button{
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 50%;
		background: #ffd161 url(../assets/add.png) no-repeat center center;
		background-size: 0.22rem auto;
		position: absolute;
		bottom: 0;
		right: 0;
	}
</style>