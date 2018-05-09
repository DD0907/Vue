<template>
  <div>
      <section style="text-align:center;background:#ffffff;">
        <van-row>
            <van-col span="8">
                <h2>总人数</h2>
                <van-button disabled style="width:2.0rem">100</van-button>
            </van-col>
            <van-col span="8">
                <h2>VIP拼团客</h2>
                <van-button disabled style="width:2.0rem">80</van-button>
            </van-col>
            <van-col span="8">
                <h2>会员</h2>
                <van-button disabled style="width:2.0rem">20</van-button>
            </van-col>
        </van-row>
        <div style="border-bottom:0.1px solid #999;">&nbsp;</div>
      </section>
      <section style="background:#ffffff;padding:10px;">
          <div>团队消费奖励：</div><br>
          <div>预估未估算奖励：</div><br>
          <div>累计已结算奖励：</div><br>
      </section>
  </div>
</template>
<style>
body{
    background: #f1f1f1;
}
</style>