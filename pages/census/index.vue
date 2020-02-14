<template>
</template>

<script>
</script>

<style>
</style>
<template>
	<view>
		<block v-for="(item ,index) in info" :key="index">
			<uni-card :title="item.title" :thumbnail="'/static/images/charts/'+item.images" bgcolor='#f7f7fa' :images="item.demo"
			 :texts="item.texts" :note="'Tips:'+item.tips" @click="clickCard(item.url)">
			</uni-card>
		</block>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue'
	export default {
		data() {
			return {
				info: [{
						title: '近7日温度',
						texts: '近7日温度。',
						images: 'column2.png',
						url: 'temp7day',
						demo: '/static/images/card/temp.png',
						tips: '点击查看'
					}, {
						title: '近7日湿度',
						images: 'rect.png',
						url: 'hum7day',
						demo: '/static/images/card/hum.png',
						tips: '点击查看'
					}, {
						title: '近30日温度',
						images: 'candle.png',
						url: 'temp30day',
						demo: '/static/images/card/temp.png',
						tips: '点击查看'
					}, {
						title: '近30日湿度',
						images: 'mix2.png',
						url: 'hum30day',
						demo: '/static/images/card/hum.png',
						tips: '点击查看'
					},

					/*
					, {
					    title: '自定义图表背景颜色',
						images:'line.png',
						url:'demo/bgcolor',
						demo:null,
						tips:'更新中'
					},{
					    title: 'tab加swpier中引用多图表',
						images:'bar-contrast.png',
						url:'demo/swpier',
						demo:null,
						tips:'更新中'
					},
					*/
				],
			};
		},
		components: {
			uniCard
		},
		methods: {
			clickCard(url) {
				uni.navigateTo({
					url: url
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #f4f5f6;
	}
</style>
