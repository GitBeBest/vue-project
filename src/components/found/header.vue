<template>
    <div class="m-top">
        <div class="wrap">
            <div class="m-radio-in">
                <span class="">ting</span>
            </div>
            <div class="m-search">
                <span>
                    <input id="song" class="m-search-input" placeholder="单曲/歌手/专辑/歌单/MV"/>
                </span>
            </div>
            <div class="m-listen">
                <span class="">ting</span>
            </div>
        </div>
    </div>
</template>

<script>
export default{
  name: 'found-header',
  data () {
    return {}
  }
}
</script>

<style scoped>
    @import '../../assets/css/core.css';
    .m-search-input{
        opacity: 1;
        width: 100%;
        height: 30px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
    }
</style>