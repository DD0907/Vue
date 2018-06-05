<template>
    <section>
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
            <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
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
                                  <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
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
                                        <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
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
    <div class="bottom_nav5"><img src="./../assets/image/icon_top.png" @click="back_top" style="width:1.2rem;"/></div> 
    </section>
</template>
<script>
export default {
  data() {
    return {
      url: "http://shg.blpev.cn:8080/shg-api/api/",
      keyWord: "",
      rowlength: "",
      isLoading: true,
      articles: {},
      messages: "",
      page: 1,
      pagesize: 10,
      pid: "",
      taobaoId: ""
    };
  },
  activated() {
    var keywords = window.location.href;
    // alert(keywords.indexOf("?pid="));
    // alert(keywords.lastIndexOf("&keyword"));
    this.pid = keywords.substring(
      keywords.indexOf("?pid=") + 5,
      keywords.lastIndexOf("&keyword")
    );
    // alert(this.pid)
    var i = keywords.indexOf("&keyword=");
    this.keyWord = decodeURI(
      keywords.substring(i + 9, keywords.lastIndexOf("&taobaoId"))
    );
    // alert(this.keyWord)
    var taobaoid = keywords.indexOf("&taobaoId=");
    this.taobaoId = decodeURI(
      keywords.substring(taobaoid + 10, keywords.length)
    );
    // alert(this.taobaoId)
    this.onSearch();
  },
  methods: {
    back_top() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    onSearch() {
      let _this = this;
      // 此处使用node做了代理product/other/list?keyword=%E5%B7%A5%E4%B8%9A&page=1&pageRows=20
      this.$axios
        .get(
          _this.url +
            "/product/other/list?keyword=" +
            _this.keyWord +
            "&page=" +
            _this.page +
            "&pageRows=" +
            _this.pagesize +
            "&sortType=time"
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
                "/product/other/list?keyword=" +
                _this.keyWord +
                "&page=" +
                _this.page++ +
                "&pageRows=" +
                _this.pagesize +
                "&sortType=time"
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
        path: "/searchshop",
        name: "shopDetails",
        query: {
          goodsId: goodsId,
          pid: this.pid,
          taobaoId: this.taobaoId
        }
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
.bottom_nav5 {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 30px;
  text-align: center;
}
.goods-imgurl {
  width: 100%;
  height: 100%;
  margin: auto;
}

.img_border {
  border: 0.05rem solid #f1f1f1;
}

.intergral_style {
  color: #fa2509;
  font-size: 0.3rem;
}

.price_style {
  color: red;
  font-size: 0.5rem;
}

.goods-express {
  color: #999;
  font-size: 0.3rem;
}

.salenumber_style {
  color: #999;
  font-size: 0.2rem;
}
</style>