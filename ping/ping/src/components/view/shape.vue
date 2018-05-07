<template>
  <div>
     <section>
        <van-tabs>
          <van-tab>
                <div slot="title">
                    <span>热门</span>
                </div>
                <div>
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
  data(){
    return{
      username:"小米",
      time:"昨天09:09",
      type:"VIP拼团客",
      desc:"不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错不错",
      imageURL:"https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg"
    }
  }
}
</script>

<style >
body{
  background: #f1f1f1;
}
.imgs{
  background: #ffffff;
  height:2.5rem;
  text-align: center;
}
.imgs img{
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0px auto;
} 
.image{
  width: 2.5rem;
  height: 100%;
  margin: auto;
}
</style>

