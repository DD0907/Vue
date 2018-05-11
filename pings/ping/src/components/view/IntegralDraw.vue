<template>
  <div>
       <section style="text-align:center;">
            <van-cell>
                <template slot="title">
                <div style="color:red;font-size:0.5rem;">6888</div>
                <div style="font-size:0.3rem;color:#999">可提取积分余额</div>
                </template>
            </van-cell>
       </section>
       <section style="text-align:center;color:#999;margin:5px;">积分到账方式</section>
        <section>
            <van-field  v-model="id" label="账号" placeholder="请输入账号" required type='number'/>
            <van-field  v-model="phone" label="手机号" placeholder="请输入手机号" required type='tel'/>
            <van-field  v-model="integral" label="本次提取" placeholder="请输入要提取的积分" required type='number'/>
            <van-button size="large" style="background:#ffd000;">立即提取</van-button>
        </section>
            <section style="text-align:center;color:#999;margin:5px;"></section>
        <section>
            <section><van-cell title="提取记录" is-link value="查看更多" /></section>
            <section style="height:0.2rem;"></section>
            <section v-for="(r,key) in row" :key="key">
                <van-card :title="r.title" :thumb="r.imageURL" :price="r.price" :currency="r.currency">
                    <div slot="desc">
                        <span style="font-size:10px;">{{r.time}}</span><br>
                        <span style="font-size:10px;">{{r.times}}</span>
                    </div>
                    <div slot="tags" style="text-align:left;margin-top:5px;">
                            <span style="font-size:10px;">{{r.desc}}</span>
                    </div>
                </van-card>
            <section style="height:0.2rem;"></section>
        </section>
        </section>
  </div>
</template>
<script>
import cancel from "../../assets/icon/icon_errors.png";
import success from "../../assets/icon/icon_oks.png";
export default {
  data() {
    return {
      id: "",
      phone: "",
      integral: "",
      row: [
        {
          imageURL: cancel,
          title: "1000",
          time: "申请时间：2018-05-09 19:20:32",
          times:"处理时间：2018-05-10 09:30:23",
          currency: "",
          price: "已驳回",
          desc: "原因"
        },
        {
          imageURL: success,
          title: "2000",
          time: "处理时间：2018-05-08 10:20:32",
          times:"处理时间：2018-05-10 09:30:23",
          currency: "",
          price: "成功",
          desc: "原因"
        },
        {
          imageURL: success,
          title: "1000",
          time: "处理时间：2018-05-07 12:10:32",
          times:"处理时间：2018-05-10 09:30:23",
          currency: "",
          price: "成功",
          desc: "原因"
        },
        {
          imageURL: cancel,
          title: "2000",
          time: "处理时间：2018-05-09 19:20:32",
          times:"处理时间：2018-05-10 09:30:23",
          currency: "",
          price: "已驳回",
          desc: "原因"
        },
        {
          imageURL: success,
          title: "1000",
          time: "",
          times:"处理时间：2018-05-10 09:30:23",
          currency: "",
          price: "成功",
          desc: "原因"
        }
      ]
    };
  }
};
</script>

<style>
body {
  background: #f1f1f1;
}
</style>
