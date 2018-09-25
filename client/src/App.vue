<template>
    <div class="home">
        <Content class="main">
            <router-view></router-view>
        </Content>
        <div class="app-footer">@author MaChao &nbsp;&nbsp;TEL:3715&nbsp;&nbsp; PHONE:61907 <br/> Build with Node.js,Express,MongoDB,Vue,Vue-Router and iView <br/> All source code shared</div>
        <BackTop></BackTop>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    html,body{
        min-height: 100%;
        width: 100%;
        margin: 0;
        background-color: #e8eaec !important;
    }

    .home {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        min-height: 100%;
        width: 72%;
        margin:0 auto;
        position: relative;
        box-sizing: border-box;
        /*padding-bottom: 40px;*/
    }

    .main {
        background-color: #fff;
        width: 100%;
        height: 100%;
    }

    .app-footer {
        bottom: 0;
        width: 100%;
        /*height: 40px;*/
        font-size: 14px;
        padding: 5px 4px;
        text-align: center;
        background-color: #e8eaec;
        /*border-top: solid 1px #dddddd;*/
        color: #808695;
        /*opacity:0.5;*/
    }

    .ivu-layout-header{
        background: #cfd6dc;
    }
</style>
