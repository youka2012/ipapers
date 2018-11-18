<template>
    <div class="wrap-create">
        <Card class="main-title-card">
            <p slot="title" class="title-text">
                <span>新建问卷</span>
            </p>
        </Card>
        <Card class="paper-card card-item">
            <p slot="title" class="card-title">
                <span>出卷人信息</span>
            </p>
            <Form ref="paperForm" :model="paper" :rules="rulePaper" :label-width="100">
                <FormItem label="问卷标题" prop="title">
                    <Input v-model="paper.title" placeholder="Enter the title" clearable></Input>
                </FormItem>
                <FormItem label="截至" prop="dateLine">
                    <DatePicker type="date" format="yyyy-MM-dd" placeholder="Select date"
                                v-model="paper.dateLine"></DatePicker>
                </FormItem>
                <FormItem label="创建者" prop="creator">
                    <Input v-model="paper.creator" placeholder="Enter the creator" clearable></Input>
                </FormItem>
                <FormItem label="联络方式" prop="contact">
                    <Input v-model="paper.contact" placeholder="Enter your cellphone number or email" clearable></Input>
                </FormItem>
                <FormItem label="问卷描述" prop="description">
                    <Input v-model="paper.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                           placeholder="Enter the description..." clearable></Input>
                </FormItem>
                <FormItem label="期望参与数" prop="expect">
                    <Input v-model="paper.expect" placeholder="Enter a number" clearable></Input>
                </FormItem>
            </Form>
        </Card>

        <Card class="card-item">
            <p slot="title" class="card-title">
                <span>问题列表</span>
            </p>
            <Card v-for="(question,index) in paper.questions" :key="index" :bordered="false"
                  class="question-card card-item  question-list">
                <p slot="title">
                    <span>{{index+1 + " . " +question.title}}</span>
                </p>
                <p slot="extra" class="question-delete">
                    <Icon type="ios-close-circle-outline" @click="deleteQuestion(index)"/>
                </p>
                <p>题目类型:{{question.type === 'INPUT'?'【填写题】':(question.type === 'SINGLE'?'【单选题】':'【多选题】')}} {{question.required?'【必答】':'【选答】'}}</p>
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

        <Card class="add-card card-item">
            <p slot="title" class="card-title">
                <span>添加问题</span>
            </p>
            <Form ref="questionForm" :model="newQuestion" :rules="ruleQuestion" :label-width="80">
                <FormItem label="题目" prop="title">
                    <Input v-model="newQuestion.title" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                           placeholder="Enter the question..." clearable></Input>
                </FormItem>
                <FormItem label="" prop="required">
                    <Checkbox class="required-checkbox" v-model="newQuestion.required">必填</Checkbox>
                </FormItem>
                <FormItem label="" prop="type">
                    <RadioGroup v-model="newQuestion.type">
                        <Radio label="SINGLE">单选题</Radio>
                        <Radio label="MULTIPLE">多选题</Radio>
                        <Radio label="INPUT">填写题</Radio>
                    </RadioGroup>
                </FormItem>
                <div v-if="newQuestion.type !== 'INPUT'" style="text-align:left;">
                    <FormItem label="选项数目" prop="itemsSize">
                        <InputNumber :max="12" :min="1" v-model="itemsSize"></InputNumber>
                    </FormItem>
                    <P v-for="(item,index) in newQuestion.items" :key="index" class="question-item-group">
                        <label class="question-item-index">{{questionItemList[index] + " :"}}</label>
                        <Input v-model="item.content" class="question-item-input" type="textarea"
                               :autosize="{minRows: 1,maxRows: 5}" placeholder="Enter the content" clearable></Input>
                    </P>
                </div>
            </Form>

            <div style="text-align:center">
                <Button @click="addQuestion">添加</Button>
            </div>
        </Card>

        <Card class="action-card card-item">
            <div style="text-align:center">
                <Button @click="handleSubmit" type="success">提交问卷表</Button>
            </div>
        </Card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                paper: {
                    title: "",
                    dateLine: "",
                    creator: "",
                    contact: "",
                    description: "",
                    expect: "",
                    questions: [
                        /*{
                                          index:123,
                                          code:'',
                                          title:'',
                                          type:'',
                                          required:true,
                                          items:[
                                              {
                                                  index:'',
                                                  content:'',
                                              }
                                          ]
                                      }*/
                    ]
                },
                rulePaper: {
                    title: [
                        {
                            required: true,
                            message: "The title cannot be empty",
                            trigger: "blur"
                        }
                    ],
                    dateLine: [{required: false}],
                    contact: [
                        {
                            required: true,
                            message: "Please input your contact",
                            trigger: "blur"
                        }
                    ],
                    creator: [
                        {
                            required: true,
                            message: "Please input the creator",
                            trigger: "blur"
                        }
                    ],
                    description: [{required: false}],
                    expect: [
                        {
                            required: true,
                            message: "Please input the creator",
                            trigger: "blur"
                        }
                        // {type: 'number', message: 'Incorrect number format', trigger: 'change'}
                    ]
                },
                questionItemList: [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "H",
                    "I",
                    "J",
                    "K",
                    "L",
                    "M",
                    "N",
                    "O",
                    "P",
                    "Q",
                    "R",
                    "S",
                    "T"
                ],
                itemsSize: 1,
                newQuestion: {
                    // code:'',
                    title: "",
                    type: "SINGLE",
                    required: true,
                    items: [
                        {
                            index: "A",
                            content: ""
                        }
                    ]
                },
                ruleQuestion: {
                    title: [
                        {
                            required: true,
                            message: "The title cannot be empty",
                            trigger: "blur"
                        }
                    ]
                }
            };
        },
        watch: {
            itemsSize: function (newSize, oldSize) {
                var d = 0;
                if (newSize > oldSize) {
                    d = newSize - oldSize;
                    for (var k = 0; k < d; k++) {
                        this.newQuestion.items.push({
                            index: this.questionItemList[oldSize + k],
                            content: ""
                        });
                    }
                } else if (newSize < oldSize) {
                    d = oldSize - newSize;
                    for (var j = 0; j < d; j++) {
                        this.newQuestion.items.pop();
                    }
                }
            }
        },
        methods: {
            addQuestion() {
                this.$refs["questionForm"].validate(valid => {
                    if (valid && (this.newQuestion.type !== 'INPUT'?!this.newQuestion.items.some(item => item.content === ''):true)) {
                        this.$Message.success("验证通过!");
                        this.paper.questions.push(
                            JSON.parse(JSON.stringify(this.newQuestion))
                        );
                        this.itemsSize = 1;
                        this.newQuestion.title = "";
                        this.newQuestion.required = true;
                        this.newQuestion.items[0].content = "";
                    } else {
                        this.$Message.error("验证失败,含有尚未填写的项!");
                    }
                });
            },
            handleSubmit() {
                this.$Modal.confirm({
                    title: "确认",
                    content: "<p>确定新建此问卷?</p>",
                    onOk: () => {
                        this.$refs["paperForm"].validate(valid => {
                            if (valid) {
                                // this.$Message.success('验证通过!');
                                for (var i = 0; i < this.paper.questions.length; i++) {
                                    this.paper.questions[i]["index"] = i;
                                }
                                var dateLine = this.paper.dateLine;
                                this.paper.dateLine = dateLine.getFullYear() +
                                    "-" +
                                    dateLine.getMonth() +
                                    "-" +
                                    dateLine.getDate();
                                this.$fetch.post(
                                    "/api/submitPaper",
                                    {paperData: this.paper},
                                    res => {
                                        if (res === 200) {
                                            this.$Notice.open({
                                                title: "这里是您创建的问卷码" + res.paperCode,
                                                desc: res.paperCode,
                                                duration: 0
                                            });
                                            this.$router.push({
                                                name: "list"
                                            });
                                        }
                                    }
                                );
                            } else {
                                this.$Message.error("数据验证失败,请检查!");
                            }
                        });
                    },
                    onCancel: () => {
                    }
                });
            },
            deleteQuestion(index){
                this.paper.questions.splice(index,1);
            },
        }
    };
</script>
<style scoped>
    .ivu-date-picker {
        display: block;
        width: 216px;
    }

    .ivu-form-item-content {
        width: 180px !important;
    }

    .question-list {
        text-align: left !important;
        background-color: aliceblue;
    }

    .required-checkbox {
        width: 120px !important;
    }

    .wrap-create {
        height: 100%;
        width: 100%;
        background-color: rgb(238, 238, 238);
        text-align: left;
        padding-top: 4px;
    }

    .main-title-card{
        text-align: center;
        font-size: large;
    }

    .title-text {
        font-size: 18px;
    }

    .card-item {
        padding: 10px 6px;
        margin-bottom: 8px;
    }

    .card-title {
        text-align: center;
    }

    .question-delete{
        cursor: pointer;
        font-size: 28px;
    }

    .question-item-group {
        margin: 30px 50px;
    }

    .question-item-index {
        width: 8%;
        color: rosybrown;
        padding-left: 1px;
    }

    .question-item-input {
        width: 92%;
        padding-left: 8px;
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
</style>