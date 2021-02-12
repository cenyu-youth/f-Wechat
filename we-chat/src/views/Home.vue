<template>
  <div class="home">

    <headerCom :title="state.title"></headerCom>


    <van-swipe
      :loop="false"
      class="main-st"
      :show-indicators="false"
      @change="onChange"
      ref="swiperRe"
    >
      <van-swipe-item style="background-color: #333333">1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>


    <div class="tab-rand-box">
      <div class="tab-rand" v-for="(v,i) in tabRand" :key="i" @click="changSwiper(i)">
        <div class="t-box">
          <img :src="i == current ? v.active : v.url" alt="">
        </div>
        <div class="txt-box" :style="{color:i == current ? '#07c160' : '#333'}">{{v.txt}}</div>
      </div>

    </div>

  </div>
</template>

<script>
//引入vant的组件
import { Swipe, SwipeItem } from 'vant';

//引入vue需要的API
import {reactive, ref, onMounted} from 'vue';

//引入自定义组件
import headerCom from '@/components/headerComponent/headerComponent'



export default {

  name:'Home',

  components: {
    headerCom,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },


  setup(){
    const state = reactive({
      title:'微信'
    })

    const current=ref(0)

    const tabRand = [
      {
        url:require('../assets/tabBar/lt.png'),
        active:require('../assets/tabBar/lt-a.png'),
        txt:'微信'
      },
      {
        url:require('../assets/tabBar/tong.png'),
        active:require('../assets/tabBar/tong-a.png'),
        txt:'通讯录'
      },
      {
        url:require('../assets/tabBar/fa.png'),
        active:require('../assets/tabBar/fa-a.png'),
        txt:'发现'
      },
      {
        url:require('../assets/tabBar/mine.png'),
        active:require('../assets/tabBar/mine-a.png'),
        txt:'我'
      }
    ]

    const onChange = (index) => {
      current.value = index;
    };

    onMounted(() => {
      // console.info(swiperRe.value)
    })

    //ref 的获取方法
    // 方法一 ：
    let swiperRe = ref(null)

    //方法二
    // let swiperRe = '';
    //
    // const setRef = el => {
    //   swiperRe = el;
    // }

    const changSwiper = (idx) => {
      // current.value = idx


      swiperRe.value.swipeTo(idx,{immediate:true})
    }


    return {
      state,
      current,
      tabRand,
      onChange,
      changSwiper,
      swiperRe
    }
  }
}
</script>

<style lang="less" scoped>
  .home{
    width:100%;
    height:100%;

    .main-st{
      width:100%;
      height:calc(100% - 76px - 61px);
      background-color: #fff;
      margin:0;
      padding:0;
    }




    .tab-rand-box{
      width:100%;
      height:60px;
      border-top: 1px solid #ededed;
      background-color: #f7f7f7;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .tab-rand{
        width: 25%;
        text-align: center;

        .t-box{
          height:34px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          img{
            width:28px;
            display: block;
          }
        }

      }
    }

  }


</style>
