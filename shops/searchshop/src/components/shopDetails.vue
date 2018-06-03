<template>
    <section>
    <!--轮播图片-->
    <div style="height:10.0rem;">
      <van-swipe class="goods-swipe" :autoplay="4000"  v-if="code==1" >
        <van-swipe-item v-for="(img, index) in images" :key="index">
        <img :src="img" style="width:100%;height:10.0rem;">
        </van-swipe-item>
      </van-swipe>
      <van-swipe class="goods-swipe" :autoplay="4000" v-else>
        <img src="./../assets/image/icon_scan.png" style="height:10.0rem;">
      </van-swipe>
    </div>
    <!-- 价格 -->
    <div style="background:#ffffff;">
      <div style="height:0.2rem;">&nbsp;</div>
      <div style="margin:0.1rem;">
        <div>
          <div style="float:left;">
          <span style="font-size:0.5rem;color:red;">{{articles.price}}元</span> 
          <span v-if="articles.couponPrice!=0" style="text-decoration:line-through;color:#999">￥{{articles.originPrice}}</span> 
          </div>
          <div style="text-align:right;color:#999;">
          已售{{articles.salesNum}}件
          </div>
          <div style="clear:both;"></div>
          </div>
        <div style="font-size:0.4rem;">
          <van-tag type="danger">{{articles.source}}</van-tag>{{articles.title}}</div>
        <div>
          <div style="float:left;">
          <van-tag type="danger" plain v-if="articles.couponPrice!=0">{{articles.couponPrice}}元优惠券</van-tag>
          </div>
          <div v-if="articles.couponPrice!=0" style="text-align:right;color:#999;">
          <span>剩余{{articles.couponSurplus}}张</span>
          <span>到期{{articles.couponEnd}}</span>
          </div>
          <div style="clear:both;"></div>
        </div>
      </div>
    </div>
    <!-- 奖励 -->
    <div style="background:#ffffff">
      <div>
        <div>
         <van-cell-group>
          <van-cell is-link value="奖励说明" @click="jumpmessage" >
            <template slot="title">
              <span style="color:#f05a03">约奖：{{articles.integral}}元</span>
            </template>
          </van-cell>
        </van-cell-group>
        </div>
      </div>
    </div>
    <div style="height:0.1rem;">&nbsp;</div>
    <div style="background:#ffffff;">
      <div style="margin:0rem 0.1rem 0rem 0.1rem">
        <p style="text-align:center;">商品详细图文</p>
        <div>{{articles.note}}</div>
      </div>
    </div>
    <div style="height:0.1rem;">&nbsp;</div>
    <div v-for="(r, index) in detailImages" :key="index">
      <img :src="r" alt="暂无图片" style="width:100%;height:100%;" >
    </div>
        <div style="background:#ffffff;height:50px;">&nbsp;</div>
    <div>
    <div v-if="time==0">
      <van-submit-bar button-text="点击刷新" @submit="onClickLoad">
            <span slot="default">生成失败</span>
        </van-submit-bar>
    </div>
    <div v-else>
    <van-submit-bar v-if="transferchainUrl==''||transferchainUrl==null" loading button-text="正在生成" @submit="onSubmit">
        <span slot="default">正在生成请稍候({{time}} s)</span>
    </van-submit-bar>
    <van-submit-bar v-else button-text="去购买" @submit="OnclickBuy" 
        v-clipboard:copy="taobaoNumber"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">
       <span slot="default">优惠{{couponprice}}.00元，约奖5.00元</span>
    </van-submit-bar>
    </div>
    </div>
    <!-- 底部菜单 -->
    <van-actionsheet v-model="helpshow" title="奖励说明">
      <p style="font-size:16px;">1、该奖励为约奖，指通过优惠价购买一件商品的佣金币奖励，多买多得（根据实际付款金额），实际到帐佣金币有上下微小浮动属于正常现象。</p>
      <p style="font-size:16px;">2、必须通过拼团客系统进入直接拼团付款才有奖励，进入后先收藏，再通过多多收藏下单是无奖励的，如需收藏，请使用拼团客系统的收藏夹。</p> 
      <p style="height:10px;"></p>
    </van-actionsheet>
     <van-dialog v-model="postsuccessshow" :show-confirm-button="false" :close-on-click-overlay="true" style="width:75%;background:#f1f1f1" :lock-scroll="false">
      <div class="banner-box" style="text-align:center;">
        <img src="./../assets/image/icon_success.png" style="width:100%" />
      </div>
    </van-dialog>
    <van-dialog v-model="posterrorshow" :show-confirm-button="false" :close-on-click-overlay="true" style="width:75%;background:#f1f1f1" :lock-scroll="false">
      <div class="banner-box" style="text-align:center;">
        <img src="./../assets/image/icon_error.png" style="width:100%" />
      </div>
    </van-dialog>
    </section>
