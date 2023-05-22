<template>
  <view class="padding">
    <view class="dflex-b " >
      <view class="fs-lg">简体中文</view>
      <view>
        <van-icon name="setting-o" size="40rpx" />
      </view>
    </view>
    <view v-if="isLogin">
      <view class="padding-lr">
        <van-empty >
          <template slot="description">
            <view class="tac fwb fs-lg">暂未登录</view>
            <view class="tac fs-sm">请先进行微信授权登录吧</view>
          </template>
        </van-empty>
        <van-button color="#02D199" size="large" open-type="getUserInfo" block>微信授权登录</van-button>
      </view>
    </view>
    <view v-else>
      <!-- card -->
      <view class="profile_card border-radius bg-main">asd</view>
      <view></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    }
  }
}
</script>

<style>
.profile_card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>