<template>
    <div class="home">
        <div class="main">
            <router-view></router-view>
        </div>
        <!--<div class="app-footer">@MaChao & Built with Node.js,Express,MongoDB,Vue,vue-router and iview & all source code shared</div>-->
        <BackTop></BackTop>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    html,body{
        height: 100%;
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
        width: 60%;
        padding-bottom: 40px;
        margin:0 auto;
        position: relative;
        box-sizing: border-box;
    }

    .main {
        background-color: #fff;
        width: 100%;
        height: 100%;
    }

    .app-footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 40px;
        font-size: 14px;
        padding-top: 10px;
        margin:0 auto;
        text-align: center;
        background-color: #fff;
        border-top: solid 1px #dddddd;
        color: #808695;
        opacity:0.5;
    }

    .ivu-layout-header{
        background: #cfd6dc;
    }
</style>
