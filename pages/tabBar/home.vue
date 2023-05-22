<template>
  <view class="page-container box-sizing-b w-full">
    <!-- 头部 -->
    <view class="dflex w-full padding-lr">
      <change-positions></change-positions>
      <use-header class="flex1"></use-header>
      <van-icon
        size="40rpx"
        name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        info="9"
        @click="toMessage"
      />
    </view>
    <!-- 轮播 -->
    <view
      class="swiper-area pos-r"
      v-if="banner_list && banner_list.length > 0"
    >
      <swiper
        class="swiper w-full"
        autoplay
        circular
        indicator-dots
        indicator-color="#f7f7f7"
        indicator-active-color="#ff6a6c"
      >
        <swiper-item
          class="swiper-item padding-lr wh-full box-sizing-b"
          v-for="(item, index) in banner_list"
          :key="index"
        >
          <view class="wh-full" @click.stop="topage(item)">
            <image
              class="border-radius wh-full"
              mode="aspectFill"
              :lazy-load="true"
              :src="item.url"
            />
          </view>
        </swiper-item>
      </swiper>
    </view>
    <!-- 分类区 -->
    <view
      class="category-area dflex dflex-wrap-w"
      v-if="category_data && category_data.length > 0"
    >
      <view
        class="category-item dflex dflex-flow-c margin-bottom-sm"
        v-for="(item, index) in category_data"
        :key="index"
        @click="categoryClick(item)"
      >
        <image
          class="margin-bottom-xs"
          :lazy-load="true"
          :src="item.img"
        ></image>
        <text class="tac clamp">{{ item.name }}</text>
      </view>
    </view>
    <view class="gap"></view>

    <!-- 最新优惠 -->
    <use-list-title
      title="最新优惠"
      size="32"
      fwt="600"
      color="#333"
      iconfont="icondaishouhuo-"
      @goto="limit"
    >
    </use-list-title>
    <view class="limit-area">
      <scroll-view class="list padding-lr" scroll-x>
        <view class="dflex padding-bottom">
          <view
            class="item pos-r margin-right-sm border-radius-sm"
            v-for="(item, index) in good_list"
            :key="index"
          >
            <image
              class="border-radius-xs"
              mode="aspectFill"
              :lazy-load="true"
              :src="item.img"
            ></image>
            <view class="dflex-b dflex-flow-c pos-a pos-top pos-left padding">
              <view>
                <text class="clamp padding-bottom-xs fwb">{{ item.name }}</text>
                <text>{{ item.price }}</text>
              </view>
              <van-button round type="primary" size="small" class="padding-right-sm">查看详情</van-button>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
    <view class="gap"></view>

    <!-- 热门活动 -->
    <view class="use-hot-goods">
      <use-list-title
        title="热门活动"
        size="32"
        fwt="600"
        color="#333"
        iconfont="icondaishouhuo-"
      ></use-list-title>
      <view class="list dflex-b dflex dflex-wrap-w w-full">
        <view
          v-for="(item, index) in hot_list"
          :key="index"
          class="item border-radius-sm padding-bottom-sm"
          @click="toProductDetail"
        >
          <view class="image-wrapper">
            <image mode="aspectFill" :lazy-load="true" :src="item.img"></image>
          </view>
          <view class="dflex-b">
            <view class="">
              <text class="title clamp padding-sm">{{ item.name }}</text>
              <view class="padding-left-sm">
                <text class="price">{{ item.price / 100 }}</text>
                <text class="m-price">{{ item.market_price / 100 }}</text>
              </view>
            </view>
            <van-button round type="primary" size="small" class="padding-right-sm">查看详情</van-button>
          </view>
        </view>
      </view>
    </view>

    <!-- <image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<text>{{ $t('login.phoneText') }} --- {{ username }}</text>
		</view>
		<view>
			<button type="default" @click="goto('/pages/login/login')">通过方法跳转到about页面</button>
		</view> -->
  </view>
</template>

<script>
import { mapState } from "vuex";
import permision from "@/common/permission.js";
import changePositions from "../../components/changePositions";
export default {
  data() {
    return {
      title: "Hello",
      // 轮播区
      banner_list: [
        { id: 1, type: "image", url: "/static/banner/banner1.png", link: "" },
        { id: 2, type: "image", url: "/static/banner/banner2.jpg", link: "" },
        { id: 3, type: "image", url: "/static/banner/banner3.jpg", link: "" },
      ],
      // 金刚区分类
      category_data: [
        {
          id: 1,
          img: "/static/category/category1.png",
          link: "",
          name: "扫一扫",
          type: 1,
        },
        {
          id: 2,
          img: "/static/category/category2.png",
          link: "/pages/home/companyInfo/index",
          name: "企业风采",
          type: 2,
        },
        {
          id: 3,
          img: "/static/category/category3.png",
          link: "/pages/home/memberCode/index",
          name: "会员码",
          type: 3,
        },
      ],
      // 最新优惠
      good_list: [
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
      // 热门活动
      hot_list: [
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
    };
  },
  computed: {
    ...mapState({
      username: (state) => state.user.username,
    }),
  },
  components: {
    changePositions,
  },
  onLoad() {},
  methods: {
    toMessage() {
      uni.navigateTo({
        url: "/pages/home/message/index",
      });
    },
    toProductDetail() {
      uni.navigateTo({
        url: "/pages/home/productDetail/index",
      });
    },
    categoryClick(item) {
      if (item.type != -1 && item.link) {
        uni.navigateTo({
          url: item.link,
        });
      } else {
        this.scan();
      }
    },
    async scan() {
      // #ifdef APP-PLUS
      let status = await this.checkPermission();
      if (status !== 1) {
        return;
      }
      // #endif
      uni.scanCode({
        success: (res) => {
          this.result = res.result;
          console.log(res);
        },
        fail: (err) => {
          // 需要注意的是小程序扫码不需要申请相机权限
        },
      });
    },
    async checkPermission(code) {
      let status = permision.isIOS
        ? await permision.requestIOS("camera")
        : await permision.requestAndroid("android.permission.CAMERA");

      if (status === null || status === 1) {
        status = 1;
      } else {
        uni.showModal({
          content: "需要相机权限",
          confirmText: "设置",
          success: function (res) {
            if (res.confirm) {
              permision.gotoAppSetting();
            }
          },
        });
      }
      return status;
    },
    topage(item) {},
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}

/* #ifdef H5 || MP-360 */
uni-page-body {
  touch-action: none;
}

/* #endif */

/* 轮播图区 */
.swiper-area {
  .swiper {
    height: 240rpx;
  }
}

/* 分类区 */
.category-area {
  padding: 60rpx 0 30rpx 0;

  .category-item {
    font-size: $font-sm + 2upx;
    color: $font-color-dark;
    width: 33.33%;
  }

  image {
    width: 96rpx;
    height: 96rpx;
  }
}
/* 限时精选区 */
.limit-area {
  min-height: 240rpx;

  .item {
    width: 80vw;
    min-width: 80vw;
    image {
      width: 80vw;
      height: 240rpx;
    }
  }
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
  display: none;
}

.use-hot-goods {
  background-color: #f3f4f6;

  .list {
    padding: 0 3vw 20rpx;
  }

  .item {
    width: 100%;
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
    height: 300rpx;
    overflow: hidden;

    image {
      width: 100%;
      height: 100%;
      opacity: 1;
    }
  }
}
</style>
