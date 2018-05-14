<template>
<!-- 提现 -->
  <section>
      <section>
        <van-notice-bar :text="nitice" :left-icon="notice_icon"/>
        <van-cell-group>
         <van-cell title="可提现佣金币余额" />
        </van-cell-group>
        <van-cell-group>
        <van-cell>
            <template slot="title">
                <div style="text-align:center;font-size:18px;">
                <van-tag type="danger">金币</van-tag>
                <span class="van-cell-text">1000</span>
                </div>
            </template>
        </van-cell>
        </van-cell-group>
      </section>
      <section style="height:5px;"></section>
      <section>
        <van-cell-group>
            <van-field center v-model="number" label="佣金币" placeholder="请输入佣金币数量" type="number">
            <van-button slot="button" size="small" type="primary">全部提现</van-button>
            </van-field>
            <van-cell title="到账金额" value="1000"/>
            <van-cell title="手续费" value="10"/>
        </van-cell-group>
      </section>
      <section>
            <van-cell :title="titledesc" style="font-size:10px;"/>
            <div style="text-align:center;">
                  <van-button type="primary" size="large">申请提现</van-button>
                  <div style="font-size:14px;">查看提现记录</div>
                  <div style="text-align:center;">
                    <div>我的微信收款二维码</div>
                    <div style="">
                        <img src="../../assets/icon/icon_scan.png" style="width:3.0rem;height:3.0rem;border:1px solid #999"/>
                    </div>
                    <div>如何查看我的微信收款二维码?</div>
                  </div>
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
      titledesc:
        "每天可成功兑换一次，提现审核时间为9：00-21：00,审核成功后客服会根据您提供的微信二维码，进行打款操作"
    };
  },
  methods: {  
  }
};
</script>
<style>
body {
  background: #f1f1f1;
}
</style>
