<template>
  <section>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div>
          <!-- 无数据的情况 -->
          <div v-if='rowlength==0'>
            <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
            <div style="text-align:center;">暂无收藏哦.....</div>
          </div>
          <div v-else>
          <van-list>
              <section v-for="(r, key) in articles" :key="key" track-ty='key'>
                  <van-card :thumb="r.goodsThumbnailUrl" class="goods-imgurl">
                      <div slot="title">
                        <span style="font-size:12px;" @click="JumpPageDetails(r.goodsId)">{{r.goodsName}}</span>
                      </div>
                      <div slot="desc">
                        <span style="color:#999;font-size:10px;">已拼{{r.salesNum}}件</span>
                      </div>
                      <div slot="tags" style="text-align:left;">
                              <span style="font-size:16px;color:red">￥{{r.normalCouponAfterPrice}}</span>
                              <span style="font-size:12px;text-decoration:line-through;color:#999">￥{{r.minNormalPrice}}</span>
                              <van-tag type="danger">优惠券{{r.couponPrice}}元</van-tag>
                          </div>
                          <div slot="tags" style="text-align:left;">
                              <span style="font-size:10px;"><van-tag plain type="danger">约赚{{r.integral}}佣金币</van-tag></span>
                          </div>
                          <div slot="footer" style="text-align:right;">
                              <section style="text-align:center;" @click="JumpDelCollect(r.goodsId)">
                              <img src="../../assets/icon/icon_del.png" style="width:0.3rem;"/>
                              <span style="font-size:10px;color:#999">删除</span>
                              </section>
                          </div>
                  </van-card>
                  <section style="height:2px;"></section>
              </section>
            </van-list>
          </div>
        </div>
      </van-pull-refresh>
    <!-- 底部标签 -->
    <div>
        <van-row>
            <van-goods-action>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpIndex">
                <div style="text-align:center;">
                  <van-icon name="e606"/>
                  <div style="margin:1px;">首页</div>
                </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" >
              <div style="text-align:center;color:red;">
                  <van-icon name="e619"/>
                  <div style="margin:1px;">收藏</div>
              </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpVip">
              <div style="text-align:center;">
                  <van-icon name="e607"/>
                  <div style="margin:1px;">超级会员</div>
              </div>
            </van-goods-action-mini-btn>
            <!-- <van-goods-action-mini-btn  style="width:25%;" @click="JumpShare">
                <div style="text-align:center;">
                  <van-icon name="e619"/>
                  <div style="margin:1px;">晒单分享</div>
                </div>
            </van-goods-action-mini-btn> -->
            <van-goods-action-mini-btn style="width:25%;" @click="JumpUser">
                <div style="text-align:center;">
                  <van-icon name="e6a4"/>
                  <div style="margin:1px;">我的</div>
                </div>
            </van-goods-action-mini-btn>
        </van-goods-action>
        </van-row>
    </div>
    <section style="height:50px;"></section>
  </section>
</template>
<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      isLoading: false,
      url: "http://ptk.baolinzhe.com/ptk/api/",
      userId: 3,
      articles: {},
      rowlength: ""
    };
  },
  created() {
    this.getCollectdata();
  },
  methods: {
     // 跳转商品详情页
    JumpPageDetails(goodsId) {
      var goodsId = goodsId;
      // alert(goodsId)
      this.$router.push({
        path: "/ping",
        name: "PageDetails",
        params: {
          // data: this.value,
          goodsId: goodsId
        }
      });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.getCollectdata();
        this.count++;
      }, 500);
    },
    JumpShare() {
      this.$router.push({
        path: "/ping",
        name: "share"
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
    getCollectdata() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let page = 1;
      // 此处使用node做了代理
      this.$axios
        .post(
          _this.url +
            "/v1/product/my_collect?userId=" +
            _this.userId +
            "&page=" +
            page++
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
    },
    JumpDelCollect(productIds) {
        Dialog.confirm({
        title: "确认删除",
        message: "确定删除您的收藏吗?",
        confirmButtonText:'确认删除',
        cancelButtonText:'取消'
      })
        .then(() => {
          // 缓存指针
          let _this = this;
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
              if (response.data.code = 1) {
                console.log(response.data.message);
                _this.getCollectdata();
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(() => {
          // on cancel
        });
    }, // 跳转商品详情页
    JumpPageDetails(goodsId) {
      var goodsId = goodsId;
      // alert(goodsId)
      this.$router.push({
        path: "/ping",
        name: "PageDetails",
        params: {
          // data: this.value,
          goodsId: goodsId
        }
      });
    }
  }
};
</script>
<style>
@import "../../common/css/fontface.css";
body {
  background: #f1f1f1;
}
.goods-imgurl {
  width: 100%;
  height: 100%;
  margin: auto;
}
</style>
