<template>
<div>
    <van-nav-bar :title='title_name'>
        <van-icon name="cross" slot="left" @click='closeFilterObj'/>
    </van-nav-bar>

    <div class='gridTitle'>学历要求</div>
    <van-grid :column-num="3" :gutter="10">
        <van-grid-item @click='itemBtnClick($event)' text='全部' />
        <van-grid-item @click='itemBtnClick($event)' text='大专' />
        <van-grid-item @click='itemBtnClick($event)' text='本科' />
        <van-grid-item @click='itemBtnClick($event)' text='硕士' />
        <van-grid-item @click='itemBtnClick($event)' text='博士' />
    </van-grid>

    <div class='gridTitle'>资薪待遇</div>
    <van-grid :column-num="3" :gutter="10">
        <van-grid-item @click='itemBtnClick($event)' text='8K' />
        <van-grid-item @click='itemBtnClick($event)' text='10K' />
        <van-grid-item @click='itemBtnClick($event)' text='15K' />
        <van-grid-item @click='itemBtnClick($event)' text='20K' />
        <van-grid-item @click='itemBtnClick($event)' text='20K+' />
    </van-grid>

    <div class='gridTitle'>经验要求</div>
    <van-grid :column-num="3" :gutter="10">
        <van-grid-item @click='itemBtnClick($event)' text='应届' />
        <van-grid-item @click='itemBtnClick($event)' text='三年' />
        <van-grid-item @click='itemBtnClick($event)' text='五年' />
    </van-grid>

    <div class="filter_footer">
        <van-button class='clearBtn' type='deafault' color='#eee'>清除</van-button>
        <van-button color='#14c1bb' @click='confirmBtnFn'>确定</van-button>
    </div>
</div>
    
</template>

<script>
import '../assets/reset_vant.css'; // 引入自定义 vant Grid样式，不知道为啥直接放下边不行~
import Vue from 'vue';
import { NavBar, Icon, Grid, GridItem } from 'vant';

Vue.use(NavBar).use(Icon).use(Grid).use(GridItem);

export default {
    name: 'filterObj',
    data() {
        return {
            title_name: '筛选',
            optionArr: []
        }
    },
    methods: {
        closeFilterObj() {
            this.$emit('closeFilterObj');
        },
        // 点击选项，改变css样式
        itemBtnClick($event) {
            let _txt = $event.currentTarget.innerText; // currentTarget 可以锁定当前元素，直接用target有可能定位到内部元素
            let _cls = $event.currentTarget.getAttribute('class');
            let _clsArr = _cls.split(' '); // 类名数组
            let _has = false; // 没有添加选中样式的类

            for(let i = 0; i < _clsArr.length; i++) {
                if(_clsArr[i] == 'van_grid_item_focus') {
                    _clsArr.splice(i, 1);
                    _has = true;
                    break;
                }
            }

            if(!_has) {
                _clsArr.push('van_grid_item_focus'); // 未找到则添加
            }

            let _cls_txt = _clsArr.join(' ');
            $event.currentTarget.setAttribute('class', _cls_txt);
        },
        confirmBtnFn() {
            this.optionArr = []; // 重新计数
            let _grids = document.querySelectorAll('.van-grid');           
            for(let i = 0; i < _grids.length; i++) {
                for(let j = 0; j <_grids[i].children.length; j++) {
                    let _cls = _grids[i].children[j].children[0].getAttribute('class');
                    if( _cls.indexOf('van_grid_item_focus') !== -1 ){
						this.optionArr.push(_grids[i].children[j].innerText);
					}
                }
            }
            console.log(this.optionArr);
        }

    }
}
</script>

<style scoped>

.gridTitle {
    padding: 0.2rem 0.2rem;
    clear: both;
    font-size: 0.3rem;
    font-weight: bold;
}

.filter_footer {
    text-align: center;
    margin-top: 1rem;
    width: 100%;
}



</style>