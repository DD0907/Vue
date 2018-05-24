<template>
  <div>
    <div style="text-align:center;">
      <!-- <input type="text" v-model="bannerUrl" placeholder="输入链接"/> -->
      <button @click="createQrc">点击生成二维码</button>
    </div>
    <div class="banner-box" style="text-align:center;">
      <canvas id="qrccode-canvas" style="display:none;"></canvas>
    <img :src="imgSrcs"/>
    </div>
  </div>
</template>
<script>
var QRCode = require("qrcode");
// var canvas = "";
export default {
  data() {
    return {
      bannerUrl: "https://a.toutiaonanren.com/api/d/xWRKgq",
      canvas: "",
      imgSrcs:''
    };
  },
  methods: {
    createQrc: function() {
      QRCode.toCanvas(this.canvas, this.bannerUrl, error => {
        if (error) {
          console.log(error);
        } else {
          console.log("success");
          var canvas = document.getElementById("qrccode-canvas");
          // console.log(canvas);
          var imgSrc = canvas.toDataURL("image/png");
          console.log(imgSrc);
          this.imgSrcs=imgSrc;
        }
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      // DOM操作
      this.canvas = document.getElementById("qrccode-canvas");
      console.log(this.canvas)
    });
  }
};
</script>
<style>
/* .btn-wrap {
  margin: 0 auto;
} */
</style>