<template>
    <div id="my-account-page">
        我的账户
        <MyFoot></MyFoot>
    </div>
</template>

<script>
import MyFoot from '../../components/footer.vue';
export default{
    name: 'myAccount',
    data () {
        return {}
    },
    components: {
        MyFoot
    }
}
</script>