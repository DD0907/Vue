<template>
    <section>
        <section>
            <van-nav-bar left-text="云联实惠购" style="background:#f1f1f1" fixed>
                <span slot="right" style="color:#999;font-size:14px;">搜索商品优惠券 <van-icon name="search"/></span>
            </van-nav-bar>
        </section>
        <section style="margin-top:46px;text-align:center;height:100px;">
            新手指南
        </section>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <section>
            <van-cell-group>
                <van-cell>
                    <template slot="title">
                        <div style="text-align:center">
                            <img src="../../assets/image/icon_pinpai.png" style="width:0.5rem;"/> 品牌精选
                        </div>
                    </template>
                </van-cell>
            </van-cell-group>
            <van-cell-group >
                <van-row>
                    <van-col span="12" style="text-align:center;">
                        <van-cell-group >
                        <div class="box_left_border">
                            <div>品牌馆</div>
                            <div>品牌上新促销</div>
                            <img src="../../assets/image/icon_pingpailogo.png" style="width:2.0rem;"/>
                        </div>
                        </van-cell-group>
                        <van-cell-group >
                        <div class="box_left_border">
                            <div>优惠淘抢购</div>
                            <div>最后1小时</div>
                            <img src="../../assets/image/icon_pingpailogo.png" style="width:2.0rem;"/>
                        </div>
                        </van-cell-group>
                    </van-col>
                    <van-col span="12" style="text-align:center;">
                        <van-cell-group >
                        <div class="box_right_border" >
                            <div>
                                <van-col span="12" style="margin-top:0.5rem;" >
                                    <div >优惠聚划算</div>
                                    <div>划算再实惠</div>
                                </van-col>
                                <van-col span="12" style="margin-top:0.5rem;">
                                    <img src="../../assets/image/icon_pingpailogo.png" style="width:1.0rem;"/>
                                </van-col>
                            </div>
                        </div>
                        </van-cell-group>
                        <van-cell-group >
                        <div class="box_right_border">
                            <div>
                                <van-col span="12" style="margin-top:0.5rem;">
                                    <div>短视频</div>
                                    <div>实物更真实</div>
                                </van-col>
                                <van-col span="12" style="margin-top:0.5rem;">
                                    <img src="../../assets/image/icon_pingpailogo.png" style="width:1.0rem;"/>
                                </van-col>
                            </div>
                        </div>
                        </van-cell-group>
                        <van-cell-group >
                        <div class="box_right_border">
                            <div >
                                <van-col span="12" style="margin-top:0.5rem;">
                                    <div>9.9包邮</div>
                                    <div>买到就是赚到</div>
                                </van-col>
                                <van-col span="12" style="margin-top:0.5rem;">
                                    <img src="../../assets/image/icon_pingpailogo.png" style="width:1.0rem;"/>
                                </van-col>
                            </div>
                        </div>
                        </van-cell-group>
                    </van-col>
                </van-row>
            </van-cell-group>
        </section>
        <section>
             <van-cell-group>
                <van-cell>
                    <template slot="title">
                        <div style="text-align:center">
                            <img src="../../assets/image/icon_jingxuan.png" style="width:0.5rem;"/> 今日精选
                        </div>
                    </template>
                </van-cell>
            </van-cell-group>
            <van-list>
            <div>
                <van-card :thumb="imageURL">
                    <div slot="title" style="font-size:14px;">
                        <span class="good_name"><van-tag type="danger">天猫</van-tag> 硅藻纯除甲醛+10包垃圾袋硅藻纯除甲醛+10包垃圾袋硅藻纯除甲醛+10包垃圾袋硅藻纯除甲醛+10包垃圾袋硅藻纯除甲醛+10包垃圾袋硅藻纯除甲醛+10包垃圾袋</span>
                    </div>
                    <div slot="desc" style="color:#999;font-size:12px;">
                        已出售：613
                    </div>
                    <div slot="tags">
                       <span style="color:red">￥ 5.1元 </span>
                       <span style="font-size:10px;color:#999;text-decoration:line-through;margin-left:5px;">25.1元</span> 
                       <van-tag type="danger" style="margin-left:5px;"> 券：20.0</van-tag>
                    </div>
                    <div slot="tags" style="color:#999;font-size:12px;">
                       约奖1000
                    </div>
                </van-card>
                <van-card :thumb="imageURL">
                    <div slot="title" style="font-size:14px;">
                        <span class="good_name"><van-tag type="danger">淘宝</van-tag> 硅藻纯除甲醛+10包垃圾袋硅藻纯除甲醛+10包垃圾袋硅藻纯除甲醛+10包垃圾袋硅藻纯除甲醛+10包垃圾袋硅藻纯除甲醛+10包垃圾袋硅藻纯除甲醛+10包垃圾袋</span>
                    </div>
                    <div slot="desc" style="color:#999;font-size:12px;">
                        已出售：613
                    </div>
                    <div slot="tags">
                       <span style="color:red">￥ 5.1元 </span>
                       <span style="font-size:10px;color:#999;text-decoration:line-through;margin-left:5px;">25.1元</span> 
                       <van-tag type="danger" style="margin-left:5px;"> 券：20.0</van-tag>
                    </div>
                    <div slot="tags" style="color:#999;font-size:12px;">
                       约奖1000
                    </div>
                </van-card>
            </div>
            </van-list>
        </section>
        </van-pull-refresh>
        <section style="height:50px;"></section>
         <!-- 底部标签 -->
    <div>
    <van-row>
        <van-goods-action>
            <van-goods-action-mini-btn style="width:25%;">
                <div style="text-align:center;color:#ff5840;">
                    <img src="../../assets/image/icon_home_current.png" style="width:0.6rem;"/>
                    <div style="margin-top:5px;"><span style="font-size:14px;">首页</span></div>
                </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpSearch" >
                <div style="text-align:center;">
                    <img src="../../assets/image/icon_search.png" style="width:0.6rem;"/>
                    <div style="margin-top:5px;"><span style="font-size:14px;">超级搜</span></div>
                </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpLove">
                <div style="text-align:center;">
                    <img src="../../assets/image/icon_love.png" style="width:0.6rem;"/>
                    <div style="margin-top:5px;" ><span style="font-size:14px;">收藏</span></div>
                </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpUser">
                <div style="text-align:center;">
                    <img src="../../assets/image/icon_my.png" style="width:0.6rem;"/>
                   <div style="margin-top:5px;"><span style="font-size:14px;">我的</span></div>
                </div>
            </van-goods-action-mini-btn>
        </van-goods-action>
    </van-row>
    </div>
    </section>
</template>
<script>
import imageURL from "../../assets/image/icon_shop.png";
export default {
  data() {
    return {
      keyword: "",
      imageURL: imageURL,
      isLoading: false
    };
  },
  methods:{
      onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
    JumpSearch(){
        this.$router.push({
          path: "/taoshop",
          name: "search"
        });
    },
    JumpUser(){
        this.$router.push({
          path: "/taoshop",
          name: "user"
        });
    },
    JumpLove(){
        this.$router.push({
          path: "/taoshop",
          name: "love"
        });
    }
  }
};
</script>
<style>
@import "../../assets/css/index.css";
.good_name {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>


