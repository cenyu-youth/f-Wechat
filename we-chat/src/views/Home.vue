<template>
  <div class="home">

    <headerCom :title="state.title[current]" v-if="current != 3" style="position: fixed;top: 0;left: 0;z-index: 99"></headerCom>


    <van-swipe
      :loop="false"
      class="main-st"
      :show-indicators="false"
      @change="onChange"
      ref="swiperRe"
    >
      <van-swipe-item style="height:calc(100% - 76px);padding-top: 76px;">
        <lt :msgList="msgList"></lt>
      </van-swipe-item>
      <van-swipe-item style="height:calc(100% - 76px);padding-top: 76px;">
        <Tong></Tong>
      </van-swipe-item>
      <van-swipe-item style="height:calc(100% - 76px);padding-top: 76px;">
        <fa></fa>
      </van-swipe-item>
      <van-swipe-item style="height:calc(100%);">
        <mine></mine>
      </van-swipe-item>
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
import lt from '@/components/lt/lt'
import Tong from '@/components/tong/tong'
import Fa from '@/components/fa/fa'
import Mine from '@/components/mine/mine'


export default {

  name:'Home',

  components: {
    Mine,
    Fa,
    Tong,
    headerCom,
    lt,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },


  setup(){
    const state = reactive({
      title:[
        '微信',
        '通讯录',
        '发现'
      ]
    })

    const msgList = [
      {
        avater:'https://img2.woyaogexing.com/2021/02/09/c2565228aa5b4a97b2da9df4ac6d5e03!400x400.jpeg',
        name:'狗子的天空',
        type:'user',
        msgNum:99,
        downTime:'111',
        msgTxt:'吃鸡不？'
      },
      {
        avater:'https://img2.woyaogexing.com/2021/01/22/090a7f6dd90d4a1f842459b1a50f5aa8!400x400.jpeg',
        name:'xxxx',
        type:'user',
        msgNum:1,
        downTime:'111',
        msgTxt:'今天天气挺好的'
      },
      {
        avater:'https://img2.woyaogexing.com/2021/01/22/66b379a7bd094a22923dc7e4a761ab40!400x400.jpeg',
        name:'大狗子的天空',
        type:'user',
        msgNum:7,
        downTime:'111',
        msgTxt:'憨憨憨憨憨憨？'
      },
      {
        avater:'https://img2.woyaogexing.com/2021/02/08/11023df357c24207b99f8a27089b791f!400x400.jpeg',
        name:'二狗公众号',
        type:'pepole',
        msgNum:29,
        downTime:'111',
        msgTxt:'你不知道的黑科技，白活了几十年的狗生!!!!!!!!!!!!'
      },
      {
        avater:'https://img2.woyaogexing.com/2021/02/08/ee81ea5f48f6464e9074ab0292b6e58c!400x400.jpeg',
        name:'三狗子的天空',
        type:'user',
        msgNum:0,
        downTime:'111',
        msgTxt:'出去玩不？'
      },
      {
        avater:'https://img2.woyaogexing.com/2021/02/08/e132aa4b7b29413d914bbe03d2dcdc35!400x400.jpeg',
        name:'四狗子的天空',
        type:'user',
        msgNum:0,
        downTime:'111',
        msgTxt:'好饿啊，我已经几分钟没有吃东西了？'
      },
      {
        avater:'https://img2.woyaogexing.com/2021/02/08/e7ab614b3e2c48fb825941b2068314f8!400x400.jpeg',
        name:'五狗子的天空',
        type:'user',
        msgNum:1,
        downTime:'111',
        msgTxt:'拆家拆家！！！'
      },
      {
        avater:'https://img2.woyaogexing.com/2021/02/03/761e822a190340d388347ec876039f7a!400x400.jpeg',
        name:'六狗子的地板',
        type:'user',
        msgNum:1,
        downTime:'111',
        msgTxt:'嗯，今天又是元气满满的一天？'
      },
      {
        avater:'https://img2.woyaogexing.com/2021/01/23/66aea14d804a4b6ab6e59ab208941261!400x400.jpeg',
        name:'喵喵教教主',
        type:'user',
        msgNum:1,
        downTime:'111',
        msgTxt:'等下开会'
      },
      {
        avater:'https://img2.woyaogexing.com/2021/01/23/ca142c66f5d546da99ca6393b47ea632!400x400.jpeg',
        name:'喵喵教成员群(228)',
        type:'user',
        msgNum:99,
        downTime:'111',
        msgTxt:'蟹黄味的猫粮好好吃呢？'
      },
    ]

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
      // console.info('渲染完成初始化')
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
      swiperRe,
      msgList
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
      height: calc(100% - 61px);
      background-color: #fff;
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
