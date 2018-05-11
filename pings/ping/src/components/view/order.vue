<template>
  <div>
      <section>
          <van-tabs v-model="active">
            <van-tab>
                <div slot="title">
                    <span>全部</span>
                </div>
                <div>
                <van-cell-group>
                    <van-cell title="去拼多多网查看我的拼团订单" is-link/>
                </van-cell-group>
                <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                        <div class="leftbox">
                            <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                <van-tag plain type="danger">云联全返</van-tag>
                                商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                            </div>
                            <div>
                                <span>实付29.9元</span>
                                <span>积分奖励10000白积分</span>
                            </div>
                        </div>
                    <div style="clear:both;"></div>
                    <div style="padding:2px;">
                        <van-row>
                            <van-col span="12">  
                                <div style="padding:2px;color:#999">2018-04-02 18:00付款</div>
                            </van-col>
                            <van-col span="12"> 
                                <div style="text-align:right;color:#999"></div>
                            </van-col>
                        </van-row>
                    </div>                   
                 </div>

                 <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                        <div class="leftbox">
                            <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                <van-tag plain type="danger">云联全返</van-tag>
                                商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                            </div>
                            <div>
                                <span>实付29.9元</span>
                                <span>积分奖励10000白积分</span>
                            </div>
                        </div>
                    <div style="clear:both;"></div>
                    <div style="padding:2px;">
                        <van-row>
                            <van-col span="12">  
                                <div style="padding:2px;color:#999;">2018-04-02 18:00确认收货</div>
                            </van-col>
                            <van-col span="12"> 
                                <div style="text-align:right;color:#999">需要审核15天</div>
                            </van-col>
                        </van-row>
                    </div>                   
                 </div>

                 <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                        <div class="leftbox">
                            <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                <van-tag plain type="danger">云联全返</van-tag>
                                商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                            </div>
                            <div>
                                <span>实付29.9元</span>
                                <span>积分奖励10000白积分</span>
                            </div>
                        </div>
                    <div style="clear:both;"></div>
                    <div style="padding:2px;">
                        <van-row>
                            <van-col span="12">  
                                <div style="padding:2px;color:#999">2018-04-02 18:00已奖励</div>
                            </van-col>
                            <van-col span="12"> 
                                <div style="text-align:right;color:#999"></div>
                            </van-col>
                        </van-row>
                    </div>                   
                 </div>

                </div>
            </van-tab>
            <van-tab>
                <div slot="title">
                    <span>待收货</span>
                </div>
                <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                        <div class="leftbox">
                            <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                <van-tag plain type="danger">云联全返</van-tag>
                                商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                            </div>
                            <div>
                                <span>实付29.9元</span>
                                <span>积分奖励10000白积分</span>
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
           <van-tab>
                <div slot="title">
                    <span>审核中</span>
                </div>
                <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                        <div class="leftbox">
                            <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                <van-tag plain type="danger">云联全返</van-tag>
                                商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                            </div>
                            <div>
                                <span>实付29.9元</span>
                                <span>积分奖励10000白积分</span>
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
           <van-tab>
                <div slot="title">
                    <span>已奖励</span>
                </div>
                <section style="height:2px;">&nbsp;</section>
                 <div style="background:#ffffff;border:0.5px solid #f1f1f1;padding:2px;">
                        <div class="leftbox">
                            <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.5rem;" />
                        </div>
                        <div>
                            <div style="font-size:0.2rem;padding:2px;">
                                <van-tag plain type="danger">云联全返</van-tag>
                                商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                            </div>
                            <div>
                                <span>实付29.9元</span>
                                <span>积分奖励10000白积分</span>
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
            </van-tab>
           <van-tab>
                <div slot="title">
                    <span>无奖励</span>
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
         active:0
    };
  },
  mounted(){
    this.getParams();
  },
  methods: {
    getParams() {
      // 取到路由带过来的参数
      var routerParams = this.$route.params.data;
      // 将数据放在当前组件的数据内
      this.active = routerParams;
      //alert(this.active)
    },
  }
};
</script>
<style lang="less">
body {
  background: #f1f1f1;
}
.leftbox{
  text-align: center;
  float: left;
  border:0.1rem solid #ffffff;
}
</style>


