<template>
  <section>
    <section style="background:#ffffff;">
      <van-row>
        <van-col span="3"><img src="../../assets/icon/icon_user.png" style="width:100%;height:100%;margin:0 auto;"/></van-col>
        <van-col span="9" style="margin-top:0.5rem;" >
          <span>小米
          <van-tag type="success">
             超级会员
          </van-tag>
          </span>
        </van-col>
        <van-col span="4" style="margin-top:0.5rem;">
         &nbsp;
        </van-col>
        <van-col span="4" style="text-align:center;">
         <img src="../../assets/icon/icon_course.png"/><br>新手教程
        </van-col>
        <van-col span="4" style="text-align:center;">
          <img src="../../assets/icon/icon_referee.png"/><br>咨询推荐人
        </van-col>
      </van-row>
    </section>
    <section style="height:1px;"></section>
    <section style="background:#ffffff;">
      <div style="float:left;margin:2px;">
        <div style="font-size:0.4rem;">可提现佣金币：10000</div>
        <div style="color:#999">100佣金币=1元</div>
      </div>
      <div style="text-align:right;">
        <van-button type="primary" size="mini" style="margin-top:0.2rem;;">提现</van-button>
      </div>
      <div style="clear:both;"></div>
    </section>
    <section style="height:1px;"></section>
    <section>
      <van-cell-group>
        <div @click="JumpGoods">
          <van-cell>
            <template slot="title">
              <span>待确认收货的佣金币:10000</span>
            </template>
          </van-cell>
        </div>
      </van-cell-group>
      <van-cell-group>
        <div @click="JumpExamine">
          <van-cell>
            <template slot="title">
              <span>审核中的佣金币:10000</span>
            </template>
          </van-cell>
        </div>
      </van-cell-group>
      <van-cell-group>
        <div @click="JumpSettlement">
          <van-cell>
            <template slot="title">
              <span>已结算的佣金币:10000</span>
            </template>
          </van-cell>
        </div>
      </van-cell-group>
      <van-cell-group>
        <div @click="JumpPutforward">
          <van-cell>
            <template slot="title">
              <span>已提现的佣金币:10000</span>
            </template>
          </van-cell>
        </div>
      </van-cell-group>
    </section>
    <!-- 底部标签 -->
    <div>
      <van-row>
          <van-goods-action>
              <van-goods-action-mini-btn style="width:25%;" @click="JumpIndex">
                  <div style="text-align:center;"><img src="../../assets/icon/icon_home.png" style="width:25%;">
                  <div>首页</div>
                  </div>
              </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;"  @click="JumpLove">
                  <div style="text-align:center;"><img src="../../assets/icon/icon_love.png" style="width:25%;">
                  <div>收藏</div>
                  </div>
              </van-goods-action-mini-btn>
              <van-goods-action-mini-btn style="width:25%;">
                  <div style="text-align:center;"><img src="../../assets/icon/icon_vip_current.png" style="width:25%;">
                  <div>超级会员</div>
                  </div>
              </van-goods-action-mini-btn>
              <van-goods-action-mini-btn  style="width:25%;" @click="JumpShare">
                  <div style="text-align:center;"><img src="../../assets/icon/icon_my_share.png" style="width:25%;">
                  <div>晒单分享</div>
                  </div>
              </van-goods-action-mini-btn>
              <van-goods-action-mini-btn  style="width:25%;" @click="JumpUser">
                <div style="text-align:center;"><img src="../../assets/icon/icon_my.png" style="width:25%;">
                  <div>我的</div>
                  </div>
              </van-goods-action-mini-btn>
          </van-goods-action>
      </van-row>
    </div>
  </section>
</template>
<script>
import notice from "../../assets/icon/icon_notices.png";

export default {
  data() {
    return {
      nitice: "您已成功邀请2人，还差3人可申请",
      notice_icon: notice,
      checked: false
    };
  },
  methods: {
    JumpShare() {
      this.$router.push({
        path: "/ping",
        name: "share"
      });
    },
    JumpLove() {
      this.$router.push({
        path: "/ping",
        name: "love"
      });
    },
    JumpVip() {
      this.$router.push({
        path: "/ping",
        name: "vip"
      });
    },
    JumpIndex() {
      this.$router.push({
        path: "/ping",
        name: "indexs"
      });
    },
    JumpUser() {
      this.$router.push({
        path: "/ping",
        name: "user"
      });
    },
     JumpGoods() {
      this.$router.push({
        path: "/ping",
        name: "viprecord",
        params: {
          data: 0
        }
      });
    },
    JumpExamine() {
      this.$router.push({
        path: "/ping",
        name: "viprecord",
        params: {
          data: 1
        }
      });
    },
    JumpSettlement() {
      this.$router.push({
        path: "/ping",
        name: "viprecord",
        params: {
          data: 2
        }
      });
    },
    JumpPutforward() {
      this.$router.push({
        path: "/ping",
        name: "viprecord",
        params: {
          data: 3
        }
      });
    },
  }
};
</script>
<style>
body {
  background: #f1f1f1;
}
</style>
