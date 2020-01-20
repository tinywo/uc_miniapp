<template>
	<view>
		<home v-if="PageCur=='home'"></home>
		<monitor v-if="PageCur=='monitor'"></monitor>
		<census v-if="PageCur=='census'"></census>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/home' + [PageCur=='home'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='home'?'text-green':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="monitor">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/monitor' + [PageCur == 'monitor'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='monitor'?'text-green':'text-gray'">监测</view>
			</view>
			<view class="action" @click="NavChange" data-cur="census">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/census' + [PageCur == 'census'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='census'?'text-green':'text-gray'">统计</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
