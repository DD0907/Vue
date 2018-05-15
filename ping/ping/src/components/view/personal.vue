<template>
  <section>
     <section class="back_img">
          <div style="height:30px;text-align:right;">
              <!-- <span style="margin:20px;font-size:0.5rem;" @click="jumpPhone">绑定手机号</span> -->
          </div>
          <div style="text-align:center;">
            <div v-if="userdata.headPic==''">
                <img src="../../assets/icon/icon_user.png" style="width:2.0rem;height:2.0rem;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;"/>
            </div>
             <div v-else>
                <img :src="headurl" style="width:2.0rem;height:2.0rem;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;"/>
            </div>
            <div>
                <span style="font-size:18px;">{{userdata.nickname}}</span>
               <div>
                  <van-tag plain style="color:#ffd600;font-size:12px;" v-if="userdata.vip==false">拼团客</van-tag>
                  <van-tag plain style="color:#ffd600;font-size:12px;" v-else>超级会员</van-tag>
                </div>
                <div>我的粉丝：{{userdata.invitationNum}}</div>
            </div>
          </div>
      </section>
      <section>
          <!-- 手机号 -->
        <van-cell-group>
           <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>手机号</span>
                  </template>
                </van-cell>
              </van-col>
              <div>
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                    <span v-if="phone==''">未添加</span>
                    <span v-else>{{phone}}</span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </van-cell-group>
        <!-- 微信号 -->
        <van-cell-group>
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>微信号</span>
                  </template>
                </van-cell>
              </van-col>
              <div>
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                    <span v-if="weixinnumber==''">未添加</span>
                    <span v-else>{{weixinnumber}}</span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </van-cell-group>
        <!-- 微信二维码 -->
        <van-cell-group>
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>微信二维码</span>
                  </template>
                </van-cell>
              </van-col>
              <div>
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                     <span v-if="wxQrcode!=''"><img :src="wxQrcode" style="width:10%;"/></span>
                    <span v-else>未添加</span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </van-cell-group>
        <!-- 微信收钱码 -->
        <van-cell-group>
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>微信收钱码</span>
                  </template>
                </van-cell>
              </van-col>
              <div>
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                    <span v-if="wxMoneyQrcode!=''"><img :src="wxMoneyQrcode" style="width:10%;"/></span>
                    <span v-else>未添加</span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </van-cell-group>
      </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      url: "http://ptk.baolinzhe.com/ptk/api/",
      phone: "",
      weixinnumber: "",
      refereId: "",
      headurl: "",
      userdata: {},
      wxMoneyQrcode: "",
      wxQrcode: ""
    };
  },
  mounted() {
    this.id = sessionStorage.getItem("userId");
    this.getParams();
    this.getUserData();
  },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      var refereId = this.$route.params.refereId;
      // 将数据放在当前组件的数据内
      this.refereId = refereId;
      console.log(this.refereId);
    },
    getUserData() {
      // 缓存指针
      let _this = this;
      if (_this.id == "") {
        _this.$toast("当前您还未登录哦");
      } else {
        // 此处使用node做了代理
        this.$axios
          .get(
            _this.url +
              "/v1/user/" +
              _this.id +
              "/superior?refereId=" +
              _this.refereId
          )
          .then(function(response) {
            // 将得到的数据放到vue中的data
            _this.userdata = response.data.result;
            _this.headurl = _this.userdata.headPic;
            _this.phone = _this.userdata.phone;
            _this.weixinnumber = _this.userdata.wxId;
            _this.wxMoneyQrcode = _this.userdata.wxMoneyQrcode;
            _this.wxQrcode = _this.userdata.wxQrcode;
            console.log(_this.userdata);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  }
};
</script>
<style>
.back_img {
  background-image: url("https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png");
  width: 100%;
  height: 100%;
  margin: auto;
}
</style>
