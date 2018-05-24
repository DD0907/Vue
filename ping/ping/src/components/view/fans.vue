<template>
  <div>
      <section style="text-align:center;"  >
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
                <div slot="title">
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
                </div>
            </van-tab>
            <van-tab>
                <div slot="title">
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
      frienddata: [],
      frienddataVip: [],
      currentRate1: 0,
      currentRate2: 0,
      currentRate3: 0,
      totalNumbers: 0,
      VIPNumbers: 0,
      NorNumbers: 0,
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
    // this.userId = sessionStorage.getItem("userId");
    
    var dataJson = JSON.parse(decodeURIComponent(getCookie("userData")));
    this.userId = dataJson.id;
    // console.log(this.userId);
    this.getfrienddata();
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
    getfrienddata() {
      // 缓存指针
      let _this = this;
      let page = 1;
      let pageSize = 20;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        this.$axios
          .get(
            _this.url +
              "/v1/user/" +
              _this.userId +
              "/myfriends?page=" +
              page++ +
              "&pageSize=" +
              pageSize
          )
          .then(function(response) {
            // 将得到的数据放到vue中的data
            var lengths = response.data.result.length;
            _this.totalNumbers = lengths;
            for (var i = 0; i < lengths; i++) {
              if (response.data.result[i].vip == false) {
                _this.frienddata.push(response.data.result[i]);
              } else {
                _this.frienddataVip.push(response.data.result[i]);
              }
            }
            //console.log(_this.frienddata.length);
            _this.currentRate2=0;
            _this.currentRate3=100;
            _this.NorNumbers = _this.frienddata.length;
            _this.VIPNumbers = _this.frienddataVip.length;
          })
          .catch(function(error) {
            console.log(error);
            _this.$toast("网络异常错误...")
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
        query:{userid:Vipid},
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

