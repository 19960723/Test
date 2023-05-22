<template>
  <scroll-view>
    <view
      v-for="(item, index) in message_list"
      :key="index"
      class="message_item"
    >
      <view class="dflex-b margin-bottom-xs">
        <text class="fs">{{ item.title }}</text>
        <text class="color_979797">{{ item.date_time }}</text>
      </view>
      <view class="color_979797">{{ item.message }}</view>
      <text class="red_rot" v-if="item.isRed == 1"></text>
    </view>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      message_list: [
        {
          title: "预约成功!",
          message: "您预约的服务已成功受理，请前往预定门店进行核销服务。",
          date_time: "2023-12-31 15:55",
          isRed: 1,
        },
        {
          title: "最新优惠活动!",
          message: "优惠活动描述",
          date_time: "2023-12-31 15:55",
          isRed: 1,
        },
        {
          title: "最新优惠活动!",
          message: "优惠活动描述",
          date_time: "2023-12-31 15:55",
          isRed: 0,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.message_item {
  border: 1px solid #dcdcdc;
  border-radius: 20rpx;
  position: relative;
  left: 0;
  top: 0;
  padding: 20rpx 30rpx;
  margin: 30rpx;
  min-height: 200rpx;
  .red_rot {
    width: 20rpx;
    height: 20rpx;
    background: red;
    border-radius: 10rpx;
    position: absolute;
    left: -10rpx;
    top: -10rpx;
  }
}
.color_979797 {
  color: #979797;
}
</style>
