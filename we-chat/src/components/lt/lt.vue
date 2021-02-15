<template>
  <div style="width:100%;height:100%;overflow-y: auto">

    <div class="msg-box" v-for="(v,i) in msgList" :key="i">
      <div class="picture-head">

        <img :src="v.avater" alt="" />

        <span class="rand" v-if="v.type == 'pepole' && v.msgNum > 0"></span>

        <span class="num" v-if="v.type == 'user' && v.msgNum > 0">{{v.msgNum}}</span>

      </div>

      <div class="msg-ct" :style="{'borderBottom':i == msgList.length - 1 ? 'none' : '1px solid #e6e6e6'}">

        <div class="msg-title">
          <div class="msg-name van-ellipsis">{{v.name}}</div>
          <div class="msg-time">{{v.downTime}}</div>
        </div>

        <div class="msg-txt van-ellipsis">{{v.msgTxt}}</div>

        <div class="jing-yin">
          <img src="../../assets/jing.png" alt="">
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { useRouter} from 'vue-router';
import {reactive, ref, onMounted } from 'vue'

export default {
  name: "lt",

  components: {

  },

  props:{
    msgList:Array
  },


  setup(props, { emit }){

    const router = useRouter();

    const goState = (o) => {
      router.push(o)
    }


    onMounted(() => {
      // console.log(props.msgList)
    })


    const time = (time) => {

      time = parseInt(time)

      let nowTime = new Date();


      let nowyear = nowTime.getFullYear();

      let nowmon = nowTime.getMonth() + 1;

      let nowday = nowTime.getDate();

      let nowhours = nowTime.getHours();

      let nowmin = nowTime.getMinutes();

      var time = new Date(time);
      var year = nowyear - time.getFullYear() ;
      var month = nowmon - (time.getMonth() + 1) ;
      var date = nowday - time.getDate() ;
      var hours = nowhours - time.getHours() ;
      var minutes =  nowmin - time.getMinutes();



      // console.info(year+'/'+month+'/'+date+'/'+hours+'/'+minutes)

      if(year > 0){
        return year + '年前'
      }else if(month > 0){
        let a = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1
        let b = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
        return `${a}月${b}日`
      }else if(date > 0){
        if(date > 3){
          let a = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1
          let b = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
          return `${a}月${b}日`
        }else{
          return date + '天前'
        }
      }else if(hours > 0){
        let a = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
        let b = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
        return `${a}:${b}`
      }else if(minutes > 3){

        return minutes + '分钟前'
      }else {
        return '刚刚'
      }

    }

    return {
      goState
    }

  }
}
</script>

<style lang="less" scoped>
  .msg-box{
    width: 100%;
    height: 78px;
    display: flex;
    box-sizing: border-box;
    align-items: center;

    .picture-head{
      width: 52px;
      height: 52px;
      padding: 0 14px 0 16px;
      display: flex;
      align-items: center;
      position: relative;

      .rand{
        width: 12px;
        height: 12px;
        position: absolute;
        top: -4px;
        right: 10px;
        background-color: #e4393c;
        border-radius: 50%;
        z-index: 2;
      }

      .num{
        width: 20px;
        height: 20px;
        position: absolute;
        top: -8px;
        right: 10px;
        background-color: #e4393c;
        border-radius: 50%;
        z-index: 2;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color: #fff;
      }

      >img{
        width: 100%;
        display: block;
        border-radius: 6px;
      }


    }

    .msg-ct{
      width: calc(100% - 82px);
      height: calc(100% - 28px);
      padding: 14px 0;
      border-bottom: 1px solid #e6e6e6;
      position: relative;


      .msg-title{
        width: 100%;
        height: 28px;
        display: flex;
        justify-content: space-between;

        .msg-name{
          width: 226px;
          font-size: 16px;
          height: 28px;
          line-height: 28px;
          color: #333;
        }
        .msg-time{
          padding-top: 4px;
          height: calc(100% - 4px);
          padding-right: 20px;
          font-size: 12px;
          color: #c4c4c4;
        }
      }

      .msg-txt{
        width: 236px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #b3b3b3;
      }

      .jing-yin{
        width: 18px;
        position: absolute;
        top: 42px;
        right: 16px;

        >img{
          width: 100%;
          display: block;
        }
      }
    }
  }
</style>
