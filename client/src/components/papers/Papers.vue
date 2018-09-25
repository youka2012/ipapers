<template>
    <div class="main-wrap">
        <div class="user-name">
            <span class="user-name-text">{{userName}}</span>
        </div>
        <div class="menu-actions">
            <a @click="addPaper" href="javascript:void (0);" class="action-button" title="新建问卷">
                <Icon type="md-add-circle"/>
            </a>
            <br/>
            <a @click="backPage" href="javascript:void (0);" class="action-button" title="后退">
                <Icon type="ios-arrow-dropleft-circle"/>
            </a>
            <br/>
            <a @click="forwardPage" href="javascript:void (0);" class="action-button" title="前进">
                <Icon type="ios-arrow-dropright-circle"/>
            </a>
            <br v-if="$route.name !== 'list'"/>
            <a v-if="$route.name !== 'list'" @click="goHome" href="javascript:void (0);" class="action-button"
               title="主页">
                <Icon type="md-home"/>
            </a>
            <br/>
            <a @click="logout" href="javascript:void (0);" class="action-button" title="退出登陆">
                <Icon type="md-log-out"/>
            </a>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                userName:'',
            }
        },
        created() {
            this.userName = window.localStorage.getItem('userName');
        },
        methods: {
            addPaper() {
                this.$router.push('/paper/create');
            },
            goHome() {
                this.$router.push('/paper');
            },
            backPage() {
                this.$router.go(-1);
            },
            forwardPage() {
                this.$router.go(1);
            },
            logout() {
                this.$Modal.confirm({
                    title: '确认',
                    content: '<p>确定退出登陆？</p>',
                    onOk: () => {
                        window.localStorage.setItem('token',null);
                        window.localStorage.setItem('userName',null);
                        this.$router.push('/login');
                    },
                    onCancel: () => {
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .main-wrap{
        margin-top: 8px;
    }
    .menu-wrap {
        color: black;
        background-color: #f8f8f9;
    }

    .user-name {
        width: auto;
        height: 60px;
        /*border:20px solid #a1a1a1;*/
        border-radius: 60px;
        background-color: #555;
        color: #fff;
        position: fixed;
        top:-30px;
        right: 6px;
        line-height: 40px;
        text-align:center;
        vertical-align: center;
        padding-left: 12px;
        padding-right: 12px;
        font-size: 15px;
    }

    .user-name-text{
        position: relative;
        top:26px;
    }

    .user-name-icon {
        margin-right: 4px;
        font-size: 25px;
    }

    .menu-actions {
        position: fixed;
        right: 10%;
        top: 40px;
    }

    .action-button {
        font-size: 28px;
        color: black;
        margin: 10px 20px;
    }
</style>