<template>
  <div>
    <v-header :seller="seller"></v-header>
    <!-- 弹性和模型 -->
    <div class="tab-list border-1px">
      <div class="tab-item">
        <!-- note vue-router 默认路由active没有掉问题 在默认路由后面加上一个 exact -->
        <router-link to="/" exact>商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scope>
  @import "../../common/stylus/mixin.styl";
  .tab-list
    display: flex
    height: 40px
    line-height: 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex: 1
      text-align: center
      & a
        display: block
        color: rgb(77,85,93)
        font-size: 14px
        &.active
          color: rgb(240,20,20)
</style>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';
  const ERROR_NO = 0;
  export default{
    data() {
      return {
        seller: {
          type: Object
        }
      };
    },
    components: {
      'v-header': header
    },
    // 获取数据
    created() {
      this.$axios.get('api/sellers').then((res) => {
        var data = res.data;
        if (data.errno === ERROR_NO) {
          this.seller = data.data;
        }
      });
    }
  };
</script>
