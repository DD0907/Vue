<template>
  <section>
        <h2 style="text-align:center;">我的收藏</h2>
    <!-- 底部标签 -->
    <div>
        <van-row>
            <van-goods-action>
                <van-goods-action-mini-btn style="width:25%;" @click="JumpIndex">
                    <div style="text-align:center;"><img src="../../assets/icon/icon_home.png" style="width:25%;">
                    <div style="color:">首页</div>
                    </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn  style="width:25%;" @click="JumpShare">
                    <div style="text-align:center;"><img src="../../assets/icon/icon_my_share.png" style="width:25%;">
                    <div>晒单分享</div>
                    </div>
                </van-goods-action-mini-btn>
                <van-goods-action-mini-btn style="width:25%;">
                    <div style="text-align:center;"><img src="../../assets/icon/icon_love_current.png" style="width:25%;">
                    <div>收藏</div>
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
export default {
  data(){
      return{

      }
  },
   methods: {
        JumpShare(){
        this.$router.push({
        path: "/ping",
        name: "share",
      });
    },
    JumpIndex(){
      this.$router.push({
        path:'/ping',
        name:'indexs'
        })
    },
    JumpUser(){
      this.$router.push({
        path: "/ping",
        name: "user",
      });
    },
    }
}
</script>
