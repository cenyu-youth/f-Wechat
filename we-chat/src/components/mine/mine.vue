<template>
    <div style="width:100%;height:100%;overflow-y: auto;background-color: #ededed;">

      <div class="header-box">
         <div class="informtion">
            <div class="avater">
              <img :src="mineInfo.avater" alt="">
            </div>
            <div class="name-box">
              <div class="name">{{mineInfo.name}}</div>
              <div class="next-icon">
                <div class="axNum">微信号： {{mineInfo.wxNum}}</div>
                <div class="icons">

                  <div class="qu-code">
                    <img src="../../assets/mine/code.png" alt="">
                  </div>

                  <div class="arrow">
                    <img src="../../assets/faxian/11.png" alt="">
                  </div>

                </div>
              </div>
            </div>

            <div class="status">
              <img src="../../assets/mine/add.png" alt="">
              状态
            </div>
         </div>
      </div>
      <div class="line"></div>

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
        <div class="line"></div>

      </div>
    </div>
</template>

<script>
  export default {
    name: "mine",

    setup(){

      let defaultIcon = [
        [
          {
            avater:require('../../assets/mine/1.png'),
            name:'支付',
            rand:false
          }
        ],
        [
          {
            avater:require('../../assets/mine/2.png'),
            name:'收藏',
            rand:false
          },
          {
            avater:require('../../assets/mine/3.png'),
            name:'朋友圈',
            rand:false
          },
          {
            avater:require('../../assets/mine/4.png'),
            name:'卡包',
            rand:false
          },
          {
            avater:require('../../assets/mine/5.png'),
            name:'表情',
            rand:false
          }
        ],
        [
          {
            avater:require('../../assets/mine/6.png'),
            name:'设置',
            rand:false
          }
        ]
      ]

       let mineInfo={
         avater:'https://img2.woyaogexing.com/2021/01/20/76c2b00b1def4849aad0fdd56668e25b!400x400.jpeg',
         name:"青柯",
         wxNum:'aacc666'
       }
      return {
        defaultIcon,
        mineInfo
      }
    }
  }
</script>

<style lang="less" scoped>
  .header-box{
    width: 100%;
    height: 224px;
    padding-top: 24px;
    background-color: #fff;
    display: flex;
    align-items: center;

    .informtion{
      width: 100%;
      height: 70px;
      display: flex;
      position: relative;

      .avater{
        width: 70px;
        height: 70px;
        padding: 0 18px 0 26px;
        >img{
          width: 70px;
          border-radius: 6px;
          display: block;
        }
      }

      .name-box{
        width: calc(100% - 70px - 18px - 26px);
        height: 100%;
        display: flex;
        flex-direction:column;
        justify-content: space-around;

        .name{
          font-size: 16px;
          color: #333;
          font-weight: 600;
        }

        .next-icon{
          font-size: 12px;
          height: 22px;
          line-height: 22px;
          color: #b1b1b1;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .icons{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .qu-code{
               width: 20px;
               height: 100%;
               display: flex;
               align-items: center;
               margin-right: 25px;

               >img{
                 width: 16px;
                 display: block;
               }
            }
            .arrow{
              width: 10px;
              height: 100%;
              margin-right: 15px;
              display: flex;
              align-items: center;

              >img{
                width: 10px;
                display: block;
              }
            }
          }
        }
      }

      .status{
        width: 70px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        border: 1px solid #d8b138;
        color: #d8b138;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: -42px;
        left: 110px;

        >img{
          width: 24px;
          display: block;
          margin-right: 2px;
        }
      }
    }
  }

  .card-box{
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;

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

  .line{
    width: 100%;
    height: 12px;
    background-color: #eef0ef;
  }
</style>
