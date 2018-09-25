<template>
    <div class="analysis-wrap">
        <Card class="title-card">
            <p slot="title" class="title-text">
                <span>答卷分析</span>
            </p>
        </Card>
        <Card class="title-card card-item">
            <div style="text-align:center">
                <Tooltip content="点击查看详情" placement="right">
                    <h2 @click="getDetail('P',paper.code)" class="item-title">{{this.paper.title}}</h2>
                </Tooltip>
                <h4>{{'问卷码: '+this.paper.code+' 截至:' + paper.dateLine}}</h4>
                <h4>{{'创建人:' + paper.creator + ' 创建日期:' +paper.createDate+' 联系方式:' +paper.contact}}</h4>
            </div>
        </Card>
        <Card class="content-card card-item">
            <Table v-if="tableColumns" width="auto" height="auto" border :columns="tableColumns" :data="tableData"></Table>
        </Card>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                paperId: this.$route.params.paperId,
                paper: {},
                tableColumns: [
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'left',
                        width: 70,
                        align:'center',
                        render: (h,params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click: () => {
                                            this.deleteItem(params.index)
                                        }
                                    }
                                }, '[DEL]')
                            ]);
                        }
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        width: 100,
                        fixed: 'left',
                        align:'center',
                    },
                    {
                        title: '工号',
                        key: 'number',
                        width: 100,
                        align:'center',
                    },
                    {
                        title: '部门',
                        key: 'department',
                        width: 100,
                        align:'center',
                    },
                    {
                        title: '备注',
                        key: 'remark',
                        width: 200,
                        align:'center',
                    },

                ],
                tableData: [],
            }
        },
        created() {
            this.fetchData(() => {
                this.paper.questions&&this.paper.questions.forEach(question => {
                    this.tableColumns.push({
                        title: '第' + (Number(question.index) + 1) + '题',
                        key: question.index,
                        width: 150,
                        align:'center',
                    });
                });
                var answerList = this.paper.answerList;
                if(answerList && Object.prototype.toString.call(answerList) === '[object Array]'){
                    answerList.forEach(answerObj => {
                        var column = {
                            number: answerObj.number,
                            name: answerObj.name,
                            department: answerObj.department,
                            remark: answerObj.remark,
                        };
                        answerObj.answers.forEach(function (answer) {
                            column[answer.index] = answer.answer.toString();
                        });
                        this.tableData.push(column);
                    });
                }
            });
        },
        methods: {
            fetchData(_callBack) {
                // this.paper = paperMock;
                this.$fetch.get('/api/paperAnalysis',{paperId:this.paperId},json=>{
                    this.paper = json;
                    _callBack();
                })
            },
            deleteItem(index){
                var answerId = this.paper.answerList[index]._id;
                this.$Modal.confirm({
                    title: '确认',
                    content: '<p>确定删除此回卷</p>',
                    onOk: () => {
                        var indexA = this.paper.answerList.findIndex(function (anobj) {
                            return anobj._id === answerId;
                        });
                        if(indexA !== -1){
                            this.$fetch.get('/api/deleteAnswer',{answerId,paperId:this.paperId},res =>{
                                if(res === 200){
                                    this.paper.answerList.splice(indexA, 1);
                                    this.tableData.splice(indexA, 1);
                                }
                            });
                        }
                    },
                    onCancel: () => {
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .title-card{
        text-align: center;
        font-size: large;
    }

    .title-text {
        font-size: 18px;
    }
</style>