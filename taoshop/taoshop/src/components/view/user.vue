<template>
    <section>
    <div>
        <van-row>
            <van-goods-action>
                <van-goods-action-mini-btn style="width:25%;" @click="JumpIndex">
                    <div style="text-align:center;">
                        <img src="../../assets/image/icon_home.png" style="width:0.6rem;"/>
                        <div style="margin-top:5px;"><span style="font-size:14px;">首页</span></div>
                    </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn style="width:25%;" @click="JumpSearch">
                    <div style="text-align:center;">
                        <img src="../../assets/image/icon_search.png" style="width:0.6rem;"/>
                        <div style="margin-top:5px;"><span style="font-size:14px;">超级搜</span></div>
                    </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn style="width:25%;">
                    <div style="text-align:center;">
                        <img src="../../assets/image/icon_love.png" style="width:0.6rem;"/>
                        <div style="margin-top:5px;" ><span style="font-size:14px;">收藏</span></div>
                    </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn style="width:25%;">
                    <div style="text-align:center;color:#ff5840;">
                        <img src="../../assets/image/icon_my_current.png" style="width:0.6rem;"/>
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
    return {};
  },
  methods: {
    JumpSearch() {
      this.$router.push({
        path: "/taoshop",
        name: "search"
      });
    },
    JumpIndex() {
      this.$router.push({
        path: "/taoshop",
        name: "index"
      });
    }
  }
};
</script>

