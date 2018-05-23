<template>
  <section>
      <section>
        <van-notice-bar :text="nitice" :left-icon="notice_icon"/>
      </section>
      <section style="text-align:center;border:1px solid #999;">
         
      </section>
      <section class="align-center">
        <div style="margin-left:30%;">
            <div style="float:left;"><van-checkbox v-model="checked" shape="square"/></div>
            <span style="margin-left:5px;">同意《超级会员用户协议》</span>
        </div>
        <h6>&nbsp;</h6>
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
      nitice: "您已成功邀请2人，还差3人可申请",
      notice_icon: notice,
      checked: false,
      isVip: false
    };
  },
  mounted() {
    // this.id = sessionStorage.getItem("userId");
    var dataJson = JSON.parse(decodeURIComponent(getCookie("userData")));
    this.id = dataJson.id;
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
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
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
</style>
