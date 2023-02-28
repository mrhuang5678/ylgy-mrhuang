<template>
	<view>
		<uni-card :is-shadow="false">
			<uni-collapse accordion>
				<uni-collapse-item title="使用说明">
					<uni-list-item showArrow title="手机抓包" />
					<uni-list-item showArrow title="电脑抓包" />
				</uni-collapse-item>
				<uni-collapse-item title="关于我们">
					<uni-list-item showArrow title="免责说明" />
					<uni-list-item showArrow title="加入交流群" />
				</uni-collapse-item>
				<uni-collapse-item title="软件更新">
					<uni-list-item clickable @click="rjxztc" showArrow title="下载地址" />
					<uni-list-item showArrow title="在线更新" />
				</uni-collapse-item>
			</uni-collapse>
		</uni-card>
		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="同意" title="通知" content="欢迎使用 MrHuang!"
					@confirm="rjxzdz" @close="rjxzqx"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// type: 'center',
				msgType: 'success', //标题颜色
				value: ''
			}
		},
		onReady() {},
		methods: {
			rjxztc(type) {
				// this.msgType = type
				this.$refs.alertDialog.open()
			},
			rjxzdz() {
				console.log('点击确认')
			},
			rjxzqx() {
				console.log('点击关闭')
			}
		}
	}
</script>

<style>

</style>
