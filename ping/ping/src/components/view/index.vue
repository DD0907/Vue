<template>
  <div>
    <!--轮播图片-->
    <div>
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 搜索框 -->
    <div>
        <van-search v-model.trim="value" show-action placeholder="搜索拼多多商品得白积分奖励" style="padding:2px;">
            <div slot="action"><van-button type="primary" size="small" @click="JumpSearch">搜索</van-button></div>
        </van-search>
    </div>
    <!-- 快捷按钮 -->
    <div style="margin:0px">
    <van-row>
        <van-col span="8">
            <img @click="JumpSearch" src="//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg" class="goods-imgurl">
        </van-col>
        <van-col span="8">
            <img src="//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg" class="goods-imgurl">
        </van-col>
        <van-col span="8">
            <img src="//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg" class="goods-imgurl">
        </van-col>
    </van-row>
    </div>
    <div style="height:1px;background:#f1f1f1"></div>
    <!-- 滑动菜单 -->
    <div>
        <van-tabs v-model="active" swipeable>
            <van-tab>
                <div slot="title" @click="selecteddata">
                    精选
                </div>
                <selecteddata v-if="istrue=true"></selecteddata>
            </van-tab>
            <van-tab>
                <div slot="title" @click="fruitdata">
                    水果
                </div>  
                <fruitdata v-if="istrue=true"></fruitdata>
            </van-tab>
            <van-tab>
              <div slot="title">
                    美食
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    内衣
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    母婴
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    百货
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    服饰
                </div>
            </van-tab><van-tab>
              <div slot="title">
                    鞋包
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    电器
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    男装
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    家装
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    美妆
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    家纺
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    手机
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    运动
                </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                    汽车
                </div>
            </van-tab>
        </van-tabs>
    </div>
    <div @click="back_top" class="bottom_nav5"><img src="../../assets/icon/icon_top.png" style="width:50px;" @click="back_top"/></div> 
    <div style="background:#ffffff;height:50px;"></div>
    <!-- 底部标签 -->
    <div>
    <van-row>
        <van-goods-action>
            <van-goods-action-mini-btn icon="wap-home" style="width:25%;background-color: #f84600;">
                首页
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn icon="share" style="width:25%;">
                晒单分享
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn icon="like" style="width:25%;">
                收藏
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn icon="contact" style="width:25%;">
                我的
            </van-goods-action-mini-btn>
        </van-goods-action>
    </van-row>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import selecteddata from '@/components/view/selecteddata'
import fruitdata from '@/components/view/fruitdata'
export default {
  components: {
    // 引用组件
    selecteddata,
    fruitdata
  },
  data() {
    return {
      images: [
        "//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
        "//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
        "//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
        "//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg"
      ],
      active: 0,
      value:"",
      istrue: false
    };
  },
  methods: {
    selecteddata(){
      this.istrue=true;
      this.istrue=false;
    },
    fruitdata(){
      this.fruitdata=true;
    },
    back_top() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    JumpSearch() {
      if (this.value == "" || this.value == null) {
        this.$toast("你输入的值为空");
      } else {
        //   跳转加载中
        const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          message: "正在加载中"
        });
        let second = 1;
        const timer = setInterval(() => {
          second--;
          if (second == 0) {
            toast.message = "正在加载中";
            // 页面跳转
            this.$router.push({
              path: "/ping",
              name: "search",
              params: {
                data: this.value
              }
            });
          } else {
            clearInterval(timer);
            Toast.clear();
          }
        }, 500);
      }
    },
    onRefresh() {
      // 下拉刷新
      setTimeout(() => {
        this.$toast("刷新成功");
        this.getdata();
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>
<style lang="less">
body {
  background: #f1f1f1;
}
.goods {
  &-swipe {
    img {
      width: 100%;
      height: 100%;
      margin: auto;
      display: block;
      background-size: contain;
    }
  }
}
.goods-imgurl {
  width: 100%;
  height: 100%;
  margin: auto;
}
.bottom_nav5 {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  position: fixed;
  bottom: 50px;
  right: 20px;
  background-image: #faf609;
  text-align: center;
}
.img_border {
  border: 0.05rem solid #f1f1f1;
}
.intergral_style {
  color: #fa2509;
  font-size: 0.3rem;
}
.price_style {
  color: red;
  font-size: 0.5rem;
}
.goods-express {
  color: #999;
  font-size: 0.3rem;
}
.salenumber_style {
  color: #999;
  font-size: 0.2rem;
}
.good_name {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.3rem;
}
</style>
