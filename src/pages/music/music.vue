<template>
    <div id="my-music-page">
        我的音乐
        <MyFoot></MyFoot>
    </div>
</template>

<script>
import MyFoot from '../../components/footer.vue';
export default{
    name: 'myMusic',
    data () {
        return {
            'songList':[],
        }
    },
    components: {
        MyFoot
    },
    created: function () {
        this.$http.post('/api/search/get/',{
            s: '玫瑰色的你',
            limit: 20,
            type: 1,
            offset: 0,
        }, {
            headers: {
                appver: '1.5.2'
            },
            emulateJSON: true
        }).then(response => {
            this.songList = response.body;
        }, response => {

        });
    }
}
</script>