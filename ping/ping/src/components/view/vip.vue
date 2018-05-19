<template>
  <section>
    <section style="background:#ffffff;height:3.0rem;">
      <van-row>
        <van-col span="1">&nbsp;</van-col>
        <van-col span="5" style="margin-top:0.5rem;">
          <div v-if="userdata.headPic==''||userdata.headPic==null">
                <img src="../../assets/icon/icon_head.png" style="width:80%;height:80%;margin:0 auto;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;"/>
            </div>
             <div v-else>
                <img :src="headurl" style="width:80%;height:80%;margin:0 auto;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;"/>
            </div>
        </van-col>
        <!-- <van-col span="1" style="margin-top:0.5rem;">
         &nbsp;
        </van-col> -->
        <van-col span="10" style="margin-top:1.0rem;" >
          <span style="font-size:16px;">{{userdata.nickname}}
            <div>
              <van-tag plain style="color:#ffd600;font-size:12px;" v-if="userdata.vip=='false'||userdata.vip==false">拼团客</van-tag>
              <van-tag plain style="color:#ffd600;font-size:12px;" v-else>超级会员</van-tag>
            </div>
            <div>
            </div>
          </span>
        </van-col>
        <!-- <van-col span="4" style="margin-top:0.5rem;">
         &nbsp;
        </van-col> -->
        <van-col span="4" style="text-align:center;margin-top:0.8rem;">
         <img src="../../assets/icon/icon_course.png" style="width:0.9rem;"/><br>新手教程
        </van-col>
        <van-col span="4" style="text-align:center;margin-top:0.8rem;">
          <div @click="JumpConsultation">
          <img src="../../assets/icon/icon_referee.png" style="width:0.9rem;"/><br>咨询推荐人
          </div>
        </van-col>
      </van-row>
    </section>
    <section style="height:1px;"></section>
    <section style="background:#ffffff;">
       <van-cell-group>
          <van-cell title="可提现佣金币" :value="whiteIntegral" label="100佣金币=1元,点击去提现" @click="JumpPutforwards" />
       </van-cell-group>

    </section>
    <section>
      <van-cell-group>
          <van-cell title="待确认收货" :value="waitAudit" label="确认收货后进入审核" @click="JumpGoods"/>
          <van-cell title="审核中" :value="audit" label="15天若无售后发生则发放奖励" @click="JumpExamine"/>
          <!-- <van-cell title="已结算的佣金币" value="10000" label="已奖励的订单" @click="JumpSettlement" /> -->
          <van-cell title="已提现" :value="extractSum" label="点击可查看提现记录" @click="JumpPutforward"/>
      </van-cell-group>
    </section>
    <section style="height:5px;"></section>
    <section>
      <van-cell-group>
        <van-cell icon="e60b" title="我的粉丝" is-link style="color:red;" @click="JumpFans">
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell icon="e609" title="直属超级会员收益" is-link style="color:red;" @click="JumpVIPProfit"/>
      </van-cell-group>
    </section>
    <section style="height:5px;"></section>
     <section>
      <van-cell-group>
        <van-cell icon="e600" title="查询佣金币明细" is-link style="color:red;" @click="JumpCommissions"/>
      </van-cell-group>
    </section>
    <section style="height:5px;"></section>
    <section>
      <van-cell-group>
        <van-cell icon="e623" title="专属指导老师" is-link style="color:red;" @click="JumpPersonal"/>
      </van-cell-group>
    </section>
     <section style="height:50px;"></section>
    <!-- 底部标签 -->
    <div>
      <van-row>
        <van-goods-action>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpIndex">
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
              <div style="text-align:center;color:red;">
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
            <van-goods-action-mini-btn style="width:25%;" @click="JumpUser">
                <div style="text-align:center;">
                  <van-icon name="e6a4"/>
                  <div style="margin:3px;"><span style="font-size:14px;">我的</span></div>
                </div>
            </van-goods-action-mini-btn>
        </van-goods-action>
      </van-row>
    </div>
  </section>
