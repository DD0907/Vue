<template>
    <div>
        <ul>
            <li v-for="(item,index) in articles" :key="index">
                <img :src="item.goodsThumbnailUrl" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        data(){
            return {
                articles : [],
                page:1
            }
        },
        mounted(){
            // 缓存指针
            let _this = this;
            // 设置一个开关来避免重负请求数据
            let sw = true;
            // 此处使用node做了代理
            this.$axios.get('http://ptk.baolinzhe.com/ptk/api/v1/product/list?page='+_this.page++ +'&pageSize=10&sortType=0&withCoupon=false')
                .then(function(response){
                    // console.log(JSON.parse(response.data).stories);
                    // 将得到的数据放到vue中的data
                    _this.articles =  response.data.result;
                })
                .catch(function(error){
                    console.log(error);
                });
            // 注册scroll事件并监听
            // window.addEventListener
            window.addEventListener('scroll',function(){
                 console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度
                 console.log(document.documentElement.scrollTop); // 滚动高度
                 console.log(document.documentElement.offsetHeight); // 文档高度
                // 判断是否滚动到底
                if(document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight) {
                    console.log(sw);
                    //如果开关打开则加载数据
                    if(sw==true){
                        // 将开关关闭
                        sw = false;
                        _this.$axios.get('http://ptk.baolinzhe.com/ptk/api/v1/product/list?page='+_this.page++ +'&pageSize=10&sortType=0&withCoupon=false')
                            .then(function(response){
                                // 将新获取的数据push到vue中的data，就会反应到视图中了
                                var lengths = response.data.result.length;
                                    for (var i = 0; i < lengths; i++) {
                                    _this.articles.push(response.data.result[i]);
                                    }
                                // 数据更新完毕，将开关打开
                                sw = true;
                            })
                            .catch(function(error){
                                console.log(error);
                            });   
                    }
                }
                console.log(sw)
            });
        }
    }
</script>
<style lang="less">
    *{
        margin:0;
        padding:0;
    }
    li{
        list-style:none;
    }
</style>