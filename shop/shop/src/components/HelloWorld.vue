<template>
  <div class="hello" style="background:#E6E6FA">
    <!-- <h1 @click="getQrcode">{{ msg }}</h1>
    <qriously :value="initQCode" :size="138"/> -->
    <canvas width=200 height=200 id="thecanvas"></canvas>
		<button id="downloadImageBtn">Download Image</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // msg: "显示二维码",
      // initQCode: "http://192.168.1.40:8080/ping/indexs"
    };
  },
  mounted(){
    		this.draw();
     		var dlButton = document.getElementById("downloadImageBtn");
    		this.bindButtonEvent(dlButton, "click", this.saveAsLocalImage);
  },
  methods: {
    // getQrcode() {
    //   this.initQCode = "http://192.168.1.40:8080/ping/user";
    // },
    draw() {
      var canvas = document.getElementById("thecanvas");
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "rgba(125, 46, 138, 0.5)";
      ctx.fillRect(25, 25, 100, 100);
      ctx.fillStyle = "rgba( 0, 146, 38, 0.5)";
      ctx.fillRect(58, 74, 125, 100);
      ctx.fillStyle = "rgba( 0, 0, 0, 1)"; // black color
      ctx.fillText("Gloomyfish - Demo", 50, 50);
    },
    bindButtonEvent(element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      } else {
        element.attachEvent("on" + type, handler);
      }
    },
    saveAsLocalImage() {
      var myCanvas = document.getElementById("thecanvas");
      // here is the most important part because if you dont replace you will get a DOM 18 exception.
      // var image = myCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream;Content-Disposition: attachment;filename=foobar.png");
      var image = myCanvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      window.location.href = image; // it will save locally
    }
  }
};
</script>
