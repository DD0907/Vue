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
            <img src="//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg" class="goods-imgurl">
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
        <van-tabs v-model="active">
            <van-tab>
                <div slot="title" @click="getdata">
                    精选
                </div>
          <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
            <div>
              <!-- 无数据的情况 -->
              <div v-if='rowlength==0'>
            <img src="../../assets/icon/icon_kong.png"/>
        </div>
         <!-- list列表 -->
        <div v-else>
        <van-list> 
          <van-row>
              <div v-for="(r, key) in articles" :key="key">
                <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                  <van-col span="12" class="img_border" >
                    <!-- <input id="goodsId" style="" v-model='r.goodsId'/> -->
                    <van-cell-group>
                      <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                    <div class="good_name" style="height:1.0rem;">{{r.goodsName}}</div>
                  <div>
                    <span>
                    <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                    </span>
                    <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                    <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                    </div>
                    <div style="height:0.8rem">
                    <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                    <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                    <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                    </div>
                    </van-cell-group>
                    </van-col>
                  </div>
                  <div v-else @click="JumpPageDetails(r.goodsId)">
                      <van-cell-group>
                        <van-col span="12" class="img_border" >
                      <van-cell-group>
                      <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                      <div class="good_name" style="height:1.0rem;">{{r.goodsName}}</div>
                      <div>
                      <span>
                      <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                      </span>
                      <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                      <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                      </div>
                      <div style="height:0.8rem">
                      <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                      <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                      <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                      </div>
                      </van-cell-group>                                    
                      </van-col>
                      </van-cell-group>
                      </div>
                      </div>  
                      </van-row>
                      <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                      </van-list>
                  </div>
              </div>
            </van-pull-refresh>
            </van-tab>
            <van-tab>
                <div slot="title" @click="getfruit">
                    水果
                </div>  
                <!-- 下拉刷新 -->
                    <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                                <van-row>
                                <div v-for="(r, key) in fruit" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.goodsId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh>  
            </van-tab>
            <van-tab>
              <div slot="title" @click="getfood">
                    美食
                </div>
                <!-- 下拉刷新 -->
                    <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                                <van-row>
                                <div v-for="(r, key) in food" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.goodsId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh>  
            </van-tab>
            <van-tab>
              <div slot="title" @click="getclothes">
                    服饰
                </div>
                <!-- 下拉刷新 -->
                    <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                                <van-row>
                                <div v-for="(r, key) in clothes" :key="key">
                                    <div v-if="(key+1)%2==1">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else>
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh>  
            </van-tab>
            <van-tab>
              <div slot="title" @click="getmotherbaby">
                    母婴
                </div>
                  <!-- 下拉刷新 -->
                    <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                                <van-row>
                                <div v-for="(r, key) in motherbabyrow" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.goodsId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh>  
            </van-tab>
            <van-tab>
              <div slot="title" @click="getsdeptstore">
                    百货
                </div>
                <!-- 下拉刷新 -->
                    <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                                <van-row>
                                <div v-for="(r, key) in deptstore" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.goodsId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh> 
            </van-tab>
            <van-tab>
              <div slot="title" @click="getbeauty">
                    美妆
                </div>
                <!-- 下拉刷新 -->
                    <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                                <van-row>
                                <div v-for="(r, key) in beautyrow" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.goodsId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh> 
            </van-tab>
           <van-tab>
              <div slot="title" @click="getshoebag">
                    鞋包
                </div>
                <!-- 下拉刷新 -->
                    <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                                <van-row>
                                <div v-for="(r, key) in shoebag" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.goodsId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh> 
            </van-tab>
            <van-tab>
              <div slot="title" @click="getelectric">
                    电器
                </div>
                  <!-- 下拉刷新 -->
                    <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                                <van-row>
                                <div v-for="(r, key) in electric" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.goodsId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh> 
            </van-tab>
            <van-tab>
              <div slot="title" @click="getmanclothing">
                    男装
                </div>
                <!-- 下拉刷新 -->
                    <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                                <van-row>
                                <div v-for="(r, key) in manclothing" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.goodsId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh> 
            </van-tab>
            <van-tab>
              <div slot="title" @click="gethometextiles">
                    家纺
                </div>
                  <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                                <van-row>
                                <div v-for="(r, key) in hometextiles" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.goodsId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh> 
            </van-tab>
            <van-tab>
              <div slot="title" @click="getphone">
                    手机
                </div>
                <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                              <van-row>
                                <div v-for="(r, key) in phone" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.goodsId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh> 
            </van-tab>
            <van-tab>
              <div slot="title" @click="getmovement">
                    运动
                </div>
             <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                        <div>
                            <!-- 无数据的情况 -->
                            <div v-if='rowlength==0'>
                                <img src="../../assets/icon/icon_kong.png"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                              <van-row>
                                <div v-for="(r, key) in movement" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.goodsId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                                <span class="salenumber_style">已拼{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.goodsId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                               <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约奖:{{r.integral}} 白积分</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.normalCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minNormalPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                                  </van-row>
                                <div style="text-align:center;font-size:16px;background:#ffffff;color:#999;">{{messages}}</div>
                            </van-list>
                            </div>
                        </div>
                    </van-pull-refresh> 
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
            <van-goods-action-mini-btn icon="share" style="width:25%;" @click="JumpShape">
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

export default {
  data() {
    return {
      images: [
        "//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
        "//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
        "//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
        "//gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg"
      ],
      active: 0,
      isLoading: false,
      img: "",
      url: "http://ptk.baolinzhe.com/ptk/api/",
      goodsId: "",
      articles: {},
      clothes: {},
      fruit: {},
      food: {},
      motherbabyrow: {},
      deptstore: {},
      beautyrow: {},
      shoebag: {},
      electric: {},
      manclothing: {},
      hometextiles: {},
      phone: {},
      movement: {},
      messages: "",
      rowlength: "",
      page: 1, //页数
      categoryId: "", //分类
      pageSize: 10, //每页条数
      sortType: "0", //排列次数
      value: "" //搜索关键字
    };
  },
  created() {
    // 加载时自动执行
    this.getdata();
  },
  methods: {
    getdata() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            _this.categoryId +
            "&page=" +
            _this.page++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.articles = response.data.result;
          console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  _this.categoryId +
                  "&page=" +
                  _this.page++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.articles.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    getfruit() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            13 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.fruit = response.data.result;
          console.log(_this.fruit);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  13 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.fruit.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    getfood() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            1 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.food = response.data.result;
          console.log(_this.food);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  1 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.food.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    getclothes() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            14 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.clothes = response.data.result;
          console.log(_this.clothes);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  14 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.clothes.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    getmotherbaby() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            4 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.motherbabyrow = response.data.result;
          console.log(_this.motherbabyrow);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  4 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.motherbabyrow.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    getsdeptstore() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            15 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.deptstore = response.data.result;
          console.log(_this.deptstore);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  15 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.deptstore.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    getbeauty() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            16 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.beautyrow = response.data.result;
          console.log(_this.beautyrow);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  16 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.beautyrow.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    getshoebag() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            1281 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.shoebag = response.data.result;
          console.log(_this.shoebag);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  1281 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.shoebag.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    getelectric() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            18 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.electric = response.data.result;
          console.log(_this.electric);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  18 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.electric.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    getmanclothing() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            743 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.manclothing = response.data.result;
          console.log(_this.manclothing);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  743 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.manclothing.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    gethometextiles() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            818 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.hometextiles = response.data.result;
          console.log(_this.hometextiles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  818 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.hometextiles.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    getphone() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            1543 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.phone = response.data.result;
          console.log(_this.phone);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  1543 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.phone.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    getmovement() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?keyword=" +
            _this.value +
            "&categoryId=" +
            1451 +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.movement = response.data.result;
          console.log(_this.movement);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
        });
      // 注册scroll事件并监听
      // window.addEventListener
      window.addEventListener("scroll", function() {
        var a =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        var b =
          document.documentElement.scrollTop == 0
            ? document.body.scrollTop
            : document.documentElement.scrollTop;
        var c =
          document.documentElement.scrollTop == 0
            ? document.body.scrollHeight
            : document.documentElement.scrollHeight;
        if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
          //alert("到达底部");
          console.log(sw);
          //如果开关打开则加载数据
          if (sw == true) {
            // 将开关关闭
            sw = false;
            _this.$axios
              .get(
                _this.url +
                  "/v1/product/list?keyword=" +
                  _this.value +
                  "&categoryId=" +
                  1451 +
                  "&page=" +
                  pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.movement.push(response.data.result[i]);
                }
                // 数据更新完毕，将开关打开
                sw = true;
              })
              .catch(function(error) {
                console.log(error);
              });
          }
          if (sw == false) {
            const toast = Toast.loading({
              forbidClick: true, // 禁用背景点击
              duration: 1000,
              message: "正在加载中"
            });
            console.log("正在加载中");
          }
        }
        console.log(sw);
      });
    },
    back_top() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    JumpSearch() {
      if (this.value == "" || this.value == null) {
        this.$toast("你输入的商品名称为空哦");
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
    JumpShape(){
        this.$router.push({
        path: "/ping",
        name: "shape",
      });
    },
    onRefresh() {
      // 下拉刷新
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    // 跳转商品详情页
    JumpPageDetails(goodsId) {
      var goodsId = goodsId;
      // alert(goodsId)
      this.$router.push({
        path: "/ping",
        name: "PageDetails",
        params: {
          // data: this.value,
          goodsId: goodsId
        }
      });
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
