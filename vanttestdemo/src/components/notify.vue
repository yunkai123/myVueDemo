<template>
    <div class='notify'>
        {{msg}}
        <van-loading color='#14c1bb' />
    </div>
</template>

<script>

import Vue from 'vue';
import {Notify, Loading} from 'vant';

Vue.use(Notify).use(Loading);

export default {
    name: 'notify',
    data() {
        return {
            msg: '推荐职位已经更新'
        }
    }
}
</script>

<style scoped>

    .notify {
        width: 100%;
        height: 0.5rem;
        background: #14c1bb;
        text-align: center;
        line-height: 0.5rem;
        color: #fff;
        font-size: 0.21rem;
        z-index:100;
        animation: notify_show 0.5s;
        animation-delay: 1.5s;
        animation-fill-mode: forwards;
    }

    @keyframes notify_show {
        from {
            height: 0.5rem;
        }
        to {
            height: 0;
        }
    }
</style>