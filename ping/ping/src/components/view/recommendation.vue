<template>
  <section>
       <van-tabs>
            <van-tab>
                <div slot="title">
                    <span>全部</span>
                </div>
                <section>
                    <section style="height:10px;background:#f1f1f1;"></section>
                    <section style="background:#ffffff;border:0.1px solid #999;">
                        <van-row>
                            <van-col span="6">
                                <div>
                                    <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:2.0rem;" />
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
                <div slot="title">
                    <span>金粉</span>
                </div>
            </van-tab>
            <van-tab>
                <div slot="title">
                    <span>银粉</span>
                </div>
            </van-tab>
       </van-tabs>
  </section>
</template>
<script>
export default {

}
</script>

<style>
</style>

