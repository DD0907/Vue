<template>
  <div class="hello">
    <!--轮播图片-->
    <div>
      <van-swipe class="goods-swipe" :autoplay="3000" v-if="code=1">
        <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.imageUrl" style="width:100%;height:4.0rem;" @click="JumpShopIndex(image.url)">
        </van-swipe-item>
      </van-swipe>
       <van-swipe class="goods-swipe" :autoplay="3000" v-else>
        <img src="./../assets/image/icon_scan.png" style="width:100%;height:4.0rem;">
      </van-swipe>
    </div>
    <!-- 搜索框 -->
    <div>
      <van-search v-model.trim="keyword" show-action placeholder="搜索优惠券商品" style="padding:2px;">
          <div slot="action">
            <van-button size="small" @click="JumpSearch" style="background:red;">
            <span style="color:#ffffff;">搜索</span>
            </van-button>
          </div>
      </van-search>
    </div>
    <div>
       <van-tabs v-model="active">
            <van-tab>
                <div slot="title" @click="getjingxuandata">
                    精选
                </div>
                <div>
                  <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                    <div>
                     <!-- 无数据的情况 -->
                      <div v-if='rowlength==0'>
                        <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
                      </div>
                      <!-- list列表 -->
                      <div v-else>
                      <van-list> 
                          <van-row>
                                <div v-for="(r, key) in jingxuandata" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.productId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}
                                                </div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}}元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.price}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.productId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                          </van-row>
                          <div style="text-align:center;font-size:14px;background:#f1f1f1;">
                          <div style="text-align:center;"><van-loading color="black" type="spinner" size="20px" style="margin-left:33%"/><div style="margin-top:-18px;">&nbsp;{{messages}}</div></div>                        
                          </div>
                      </van-list>
                      </div>
                    </div>
                  </van-pull-refresh>
                </div>  
            </van-tab>
            <van-tab>
                <div slot="title" @click="getshumajiadiandata">
                    数码家电
                </div>
                <div>
                <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                    <div>
                     <!-- 无数据的情况 -->
                      <div v-if='rowlength==0'>
                        <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
                      </div>
                      <!-- list列表 -->
                      <div v-else>
                      <van-list> 
                          <van-row>
                                <div v-for="(r, key) in shumajiadiandata" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.productId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}
                                                </div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.price}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.productId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                          </van-row>
                          <div style="text-align:center;font-size:14px;background:#f1f1f1;">
                          <div style="text-align:center;"><van-loading color="black" type="spinner" size="20px" style="margin-left:33%"/><div style="margin-top:-18px;">&nbsp;{{messages}}</div></div>                        
                          </div>
                      </van-list>
                      </div>
                    </div>
                  </van-pull-refresh>
                </div>  
            </van-tab>
            <van-tab>
                <div slot="title" @click="getmuyingdata">
                    母婴
                </div>
                <div>
                <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                    <div>
                     <!-- 无数据的情况 -->
                      <div v-if='rowlength==0'>
                        <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
                      </div>
                      <!-- list列表 -->
                      <div v-else>
                      <van-list> 
                          <van-row>
                                <div v-for="(r, key) in muyingdata" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.productId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}
                                                </div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.price}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.productId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                          </van-row>
                          <div style="text-align:center;font-size:14px;background:#f1f1f1;">
                          <div style="text-align:center;"><van-loading color="black" type="spinner" size="20px" style="margin-left:33%"/><div style="margin-top:-18px;">&nbsp;{{messages}}</div></div>                        
                          </div>
                      </van-list>
                      </div>
                    </div>
                  </van-pull-refresh>
                </div>  
            </van-tab>
            <van-tab>
                <div slot="title" @click="getmeizhuangdata">
                  美妆
                </div>  
                <div>
                  <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                    <div>
                     <!-- 无数据的情况 -->
                      <div v-if='rowlength==0'>
                        <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
                      </div>
                      <!-- list列表 -->
                      <div v-else>
                      <van-list> 
                          <van-row>
                                <div v-for="(r, key) in meizhuangdata" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.productId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}
                                                </div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.price}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.productId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                          </van-row>
                          <div style="text-align:center;font-size:14px;background:#f1f1f1;">
                          <div style="text-align:center;"><van-loading color="black" type="spinner" size="20px" style="margin-left:33%"/><div style="margin-top:-18px;">&nbsp;{{messages}}</div></div>                        
                          </div>
                      </van-list>
                      </div>
                    </div>
                  </van-pull-refresh>
                </div>
            </van-tab>
            <van-tab>
                <div slot="title" @click="getneiyidata">
                  内衣
                </div> 
                <div>
                 <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                    <div>
                     <!-- 无数据的情况 -->
                      <div v-if='rowlength==0'>
                        <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
                      </div>
                      <!-- list列表 -->
                      <div v-else>
                      <van-list> 
                          <van-row>
                                <div v-for="(r, key) in neiyidata" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.productId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}
                                                </div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.price}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.productId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                          </van-row>
                          <div style="text-align:center;font-size:14px;background:#f1f1f1;">
                          <div style="text-align:center;"><van-loading color="black" type="spinner" size="20px" style="margin-left:33%"/><div style="margin-top:-18px;">&nbsp;{{messages}}</div></div>                        
                          </div>
                      </van-list>
                      </div>
                    </div>
                  </van-pull-refresh>
                </div>
            </van-tab>
            <van-tab>
                <div slot="title" @click="getnvzhuangdata">
                    女装
                </div>
                <div>
                <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                    <div>
                     <!-- 无数据的情况 -->
                      <div v-if='rowlength==0'>
                        <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
                      </div>
                      <!-- list列表 -->
                      <div v-else>
                      <van-list> 
                          <van-row>
                                <div v-for="(r, key) in nvzhuangdata" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.productId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}
                                                </div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.price}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.productId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                          </van-row>
                          <div style="text-align:center;font-size:14px;background:#f1f1f1;">
                          <div style="text-align:center;"><van-loading color="black" type="spinner" size="20px" style="margin-left:33%"/><div style="margin-top:-18px;">&nbsp;{{messages}}</div></div>                        
                          </div>
                      </van-list>
                      </div>
                    </div>
                  </van-pull-refresh>  
                </div>  
            </van-tab>
            <van-tab>
                <div slot="title" @click="getnanzhuangdata">
                    男装
                </div>
                <div>
                <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                    <div>
                     <!-- 无数据的情况 -->
                      <div v-if='rowlength==0'>
                        <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
                      </div>
                      <!-- list列表 -->
                      <div v-else>
                      <van-list> 
                          <van-row>
                                <div v-for="(r, key) in nanzhuangdata" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.productId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}
                                                </div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.price}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.productId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                          </van-row>
                          <div style="text-align:center;font-size:14px;background:#f1f1f1;">
                          <div style="text-align:center;"><van-loading color="black" type="spinner" size="20px" style="margin-left:33%"/><div style="margin-top:-18px;">&nbsp;{{messages}}</div></div>                        
                          </div>
                      </van-list>
                      </div>
                    </div>
                  </van-pull-refresh>  
                </div>  
            </van-tab>
            <van-tab>
                <div slot="title" @click="getmeishidata">
                    美食
                </div>
                <div>
                <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                    <div>
                     <!-- 无数据的情况 -->
                      <div v-if='rowlength==0'>
                        <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
                      </div>
                      <!-- list列表 -->
                      <div v-else>
                      <van-list> 
                          <van-row>
                                <div v-for="(r, key) in meishidata" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.productId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}
                                                </div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.price}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.productId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                          </van-row>
                          <div style="text-align:center;font-size:14px;background:#f1f1f1;">
                          <div style="text-align:center;"><van-loading color="black" type="spinner" size="20px" style="margin-left:33%"/><div style="margin-top:-18px;">&nbsp;{{messages}}</div></div>                        
                          </div>
                      </van-list>
                      </div>
                    </div>
                  </van-pull-refresh>  
                </div>  
            </van-tab>
            <van-tab>
                <div slot="title" @click="getjujiadata">
                  居家
                </div>  
                <div>
                  <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                    <div>
                     <!-- 无数据的情况 -->
                      <div v-if='rowlength==0'>
                        <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
                      </div>
                      <!-- list列表 -->
                      <div v-else>
                      <van-list> 
                          <van-row>
                                <div v-for="(r, key) in jujiadata" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.productId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}
                                                </div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.price}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.productId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                          </van-row>
                          <div style="text-align:center;font-size:14px;background:#f1f1f1;">
                          <div style="text-align:center;"><van-loading color="black" type="spinner" size="20px" style="margin-left:33%"/><div style="margin-top:-18px;">&nbsp;{{messages}}</div></div>                        
                          </div>
                      </van-list>
                      </div>
                    </div>
                  </van-pull-refresh>
                </div>
            </van-tab>
            <van-tab>
                <div slot="title" @click="getwentichepingdata">
                  文体车品
                </div> 
                <div>
                  <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                    <div>
                     <!-- 无数据的情况 -->
                      <div v-if='rowlength==0'>
                        <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
                      </div>
                      <!-- list列表 -->
                      <div v-else>
                      <van-list> 
                          <van-row>
                                <div v-for="(r, key) in wentichepingdata" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.productId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}
                                                </div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.price}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.productId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                          </van-row>
                          <div style="text-align:center;font-size:14px;background:#f1f1f1;">
                          <div style="text-align:center;"><van-loading color="black" type="spinner" size="20px" style="margin-left:33%"/><div style="margin-top:-18px;">&nbsp;{{messages}}</div></div>                        
                          </div>
                      </van-list>
                      </div>
                    </div>
                  </van-pull-refresh>
                </div>
            </van-tab>
             <van-tab>
                <div slot="title" @click="getxiebaodata">
                  鞋包配饰
                </div> 
                <div>
                  <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
                    <div>
                     <!-- 无数据的情况 -->
                      <div v-if='rowlength==0'>
                        <img src="./../assets/image/icon_kong.png" class="goods-imgurl"/>
                      </div>
                      <!-- list列表 -->
                      <div v-else>
                      <van-list> 
                          <van-row>
                                <div v-for="(r, key) in xiebaodata" :key="key">
                                    <div v-if="(key+1)%2==1" @click="JumpPageDetails(r.productId)">
                                        <van-col span="12" class="img_border" >
                                          <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}
                                                </div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.price}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                                <span class="salenumber_style">已售{{r.salesNum}}件</span>                       
                                              </div>
                                          </van-cell-group>
                                        </van-col>
                                    </div>
                                    <div v-else @click="JumpPageDetails(r.productId)">
                                      <van-cell-group>
                                        <van-col span="12" class="img_border" >
                                         <van-cell-group>
                                            <img :src="r.mainPic" class="goods-imgurl">
                                              <div class="good_name" style="height:0.8rem;">
                                                <van-tag type="danger">{{r.source}}</van-tag>
                                                {{r.title}}</div>
                                              <div>
                                                <span>
                                                 <van-tag type="danger">{{r.couponPrice}}元优惠券</van-tag>
                                                </span>
                                                <van-tag plain  class="intergral_style" style="color: #fa2509;">约奖:{{r.integral}} 元</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.price}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.originPrice}}</span>
                                              <span class="salenumber_style">已售{{r.salesNum}}件</span>
                                              </div>
                                          </van-cell-group>                                    
                                        </van-col>
                                      </van-cell-group>
                                    </div>
                                </div>  
                          </van-row>
                          <div style="text-align:center;font-size:14px;background:#f1f1f1;">
                          <div style="text-align:center;"><van-loading color="black" type="spinner" size="20px" style="margin-left:33%"/><div style="margin-top:-18px;">&nbsp;{{messages}}</div></div>                        
                          </div>
                      </van-list>
                      </div>
                    </div>
                  </van-pull-refresh>
                </div>
            </van-tab>
       </van-tabs>
           <div class="bottom_nav5"><img src="./../assets/image/icon_top.png" @click="back_top" style="width:1.2rem;"/></div> 
    </div> 
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      images: {},
      code: 0,
      url: "http://shg.blpev.cn:8080/shg-api/api/",
      value: "",
      active: 0,
      isLoading: false,
      messages: "",
      jingxuandata: {},
      shumajiadiandata: {},
      muyingdata: {},
      meizhuangdata: {},
      neiyidata: {},
      nvzhuangdata: {},
      meishidata: {},
      jujiadata: {},
      nanzhuangdata: {},
      wentichepingdata: {},
      xiebaodata: {},
      rowlength: 0,
      pageSize: 10,
      keyword: "",
      pid: "mm_120568136_40334848_159640595",
      taobaoId: "taobao123456"
    };
  },
  mounted() {
    var keywords = window.location.href;
    this.pid = keywords.substring(
      keywords.indexOf("?pid=") + 5,
      keywords.lastIndexOf("&keyword")
    );
    var i = keywords.indexOf("&keyword=");
    this.keyword = decodeURI(
      keywords.substring(i + 9, keywords.lastIndexOf("&taobaoId"))
    );
    var taobaoid = keywords.indexOf("&taobaoId=");
    this.taobaoId = decodeURI(
      keywords.substring(taobaoid + 10),
      keywords.length
    );
    this.getbannerdata();
    if (this.keyword != null || this.keyword != "") {
      this.JumpSearch();
      this.getjingxuandata();
    } else {
      this.getjingxuandata();
    }
  },
  methods: {
    back_top() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    onRefresh() {
      // 下拉刷新
      setTimeout(() => {
        this.isLoading = false;
        this.$toast("刷新成功");
      }, 500);
    },
    JumpSearch() {
      if (this.keyword == "" || this.keyword == null) {
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
              path: "/searchshop",
              name: "search",
              query: {
                pid: this.pid,
                keyword: this.keyword,
                taobaoId: this.taobaoId
              }
            });
          } else {
            clearInterval(timer);
            Toast.clear();
          }
        }, 500);
      }
    },
    getbannerdata() {
      let _this = this;
      this.$axios
        .get(_this.url + "/index/best_brand")
        .then(function(response) {
          if (response.data.code == 1) {
            _this.code == 1;
            _this.images = response.data.result;
          }
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
    },
    JumpShopIndex(url) {
      var urls = url.substring(39);
      if (urls == "/brand") {
        // this.$toast("brand");
        this.$router.push({
          path: "/searchshop",
          name: "Shopbrand",
          query: {
            pid: this.pid,
            taobaoId: this.taobaoId
          }
        });
      } else if (urls == "/other/list?activityType=1") {
        this.$router.push({
          path: "/searchshop",
          name: "Shoptao",
          query: {
            pid: this.pid,
            taobaoId: this.taobaoId
          }
        });
      } else if (urls == "/other/list?activityType=2") {
        this.$router.push({
          path: "/searchshop",
          name: "ShopJuhuasuan",
          query: {
            pid: this.pid,
            taobaoId: this.taobaoId
          }
        });
      } else if (urls == "/other/list?video=1") {
        this.$router.push({
          path: "/searchshop",
          name: "Shopvideo",
          query: {
            pid: this.pid,
            taobaoId: this.taobaoId
          }
        });
      } else if (urls == "/other/list?priceMin=9.9") {
        this.$router.push({
          path: "/searchshop",
          name: "Shopbaoyou",
          query: {
            pid: this.pid,
            taobaoId: this.taobaoId
          }
        });
      }
    },
    // 跳转商品详情页
    JumpPageDetails(productId) {
      var goodsId = productId;
      this.$router.push({
        path: "/searchshop",
        name: "shopDetails",
        query: {
          goodsId: goodsId,
          pid: this.pid,
          taobaoId: this.taobaoId
        }
      });
    },
    //精选商品
    getjingxuandata() {
      // 缓存指针
      let _this = this;
      _this.currentName = "精选";
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/other/list?page=" +
            pages +
            "&pageRows=" +
            _this.pageSize +
            "&sortType=time"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.jingxuandata = response.data.result;
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          pages += 1;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      // 注册scroll事件并监听
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
        if (_this.currentName == "精选") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/product/other/list?page=" +
                    pages++ +
                    "&pageRows=" +
                    _this.pageSize +
                    "&sortType=time"
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.jingxuandata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                  _this.$toast("网络异常错误...");
                });
            }
            if (sw == false) {
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    //数码家电
    getshumajiadiandata() {
      // 缓存指针
      let _this = this;
      _this.currentName = "数码家电";
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/other/list?tagId=10&page=" +
            pages +
            "&pageRows=" +
            _this.pageSize +
            "&sortType=time"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.shumajiadiandata = response.data.result;
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          pages += 1;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      // 注册scroll事件并监听
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
        if (_this.currentName == "数码家电") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/product/other/list?tagId=10&page=" +
                    pages++ +
                    "&pageRows=" +
                    _this.pageSize +
                    "&sortType=time"
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.shumajiadiandata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                  _this.$toast("网络异常错误...");
                });
            }
            if (sw == false) {
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    //母婴
    getmuyingdata() {
      // 缓存指针
      let _this = this;
      _this.currentName = "母婴";
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/other/list?tagId=4&page=" +
            pages +
            "&pageRows=" +
            _this.pageSize +
            "&sortType=time"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.muyingdata = response.data.result;
          // console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          pages += 1;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      // 注册scroll事件并监听
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
        if (_this.currentName == "母婴") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/product/other/list?tagId=4&page=" +
                    pages++ +
                    "&pageRows=" +
                    _this.pageSize +
                    "&sortType=time"
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.muyingdata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                  _this.$toast("网络异常错误...");
                });
            }
            if (sw == false) {
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    //美妆
    getmeizhuangdata() {
      // 缓存指针
      let _this = this;
      _this.currentName = "美妆";
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/other/list?tagId=5&page=" +
            pages +
            "&pageRows=" +
            _this.pageSize +
            "&sortType=time"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.meizhuangdata = response.data.result;
          // console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          pages += 1;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      // 注册scroll事件并监听
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
        if (_this.currentName == "美妆") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/product/other/list?tagId=5&page=" +
                    pages++ +
                    "&pageRows=" +
                    _this.pageSize +
                    "&sortType=time"
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.meizhuangdata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                  _this.$toast("网络异常错误...");
                });
            }
            if (sw == false) {
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    //内衣
    getneiyidata() {
      // 缓存指针
      let _this = this;
      _this.currentName = "内衣";
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/other/list?tagId=3&page=" +
            pages +
            "&pageRows=" +
            _this.pageSize +
            "&sortType=time"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.neiyidata = response.data.result;
          // console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          pages += 1;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      // 注册scroll事件并监听
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
        if (_this.currentName == "内衣") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/product/other/list?tagId=3&page=" +
                    pages++ +
                    "&pageRows=" +
                    _this.pageSize +
                    "&sortType=time"
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.neiyidata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                  _this.$toast("网络异常错误...");
                });
            }
            if (sw == false) {
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    //女装
    getnvzhuangdata() {
      // 缓存指针
      let _this = this;
      _this.currentName = "女装";
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/other/list?tagId=1&page=" +
            pages +
            "&pageRows=" +
            _this.pageSize +
            "&sortType=time"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.nvzhuangdata = response.data.result;
          // console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          pages += 1;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      // 注册scroll事件并监听
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
        if (_this.currentName == "女装") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/product/other/list?tagId=1&page=" +
                    pages++ +
                    "&pageRows=" +
                    _this.pageSize +
                    "&sortType=time"
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.nvzhuangdata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                  _this.$toast("网络异常错误...");
                });
            }
            if (sw == false) {
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    //美食
    getmeishidata() {
      // 缓存指针
      let _this = this;
      _this.currentName = "美食";
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/other/list?tagId=8&page=" +
            pages +
            "&pageRows=" +
            _this.pageSize +
            "&sortType=time"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.meishidata = response.data.result;
          // console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          pages += 1;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      // 注册scroll事件并监听
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
        if (_this.currentName == "美食") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/product/other/list?tagId=8&page=" +
                    pages++ +
                    "&pageRows=" +
                    _this.pageSize +
                    "&sortType=time"
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.meishidata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                  _this.$toast("网络异常错误...");
                });
            }
            if (sw == false) {
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    //居家
    getjujiadata() {
      // 缓存指针
      let _this = this;
      _this.currentName = "居家";
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/other/list?tagId=6&page=" +
            pages +
            "&pageRows=" +
            _this.pageSize +
            "&sortType=time"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.jujiadata = response.data.result;
          // console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          pages += 1;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      // 注册scroll事件并监听
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
        if (_this.currentName == "居家") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/product/other/list?tagId=6&page=" +
                    pages++ +
                    "&pageRows=" +
                    _this.pageSize +
                    "&sortType=time"
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.jujiadata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                  _this.$toast("网络异常错误...");
                });
            }
            if (sw == false) {
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    //男装
    getnanzhuangdata() {
      // 缓存指针
      let _this = this;
      _this.currentName = "男装";
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/other/list?tagId=2&page=" +
            pages +
            "&pageRows=" +
            _this.pageSize +
            "&sortType=time"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.nanzhuangdata = response.data.result;
          // console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          pages += 1;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      // 注册scroll事件并监听
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
        if (_this.currentName == "男装") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/product/other/list?tagId=2&page=" +
                    pages++ +
                    "&pageRows=" +
                    _this.pageSize +
                    "&sortType=time"
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.nanzhuangdata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                  _this.$toast("网络异常错误...");
                });
            }
            if (sw == false) {
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    //文体车品
    getwentichepingdata() {
      // 缓存指针
      let _this = this;
      _this.currentName = "文体车品";
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/other/list?tagId=9&page=" +
            pages +
            "&pageRows=" +
            _this.pageSize +
            "&sortType=time"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.wentichepingdata = response.data.result;
          // console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          pages += 1;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      // 注册scroll事件并监听
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
        if (_this.currentName == "文体车品") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/product/other/list?tagId=9&page=" +
                    pages++ +
                    "&pageRows=" +
                    _this.pageSize +
                    "&sortType=time"
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.wentichepingdata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                  _this.$toast("网络异常错误...");
                });
            }
            if (sw == false) {
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    //鞋包配饰
    getxiebaodata() {
      // 缓存指针
      let _this = this;
      _this.currentName = "鞋包配饰";
      // 设置一个开关来避免重负请求数据
      let sw = true;
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/product/other/list?tagId=7&page=" +
            pages +
            "&pageRows=" +
            _this.pageSize +
            "&sortType=time"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.xiebaodata = response.data.result;
          // console.log(_this.articles);
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
          pages += 1;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
        });
      // 注册scroll事件并监听
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
        if (_this.currentName == "鞋包配饰") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/product/other/list?tagId=7&page=" +
                    pages++ +
                    "&pageRows=" +
                    _this.pageSize +
                    "&sortType=time"
                )
                .then(function(response) {
                  // 将新获取的数据push到vue中的data，就会反应到视图中了
                  var lengths = response.data.result.length;
                  for (var i = 0; i < lengths; i++) {
                    _this.xiebaodata.push(response.data.result[i]);
                  }
                  // 数据更新完毕，将开关打开
                  sw = true;
                })
                .catch(function(error) {
                  console.log(error);
                  _this.$toast("网络异常错误...");
                });
            }
            if (sw == false) {
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    }
  }
};
</script>
<style>
.good_name {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.3rem;
}

.bottom_nav5 {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 30px;
  text-align: center;
}
body {
  background: #f1f1f1;
}

.goods-imgurl {
  width: 100%;
  height: 100%;
  margin: auto;
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
</style>
