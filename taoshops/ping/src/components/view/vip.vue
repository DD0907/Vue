<template>
  <section style="">
    <div style="position:absolute;background:#ffffff">
        <div style="position:fixed;z-index:999;width:100%">
          <van-search v-model="keyWord" show-action @search="onSearch"  placeholder="搜索淘宝天猫名称或关键词">
             <van-button slot="action" @click="onSearch" type="danger" size="small">超级搜</van-button>
          </van-search>
        </div> 
    </div>
    <section style="height:42px;"></section>
    <section>
      <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
          <div>
            <!-- 无数据的情况 -->
          <div v-if='rowlength==0'>
            <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
              <div style="text-align:center">暂无数据哦...</div>
          </div>
            <!-- list列表 -->
          <div v-else>
              <van-list> 
                <van-row>
                  <div v-for="(r, key) in articles" :key="key" @click="JumpPageDetails(r.productId)">
                    <div v-if="(key+1)%2==1">
                      <van-col span="12" class="img_border" >
                        <van-cell-group>
                          <img :src="r.mainPic" class="goods-imgurl">
                            <div class="good_name" style="height:0.8rem;">{{r.title}}</div>
                              <div>
                                <span>
                                  <van-tag type="danger" v-if="r.couponPrice!=0">{{r.couponPrice}}元优惠券</van-tag>
                                </span>
                                  <van-tag plain class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                              </div>
                              <div style="height:0.8rem">
                                <span class="price_style">￥{{r.price}}</span>
                                <span v-if="r.couponPrice!=0" class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                              </div>
                        </van-cell-group>
                      </van-col>
                    </div>
                    <div v-else>
                      <van-cell-group>
                          <van-col span="12" class="img_border" >
                              <van-cell-group>
                                  <img :src="r.mainPic" class="goods-imgurl">
                                      <div class="good_name" style="height:0.8rem;">{{r.title}}</div>
                                      <div>
                                        <span>
                                          <van-tag type="danger" v-if="r.couponPrice!=0">{{r.couponPrice}}元优惠券</van-tag>
                                        </span>
                                        <van-tag plain  class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                      </div>
                                      <div style="height:0.8rem">
                                        <span class="price_style">￥{{r.price}}</span>
                                        <span v-if="r.couponPrice!=0" class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                        <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                      </div>
                              </van-cell-group>                                    
                          </van-col>
                        </van-cell-group>
                      </div>
                  </div>  
                </van-row>
                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
              </van-list>
          </div>
          </div>
      </van-pull-refresh>  
    </section>
    <section style="height:50px;"></section>
    <!-- 底部标签 -->
    <div>
      <van-row>
        <van-goods-action>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpIndex">
                <div style="text-align:center;">
                  <img src="../../assets/icon/icons_index.png" style="width:0.7rem;"/>
                  <div><span style="font-size:14px;">首页</span></div>
                </div>
            </van-goods-action-mini-btn>
             <van-goods-action-mini-btn style="width:25%;" @click="JumpVip">
              <div style="text-align:center;">
                  <img src="../../assets/icon/icon_search_current.png" style="width:0.7rem;"/>
                   <div><span style="font-size:14px;">超级搜</span></div>
              </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpLove">
              <div style="text-align:center;">
                  <img src="../../assets/icon/icons_love.png" style="width:0.7rem;"/>
                  <div><span style="font-size:14px;">收藏</span></div>
              </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpUser">
                <div style="text-align:center;">
                  <img src="../../assets/icon/icons_my.png" style="width:0.7rem;"/>
                  <div><span style="font-size:14px;">我的</span></div>
                </div>
            </van-goods-action-mini-btn>
        </van-goods-action>
      </van-row>
    </div>
  </section>
</template>
<script>
import notice from "../../assets/icon/icon_notices.png";
export default {
  data() {
    return {
      url: "http://shg.blpev.cn:8080/shg-api/api/",
      keyWord: "",
      rowlength: "",
      isLoading: true,
      articles: {},
      messages: "",
      page: 1
    };
  },
  mounted() {
    // if (this.isWeiXin()) {
    this.onSearch();
    // } else {
    //   this.$router.push({
    //     path: "/ping",
    //     name: "errors"
    //   });
    // }
  },
  methods: {
    //判断是否微信登陆 是不是微信浏览器
    isWeiXin() {
      let ua = window.navigator.userAgent.toLowerCase();
      console.log(ua); //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    },
    onSearch() {
      let _this = this;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/super-search?platform=2" +
            "&pageNo=" +
            _this.page +
            "&q=" +
            _this.keyWord
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.articles = response.data.result;
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          _this.page += 1;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      window.addEventListener("scroll", this.searchfunction);
    },
    searchfunction() {
      let _this = this;
      let sw = true;
      var a =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      var b =
        document.documentElement.scrollTop == 0
          ? document.body.scrollTop
          : document.documentElement.scrollTop;
      var c =
        document.documentElement.scrollTop == 0
          ? document.body.scrollHeight
          : document.documentElement.scrollHeight;
      if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
        //如果开关打开则加载数据
        if (sw == true) {
          // 将开关关闭
          sw = false;
          _this.$axios
            .get(
              _this.url +
                "/product/super-search?platform=2" +
                "&pageNo=" +
                _this.page++ +
                "&q=" +
                _this.keyWord
            )
            .then(function(response) {
              // 将新获取的数据push到vue中的data，就会反应到视图中了
              var lengths = response.data.result.length;
              for (var i = 0; i < lengths; i++) {
                _this.articles.push(response.data.result[i]);
              }
              // 数据更新完毕，将开关打开
              sw = true;
            })
            .catch(function(error) {
              console.log(error);
              _this.$toast("网络异常错误...");
            });
        }
        if (sw == false) {
          _this.messages = "正在加载中...";
        }
      }
    },
    // 跳转商品详情页
    JumpPageDetails(productId) {
      var goodsId = productId;
      this.$router.push({
        path: "/ping",
        name: "PageDetails",
        query: {
          goodsId: goodsId
        },
        params: {
          data: this.value
        }
      });
    },
    JumpLove() {
      this.$router.push({
        path: "/ping",
        name: "love"
      });
    },
    JumpVip() {
      this.$router.push({
        path: "/ping",
        name: "vip"
      });
    },
    JumpIndex() {
      this.$router.push({
        path: "/ping",
        name: "indexs"
      });
    },
    JumpUser() {
      this.$router.push({
        path: "/ping",
        name: "user"
      });
    },
    onRefresh() {
      // 下拉刷新
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.searchfunction);
  }
};
</script>
<style>
body {
  background: #f1f1f1;
}
.good_name {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.3rem;
}
.goods-imgurl {
  width: 100%;
  height: 100%;
  margin: auto;
}
</style>
