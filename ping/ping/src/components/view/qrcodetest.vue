<template>
  <div class="home-container">
    <div class="btn-wrap" style="text-align:center;">
      <input type="text" v-model="bannerUrl" placeholder="输入链接"/>
      <button @click="createQrc">点击生成二维码</button>
    </div>
    <div class="banner-box" style="text-align:center;">
      <canvas id="qrccode-canvas"></canvas>
    </div>
  </div>
</template>
<script>
var QRCode = require("qrcode");
// var canvas = "";
export default {
  data() {
    return {
      bannerUrl: "",
      canvas: ""
    };
  },
  methods: {
    createQrc: function() {
      if (!this.bannerUrl) {
        window.alert("链接不能为空");
        return false;
      }
      QRCode.toCanvas(this.canvas, this.bannerUrl, error => {
        if (error) {
          console.log(error);
        } else {
          console.log("success");
        }
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      // DOM操作
      this.canvas = document.getElementById("qrccode-canvas");
    });
  }
};
</script>
<style>
.btn-wrap {
  margin: 0 auto;
}
</style>