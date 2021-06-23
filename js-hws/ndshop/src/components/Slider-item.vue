<template>
  <div class="slider-item">
      <img :src="require('../assets/'+ item_data.img)" alt="">
  </div>
</template>

<script>
export default {
    name: 'SliderItem',
    props:{
        item_data:{
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>
    img{
        width: 160px;
    }
</style>