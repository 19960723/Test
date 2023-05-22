<template>
  <view class="container">
    <view>
      <van-steps :steps="steps" :active="active" />
    </view>
    <view>
      <view v-if="active == 0">
        <van-field placeholder="请输入手机号码" />
        <van-field placeholder="请输入短信验证码" />
        <van-button block round size="large" type="info" @click="phoneVerify">
          下一步
        </van-button>
      </view>
      <view v-if="active == 1">
        <van-field placeholder="请设置6-20位登录密码" />
        <van-field placeholder="请再次输入新的登录密码" />
        <van-button block round size="large" type="info" @click="setNewPass">
          确定
        </van-button>
      </view>
      <view v-if="active == 2">
        <view class="tac">
          <view>
            <text class="iconfont icon-chenggong"></text>
          </view>
          <text class="title">密码重置成功</text>
        </view>
        <van-button block round size="large" type="info" @click="toLogin">
          去登录
        </van-button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        { text: "验证手机", title: "验证手机" },
        { text: "设置新密码", title: "验证手机" },
        { text: "重置成功", title: "验证手机" },
      ],
      active: 0,
    };
  },
  methods: {
    phoneVerify() {
      this.active = 1;
    },
    setNewPass() {
      this.active = 2;
    },
    toLogin() {
      uni.navigateBack({
        delta: 1,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 0 60rpx;
}
.title {
  font-weight: 700;
  font-size: 16px;
}
.icon-chenggong {
  font-size: 120rpx;
  color: #07c160;
}
</style>
