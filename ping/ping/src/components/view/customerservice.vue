<template>
    <section>
        <section>
            <van-notice-bar :text="nitice" :left-icon="notice_icon"/>
        </section>
        <section>
            <div style="text-align:center;">
            <div style="margin:1.0rem;">
                <img :src="customerScan" alt="暂无上传" style="width:8.0rem;height:8.0rem;border:1px solid #999;"/>
            </div>
            <div style="margin:20px;">
            </div>
            <section style="font-size:0.4rem;">
                长按可识别二维码,加客服微信,进行详细咨询
            </section>
        </div>
        </section>
    </section>
</template>
<script>
import notice from "../../assets/icon/icon_notices.png";
import scan from "../../assets/icon/icon_custom.png";

export default {
  data() {
    return {
      url: "http://ptk.baolinzhe.com/ptk/api/",
      notice_icon: notice,
      nitice: "客服工作时间 周一至周日【9:00-21:00】节假日除外。",
      scan: scan,
      customerScan: scan,
      customerdata: {}
    };
  },
  mounted() {},
  methods: {
    getData() {
      let _this = this;
      // 此处使用node做了代理
      var time = new Date();
      var times = Date.parse(time);
      this.$axios
        .post(_this.url + "/v1/user/" + _this.id)
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.customerdata = response.data.result;
          _this.customerScan = _this.customerdata.wxMoneyQrcode;
          if (_this.customerScan == "") {
            _this.customerScan = _this.scan;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

