<template>
    <div class="blank-wrap">
        <Card class="title-card">
            <div style="text-align:center">
                <Tooltip content="点击查看详情" placement="right">
                    <h2 @click="getDetail('P',paper.code)" class="item-title">{{this.paper.title}}</h2>
                </Tooltip>
                <h4>{{'问卷码: '+this.paper.code+' 截至:' + paper.dateLine}}</h4>
                <h4>{{'创建人:' + paper.creator + ' 创建日期:' +paper.createDate+' 联系方式:' +paper.contact}}</h4>
            </div>
        </Card>

        <Card class="profile-card card-item">
            <Form ref="profileForm" :model="profile" :rules="ruleProfile" :label-width="100" inline>
                <FormItem label="工号" prop="number">
                    <Input v-model="profile.number" placeholder="Enter your number" clearable/>
                </FormItem>
                <FormItem label="姓名" prop="name">
                    <Input v-model="profile.name" placeholder="Enter your name" clearable/>
                </FormItem>
                <FormItem label="部门" prop="department">
                    <Input v-model="profile.department" placeholder="Enter your department" clearable/>
                </FormItem>
                <FormItem label="联系方式" prop="contact">
                    <Input v-model="profile.contact" placeholder="Enter your contact" clearable/>
                </FormItem>
                <FormItem label="备注" prop="remark" class="remark-input">
                    <Input v-model="profile.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                           placeholder="Enter the remark..." clearable/>
                </FormItem>
            </Form>
        </Card>

        <div class="question-card" v-for="question in paper.questions" :key="question.index">
            <Card :bordered="false">
                <p slot="title">
                    <Tooltip content="点击查看详情" placement="right">
                        <span @click="getDetail('Q',question.index)" class="item-title">{{(Number(question.index)+1)+' . '+question.title}}{{question.required?'【必答项】':''}}</span>
                    </Tooltip>
                </p>

                <div v-if="question.type === 'SINGLE'">
                    <RadioGroup v-model="answers[question.index].answer[0]" vertical>
                        <Radio v-for="item in question.items" :key="item.index"
                               :label="item.index">
                            <span class="item-index">{{item.index}}</span>
                            <span class="item-content">{{item.content}}</span>
                        </Radio>
                    </RadioGroup>
                </div>
                <div v-else-if="question.type === 'MULTIPLE'">
                    <CheckboxGroup v-model="answers[question.index].answer">
                        <p v-for="item in question.items" :key="item.index">
                            <Checkbox :label="item.index">
                                <span class="item-index">{{item.index}}</span>
                                <span class="item-content">{{item.content}}</span>
                            </Checkbox>
                        </p>
                    </CheckboxGroup>
                </div>
                <div v-else-if="question.type === 'INPUT'">
                    <Input v-model="answers[question.index].answer[0]" type="textarea" :autosize="true"
                           placeholder="请输入..."/>
                </div>
                <div v-else>
                    <P>错误</P>
                </div>
            </Card>
        </div>
        <Card class="action-card">
            <div style="text-align:center">
                <Button @click="submit" type="success" class="action-button" ghost>提交</Button>
                <Button @click="back" type="warning" class="action-button" ghost>返回</Button>
            </div>
        </Card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                paperCode: this.$route.params.paperCode,
                paper: {},
                profile: {
                    number: '',
                    name: '',
                    department: '',
                    remark: ''
                },
                answers: [
                    /*{index:n,required:true,type:'',answer:['',]}*/
                ],
                ruleProfile: {
                    number: [
                        {required: true, message: 'Please input your number', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: 'Please input your name', trigger: 'blur'}
                    ],
                    contact: [
                        {required: true, message: 'Please input your contact', trigger: 'blur'}
                    ],
                    department: [
                        {required: true, message: 'Please input your department', trigger: 'blur'}
                    ],
                    remark: [
                        {required: false}
                    ],
                }
            }
        },
        created() {
            this.fetchData(() => {
                if(this.paper && this.paper.questions){
                    this.answers = this.paper.questions.map(function (question) {
                        return {index: question.index, required: question.required, type: question.type, answer: []};
                    })
                }
            });
        },
        methods: {
            fetchData(_callBack) {
                // this.paper = paperMock;
                this.$fetch.get('/getPaperByCode', {paperCode: this.paperCode}, json => {
                    json && (this.paper = json);
                    _callBack();
                })
            },
            getDetail(type, index) {
                var title = '';
                var content = '';
                if (type === 'P') {
                    title = index + '  ' + this.paper.title;
                    content = this.paper.description;
                } else if (type === 'Q') {
                    var currentQuestion = this.paper.questions.filter(function (question) {
                        return question.index === index;
                    })[0];
                    title = (Number(index) + 1) + ' . ' + currentQuestion.title;
                    content = currentQuestion.description;
                }
                this.$Modal.confirm({
                    title: title,
                    content: '<p>' + content + '</p>',
                    okText: '确定',
                    cancelText: ' ',
                });
            },
            submit() {
                var reply = Object.assign({paperCode:this.paperCode}, this.profile);
                reply.answers = this.answers;
                console.log(reply);
                this.$Modal.confirm({
                    title: "确认",
                    content: "<p>确定提交此答卷?</p>",
                    onOk: () => {
                        this.$refs["profileForm"].validate(valid => {
                            if (valid && !this.answers.some(anObj => {
                                return anObj.required && anObj.answer.length === 0
                            })) {
                                this.$fetch.post("/submitAnswer",
                                    {answer: reply},
                                    res => {
                                        if (res === 200) {
                                            this.$router.push({
                                                name: "login"
                                            });
                                        }
                                    }
                                );
                            } else {
                                this.$Message.error("尚有未选择的项,请检查!");
                            }
                        });
                    },
                    onCancel: () => {
                    }
                });

            },
            back() {
                this.$router.push('/login');
            }
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

    .blank-wrap {
        height: 100%;
        width: 100%;
        background-color: rgb(238, 238, 238);
    }

    .remark-input {
        padding: 0 25%;
        width: 100%;
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
        padding: 10px 20px;
        text-align: left;
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