<template>
<div @click="getdata">
   <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
     <div>
        <!-- 无数据的情况 -->
        <div v-if='rowlength==0'>
            <img src="../../assets/icon/icon_kong.png"/>
        </div>
         <!-- list列表 -->
        <div v-else>
        <van-list> 
          <van-row>
              <div v-for="(r, key) in articles" :key="key">
                <div v-if="(key+1)%2==1">
                  <van-col span="12" class="img_border" >
                    <van-cell-group>
                      <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                    <div class="good_name" style="height:1.0rem;">{{r.goodsName}}</div>
                  <div>
                    <span>
                    <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                    </span>
                    <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                    <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                    </div>
                    <div style="height:0.8rem">
                    <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                    <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                    <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                    </div>
                    </van-cell-group>
                    </van-col>
                  </div>
                  <div v-else>
                      <van-cell-group>
                        <van-col span="12" class="img_border" >
                      <van-cell-group>
                      <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                      <div class="good_name" style="height:1.0rem;">{{r.goodsName}}</div>
                      <div>
                      <span>
                      <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                      </span>
                      <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                      <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                      </div>
                      <div style="height:0.8rem">
                      <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                      <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                      <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
</div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      isLoading: false,
      articles: {},
      messages: "",
      rowlength: "",
      page: 1,
      url: "http://ptk.baolinzhe.com:8081/ptk/api",
      pageSize: 10,
      keyword: "",
      categoryId: 13
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      // 此处使用node做了代理
      this.$axios
        .get(
          this.url +
            "/v1/product/list?keyword=" +
            this.keyword +
            "&categoryId=" +
            this.categoryId +
            "&page=" +
            this.page++ +
            "&pageSize=" +
            this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.articles = response.data.result;
          console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
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
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.keyword +
                  "&categoryId=" +
                  _this.categoryId +
                  "&page=" +
                  _this.page++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
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
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
     onRefresh() {
      // 下拉刷新
      setTimeout(() => {
        this.$toast("刷新成功");
        this.getdata();
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>
<style lang="less">
body {
  background: #f1f1f1;
}
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
  bottom: 50px;
  right: 20px;
  background-image: #faf609;
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
.good_name {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.3rem;
}
</style>