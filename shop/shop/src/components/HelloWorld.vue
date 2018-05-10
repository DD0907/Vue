<template>
  <div class="hello">
    <h1 @click="getQrcode">{{ msg }}</h1>
    <qriously :value="initQCode" :size="138"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '显示二维码',
      initQCode: 'http://192.168.1.40:8080/ping/indexs'
    }
  },
  methods: {
    getQrcode () {
      this.initQCode = 'http://192.168.1.40:8080/ping/user'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
