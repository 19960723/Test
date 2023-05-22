<template>
  <view>
    <!-- #ifdef MP-WEIXIN || MP-BAIDU -->
    <van-icon name="map-marked" size="20px" @click="choiceMapAddr" />
    <!-- #endif -->
    <!-- #ifdef MP-ALIPAY -->
    <van-icon name="map-marked" size="20px" @click="choiceAlipayMapAddr" />
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      addressName: "",
    };
  },
  mounted() {
    console.log("on load")
   this.getLocation()
  },
  methods: {
    getLocation() {
      uni.getLocation({
        type: 'wgs84',
        geocode: "true",
        isHighAccuracy: "true",
        accuracy: "best", // 精度值为20m
        success: function (res) {
          console.log(res)
          console.log('当前位置的经度：' + res.longitude);
          console.log('当前位置的纬度：' + res.latitude);
        }
      });
    },
    choiceMapAddr() {
      console.log("111");
      uni.authorize({
        scope: "scope.userLocation",
        success() {
          uni.chooseLocation({
            success: (res) => {
              console.log("位置", res);
              // console.log('位置名称：' + res.name);
              // console.log('详细地址：' + res.address);
              // console.log('纬度：' + res.latitude);
              // console.log('经度：' + res.longitude);
            },
            fail(err) {
              console.log(err);
            },
          });
        },
        fail(err) {
          uni.showModal({
            title: "位置未授权，打开设置",
            success: function (res) {
              if (res.confirm) {
                uni.openSetting({});
              }
            },
          });
        },
      });
    },
    choiceAlipayMapAddr() {
      console.log("222");
      uni.chooseLocation({
        success: (res) => {
          console.log("位置", res);
        },
        fail(err) {
          console.log(err);
        },
      });
    },
  },
};
</script>

<style scoped>
.w14 {
  width: 14px;
}
.h14 {
  height: 14px;
}
</style>
