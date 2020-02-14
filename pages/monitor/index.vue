<template>
</template>

<script>
</script>

<style>
</style>
<template>
	<view>
		<block v-for="(item ,index) in info" :key="index">
			<uni-card :title="item.title" :thumbnail="'/static/images/charts/'+item.images" bgcolor='#f7f7fa' :images="item.demo" :texts="item.texts" :note="'Tips:'+item.tips" @click="clickCard(item.url)">
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
				  title: '温度实时监测',
					texts:'温度实时显示',
					images:'column2.png',
					url:'temp',
					demo:null,
					tips:'点击查看示例'
				},{
				  title: '湿度实时监测',
					texts:'湿度实时显示',
					images:'rect.png',
					url:'hum',
					tips:'点击查看示例'
				},
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
page{background-color: #f4f5f6;}
</style>
