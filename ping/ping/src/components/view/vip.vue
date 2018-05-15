<template>
  <section>
    <section style="background:#ffffff;height:3.0rem;">
      <van-row>
        <van-col span="1">&nbsp;</van-col>
        <van-col span="5" style="margin-top:0.5rem;"><img src="../../assets/icon/icon_user.png" style="width:80%;height:80%;margin:0 auto;"/></van-col>
        <!-- <van-col span="1" style="margin-top:0.5rem;">
         &nbsp;
        </van-col> -->
        <van-col span="10" style="margin-top:1.0rem;" >
          <span style="font-size:16px;">我是最喜欢吃大米的
            <div>
            <van-tag plain style="color:#ffd600;font-size:12px;">
              超级会员
            </van-tag>
            </div>
          </span>
        </van-col>
        <!-- <van-col span="4" style="margin-top:0.5rem;">
         &nbsp;
        </van-col> -->
        <van-col span="4" style="text-align:center;margin-top:0.8rem;">
         <img src="../../assets/icon/icon_course.png" style="width:0.9rem;"/><br>新手教程
        </van-col>
        <van-col span="4" style="text-align:center;margin-top:0.8rem;">
          <img src="../../assets/icon/icon_referee.png" style="width:0.9rem;"/><br>咨询推荐人
        </van-col>
      </van-row>
    </section>
    <section style="height:1px;"></section>
    <section style="background:#ffffff;">
       <van-cell-group>
          <van-cell title="可提现佣金币" value="10000" label="100佣金币=1元,点击去提现" @click="JumpPutforwards" />
       </van-cell-group>

    </section>
    <section>
      <van-cell-group>
          <van-cell title="待确认收货" value="10000" label="确认收货后进入审核" @click="JumpGoods"/>
          <van-cell title="审核中" value="10000" label="15天若无售后发生则发放奖励" @click="JumpExamine"/>
          <!-- <van-cell title="已结算的佣金币" value="10000" label="已奖励的订单" @click="JumpSettlement" /> -->
          <van-cell title="已提现" value="10000" label="点击可查看提现记录" @click="JumpPutforward"/>
      </van-cell-group>
    </section>
    <section style="height:5px;"></section>
    <section>
      <van-cell-group>
        <van-cell icon="e60b" title="我的粉丝" is-link style="color:red;" @click="JumpFans">
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell icon="e609" title="直属超级会员收益" is-link style="color:red;" @click="JumpVIPProfit"/>
      </van-cell-group>
    </section>
    <section style="height:5px;"></section>
     <section>
      <van-cell-group>
        <van-cell icon="e600" title="查询佣金币明细" is-link style="color:red;" @click="JumpCommissions"/>
      </van-cell-group>
    </section>
    <section style="height:5px;"></section>
    <section>
      <van-cell-group>
        <van-cell icon="e623" title="专属指导老师" is-link style="color:red;" @click="JumpCommissions"/>
      </van-cell-group>
    </section>
    <!-- 底部标签 -->
    <div>
      <van-row>
        <van-goods-action>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpIndex">
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
              <div style="text-align:center;color:red;">
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
            <van-goods-action-mini-btn style="width:25%;" @click="JumpUser">
                <div style="text-align:center;">
                  <van-icon name="e6a4"/>
                  <div style="margin:1px;">我的</div>
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
      // nitice: "您已成功邀请2人，还差3人可申请",
      // notice_icon: notice,
      // checked: false
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

    JumpPutforwards() {
      this.$router.push({
        path: "/ping",
        name: "putforwards"
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
    JumpVIPProfit() {
      this.$router.push({
        path: "/ping",
        name: "commissions",
        params: {
          data: 2
        }
      });
    },
    JumpCommissions() {
      this.$router.push({
        path: "/ping",
        name: "commissions",
        params: {
          data: 1
        }
      });
    },
    JumpPutforward() {
      this.$router.push({
        path: "/ping",
        name: "viprecord",
        params: {
          data: 2
        }
      });
    },

    JumpFans() {
      this.$router.push({
        path: "/ping",
        name: "fans"
      });
    }
  }
};
</script>
<style>
@import "../../common/css/user.css";
@import "../../common/css/fontface.css";
body {
  background: #f1f1f1;
}
.good_name {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.3rem;
}
</style>
