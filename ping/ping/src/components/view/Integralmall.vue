<template>
  <section>
      <section>
        <van-row>
            <van-col span="12">
                <van-cell style="border-right:0.2px solid #f1f1f1;">
                    <template slot="title">
                    <div style="text-align:center;"><img :src="imgtotal" style="height:0.5rem;"/> 积分 6888</div>
                    </template>
                </van-cell>
            </van-col>
            <van-col span="12">
                 <van-cell style="border-left:0.2px solid #f1f1f1;">
                    <template slot="title">
                    <div style="text-align:center;"><img :src="imgrecord" style="height:0.5rem;"/> 兑换记录</div>
                    </template>
                </van-cell>
            </van-col>
        </van-row>
      </section>
  </section>    
</template>
<script>
import integraltotal from "../../assets/icon/icon_integraltotal.png";
import integralrecord from "../../assets/icon/icon_integralrecord.png";
export default {
  data() {
    return {
      imgtotal: integraltotal,
      imgrecord: integralrecord
    };
  }
};
</script>
<style>
body {
  background: #f1f1f1;
}
</style>
