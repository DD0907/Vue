<template>
  <div>
       <div style="background:#ffffff;text-align:center;">
             <van-cell>
                <template slot="title">
                <div style="font-size:0.3rem;">当前积分</div>
                <div style="color:red;font-size:0.5rem;">6888
                </div>
                </template>
            </van-cell>
        </div>
         <!-- <section v-for="(r,key) in row" :key="key">
            <van-cell-swipe :right-width="70">
              <van-cell-group>
                <van-cell style="3.0rem;">
                  <div slot="title">
                    <van-card :title="r.title" :desc="r.time" :thumb="r.imageURL" :price="r.price" :currency="r.currency">
                      <div slot="tags" style="text-align:left;margin-top:5px;">
                          <span style="font-size:10px;">{{r.desc}}</span>
                      </div>
                    </van-card>
                  </div>
                </van-cell>
              </van-cell-group>
              <div slot="right" style="text-align:center;"><img :src="imageURLs" style="height:3.0rem;"/></div>
            </van-cell-swipe>
         </section> -->
        <section style="height:0.1rem;"></section>
        <section v-for="(r,key) in row" :key="key">
           <van-card :title="r.title" :desc="r.time" :thumb="r.imageURL" :price="r.price" :currency="r.currency">
               <div slot="tags" style="text-align:left;margin-top:5px;">
                    <span style="font-size:10px;">{{r.desc}}</span>
                </div>
           </van-card>
           <section style="height:0.2rem;"></section>
        </section>
  </div>
</template>
<script>
import cancel from "../../assets/icon/icon_errors.png";
import success from "../../assets/icon/icon_oks.png";
export default {
  data() {
    return {
      imageURLs: cancel,
      row: [
        {
          imageURL: cancel,
          title: "取消关注",
          time: "处理时间：2018-05-10 9:20:32",
          currency: "-",
          price: "88",
          desc: "你的朋友【XXX】取消关注了，扣除您88积分"
        },
        {
          imageURL: cancel,
          title: "取消关注",
          time: "处理时间：2018-05-09 19:20:32",
          currency: "-",
          price: "88",
          desc: "你的朋友【XXX】取消关注了，扣除您88积分"
        },
        {
          imageURL: cancel,
          title: "取消关注",
          time: "处理时间：2018-05-09 19:20:32",
          currency: "-",
          price: "88",
          desc: "你的朋友【XXX】取消关注了，扣除您88积分"
        },
        {
          imageURL: success,
          title: "成功推荐",
          time: "处理时间：2018-05-08 10:20:32",
          currency: "+",
          price: "188",
          desc: "你的朋友【XXX】关注了，奖励您188积分"
        },
        {
          imageURL: success,
          title: "成功推荐",
          time: "处理时间：2018-05-07 12:10:32",
          currency: "+",
          price: "188",
          desc: "你的朋友【XXX】关注了，奖励您188积分"
        },
        {
          imageURL: cancel,
          title: "取消关注",
          time: "处理时间：2018-05-09 19:20:32",
          currency: "-",
          price: "88",
          desc: "你的朋友【XXX】取消关注了，扣除您88积分"
        },
        {
          imageURL: success,
          title: "成功推荐",
          time: "处理时间：2018-05-08 10:20:32",
          currency: "+",
          price: "188",
          desc: "你的朋友【XXX】关注了，奖励您188积分"
        },
        {
          imageURL: success,
          title: "成功推荐",
          time: "处理时间：2018-05-07 12:10:32",
          currency: "+",
          price: "188",
          desc: "你的朋友【XXX】关注了，奖励您188积分"
        },
        {
          imageURL: cancel,
          title: "取消关注",
          time: "处理时间：2018-05-09 19:20:32",
          currency: "-",
          price: "88",
          desc: "你的朋友【XXX】取消关注了，扣除您88积分"
        },
        {
          imageURL: success,
          title: "成功推荐",
          time: "处理时间：2018-05-08 10:20:32",
          currency: "+",
          price: "188",
          desc: "你的朋友【XXX】关注了，奖励您188积分"
        },
        {
          imageURL: success,
          title: "成功推荐",
          time: "处理时间：2018-05-07 12:10:32",
          currency: "+",
          price: "188",
          desc: "你的朋友【XXX】关注了，奖励您188积分"
        }
      ]
    };
  },
  methods: {
    //   onClickLeft(){
    //     this.$router.push({
    //     path: "/ping",
    //     name: "user"
    //   });
    //   }
  }
};
</script>

<style lang="less">
body {
  background: #f1f1f1;
}
</style>

