<style>
  .m-list {
    box-shadow:inset 1px 1px 2px 1px #aaa;
    padding:5px;
    background: #F2F8F9;
  }
  .m-list li{
    border: 1px solid #aaa;
    margin: 5px 0;
    padding: 5px;
    box-sizing: border-box;
  }
  .m-list span{
    font-size: 12px;
  }
  .m-list h1{
    font-size:14px
  }
  .m-list .jobsinfo .title{
    color:#0cb194;
    font-size: 14px;
  }
  .m-list .createDate{
    font-size: 12px;
    color:#aaa;
  }
  .m-list .salary{
    color:rgb(238, 39, 45);
  }
</style>
<template>
  <div class="m-list">
    <h1>jobs数据</h1>
    <ul>
      <li v-for="job in jobsList" class="job">
        <div class="jobsinfo">
          <h1 class="title">
            <a :href="lagouUrlMaker(job.positionId)" target = "_blank" :title="job.positionName" >{{ job.positionName|ellipsisTen }}[{{ job.district | ellipsisFive}}]</a>
          </h1>
          <div class="info">
            <span class="salary">{{ job.salary }}</span>
            <span class="workyear">经验{{job.workYear}}</span>
            <span class="education">/ {{job.education}}</span>
            <span class="createDate">{{ job.createDate }}</span>
          </div>
        </div>
        <div class="companyinfo">
          <h1 class="company">
            <a href=""></a>
          </h1>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  data () {
    return {
    }
  },
  props: ['jobsList'],
  filters: {
    ellipsisFive (value) {
      if (!value) { return '' }
      if (value.length <= 5) { return value }
      return value.slice(0, 6) + '...'
    },
    ellipsisTen (value) {
      if (!value) { return '' }
      if (value.length <= 11) { return value }
      return value.slice(0, 11) + '...'
    }
  },
  methods: {
    lagouUrlMaker (id) {
      if (!id) { return '' }
      return 'https://www.lagou.com/jobs/' + id + '.html'
    }
  }
}

</script>
