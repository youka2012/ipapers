import 'whatwg-fetch'
import {Message,LoadingBar} from 'iview';
LoadingBar.config({
    color: '#5cb85c',
    failedColor: '#f0ad4e',
    height: 8
});

// var baseUrl = 'http://localhost:9080';
var baseUrl = '';

function object2String(obj) {
    var arr = [], idx = 0;
    for (let item in obj) {
        arr[idx++] = [item, obj[item]]
    }
    return new URLSearchParams(arr).toString()
}

function commonHandle(json) {
    if (json.code && ([200, 201,300, 400, 401, 500].indexOf(json.code) !== -1) && json.msg) {
        switch (json.code) {
            case 200:
                LoadingBar.finish();
                Message.success('恭喜您，操作成功！');
                break;
            case 300:
                LoadingBar.error();
                Message.warning('嗯...出错了！');
                break;
            case 400:
                LoadingBar.error();
                Message.error('额...操作失败！');
                break;
            case 500:
                LoadingBar.error();
                Message.warning('登陆过期，请重新登陆');
                window.location.href = baseUrl + '/login';
                break;
        }
        if(json.token){
            return true;
        }else if(json.code === 200){
            return 200;
        }else{
            return 400;
        }
    } else {
        LoadingBar.finish();
        return true;
    }
}

var $storage = window.localStorage;

// 这里 export  的原因是方便组件外使用 MyFetch
const MyFetch = {
    get(_url, _params, _callBack) {
        _url = baseUrl + _url;
        if (_params) {
            if(_url.match(/^\/api*/)){
                _params.token = $storage.getItem('token');
            }
            _url += '?' + object2String(_params);
        }
        LoadingBar.start();
        fetch(_url, {
            method: 'GET',
            credentials: 'include'
        }).then((res) => {
            return res.json();
        }).then((json) => {
            var result = commonHandle(json);
            if (result === 200) {
                _callBack&&_callBack(200);
            }else if(result === true){
                _callBack&&_callBack(json);
            }
        }).catch(err => {
            commonHandle(300);
            console.log(err);
        })
    },
    post(_url, _params, _callBack) {
        if(_params){
            if(_url.match(/^\/api/)){
                _params.token = $storage.getItem('token');
            }
        }
        fetch(_url, {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json' // 指定提交方式为表单提交
            }),
            body: JSON.stringify(_params)
        }).then((res) => {
            return res.json();
        }).then((json) => {
            var result = commonHandle(json);
            if (result === 200) {
                _callBack&&_callBack(200);
            }else if(result === true){
                _callBack&&_callBack(json);
            }
        }).catch(err => {
            commonHandle(300);
            console.log(err);
        })
    },
};

// 将 MyFetch 实例添加到Vue的原型对象上
export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$fetch', {value: MyFetch})
    }
}
