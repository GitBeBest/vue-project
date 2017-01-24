<template>
<!--发现音乐-->
    <div id="found">
        <FoundHeader></FoundHeader>
        <FoundBody></FoundBody>
    </div>
</template>


<script>
  import FoundHeader from '../../components/found/header.vue'
  import FoundBody from '../../components/found/body.vue'
  export default{
    name: 'found',
    data () {
      return {}
    },
    components: {
      FoundHeader,
      FoundBody,
    }
  }
</script>
<style>
#found{
    height:100%;
    width: 100%;
}
</style>
