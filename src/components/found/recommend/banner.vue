<template>
    <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgs">
                <img class="img" :src="item.smallPicUrl" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from '../../../assets/js/swiper-3.4.1.min.js'
export default{
  name: 'swiper',
  data () {
    return {
    }
  },
  props: {
    imgs: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      initialSlide: 2,
      direction: 'horizontal',
      speed: 300,
      loop: true,
      pagination: '.swiper-pagination',
      paginationType: 'bullets',
      paginationElement: 'span',
      paginationClickable: true,
      autoplay: 0,
      autoplayDisableOnInteraction: false,
    })
  },
  watch: {
    imgs () {
      this.$nextTick(() => {

      })
    }
  }
}
</script>

<style scoped>
img {
    width: 100%;
    height: auto;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>
