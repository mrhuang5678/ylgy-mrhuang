<template>
	<view class='index'>
		<view style="margin:10rpx 0;">
			<!-- 跑马灯公告 -->
			<uni-notice-bar show-icon scrollable text="Mr.Huang" />
			</uni-section>
		</view>
		<uni-card>
			<view class="sx-jj">
				<!-- 编辑框 -->
				<uni-easyinput v-model="value1" :placeholderStyle="placeholderStyle" placeholder="请输入">
				</uni-easyinput>
			</view>
			<view class="uni-px-5">
				<!-- 单选按钮 -->
				<uni-data-checkbox v-model="radio1" :localdata="sex"></uni-data-checkbox>
			</view>
			<view class="sx-jj">
				<!-- 提交 -->
				<button type="primary" plain="true" @click="tijiao">提交</button>
			</view>
			<view class="text wb-jz">-- 输出日志 --</view>
			<view>
				<!-- 多文本编辑框 自动高度-->
				<uni-easyinput type="textarea" autoHeight v-model="value2" placeholder="输出日志">
				</uni-easyinput>
			</view>

		</uni-card>
		<view class="db-wb db-gd y-j">
			<text>已连接服务器</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fwq: {
					fwqlj: '已连接服务器',
					fwqwlj: '未连接服务器'
				},
				radio1: 0,//单选按钮
				sex: [{
					text: '第一',//单选按钮
					value: 0
				}, {
					text: '第二',
					value: 1
				}, {
					text: '第三',
					value: 2
				}],
				value1: '',//第一个编辑框
				value2: '',//第二个编辑框
				value: '',
				password: '',
				placeholderStyle: "color:#999999;font-size:14px",
			}
		},
		methods: {
			//提交
			tijiao() {
				
			}
				
		}
	}
</script>

<style>

</style>