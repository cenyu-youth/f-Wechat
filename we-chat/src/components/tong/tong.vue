<template>
  <div style="width:100%;height:100%;overflow-y: auto;">

     <div class="lianxi-ren" v-for="(v,i) in defaultTie" :key="i">

       <div class="avater-box">
         <img :src="v.avater" alt="">
       </div>

       <div class="name">{{v.name}}</div>

     </div>

     <div class="line">我的企业及企业联系人</div>

     <div class="lianxi-ren" style="border-bottom: 1px solid #f6f8f7;">
       <div class="avater-box">
         <img src="https://img2.woyaogexing.com/2021/01/17/84a294bc369c4079ba82bea7b3b9a576!400x400.jpeg" alt="">
       </div>

       <div class="name" style="border: none;">前端开发工程师大家庭</div>
     </div>

     <div class="line">我的联系人</div>

     <div class="lianxi-ren" v-for="(v,i) in lianxiList" :key="i">

       <div class="avater-box">
         <img :src="v.avater" alt="">
       </div>

       <div class="name">{{v.name}}</div>

     </div>

  </div>
</template>

<script>
  import { IndexBar, IndexAnchor } from 'vant';

  export default {
    name: "tong",

    components: {
      [IndexBar.name]: IndexBar,
      [IndexAnchor.name]: IndexAnchor,
    },

    setup(){

      const defaultTie = [
        {
          name:'新的朋友',
          avater:require('../../assets/tong/1.png')
        },
        {
          name:'仅聊天的朋友',
          avater:require('../../assets/tong/2.png')
        },
        {
          name:'群聊',
          avater:require('../../assets/tong/3.png')
        },
        {
          name:'标签',
          avater:require('../../assets/tong/4.png')
        },
        {
          name:'公众号',
          avater:require('../../assets/tong/5.png')
        }
      ]

       return{
         defaultTie,
         lianxiList:[
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
          }
         ],
         indexList: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'],
       }

    }
  }
</script>

<style lang="less" scoped>
  .lianxi-ren{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;

    .avater-box{
      width: 44px;
      height: 44px;
      padding: 0 17px;

      >img{
        width: 44px;
        border-radius: 6px;
        display: block;
      }
    }

    .name{
      width: calc(100% - 78px);
      height: 100%;
      line-height: 60px;
      box-sizing: border-box;
      font-size: 16px;
      color: #333;
      border-bottom: 1px solid #f6f8f7;
    }
  }


  .line{
    height: 35px;
    background-color: #ededed;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 17px;
    line-height: 35px;
    color: #bababa;
    font-size: 12px;
  }
</style>
