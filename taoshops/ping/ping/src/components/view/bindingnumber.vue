<template>
  <section>
    <section>
        <van-notice-bar :text="nitice" :left-icon="notice_icon"/>
    </section>
    <van-cell-group>
        <van-field label="手机号" v-model="phonenumber" type="tel" required placeholder="请输入手机号" />
    </van-cell-group>
    <van-cell-group>
        <van-field label="微信号" v-model="weixinnumber" required placeholder="请输入微信号" />
    </van-cell-group>
   <div style="margin:20px;">
    <van-button size="large" type="default" @click="SaveUserData" style="background:red;color:#ffffff;">确认保存</van-button>
    <div style="height:10px;"></div>
    <van-button size="large" type="default" @click="Cancel">取消</van-button>
   </div>
  </section>
</template>
<script>
import notice from "../../assets/icon/icon_notices.png";
import qs from "qs";
export default {
  data() {
    return {
      id: "",
      url: "http://ptk.baolinzhe.com/ptk/api/",
      nitice: "请认真核对您的手机号和微信号哦",
      notice_icon: notice,
      phonenumber: "",
      weixinnumber: ""
    };
  },
  mounted() {
    this.getParams();
    // this.id = sessionStorage.getItem("userId");
    var dataJson = JSON.parse(
      decodeURIComponent(this.cookies.getCookie("userData"))
    );
    this.id = dataJson.id;
  },
  methods: {
    SaveUserData() {
      let _this = this;
      var data = qs.stringify({
        phone: _this.phonenumber,
        wxId: _this.weixinnumber
      });
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        //console.log(_this.phonenumber.length);
        var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if (_this.phonenumber == "") {
          _this.$toast("请输入手机号码");
          return;
        }
        if (!reg.test(_this.phonenumber)) {
          _this.$toast("手机格式不正确");
          return;
        }
        // 此处使用node做了代理
        this.$axios
          .post(_this.url + "/v1/user/" + _this.id + "/update/phone", data)
          .then(function(response) {
            // 将得到的数据放到vue中的data
            if (response.data.code == 1) {
              _this.$toast("信息更改成功");
              // console.log(response.data.result);
              _this.$router.push({
                path: "/ping",
                name: "setting"
              });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    getParams() {
      // 取到路由带过来的参数
      var phone = this.$route.params.phone;
      var weixinnumber = this.$route.params.weixinnumber;
      // 将数据放在当前组件的数据内
      this.phonenumber = phone;
      this.weixinnumber = weixinnumber;
    },
    Cancel() {
      this.$router.push({
        path: "/ping",
        name: "setting"
      });
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  }
};
</script>
