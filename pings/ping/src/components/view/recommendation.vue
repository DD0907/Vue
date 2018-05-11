<template>
  <section>
       <van-tabs >
            <van-tab>
                <div slot="title" class="back_img">
                    <span>全部</span>
                </div>
                <section>
                    <section style="height:10px;background:#f1f1f1;"></section>
                    <section style="background:#ffffff;">
                        <van-row>
                            <van-col span="6">
                                <div>
                                    <img :src="image"/>
                                </div>
                            </van-col>
                            <van-col span="12" style="padding:5px;">
                                <div>
                                    <div>小米 <van-tag plain type="success">VIP拼团客</van-tag></div>
                                    <div>13888888888</div>
                                    <div>2018-05-09 14:52:11</div>
                                </div>
                            </van-col>
                            <van-col span="6" style="padding:5px;">
                               <div>推荐人数</div>
                               <div>3</div>
                            </van-col>
                        </van-row>
                    </section>
                </section>
            </van-tab>
            <van-tab>
                <div slot="title" class="back_img">
                    <span>金粉</span>
                </div>
            </van-tab>
            <van-tab>
                <div slot="title" class="back_img">
                    <span>银粉</span>
                </div>
            </van-tab>
       </van-tabs>
  </section>
</template>
<script>
import user from "../../assets/icon/icon_user.png";

export default {
  data() {
    return {
        image:user
    };
  },
  mounted() {
  }
};
</script>

<style>
.back_img {
  background-image: url("https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png");
  width: 100%;
  height: 100%;
  margin: auto;
}
</style>

