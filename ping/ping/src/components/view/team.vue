<template>
  <div>
      <section style="text-align:center;background-image:url('https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png');">
        <van-row>
            <van-col span="8">
                <h3>总人数</h3>
                <van-circle v-model="currentRate1" :rate="totalNumbers" :speed="50" :text="totalNumber" :stroke-width="60"/>
            </van-col>
            <van-col span="8">
                <h3>VIP拼团客</h3>
                <van-circle v-model="currentRate2" :rate="VIPNumbers" :speed="50" color="#13ce66" :text="VIPNumber" :stroke-width="60"/>
            </van-col>
            <van-col span="8">
                <h3>会员</h3>
                <van-circle v-model="currentRate3" :rate="NorNumbers" :speed="50" color="cyan" :text="NorNumber" :stroke-width="60"/>
            </van-col>
        </van-row>
        <div style="border-bottom:0.1px solid #f1f1f1;">&nbsp;</div>
      </section>
      <section style="background:#ffffff;">
          <div>
              <van-cell-group>
              <van-cell value="团队消费奖励"/>
              </van-cell-group>
            </div>
          <div>
            <van-row>
                <van-col span="12">
                    <van-cell>
                        预估未估算奖励
                        <div>100000</div>
                    </van-cell>
                </van-col>
                <van-col span="12">
                    <van-cell>
                        累计已结算奖励
                        <div>100000</div>
                    </van-cell>
                </van-col>
            </van-row>
          </div>
      </section>
      <section>
          <van-tabs>
            <van-tab>
                <div slot="title">
                    <span>全部</span>
                </div>
                全部
            </van-tab>
            <van-tab>
                <div slot="title">
                    <span>待收货</span>
                </div>
                待收货
            </van-tab>
            <van-tab>
                <div slot="title">
                    <span>审核中</span>
                </div>
                审核中
            </van-tab>
            <van-tab>
                <div slot="title">
                    <span>已结算</span>
                </div>
                已结算
            </van-tab>
            <van-tab>
                <div slot="title">
                    <span>无奖励</span>
                </div>
                无奖励
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
      VIPNumbers: 10,
      NorNumbers: 90
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
  mounted() {}
};
</script>
<style>
body {
  background: #f1f1f1;
}
</style>