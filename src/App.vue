 <template>
	<div id="app">
		<div class="nav">
			<router-link to="/list">点菜</router-link>
			<router-link to="/comm">评价</router-link>
			<router-link to="/desc">详情</router-link>
		</div>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name:'App'
}
</script>

<style>
#app{
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background: #fafafa;
}
.nav{
	border-bottom: solid 1px #dfdfdf;
	overflow: hidden;
	height: 0.72rem;
	z-index: 2;
	position: relative;
	background: #fafafa;
}
.nav a{
	float: left;
	width: 33.333333%;
	height: 0.72rem;
	line-height: 0.72rem;
	text-align: center;
	font-size: 0.24rem;
	color:#3e3e3e;
	position: relative;
	cursor: none;
}
.nav a:after{
	content: "";
	position: absolute;
	left: 50%;
	margin-left: -0.25rem;
	bottom: 0;
	width: 0.5rem;
	height: 3px;
	background: #ff9300;
	display: none;
}
.nav a.router-link-active{
	color:#ff9300;
}

.container{
	position: absolute;
	width: 100%;
	height: 100%;
	padding-top: 0.72rem;
	left: 0;
	top: 0;
	z-index: 1;
}
</style>
