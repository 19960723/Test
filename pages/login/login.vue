<template>
  <view class="login_container size14">
    <view class="flex1 pdt120 w-full pdlr80">
      <view class="tac margin-bottom">
        <image
          round
          mode="aspectFill"
          style="width: 100px;height:100px;border-radius: 50%;"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        ></image>
      </view>
      <view class="tac margin-bottom">
        <text class="title">欢迎您！ {{ $t('pages.login_title') }}</text>
      </view>
      <view>
        <van-field
          left-icon="star"
          placeholder="请输入手机号码"
        />
        <van-field
          left-icon="star"
          placeholder="请输入登录密码"
        />
      </view>
      <view class="margin-bottom-lg">
        <view class="margin-bottom">
          <van-button
            block
            round
            size="large"
            type="info"
          >
            登录
          </van-button>
        </view>
        <van-button
          block
          round
          size="large"
          type="primary"
          open-type="getUserInfo"
        >
          微信授权登录
        </van-button>
      </view>
      <view class="tac">
        <text class="rule_text" @click="toForget">忘记登录密码</text>
      </view>
    </view>
    <view class="margin-bottom-xl text_underline" @click="toShipLogin">会员登录</view>
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
    toShipLogin() {
      uni.navigateTo({
        url: '/pages/login/shipLogin'
      })
    },
    toForget() {
      uni.navigateTo({
        url: '/pages/login/forget'
      })
    }
  }
};
</script>

<style>
body {
  height: 100%;
}
</style>
<style scoped lang="scss">
uni-page-body {
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
.pdlr80 {
  padding: 0 80rpx;
}
.pdt120 {
  padding-top: 120rpx;
}
.rule_text {
  color: #0052D9;
}
</style>
