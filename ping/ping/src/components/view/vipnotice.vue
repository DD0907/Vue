<template>
  <section>
      <section class="notice_top">
        <div >
          <div><img :src="notice_icon" style="width:0.5rem;"/>&nbsp;您已成功邀请{{invitationNum}}人，还差{{noinvitationNum}}人可申请</div>
        </div>
      </section>
      <section style="height:0.5rem;"></section>
      <section>
        <img src="../../assets/icon/icon_post.png" style="width:100%;height:100%"/>
      </section>
      <section >
        <div style="margin-left:30%;">
            <div style="float:left;"><van-checkbox v-model="checked" shape="square"/></div>
            <span style="margin-left:5px;">同意《超级会员用户协议》</span>
        </div>
        <van-button type="default" style="width:100%;background:red" @click="jumpUpgradeVip">申请成为超级会员</van-button>
      </section>
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
      noinvitationNum: 6
    };
  },
  mounted() {
    // this.id = sessionStorage.getItem("userId");
    var dataJson = JSON.parse(decodeURIComponent(getCookie("userData")));
    this.id = dataJson.id;
    this.invitationNum = dataJson.invitationNum;
    this.noinvitationNum = 6 - this.invitationNum;
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
            // console.log(response.data);
            if (response.data.code == 1) {
              _this.$router.push({
                path: "/ping",
                name: "indexs"
                // params: {
                //   isSuccess: true
                // }
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
              _this.$toast(response.data.message);
              _this.$router.push({
                path: "/ping",
                name: "vip"
              });
            }
          })
          .catch(function(error) {
            console.log(error);
            _this.$toast("网络异常错误...");
          });
      }
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
  background:yellow;top:0;
}
</style>
