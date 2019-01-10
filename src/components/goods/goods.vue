<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li class="menu-item" v-for="item in goods" :key="item.name">
          <span class="text border-1px">
            <span class="icon" v-show="item.type>-1" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="goods-wrapper">
      <ul class="good-list">
        <li class="good-item" v-for="good in goods" :key="good">
          <p class="good-name"><span class="text">{{good.name}}</span></p>
          <ul class="food-list" v-if="good.foods">
            <li class="food-item" v-for="food in good.foods" :key="food">
              <div class="food-img">
                <img :src="food.image" alt="">
              </div>
              <div class="food-info">
                <p class="name">{{food.name}}</p>
                <p class="description">{{food.description}}</p>
                <p class="count-rate">
                  <span>月销售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}</span>
                </p>
                <p class="price">
                  <span class="curPrice">{{food.price}}</span>
                  <span class="oldPrice">{{food.oldPrice}}</span>
                </p>
              </div>
              <div class="add-food">
                - 1 +
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shoppingcar></shoppingcar>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .goods
    display:flex
    position:absolute
    left:0
    top:174px
    bottom:46px
    overflow:hidden
    .menu-wrapper
      flex: 0 0 80px
      width:80px
      overflow:auto
      background-color:#f3f5f7
      .menu-item
        padding:0 12px
        display:table
        height:54px
        width:56px
        .text
          width:56px
          font-size:12px
          line-height:14px
          display: table-cell
          vertical-align:middle
          border-1px(rgba(7,17,27,0.1))
          .icon
            display:inline-block
            width:12px
            height:12px
            background-repeat:no-repeat
            background-size:12px 12px
            &.discound
              bg-img('discount_3')
            &.decrease
              bg-img('decrease_3')
            &.invoice
              bg-img('invoice_3')
            &.special
              bg-img('special_3')
            &.guarantee
              bg-img('guarantee_3')
        &.active
          background-color:#fff
          position:relative
          top:-1px
          .text
            font-weight:700
            no-border()
    .goods-wrapper
      flex:1
      overflow: auto
      .good-list
        .good-item
          .good-name
            background-color:#d9dde1
            .text
              display:inline-block
              height:26px
              line-height:26px
              font-size:12px
              padding-left:12px
              margin-left:2px
              color:rgb(147,153,179)
              background-color:#f3f5f7
              width:100%
          .food-list
            .food-item
              padding:18px
              display:flex
              .food-img
                flex: 0 0 57px
                width:57px
                margin-right:10px
                img
                  width:100%
                  height:57px
                  border-radius:3px
              .food-info
                flex:1
                .name
                  font-size:14px
                  line-height:14px
                  font-weight:700
                  margin:2px 0 8px 0
                .description,.count-rate
                  margin-bottom:8px
                  color: rgb(147,153,159)
                  font-size:10px
                  line-height:10px
</style>

<script>
  import shoppingCar from '@/components/shoppingCar/shoppingCar';
  const ERROR_NO = 0;
  export default{
    data() {
      return {
        goods: []
      };
    },
    components: {
      'shoppingcar': shoppingCar
    },
    computed: {
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$axios.get('api/goods').then((res) => {
        var data = res.data;
        if (data.errno === ERROR_NO) {
          this.goods = data.data;
        }
        console.log(this.goods);
      });
    }
  };
</script>
