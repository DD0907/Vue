<template>
  <div>
    <!--轮播图片-->
    <div>
      <van-swipe class="goods-swipe" :autoplay="3000" v-if="code==1">
        <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.imgUrl" style="height:4.0rem;" @click="JumpPageDetails(image.itemId)">
        </van-swipe-item>
      </van-swipe>
       <van-swipe class="goods-swipe" :autoplay="3000" v-else>
        <img src="../../assets/icon/icon_scan.png" style="height:4.0rem;">
      </van-swipe>
    </div>
    <!-- 搜索框 -->
    <div>
      <!-- v-model.trim 去除空格 -->
        <van-search v-model.trim="value" show-action placeholder="搜索拼多多优惠券商品" style="padding:2px;">
            <div slot="action">
              <van-button size="small" @click="JumpSearch" style="background:red;">
              <span style="color:#ffffff;">搜索</span>
              </van-button>
            </div>
        </van-search>
    </div>
    <!-- 快捷按钮 -->
    <!-- <div style="margin:0px;" v-if="code==1" > -->
    <div style="margin:0px;">
    <!-- <van-row v-for="(image, index) in images" :key="index"> -->
        <van-row>
        <!-- <van-col :span="24/(images.length)">
            <img :src="image.imgUrl" class="goods-imgurl banner_style" style="height:1.6rem;">
        </van-col> -->
        <van-col span="8">
            <img src="http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg" class="goods-imgurl banner_style">
        </van-col>
        <van-col span="8">
            <img src="http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg" class="goods-imgurl banner_style">
        </van-col>
        <van-col span="8">
            <img src="http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg" class="goods-imgurl banner_style">
        </van-col>
    </van-row>
    </div>
    <!-- <div style="margin:0px" v-else>
    <van-row>
        <van-col span="24">
            <img src="../../assets/icon/icon_scan.png" class="goods-imgurl banner_style" style="height:1.0rem;">
        </van-col>
    </van-row>
    </div> -->
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
             <div style="text-align:center;">暂无数据哦......</div>
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
                    <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                    </div>
                    <div style="height:0.8rem">
                    <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                    <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                      <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                      </div>
                      <div style="height:0.8rem">
                      <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                      <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                      <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                                <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                                <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                                <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                              <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                              <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                              <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                                <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                             <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                                <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                                 <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                                 <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                                <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                                <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                               <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                                 <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                                 <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                                <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                                <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                                 <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                               <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                               <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                               <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                                                <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                                <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                                <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
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
                                                <van-tag plain v-if="isVip" class="intergral_style" style="color: #fa2509;">约赚:{{r.integral}} 佣金币</van-tag>
                                              </div>
                                              <div style="height:0.8rem">
                                              <span class="price_style">￥{{r.groupCouponAfterPrice}}</span>
                                              <span class="goods-express">&nbsp;原价:￥{{r.minGroupPrice}}</span>
                                              <span class="salenumber_style">已拼{{r.salesNum}}件</span>
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
                  <!-- <van-icon name="e606"/> -->
                  <img src="../../assets/icon/icons_index_current.png" style="width:0.7rem;"/>
                 <div><span style="font-size:14px;">首页</span></div>
                </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpLove">
              <div style="text-align:center;">
                  <!-- <van-icon name="e619"/> -->
              <img src="../../assets/icon/icons_love.png" style="width:0.7rem;"/>
                 <div><span style="font-size:14px;">收藏</span></div>
              </div>
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn style="width:25%;" @click="JumpVip">
              <div style="text-align:center;">
                  <!-- <van-icon name="e607"/> -->
                  <img src="../../assets/icon/icons_vip.png" style="width:0.7rem;"/>
                  <div><span style="font-size:14px;">超级会员</span></div>
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
                  <!-- <van-icon name="e6a4"/> -->
                  <img src="../../assets/icon/icons_my.png" style="width:0.7rem;"/>
                   <div><span style="font-size:14px;">我的</span></div>
                </div>
            </van-goods-action-mini-btn>
        </van-goods-action>
    </van-row>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { Loading } from "vant";