</template>
<script>
import notice from "../../assets/icon/icon_notices.png";
export default {
  data() {
    return {
      id: "",
      isVip: false,
      url: "http://ptk.baolinzhe.com/ptk/api/",
      userdata: {},
      headurl: "",
      refereId: "", //推荐人
      whiteIntegral: "",
      extractSum: 0, //已提现
      audit: 0, //审核中
      waitAudit: 0, //待确认收货
      wxMoneyQrcode: ""
    };
  },
  mounted() {
    this.id = sessionStorage.getItem("userId");
    this.getUserData();
    this.getVipCountdata();
    var keyword = window.location.href;
    var i = keyword.indexOf("isVip=");
    this.isVip = decodeURI(keyword.substring(i + 6, keyword.length)) == "true";
    // if (this.isWeiXin()) {
    //   this.id = sessionStorage.getItem("userId");
    //   var keyword = window.location.href;
    //   var i = keyword.indexOf("isVip=");
    //   this.isVip =
    //     decodeURI(keyword.substring(i + 6, keyword.length)) == "true";
    //   this.getUserData();
    //   this.getVipCountdata();
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
        // 此处使用node做了代理
        this.$axios
          .post(_this.url + "/v1/user/" + _this.id)
          .then(function(response) {
            // 将得到的数据放到vue中的data
            _this.userdata = response.data.result;
            _this.headurl = _this.userdata.headPic;
            _this.refereId = _this.userdata.refereId;
            _this.whiteIntegral = _this.userdata.whiteIntegral;
            _this.wxMoneyQrcode = _this.userdata.wxMoneyQrcode;
            // console.log(_this.userdata);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    getVipCountdata() {
      // 缓存指针
      let _this = this;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        this.$axios
          .get(_this.url + "/v1/integral/count?userId=" + _this.id)
          .then(function(response) {
            // 将得到的数据放到vue中的data
            if (response.data.code == 1) {
              _this.userdatas = response.data.result;
              _this.extractSum = _this.userdatas.extractSum;
              _this.audit = _this.userdatas.audit;
              _this.waitAudit = _this.userdatas.waitAudit;
              // console.log(response.data.result);
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    JumpShare() {
      this.$router.push({
        path: "/ping",
        name: "share"
      });
    },
    JumpLove() {
      this.$router.push({
        path: "/ping",
        name: "love",
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
    JumpIndex() {
      this.$router.push({
        path: "/ping",
        name: "indexs"
      });
    },
    JumpUser() {
      this.$router.push({
        path: "/ping",
        name: "user",
        query: { isVip: this.isVip }
      });
    },

    JumpPutforwards() {
      this.$router.push({
        path: "/ping",
        name: "putforwards"
      });
    },
    JumpGoods() {
      this.$router.push({
        path: "/ping",
        name: "viprecord",
        params: {
          data: 0
        }
      });
    },
    JumpExamine() {
      this.$router.push({
        path: "/ping",
        name: "viprecord",
        params: {
          data: 1
        }
      });
    },
    JumpVIPProfit() {
      this.$router.push({
        path: "/ping",
        name: "commissions",
        params: {
          data: 2
        }
      });
    },
    JumpCommissions() {
      this.$router.push({
        path: "/ping",
        name: "commissions",
        params: {
          data: 0
        }
      });
    },
    JumpPutforward() {
      this.$router.push({
        path: "/ping",
        name: "commissions",
        params: {
          data: 3
        }
      });
    },

    JumpFans() {
      this.$router.push({
        path: "/ping",
        name: "fans"
      });
    },
    JumpConsultation() {
      this.$router.push({
        path: "/ping",
        name: "personalReferee",
        params: {
          refereId: this.refereId
        }
      });
    },
    JumpPersonal() {
      this.$router.push({
        path: "/ping",
        name: "personal"
      });
    }
  }
};
</script>
<style>
@import "../../common/css/user.css";
@import "../../common/css/fontface.css";
body {
  background: #f1f1f1;
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
