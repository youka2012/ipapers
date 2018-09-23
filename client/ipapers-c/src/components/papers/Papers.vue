<template>
    <div>
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
            this.userName = this.$route.query.userName;
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
    .menu-wrap {
        color: black;
        background-color: #f8f8f9;
    }

    .user-name {
        width: 180px;
        height: 80px;
        /*border:20px solid #a1a1a1;*/
        border-radius: 60px;
        background-color: #555;
        color: #fff;
        position: fixed;
        top:-40px;
        right: 0;
        line-height: 40px;
        text-align:center;
        vertical-align: center;
        padding-left: 12px;
        font-size: 15px;
    }

    .user-name-text{
        position: relative;
        top:36px;
    }

    .user-name-icon {
        margin-right: 4px;
        font-size: 25px;
    }

    .menu-actions {
        position: fixed;
        right: 16%;
        top: 40px;
    }

    .action-button {
        font-size: 28px;
        color: black;
        margin: 10px 20px;
    }
</style>