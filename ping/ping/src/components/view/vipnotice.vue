<template>
  <section>
      <section>
        <van-notice-bar :text="nitice" :left-icon="notice_icon"/>
      </section>
      <section style="text-align:center;border:1px solid #999;">
          <h2>详细内容</h2>
      </section>
      <section class="align-center">
        <div style="margin-left:30%;">
            <div style="float:left;"><van-checkbox v-model="checked" shape="square"/></div>
            <span style="margin-left:5px;">同意《超级会员用户协议》</span>
        </div>
        <h7>&nbsp;</h7>
        <van-button type="primary" style="width:100%;margin:2px;">申请成为超级会员</van-button>
      </section>
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
    }
  }
};
</script>
<style>
body {
  background: #f1f1f1;
}
.align-center{
width: 100%;
position: fixed;
bottom: 0;
}
</style>
