<template>
<!--发现音乐-->
    <div id="found">
        <FoundHeader></FoundHeader>
        <FoundBody></FoundBody>
        <FoundFooter></FoundFooter>
    </div>
</template>


<script>
  import FoundHeader from '../../components/found/header.vue'
  import FoundBody from '../../components/found/body.vue'
  import FoundFooter from '../../components/footer.vue'
  export default{
    name: 'found',
    data () {

    },
    components: {
      FoundHeader,
      FoundBody,
      FoundFooter
    }
  }
</script>
