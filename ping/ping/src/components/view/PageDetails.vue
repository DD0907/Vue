<template>
  <div>
      <!-- <h2>{{goodsId}}</h2> -->
     <!--轮播图片-->
    <div>
      <van-swipe class="goods-swipe" :autoplay="4000" v-if="rowlength!=0">
        <van-swipe-item v-for="(img, index) in images" :key="index">
        <img :src="img" style="height:10.0rem;">
        </van-swipe-item>
      </van-swipe>

      <van-swipe class="goods-swipe" :autoplay="4000" v-else>
        <img src="../../assets/icon/icon_scan.png" style="height:10.0rem;">
      </van-swipe>
    </div>
    <!-- 价格 -->
    <div style="background:#ffffff;">
      <div style="height:0.2rem;">&nbsp;</div>
      <div style="margin:0.1rem;">
        <div>
          <div style="float:left;">
          <span style="font-size:0.5rem;color:red;">{{articles.groupCouponAfterPrice}}元</span> 
          <span v-if="articles.hasCoupon==true" style="text-decoration:line-through;color:#999">￥{{articles.minGroupPrice}}</span> 
          </div>
          <div style="text-align:right;color:#999;">
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
      <div v-if="isVip">
        <div>
         <van-cell-group>
          <van-cell is-link value="奖励说明" @click="jumpmessage" >
            <template slot="title">
              <span style="color:#f05a03">约赚：{{articles.integral}}佣金币</span>
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
        <div class="share" @click="JumpShapePost"><img src="../../assets/icon/icons_share.png"/></div> 

    <div style="background:#ffffff;height:60px;">&nbsp;</div>
    <!-- 底部菜单 -->
    <div>
      <van-goods-action>
        <van-goods-action-mini-btn @click="JumpAddCollect" v-if="hasCollect==false">
          <div style="text-align:center;">
            <van-icon name="e619"/>
            <div>加入收藏夹</div>
          </div>
        </van-goods-action-mini-btn>
        <van-goods-action-mini-btn @click="JumpDelCollect(goodsId)" v-else>
          <div style="text-align:center;color:red;">
             <van-icon name="e619"/>
            <div>取消收藏</div>
          </div>
        </van-goods-action-mini-btn>
        <van-goods-action-big-btn text="领券参团" @click="JumpnormalUrl"/>
        <van-goods-action-big-btn text="领券拼团" primary @click="JumpgroupUrl" />
      </van-goods-action>
    </div>

    <van-actionsheet v-model="helpshow" title="奖励说明">
      <p style="font-size:16px;">1、该奖励为约奖，指通过优惠价购买一件商品的佣金币奖励，多买多得（根据实际付款金额），实际到帐佣金币有上下微小浮动属于正常现象。</p>
      <p style="font-size:16px;">2、必须通过拼团客系统进入直接拼团付款才有奖励，进入后先收藏，再通过多多收藏下单是无奖励的，如需收藏，请使用拼团客系统的收藏夹。</p> 
    </van-actionsheet>

     <van-dialog v-model="postshow" :show-confirm-button="false" :close-on-click-overlay="true" style="width:90%;height:80%;" :lock-scroll="false">
      <div style="text-align:center;">
      </div>
       <div class="banner-box" style="text-align:center;">
         <div>
          <img :src="shopimg" style="width:100%;height:100%;display:none;" id="img1" crossorigin="Anonymous"/>
          <div v-if="imgSrcs!=''">
            <div>
              <img :src="imgSrcs" style="width:30%;height:30%;display:none;" id="img2"/>
              <div>长按识别或扫描二维码,分享给好友</div>
            </div> 
          </div>
          </div>
          <img :src="scan" style="width:80%;height:80%"/>
          		<canvas id="myCanvas" style="width:300px;height:400px;display:none;"></canvas>
          <div>
            <button @click="createQrcs">分享参团</button>
            <button @click="createQrc">分享拼团</button>
          </div>
          <!-- <input type="text" v-model="bannerUrl" placeholder="输入链接" style="display:none;"/> -->
          <canvas id="qrccode-canvas"  style="display:none;"></canvas>
        </div>
    </van-dialog>
  </div>
</template>
<script>
var QRCode = require("qrcode");
import addpost from "../../assets/icon/icons_addpost.png";

