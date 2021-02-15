<template>
  <div style="width: 100%;height:100%;overflow-y: auto;">

    <div v-for="(v,i) in defaultIcon" :key="i">

      <div class="card-box" v-for="(item,idx) in v" :key="idx">
        <div class="avater">
          <img :src="item.avater" alt="">
        </div>
        <div class="name" :style="{'borderBottom':v.length > 1 && idx < v.length - 1 ? '1px solid #f1f1f1' : 'none'}">
          {{item.name}}
        </div>
        <div class="arrow">
          <img src="../../assets/faxian/11.png" alt="">
        </div>
      </div>
      <div class="link"></div>

    </div>


  </div>
</template>

<script>
  export default {
    name: "fa",

    setup(){

       let defaultIcon = [
         [
           {
             avater:require('../../assets/faxian/1.png'),
             name:'朋友圈',
             rand:false
           }
         ],
         [
           {
             avater:require('../../assets/faxian/2.png'),
             name:'视频号',
             rand:false
           }
         ],
         [
           {
             avater:require('../../assets/faxian/3.png'),
             name:'扫一扫',
             rand:false
           },
           {
             avater:require('../../assets/faxian/4.png'),
             name:'摇一摇',
             rand:false
           }
         ],
         [
           {
             avater:require('../../assets/faxian/5.png'),
             name:'看一看',
             rand:false
           },
           {
             avater:require('../../assets/faxian/6.png'),
             name:'搜一搜',
             rand:false
           }
         ],
        [
          {
            avater:require('../../assets/faxian/7.png'),
            name:'直播和附近',
            rand:false
          }
        ],
        [
          {
             avater:require('../../assets/faxian/8.png'),
             name:'购物',
             rand:false
           },
           {
             avater:require('../../assets/faxian/9.png'),
             name:'游戏',
             rand:false
           }
        ],
        [
          {
            avater:require('../../assets/faxian/10.png'),
            name:'小程序',
            rand:false
          }
        ]
       ]

      return {
        defaultIcon
      }
    }

  }
</script>

<style lang="less" scoped>
  .card-box{
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;

    .avater{
      padding:0 20px;
      >img{
        width: 24px;
        display: block;
      }
    }

    .br-bt{
      border-bottom: 1px solid #f1f1f1;
    }

    .name{
      line-height: 60px;
      height: 100%;
      width: calc(100% - 64px);
      font-size: 16px;
      color: #333;
    }

    .arrow{
      width: 20px;
      height: 100%;
      position: absolute;
      right: 10px;
      display: flex;
      align-items: center;

      >img{
        width: 10px;
        display: block;
      }
    }
  }

  .link{
    width: 100%;
    height: 12px;
    background-color: #eef0ef;
  }
</style>
