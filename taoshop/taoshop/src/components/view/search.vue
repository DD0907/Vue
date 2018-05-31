<template>
    <section>
        <section>
            <van-nav-bar title="超级搜" left-arrow  @click-left="JumpIndex"/>
        </section>
        <section style="height:3.0rem;"></section>
        <section style="text-align:center;padding:10px;">
            <span>淘宝天猫几乎所有产品都有奖励</span>
            <br>
            <br>
            <van-cell-group>
                <van-row>
                <van-col span="16">
                    <van-field v-model="keyvalue" placeholder="搜索淘宝天猫名称">
                    </van-field>
                </van-col>
                <van-col span="8">
                    <van-button @click="onSearch" style="background:#ff5840" size="large">拿积分</van-button>
                </van-col>
                </van-row>
            </van-cell-group>
        </section>
    <div>
        <van-row>
            <van-goods-action>
                <van-goods-action-mini-btn style="width:25%;" @click="JumpIndex">
                    <div style="text-align:center;">
                        <img src="../../assets/image/icon_home.png" style="width:0.6rem;"/>
                        <div style="margin-top:5px;"><span style="font-size:14px;">首页</span></div>
                    </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn style="width:25%;">
                    <div style="text-align:center;color:#ff5840;">
                        <img src="../../assets/image/icon_search_current.png" style="width:0.6rem;"/>
                        <div style="margin-top:5px;"><span style="font-size:14px;">超级搜</span></div>
                    </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn style="width:25%;" @click="JumpLove">
                    <div style="text-align:center;">
                        <img src="../../assets/image/icon_love.png" style="width:0.6rem;"/>
                        <div style="margin-top:5px;" ><span style="font-size:14px;">收藏</span></div>
                    </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn style="width:25%;" @click="JumpUser">
                    <div style="text-align:center;">
                        <img src="../../assets/image/icon_my.png" style="width:0.6rem;"/>
                    <div style="margin-top:5px;"><span style="font-size:14px;">我的</span></div>
                    </div>
                </van-goods-action-mini-btn>
            </van-goods-action>
        </van-row>
    </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
        keyvalue:''
    };
  },
  methods: {
    JumpIndex() {
      this.$router.push({
        path: "/taoshop",
        name: "index"
      });
    },
    onSearch(){
        this.$toast(this.keyvalue)
    },
    JumpUser(){
         this.$router.push({
          path: "/taoshop",
          name: "user"
        });
    }
  }
};
</script>

<style>
body{
    background: #f1f1f1;
}
</style>
