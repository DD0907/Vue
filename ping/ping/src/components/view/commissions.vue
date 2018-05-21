<template>
  <div style="background:#ffffff;">
      <section>
          <van-tabs v-model="active">
            <van-tab>
                <div slot="title">
                    <span @click="getcommissiondata">全部</span>
                </div>
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list>
                    <section style="background:#ffffff;">
                    <div v-if="lengths==''" style="text-align:center;color:#999">
                        ---------------------------我也是有底线的---------------------------
                    </div>
                    <div v-else v-for="(r, key) in recordsdata" :key="key" >
                        <div style="margin:12px;">
                        <van-row>
                            <van-col span="12" style="font-size:18px;">{{r.source}}</van-col>
                            <van-col span="12">
                                <div style="text-align:right;font-size:18px;">
                                    <span v-if="r.ptype==1" style="color:green">+{{r.integral}}</span>
                                    <span v-else-if="r.ptype==2" style="color:red">-{{r.integral}}</span>
                                </div></van-col>
                        </van-row>
                        <van-row>
                            <van-col span="12" style="color:#999;font-size:14px;margin-top:5px;">{{r.createdAt}}</van-col>
                            <van-col span="12"><div style="text-align:right;margin-top:5px;">余额：{{r.surplusIntegral}}</div></van-col>
                        </van-row>
                        <van-row>
                            <div style="font-size:14px;margin-top:5px;">{{r.note}}</div>
                        </van-row>
                        </div>
                        <section style="height:5px;background:#f1f1f1;"></section>
                    </div>
                </section>
                <div style="color:#999;text-align:center;" v-if="lengths!=0">{{messages}}</div>
                </van-list>
                </van-pull-refresh>
            </van-tab>
           <van-tab>
                <div slot="title">
                    <span @click="getyongjindata">佣金</span>
                </div>
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list>
                    <section style="background:#ffffff;">
                    <div v-if="lengths==''" style="text-align:center;color:#999">
                 ---------------------------我也是有底线的---------------------------
                    </div>
                    <div v-else v-for="(r, key) in yongjindata" :key="key" >
                        <div style="margin:12px;">
                        <van-row>
                            <van-col span="12" style="font-size:18px;">{{r.source}}</van-col>
                            <van-col span="12">
                                <div style="text-align:right;font-size:18px;">
                                    <span v-if="r.ptype==1" style="color:green">+{{r.integral}}</span>
                                    <span v-else-if="r.ptype==2" style="color:red">-{{r.integral}}</span>
                                </div></van-col>
                        </van-row>
                        <van-row>
                            <van-col span="12" style="color:#999;font-size:14px;margin-top:5px;">{{r.createdAt}}</van-col>
                            <van-col span="12"><div style="text-align:right;margin-top:5px;">余额：{{r.surplusIntegral}}</div></van-col>
                        </van-row>
                        <van-row>
                            <div style="font-size:14px;margin-top:5px;">{{r.note}}</div>
                        </van-row>
                        </div>
                        <section style="height:5px;background:#f1f1f1;"></section>
                    </div>
                </section>
                <div style="color:#999;text-align:center;" v-if="lengths!=0">{{messages}}</div>
                </van-list>
                </van-pull-refresh>
            </van-tab>
           <van-tab>
                <div slot="title">
                    <span @click="getshouyidata">收益</span>
                </div>
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list>
                    <section style="background:#ffffff;">
                    <div v-if="lengths==''" style="text-align:center;color:#999">
                        ---------------------------我也是有底线的---------------------------
                    </div>
                    <div v-else v-for="(r, key) in shouyidata" :key="key" >
                        <div style="margin:12px;">
                        <van-row>
                            <van-col span="12" style="font-size:18px;">{{r.source}}</van-col>
                            <van-col span="12">
                                <div style="text-align:right;font-size:18px;">
                                    <span v-if="r.ptype==1" style="color:green">+{{r.integral}}</span>
                                    <span v-else-if="r.ptype==2" style="color:red">-{{r.integral}}</span>
                                </div></van-col>
                        </van-row>
                        <van-row>
                            <van-col span="12" style="color:#999;font-size:14px;margin-top:5px;">{{r.createdAt}}</van-col>
                            <van-col span="12"><div style="text-align:right;margin-top:5px;">余额：{{r.surplusIntegral}}</div></van-col>
                        </van-row>
                        <van-row>
                            <div style="font-size:14px;margin-top:5px;">{{r.note}}</div>
                        </van-row>
                        </div>
                        <section style="height:5px;background:#f1f1f1;"></section>
                    </div>
                </section>
                <div style="color:#999;text-align:center;" v-if="lengths!=0">{{messages}}</div>
                </van-list>
                </van-pull-refresh>
            </van-tab>
           <van-tab>
                <div slot="title">
                    <span @click="gettixiandata">提现</span>
                </div>
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list>
                    <section style="background:#ffffff;">
                    <div v-if="lengths==''" style="text-align:center;color:#999">
                        ---------------------------我也是有底线的---------------------------
                    </div>
                    <div v-else v-for="(r, key) in tixiandata" :key="key" >
                        <div style="margin:12px;">
                        <van-row>
                            <van-col span="12" style="font-size:18px;">{{r.source}}</van-col>
                            <van-col span="12">
                                <div style="text-align:right;font-size:18px;">
                                    <span v-if="r.ptype==1" style="color:green">+{{r.integral}}</span>
                                    <span v-else-if="r.ptype==2" style="color:red">-{{r.integral}}</span>
                                </div></van-col>
                        </van-row>
                        <van-row>
                            <van-col span="12" style="color:#999;font-size:14px;margin-top:5px;">{{r.createdAt}}</van-col>
                            <van-col span="12"><div style="text-align:right;margin-top:5px;">余额：{{r.surplusIntegral}}</div></van-col>
                        </van-row>
                        <van-row>
                            <div style="font-size:14px;margin-top:5px;">{{r.note}}</div>
                        </van-row>
                        </div>
                        <section style="height:5px;background:#f1f1f1;"></section>
                    </div>
                </section>
                </van-list>
                <div style="color:#999;text-align:center;" v-if="lengths!=0">{{messages}}</div>
                </van-pull-refresh>
            </van-tab>
        </van-tabs>
      </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      id: "",
      url: "http://ptk.baolinzhe.com/ptk/api/",
      recordsdata: {},
      yongjindata: {},
      shouyidata: {},
      tixiandata: {},
      isLoading: true,
      lengths: "",
      messages: ""
    };
  },
  mounted() {
    this.getParams();
    this.id = sessionStorage.getItem("userId");
    this.getcommissiondata();
    this.gettixiandata();
    this.getshouyidata();
  },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      var routerParams = this.$route.params.data;
      // 将数据放在当前组件的数据内
      this.active = routerParams;
    },
    onRefresh() {
      // 下拉刷新
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    getcommissiondata() {
      // 缓存指针
      let _this = this;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        let page = 1;
        let pageSize = 20;
        let sw = true;
        this.$axios
          .get(
            _this.url +
              "/v1/integral/records?userId=" +
              _this.id +
              "&type=0&page=" +
              page +
              "&pageSize=" +
              pageSize
          )
          .then(function(response) {
            // 将得到的数据放到vue中的data
            if (response.data.code == 1) {
              _this.recordsdata = response.data.result.records;
              _this.lengths = response.data.result.records.length;
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
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/v1/integral/records?userId=" +
                    _this.id +
                    "&type=0&page=" +
                    page +
                    "&pageSize=" +
                    pageSize
                )
                .then(function(response) {
                  // 将得到的数据放到vue中的data
                  if (response.data.code == 1) {
                    var lengths = response.data.result.length;
                    for (var i = 0; i < lengths; i++) {
                      _this.recordsdata.push(response.data.result[i]);
                    }
                  }
                  sw = true;
                  if (lengths == 0 || lengths == null) {
                    _this.messages =
                      "---------------------------我也是有底线的---------------------------";
                  }
                })
                .catch(function(error) {
                  console.log(error);
                });
            }
            if (sw == false) {
               _this.messages ="正在加载中....";
              // console.log("正在加载中");
            }
          }
        });
      }
    },
    getyongjindata() {
      let _this = this;
      let page = 1;
      let pageSize = 10;
      let sw = true;
      this.$axios
        .get(
          _this.url +
            "/v1/integral/records?userId=" +
            _this.id +
            "&type=1&page=" +
            page +
            "&pageSize=" +
            pageSize
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          if (response.data.code == 1) {
            _this.yongjindata = response.data.result.records;
            _this.lengths = response.data.result.records.length;
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
          // console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/integral/records?userId=" +
                  _this.id +
                  "&type=1&page=" +
                  page +
                  "&pageSize=" +
                  pageSize
              )
              .then(function(response) {
                // 将得到的数据放到vue中的data
                if (response.data.code == 1) {
                  // console.log(response.data.result);
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.yongjindata.push(response.data.result[i]);
                  }
                }
                sw = true;
                if (lengths == 0 || lengths == null) {
                  _this.messages =
                    "---------------------------我也是有底线的---------------------------";
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            _this.messages ="正在加载中....";
            // console.log("正在加载中");
          }
        }
      });
    },
    getshouyidata() {
      let _this = this;
      let page = 1;
      let pageSize = 10;
      let sw = true;
      this.$axios
        .get(
          _this.url +
            "/v1/integral/records?userId=" +
            _this.id +
            "&type=2&page=" +
            page +
            "&pageSize=" +
            pageSize
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          if (response.data.code == 1) {
            //console.log(response.data.result);
            _this.shouyidata = response.data.result.records;
            _this.lengths = response.data.result.records.length;
            // console.log(_this.shouyidata);
          }
        })
        .catch(function(error) {
          console.log(error);
        }); // 注册scroll事件并监听
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
          //console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/integral/records?userId=" +
                  _this.id +
                  "&type=2&page=" +
                  page +
                  "&pageSize=" +
                  pageSize
              )
              .then(function(response) {
                // 将得到的数据放到vue中的data
                if (response.data.code == 1) {
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.shouyidata.push(response.data.result[i]);
                  }
                }
                sw = true;
                if (lengths == 0 || lengths == null) {
                  _this.messages =
                    "---------------------------我也是有底线的---------------------------";
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
             _this.messages ="正在加载中....";
            // console.log("正在加载中");
          }
        }
      });
    },
    gettixiandata() {
      let _this = this;
      let page = 1;
      let pageSize = 10;
      let sw = true;
      this.$axios
        .get(
          _this.url +
            "/v1/integral/records?userId=" +
            _this.id +
            "&type=3&page=" +
            page +
            "&pageSize=" +
            pageSize
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          if (response.data.code == 1) {
            _this.tixiandata = response.data.result.records;
            _this.lengths = response.data.result.records.length;
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
          // console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/integral/records?userId=" +
                  _this.id +
                  "&type=3&page=" +
                  page +
                  "&pageSize=" +
                  pageSize
              )
              .then(function(response) {
                if (response.data.code == 1) {
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.tixiandata.push(response.data.result[i]);
                  }
                }
                sw = true;
                if (lengths == 0 || lengths == null) {
                  _this.messages =
                    "---------------------------我也是有底线的---------------------------";
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            _this.messages ="正在加载中....";
          }
        }
      });
    }
  }
};
</script>
<style lang="less">
body {
  background: #f1f1f1;
}
.leftbox {
  text-align: center;
  float: left;
  border: 0.1rem solid #ffffff;
}
</style>