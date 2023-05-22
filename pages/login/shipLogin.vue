<template>
  <view class="login_container size14">
    <view class="flex1 pdt120">
      <view class="tac margin-bottom">
        <image
          round
          mode="aspectFill"
          style="width: 100px;height:100px;border-radius: 50%;"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        ></image>
      </view>
      <view class="tac margin-bottom-big">
        <text class="title">尊贵的会员，欢迎您！</text>
      </view>
      <view class="margin-bottom">
        <van-button
          block
          size="large"
          type="primary"
          open-type="getUserInfo"
        >
          微信授权登录
        </van-button>
      </view>
      <view class="dflex-c">
        <checkbox value="cb" style="transform:scale(0.7)" />
        <text>
          <text>我已阅读并同意</text>
          <text class="rule_text">《用户服务协议及隐私政策》</text>
        </text>
      </view>
    </view>
    <view class="margin-bottom-xl text_underline" @click="toLogin">员工登录</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
    };
  },
  methods: {
    toLogin() {
      uni.navigateTo({
        url: '/pages/login/login'
      })
    },
    
  }
};
</script>

<style>
body {
  height: 100%;
}
</style>
<style scoped lang="scss">
page, uni-page-body {
  height: 100%;
}
.size14 {
  font-size: 14px;
}
.login_container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100%;
  .title {
    font-weight: 700;
    font-size: 16px;
  }
}
.pdt120 {
  padding-top: 120rpx;
}
.rule_text {
  color: #0052D9;
}
</style>
