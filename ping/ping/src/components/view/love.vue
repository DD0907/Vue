<template>
  <section>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list>
            <section>
                <van-card :title="title" :desc="salenumber" :thumb="imageURL">
                    <div slot="tags" style="text-align:left;margin-top:5px;">
                            <span style="font-size:18px;color:red">￥70</span>
                            <span style="font-size:12px;text-decoration:line-through;color:#999">￥100</span>
                            <van-tag type="danger">优惠券30元</van-tag>
                        </div>
                        <div slot="tags" style="text-align:left;">
                            <span style="font-size:10px;"><van-tag plain type="danger">约赚5佣金币</van-tag></span>
                        </div>
                        <div slot="footer">
                            <section style="text-align:center;">
                            <img src="../../assets/icon/icon_del.png"/>
                            <div style="font-size:10px;color:#999">删除</div>
                            </section>
                        </div>
                </van-card>
                <section style="height:2px;"></section>
            </section>
            <section>
                <van-card :title="title" :desc="salenumber" :thumb="imageURL">
                    <div slot="tags" style="text-align:left;margin-top:5px;">
                            <span style="font-size:18px;color:red">￥70</span>
                            <span style="font-size:12px;text-decoration:line-through;color:#999">￥100</span>
                            <van-tag type="danger">优惠券30元</van-tag>
                        </div>
                        <div slot="tags" style="text-align:left;">
                            <span style="font-size:10px;"><van-tag plain type="danger">约赚5佣金币</van-tag></span>
                        </div>
                        <div slot="footer">
                            <section style="text-align:center;">
                            <img src="../../assets/icon/icon_del.png"/>
                            <div style="font-size:10px;color:#999">删除</div>
                            </section>
                        </div>
                </van-card>
                <section style="height:2px;"></section>
            </section>
        </van-list>
      </van-pull-refresh>
    <!-- 底部标签 -->
    <div>
        <van-row>
            <van-goods-action>
                <van-goods-action-mini-btn style="width:25%;" @click="JumpIndex">
                    <div style="text-align:center;"><img src="../../assets/icon/icon_home.png" style="width:25%;">
                    <div style="color:">首页</div>
                    </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn style="width:25%;">
                    <div style="text-align:center;"><img src="../../assets/icon/icon_love_current.png" style="width:25%;">
                    <div>收藏</div>
                    </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn style="width:25%;" @click="JumpVip">
                <div style="text-align:center;"><img src="../../assets/icon/icon_vip.png" style="width:25%;">
                <div>超级会员</div>
                </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn  style="width:25%;" @click="JumpShare">
                    <div style="text-align:center;"><img src="../../assets/icon/icon_my_share.png" style="width:25%;">
                    <div>晒单分享</div>
                    </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn style="width:25%;" @click="JumpUser">
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
import cancel from "../../assets/icon/icon_user.png";
export default {
  data() {
    return {
      imageURL: cancel,
      title: "花花公子",
      salenumber: "已拼56件",
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    JumpShare() {
      this.$router.push({
        path: "/ping",
        name: "share"
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
</style>
