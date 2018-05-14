<template>
  <div>
      <section class="back_img">
          <div style="height:30px;text-align:right;">
              <!-- <span style="margin:20px;font-size:0.5rem;" @click="jumpPhone">绑定手机号</span> -->
          </div>
          <div style="text-align:center;">
            <div>
                <img src="../../assets/icon/icon_users.png" style="width:2.0rem;height:2.0rem;border-radius: 50%;-moz-border-radius: 50%;-webkit-border-radius: 50%;"/>
            </div>
            <div>
                <span style="font-size:18px;">小米</span>
                <div><van-tag plain style="color:#ffd600;font-size:12px;">拼团客</van-tag></div>
            </div>
          </div>
      </section>
        <div @click="JumpSetting"> 
                <van-cell-group>
                    <van-cell icon="e6a4" title="账户设置" is-link style="color:red;" />
                </van-cell-group>
        </div>
        <section style="height:5px;">&nbsp;</section>
        <section>
            <div>
                <van-cell-group>
                 <a href="http://mobile.yangkeduo.com/orders.html?type=0&refer_page_name=personal&refer_page_sn=10001"> <van-cell title="我的拼多多订单" icon="e605" is-link style="color:red;"/></a>
                </van-cell-group>
                <section style="height:5px;">&nbsp;</section>
                <van-cell-group>
                  <van-cell title="我的推荐人"  icon="e637" @click="jumpRecommendation" is-link style="color:red;"/>
                   <van-cell title="我的粉丝"  icon="e60b" @click="jumpFans" is-link style="color:red;"/>
                   <van-cell title="专属推广海报"  icon="e60a" @click="jumpTeam" is-link style="color:red;"/>
                </van-cell-group>
                <section style="height:5px;">&nbsp;</section>
                <van-cell-group>
                  <van-cell title="升级超级会员"  icon="e607" @click="jumpFans" is-link style="color:red;"/>
                   <van-cell title="官方客服"  icon="e604" @click="jumpTeam" is-link style="color:red;"/>
                </van-cell-group>
            </div>
        </section>
        <section style="height:50px;">&nbsp;</section>
   <!-- 底部标签 -->
    <div>
    <van-row>
      <van-goods-action>
            <van-goods-action-mini-btn style="width:25%;" @click="jumpIndex">
                <div style="text-align:center;">
                  <van-icon name="e606"/>
                  <div style="margin:1px;">首页</div>
                </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpLove">
              <div style="text-align:center;">
                  <van-icon name="e619"/>
                  <div style="margin:1px;">收藏</div>
              </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpVip">
              <div style="text-align:center;">
                  <van-icon name="e607"/>
                  <div style="margin:1px;">超级会员</div>
              </div>
            </van-goods-action-mini-btn>
            <!-- <van-goods-action-mini-btn  style="width:25%;" @click="JumpShare">
                <div style="text-align:center;">
                  <van-icon name="e619"/>
                  <div style="margin:1px;">晒单分享</div>
                </div>
            </van-goods-action-mini-btn> -->
            <van-goods-action-mini-btn style="width:25%;">
                <div style="text-align:center;color:red;">
                  <van-icon name="e6a4"/>
                  <div style="margin:1px;">我的</div>
                </div>
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
    // jumpPhone() {
    //   this.$toast("绑定手机号");
    // },
    jumpIndex() {
      this.$router.push({
        path: "/ping",
        name: "indexs"
      });
    },
    JumpVip() {
      this.$router.push({
        path: "/ping",
        name: "vip"
      });
    },
    // jumpShare() {
    //   this.$router.push({
    //     path: "/ping",
    //     name: "share"
    //   });
    // },
    JumpLove() {
      this.$router.push({
        path: "/ping",
        name: "love"
      });
    },
    JumpSetting() {
      this.$router.push({
        path: "/ping",
        name: "setting"
      });
    },
    jumpRecommendation() {
      this.$router.push({
        path: "/ping",
        name: "recommendation"
      });
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
    }
  }
};
</script>
<style>
@import "../../common/css/user.css";
@import "../../common/css/fontface.css";
</style>

