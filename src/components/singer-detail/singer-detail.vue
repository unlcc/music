<template>
  <div class="singer-detail">
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="scss">
    @import "~common/scss/variable";
    @import "~common/scss/mixin";

    .singer-detail{
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: $color-background;
    }
    .slide-enter-active, .slide-leave-active{
        transition: all 0.3s
    }
    .slide-enter, .slide-leave-to{
        transform: translate3d(100%, 0, 0)
    }
</style>