export default {
  data() {
    return {
      isVip: "",
      url: "http://ptk.baolinzhe.com/ptk/api/",
      goodsId: "",
      articles: {},
      images: {},
      helpshow: false,
      bottomhelpshow: false,
      userId: "",
      hasCollect: false,
      normalUrl: "",
      groupUrl: "",
      googsIdsss: "",
      rowlength: "",
      postshow: false,
      bannerUrl: "https://a.toutiaonanren.com/api/d/xWRKgq",
      bannerUrls: "https://a.toutiaonanren.com/api/d/xWRKgq",
      canvas: "",
      imgSrcs: "",
      shopimg: "",
      scan: addpost
    };
  },
  mounted() {
    // this.userId = sessionStorage.getItem("userId");
    var dataJson = JSON.parse(decodeURIComponent(getCookie("userData")));
    // this.userId = dataJson.id;
    this.userId = 18;
    var keyword = window.location.href;
    var i = keyword.indexOf("Id=");
    this.goodsId = decodeURI(keyword.substring(i + 3, keyword.length));
    // alert(this.goodsId)
    this.getParams();
    this.getConvertUrl();
    this.getPageDetails();
    this.CheckCollect();
    function getCookie(name) {
      name = name + "=";
      var start = document.cookie.indexOf(name),
        value = null;
      if (start > -1) {
        var end = document.cookie.indexOf(";", start);
        if (end == -1) {
          end = document.cookie.length;
        }
        value = document.cookie.substring(start + name.length, end);
      }
      return value;
    }
  },
  methods: {
    createQrc: function() {
      QRCode.toCanvas(this.canvas, this.bannerUrl, error => {
        if (error) {
          console.log(error);
        } else {
          console.log("success");
          var canvas = document.getElementById("qrccode-canvas");
          // console.log(canvas);
          var imgSrc = canvas.toDataURL("image/png");
          this.imgSrcs = imgSrc;
          // console.log(imgSrc);
          var c = document.getElementById("myCanvas");
          c.width=300;
          c.height=300;
          var ctx = c.getContext("2d");
          var img = document.getElementById("img1");
          var img2 = document.getElementById("img2");
          ctx.drawImage(img, 0, 0,300,300);
          ctx.drawImage(img2, 200, 200, 80, 80);
          // console.log(c);
          c.crossOrigin = "Anonymous";
          var myCanva = c.toDataURL("image/png");
          // var imagessss=new Image();
          // imagessss.crossOrigin("Anonymous");
          // imagessss.src=myCanva;
          console.log(myCanva);
          this.scan = myCanva;
        }
      });
    },
    createQrcs: function() {
      QRCode.toCanvas(this.canvas, this.bannerUrls, error => {
        if (error) {
          console.log(error);
        } else {
          console.log("success");
          var canvas = document.getElementById("qrccode-canvas");
          // console.log(canvas);
          var imgSrc = canvas.toDataURL("image/png");
          // console.log(imgSrc);
          this.imgSrcs = imgSrc;
        }
      });
    },
    JumpgroupUrl() {
      window.location.href = this.groupUrl;
    },
    JumpnormalUrl() {
      window.location.href = this.normalUrl;
    },
    getConvertUrl() {
      // 缓存指针
      let _this = this;
      // 此处使用node做了代理
      this.$axios
        .get(
          "http://ptk.baolinzhe.com/ptk/api/v1/product/convert-url?productId=" +
            _this.goodsId +
            "&id=" +
            _this.userId
        )
        .then(function(response) {
          // console.log(response.data.result);
          _this.normalUrl = response.data.result.normalUrl;
          _this.groupUrl = response.data.result.groupUrl;
          console.log(response.data.result.groupShortUrl);
          _this.bannerUrl = response.data.result.groupShortUrl;
          _this.bannerUrls = response.data.result.normalShortUrl;
          //console.log(_this.normalUrl)
          // console.log(_this.groupUrl)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getPageDetails() {
      // 缓存指针
      let _this = this;
      // 此处使用node做了代理
      this.$axios
        .get("http://ptk.baolinzhe.com/ptk/api/v1/product/" + _this.goodsId)
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.articles = response.data.result;
          _this.images = response.data.result.images;
          // console.log(_this.images[0]);
          _this.shopimg = _this.images[0];
          _this.rowlength = _this.images.length;
          //console.log(_this.articles);
          // console.log(_this.images);
          // console.log(response.data.result.goodsName);
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
    },
    getParams() {
      // 取到路由带过来的参数
      // var routerParams = this.$route.params.goodsId;
      var isVips = this.$route.params.isVip;
      // 将数据放在当前组件的数据内
      // this.goodsId = routerParams;
      this.isVip = isVips;
    },
    jumpmessage() {
      this.helpshow = true;
    },
    JumpAddCollect() {
      // 缓存指针
      let _this = this;
      if (_this.userId == "") {
        this.$toast("暂未登录哦");
      } else {
        //console.log(_this.userId);
        // console.log(_this.goodsId);
        // 此处使用node做了代理
        this.$axios
          .post(
            _this.url +
              "/v1/product/collect?userId=" +
              _this.userId +
              "&productId=" +
              _this.goodsId
          )
          .then(function(response) {
            if (response.data.code == 1) {
              //console.log(response.data.message);
              _this.getPageDetails();
              _this.CheckCollect();
              _this.$toast(response.data.message);
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    CheckCollect() {
      // 缓存指针
      let _this = this;
      if (_this.userId == "") {
        this.$toast("暂未登录哦");
      } else {
        // console.log(_this.userId);
        //console.log(_this.goodsId);
        // 此处使用node做了代理
        this.$axios
          .get(
            _this.url +
              "/v1/product/" +
              _this.goodsId +
              "?userId=" +
              _this.userId
          )
          .then(function(response) {
            if (response.data.code == 1) {
              //console.log(response.data.message);
              //_this.$toast(response.data.result.hasCollect);
              _this.hasCollect = response.data.result.hasCollect;
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    JumpDelCollect(productIds) {
      // 缓存指针
      let _this = this;
      if (_this.userId == "") {
        this.$toast("暂未登录哦");
      } else {
        // 此处使用node做了代理
        this.$axios
          .post(
            _this.url +
              "/v1/product/uncollect?userId=" +
              _this.userId +
              "&productIds=" +
              productIds
          )
          .then(function(response) {
            if ((response.data.code = 1)) {
              _this.$toast(response.data.message);
              //console.log(response.data.message);
              _this.getPageDetails();
              _this.CheckCollect();
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    JumpShapePost() {
      // this.createQrc();
      this.$nextTick(function() {
        // DOM操作
        this.canvas = document.getElementById("qrccode-canvas");
      });
      // this.$toast("123");
      this.postshow = true;
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  }
};
</script>
<style lang="less">
@import "../../common/css/fontface.css";

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
  background: #f1f1f1;
}
.con_img {
  position: relative;
}
.ms {
  position: absolute;
  top: 20px;
  left: 15px;
}
.share {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  position: fixed;
  top: 40px;
  right: 30px;
  background-image: #faf609;
  text-align: center;
}
</style>


