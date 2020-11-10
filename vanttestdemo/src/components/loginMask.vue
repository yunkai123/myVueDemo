<template>
  <div class="body_sty">
    <!-- 轮播图 -->
    <van-swipe class='loginMask' :show-indicators="false" :autoplay="2000"
      indicator-color="#1989fa">
      <van-swipe-item class="loginMaskImg loginBg_1"></van-swipe-item>
      <van-swipe-item class="loginMaskImg loginBg_2"></van-swipe-item>
      <van-swipe-item class="loginMaskImg loginBg_3"></van-swipe-item>
    </van-swipe>

    <van-button class="loginMaskBtn loginMaskBtn_1">我要招人</van-button>
    <van-button class="loginMaskBtn loginMaskBtn_2" to="/index_jobList">我要应聘</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button, Swipe, SwipeItem} from 'vant';

Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name: 'loginMask',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body_sty {
  position: relative;
  height: 100%;
  font-size: 0.3rem;
}

.loginMask {
  position: absolute;
  top:0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
}

.loginMaskImg {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}

.loginBg_1 {
  background-image: url('../assets/loginMask/1.jpg');
}

.loginBg_2 {
  background-image: url('../assets/loginMask/2.jpg');
}

.loginBg_3 {
  background-image: url('../assets/loginMask/3.jpg');
}

.van-button {
  position: absolute;
  bottom: 1.5rem;
  z-index: 6;
  height: 0.6rem;
  line-height: 0.6rem;
  color: #14c1bb;
  padding: 0 0.42rem;
}

.loginMaskBtn_1 {
  left: 0.9rem;
}

.loginMaskBtn_2 {
  right: 0.9rem;
}
</style>
