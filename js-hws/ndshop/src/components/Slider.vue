<template>
  <div class="box">
      <div class="slider"  :style="{'margin-left': '-' + (100*currentSlideId) + '%'}">
          <slider-item v-for="item in slider_data" :key="item.id" :item_data="item"></slider-item>
      </div>
      <div class="btn">
        <button @click="prevSlide"> &lt; </button>
        <button @click="nextSlide"> &gt; </button>
      </div>
  </div>
</template>

<script>
import SliderItem from './Slider-item.vue';
export default {
    name: 'Slider',
    components: {SliderItem},
    props: {
        slider_data:{
            type: Array,
            default: () => []
        }
    },
    methods:{
        prevSlide(){
            if(this.currentSlideId > 0){
                this.currentSlideId --
            }
        },
        nextSlide(){
            if(this.currentSlideId >= this.slider_data.length -1){
                this.currentSlideId = 0
            } else{
                this.currentSlideId ++
            }
        },
    },
    data(){
        return{
            currentSlideId:0
        }
    }
}
</script>

<style scoped>
    .box{
        width: 160px;
        overflow: hidden;
        margin: auto;
    }
    .slider{
        display: flex;
        transition: all ease .5s;
    }
    button{

        background-color: transparent;
        border: transparent;
        cursor: pointer;
    }
    .btn{
        text-align: center;
    }
</style>