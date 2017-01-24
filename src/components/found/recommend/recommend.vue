<template>
    <div class="found-recommend">
        <div class="head-banner">
            <swiper :imgs="imgs"></swiper>
        </div>
        <div class="found-recommend">
            <recommend></recommend>
        </div>
        <div class="found-list">
            <TypeList></TypeList>
        </div>
    </div>
</template>

<script>
import swiper from './banner.vue'
export default{
    name: 'recommend',
    data () {
        return {
            imgs : [
                {smallPicUrl: 'http://p4.music.126.net/vGzu5e7Eey5-cusiYeyMMQ==/18689498650660539.jpg'},
                {smallPicUrl: 'http://p4.music.126.net/TJopM3pZo-2lQC_rv21Rhg==/18724683022768348.jpg'},
                {smallPicUrl: 'http://p3.music.126.net/_nXXHzCjXBYCSMLT8Z0zwA==/18607035278588950.jpg'},
                {smallPicUrl: 'http://p3.music.126.net/MimetCIytBC8MbqdyVDtSQ==/18831335650647080.jpg'},
                {smallPicUrl: 'http://p3.music.126.net/ZA41IkEE5YAkzpUCwcvCKA==/18704891813443403.jpg'},
            ]
        }
    },
    components: {
        swiper
    },
    methods: {

    }
}
</script>

<style>
.found-recommend{
    width: 100%;
    height: 100%;
}
</style>