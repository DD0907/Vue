<template>
<!-- 提现 -->
  <section>
      <section>
        <van-notice-bar :text="nitice" :left-icon="notice_icon"/>
        <van-cell-group>
         <van-cell title="可提现佣金币余额" />
        </van-cell-group>
        <van-cell-group style="height:2.0rem;">
        <van-cell>
            <template slot="title">
                <div style="text-align:center;font-size:28px;margin-top:0.4rem;">
                  <van-icon name="e610" style="color:#ffd600;"/>
                  <span>{{money}}</span>
                  <div style="color:#999;font-size:12px;">(100佣金币=1元)</div>
                </div>
            </template>
        </van-cell>
        </van-cell-group>
      </section>
      <section style="height:5px;"></section>
      <section>
        <van-cell-group>
            <van-field center v-model="number" label="佣金币" placeholder="请输入佣金币数量" type="number">
            <div slot="button" style="color:#d81e06;" @click="JumpTotalMoney">全部提现
            </div>
            </van-field>
            <van-cell title="微信收款二维码" value="未绑定" is-link/>
            <div style="height:0.6rem;margin-top:5px;">
              <span style="font-size:16px;margin:15px;">到账金额</span>
              <span style="margin:0px 0px 0px 15px;color:red;">{{(number-(number%100))/100}}.00元</span>
            </div>
            <van-field center  label="手续费" placeholder="免收手续费"  disabled :error="true"/>
        </van-cell-group>
      </section>
      <section>
            <!-- <van-cell :title="titledesc" style="font-size:10px;"/> -->
            <div style="margin:15px;color:#999">{{titledesc}}</div>
            <div style="text-align:center;">
                  <div style="margin:30px 15px 0px 15px;" @click="JumpCash">
                    <van-button type="default" size="large" style="background:#d81e06;color:#ffffff">申请提现</van-button>
                  </div>
                  <div style="font-size:16px;margin-top:15px;color:red;" @click="JumpDeti">查看提现记录<van-icon name="arrow" style="font-size:14px;" /></div>
            </div>
      </section>
  </section>
</template>
<script>
import notice from "../../assets/icon/icon_notices.png";
export default {
  data() {
    return {
      nitice: "满1000佣金币即可提现，需整百提现",
      notice_icon: notice,
      number: "",
      money: 990,
      titledesc:
        "每天可成功兑换一次，提现审核时间为9:00-21:00,审核成功后客服会根据您提供的微信二维码，进行打款操作"
    };
  },
  methods: {
    JumpTotalMoney() {
      this.number = this.money - this.money % 100;
      if (this.number <= 0) {
        this.$toast("满1000佣金币才能提现");
        this.number='';
      }
    },
    JumpCash() {
      this.$toast("您已申请成功");
    },
    JumpDeti(){
      this.$router.push({
        path: "/ping",
        name: "commissions",
        params: {
          data: 3
        }
      });
    }
  }
};
</script>
<style>
@import "../../common/css/fontface.css";
body {
  background: #f1f1f1;
}
</style>
