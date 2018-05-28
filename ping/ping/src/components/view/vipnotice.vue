<template>
  <section>
      <section class="notice_top">
        <div >
          <div v-if="invitationNum<6" style="height:0.7rem">&nbsp;&nbsp;&nbsp;<img :src="notice_icon" style="width:0.4rem;height:0.4rem;"/>&nbsp;<span style="font-size:16px;">您已成功邀请{{invitationNum}}人，还差{{noinvitationNum}}人可申请</span></div>
          <div v-else style="height:0.7rem">&nbsp;&nbsp;&nbsp;<img :src="notice_icon" style="width:0.4rem;height:0.4rem;"/>&nbsp;<span style="font-size:16px;">您已成功邀请{{invitationNum}}人</span></div>
        </div>
      </section>
      <section style="height:0.4rem;"></section>
      <section>
        <img src="../../assets/icon/icon_post.png" style="width:100%;height:100%"/>
      </section>
      <section>
        <div style="text-align:center;margin:20px;"><van-button disabled size="small" style="width:50%;color:black;border:1px solid black;font-size:0.4rem;">升级条件</van-button></div>
        <van-cell-group>
          <van-cell value="去添加"  is-link v-if="phone==''||phone==null" @click="addphone">
            <template slot="title">
              <span style="font-size:0.2rem;">设置手机号码</span>
              <van-tag type="danger" plain style="font-size:0.2rem;">未完成</van-tag>
            </template>
          </van-cell>
           <van-cell value="已添加"  is-link  v-else  @click="addphone">
            <template slot="title">
              <span style="font-size:0.2rem;">设置手机号码</span>
              <van-tag type="danger" plain style="font-size:0.2rem;">已完成</van-tag>
            </template>
          </van-cell>
        </van-cell-group>
        <br>
         <van-cell-group>
          <van-cell value="去添加"  is-link v-if="wxQrcode=='?time='+times||wxQrcode==''"  @click="addfriendscan">
            <template slot="title">
              <span style="font-size:0.2rem;">添加微信加好友二维码</span>
              <van-tag type="danger" plain style="font-size:0.2rem;">未完成</van-tag>
            </template>
          </van-cell>
           <van-cell value="已添加"  is-link v-else  @click="addfriendscan">
            <template slot="title">
              <span style="font-size:0.2rem;">添加微信加好友二维码</span>
              <van-tag type="danger" plain style="font-size:0.2rem;">已完成</van-tag>
            </template>
          </van-cell>
        </van-cell-group>
        <br>
         <van-cell-group >
          <van-cell value="去邀请"  is-link @click="JumpPost" v-if="invitationNum>=6">
            <template slot="title">
              <span style="font-size:0.2rem;">邀请6个人好友为粉丝</span>
              <van-tag type="danger" plain style="font-size:0.2rem;">已完成</van-tag>
            </template>
          </van-cell>
           <van-cell value="去邀请"  is-link @click="JumpPost" v-else>
            <template slot="title">
              <span style="font-size:0.2rem;">邀请6个人好友为粉丝</span>
              <van-tag type="danger" plain style="font-size:0.2rem;">未完成</van-tag>
            </template>
          </van-cell>
        </van-cell-group>
      </section>
      <section >
        <div style="margin-left:30%;margin-top:10%;">
            <div style="float:left;"><van-checkbox v-model="checked" shape="square"/></div>
            <span style="margin-left:5px;">同意《超级会员用户协议》</span>
        </div>
        <section style="height:10px;"></section>
        <div style="text-align:center;">
          <van-button type="default" v-if="invitationNum>=6&&phone!=''&&wxQrcode!=''" style="width:90%;background:#FF4444;color:#ffffff;" @click="jumpUpgradeVip">升级超级会员</van-button>
          <van-button type="default" v-else disabled style="width:90%;background:#999;color:#ffffff;" @click="jumpUpgradeVip">完成3个升级条件即可升级超级会员</van-button>
        </div>
        <section style="height:50px;"></section>
      </section>
       <van-dialog v-model="postUrlshow" :show-confirm-button="false" :close-on-click-overlay="true" style="width:80%;background:#f1f1f1">
          <div style="height:2px;">&nbsp;</div>
        <div style="text-align:center;"><img :src="posterUrl" style="width:98%"/></div>
        <div style="text-align:center;">长按我的邀请海报发送给好友</div>
        </van-dialog>
  </section>
</template>
<script>
import notice from "../../assets/icon/icon_notices.png";
import { Dialog } from "vant";

export default {
  data() {
    return {
      id: "",
      url: "http://ptk.baolinzhe.com/ptk/api/",
      notice_icon: notice,
      checked: true,
      isVip: false,
      invitationNum: 2,
      noinvitationNum: 6,
      postUrlshow: false,
      posterUrl: "",
      phone: "",
      wxQrcode: "",
      times: ""
    };
  },
  mounted() {
    var time = new Date();
    var times = Date.parse(time);
    this.times = times;
    var dataJson = JSON.parse(
      decodeURIComponent(this.cookies.getCookie("userData"))
    );
    this.id = dataJson.id;
    this.phone = dataJson.phone;
    this.wxQrcode = dataJson.wxQrcode + "?time=" + times;
    // this.id = 100055;
    // this.phone = "133444";
    // this.wxQrcode = "http://p8kd8pxie.bkt.clouddn.com/wxqrcode18.png";
    this.invitationNum = dataJson.invitationNum;
    this.noinvitationNum = 6 - this.invitationNum;
  },
  methods: {
    JumpPost() {
      let _this = this;
      this.$axios
        .post(_this.url + "/v1/user/" + _this.id)
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.userdata = response.data.result;
          _this.posterUrl = _this.userdata.posterUrl;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      _this.postUrlshow = true;
    },
    jumpUpgradeVip() {
      let _this = this;
      if (_this.checked == "false" || _this.checked == false) {
        _this.$toast("请同意超级会员用户协议");
      } else {
        let page = 1;
        // 此处使用node做了代理
        this.$axios
          .post(_this.url + "/v1/user/" + _this.id + "/upgrade")
          .then(function(response) {
            // 将得到的数据放到vue中的data
            if (response.data.code == 1) {
              _this.$router.push({
                path: "/ping",
                name: "indexs"
              });
              // _this.$toast(response.data.message);
              Dialog.alert({
                title: "拼团客温馨提示",
                message: response.data.message
              }).then(() => {
                window.location.reload();
                // _this.isVipSuccess = false;
              });
            } else {
              // _this.$toast(response.data.message);
              Dialog.alert({
                title: "提示",
                message: response.data.message
              }).then(() => {});
              // _this.$router.push({
              //   path: "/ping",
              //   name: "user"
              // });
            }
          })
          .catch(function(error) {
            console.log(error);
            _this.$toast("网络异常错误...");
          });
      }
    },
    addphone() {
      this.$router.push({
        path: "/ping",
        name: "addnumber"
      });
    },
    addfriendscan() {
      this.$router.push({
        path: "/ping",
        name: "addfriendscan"
      });
    }
  }
};
</script>
<style>
body {
  background: #f1f1f1;
}
.align-center {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.notice_top {
  width: 100%;
  position: fixed;
  background: yellow;
  top: 0;
}
</style>
