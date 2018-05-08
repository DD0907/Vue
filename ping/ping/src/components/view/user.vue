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
          <div style="text-align:center;">
                <van-row>
                    <van-col span="6" style="border:1px solid black;">
                        明细
                    </van-col>
                    <van-col span="6" style="border:1px solid black;">
                        绑定云联账户
                    </van-col>
                    <van-col span="6" style="border:1px solid black;">
                        提取白积分
                    </van-col>
                    <van-col span="6" style="border:1px solid black;">
                        兑换商品花费
                    </van-col>
                </van-row>
            </div>
      </section>
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
    }
  }
};
</script>
<style>
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

