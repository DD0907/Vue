<template>
  <div style="background:#ffffff;">
      <section>
          <van-tabs v-model="active">
            <van-tab>
                <div slot="title">
                    <span>全部</span>
                </div>
                <section style="background:#ffffff;margin:5px;">
                    <div>
                        <van-row>
                            <van-col span="12">申请提现</van-col>
                            <van-col span="12"><div style="text-align:right;color:red;">-100</div></van-col>
                        </van-row>
                        <van-row>
                            <van-col span="12">时间：2018-05-13 20：32：30</van-col>
                            <van-col span="12"><div style="text-align:right;">佣金币：1000</div></van-col>
                        </van-row>
                        <van-row>
                            <div style="color:#999">审核失败，审核时间：2018-05-14 09：30：23,原因：XXXX</div>
                        </van-row>
                    </div>
                    <section style="height:5px;background:#f1f1f1;"></section>
                </section>
                
            </van-tab>
           <van-tab>
                <div slot="title">
                    <span>佣金</span>
                </div>
                <section style="background:#ffffff;margin:5px;">
                    <div>
                        <van-row>
                            <van-col span="12">订单佣金到账</van-col>
                            <van-col span="12"><div style="text-align:right;color:green;">+100</div></van-col>
                        </van-row>
                        <van-row>
                            <van-col span="12">时间：2018-05-13 20：32：30</van-col>
                            <van-col span="12"><div style="text-align:right;">佣金币：1000</div></van-col>
                        </van-row>
                        <van-row>
                            <div style="color:#999">来自订单号XXX</div>
                        </van-row>
                    </div>
                    <section style="height:5px;background:#f1f1f1;"></section>
                </section>
            </van-tab>
           <van-tab>
                <div slot="title">
                    <span>收益</span>
                </div>
                <section style="background:#ffffff;margin:5px;">
                    <div>
                        <van-row>
                            <van-col span="12">直属超级会员收益到账</van-col>
                            <van-col span="12"><div style="text-align:right;color:green;">+100</div></van-col>
                        </van-row>
                        <van-row>
                            <van-col span="12">时间：2018-05-13 20：32：30</van-col>
                            <van-col span="12"><div style="text-align:right;">佣金币：1000</div></van-col>
                        </van-row>
                        <van-row>
                            <div style="color:#999">来自XXX的订单号XXX的收益</div>
                        </van-row>
                    </div>
                    <section style="height:5px;background:#f1f1f1;"></section>
                </section>
            </van-tab>
           <van-tab>
                <div slot="title">
                    <span>提现</span>
                </div>
                <section style="background:#ffffff;margin:5px;">
                    <div>
                        <van-row>
                            <van-col span="12">申请提现</van-col>
                            <van-col span="12"><div style="text-align:right;color:red;">-100</div></van-col>
                        </van-row>
                        <van-row>
                            <van-col span="12">时间：2018-05-13 20：32：30</van-col>
                            <van-col span="12"><div style="text-align:right;">佣金币：1000</div></van-col>
                        </van-row>
                        <van-row>
                            <div style="color:#999">已打款,打款完成时间：2018-05-14 09：30：23</div>
                        </van-row>
                    </div>
                    <section style="height:5px;background:#f1f1f1;"></section>
                </section>
            </van-tab>
        </van-tabs>
      </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  mounted() {
    this.getParams();
  },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      var routerParams = this.$route.params.data;
      // 将数据放在当前组件的数据内
      this.active = routerParams;
      //alert(this.active)
    }
  }
};
</script>
<style lang="less">
body {
  background: #f1f1f1;
}
.leftbox {
  text-align: center;
  float: left;
  border: 0.1rem solid #ffffff;
}
</style>
