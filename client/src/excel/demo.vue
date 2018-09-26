<template>
  <div>
    <Table :columns="columns" :data="data" size="small" ref="table"></Table>
    <br>
    <Button type="primary" size="large" @click="exportData()">
      <Icon type="ios-download-outline"></Icon> Export source data</Button>
  </div>
</template>
<script>
import excel from './tableToExcel.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      columns: [{
          title: '序号',
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名',
          width: 100,
          key: 'xingming'
        },
        {
          title: '个人账号',
          key: 'grzh'
        },
        {
          title: '证件号码',
          key: 'zjhm'
        },
        {
          title: '未通过原因',
          key: 'cwxx'
        }
      ],
      data: [{
        xingming: '张三',
        grzh: '11231',
        zjhm: '123123123123123',
        cwxx: '未通过原因',
      }, {
        xingming: '张三',
        grzh: '11231',
        zjhm: '123123123123123',
        cwxx: '未通过原因',
      }]
    }
  },
  methods: {
    exportData() {
      excel(this.columns, this.$refs.table, '错误报告');
    }
  }
}

</script>