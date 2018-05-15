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
          <form ref="form" enctype="multipart/form-data">
          <van-uploader accept="image/jpeg,image/png,image.jpg" multiple :after-read="onRead">
          <van-button size="large" type="default" style="width:8.0rem;background:red;color:#ffffff" >上传微信二维码</van-button>
          </van-uploader>
          </form>
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
      nitice: "微信二维码方便您的粉丝或者推荐人加您好友咨询",
      notice_icon: notice,
      wxQrcode: "",
      scan: scan,
      filecontent:''
    };
  },
  mounted() {
    this.id = sessionStorage.getItem("userId");
    this.getParams();
  },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      var wxQrcodes = this.$route.params.wxQrcode;
      // 将数据放在当前组件的数据内
      this.wxQrcode = wxQrcodes;
      console.log(this.scan);
      if (wxQrcodes == "") {
        this.wxQrcode = this.scan;
      }
    },
    onRead(file) {
      //var formData = new FormData(this.$refs.file);
      //console.log(formData)
      // console.log('file',file.content)
       this.filecontent=file.content;
       let  _this=this;
       let formdata = new FormData();
       formdata.append("file", _this.filecontent);
       console.log(_this.filecontent)
       let config = {
       headers: {
           "Content-Type": "multipart/form-data"
         }
       };
       _this.$axios
         .post(_this.url+"/v1/user/"+ _this.id + "/update/qrcode?type=1", _this.formData, config)
       .then(function(response) {
           //做处理
           console.log(response)
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

