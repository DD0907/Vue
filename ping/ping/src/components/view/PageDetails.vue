<template>
  <div>
      <!-- <h2>{{goodsId}}</h2> -->
     <!--轮播图片-->
    <div>
      <van-swipe class="goods-swipe" :autoplay="4000">
        <van-swipe-item v-for="(img, index) in images" :key="index">
        <img :src="img" style="height:10.0rem;">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 价格 -->
    <div style="background:#ffffff;">
      <div style="height:0.2rem;">&nbsp;</div>
      <div style="margin:0.1rem;">
        <div>
          <div style="float:left;">
          <span style="font-size:0.5rem;color:red;">{{articles.normalCouponAfterPrice}}元</span> 
          <span v-if="articles.hasCoupon==true">￥{{articles.minNormalPrice}}</span> 
          <van-tag type="danger" v-if="articles.hasQuanfan==true">云联全返</van-tag>
          </div>
          <div style="text-align:right;font-size:0.4rem;color:#999;">
          已拼{{articles.salesNum}}件
          </div>
          <div style="clear:both;"></div>
          </div>
        <div style="font-size:0.4rem;">{{articles.goodsName}}</div>
        <div>
          <div style="float:left;">
          <van-tag type="danger" plain v-if="articles.hasCoupon==true">{{articles.couponPrice}}元优惠券</van-tag>
          </div>
          <div v-if="articles.hasCoupon==true" style="text-align:right;color:#999;">
          <span>剩余{{articles.couponSurplus}}张</span>
          <span>到期{{articles.couponEndTime}}</span>
          </div>
          <div style="clear:both;"></div>
        </div>
      </div>
    </div>

    <!-- 奖励 -->
    <div style="background:#ffffff">
      <div style="">
        <div>
         <van-cell-group>
          <van-cell is-link value="奖励说明">
            <template slot="title">
              <span style="color:#f05a03">约奖：{{articles.integral}}白积分</span>
            </template>
          </van-cell>
          <van-cell is-link value="升级拼团客多奖30%">
            <template slot="title">
              <span style="color:#f05a03">约奖：{{articles.vipIntegral}}白积分</span>
            </template>
          </van-cell>
        </van-cell-group>
        </div>
      </div>
    </div>
    <div style="height:0.1rem;">&nbsp;</div>
    <div style="background:#ffffff;">
      <div style="margin:0rem 0.1rem 0rem 0.1rem">
        <p style="text-align:center;">商品详细参数</p>
        <div>{{articles.goodsDesc}}</div>
      </div>
    </div>
    <div style="background:#ffffff;height:60px;">&nbsp;</div>
    <!-- 底部菜单 -->
    <div>
      <van-goods-action>
        <van-goods-action-mini-btn icon="chat" text="帮助" />
        <van-goods-action-mini-btn icon="cart" text="收藏夹" />
        <van-goods-action-big-btn text="分享赚积分"/>
        <van-goods-action-big-btn text="去参团" primary />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsId: "",
      articles: {},
      images: {}
    };
  },
  mounted() {
    this.getParams();
    // 缓存指针
    let _this = this;
    // 此处使用node做了代理
    this.$axios
      .get("http://ptk.baolinzhe.com:8081/ptk/api/v1/product/" + _this.goodsId)
      .then(function(response) {
        // console.log(JSON.parse(response.data).stories);
        // 将得到的数据放到vue中的data
        _this.articles = response.data.result;
        _this.images = response.data.result.images;
        console.log(_this.articles);
        // console.log(_this.images);
        // console.log(response.data.result.goodsName);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      var routerParams = this.$route.params.goodsId;
      // 将数据放在当前组件的数据内
      this.goodsId = routerParams;
    }
  }
};
</script>
<style lang="less">
.goods {
  &-swipe {
    img {
      width: 100%;
      height: 100%;
      margin: auto;
      display: block;
      background-size: contain;
    }
  }
}
body {
  background: #f1f1f1;;
}
</style>


