<template>
    <div id="my-friend-page">
        我的朋友
        <MyFoot></MyFoot>
    </div>
</template>

<script>
import MyFoot from '../../components/footer.vue';
export default{
    name: 'myFriends',
    data () {
        return {}
    },
    components: {
        MyFoot
    }
}
</script>