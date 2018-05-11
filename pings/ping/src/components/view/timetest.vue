<template>
  <div>
      <button @click="get">点击</button>
      {{time}}
      <qriously :value="initQCode" :size="138"/> 
  </div>
</template>
<script>
function getDateDiff(dateStr) {
  var publishTime = getDateTimeStamp(dateStr) / 1000,
    d_seconds,
    d_minutes,
    d_hours,
    d_days,
    timeNow = parseInt(new Date().getTime() / 1000),
    d,
    date = new Date(publishTime * 1000),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  //小于10的在前面补0
  if (M < 10) {
    M = "0" + M;
  }
  if (D < 10) {
    D = "0" + D;
  }
  if (H < 10) {
    H = "0" + H;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  var times = H + ":" + m;
  d = timeNow - publishTime;
  d_days = parseInt(d / 86400);
  d_hours = parseInt(d / 3600);
  d_minutes = parseInt(d / 60);
  d_seconds = parseInt(d);

  if (d_days > 0 && d_days < 2) {
    return "昨天" + times;
  } else if (d_days <= 0 && d_hours > 0) {
    return d_hours + "小时前" + times;
  } else if (d_hours <= 0 && d_minutes > 0) {
    return d_minutes + "分钟前" + times;
  } else if (d_seconds < 60) {
    if (d_seconds <= 0) {
      return "刚刚";
    } else {
      return d_seconds + "秒前";
    }
  } else if (d_days >= 2 && d_days < 30) {
    return times;
  } else if (d_days >= 30) {
    return times;
  }
}
function getDateTimeStamp(dateStr) {
  return Date.parse(dateStr.replace(/-/gi, "/"));
}

export default {
  data() {
    return {
      time: "",
      initQCode: 'http://192.168.1.40:8080/ping/user'
    };
  },
  mounted() {
    //定时器每秒调用一次
    setInterval(() => {
      this.get();
    }, 1000);
  },
  methods: {
    get() {
        var times = "2018-05-07 14:37:00";
        this.time = getDateDiff(times);
    }
  }
};
</script>

<style>

</style>
