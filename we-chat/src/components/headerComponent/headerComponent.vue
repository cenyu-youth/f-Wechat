<template>
  <div id="header-box">

    <div class="title">{{title}}</div>

    <div class="icons">

<!--      搜索-->
      <img class="icon" src="../../assets/search.png" alt="">

<!--      更多-->
<!--      <img class="icon" src="../../assets/Add.png" alt="">-->

      <van-popover
        v-model:show="showPopover"
        placement="bottom-end"
        theme="dark"
        :offset="[-8,22]"
      >

        <div class="more-icon" style="width:185px;height:60px;line-height:60px;display: flex;align-items: center" v-for="(v,i) in moreArr" :key="i">

          <img style="width: 28px;display: block;margin: 0 14px 0 22px" class="more-icon-icon" :src="v.url">

          <div style="font-size:16px;width:calc(185px - 28px - 14px - 22px);box-sizing: border-box;border-bottom: 1px solid #555555">{{v.txt}}</div>

        </div>

        <template #reference>
          <img class="icon" src="../../assets/Add.png" alt="">
        </template>
      </van-popover>

    </div>

  </div>
</template>

<script>

  import {reactive, ref, onMounted} from 'vue'

  import { Popover } from 'vant'

  export default {
    name: "hd",

    components: {
      [Popover.name]: Popover
    },

    props: {
      title: String
    },

    setup (props, { emit }) {
      const state = reactive({

      })

      const showPopover = ref(false);

      const moreArr = [
        {
          txt:'发起群聊',
          url:require('../../assets/more/lt.png')
        },
        {
          txt:'添加朋友',
          url:require('../../assets/more/addf.png')
        },
        {
          txt:'扫一扫',
          url:require('../../assets/more/sao.png')
        },
        {
          txt:'收付款',
          url:require('../../assets/more/sfk.png')
        },
        {
          txt:'帮助与反馈',
          url:require('../../assets/more/help.png')
        }
      ];

      onMounted(() => {

      })

      return {
        state,
        showPopover,
        moreArr
      }
    }
  }
</script>

<style lang="less" scoped>
  #header-box{
    width: 100vw;
    height: 52px;
    display: block;
    padding-top: 24px;
    background-color: #ededed;
    border-bottom: 1px solid #e5e5e5;
    position:relative;
    text-align: center;
    line-height: 52px;
    font-size: 16px;
    color: #333;
    font-weight: 600;

    .title{
      letter-spacing: 1px;
    }

    .icons{
      height: 52px;
      position:absolute;
      right: 0;
      top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        width:22px;
        margin-right: 20px;
        display: block;
      }
    }

    .more-icon{
      display: flex;
      justify-content: center;

      .more-icon-icon{
        width: 28px;
        display: block;
      }
    }

  }
</style>
