<template>
    <div class="detail-wrap">
        <Card class="title-card">
            <div style="text-align:center">
                <Tooltip content="点击查看详情" placement="right">
                    <h2 @click="getDetail('P',paper.code)" class="item-title">{{this.paper.title}}</h2>
                </Tooltip>
                <h4>{{'问卷码: '+this.paper.code+'    截至:' + paper.dateLine}}</h4>
                <h4>{{'创建人:' + paper.creator + ' 创建日期:' +paper.date+'   联系方式:' +paper.contact}}</h4>
            </div>
        </Card>
        <Card class="card-item">
            <Card v-for="(question,index) in paper.questions" :key="index" :bordered="false"
                  class="question-card card-item  question-list">
                <p slot="title">
                    <span>{{question.title}}</span>
                </p>
                <p>题目类型:{{question.type}} 必填{{question.required}}</p>
                <div v-if="question.type !== 'INPUT'">
                    <p v-for="item in question.items" :key="item.index">
                        <span class="item-index">{{item.index}}</span>
                        <span class="item-content">{{item.content}}</span>
                    </p>
                </div>
                <div v-else>
                    <P></P>
                </div>
            </Card>
        </Card>
    </div>
</template>
<script>
    /* eslint-disable */
    var paperMock = {
        code: '123456',
        title: '九月份职业培训调查',
        date:'2018.8.8',
        dateLine: '2018.10.8',
        creator:'machao',
        contact:'19911122333',
        description: '职业培训调查',
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
                answers: [
                    /*{code:'',required:true,answer:{}}*/
                ]
            }
        },
        created() {
            this.fetchData();
            this.paper.questions && (this.answers = this.paper.questions.map(function (question) {
                var answer;
                switch (question.item) {
                    case 'SINGLE':
                        answer = '';
                        break;
                    case 'MULTIPLE':
                        answer = [];
                        break;
                    case 'INPUT':
                        answer = '';
                        break;
                }
                return {code: question.code, required: question.required, answer: answer};
            }));
        },
        methods: {
            fetchData() {
                // this.paper = paperMock;
                console.log(this.paperId)
                this.$fetch.get('/api/paperDetail',{paperId:this.paperId},json=>{
                    this.paper = json;
                })
            },
            getDetail(type, code) {
                var title = '';
                var content = '';
                if (type === 'P') {
                    title = code + '  ' + this.paper.title;
                    content = this.paper.description;
                } else if (type === 'Q') {
                    var currentQuestion = this.paper.questions.filter(function (question) {
                        return question.code === code;
                    })[0];
                    title = (Number(code) + 1) + ' . ' + currentQuestion.title;
                    content = currentQuestion.description;
                    console.log(currentQuestion);
                }
                this.$Modal.confirm({
                    title: title,
                    content: '<p>' + content + '</p>',
                    okText: '确定',
                    cancelText:' ',
                });
            },
        }
    }
</script>
<style scoped>
    .ivu-radio-wrapper {
        white-space: pre-wrap !important;
        word-break: break-all !important;
    }

    .ivu-radio-group-vertical .ivu-radio-wrapper {
        height: auto;
    }

    .detail-wrap {
        height: 100%;
        width: 100%;
        background-color: rgb(238, 238, 238);
    }

    .item-title {
        cursor: pointer;
    }

    .title-card {
        padding: 20px;
    }

    .question-card {
        width: 100%;
        background: #eee;
        padding: 20px;
        text-align: left;
        margin-bottom: 6px;
    }

    .item-index {
        margin-left: 6px;
        color: rosybrown;
        font-size: 18px;
        font-weight: 600;
    }

    .item-content {
        width: 400px;
        margin-left: 6px;
        font-size: 16px;
        word-wrap: break-word;
        word-break: break-all;
    }

    .action-button {
        margin-left: 14px;
    }
</style>