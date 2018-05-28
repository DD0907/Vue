<template>
  <div>
      <section style="text-align:center;" >
        <van-row>
            <van-col span="8">
                <h3>粉丝总人数</h3>
                <van-circle v-model="currentRate1" :rate="100" :speed="50" :text="totalNumber" :stroke-width="60"/>
            </van-col>
            <van-col span="8">
                <h3>拼团客</h3>
                <van-circle v-model="currentRate2" :rate="(NorNumbers/totalNumbers)*100" :speed="50" color="#13ce66" :text="NorNumber" :stroke-width="60"/>
            </van-col>
            <van-col span="8">
                <h3>超级会员</h3>
                <van-circle v-model="currentRate3" :rate="(VIPNumbers/totalNumbers)*100" :speed="50" color="cyan" :text="VIPNumber" :stroke-width="60"/>
            </van-col>
        </van-row>
        <div style="border-bottom:0.1px solid #f1f1f1;">&nbsp;</div>
      </section>
      <section>
          <van-tabs>
            <van-tab>
                <div slot="title" @click="getfrienddata">
                    <span>拼团客</span>
                </div>
                <div>
                    <div v-if="NorNumbers == 0">
                    <div style="text-align:center;">这里什么也没有</div>
                    </div>
                    <div v-else style="background:#ffffff" v-for="(r, key) in frienddata" :key="key">
                      <div >
                        <van-row>
                            <van-col span="5">
                              <div class="imgs" v-if="r.headPic!=''">
                                <img :src="r.headPic"/>
                              </div > 
                              <div class="imgs" v-else>
                                <img :src="imageURL"/>
                              </div >  
                            </van-col>
                            <van-col span="6">
                                <div style="margin-top:35%;font-size:18px;">{{r.nickname}}</div>
                            </van-col>
                            <van-col span="12">
                                <div style="text-align:right;margin-top:14%;color:red;" @click="JumpPersonal(r.id)">
                                  <van-icon name="e630"/>
                                  <div style="font-size:14px;">查 看</div>
                                  </div>
                            </van-col>
                        </van-row>
                      </div>
                      </div>
                      <div style="text-align:center;"><div style="margin-top:10px;">&nbsp;{{messages}}</div></div>                        
                </div>
            </van-tab>
            <van-tab>
                <div slot="title" @click="getfriendVipdata">
                    <span>超级会员</span>
                </div>
                <div>
                  <div v-if="VIPNumbers == 0">
                      <div style="text-align:center;">这里什么也没有...</div>
                    </div>
                  <div v-else style="background:#ffffff" v-for="(r, key) in frienddataVip" :key="key">
                      <div >
                        <van-row>
                            <van-col span="5">
                              <div class="imgs" v-if="r.headPic!=''">
                                <img :src="r.headPic"/>
                              </div > 
                              <div class="imgs" v-else>
                                <img :src="imageURL"/>
                              </div >  
                            </van-col>
                            <van-col span="6">
                                <div style="margin-top:35%;font-size:18px;">{{r.nickname}}</div>
                            </van-col>
                            <van-col span="12">
                                <div style="text-align:right;margin-top:14%;color:red;" @click="JumpPersonalVip(r.id)">
                                  <van-icon name="e630"/>
                                  <div style="font-size:14px;">查 看</div>
                                  </div>
                            </van-col>
                        </van-row>
                      </div>
                      </div>
                      <div style="text-align:center;"><div style="margin-top:10px;">&nbsp;{{messages}}</div></div>                        
                </div>
            </van-tab>
       </van-tabs>
      </section>
  </div>
</template>
<script>
import icon_nickname from "../../assets/icon/icon_head.png";

export default {
  data() {
    return {
      userId: "",
      url: "http://ptk.baolinzhe.com/ptk/api/",
      imageURL: icon_nickname,
      frienddata: {},
      frienddataVip: {},
      currentRate1: 0,
      currentRate2: 0,
      currentRate3: 0,
      totalNumbers: 0,
      VIPNumbers: 0,
      NorNumbers: 0,
      messages: ""
    };
  },
  computed: {
    totalNumber() {
      return this.totalNumbers + "人";
    },
    NorNumber() {
      return this.NorNumbers + "人";
    },
    VIPNumber() {
      return this.VIPNumbers + "人";
    }
  },
  mounted() {
    var dataJson = JSON.parse(
      decodeURIComponent(this.cookies.getCookie("userData"))
    );
    this.userId = dataJson.id;
    // this.userId = 19;
    // console.log(this.userId);
    this.getfanssumdata();
    this.getfrienddata();
  },
  methods: {
    getfanssumdata() {
      let _this = this;
      this.$axios
        .get(_this.url + "/v1/user/" + _this.userId + "/fansnum")
        .then(function(response) {
          // 将得到的数据放到vue中的data
          // console.log(response.data.result.allSum);
          _this.totalNumbers = response.data.result.allSum;
          _this.NorNumbers = response.data.result.ptkSum;
          _this.VIPNumbers = _this.totalNumbers - _this.NorNumbers;
          _this.currentRate2 = 0;
          _this.currentRate3 = 100;
        })
        .catch(function(error) {
          console.log(error);
          this.$toast("网络异常错误...");
        });
    },
    getfrienddata() {
      // 缓存指针
      let _this = this;
      let page = 1;
      let sw = true;
      let pageSize = 10;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        this.$axios
          .get(
            _this.url +
              "/v1/user/" +
              _this.userId +
              "/myfriends?isVip=false&page=" +
              page++ +
              "&pageSize=" +
              pageSize
          )
          .then(function(response) {
            // 将得到的数据放到vue中的data
            var lengths = response.data.result.length;
            // console.log(response.data.result);
            _this.frienddata = response.data.result;
          })
          .catch(function(error) {
            console.log(error);
            _this.$toast("网络异常错误...");
          });
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
                    "/v1/user/" +
                    _this.userId +
                    "/myfriends?isVip=false&page=" +
                    page++ +
                    "&pageSize=" +
                    pageSize
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.frienddata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                  if (lengths == 0 || lengths == null) {
                    _this.messages =
                      "---------------------------我也是有底线的---------------------------";
                  }
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
        });
      }
    },
    getfriendVipdata() {
      // 缓存指针
      let _this = this;
      let page = 1;
      let sw = true;
      let pageSize = 10;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        this.$axios
          .get(
            _this.url +
              "/v1/user/" +
              _this.userId +
              "/myfriends?isVip=true&page=" +
              page++ +
              "&pageSize=" +
              pageSize
          )
          .then(function(response) {
            // 将得到的数据放到vue中的data
            var lengths = response.data.result.length;
            // console.log(response.data.result);
            _this.frienddataVip = response.data.result;
          })
          .catch(function(error) {
            console.log(error);
            _this.$toast("网络异常错误...");
          });
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
                    "/v1/user/" +
                    _this.userId +
                    "/myfriends?isVip=true&page=" +
                    page++ +
                    "&pageSize=" +
                    pageSize
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.frienddataVip.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                  if (lengths == 0 || lengths == null) {
                    _this.messages =
                      "---------------------------我也是有底线的---------------------------";
                  }
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
        });
      }
    },
    JumpPersonal(id) {
      this.$router.push({
        path: "/ping",
        name: "personal",
        params: {
          friendId: id
        }
      });
    },
    JumpPersonalVip(Vipid) {
      this.$router.push({
        path: "/ping",
        name: "personalVip",
        query: { userid: Vipid }
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
.imgs {
  background: #ffffff;
  height: 1.5rem;
  margin: 15px;
  text-align: center;
}
.imgs img {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0px auto;
}
</style>

