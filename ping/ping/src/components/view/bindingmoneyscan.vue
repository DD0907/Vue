<template>
  <section>
    <section>
        <van-notice-bar :text="nitice" :left-icon="notice_icon"/>
    </section>
    <section>
        <div style="text-align:center;">
         <div style="margin:1.0rem;">
            <img :src="wxMoneyQrcode" alt="暂无上传" style="width:8.0rem;height:8.0rem;"/>
        </div>
        <div style="margin:20px;">
           <van-uploader accept="image/jpeg,image/png,image.jpg" multiple :after-read="onRead">
          <van-button size="large" type="default" style="width:8.0rem;background:red;color:#ffffff">上传微信二维码</van-button>
          </van-uploader>
        </div>
        <section style="height:10px;"></section>
        <div>如何正确操作?</div>
      </div>
    </section>
  </section>
</template>
<script>
import notice from "../../assets/icon/icon_notices.png";
import scan from "../../assets/icon/icon_scan.png";

import qs from "qs";

export default {
  data() {
    return {
      id: "",
      url: "http://ptk.baolinzhe.com/ptk/api/",
      nitice: "微信收款二维码是用于提取打款，请认真上传",
      notice_icon: notice,
      filepath: "",
      scan: scan,
      wxMoneyQrcode:''
    };
  },
  mounted(){
    this.id = sessionStorage.getItem("userId");
    this.getParams();
  },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      var wxMoneyQrcodes = this.$route.params.wxMoneyQrcode;
      // 将数据放在当前组件的数据内
      this.wxMoneyQrcode = wxMoneyQrcodes;
       if (wxMoneyQrcodes == "") {
        this.wxMoneyQrcode = this.scan;
      }
    },
    onRead(file) {
      this.filepath = file;
      console.log(file);
      console.log("图片路径");
      console.log(this.filepath);
      this.SaveScan();
    },
    SaveScan() {
      let _this = this;
      var data = qs.stringify({
        wxMoneyQrcode:_this.filepath
      });
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        this.$axios
          .post(_this.url + "/v1/user/" + _this.id + "/update/qrcode?type=2&", data)
          .then(function(response) {
            // 将得到的数据放到vue中的data
            if (response.data.code == 1) {
              _this.$toast("信息更改成功");
              console.log(response.data.result);
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
    }
  }
};
</script>
<style>
body {
  background: #f1f1f1;
}

</style>

