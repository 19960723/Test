<template>
  <view class="dflex-c dflex-flow-c pdlr_40">
    <view class="dflex-c dflex-flow-c margin-top-big code_box">
      <van-image
        width="100"
        height="100"
        src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/gh_33446d7f7a26_430.jpg"
      />
      <view class="copyCode margin-top tac fwb">
        <text>按此复制会员ID</text>
        <view>84871747411815815</view>
      </view>
    </view>
    <van-button class="w-full margin-top" color="#02D199" size="large" block
      >打开二维码扫描</van-button
    >
    <van-button class="w-full margin-top" color="#02D199" size="large" block
      >我的优惠券</van-button
    >
  </view>
</template>

<script>
export default {};
</script>

<style scoped>
.copyCode {
  border: 1px solid #dcdcdc;
  border-radius: 10rpx;
  padding: 10rpx 20rpx;
}
.code_box {
  background-color: #fff;
  box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.2);
  padding: 60rpx 40rpx;
}
.pdlr_40 {
  padding: 0 40rpx;
}
</style>
