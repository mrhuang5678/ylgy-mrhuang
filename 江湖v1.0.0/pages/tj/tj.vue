<template>
	<view class='index'>
		<view style="margin:10rpx 0;">
			<!-- 跑马灯公告 -->
			<uni-notice-bar show-icon scrollable text="Mr.Huang" />
			</uni-section>
		</view>
		<uni-card>
			<view class="sx-jj">
				<uni-easyinput v-model="value" :placeholderStyle="placeholderStyle" placeholder="请输入uid">
				</uni-easyinput>
			</view>
			<view class="sx-jj">
				<uni-easyinput v-model="value1" :placeholderStyle="placeholderStyle" placeholder="请随便输入一个有效的d来获取">
				</uni-easyinput>
			</view>
			<view class="sx-jj">
				<button type="primary" @tap="uidtj" plain="true">提交</button>
			</view>
			<view class="text wb-jz">--输出日志--</view>
			<view>
				<uni-easyinput type="textarea" autoHeight v-model="maglist" placeholder="输出日志"></uni-easyinput>
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
				value: '',
				value1: '',
				maglist: '',
				// password: '',
				placeholderStyle: "color:#999999;font-size:14px",

			}
		},
		methods: {
			uidtj(){//此方法可获得用户信息，全部平台，uid即可
				const ylgy = "get网"
				uni.request({
				    url: ylgy + 'get网' + this.value1 + 'get网' + this.value, 
				    data: {
				        
				    },
				    header: {
				       
				    },
				    success: (res) => {
				        console.log(res.data.data.open_id);
						this.maglist = res.data.data.open_id;//显示data下的open_id到输出日志
				        this.text = 'request success';
				    },
					
				});
			}
		}
	}
</script>

<style>

</style>
