<template>
  <div>
     <section>
        <van-tabs>
          <van-tab>
                <div slot="title">
                    <span>热门</span>
                </div>
                <div>
                <!-- <van-list> -->
                  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                      <!-- <div v-for="(r, key) in rowdata" :key="key"> -->
                      <div>
                        <!-- 用户信息 -->
                        <div style="margin-top:0.2rem;">
                          <van-row>
                            <van-col span="3">
                              <div class="imgs">
                                <img src="../../assets/icon/icon_users.png"/>
                              </div >  
                            </van-col>
                            <van-col span="21">
                              <div style="height:1.4rem;background:#ffffff;">
                                <span style="font-size:0.4rem;">{{username}}</span>
                                <van-tag type="danger">{{type}}</van-tag><br>
                                <span style="color:#999;">{{time}}</span>
                                </div>
                            </van-col>
                          </van-row>
                      </div>

                      <div style="background:#ffffff">
                      <!-- 评论 -->
                      <div style="background:#ffffff;margin-left:5px;margin-right:5px;">
                              <span style="font-size:0.2rem;">{{desc}}</span>
                      </div>
                       <!-- 显示图片 -->
                      <div style="background:#ffffff;margin-left:5px;margin-right:5px;">
                            <div>
                                <img src="../../assets/icon/icon_users.png" class="image" />
                                <img src="../../assets/icon/icon_users.png" class="image" />
                                <img src="../../assets/icon/icon_users.png" class="image" />
                            </div>
                            <div>
                              晒单特别奖励1000白积分
                            <div style="background:#f1f1f1;">
                            <div class="leftbox">
                              <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.0rem;" />
                            </div>
                            <div class="rightbox">
                              <div style="font-size:0.2rem;padding:2px;">
                                我购买了，商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                              </div>
                               <div>
                                  <van-tag plain type="success">29.9元</van-tag>
                                  <van-tag plain type="danger">云联全返</van-tag>
                                  <span>共支付1000元，共获得10000白积分</span>
                              </div>
                            </div>
                            <div style=" clear:both"></div>
                            </div>
                            </div>
                          <van-cell-group>
                                <van-row>
                                  <van-col span="10">                    
                                    <van-cell>
                                      <template slot="title">
                                        <span>{{zannumber}}人觉得很赞</span><br>
                                        <span>25人转发</span>
                                      </template>
                                    </van-cell>
                                  </van-col>
                                  <van-col span="14">
                                    <van-cell>
                                      <template slot="title">
                                        <div style="text-align:right">
                                        <span v-if="istrue==false"><img src="../../assets/icon/icon_zan.png" @click="getZan" style="width:1.0rem;height:1.0rem;margin:auto;cursor:pointer;"/></span>
                                        <span v-else><img src="../../assets/icon/icon_zans.png" @click="getZan" style="width:1.0rem;height:width:1.0rem;margin:auto;cursor:pointer;"/></span>
                                        <span>&nbsp;<img src="../../assets/icon/icon_shapes.png" @click="jumpShape" style="width:1.0rem;height:1.0rem;"/></span>
                                        </div>
                                      </template>
                                    </van-cell>
                                  </van-col>
                                </van-row>
                          </van-cell-group>
                        </div>
                      </div>
                      </div>

                      <div>
                        <!-- 用户信息 -->
                        <div style="margin-top:0.2rem;">
                          <van-row>
                            <van-col span="3">
                              <div class="imgs">
                                <img src="../../assets/icon/icon_users.png"/>
                              </div >  
                            </van-col>
                            <van-col span="21">
                              <div style="height:1.4rem;background:#ffffff;">
                                <span style="font-size:0.4rem;">{{username}}</span>
                                <van-tag type="danger">{{type}}</van-tag><br>
                                <span style="color:#999;">{{time}}</span>
                                </div>
                            </van-col>
                          </van-row>
                      </div>

                      <div style="background:#ffffff">
                      <!-- 评论 -->
                      <div style="background:#ffffff;margin-left:5px;margin-right:5px;">
                              <span style="font-size:0.2rem;">{{desc}}</span>
                      </div>
                       <!-- 显示图片 -->
                      <div style="background:#ffffff;margin-left:5px;margin-right:5px;">
                            <div>
                                <img src="../../assets/icon/icon_users.png" class="image" />
                                <img src="../../assets/icon/icon_users.png" class="image" />
                                <img src="../../assets/icon/icon_users.png" class="image" />
                            </div>
                            <div>
                              晒单特别奖励1000白积分
                            <div style="background:#f1f1f1;">
                            <div class="leftbox">
                              <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.0rem;" />
                            </div>
                            <div class="rightbox">
                              <div style="font-size:0.2rem;padding:2px;">
                                我购买了，商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                              </div>
                               <div>
                                  <van-tag plain type="success">29.9元</van-tag>
                                  <van-tag plain type="danger">云联全返</van-tag>
                                  <span>共支付1000元，共获得10000白积分</span>
                              </div>
                            </div>
                            <div style=" clear:both"></div>
                            </div>
                            </div>
                          <van-cell-group>
                                <van-row>
                                  <van-col span="10">                    
                                    <van-cell>
                                      <template slot="title">
                                        <span>{{zannumber}}人觉得很赞</span><br>
                                        <span>25人转发</span>
                                      </template>
                                    </van-cell>
                                  </van-col>
                                  <van-col span="14">
                                    <van-cell>
                                      <template slot="title">
                                        <div style="text-align:right">
                                        <span v-if="istrue==false"><img src="../../assets/icon/icon_zan.png" @click="getZan" style="width:1.0rem;height:1.0rem;margin:auto;cursor:pointer;"/></span>
                                        <span v-else><img src="../../assets/icon/icon_zans.png" @click="getZan" style="width:1.0rem;height:width:1.0rem;margin:auto;cursor:pointer;"/></span>
                                        <span>&nbsp;<img src="../../assets/icon/icon_shapes.png" @click="jumpShape" style="width:1.0rem;height:1.0rem;"/></span>
                                        </div>
                                      </template>
                                    </van-cell>
                                  </van-col>
                                </van-row>
                          </van-cell-group>
                        </div>
                      </div>
                      </div>
                  </van-pull-refresh>
                <!-- </van-list> -->
              </div>
          </van-tab>
           <van-tab>
                <div slot="title">
                    <span>最新</span>
                </div>

                <div>
                <!-- <van-list> -->
                  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                      <!-- <div v-for="(r, key) in rowdata" :key="key"> -->
                      <div>
                        <!-- 用户信息 -->
                        <div style="margin-top:0.2rem;">
                          <van-row>
                            <van-col span="3">
                              <div class="imgs">
                                <img src="../../assets/icon/icon_users.png"/>
                              </div >  
                            </van-col>
                            <van-col span="21">
                              <div style="height:1.4rem;background:#ffffff;">
                                <span style="font-size:0.4rem;">{{username}}</span>
                                <van-tag type="danger">{{type}}</van-tag><br>
                                <span style="color:#999;">{{time}}</span>
                                </div>
                            </van-col>
                          </van-row>
                      </div>

                      <div style="background:#ffffff">
                      <!-- 评论 -->
                      <div style="background:#ffffff;margin-left:5px;margin-right:5px;">
                              <span style="font-size:0.2rem;">{{desc}}</span>
                      </div>
                       <!-- 显示图片 -->
                      <div style="background:#ffffff;margin-left:5px;margin-right:5px;">
                            <div>
                                <img src="../../assets/icon/icon_users.png" class="image" />
                                <img src="../../assets/icon/icon_users.png" class="image" />
                                <img src="../../assets/icon/icon_users.png" class="image" />
                            </div>
                            <div>
                              晒单特别奖励1000白积分
                            <div style="background:#f1f1f1;">
                            <div class="leftbox">
                              <img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" style="width:1.0rem;" />
                            </div>
                            <div class="rightbox">
                              <div style="font-size:0.2rem;padding:2px;">
                                我购买了，商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                              </div>
                               <div>
                                  <van-tag plain type="success">29.9元</van-tag>
                                  <van-tag plain type="danger">云联全返</van-tag>
                                  <span>共支付1000元，共获得10000白积分</span>
                              </div>
                            </div>
                            <div style=" clear:both"></div>
                            </div>
                            </div>
                          <van-cell-group>
                                <van-row>
                                  <van-col span="10">                    
                                    <van-cell>
                                      <template slot="title">
                                        <span>{{zannumber}}人觉得很赞</span><br>
                                        <span>25人转发</span>
                                      </template>
                                    </van-cell>
                                  </van-col>
                                  <van-col span="14">
                                    <van-cell>
                                      <template slot="title">
                                        <div style="text-align:right">
                                        <span v-if="istrue==false"><img src="../../assets/icon/icon_zan.png" @click="getZan" style="width:1.0rem;height:1.0rem;margin:auto;cursor:pointer;"/></span>
                                        <span v-else><img src="../../assets/icon/icon_zans.png" @click="getZan" style="width:1.0rem;height:width:1.0rem;margin:auto;cursor:pointer;"/></span>
                                        <span>&nbsp;<img src="../../assets/icon/icon_shapes.png" @click="jumpShape" style="width:1.0rem;height:1.0rem;"/></span>
                                        </div>
                                      </template>
                                    </van-cell>
                                  </van-col>
                                </van-row>
                          </van-cell-group>
                        </div>
                      </div>
                      </div>
                  </van-pull-refresh>
                <!-- </van-list> -->
              </div>
          </van-tab>
           <van-tab>
                <div slot="title">
                    <span>我点赞的</span>
                </div>
            </van-tab>
           <van-tab>
                <div slot="title">
                    <span>我发布的</span>
                </div>
          </van-tab>
        </van-tabs>
     </section>
     <section>
           <div class="bottom_nav5" @click="jumpadd"><img src="../../assets/icon/icon_add.png" style="width:30px;"/></div> 
     </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "小米",
      time: "",
      times: "2018-05-07 14:37:10",
      type: "VIP拼团客",
      desc:
        "不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错",
      imageURL:
        "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
      isLoading: false,
      istrue: false,
      rowdata: {},
      zannumber:401,
    };
  },
  mounted() {
    //定时器每秒调用一次
    setInterval(() => {
      this.gettime();
    }, 1000);
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    gettime() {
      var times = this.times;
      this.time = getDateDiff(times);
    },
    getZan() {
      if (this.istrue == true) {
        this.zannumber=this.zannumber-1;
        this.istrue = false;
      } else {
        this.zannumber=this.zannumber+1;
        this.istrue = true;
      }
    },
    jumpadd(){
      this.$toast("正在跳转增加")
    },
    jumpShape(){
      this.$toast("分享即可赚取积分");
    }
  }
};

