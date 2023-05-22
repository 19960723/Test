<template>
  <view class="wh-full">
    <use-header class="flex1"></use-header>
    <view class="category dflex-s h-full">
      <view class="h-full left">
        <scroll-view scroll-y class="h-full">
          <view
            v-for="item in fdatas"
            :key="item._id"
            class="item dflex-c"
            :class="{ active: item._id === cid }"
            @click="fSelect(item)"
            >{{ item.name }}</view
          >
        </scroll-view>
      </view>
      <view class="right h-full dflex-s">
        <view class="dflex-a filter_top border-bottom">
          <view>综合</view>
          <view>价格</view>
          <view>销量</view>
        </view>
        <scroll-view
          class="flex1 overflow-hidden bg_f3f4f6"
          scroll-with-animation
          scroll-y
          :scroll-top="scrollTop"
          :style="{ height: scrollHeight }"
          @scroll="onScroll"
        >
          <use-empty v-if="!product_list.length" e-style="round" tip="无产品数据"></use-empty>
          <view class="good_list dflex-b dflex dflex-wrap-w w-full">
            <view v-for="(item, index) in product_list" :key="index" class="item border-radius-sm padding-bottom-sm" @click="toProductDetail">
              <view class="image-wrapper"><image mode="aspectFill" :lazy-load="true" :src="item.img"></image></view>
              <text class="title clamp padding-sm">{{ item.name }}</text>
              <view class="padding-left-sm">
                <text class="price">{{ item.price / 100 }}</text>
                <text class="m-price">{{ item.market_price / 100 }}</text>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      scrollHeight: '100%',

      // 当前选中分类ID
      cid: 0,
      // 一级数据
      fdatas: [
        {
          _id: 0,
          name: "全部",
        },
        {
          _id: 1,
          name: "面部护理",
        },
        {
          _id: 2,
          name: "身体按摩",
        },
        {
          _id: 3,
          name: "身体护理",
        },
        {
          _id: 4,
          name: "瘦身疗程",
        },
      ],
      // 二级数据
      sdatas: [],
      product_list: [
        { id: 1, img: '/static/banner/banner1.png', name: '服务名称', price: 0, market_price: 0 },
        { id: 2, img: '/static/banner/banner1.png', name: '服务名称', price: 0, market_price: 0 },
        { id: 3, img: '/static/banner/banner1.png', name: '服务名称', price: 0, market_price: 0 },
        { id: 4, img: '/static/banner/banner1.png', name: '服务名称', price: 0, market_price: 0 },
        { id: 5, img: '/static/banner/banner1.png', name: '服务名称', price: 0, market_price: 0 },
      ]
    };
  },
  onLoad() {
    // #ifdef MP-ALIPAY
    this.scrollHeight = (this.$env.windowHeight - this.$env.sis.titleBarHeight) + 'px';
    // #endif
  },
  methods: {
    fSelect(item) {
      this.cid = item._id;
    },
    loadGoodsDatas() {},
    onScroll() {},
    toProductDetail() {
      uni.navigateTo({
        url: "/pages/home/productDetail/index",
      });
    }
  },
};
</script>

<style lang="scss" scoped>
page {
  height: 100%;
  background-color: $page-color-base;
}
.bg_f3f4f6 {
  background-color: #f3f4f6;
}
.category {
  overflow: hidden;
  .left {
    width: 200rpx;
    // background-color: $page-color-base;
    .item {
      height: 100rpx;
      color: $font-color-base;
      position: relative;
      &.active {
        color: $uni-color-primary;
        // background: #fff;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 36rpx;
          width: 8rpx;
          background-color: $uni-color-primary;
          opacity: 0.8;
        }
      }
    }
  }
  .right {
    flex: 1;
    overflow: hidden;
    display: block;
    .filter_top {
      height: 100rpx;
    }
    .good_list{
      padding: 0 3vw 20rpx;
      .item { 
        width: 48%;
        overflow: hidden;
        margin-top: 2vw;
        background: #fff;
        &:nth-child(2n) {
          margin-left: 1vw;
        }
        &:nth-child(2n + 1) {
          margin-right: 1vw;
        }
      }
      .image-wrapper {
        width: 100%;
        height: 200rpx;
        overflow: hidden;
        image {
          width: 100%;
          height: 100%;
          opacity: 1;
        }
      }
    }
  }
}


</style>
