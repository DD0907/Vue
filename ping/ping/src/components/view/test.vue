<template>
    <div>
      
            <!-- <img id="review">
            <canvas id="myCanvas" style="width:100px;height:100px;">
            </canvas> -->
        <div v-on:click="playVideo()">
            <video :src="videoSrc" id="videoPlay" v-show="false" class="video">您的浏览器不支持 video 视屏播放。</video> 
        </div>
    </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      videoSrc: "http://yun.it7090.com/video/XHLaunchAd/video02.mp4"
    };
  },
  mounted() {
    // this.cookies.a(1);
    // var dataJson = JSON.parse(
    //   decodeURIComponent(this.cookies.getCookie("userData"))
    // );
    // this.isVip = dataJson.vip;
    // console.log(dataJson);
    // console.log(dataJson.id);
    // console.log(dataJson.vip);
    // console.log(dataJson.phone);
    // console.log(dataJson.nickname);
    // this.test();
  },
  methods: {
    playVideo() {
      var vdo = document.getElementById("videoPlay");
      vdo.play();
    }
  }
};
</script>
<style lang="less">
body {
  background: #f1f1f1;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>