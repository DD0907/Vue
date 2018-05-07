<template>
  <div>
     <section>
        <van-tabs>
          <van-tab>
                <div slot="title">
                    <span>热门</span>
                </div>
                <div>
                  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                    <!-- 用户信息 -->
                    <div>
                    <van-row>
                      <van-col span="6">
                        <div class="imgs">
                          <img src="../../assets/icon/icon_users.png"/>
                        </div >  
                      </van-col>
                      <van-col span="18">
                        <div>
                          <van-cell-group style="height:2.5rem;">
                            <van-cell>
                            <template slot="title">
                              <span>{{username}}</span>
                              <van-tag type="danger">{{type}}</van-tag><br>
                              <span>{{time}}</span>
                            </template>
                            </van-cell>
                          </van-cell-group>
                        </div>
                      </van-col>
                    </van-row>
                    </div>
                    <!-- 评论 -->
                  <div>
                    <van-cell-group>
                      <van-cell>
                        <template slot="title">
                          <span>{{desc}}</span>
                        </template>
                      </van-cell>
                    </van-cell-group>
                  </div>
                  <!-- 显示图片 -->
                  <div>
                    <van-cell-group>
                      <van-cell>
                          <img src="../../assets/icon/icon_users.png" class="image" />
                          <img src="../../assets/icon/icon_users.png" class="image" />
                          <img src="../../assets/icon/icon_users.png" class="image" />
                          <img src="../../assets/icon/icon_users.png" class="image" />
                          <img src="../../assets/icon/icon_users.png" class="image" />
                      </van-cell>
                      <van-cell>
                        晒单特别奖励1000白积分
                          <van-card  :thumb="imageURL">
                            <div slot="title">
                              我购买了，商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题
                            </div>
                            <div slot="desc">
                              <van-tag plain type="success">29.9元</van-tag>
                              <van-tag plain type="danger">云联全返</van-tag>
                            </div>
                        </van-card>
                      </van-cell>
                    </van-cell-group>
                    <van-cell-group>
                        <van-row>
                          <van-col span="10">                    
                            <van-cell>
                              <template slot="title">
                                <span>400人觉得很赞</span><br>
                                <span>25人转发</span>
                              </template>
                            </van-cell>
                          </van-col>
                          <van-col span="14">
                            <van-cell>
                              <template slot="title">
                                <van-button type="primary" size="small">我要点个赞</van-button>
                                <van-button type="primary" size="small">分享赚积分</van-button>
                              </template>
                            </van-cell>
                          </van-col>
                        </van-row>
                    </van-cell-group>
                  </div>
                  </van-pull-refresh>
              </div>
          </van-tab>
           <van-tab>
                <div slot="title">
                    <span>最新</span>
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
      isLoading: false
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
  height: 2.5rem;
  text-align: center;
}
.imgs img {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0px auto;
}
.image {
  width: 2.5rem;
  height: 100%;
  margin: auto;
}
</style>

