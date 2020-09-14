<template>
	<div id="home">
		<nav-bar class="home-nav">			<div slot="center">购物街</div>		</nav-bar>
		<home-swiper :banner="banner"/>
		<home-recommend-view :recommend="recommend"/>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import	HomeSwiper from './childrencomponents/HomeSwiper.vue'
	import HomeRecommendView from './childrencomponents/HomeRecommendView.vue'

	import {getHomeMutiData} from 'network/home.js'
	
	export default {
		name: 'Home',
		components : {
			NavBar,
			HomeSwiper,
			HomeRecommendView
		},
		data(){
			return {
					banner : [],
					recommend: []
			}
		},
		// 组件创建完成后发送请求轮播图数据请求
		created(){
			// 请求多个数据
			getHomeMutiData().then(res=>{
				// 保存数据到本地
				this.banner=res.data.banner.list;
				this.recommend=res.data.recommend.list;
			});
		}
	} 
</script>

<style>
	.home-nav {
		background-color: rgb(252, 58, 149);
		color: #fff;
	}
</style>