import qs from "qs";
import fansVue from "./fans.vue";
export default {
  data() {
    return {
      id: "",
      isVip: true,
      images: {},
      code: "",
      // images: [
      //   "http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
      //   "http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
      //   "http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg",
      //   "http://gdp.alicdn.com/imgextra/i3/2217893634/TB2P42NeDmWBKNjSZFBXXXxUFXa_!!2217893634.jpg"
      // ],
      active: 0,
      isLoading: true,
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
      pageSize: 10, //每页条数
      sortType: "0", //排列次数
      value: "", //搜索关键字
      currentName: "精选"
    };
  },
  mounted() {
    // 加载时自动执行
    // if (this.isWeiXin()) {
    //   //是来自微信内置浏览器
    //   // console.log(getCookie("userData"));
    //   var dataJson = JSON.parse(decodeURIComponent(getCookie("userData")));
    //   this.id = dataJson.id;
    //   this.isVip = dataJson.vip;
    //   sessionStorage.setItem("userId", this.id);
    //   this.getdata();
    // } else {
    //   //不是来自微信内置浏览器
    //   this.$router.push({
    //     path: "/ping",
    //     name: "errors"
    //   });
    // }

    this.id = 1;
    this.isVip = true;
    sessionStorage.setItem("userId", this.id);
    this.getdata();

    function getCookie(name) {
      name = name + "=";
      var start = document.cookie.indexOf(name),
        value = null;
      if (start > -1) {
        var end = document.cookie.indexOf(";", start);
        if (end == -1) {
          end = document.cookie.length;
        }
        value = document.cookie.substring(start + name.length, end);
      }
      return value;
    }
    //加载轮播图
    this.getbannerdata();
  },
  methods: {
    //判断是否微信登陆 是不是微信浏览器
    isWeiXin() {
      let ua = window.navigator.userAgent.toLowerCase();
      console.log(ua); //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    },
    getbannerdata() {
      let _this = this;
      this.$axios
        .get(_this.url + "/v1/banner/list")
        .then(function(response) {
          if (response.data.code == 1) {
            _this.images = response.data.result;
            _this.code = 1;
          }
        })
        .catch(function(error) {
          console.log(error);
          _this.code = 0;
          _this.$toast("网络异常错误...");
        });
    },
    getdata() {
      // 缓存指针
      let _this = this;
      // 设置一个开关来避免重负请求数据
      let sw = true;
      _this.currentName = "精选";
      let pages = 1;
      // 此处使用node做了代理
      this.$axios
        .get(
          _this.url +
            "/v1/product/list?page=" +
            pages++ +
            "&pageSize=" +
            _this.pageSize +
            "&sortType=0&withCoupon=false"
        )
        .then(function(response) {
          // 将得到的数据放到vue中的data
          _this.articles = response.data.result;
          var lengths = response.data.result.length;
          _this.rowlength = lengths;
        })
        .catch(function(error) {
          console.log(error);
          _this.$toast("网络异常错误...");
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
        if (_this.currentName == "精选") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //如果开关打开则加载数据
            if (sw == true) {
              // 将开关关闭
              sw = false;
              _this.$axios
                .get(
                  _this.url +
                    "/v1/product/list?page=" +
                    pages++ +
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
    getfruit() {
      // 缓存指针
      let _this = this;
      _this.currentName = "水果";
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
        if (_this.currentName == "水果") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    getfood() {
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
        if (_this.currentName == "美食") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    getclothes() {
      // 缓存指针
      let _this = this;
      _this.currentName = "服饰";
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
        if (_this.currentName == "服饰") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    getmotherbaby() {
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
        if (_this.currentName == "母婴") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    getsdeptstore() {
      // 缓存指针
      let _this = this;
      _this.currentName = "百货";
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
        if (_this.currentName == "百货") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    getbeauty() {
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
        if (_this.currentName == "美妆") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    getshoebag() {
      // 缓存指针
      let _this = this;
      _this.currentName = "鞋包";
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
        if (_this.currentName == "鞋包") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    getelectric() {
      // 缓存指针
      let _this = this;
      _this.currentName = "电器";
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
        if (_this.currentName == "电器") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    getmanclothing() {
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
        if (_this.currentName == "男装") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    gethometextiles() {
      // 缓存指针
      let _this = this;
      _this.currentName = "家纺";
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
        if (_this.currentName == "家纺") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    getphone() {
      // 缓存指针
      let _this = this;
      _this.currentName = "手机";
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
        if (_this.currentName == "手机") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
      });
    },
    getmovement() {
      // 缓存指针
      let _this = this;
      _this.currentName = "运动";
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
        if (_this.currentName == "运动") {
          if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
            //alert("到达底部");
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
              _this.messages = "正在加载中...";
            }
          }
        }
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
                // isVip: this.isVip
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
        name: "vip",
        query: { isVip: this.isVip }
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
        name: "love",
        query: {
          isVip: this.isVip
        }
      });
    },
    JumpUser() {
      this.$router.push({
        path: "/ping",
        name: "user",
        query: { isVip: this.isVip }
      });
    },
    onRefresh() {
      // 下拉刷新
      setTimeout(() => {
        if (this.currentName == "精选") {
          this.getdata();
        } else if (this.currentName == "水果") {
          this.getfruit();
        } else if (this.currentName == "美食") {
          this.getfood();
        } else if (this.currentName == "服饰") {
          this.getclothes();
        } else if (this.currentName == "母婴") {
          this.getmotherbaby();
        } else if (this.currentName == "百货") {
          this.getsdeptstore();
        } else if (this.currentName == "美妆") {
          this.getbeauty();
        } else if (this.currentName == "鞋包") {
          this.getshoebag();
        } else if (this.currentName == "电器") {
          this.getelectric();
        } else if (this.currentName == "男装") {
          this.getmanclothing();
        } else if (this.currentName == "家纺") {
          this.gethometextiles();
        } else if (this.currentName == "手机") {
          this.getphone();
        } else if (this.currentName == "运动") {
          this.getmovement();
        }
        this.isLoading = false;
        this.$toast("刷新成功");
      }, 500);
    },
    destroyed() {
      window.removeEventListener("scroll", scroll);
    },
    // 跳转商品详情页
    JumpPageDetails(goodsId) {
      var goodsId = goodsId;
      // alert(goodsId)
      this.$router.push({
        path: "/ping",
        name: "PageDetails",
        query: { goodsId: goodsId },
        params: {
          // data: this.value,
          // goodsId: goodsId,
          isVip: this.isVip
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