<template>
  <section style="background:#ffffff;">
    <section style="background:#ffffff;">
      <van-row>
        <div style="text-align:center;margin:5px;">
          <van-col span="6"><img src="../../assets/icon/icon_users.png" style="width:2.0rem;height:2.0rem;margin:0 auto;"/></van-col>
        </div>
        <van-col span="6" style="margin-top:0.5rem;" >
          <span>小米</span>
        </van-col>
        <van-col span="3" style="margin-top:0.5rem;">
         &nbsp;
        </van-col>
        <van-col span="9">
          <div style="text-align:right;margin:-0.5rem;">
            <van-button>同步微信头像</van-button>
          </div>
        </van-col>
      </van-row>
    </section>
      <section style="height:2px;background:#f1f1f1;"></section>
    <section>
        <div> 
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>手机号</span>
                  </template>
                </van-cell>
              </van-col>
              <div @click="JumpBindingPhone">
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                    <span>去绑定手机号</span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </div>
    </section>
    <section style="height:10px;background:#f1f1f1;"></section>
    <section>
            <div> 
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>微信号</span>
                  </template>
                </van-cell>
              </van-col>
              <div @click="JumpBindingWeixin">
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                    <span>暂无微信号</span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </div>
    </section>
    <section style="height:2px;background:#f1f1f1;"></section>
    <section style="background:#ffffff">
      <div style="text-align:center;">
        <img src="../../assets/icon/icon_scan.png" style="width:5.0rem;height:5.0rem;border:1px solid #999"/>
            <div><van-button type="primary" size="normal">上传微信二维码</van-button></div>
      </div>
      <section style="height:5px;"></section>
      <div style="text-align:center;">
        <img src="../../assets/icon/icon_scan_receivable.png" style="width:5.0rem;height:5.0rem;border:1px solid #999"/>
            <div><van-button type="primary" size="normal">上传微信收款二维码</van-button></div>
      </div>
    </section>

    <van-popup v-model="phoneshow">
        <div style="width:300px;background:#999">
          <van-field v-model="phone" label="手机号" placeholder="请输入手机号" type="tel" />
          <van-button style="width:50%;" type="danger" size="normal">取消</van-button><van-button style="width:50%;" type="primary" size="normal">确认</van-button>
        </div>
    </van-popup>

    <van-popup v-model="weixinshow">
        <div style="width:300px;background:#999">
          <van-field v-model="weixinnumber" label="微信号" placeholder="请输入微信号" type="text" />
          <van-button style="width:50%;" type="danger" size="normal">取消</van-button><van-button style="width:50%;" type="primary" size="normal">确认</van-button>
        </div>
    </van-popup>
  </section>
</template>
<script>
export default {
  data() {
    return {
      phoneshow: false,
      weixinshow: false,
      phone: "",
      weixinnumber: ""
    };
  },
  methods: {
    JumpBindingPhone() {
      this.phoneshow = true;
    },
    JumpBindingWeixin() {
      this.weixinshow = true;
    }
  }
};
</script>

<style>

</style>

<style>

</style>