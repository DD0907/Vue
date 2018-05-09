<template>
  <div>
      <section class="back_img">
          <div style="height:30px;text-align:right;">
              <span style="margin:20px;color:red;font-size:0.5rem;" @click="jumpPhone">绑定手机号</span>
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
                    <van-col span="6">
                        <i class="iconfont">&#xe600;</i>
                        <br>明细
                    </van-col>
                    <van-col span="6">
                        <i class="iconfont">&#xe67b;</i>
                        <br>绑定云联账户
                    </van-col>
                    <van-col span="6">
                       <i class="iconfont">&#xe60d;</i>
                        <br>提取白积分
                    </van-col>
                    <van-col span="6">
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
                <div @click="JumpGoods">
                    <van-col span="6">
                        <i class="iconfont">&#xe60e;</i>
                        <br>待收货
                    </van-col>
                </div>
                <div @click="JumpExamine">
                <van-col span="6">
                    <i class="iconfont">&#xe81d;</i>
                    <br>审核中
                </van-col>
                </div>
                <div @click="JumpReward">
                <van-col span="6">
                    <i class="iconfont">&#xe602;</i>
                    <br>已奖励
                </van-col>
                </div>
                <div @click="JumpNoReward">
                <van-col span="6">
                    <i class="iconfont">&#xe627;</i>
                    <br>无奖励
                </van-col>
                </div>
            </van-row>
        </div>
      </section>
        <section style="height:10px;">&nbsp;</section>
        <section>
            <div>
                <van-cell-group>
                  <div class="icon_style"><i class="iconfont" style="color:pink;">&#xe637;</i></div><van-cell title="我的推荐人" @click="jumpRecommendation" is-link/>
                </van-cell-group>
                <section style="height:10px;">&nbsp;</section>
                 <van-cell-group>
                    <div class="icon_style"><i class="iconfont" style="color:pink;">&#xe60a;</i></div><van-cell title="我的邀请海报" is-link  @click="jumpPoster"/>
                </van-cell-group>
                <section style="height:10px;">&nbsp;</section>
                <van-cell-group>
                    <div class="icon_style"><i class="iconfont" style="color:pink;">&#xe60b;</i></div><van-cell title="我的粉丝" @click="jumpFans" is-link/>
                </van-cell-group>
                <section style="height:10px;">&nbsp;</section>
                <van-cell-group>
                   <div class="icon_style"><i class="iconfont" style="color:pink;">&#xe603;</i></div> <van-cell title="我的团队" @click="jumpTeam" is-link/>
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
            <van-goods-action-mini-btn icon="like" style="width:25%;"  @click="jumpPoster">
                收藏
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn icon="contact" style="width:25%;background-color: pink">
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
  mounted() {},
  methods: {
    jumpPhone() {
      this.$toast("绑定手机号");
    },
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
     jumpRecommendation() {
      this.$router.push({
        path: "/ping",
        name: "recommendation"
      });
    },
    jumpPoster() {
      this.$toast("此功能暂未实现");
    },
    jumpFans() {
      this.$router.push({
        path: "/ping",
        name: "fans"
      });
    },
    jumpTeam() {
      this.$router.push({
        path: "/ping",
        name: "team"
      });
    },
    jumpOrder() {
      this.$router.push({
        path: "/ping",
        name: "order",
        params: {
          data: 0
        }
      });
    },
    JumpGoods() {
      this.$router.push({
        path: "/ping",
        name: "order",
        params: {
          data: 1
        }
      });
    },
    JumpExamine() {
      this.$router.push({
        path: "/ping",
        name: "order",
        params: {
          data: 2
        }
      });
    },
    JumpReward() {
      this.$router.push({
        path: "/ping",
        name: "order",
        params: {
          data: 3
        }
      });
    },
    JumpNoReward() {
      this.$router.push({
        path: "/ping",
        name: "order",
        params: {
          data: 4
        }
      });
    }
  }
};
</script>
<style>
@font-face {
  font-family: "iconfont"; /* project id 658440 */
  src: url("//at.alicdn.com/t/font_658440_iz58y6el496hia4i.eot");
  src: url("//at.alicdn.com/t/font_658440_iz58y6el496hia4i.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_658440_iz58y6el496hia4i.woff") format("woff"),
    url("//at.alicdn.com/t/font_658440_iz58y6el496hia4i.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_658440_iz58y6el496hia4i.svg#iconfont")
      format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 0.6rem;
  font-style: normal;
  color: cornflowerblue;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.4px;
  -moz-osx-font-smoothing: grayscale;
}
.icon_style {
  float: left;
  text-align: center;
  font-size: 0.8rem;
  margin: 2px;
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

