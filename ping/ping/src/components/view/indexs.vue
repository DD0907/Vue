<template>
  <div>
    <!--轮播图片-->
    <!-- <button @click="gettest()">test</button> -->
    <div>
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 搜索框 -->
    <div>
        <van-search v-model.trim="value" show-action placeholder="搜索拼多多优惠券商品" style="padding:2px;">
            <div slot="action"><van-button size="small" @click="JumpSearch" style="background:red">搜索</van-button></div>
        </van-search>
    </div>
    <!-- 快捷按钮 -->
    <div style="margin:0px">
    <van-row>
        <van-col span="8">
            <img src="http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg" class="goods-imgurl">
        </van-col>
        <van-col span="8">
            <img src="http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg" class="goods-imgurl">
        </van-col>
        <van-col span="8">
            <img src="http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg" class="goods-imgurl">
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
             <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                    <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                    <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                    <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                      <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                      <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                      <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
                            </div>
                            <!-- list列表 -->
                            <div v-else>
                            <van-list> 
                                <van-row>
                                <div v-for="(r, key) in clothes" :key="key" @click="JumpPageDetails(r.goodsId)">
                                    <div v-if="(key+1)%2==1" >
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.goodsThumbnailUrl" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">{{r.goodsName}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                <img src="../../assets/icon/icon_kong.png" class="goods-imgurl"/>
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
                                                <!-- <van-tag plain class="intergral_style" v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag plain class="intergral_style"  v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
                                               <!-- <van-tag class="intergral_style" plain v-if="r.hasQuanfan==true">云联全返</van-tag>
                                                <van-tag class="intergral_style" plain v-else>约赚:{{r.integral}} 佣金币</van-tag> -->
                                                <van-tag plain class="intergral_style">约赚:{{r.integral}} 佣金币</van-tag>
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
    <div @click="back_top" class="bottom_nav5"><van-icon name="e752" @click="back_top" style="font-size:36px;color:red;"/></div> 
    <div style="background:#ffffff;height:50px;"></div>
    <!-- 底部标签 -->
    <div>
    <van-row>
        <van-goods-action>
            <van-goods-action-mini-btn style="width:25%;">
                <div style="text-align:center;color:red;">
                  <van-icon name="e606"/>
                  <div style="margin:1px;">首页</div>
                </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpLove">
              <div style="text-align:center;">
                  <van-icon name="e619"/>
                  <div style="margin:1px;">收藏</div>
              </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpVip">
              <div style="text-align:center;">
                  <van-icon name="e607"/>
                  <div style="margin:1px;">超级会员</div>
              </div>
            </van-goods-action-mini-btn>
            <!-- <van-goods-action-mini-btn  style="width:25%;" @click="JumpShare">
                <div style="text-align:center;">
                  <van-icon name="e619"/>
                  <div style="margin:1px;">晒单分享</div>
                </div>
            </van-goods-action-mini-btn> -->
            <van-goods-action-mini-btn style="width:25%;" @click="JumpUser">
                <div style="text-align:center;">
                  <van-icon name="e6a4"/>
                  <div style="margin:1px;">我的</div>
                </div>
            </van-goods-action-mini-btn>
        </van-goods-action>
    </van-row>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import qs from "qs";
export default {
  data() {
    return {
      images: [
        "http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
        "http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
        "http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
        "http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg"
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
      testdata: {},
      messages: "",
      rowlength: "",
      page: 1, //页数
      categoryId: "", //分类
      pageSize: 10, //每页条数
      sortType: "0", //排列次数
      value: "" //搜索关键字
    };
  },
  mounted() {
    // 加载时自动执行
    this.getdata();
    // console.log("我被调用了....");
    // this.$cookie.set("test", "hello", 1);
    // console.log(this.$cookie.get("test"));
  },
  methods: {
    getdata() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      // 此处使用node做了代理
      var data = qs.stringify({
        categoryId: _this.categoryId,
        page: _this.page++,
        pageSize: _this.pageSize,
        sortType: 0,
        withCoupon: false
      });
      this.$axios
        .get(_this.url + "/v1/product/list", data)
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
              .get(_this.url + "/v1/product/list", data)
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
    gettest() {
      this.getCommondata(13, this.testdata);
    },
    getCommondata(categoryId, datarow) {
      var categoryIds = categoryId;
      var datarows = datarow;
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?categoryId=" +
            categoryIds +
            "&page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.datarows = response.data.result;
          console.log(_this.datarows);
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
                  "/v1/product/list?categoryId=" +
                  categoryIds +
                  "&page=" +
                  _this.pages++ +
                  "&pageSize=" +
                  _this.pageSize +
                  "&sortType=0&withCoupon=false"
              )
              .then(function(response) {
                // 将新获取的数据push到vue中的data，就会反应到视图中了
                var lengths = response.data.result.length;
                for (var i = 0; i < lengths; i++) {
                  _this.datarows.push(response.data.result[i]);
                }
                console.log(lengths);
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
            "/v1/product/list?categoryId=" +
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
                  "/v1/product/list?categoryId=" +
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
              query: { keyword: this.value },
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
    JumpVip() {
      this.$router.push({
        path: "/ping",
        name: "vip"
      });
    },
    JumpShare() {
      this.$router.push({
        path: "/ping",
        name: "share"
      });
    },
    JumpLove() {
      this.$router.push({
        path: "/ping",
        name: "love"
      });
    },
    JumpUser() {
      this.$router.push({
        path: "/ping",
        name: "user"
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
    destroyed() {
      window.removeEventListener("scroll");
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
@import "../../common/css/index.css";
@import "../../common/css/fontface.css";

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
</style>
