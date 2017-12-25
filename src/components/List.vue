<template>
  <div> 
  	<div class="menu_list_top">
  		<div class="cate_list">
  			<router-link to="/list/hot">热销</router-link>
  			<router-link to="/list/sale">折扣</router-link>
  			<router-link to="/list/mlhx">麻辣海鲜</router-link>
  			<router-link to="/list/sdtw">麻辣四大天王</router-link>
  			<router-link to="/list/xllx">香辣小龙虾</router-link>
  			<router-link to="/list/srlx">蒜蓉小龙虾</router-link>
  			<router-link to="/list/mlyh">麻辣鸭货</router-link>
  			<router-link to="/list/chao">炒菜</router-link>
  			<router-link to="/list/liang">凉菜</router-link>
  			<router-link to="/list/race">米饭</router-link>
  			<router-link to="/list/drink">饮料</router-link>
  		</div>
  		<router-view></router-view>
  	</div>
  	<div class="menu_list_bottom">
  		<div class="shop_num" :class="{shoped:shoped}"><!-- shoped -->
  			<span>{{num}}</span>
  		</div>
  		<div class="price_total" :class="{shoped_total:shoped}"><!-- shoped_total -->
  			<span>&yen;{{totalprice}}</span>
  			<b>另需配送费&yen;19元</b>
  		</div>
  		<div class="trans_price">
  			&yen;{{start_total}}起送
  		</div>
  		<button class="go_pay" v-show="trans">去结算</button>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data(){
  	return {
  		start_total:500
  	}
  },
  computed:{
  	num(){
  		return this.$store.state.buynum;
  	},
  	totalprice(){
  		return this.$store.state.totalprice;
  	},
  	shoped(){
  		return this.num>0;
  	},
  	trans(){
  		return this.totalprice>this.start_total;
  	}
  }
}

</script>

<style scoped>
	.menu_list_bottom{
		background: #404040;
		height:0.84rem;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding-left: 1.38rem;
		z-index: 2;
	}
	.shop_num{
		position: absolute;
		left: 0.15rem;
		bottom: 0.1rem;
		width:0.9rem;
		height: 0.9rem;
		border-radius: 50%;
		background: #e7e7e7 url(../assets/car_empty.png) no-repeat center center;
		background-size: 0.5rem auto;
	}
	.shop_num span{
		position: absolute;
		right: 0;
		top: 0;
		width: 0.28rem;
		height: 0.28rem;
		line-height: 0.28rem;
		text-align: center;
		font-size:0.2rem;
		background: #fb4d43;
		border-radius: 50%;
		color: #FFF;
		display: none;
	}
	.shoped{
		background-color: #ffd161;
		background-image: url(../assets/car_full.png);
	}
	.shoped span{
		display: block;
	}
	.price_total b{
		display: block;
		font-weight: normal;
		font-size: 0.22rem;
		line-height: 0.84rem;
	}
	.price_total span{
		display: block;
		font-size:0.26rem;
		color: #FFF;
		line-height: 0.52rem;
		display: none;
	}
	.shoped_total span{
		display: block;
	}
	.shoped_total b{
		font-size:0.18rem;
		line-height: 0.2rem;
	}
	.trans_price{
		position: absolute;
		right: 0;
		top: 0;
		padding-right: 0.56rem;
		height: 0.84rem;
		line-height: 0.84rem;
		overflow: hidden;
		font-size: 0.26rem;
		color:#b6b6b6;
	}
	.go_pay{
		width: 2.13rem;
		height: 0.84rem;
		position: absolute;
		right: 0;
		top: 0;
		background: #ffd161;
		font-size:0.26rem;
		color: #000526;
	}
	.menu_list_top{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding-bottom: 0.84rem;
		padding-top: 0.72rem;
	}
	.cate_list{
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 1.42rem;
		padding-bottom: 0.84rem;
		padding-top: 0.72rem;
		overflow-y: scroll;
		background: #f4f4f4;
		z-index: 2;
	}
	.cate_list a{
		display: block;
		font-size:0.2rem;
		color:#535353;
		line-height: 0.26rem;
		padding:0.27rem 0.16rem;
		border-bottom: solid 1px #e4e4e4;
	}
	.cate_list a.router-link-exact-active{
		background: #FFF;
	}
</style>
