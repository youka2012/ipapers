import fetch from 'fetch';

var baseUrl = '';

// 这里 export  的原因是方便组件外使用 MyFetch
//参数 回调 托管提醒处理
export const MyFetch = {
    getJson(_url, _params, _entrust, _callBack) {
        if(_params){
            _url += '';
        }
        fetch('https://www.baidu.com/search/error.html?a=1&b=2', { // 在URL中写上传递的参数
            method: 'GET'
        })
            .then((res) => {
                return res.text()
            })
            .then((res) => {
                console.log(res)
            })
    },
    getMsg(_url, _params, _entrust, _callBack){

    },
    postJ(_url, _params, entrust, _callBack) {
        fetch(_url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
            }),
            body: new URLSearchParams([["foo", 1], ["bar", 2]]).toString()
        })
            .then((res) => {
                return res.text()
            })
            .then((res) => {
                console.log(res)
            })
    },
    postP(_url, _params, _entrust, _callBack){

    },
};

// 将 MyFetch 实例添加到Vue的原型对象上
export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$fetch', {value: MyFetch})
    }
}
