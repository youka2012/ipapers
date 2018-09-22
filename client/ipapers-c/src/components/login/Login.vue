<template>
    <div class="login-wrap">
        <Card :bordered="false" class="card-login">
            <Form v-if="!isLoginForm" ref="codeForm" :model="codeData" :rules="ruleCodeForm" key="codeForm"
                  class="login-form">
                <FormItem prop="code">
                    <Input type="text" v-model="codeData.code" placeholder="请输入问卷码" class="input-account login-input"
                           clearable autofocus>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="success" class="button-enter button-left" size="large"
                            @click.enter="onEnter('codeForm')" ghost>Enter
                    </Button>
                    <Button type="text" class="button-login" @click="toggleFormType('codeForm')">I'm Investigator
                    </Button>
                </FormItem>
            </Form>

            <Form v-if="isLoginForm" ref="loginForm" :model="loginData" :rules="ruleLoginForm" key="loginForm"
                  class="login-form">
                <FormItem prop="account">
                    <Input type="text" v-model="loginData.account" placeholder="请输入账号" class="input-account login-input"
                           clearable>
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="loginData.password" placeholder="请输入密码"
                           class="input-password login-input"
                           clearable>
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="success" class="button-login button-left" size="large"
                            @click.enter="onEnter('loginForm')" ghost>Login
                    </Button>
                    <Button type="warning" class="button-back" size="large" @click="toggleFormType('loginForm')" ghost>
                        Back
                    </Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoginForm: false,
                codeData: {
                    code: ''
                },
                ruleCodeForm: {
                    code: [
                        {required: true, message: 'Please fill in code.', trigger: 'blur'}
                    ],
                },
                loginData: {
                    account: '',
                    password: ''
                },
                ruleLoginForm: {
                    account: [
                        {required: true, message: 'Please fill in account.', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: 'Please fill in password.', trigger: 'blur'},
                    ]
                }
            }
        },
        methods: {
            onEnter: function (form) {
                if (form === 'codeForm') {
                    this.$router.push('/blank/'+this.codeData.code);
                } else if (form === 'loginForm') {
                    this.$router.push('/paper');
                } else {
                    return null;
                }

                /*this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })*/
                /* if (this.code === '') {
                     console.log(9);
                 } else {
                     this.axios.get('/api/enter')
                         .then(function (res) {
                             console.log(res.data)
                         }).catch(function (err) {
                         if (err.response) {
                             console.log(err.response)
                         }
                     })
                 }*/
                /* this.axios.post('/api/enter', this.qs.stringify({account: this.account, password: this.password}))
                     .then(function (res) {
                         console.log(res.data)
                     }).catch(function (err) {
                     if (err.response) {
                         console.log(err.response)
                     }
                 })*/
            },
            toggleFormType: function (form) {
                this.$refs[form].resetFields();
                this.isLoginForm = !this.isLoginForm;
            },
        }
    }
</script>

<style scoped>
    .login-wrap {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-login {
        padding: 20px 40px;
        background: aliceblue;
    }

    .login-form {
        width: 360px;
        margin: auto;
    }

    .login-input {
        width: 300px;
        margin-top: 20px;
    }

    .button-left {
        margin-right: 10px;
    }

    .button-login {
        margin-left: 10px;
        color: #2db7f5;
        font-size: 13px;
    }


</style>
