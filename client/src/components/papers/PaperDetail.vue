<template>
    <div class="detail-wrap">
        <Card class="title-card">
            <p slot="title" class="title-text">
                <span>问卷详情</span>
            </p>
        </Card>
        <Card class="title-card">
            <div style="text-align:center">
                <Tooltip content="点击查看详情" placement="right">
                    <h2 @click="getDetail('P',paper.code)" class="item-title">{{this.paper.title}}</h2>
                </Tooltip>
                <h4>{{'问卷码: '+this.paper.code+'截至:' + paper.dateLine}}</h4>
                <h4>{{'创建人:' + paper.creator + ' 创建日期:' +paper.createDate+'   联系方式:' +paper.contact}}</h4>
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
            this.fetchData(() => {
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
            });
        },
        methods: {
            fetchData(_callBack) {
                // this.paper = paperMock;
                this.$fetch.get('/api/paperDetail',{paperId:this.paperId},json=>{
                    this.paper = json;
                    _callBack();
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
        text-align: center;
        font-size: large;
    }

    .title-text {
        font-size: 18px;
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