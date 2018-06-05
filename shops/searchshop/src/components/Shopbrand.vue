<template>
<div>
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
                                        <div class="good_name" style="height:0.8rem;">
                                        <van-tag type="danger">{{r.source}}</van-tag>{{r.title}}</div>
                                        <div>
                                            <span>
                                                <van-tag type="danger" v-if="r.couponPrice!=0">{{r.couponPrice}}元优惠券</van-tag>
                                            </span>
                                            <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                        </div>
                                        <div style="height:0.8rem">
                                        <span class="price_style">￥{{r.price}}</span>
                                        <span v-if="r.couponPrice!=0" class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                            <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                        </div>
                                        </van-cell-group>
                                    </van-col>
                                </div>
                                <div v-else>
                                    <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                  <van-tag type="danger">{{r.source}}</van-tag>{{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger" v-if="r.couponPrice!=0">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span v-if="r.couponPrice!=0" class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                    </van-cell-group>
                                </div>
                            </div>  
                            </van-row>
                        </van-list>
                </div>
            </div>
        </van-pull-refresh> 
    </section>
    <div class="bottom_nav5"><img src="./../assets/image/icon_top.png" @click="back_top" style="width:1.2rem;"/></div> 
</div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      isLoading: true,
      url: "http://shg.blpev.cn:8080/shg-api/api/product/",
      articles: {},
      urlKey: "",
      rowlength: 0,
      pid: "",
      taobaoId:''
    };
  },
  mounted() {
    var keyword = window.location.href;
    var i = keyword.indexOf("pid=");
    this.pid = decodeURI(keyword.substring(i + 4,  keyword.lastIndexOf("&taobaoId")));
    // alert(this.pid)
    var taobaoid=keyword.indexOf("&taobaoId=");
    this.taobaoId=decodeURI(keyword.substring(taobaoid+10),keyword.length);
    // alert(this.taobaoId)
    this.getbranddata();
  },
  methods: {
       back_top() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    getbranddata() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let page = 1;
      // 此处使用node做了代理
      this.$axios
        .get(_this.url + "/brand")
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.articles = response.data.result;
          // console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          page += 1;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    onRefresh() {
      // 下拉刷新
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
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
          taobaoId:this.taobaoId
        }
      });
    }
  }
};
</script>
<style>
.goods-imgurl {
  width: 100%;
  height: 100%;
  margin: auto;
}
.bottom_nav5 {
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    position: fixed;
    bottom: 40px;
    right: 30px;
    text-align: center;
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
