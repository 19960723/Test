<template>
  <view class="page-container box-sizing-b w-full">
    <!-- 搜索区 -->
    <use-header></use-header>
    <!-- 门店列表 -->
    <scroll-view
      class="mainscroll"
      :scroll-top="scrollTop"
      scroll-y="true"
      scroll-anchoring="true"
      @scrolltolower="scrolltolower"
      @scroll="scroll"
    >
      <view class="list w-full">
        <view
          v-for="(item, index) in shop_list"
          :key="index"
          class="item"
          @click="toDetail(item)"
        >
          <view class="image-wrapper"
            ><image mode="aspectFill" :lazy-load="true" :src="item.img"></image
          ></view>
          <view class="info padding-lr">
            <view class="dflex-b">
              <text class="fwb">门店名称</text>
              <text class="fwb">123m</text>
            </view>
            <text class="fs-xs">地址：澳门特别行政区</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      shop_list: [
        {
          id: 1,
          img: "/static/banner/banner1.png",
          name: "服务名称",
          price: 0,
          market_price: 0,
        },
        {
          id: 2,
          img: "/static/banner/banner1.png",
          name: "服务名称",
          price: 0,
          market_price: 0,
        },
        {
          id: 3,
          img: "/static/banner/banner1.png",
          name: "服务名称",
          price: 0,
          market_price: 0,
        },
        {
          id: 4,
          img: "/static/banner/banner1.png",
          name: "服务名称",
          price: 0,
          market_price: 0,
        },
        {
          id: 5,
          img: "/static/banner/banner1.png",
          name: "服务名称",
          price: 0,
          market_price: 0,
        },
      ],
      scrollTop: 0,
    };
  },
  methods: {
    scroll(e) {
      console.log("scroll", e);
    },
    scrolltolower() {
      console.log("scrolltolower");
    },
    toDetail(item) {
      uni.navigateTo({
        url: "/pages/shop/storeDetail/index",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0 3vw 20rpx;
  .item {
    width: 100%;
    height: 360rpx;
    margin-top: 4vw;
    overflow: hidden;
    box-shadow: 3 3 10px rgba(0, 0, 0, 0.1);
    border-radius: 20rpx;
    position: relative;
    .info {
      position: absolute;
      bottom: 0;
      background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
      width: 100%;
      color: #fff;
      font-size: 32rpx;
    }
  }
}
</style>