</template>
<script>
export default {
  data() {
    return {
      images: {},
      detailImages: {},
      url: "http://shg.blpev.cn:8080/shg-api/api/",
      goodsId: "",
      code: 1,
      articles: {},
      helpshow: false,
      shopName: "",
      couponUrl: "",
      couponprice: 10,
      transferchainUrl: "",
      taobaoNumber: "",
      postsuccessshow: false,
      posterrorshow: false,
      shopimgurl: "",
      time: 15,
      pid: ""
    };
  },
  mounted() {
    var keyword = window.location.href;
    var i = keyword.indexOf("Id=");
    this.goodsId = decodeURI(keyword.substring(i + 3, keyword.length));
    this.getPageDetailsImage();
    this.getPageDetails();
  },
  methods: {
    onSubmit() {
      let _this = this;
      _this.maketaobaocommand();
    },
    onClickLoad() {
      window.location.reload();
    },
    getPageDetailsImage() {
      // 缓存指针
      let _this = this;
      // 此处使用node做了代理
      this.$axios
        .get(_this.url + "/product/images?productId=" + _this.goodsId)
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.images = response.data.result.images;
          _this.code = 1;
          _this.detailImages = response.data.result.detailImages;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getPageDetails() {
      // 缓存指针
      let _this = this;
      let interval = window.setInterval(function() {
        if (_this.time-- <= 0) {
          _this.time = 0;
          // console.log(_this.time + "jjjjjjjjj");
          window.clearInterval(interval); //停止
        }
      }, 1000);
      // 此处使用node做了代理
      this.$axios
        .get(_this.url + "/product/detail?productId=" + _this.goodsId)
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.articles = response.data.result;
          _this.couponprice = response.data.result.couponPrice;
          _this.shopimgurl = response.data.result.mainPic;
          _this.shopName = response.data.result.title;
          _this.couponUrl = response.data.result.couponUrl;
          _this.getConvertUrl();
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("该商品已下架了");
        });
    },
    jumpmessage() {
      this.helpshow = true;
    },
    //立即购买
    OnclickBuy() {
      let _this = this;
      _this.maketaobaocommand();
    },
    //复制淘口令
    onCopy: function(e) {
      this.postsuccessshow = true;
      // this.$toast("您已成功复制了淘口令");
    },
    onError: function(e) {
      this.posterrorshow = true;
      // this.$toast("复制失败了哦");
    },
    //生成淘宝口令
    maketaobaocommand() {
      let _this = this;
      this.$axios
        .get(
          _this.url +
            "/product/tpwd?text=" +
            _this.shopName +
            "&url=" +
            _this.transferchainUrl +
            "&logoUrl=" +
            _this.shopimgurl
        )
        .then(function(response) {
          if (response.data.code == 1) {
            _this.taobaoNumber = response.data.result;
            // console.log(_this.taobaoNumber);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getConvertUrl() {
      let _this = this;
      this.$axios
        .post(
          _this.url +
            "/product/robot-convert-url?productId=" +
            _this.goodsId +
            "&couponUrl=" +
            _this.couponUrl +
            "&pid=" +
            _this.pid
        )
        .then(function(response) {
          if (response.data.code == 1) {
            _this.transferchainUrl = response.data.result;
            // console.log(_this.transferchainUrl);
            _this.onSubmit();
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style>
</style>