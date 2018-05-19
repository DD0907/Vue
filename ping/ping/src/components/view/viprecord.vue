<template>
  <section>
      <section>
        <van-tabs v-model="active">
            <van-tab>
                <div slot="title" @click="getdata">
                   待确认收货
                </div>
                 <!-- <section style="height:2px;">&nbsp;</section> -->
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                    <div v-if="NoReceiptdata.length==0" style="text-align:center;">
                        这里什么也没有
                    </div>
                    <div v-else v-for="(r, key) in NoReceiptdata" :key="key" track-ty='key'>
                        <div class="leftbox">
                            <img :src="r.goodsImageUrl" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                    {{r.goodsName}}
                            </div>
                            <div>
                                <span>实付{{r.goodsPrice}}元</span>
                                <span>奖励{{r.vipIntegral}}佣金币</span>
                            </div>
                        </div>
                        <div style="clear:both;"></div>
                        <div style="padding:2px;">
                            <van-row>
                                <van-col span="12">  
                                    <div style="padding:2px;color:#999;">{{r.orderCreateTime}}已付款</div>
                                </van-col>
                                <van-col span="12"> 
                                    <div style="text-align:right;color:#999"></div>
                                </van-col>
                            </van-row>
                        </div>
                        <section style="height:5px;background:#f1f1f1">&nbsp;</section>
                    </div>
                 </div>
            </van-tab>
            <van-tab>
                <div slot="title" @click="getReviewdata">
                   审核中
                </div>
                <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                    <div v-if="Reviewdata.length==0" style="text-align:center;">
                        这里什么也没有
                    </div>
                    <div v-else v-for="(r, key) in Reviewdata" :key="key">
                        <div class="leftbox">
                            <img :src="r.goodsImageUrl" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                    {{r.goodsName}}
                            </div>
                            <div>
                                <span>实付{{r.goodsPrice}}元</span>
                                <span>奖励{{r.vipIntegral}}佣金币</span>
                            </div>
                        </div>
                        <div style="clear:both;"></div>
                        <div style="padding:2px;">
                            <van-row>
                                <van-col span="12">  
                                    <div style="padding:2px;color:#999;">{{r.orderReceiveTime}}确认收货</div>
                                </van-col>
                                <van-col span="12"> 
                                    <div style="text-align:right;color:#999">审核需15天</div>
                                </van-col>
                            </van-row>
                        </div>
                        <section style="height:5px;background:#f1f1f1">&nbsp;</section>
                    </div>                 
                 </div>
            </van-tab>
            <van-tab>
                <div slot="title" @click="getRewarddata">
                   已奖励
                </div>
                <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                    <div v-if="Rewarddata.length==0" style="text-align:center;">
                        这里什么也没有
                    </div>
                    <div v-else v-for="(r, key) in Rewarddata" :key="key">
                        <div class="leftbox">
                            <img :src="r.goodsImageUrl" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                    {{r.goodsName}}
                            </div>
                            <div>
                                <span>实付{{r.goodsPrice}}元</span>
                                <span>奖励{{r.vipIntegral}}佣金币</span>
                            </div>
                        </div>
                        <div style="clear:both;"></div>
                        <div style="padding:2px;">
                            <van-row>
                                <van-col span="12">  
                                    <div style="padding:2px;color:#999;">{{r.rewardIntegralTime}}已奖励</div>
                                </van-col>
                                <van-col span="12"> 
                                    <div style="text-align:right;color:#999"></div>
                                </van-col>
                            </van-row>
                        </div>
                       <section style="height:5px;background:#f1f1f1">&nbsp;</section>
                    </div>                    
                 </div>
            </van-tab>
            <van-tab>
                <div slot="title" @click="getFailuredata">
                   已失效
                </div>
                <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                    <div v-if="Failuredata.length==0" style="text-align:center;">
                        这里什么也没有
                    </div>
                    <div v-else v-for="(r, key) in Failuredata" :key="key">
                        <div class="leftbox">
                            <img :src="r.goodsImageUrl" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                    {{r.goodsName}}
                            </div>
                            <div>
                                <span>实付{{r.goodsPrice}}元</span>
                                <span>奖励{{r.vipIntegral}}佣金币</span>
                            </div>
                        </div>
                        <div style="clear:both;"></div>
                        <div style="padding:2px;">
                            <van-row>
                                <van-col span="12">  
                                    <div style="padding:2px;color:#999;">{{r.deductIntegralTime}}已失效</div>
                                </van-col>
                                <van-col span="12"> 
                                    <div style="text-align:right;color:#999"></div>
                                </van-col>
                            </van-row>
                        </div>
                       <section style="height:5px;background:#f1f1f1">&nbsp;</section> 
                    </div>                   
                 </div>
            </van-tab>
        </van-tabs>
      </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      url: "http://ptk.baolinzhe.com/ptk/api/",
      active: 0,
      NoReceiptdata: {}, //待确认收货
      Reviewdata: {}, //审核中
      Rewarddata: {}, //已奖励
      Failuredata: {} //已失效
    };
  },
  mounted() {
    this.id = sessionStorage.getItem("userId");
    this.getParams();
    this.getdata();
    this.getReviewdata();
    this.getRewarddata();
  },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      var routerParams = this.$route.params.data;
      // 将数据放在当前组件的数据内
      this.active = routerParams;
      //alert(this.active)
    },
    getdata() {
      // 缓存指针
      let _this = this;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        let page = 1;
        let pageSize = 20;
        let sw = true;
        let orderStatus = 1;
        this.$axios
          .get(
            _this.url +
              "/v1/order/list?userId=" +
              _this.id +
              "&orderStatus=" +
              orderStatus +
              "&page=" +
              page++ +
              "&pageSize=" +
              pageSize
          )
          .then(function(response) {
            // 将得到的数据放到vue中的data
            if (response.data.code == 1) {
              _this.NoReceiptdata = response.data.result;
            }
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
                    "/v1/order/list?userId=" +
                    _this.id +
                    "&orderStatus=" +
                    orderStatus +
                    "&page=" +
                    page++ +
                    "&pageSize=" +
                    pageSize
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.NoReceiptdata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                });
            }
            if (sw == false) {
              console.log("正在加载中");
            }
          }
          // console.log(sw);
        });
      }
    },
    getReviewdata() {
      // 缓存指针
      let _this = this;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        let page = 1;
        let pageSize = 20;
        let sw = true;
        let orderStatus = 2;
        this.$axios
          .get(
            _this.url +
              "/v1/order/list?userId=" +
              _this.id +
              "&orderStatus=" +
              orderStatus +
              "&page=" +
              page++ +
              "&pageSize=" +
              pageSize
          )
          .then(function(response) {
            // 将得到的数据放到vue中的data
            if (response.data.code == 1) {
              _this.Reviewdata = response.data.result;
            }
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
                    "/v1/order/list?userId=" +
                    _this.id +
                    "&orderStatus=" +
                    orderStatus +
                    "&page=" +
                    page++ +
                    "&pageSize=" +
                    pageSize
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.Reviewdata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                });
            }
            if (sw == false) {
              console.log("正在加载中");
            }
          }
        });
      }
    },
    getRewarddata() {
      // 缓存指针
      let _this = this;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        let page = 1;
        let pageSize = 20;
        let sw = true;
        let orderStatus = 3;
        this.$axios
          .get(
            _this.url +
              "/v1/order/list?userId=" +
              _this.id +
              "&orderStatus=" +
              orderStatus +
              "&page=" +
              page++ +
              "&pageSize=" +
              pageSize
          )
          .then(function(response) {
            // 将得到的数据放到vue中的data
            if (response.data.code == 1) {
              _this.Rewarddata = response.data.result;
            }
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
                    "/v1/order/list?userId=" +
                    _this.id +
                    "&orderStatus=" +
                    orderStatus +
                    "&page=" +
                    page++ +
                    "&pageSize=" +
                    pageSize
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.Rewarddata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                });
            }
            if (sw == false) {
              console.log("正在加载中");
            }
          }
        });
      }
    },
    getFailuredata() {
      // 缓存指针
      let _this = this;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        let page = 1;
        let pageSize = 20;
        let sw = true;
        let orderStatus = 4;
        this.$axios
          .get(
            _this.url +
              "/v1/order/list?userId=" +
              _this.id +
              "&orderStatus=" +
              orderStatus +
              "&page=" +
              page++ +
              "&pageSize=" +
              pageSize
          )
          .then(function(response) {
            // 将得到的数据放到vue中的data
            if (response.data.code == 1) {
              _this.Failuredata = response.data.result;
            }
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
                    "/v1/order/list?userId=" +
                    _this.id +
                    "&orderStatus=" +
                    orderStatus +
                    "&page=" +
                    page++ +
                    "&pageSize=" +
                    pageSize
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.Failuredata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                });
            }
            if (sw == false) {
              console.log("正在加载中");
            }
          }
        });
      }
    }
  }
};
</script>

<style>
.leftbox {
  text-align: center;
  float: left;
  border: 0.1rem solid #ffffff;
}
body {
  background: #f1f1f1;
}
</style>

