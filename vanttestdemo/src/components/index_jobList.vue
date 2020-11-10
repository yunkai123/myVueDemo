<template>
<div>
  <!-- header -->
  <van-sticky>
    <van-nav-bar class='bar_sty' left-text="web前端">
      <van-icon name='plus' slot='right' @click='jobStateOpen'/>
      <van-icon name="search" slot='right' />
    </van-nav-bar>

    <div class='title-menu'>
      <van-button class="miniBtn" size='mini' @click='notifyFnBtn'>推荐</van-button>
      <van-button class="miniBtn" size='mini' @click='notifyFnBtn'>最新</van-button>

      <van-button class='filterBtn' size="mini" @click='openFilterFn'>筛选</van-button>
      <van-button class='filterBtn' size="mini" @click='openMaskFn'>{{ defaultCity }}</van-button>
    </div>
  </van-sticky>

  <!-- 管理求职意向 -->
  <van-popup v-model='showJobState' position='right' :style="{ width: '100%', height: '100%'}">
	  <jobState @closeJobStateFn='jobStateClose'></jobState>
  </van-popup>
  <!-- 选择城市弹出层 -->
  <van-popup v-model="showPopup" position="bottom" :style="{ height: '100%' }">
	  <selectArea @closeCityMaskFn='hideMaskFn($event)'></selectArea>
  </van-popup>

  <!-- 筛选功能弹出层 -->
  <van-popup v-model="showFilterPopup" position="bottom" :style="{ height: '100%' }">
	  <filterObj @closeFilterObj='hiddenFilterFn'></filterObj>
  </van-popup>

  <!-- notify展示组件-->
  <notify v-show='notifyShow' />

  <!-- 职位列表 -->
  <div>
	<van-pull-refresh v-model='isLoading' @refresh='onRefresh'>
		<job_item v-for="(n, inx) in jobsData" :key=inx :itemObj=n></job_item>
	</van-pull-refresh>
  </div>

  <!-- footer-->
  <footer_bar/>
</div>
    
</template>

<script>

import Vue from 'vue';
import { Button, Sticky, Icon, NavBar, PullRefresh, Toast, Popup} from 'vant';
import job_item from './job_item';
import footer_bar from './footer_bar';
import notify from './notify';
import selectArea from './selectArea';
import filterObj from './filterObj';
import jobState from './jobState';

Vue.use(Button).use(Sticky).use(Icon).use(NavBar);
Vue.use(PullRefresh).use(Toast).use(Popup);

export default {
  name: 'index_jobList' ,
  data() {
    return{
			msg:'职位列表',
			notifyShow: false,
			isLoading: false,
			showPopup: false,
			showFilterPopup: false,
			showJobState: false,
			defaultCity: '北京市',
			jobsData:[{
				title:'web前端',
				h2_txt:'什么祥 未融资',
				area:['沈阳 和平区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'5-6K'
			},{
				title:'软件开发工程师',
				h2_txt:'牛万科技 未融资',
				area:['沈阳 沈河区','1-3年','学历不限'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'3-8K'
			},{
				title:'前端工程师',
				h2_txt:'成林健康科技 未融资',
				area:['沈阳 皇姑区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'马xx-从事招聘专员'
				},
				salary:'5-6K'
			},{
				title:'前端开发工程师',
				h2_txt:'师福教育 未融资',
				area:['沈阳 沈河区','3-5年','学历不限'],
				hr:{
					img_avatar:'',
					hr_txt:'杨女士 - 人事'
				},
				salary:'5-8K'
			},{
				title:'前端工程师',
				h2_txt:'成林健康科技 未融资',
				area:['沈阳 皇姑区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'马xx-从事招聘专员'
				},
				salary:'5-6K'
			},{
				title:'前端技术经理',
				h2_txt:'星擎科技 未融资',
				area:['沈阳 铁西区','5-10年','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'潘舒-CEO'
				},
				salary:'6-11K'
			},{
				title:'web前端',
				h2_txt:'什么祥 未融资',
				area:['沈阳 和平区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'5-6K'
			}]
		};
  },
  components: {
    footer_bar,
    job_item,
	notify,
	selectArea,
	filterObj,
	jobState
  },
  methods: {
	  // 显示提示信息
	  notifyFnBtn () {
			this.notifyShow = true;
			let _rect = document.querySelector('.notify');
			_rect.addEventListener('webkitAnimationEnd', ()=> {
				this.notifyShow = false;
			}, false);
	  },
	  // 下拉刷新
	  onRefresh() {
		  setTimeout(() => {
			  Toast('刷新成功');
			  this.isLoading = false;
		  }, 500);
	  },
	  // 打开城市选择弹出层
	  openMaskFn() {
		  this.showPopup = true;
	  },
	  // 关闭城市选择弹出层
	  hideMaskFn(_cityName) {
		  this.showPopup = false;
		  console.log(_cityName);
		  _cityName && (this.defaultCity = _cityName);
	  },
	  // 打开筛选弹出层
	  openFilterFn() {
		  this.showFilterPopup = true;
	  },
	  // 关闭筛选弹出层
	  hiddenFilterFn() {
		  this.showFilterPopup = false;
	  },
	  // 打开求职意向管理弹出层
	  jobStateOpen() {
		  this.showJobState = true;
	  },
	  // 关闭求职意向管理弹出层
	  jobStateClose() {
		  this.showJobState = false;
	  }
  }
}
</script>

<style scoped>
  .bar_sty{
    background: #14c1bb;
  }

  .van-icon-plus:before {
    color: #fff;
    font-size: 0.4rem;
    margin-right: 0.1rem;
    border-right: 1px solid #c1c1c1;
    padding-right: .1rem;
  }

  .van-icon-search:before {
    color: #fff;
    font-size: 0.4rem;
  }
  .bar_sty >>> .van-nav-bar__text { /* 一直不生效，搞了个深度穿透~ */
    font-size: 0.35rem;
    color: #fff;
  }
  .filterBtn {
    float: right;
    background: #f2f3f5;
    border: 0;
    margin: 0.1rem 0.1rem 0 0;
  }

  .miniBtn {
    border: 0;
    margin: 0.1rem 0.1rem 0 0;
  }

  .title-menu {
    background: #fff;
	z-index: 5;
  }
</style>