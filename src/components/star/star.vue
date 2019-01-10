<template>
  <div class="star" :class="starType">
    <span class="icon" :class="item" v-for="item in itemClasses" :key="item.id"></span>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .star
    display: inline-block
    .icon
      display: inline-block
      background-repeat: no-repeat
    &.star-24
      .icon
        width:10px
        height:10px
        background-size:10px 10px
        margin-right: 3px
        &:last-child
          margin-right: 0
        &.on
          bg-img('star24_on')
        &.half
          bg-img('star24_half')
        &.off
          bg-img('star24_off')
    &.star-36
      .icon
        width:15px
        height:15px
        background-size:15px 15px
        margin-right:6px
        &:last-child
          margin-right:0
        &.on
          bg-img('star36_on')
        &.half
          bg-img('star36_half')
        &.off
          bg-img('star36_off')
    &.star-48
      .icon
        width:20px
        height:20px
        background-size: 20px 20px
        margin-right:22px
        &:last-child
          margin-right:0px
        &.on
          bg-img('star48_on')
        &.half
          bg-img('star48_half')
        &.off
          bg-img('star48_off')
</style>

<script>
  // 常量定义
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  export default{
    props: {
      score: {
        type: Number
      },
      size: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size;
      },
      itemClasses() {
        var result = [];
        var score = Math.floor(this.score * 1);
        var hasDecimal = this.score % 1;
        for (var i = 0; i < score; i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal !== 0) {
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  };
</script>
