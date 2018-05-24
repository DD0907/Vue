<template>
  <section>
     <section class="back_img">
          <div style="height:30px;text-align:right;">
          </div>
          <div style="text-align:center;">
            <div v-if="userdata.headPic==''||userdata.headPic==null">
                <img src="../../assets/icon/icon_head.png" style="width:2.0rem;height:2.0rem;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;"/>
            </div>
             <div v-else>
                <img :src="headurl" style="width:2.0rem;height:2.0rem;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;"/>
            </div>
            <div>
                <span style="font-size:18px;">{{userdata.nickname}}</span>
               <div>
                  <van-tag plain style="color:#ffd600;font-size:12px;" v-if="userdata.vip==false">拼团客</van-tag>
                  <van-tag plain style="color:#ffd600;font-size:12px;" v-else>超级会员</van-tag>
                </div>
                <div>我的粉丝：{{userdata.invitationNum}}</div>
            </div>
          </div>
      </section>
      <section>
          <!-- 手机号 -->
        <van-cell-group>
           <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>手机号</span>
                  </template>
                </van-cell>
              </van-col>
              <div>
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                    <span v-if="phone==''">未添加</span>
                    <span v-else @click="callPhone">{{phone}} ></span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </van-cell-group>
        <!-- 微信号 -->
        <van-cell-group>
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>微信号</span>
                  </template>
                </van-cell>
              </van-col>
              <div>
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                    <span v-if="weixinnumber==''">未添加</span>
                    <span v-else 
                    v-clipboard:copy="weixinnumber"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError">
                    {{weixinnumber}} ></span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </van-cell-group>
        <!-- 微信二维码 -->
        <van-cell-group>
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>微信二维码</span>
                  </template>
                </van-cell>
              </van-col>
              <div>
              <van-col span="12">
                <div style="text-align:right;" v-if="wxQrcode=='?times='+times">
                 <van-cell>
                  <template slot="title">
                    <span >未添加</span>
                  </template>
                </van-cell>
                </div>
                <div style="text-align:right;" @click="JumpScanShowScan" v-else>
                 <van-cell>
                  <template slot="title">
                    <span><img :src="wxQrcode" style="width:10%;" /> ></span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </van-cell-group>
        <!-- 微信收钱码 -->
        <van-cell-group>
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>微信收钱码</span>
                  </template>
                </van-cell>
              </van-col>
              <div>
              <van-col span="12">
                <div style="text-align:right;"  v-if="wxMoneyQrcode=='?time='+times">
                 <van-cell>
                  <template slot="title">
                    <span>未添加</span>
                  </template>
                </van-cell>
                </div>
                <div style="text-align:right;" v-else @click="JumpMoneyShowScan">
                 <van-cell>
                  <template slot="title">
                    <span ><img :src="wxMoneyQrcode" style="width:10%;" /> ></span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </van-cell-group>
      </section>

      <van-dialog v-model="sacnshow" :show-confirm-button="false" title="我的二维码" :close-on-click-overlay="true">
        <div style="text-align:center;"><img :src="wxQrcode" style="width:80%"/></div>
        <div style="text-align:center;">长按可识别二维码,添加好友</div>
      </van-dialog>

      <van-dialog v-model="moneyshow" :show-confirm-button="false" title="我的收钱二维码" :close-on-click-overlay="true">
        <div style="text-align:center;"><img :src="wxMoneyQrcode" style="width:80%"/></div>
      </van-dialog>
  </section>
</template>
<script>
import { Dialog } from "vant";
import fansVue from "./fans.vue";
import icon_personalbg from "../../assets/icon/icon_personalbg.png";

export default {
  data() {
    return {
      id: "",
      url: "http://ptk.baolinzhe.com/ptk/api/",
      friendId: "",
      phone: "",
      weixinnumber: "",
      headurl: "",
      userdata: {},
      wxMoneyQrcode: "",
      wxQrcode: "",
      sacnshow: false,
      moneyshow: false,
      times: ""
    };
  },
  mounted() {
    // this.id = sessionStorage.getItem("userId");
    var dataJson = JSON.parse(decodeURIComponent(getCookie("userData")));
    this.id = dataJson.id;
    this.getParams();
    this.getUserData();
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
    onCopy: function(e) {
      // console.log("你刚刚复制: " + e.text);
      // alert("微信号已复制成功"+e.text)
      this.$toast("微信号已复制成功:" + e.text);
      // alert(e.text);
    },
    onError: function(e) {
      console.log("无法复制文本！");
      // alert("微信号复制失败了哦")
      this.$toast("微信号复制失败了哦");
    },
    callPhone() {
      window.location.href = "tel:" + this.phone;
    },
    getParams() {
      // 取到路由带过来的参数
      var routerParams = this.$route.params.friendId;
      // 将数据放在当前组件的数据内
      this.friendId = routerParams;
    },
    JumpScanShowScan() {
      this.sacnshow = true;
    },
    JumpMoneyShowScan() {
      this.moneyshow = true;
    },
    getUserData() {
      // 缓存指针
      let _this = this;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        var time = new Date();
        var times = Date.parse(time);
        _this.times = times;
        this.$axios
          .get(
            _this.url +
              "/v1/user/" +
              _this.id +
              "/superior?refereId=" +
              _this.friendId
          )
          .then(function(response) {
            // 将得到的数据放到vue中的data
            _this.userdata = response.data.result;
            _this.headurl = _this.userdata.headPic;
            _this.phone = _this.userdata.phone;
            _this.weixinnumber = _this.userdata.wxId;
            _this.wxMoneyQrcode =
              _this.userdata.wxMoneyQrcode + "?time=" + times;
            _this.wxQrcode = _this.userdata.wxQrcode + "?times=" + times;
            // console.log(_this.userdata);
          })
          .catch(function(error) {
            console.log(error);
            _this.$toast("网络异常错误...");
          });
      }
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  }
};
</script>
<style>
.back_img {
  /* background-image: url("../../assets/icon/icon_personalbg.png"); */
  width: 100%;
  height: 100%;
  margin: auto;
}
body{
  background: #f1f1f1;
}
</style>
