<template>
    <div>
        <van-area :area-list="areaList" :visible-item-count="8" value='110101'
            @cancel='closeCityMaskFn' @change='changeItemFn' @confirm='selectAreaBtn'
            :title='title_name' ref='myArea'/>
    </div>
</template>

<script>
import area from '../assets/area';
import Vue from 'vue';
import {Area} from 'vant';

Vue.use(Area);

export default {
    name: 'selectArea',
    data() {
        return {
            areaList: area,
            title_name: '请选择',

        };
    },
    methods: {
        // 取消时触发
        closeCityMaskFn() {
            this.$emit('closeCityMaskFn');
            this.$refs.myArea.reset();
            this.getSelectItem();
        },
        // 改变选项时触发
        changeItemFn(d) {
            this.getSelectItem();
        },
        // 确认时触发
        selectAreaBtn(d) {
            this.$emit('closeCityMaskFn', d[1].name);
            this.$refs.myArea.reset();
            this.getSelectItem();
        },
        getSelectItem() {
            let _data = this.$refs.myArea.getValues();
            this.title_name = _data[0].name + '-' + _data[1].name + 
                '-' + _data[2].name;
        }

    }
}
</script>