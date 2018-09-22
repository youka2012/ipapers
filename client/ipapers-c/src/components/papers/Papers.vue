<template>
    <div>
        <div class="menu-wrap">

        </div>
        <div class="menu-actions">
            <a @click="addPaper" href="javascript:void (0);" class="action-button">
                <Icon type="md-add-circle"/>
            </a>
            <br>
            <a @click="logout" href="javascript:void (0);" class="action-button">
                <Icon type="md-log-out"/>
            </a>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        methods: {
            addPaper() {
                this.$router.push('/paper/create');
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

    .menu-actions{
        position: fixed;
        right:16%;
        top:40px;
    }

    .action-button {
        font-size: 28px;
        color: black;
        margin: 10px 20px;
    }
</style>