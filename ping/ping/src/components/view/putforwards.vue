<template>
<!-- 提现 -->
  <section>
      <section>
        <van-notice-bar :text="nitice" :left-icon="notice_icon"/>
        <van-cell-group>
         <van-cell title="可提现佣金币余额" />
        </van-cell-group>
        <van-cell-group style="height:2.0rem;">
        <van-cell>
            <template slot="title">
                <div style="text-align:center;font-size:26px;margin-top:0.4rem;">
                  <van-icon name="e610" style="color:#ffd600;"/>
                  <span>{{money}}</span>
                  <div style="color:#999;font-size:12px;">(100佣金币=1元)</div>
                </div>
            </template>
        </van-cell>
        </van-cell-group>
      </section>
      <section style="height:10px;"></section>
      <section>
        <van-cell-group>
            <van-field center v-model="number" label="佣金币" placeholder="请输入佣金币数量" type="number" v-on:input="myFocus">
            <div slot="button" style="color:#d81e06;" @click="JumpTotalMoney">全部提现
            </div>
            </van-field>
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
               
                <div style="text-align:right;" v-if="wxMoneyQrcode=='?time='+times">
                 <van-cell is-link @click="JumpBindingMoneysacn">
                  <template slot="title">
                    <span>未添加</span>
                  </template>
                </van-cell>
                </div>
                 <div style="text-align:right;" v-else  @click="JumpMoneyShowScan">
                 <van-cell>
                  <template slot="title">
                    <span ><img :src="wxMoneyQrcode" style="width:10%;" /></span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
            </van-cell-group>
            <div style="height:0.6rem;margin-top:5px;">
              <span style="font-size:16px;margin:15px;">到账金额</span>
              <span style="margin:0px 0px 0px 15px;color:red;">{{(number-(number%100))/100}}.00元</span>
            </div>
            <van-field center  label="手续费" placeholder="免收手续费"  disabled :error="true"/>
        </van-cell-group>
      </section>
      <section>
            <!-- <van-cell :title="titledesc" style="font-size:10px;"/> -->
            <div style="margin:15px;color:#999">{{titledesc}}</div>
            <div style="text-align:center;">
                  <div style="margin:30px 15px 0px 15px;" @click="JumpCash">
                    <van-button type="default" size="large" style="background:#d81e06;color:#ffffff">申请提现</van-button>
                  </div>
                  <div style="font-size:16px;margin-top:15px;color:red;" @click="JumpDeti">查看提现记录<van-icon name="arrow" style="font-size:14px;" /></div>
            </div>
      </section>
      <van-dialog v-model="moneyshow" :show-confirm-button="false" title="我的收钱二维码" :close-on-click-overlay="true">
        <div style="text-align:center;"><img :src="wxMoneyQrcode" style="width:80%"/></div>
      </van-dialog>
  </section>
</template>
<script>
import notice from "../../assets/icon/icon_notices.png";
export default {
  data() {
    return {
      id: "",
      url: "http://ptk.baolinzhe.com/ptk/api/",
      userdata: {},
      wxMoneyQrcode: "",
      nitice: "满1000佣金币即可提现，需整百提现",
      notice_icon: notice,
      number: "",
      money: 999,
      titledesc:
        "每天可成功兑换一次，提现审核时间为9:00-21:00,审核成功后客服会根据您提供的微信二维码，进行打款操作",
      times: "",
      moneyshow: false
    };
  },
  mounted() {
    // this.id = sessionStorage.getItem("userId");
     var dataJson = JSON.parse(decodeURIComponent(getCookie("userData")));
    this.id = dataJson.id;
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
          .post(_this.url + "/v1/user/" + _this.id)
          .then(function(response) {
            // 将得到的数据放到vue中的data
            _this.userdata = response.data.result;
            _this.money = _this.userdata.whiteIntegral;
            _this.wxMoneyQrcode =
              _this.userdata.wxMoneyQrcode + "?time=" + times;
            //console.log(_this.userdata);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    myFocus() {
      if (this.money < 1000) {
        this.$toast("您的佣金币还未到达1000哦");
        this.number = "";
      } else if (this.number > this.money) {
        this.$toast("您输入的佣金币超过了可提现佣金币的余额");
        this.number = "";
      }
    },
    JumpTotalMoney() {
      this.number = this.money - this.money % 100;
      if (this.money < 1000) {
        this.$toast("满1000佣金币才能提现哦");
        this.number = "";
      }
    },
    JumpBindingMoneysacn() {
      this.$router.push({
        path: "/ping",
        name: "bindingmoneyscan"
      });
    },
    JumpCash() {
      if (this.money < 1000) {
        this.$toast("满1000佣金币才能提现哦");
      } else if (this.number < 1000) {
        this.$toast("您输入的佣金币要大于或等于1000");
        this.number = "";
      } else {
        let _this = this;
        if (_this.id == "") {
          _this.$toast("当前您还未登录哦");
        } else {
          _this.number = _this.number - (_this.number % 100);
          this.$axios
            .post(
              _this.url +
                "/v1/integral/extract?userId=" +
                _this.id +
                "&integral=" +
                _this.number
            )
            .then(function(response) {
              // 将得到的数据放到vue中的data
              _this.$toast(response.data.message);
              _this.number = "";
              _this.getUserData();
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }
    },
    JumpDeti() {
      this.$router.push({
        path: "/ping",
        name: "commissions",
        params: {
          data: 3
        }
      });
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  }
};
</script>
<style>
@import "../../common/css/fontface.css";
body {
  background: #f1f1f1;
}
</style>
