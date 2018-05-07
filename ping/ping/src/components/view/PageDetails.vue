<template>
  <div>
      <h2>{{goodsId}}</h2>
  </div>
</template>
<script>
export default {
  data(){
      return{
        goodsId: ""
      }
  },
  mounted(){
      this.getParams();
  },
  methods:{
      getParams() {
      // 取到路由带过来的参数
      var routerParams = this.$route.params.goodsId;
      // 将数据放在当前组件的数据内
      this.goodsId = routerParams;
    },
  }
}
</script>

