<template>
  <div>
      <section class="back_img">
          <div style="height:20px;text-align:right;color:#ffffff;font-size:0.4rem;">
              <span style="margin:10px;">绑定手机号</span>
            </div>
          <div style="text-align:center;">
            <div>
                <img src="../../assets/icon/icon_users.png" style="width:2.0rem;height:2.0rem;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;"/>
            </div>
            <div>
                小米 <van-tag plain type="success">普通会员</van-tag>
            </div>
            <div>
                拼团客ID:7879
            </div>
            <div>
                <div>我的白积分</div>
                <div>6888</div>
            </div>
          </div>
      </section>
      <section>
          <div style="text-align:center;background:#ffffff">
                <van-row>
                    <van-col span="6" style="border:1px solid black;">
                        <i class="iconfont">&#xe600;</i>
                        <br>明细
                    </van-col>
                    <van-col span="6" style="border:1px solid black;">
                        <i class="iconfont">&#xe67b;</i>
                        <br>绑定云联账户
                    </van-col>
                    <van-col span="6" style="border:1px solid black;">
                       <i class="iconfont">&#xe60d;</i>
                        <br>提取白积分
                    </van-col>
                    <van-col span="6" style="border:1px solid black;">
                        <i class="iconfont">&#xe61b;</i>
                        <br>兑换商品话费
                    </van-col>
                </van-row>
            </div>
      </section>
      <section style="height:10px;">&nbsp;</section>
      <section>
        <div style="text-align:right;">
            <van-cell-group>
                <van-cell title="全部订单" is-link @click="jumpOrder" />
            </van-cell-group>
        </div>
        <div style="text-align:center;background:#ffffff;">
            <van-row>
                <van-col span="6" style="border:1px solid black;">
                    <i class="iconfont">&#xe60e;</i>
                    <br>待收货
                </van-col>
                <van-col span="6" style="border:1px solid black;">
                    <i class="iconfont">&#xe81d;</i>
                    <br>审核中
                </van-col>
                <van-col span="6" style="border:1px solid black;">
                    <i class="iconfont">&#xe602;</i>
                    <br>已奖励
                </van-col>
                <van-col span="6" style="border:1px solid black;">
                    <i class="iconfont">&#xe627;</i>
                    <br>无奖励
                </van-col>
            </van-row>
        </div>
      </section>
        <section style="height:10px;">&nbsp;</section>
        <section>
            <div style="text-align:center;">
                <van-cell-group>
                    <i class="iconfont">&#xe637;</i><van-cell title="我的推荐人"/>
                </van-cell-group>
                <section style="height:10px;">&nbsp;</section>
                 <van-cell-group>
                    <i class="iconfont">&#xe60a;</i><van-cell title="我的邀请海报"/>
                </van-cell-group>
                <section style="height:10px;">&nbsp;</section>
                <van-cell-group>
                    <i class="iconfont">&#xe60b;</i><van-cell title="我的粉丝" @click="jumpFans"/>
                </van-cell-group>
                <section style="height:10px;">&nbsp;</section>
                <van-cell-group>
                   <i class="iconfont">&#xe603;</i> <van-cell title="我的团队"/>
                </van-cell-group>
            </div>
        </section>
        <section style="height:50px;">&nbsp;</section>
   <!-- 底部标签 -->
    <div>
    <van-row>
        <van-goods-action>
            <van-goods-action-mini-btn style="width:25%;" icon="wap-home" @click="jumpIndex">
                首页
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn icon="share" style="width:25%;" @click="jumpShape">
                晒单分享
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn icon="like" style="width:25%;">
                收藏
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn icon="contact" style="width:25%;background-color: #f84600;">
                我的
            </van-goods-action-mini-btn>
        </van-goods-action>
    </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    jumpIndex() {
      this.$router.push({
        path: "/ping",
        name: "indexs"
      });
    },
    jumpShape() {
      this.$router.push({
        path: "/ping",
        name: "shape"
      });
    },
    jumpOrder(){
        this.$router.push({
        path: "/ping",
        name: "order",
      });
    },
    jumpFans(){
        this.$router.push({
            path:'/ping',
            name:'fans'
        });
    }
  }
};
</script>
<style>
@font-face {
  font-family: 'iconfont';  /* project id 658440 */
  src: url('//at.alicdn.com/t/font_658440_iz58y6el496hia4i.eot');
  src: url('//at.alicdn.com/t/font_658440_iz58y6el496hia4i.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_658440_iz58y6el496hia4i.woff') format('woff'),
  url('//at.alicdn.com/t/font_658440_iz58y6el496hia4i.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_658440_iz58y6el496hia4i.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 0.5rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background: #f1f1f1;
}
.goods-imgurl {
  width: 100%;
  height: 100%;
  margin: auto;
}
.back_img {
  background-image: url("https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png");
  width: 100%;
  height: 100%;
  margin: auto;
}
</style>

