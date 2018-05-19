<template>
  <div>
      <section class="back_img">
          <div style="height:30px;text-align:right;">
              <!-- <span style="margin:20px;font-size:0.5rem;" @click="jumpPhone">绑定手机号</span> -->
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
                  <van-tag plain style="color:#ffd600;font-size:12px;" v-if="userdata.vip=='false'||userdata.vip==false">拼团客</van-tag>
                  <van-tag plain style="color:#ffd600;font-size:12px;" v-else>超级会员</van-tag>
                </div>
                <div>我的粉丝：{{userdata.invitationNum}}</div>
            </div>
          </div>
          <div style="height:10px;"></div>
      </section>
        <div @click="JumpSetting"> 
                <van-cell-group>
                    <van-cell icon="e6a4" title="账户设置" is-link style="color:red;" />
                </van-cell-group>
        </div>
        <section style="height:5px;">&nbsp;</section>
        <section>
            <div>
                <van-cell-group>
                 <a href="http://mobile.yangkeduo.com/orders.html?type=0&refer_page_name=personal&refer_page_sn=10001"> <van-cell title="我的拼多多订单" icon="e605" is-link style="color:red;"/></a>
                </van-cell-group>
                <section style="height:5px;">&nbsp;</section>
                <van-cell-group>
                  <van-cell title="我的推荐人"  icon="e637" @click="jumpRecommendation" is-link style="color:red;"/>
                   <van-cell title="我的粉丝"  icon="e60b" @click="jumpFans" is-link style="color:red;"/>
                   <van-cell title="专属推广海报"  icon="e60a" @click="jumpTeam" is-link style="color:red;"/>
                </van-cell-group>
                <section style="height:5px;">&nbsp;</section>
                <van-cell-group>
                  <van-cell title="升级超级会员"  icon="e607" @click="jumpUpgradeVip" is-link style="color:red;"/>
                   <van-cell title="官方客服"  icon="e604" @click="jumpTeam" is-link style="color:red;"/>
                </van-cell-group>
            </div>
        </section>
        <section style="height:50px;">&nbsp;</section>
   <!-- 底部标签 -->
    <div>
    <van-row>
      <van-goods-action>
            <van-goods-action-mini-btn style="width:25%;" @click="jumpIndex">
                <div style="text-align:center;">
                  <van-icon name="e606"/>
                  <div style="margin:3px;"><span style="font-size:14px;">首页</span></div>
                </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpLove">
              <div style="text-align:center;">
                  <van-icon name="e619"/>
                  <div style="margin:3px;"><span style="font-size:14px;">收藏</span></div>
              </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpVip">
              <div style="text-align:center;">
                  <van-icon name="e607"/>
                  <div style="margin:3px;"><span style="font-size:14px;">超级会员</span></div>
              </div>
            </van-goods-action-mini-btn>
            <!-- <van-goods-action-mini-btn  style="width:25%;" @click="JumpShare">
                <div style="text-align:center;">
                  <van-icon name="e619"/>
                  <div style="margin:1px;">晒单分享</div>
                </div>
            </van-goods-action-mini-btn> -->
            <van-goods-action-mini-btn style="width:25%;">
                <div style="text-align:center;color:red;">
                  <van-icon name="e6a4"/>
                  <div style="margin:3px;"><span style="font-size:14px;">我的</span></div>
                </div>
            </van-goods-action-mini-btn>
        </van-goods-action>
    </van-row>
    </div>
  </div>
</template>
<script>
import qs from "qs";

export default {
  data() {
    return {
      id: "",
      isVip: false,
      url: "http://ptk.baolinzhe.com/ptk/api/",
      userdata: {},
      headurl: "",
      refereId: ""
    };
  },
  mounted() {
    this.id = sessionStorage.getItem("userId");
    this.getUserData();
    var keyword = window.location.href;
    var i = keyword.indexOf("isVip=");
    this.isVip = decodeURI(keyword.substring(i + 6, keyword.length))=="true";

    // if (this.isWeiXin()) {
    //   this.id = sessionStorage.getItem("userId");
    //   var keyword = window.location.href;
    //   var i = keyword.indexOf("isVip=");
    //   this.isVip =
    //     decodeURI(keyword.substring(i + 6, keyword.length)) == "true";
    //   this.getUserData();
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
    getUserData() {
      // 缓存指针
      let _this = this;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        let page = 1;
        // 此处使用node做了代理
        this.$axios
          .post(_this.url + "/v1/user/" + _this.id)
          .then(function(response) {
            // 将得到的数据放到vue中的data
            _this.userdata = response.data.result;
            _this.headurl = _this.userdata.headPic;
            _this.refereId = _this.userdata.refereId;
            // console.log(_this.userdata);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    jumpIndex() {
      this.$router.push({
        path: "/ping",
        name: "indexs",
        query: { isVip: this.isVip }
      });
    },
    JumpVip() {
      this.$router.push({
        path: "/ping",
        name: "vip",
        query: { isVip: this.isVip }
      });
    },
    JumpLove() {
      this.$router.push({
        path: "/ping",
        name: "love",
        query: { isVip: this.isVip }
      });
    },
    JumpSetting() {
      this.$router.push({
        path: "/ping",
        name: "setting"
      });
    },
    jumpRecommendation() {
      this.$router.push({
        path: "/ping",
        name: "personalReferee",
        params: {
          refereId: this.refereId
        }
      });
    },
    jumpUpgradeVip() {
      this.isVip = true;
      // sessionStorage.setItem("isVip",this.isVip);
      this.$toast("您已提交申请,请等待审核...");
    },
    jumpFans() {
      this.$router.push({
        path: "/ping",
        name: "fans"
      });
    },
    jumpTeam() {
      this.$router.push({
        path: "/ping",
        name: "team"
      });
    }
  }
};
</script>
<style>
@import "../../common/css/user.css";
@import "../../common/css/fontface.css";
</style>

