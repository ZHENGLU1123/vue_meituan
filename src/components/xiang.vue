<template>
  <div>
  	<div class="xiangq_top">
  		<div class="bg"><img src="../assets/xlx.png"></div>
  		<div class="xiang_m">
  			<h3>香辣小龙虾（中份）</h3>
  			<p>月售 {{p_liet.shu}}</p>
  			<b>&yen;{{p_liet.price}}</b>
  			<div class="jiage">
  		  			<div class="jian" @click='jian'></div>
  		  			<span>{{p_liet.num}}</span>
  		  			<div class="jia" @click='jia'></div>
  			</div>
  		</div>
  		<div class="xiang_b">
  			<p>商品详情</p>
  			<span>精选优质鲜活小龙虾，只只现刷现做，为您呈现干净美味的小龙虾（根据龙虾个头大小，每盒数量在35-40只）</span>
  		</div>
  		<div class="line"></div>
  		<div class="ping">
  			外卖评价<span>(好评度<i>{{p_liet.haop}}</i>)</span>
  			<b>4条评论 ></b>
  		</div>
  	</div>
  	<div class="bottom_b">
  			已满<span>358元</span>可减<span>38元</span>(在线支付专享)
  	</div>
  	<div class="menu_list_bottom">
  		<div class="shop_num" :class="{shoped:shoped}">
  			<span>{{num}}</span>
  		</div>
  		<div class="price_total" :class="{shoped_total:shoped}">
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
  data(){
  	return {
  		p_liet:{
			shu:74,
			price:89,
			num:10,
			haop:"100%",
			buyed:false
   		},
  		hasBuy:[],
  		start_total:500
  	}
  },
  methods:{
  	jia(){
  		console.log(p_liet);
  		let p_l = p_liet;
  		p_l.num++;
  	},
  	jian(){
  		if(!p_l.num){
  			p_l.num--;
  		}
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.bg img{
	width: 100%;
}
.xiangq_top{
	background: #fff;
	overflow-y:scroll; 
}
.xiang_m{
	padding:0 0.26rem;
	overflow: hidden;
	border-bottom:solid 2px #dedede;		
}
.xiang_m h3{
	font-size: 0.25rem;
	color:#000;
	line-height: 0.86rem;
}
.xiang_m p{
	font-size: 0.2rem;
	color:#8a8a8a;
}
.xiang_m b{
	float: left;
	font-size: 0.3rem;
	color:#fb3f34;
	line-height: 1.15rem;
}
.jiage{
	margin-top:0.35rem;
	float: right;
}
.jiage span{
	float: left;
	font-size: 0.21rem;
	line-height: 0.45rem;
	color:#000000;
	padding:0 0.1rem;
}
.jian{
	float: left;
	border:solid 1px #d4d6da;
	border-radius: 50%;
	width: 0.45rem;
	height: 0.45rem;
	background:url(../assets/jian.png) no-repeat center center;
}
.jia{
	float: left;
	border:solid 1px;
	border-radius: 50%;
	width: 0.45rem;
	height: 0.45rem;
	background:#ffd161 url(../assets/add.png) no-repeat center center;
}
.xiang_b{
	padding:0 0.67rem 0.3rem 0.26rem;
	border-bottom:solid 2px #d8d8d8;
}
.xiang_b p{
	font-size:0.23rem;
	color:#8e8e8e;
	line-height: 0.81rem;
	padding-left:0.11rem;
	position: relative;
}
.xiang_b p:before{
	content: "";
	position: absolute;
	left:0;
	top: 50%;
	margin-top: -0.12rem;
	height: 0.23rem;
	width: 0.05rem;
	background: #ffca49;
}
.xiang_b span{
	display: block;
	margin-top: 0.07rem;
	font-size:0.24rem;
	color:#202020;
	line-height: 0.28rem;
}
.line{
	width: 100%;
	height: 0.18rem;
	background: #f6f6f6;
}
.bottom_b{
	position: absolute;
	height: 0.57rem;
	width: 100%;
	background: #fff1cf;
	text-align: center;
	line-height: 0.57rem;
	bottom:0.87rem;
	left:0;
	font-size:0.18rem;
	color:#43413f;
}
.bottom_b span{
	color:#fa2723;
}
.ping{
	width: 100%;
	height: 0.85rem;
	line-height: 0.85rem;
	padding-left: 0.36rem;
	padding-right: 0.21rem;
	font-size:0.23rem;
	color:#070707;
}
.ping b{
	float: right;
	color:#868686;
	font-weight: normal;
}
.ping span{
	margin-left:0.11rem;
	font-size: 0.19rem;
	color:#9b9b9b;
}
.ping span i{
	font-style: normal;
	color:#e93911;
}
</style>
