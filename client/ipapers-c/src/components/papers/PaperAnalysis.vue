<template>
    <div class="analysis-wrap">
        <Card class="title-card card-item">
            <div style="text-align:center">
                <Tooltip content="点击查看详情" placement="right">
                    <h2 @click="getDetail('P',paper.code)" class="item-title">{{this.paper.title}}</h2>
                </Tooltip>
                <h4>{{'问卷码: '+this.paper.code+' 截至:' + paper.dateLine}}</h4>
                <h4>{{'创建人:' + paper.creator + ' 创建日期:' +paper.date+' 联系方式:' +paper.contact}}</h4>
            </div>
        </Card>
        <Card class="content-card card-item">
            <Table v-if="tableColumns" width="auto" height="auto" border :columns="tableColumns" :data="tableData"></Table>
        </Card>
    </div>
</template>
<script>
    /* eslint-disable */
    var paperMock = {
        code: '123456',
        title: '九月份职业培训调查',
        date: '2018.8.8',
        dateLine: '2018.10.8',
        creator: 'machao',
        contact: '19911122333',
        description: '职业培训调查',
        answerList: [
            {
                id:'1111a',
                number: '1001',
                name: 'jack',
                department: 'dev',
                remark: 'qq',
                answers: [
                    {
                        code: '0',
                        type: 'SINGLE',
                        answer: 'A',
                    },
                    {
                        code: '1',
                        type: 'MULTIPLE',
                        answer: ['A', 'B', 'D'],
                    },
                    {
                        code: '2',
                        type: 'INPUT',
                        answer: 'WWWWWOOOOOWWWW11111',
                    },
                ]
            },
            {
                id:'222a',
                number: '2002',
                name: 'pppit',
                department: 'sup',
                remark: 'wwwqq',
                answers: [
                    {
                        code: '0',
                        type: 'SINGLE',
                        answer: 'C',
                    },
                    {
                        code: '1',
                        type: 'MULTIPLE',
                        answer: ['B', 'C'],
                    },
                    {
                        code: '2',
                        type: 'INPUT',
                        answer: 'QQQQQQQQ22222',
                    },
                ]
            },
        ],
        questions: [
            {
                code: '0',
                title: '第一个问题是单选',
                required: true,
                type: 'SINGLE',
                description: '第1个问题',
                items: [
                    {
                        index: 'A', content: '选项aaaaaaaaaaaaa'
                    },
                    {
                        index: 'B', content: '选项aaaaaaaaaaaaabbbbbb'
                    },
                    {
                        index: 'C', content: '选项aaaaaaaaaaaaaccccc'
                    },
                    {
                        index: 'D',
                        content: 'ddd dd dddd dd ddd dddddddd dddd dddddd'
                    },
                ]
            },
            {
                code: '1',
                title: '第二个问题是多选',
                required: true,
                type: 'MULTIPLE',
                description: '第2个问题',
                items: [
                    {index: 'A', content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},
                    {index: 'B', content: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'},
                    {index: 'C', content: 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc'},
                    {index: 'D', content: 'dddddddddddddddddddddddddddddddddddddddddddddddddddd'},
                ]
            },
            {
                code: '2',
                title: '第三个问题是填空',
                required: true,
                type: 'INPUT',
                description: '第3个问题',
            },
        ]
    };
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
                                            this.deleteItem(params)
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
            this.fetchData();
            this.paper.questions.forEach(question => {
                this.tableColumns.push({
                    title: '第' + (Number(question.code) + 1) + '题',
                    key: question.code,
                    width: 150,
                    align:'center',
                });
            });
            this.paper.answerList.forEach(answerObj => {
                var column = {
                    number: answerObj.number,
                    name: answerObj.name,
                    department: answerObj.department,
                    remark: answerObj.remark,
                };

                answerObj.answers.forEach(function (answer) {
                    column[answer.code] = answer.answer.toString();
                });
                this.tableData.push(column);
            });
        },
        methods: {
            fetchData() {
                // this.paper = paperMock;
                this.$fetch.get('/api/paperAnalysis',{paperId:this.paperId},json=>{
                    this.paper = json;
                })
            },
            deleteItem(index){
                var answerId = this.paper.answerList[index].id;
                this.$Modal.confirm({
                    title: '确认',
                    content: '<p>确定删除此问卷</p>',
                    onOk: () => {
                        var index = this.papers.findIndex(function (paper) {
                            return paper.id === paperId;
                        });
                        if(index !== -1){
                            this.$fetch.get('/api/deleteAnswer',{answerId},res =>{
                                if(res === 200){
                                    this.papers.answerList.splice([index], 1);
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

</style>