function getDateDiff(dateStr) {
  var publishTime = getDateTimeStamp(dateStr) / 1000,
    d_seconds,
    d_minutes,
    d_hours,
    d_days,
    timeNow = parseInt(new Date().getTime() / 1000),
    d,
    date = new Date(publishTime * 1000),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  //小于10的在前面补0
  if (M < 10) {
    M = "0" + M;
  }
  if (D < 10) {
    D = "0" + D;
  }
  if (H < 10) {
    H = "0" + H;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  var times = H + ":" + m;
  var datetime = Y + "-" + M + "-" + D + " ";
  d = timeNow - publishTime;
  d_days = parseInt(d / 86400);
  d_hours = parseInt(d / 3600);
  d_minutes = parseInt(d / 60);
  d_seconds = parseInt(d);

  if (d_days > 0 && d_days < 2) {
    return "昨天" + times;
  } else if (d_days <= 0 && d_hours > 0) {
    return d_hours + "小时前" + times;
  } else if (d_hours <= 0 && d_minutes > 0) {
    return d_minutes + "分钟前" + times;
  } else if (d_seconds < 60) {
    if (d_seconds <= 0) {
      return "刚刚";
    } else {
      return d_seconds + "秒前";
    }
  } else if (d_days >= 2 && d_days < 30) {
    return datetime + times;
  } else if (d_days >= 30) {
    return datetime + times;
  }
}
function getDateTimeStamp(dateStr) {
  return Date.parse(dateStr.replace(/-/gi, "/"));
}
</script>
<style >
body {
  background: #f1f1f1;
}
.imgs {
  background: #ffffff;
  height: 1.4rem;
  text-align: center;
}
.imgs img {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 35px;
  height: 35px;
  margin: 0px auto;
}
.image {
  width: 2.5rem;
  height: 2.5rem;
  margin: auto;
}
.leftbox{
  text-align: center;
  float: left;
  border:0.1rem solid #f1f1f1;
}
.bottom_nav5 {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  position: fixed;
  bottom: 120px;
  right: 20px;
  background-image: #faf609;
  text-align: center;
}
</style>

