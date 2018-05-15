<template>
  <section style="background:#ffffff;">
    <section style="background:#ffffff;">
      <van-card :title="nickname" :thumb="imageURL">
        <div slot="footer">
          <van-button>同步微信头像昵称</van-button>
        </div>
      </van-card>
    </section>
      <section style="height:5px;background:#f1f1f1;"></section>
    <section>
      <van-cell-group>
        <div> 
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>手机号</span>
                  </template>
                </van-cell>
              </van-col>
              <div @click="JumpBindingPhone">
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                    <span v-if="phone==''" @click="JumpBindingPhone">去绑定手机号</span>
                    <span v-else>{{phone}}</span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </div>
      </van-cell-group>
    </section>
    <section>
      <van-cell-group>
            <div> 
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>微信号</span>
                  </template>
                </van-cell>
              </van-col>
              <div @click="JumpBindingWeixin">
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                    <span v-if="weixinnumber==''" @click="JumpBindingWeixin">暂无微信号</span>
                    <span v-else>{{weixinnumber}}</span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </div>
      </van-cell-group>
    </section>
    <section>
      <van-cell-group>
            <div> 
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>微信加好友二维码</span>
                  </template>
                </van-cell>
              </van-col>
              <div @click="JumpBindingWeixin">
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                    <span v-if="weixinnfriendScan==true">已添加</span>
                    <span v-else>未添加></span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </div>
      </van-cell-group>
    </section>
    <section style="height:10px;background:#f1f1f1;"></section>
    <section>
      <van-cell-group>
            <div> 
            <van-row>
              <van-col span="12">
                <van-cell>
                  <template slot="title">
                    <span>微信收款二维码</span>
                  </template>
                </van-cell>
              </van-col>
              <div @click="JumpBindingWeixin">
              <van-col span="12">
                <div style="text-align:right;">
                 <van-cell>
                  <template slot="title">
                    <span v-if="weixinnmoneyScan==true">已添加</span>
                    <span v-else>未添加></span>
                  </template>
                </van-cell>
                </div>
              </van-col>
              </div>
            </van-row>
        </div>
      </van-cell-group>
    </section>
  </section>
</template>
<script>
import icon_nickname from "../../assets/icon/icon_nickname.png";
import fansVue from './fans.vue';

export default {
  data() {
    return {
      phone: "",
      nickname:'昵称',
      weixinnumber: '',
      weixinnfriendScan:false,
      weixinnmoneyScan:false,
      imageURL:icon_nickname
    };
  },
  methods: {
    JumpBindingPhone() {
      this.$toast("绑定手机号")
    },
    JumpBindingWeixin() {
      this.$toast("绑定微信号")
    }
  }
};
</script>

<style>

</style>