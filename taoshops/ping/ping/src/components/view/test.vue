<template>
    <div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.cookies.a(1);
    var dataJson = JSON.parse(
      decodeURIComponent(this.cookies.getCookie("userData"))
    );
    this.isVip = dataJson.vip;
    console.log(dataJson);
    console.log(dataJson.id);
    console.log(dataJson.vip);
    console.log(dataJson.phone);
    console.log(dataJson.nickname);
    this.test();
  },
  methods: {}
};
</script>
<style lang="less">
body {
  background: #f1f1f1;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>