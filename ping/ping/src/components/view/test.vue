<template>
    <div>
        <div id="sample">
     	  <!--accept定义接收的文件类型,这里只接受图片-->
     	  <input id="fileinput" @change="uploading($event)" type="file" accept="image/*">
           <button  @click="submit($event)">上传</button>
           <!--图片展示-->
           <img :src="src"/>
         </div>
        <!-- <section>
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                    <img src="../../assets/icon/icon_down.png"/>
                <p>刷新次数: {{ count }}</p>
                </van-pull-refresh>
        </section>
        
        <ul>
            <li v-for="(item,index) in articles" :key="index">
                <img :src="item.goodsThumbnailUrl" alt="">
            </li>
        </ul> -->

        <van-tabs @click="onClick">
          <van-tab :title="'选项 ' ">
            内容3
          </van-tab>
           <van-tab :title="'选项1 ' ">
            内容4
          </van-tab>
           <van-tab :title="'选项 2' ">
            内容5
          </van-tab>
           <van-tab :title="'选项 3' ">
            内容6
          </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      // articles : [],
      // page:1,
      // isLoading: false,
      // count:0
      file: "",
      src: ""
    };
  },
  mounted() {
    // // 缓存指针
    // let _this = this;
    // // 设置一个开关来避免重负请求数据
    // let sw = true;
    // // 此处使用node做了代理
    // this.$axios.get('http://ptk.baolinzhe.com/ptk/api/v1/product/list?page='+_this.page++ +'&pageSize=10&sortType=0&withCoupon=false')
    //     .then(function(response){
    //         // console.log(JSON.parse(response.data).stories);
    //         // 将得到的数据放到vue中的data
    //         _this.articles =  response.data.result;
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     });
    // // 注册scroll事件并监听
    // // window.addEventListener
    // window.addEventListener('scroll',function(){
    //      console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
    //      console.log(document.documentElement.scrollTop); // 滚动高度
    //      console.log(document.documentElement.offsetHeight); // 文档高度
    //     // 判断是否滚动到底
    //     if(document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight) {
    //         console.log(sw);
    //         //如果开关打开则加载数据
    //         if(sw==true){
    //             // 将开关关闭
    //             sw = false;
    //             _this.$axios.get('http://ptk.baolinzhe.com/ptk/api/v1/product/list?page='+_this.page++ +'&pageSize=10&sortType=0&withCoupon=false')
    //                 .then(function(response){
    //                     // 将新获取的数据push到vue中的data，就会反应到视图中了
    //                     var lengths = response.data.result.length;
    //                         for (var i = 0; i < lengths; i++) {
    //                         _this.articles.push(response.data.result[i]);
    //                         }
    //                     // 数据更新完毕，将开关打开
    //                     sw = true;
    //                 })
    //                 .catch(function(error){
    //                     console.log(error);
    //                 });
    //         }
    //     }
    //     console.log(sw)
    // });
  },
  methods: {
    //  onRefresh() {
    //     setTimeout(() => {
    //         this.$toast('刷新成功');
    //         this.isLoading = false;
    //         this.count++;
    //     }, 500);
    //     }
    onClick(index, title) {
      
      this.$toast(title+"index:"+index);
    },
    uploading(event) {
      this.file = event.target.files[0]; //获取文件
      console.log(1);
      console.log(this.file);
      var windowURL = window.URL || window.webkitURL;
      this.file = event.target.files[0]; //创建图片文件的url
      console.log(2);
      this.src = windowURL.createObjectURL(event.target.files[0]);
      console.log(3);
      this.submit(event, this.file);
    },
    submit(event, file) {
      event.preventDefault(); //取消默认行为
      let formdatas = new FormData();
      formdatas.append("qrcode", file);
      console.log(file);
      console.log(4);
      console.log(formdatas);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data" //表单传数据的格式来传递fromdata
        }
      };
      var data = {
        qrcode: formdatas,
        type: 1
      };
      console.log(5);
      this.$axios
        .post(
          "http://ptk.baolinzhe.com:8081/ptk/api/v1/user/1/update/qrcode?type=1",
          formdatas,
          config
        )
        .then(function(response) {
          //做处理
          console.log(6);
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
          console.log(7);
        });
      console.log(8);
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