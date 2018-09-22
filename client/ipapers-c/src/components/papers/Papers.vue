<template>
    <div>
        <div class="menu-wrap">
            <a href="javascript:void (0);" class="action-button">
                <Icon type="md-add-circle"/>
            </a>
            <a href="javascript:void (0);" class="action-button">
                <Icon type="md-planet" />
            </a>
            <a href="javascript:void (0);" class="action-button">
                <Icon type="md-log-out" />
            </a>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped>
    .menu-wrap {
        color: black;
        text-align: right;
    }

    .action-button {
        font-size: 28px;
        color: black;
        margin: 10px 20px;
    }
</style>