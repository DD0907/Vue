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
              <div @click="JumpExchangeRecord">
                 <van-cell style="border-left:0.2px solid #f1f1f1;">
                    <template slot="title">
                    <div style="text-align:center;"><img :src="imgrecord" style="height:0.5rem;"/> 兑换记录</div>
                    </template>
                </van-cell>
              </div>
            </van-col>
        </van-row>
        <van-cell>
          <template slot="title">
            <div style="color:#999">大家都在兑</div>
          </template>
        </van-cell>
      </section>
      <section>
        <van-row>
            <van-col span="12">
                <van-cell style="border:0.2px solid #f1f1f1;">
                    <template slot="title">
                      <div>
                        <div>10元话费直充</div>
                        <div>
                          <span style="color:#999">1000白积分</span> <van-tag type="danger">抽奖</van-tag>
                        </div>
                      </div>
                    </template>
                </van-cell>
            </van-col>
            <van-col span="12">
                 <van-cell style="border:0.2px solid #f1f1f1;">
                    <template slot="title">
                      <div>
                        <div>【抽奖】50元话费</div>
                        <div>
                          <span style="color:#999">500白积分</span> <van-tag type="danger">抽奖</van-tag>
                        </div>
                      </div>
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
  },
  methods:{
    JumpExchangeRecord(){
           
    }
  }
};
</script>
<style>
body {
  background: #f1f1f1;
}
</style>
