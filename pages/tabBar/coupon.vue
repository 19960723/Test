<template>
  <view class="container">
    <!-- nav -->
    <view class="state-area dflex navbar-area">
			<view class="nav-item dflex-c pos-r fs h-full" :class="{ active: tabCurrentIndex === index }"
				v-for="(item, index) in navList" :key="index" @click="tabClick(index)">
				{{ item.state }}
			</view>
		</view>
    <!-- 列表轮播 -->
    <!-- <swiper class="w-full flex1" :duration="300" :current="tabCurrentIndex" @change="changeTab" >
      <swiper-item class="tab-content wh-full" v-for="(tabItem, tabIndex) in navList" :key="tabIndex">
        <scroll-view class="h-full" scroll-y @scrolltolower="loadData">
          <use-empty v-if="tabItem.list.length === 0" e-style="round" e-type="cart"
						tip="暂无优惠券"></use-empty>
          <view class="list">
            <view v-for="(item, index) in tabItem.list" :key="index" class="item_card">
            {{ item.name }}
          </view>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper> -->
    <view class="flex1 overflow-hidden">
      <scroll-view class="h-full" scroll-y @scrolltolower="loadData">
        <use-empty v-if="card_list.length === 0" e-style="round" e-type="cart"
          tip="暂无优惠券"></use-empty>
        <view class="list">
          <view v-for="(item, index) in card_list" :key="index" class="item_card">
          {{ item.name }}
        </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabCurrentIndex: 0,
      navList: [{
          id: 0,
          state: '未领取',
          loadingType: 'more',
        },
        {
          id: 1,
          state: '已领取',
          loadingType: 'more',
          list: []
        },
        {
          id: 2,
          state: '已使用',
          loadingType: 'more',
          list: []
        },
        {
          id: 3,
          state: '已过期',
          loadingType: 'more',
          list: []
        },
      ],
      card_list: [
        {
          name: "优惠劵名称",
          endDate: '2023年12月31日到期',
          price: '199',
          type: '新人优惠券'
        },
        {
          name: "优惠劵名称",
          endDate: '2023年12月31日到期',
          price: '199',
          type: '新人优惠券'
        },
        {
          name: "优惠劵名称",
          endDate: '2023年12月31日到期',
          price: '199',
          type: '新人优惠券'
        },
        {
          name: "优惠劵名称",
          endDate: '2023年12月31日到期',
          price: '199',
          type: '新人优惠券'
        },
        {
          name: "优惠劵名称",
          endDate: '2023年12月31日到期',
          price: '199',
          type: '新人优惠券'
        },
        {
          name: "优惠劵名称",
          endDate: '2023年12月31日到期',
          price: '199',
          type: '新人优惠券'
        },
        {
          name: "优惠劵名称",
          endDate: '2023年12月31日到期',
          price: '199',
          type: '新人优惠券'
        },
        {
          name: "优惠劵名称",
          endDate: '2023年12月31日到期',
          price: '199',
          type: '新人优惠券'
        },
      ]
    }
  },
  methods: {
    tabClick(index) {
      this.tabCurrentIndex = index
    },
    changeTab(e) {
      this.tabCurrentIndex = e.target.current
    },
    loadData() {}
  }
}
</script>

<style lang="scss" scoped>
page,
.container {
  min-height: 100%;
  background: $page-color-base;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.navbar-area {
		white-space: nowrap;
	}

.state-area {
  height: 7vh;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
  z-index: 10;
  top: 0;
}
.nav-item {
		flex: 1;
  &.active {
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: 0;
      width: 44px;
      height: 0;
      border-bottom: 2px solid $base-color;
    }
  }
}
.list {
  padding: 0 3vw 20rpx;
  width: 100%;
  .item_card {
    width: 100%;
    height: 300rpx;
    margin-top: 4vw;
    border-radius: 40rpx;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

}

</style>