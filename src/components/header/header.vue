<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avator">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="">
    </div>
    <!--  support-detail -->
    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrap clearfix">
          <div class="detail-content">
            内容区
          </div>
        </div>
        <div class="detail-close">
          <i class="icon-close" @click="hideDetail"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scope>
  @import "../../common/stylus/mixin.styl";
  .header
    background-color: rgba(7,17,27,0.5)
    color: #fff
    position: relative
    overflow:hidden
    .content-wrapper
      position:relative
      padding: 24px 12px 18px 24px
      font-size:0px
      .avator
        display:inline-block
        margin-right:16px
        vertical-align:top
        img
          height:64px
          width:64px
          border-radius:2px
      .content
        display:inline-block
        .title
          margin:2px 0 8px 0
          .brand
            display:inline-block
            vertical-align:top
            height:18px
            width:30px
            bg-img('brand')
            backround-repeat:no-repeat
            background-size:30px 18px
            margin--right:6px
          .name
            font-size: 16px
            margin-left:6px
            line-height:18px
            font-weight:bold
        .description
          font-size: 12px
          line-height:12px
          margin-bottom:10px
        .support
          .icon
            display:inline-block
            vertical-align:top
            width:12px
            height:12px
            margin-right:4px
            background-size:12px 12px
            background-repeat:no-repeat
            &.discound
              bg-img('discount_1')
            &.decrease
              bg-img('decrease_1')
            &.invoice
              bg-img('invoice_1')
            &.special
              bg-img('special_1')
          .text
            font-size: 10px
            line-height: 12px
      .support-count
        position: absolute
        bottom:14px
        right:12px
        padding:0 8px
        height:24px
        line-height:24px
        background-color:rgba(0,0,0,0.2)
        border-radius:14px
        font-size:10px
        text-align:center
          .count
            vertical-align:top
            margin-right:2px
    .bulletin-wrapper
      position: relative
      height:28px
      line-height:28px
      padding:0 12px
      background-color: rgba(7,17,27,0.2)
      white-space:nowrap
      overflow:hidden
      text-overflow:ellipsis
      .bulletin-title
        display:inline-block
        vertical-align:top
        height:12px
        width:22px
        bg-img('bulletin')
        background-repeat:no-repeat
        background-size:22px 12px
        margin-top:8px
      .bulletin-text
        margin:0px 4px
        vertical-align:top
      .icon-keyboard_arrow_right
        position:absolute
        right:12px
        top:8px
        font-size:10px
    .background
      position:absolute
      left:0
      top:0
      width:100%
      height:100%
      z-index:-1
      filter: blur(10px)
    .detail
      position:fixed
      top:0
      z-index:100
      height:100%
      width:100%
      overflow:auto
      background-color:rgba(7,17,27,0.8)
      left:0
      backdrop-filter: blur(10px)
      transform: all 0.5 ease
      .detail-wrap
        min-height:100%
        width:100%
        .detail-content
          margin-top:64px
          padding-bottom:64px
      .detail-close
        position:relative
        height:32px
        line-height:32px
        text-align:center
        font-size:32px
        color: rgba(255,255,255,0.5)
        font-size:32px
        margin: -64px auto 0 auto
        .icon-close
          cursor:pointer
      &.fade-enter, &.fade-leave
        left:-100%
        background-color:rgba(7,17,27,0)
</style>

<script>
export default{
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      detailShow: false
    };
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>
