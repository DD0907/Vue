<template>
  <div>
      <section style="text-align:center;background-image:url('https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png');">
        <van-row>
            <van-col span="8">
                <h3>粉丝总人数</h3>
                <van-circle v-model="currentRate1" :rate="totalNumbers" :speed="50" :text="totalNumber" :stroke-width="60"/>
            </van-col>
            <van-col span="8">
                <h3>拼团客</h3>
                <van-circle v-model="currentRate2" :rate="VIPNumbers" :speed="50" color="#13ce66" :text="VIPNumber" :stroke-width="60"/>
            </van-col>
            <van-col span="8">
                <h3>超级会员</h3>
                <van-circle v-model="currentRate3" :rate="NorNumbers" :speed="50" color="cyan" :text="NorNumber" :stroke-width="60"/>
            </van-col>
        </van-row>
        <div style="border-bottom:0.1px solid #f1f1f1;">&nbsp;</div>
      </section>
      <section>
          <van-tabs>
            <van-tab>
                <div slot="title">
                    <span>拼团客</span>
                </div>
                <div>
                    <div style="background:#ffffff">
                        <van-row>
                            <van-col span="6">
                              <div class="imgs">
                                <img src="../../assets/icon/icon_users.png"/>
                              </div >  
                            </van-col>
                            <van-col span="6">
                                <div style="margin-top:30%;">我是拼团客</div>
                            </van-col>
                            <van-col span="10">
                                <div style="text-align:right;margin-top:20%;" @click="JumpPersonal">查看个人主页</div>
                            </van-col>
                        </van-row>
                      </div>
                </div>
            </van-tab>
            <van-tab>
                <div slot="title">
                    <span>超级会员</span>
                </div>
                <div>
                    <div style="background:#ffffff">
                        <van-row>
                            <van-col span="6">
                              <div class="imgs">
                                <img src="../../assets/icon/icon_users.png"/>
                              </div >  
                            </van-col>
                            <van-col span="6">
                                <div style="margin-top:30%;">我是超级会员</div>
                            </van-col>
                            <van-col span="10">
                                <div style="text-align:right;margin-top:20%;" @click="JumpPersonalVip">查看个人主页</div>
                            </van-col>
                        </van-row>
                      </div>
                </div>
            </van-tab>
       </van-tabs>
      </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentRate1: 0,
      currentRate2: 0,
      currentRate3: 0,
      totalNumbers: 100,
      VIPNumbers: 54,
      NorNumbers: 46
    };
  },
  computed: {
    totalNumber() {
      return this.currentRate1.toFixed(0) + "%";
    },
    VIPNumber() {
      return this.currentRate2.toFixed(0) + "%";
    },
    NorNumber() {
      return this.currentRate3.toFixed(0) + "%";
    }
  },
  mounted() {},
  methods: {
    JumpPersonal() {
      this.$router.push({
        path: "/ping",
        name: "personal"
      });
    },
    JumpPersonalVip(){
        this.$router.push({
        path: "/ping",
        name: "personalVip"
      });
    }
  }
};
</script>
<style>
body {
  background: #f1f1f1;
}
.imgs {
  background: #ffffff;
  height: 2rem;
  text-align: center;
}
.imgs img {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin: 0px auto;
}
</style>

