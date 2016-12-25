<script>
import list from './list.vue'
const apis = {
  jobsList: 'http://192.168.0.61/api/lagou'
}
export default {
  data () {
    return {
      apis: apis,
      jobsList: null
    }
  },
  components: {
    list: list
  },
  methods: {
    pullJobList: function () {
      const { jobsList: url } = apis
      this.$http.get(url).then((response) => {
        this.jobsList = response.body
      }, (err) => {
        throw err('[ERROR]' + err)
      })
    }
  },
  created () {
    this.pullJobList()
  }
}
</script>

<template lang="html">
  <div class="job">
		<list class="list" :jobs-list = 'jobsList'></list>
  </div>
</template>

<style lang="css">
.job{
  width:100%;
  height:100%;
  padding:20px;
  box-sizing: border-box;
  text-shadow: 1px 1px 2px #fff ;
}
.list{
  width:300px;
  /*overflow:scroll;*/
}
</style>
