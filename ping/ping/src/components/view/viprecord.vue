<template>
  <section>
      <section>
        <van-tabs v-model="active">
            <van-tab>
                <div slot="title">
                   待确认收货
                </div>
                 <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                        <div class="leftbox">
                            <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                            </div>
                            <div>
                                <span>实付29.9元</span>
                                <span>奖励10000佣金币</span>
                            </div>
                        </div>
                    <div style="clear:both;"></div>
                    <div style="padding:2px;">
                        <van-row>
                            <van-col span="12">  
                                <div style="padding:2px;color:#999;">2018-04-02 18:00待确认收货</div>
                            </van-col>
                            <van-col span="12"> 
                                <div style="text-align:right;color:#999"></div>
                            </van-col>
                        </van-row>
                    </div>                   
                 </div>
            </van-tab>
            <van-tab>
                <div slot="title">
                   审核中
                </div>
                <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                        <div class="leftbox">
                            <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                            </div>
                            <div>
                                <span>实付29.9元</span>
                                <span>奖励10000佣金币</span>
                            </div>
                        </div>
                    <div style="clear:both;"></div>
                    <div style="padding:2px;">
                        <van-row>
                            <van-col span="12">  
                                <div style="padding:2px;color:#999">2018-04-02 18:00确认收货</div>
                            </van-col>
                            <van-col span="12"> 
                                <div style="text-align:right;color:#999">需要审核15天</div>
                            </van-col>
                        </van-row>
                    </div>                   
                 </div>
            </van-tab>
            <!-- <van-tab>
                <div slot="title">
                   已结算
                </div>
                <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                        <div class="leftbox">
                            <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                            </div>
                            <div>
                                <span>实付29.9元</span>
                                <span>奖励10000佣金币</span>
                            </div>
                        </div>
                    <div style="clear:both;"></div>
                    <div style="padding:2px;">
                        <van-row>
                            <van-col span="12">  
                                <div style="padding:2px;color:#999">2018-04-02 18:00已奖励</div>
                            </van-col>
                            <van-col span="12"> 
                                <div style="text-align:right;color:#999s"></div>
                            </van-col>
                        </van-row>
                    </div>                   
                 </div>
            </van-tab> -->
            <van-tab>
                <div slot="title">
                   已提现
                </div>
                <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                        <div class="leftbox">
                            <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                            </div>
                            <div>
                                <span>实付29.9元</span>
                                <span>奖励10000佣金币</span>
                            </div>
                        </div>
                    <div style="clear:both;"></div>
                    <div style="padding:2px;">
                        <van-row>
                            <van-col span="12">  
                                <div style="padding:2px;color:#999">2018-04-02 18:00已提现</div>
                            </van-col>
                            <van-col span="12"> 
                                <div style="text-align:right;color:#999s"></div>
                            </van-col>
                        </van-row>
                    </div>                   
                 </div>
            </van-tab>
        </van-tabs>
      </section>
  </section>
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

<style>
.leftbox{
  text-align: center;
  float: left;
  border:0.1rem solid #ffffff;
}
</style>

