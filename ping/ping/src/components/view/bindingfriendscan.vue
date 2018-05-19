<template>
  <section>
    <section>
        <van-notice-bar :text="nitice" :left-icon="notice_icon"/>
    </section>
    <section>
        <div style="text-align:center;">
        <div style="margin:1.0rem;">
            <img :src="wxQrcode" alt="暂无上传" style="width:8.0rem;height:8.0rem;" />
        </div>
        <div style="margin:20px;">
          <!-- <form ref="form" enctype="multipart/form-data"> -->
          <van-uploader accept="image/jpeg,image/png,image.jpg" multiple :after-read="onRead">
          <van-button size="large" type="default" style="width:8.0rem;background:red;color:#ffffff" >上传微信二维码</van-button>
          </van-uploader>
          <!-- </form> -->
        </div>
        <section style="height:10px;"></section>
         <img :src="src"/>
        <div>如何正确操作▶</div>
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
      nitice: "微信二维码方便您的粉丝或者推荐人加您好友咨询",
      notice_icon: notice,
      wxQrcode: "",
      scan: scan,
      filecontent: "",
      src: "",
      filepath: ""
    };
  },
  mounted() {
    this.id = sessionStorage.getItem("userId");
    this.getUserData();
  },
  methods: {
    getUserData() {
      let _this = this;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        var time = new Date();
        var times = Date.parse(time);
        console.log(times);
        this.$axios
          .post(_this.url + "/v1/user/" + _this.id)
          .then(function(response) {
            // 将得到的数据放到vue中的data
            _this.userdata = response.data.result;
            _this.wxQrcode = _this.userdata.wxQrcode + "?time=" + times;
            if (_this.wxQrcode == "" || _this.wxQrcode == + "?time=" + times) {
              _this.wxQrcode = _this.scan;
            }
            console.log(_this.wxQrcode);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    onRead(file) {
      //console.log("file", file.file);
      var windowURL = window.URL || window.webkitURL;
      this.filepath = file.file; //创建图片文件的url
      this.wxQrcode = windowURL.createObjectURL(this.filepath);
      let formdatas = new FormData();
      formdatas.append("qrcode", this.filepath);
      console.log(this.filepath);
      console.log(formdatas);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      let _this = this;
      this.$axios
        .post(
          _this.url + "/v1/user/" + _this.id + "/update/qrcode?type=1",
          formdatas,
          config
        )
        .then(function(response) {
          //做处理
          console.log(response.data.code);
          if (response.data.code == 1) {
            _this.$toast("二维码上传成功");
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
};
</script>
<style>
body {
  background: #f1f1f1;
}
</style>

