<template>
  <div class="shoppingCar">
    {{msg}}
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
  .shoppingCar
    position:fixed
    left:0
    bottom:0
    height:46px
    width:100%
    background-color: #141d27
    color:#fff
</style>

<script>
  export default{
    data() {
      return {
        msg: 'this is shoping car!'
      };
    }
  };
</script>
