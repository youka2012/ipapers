(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("c21b"),r=a.n(n);r.a},"0bc7":function(t,e,a){},"192d":function(t,e,a){},"2aec":function(t,e,a){"use strict";var n=a("d71b"),r=a.n(n);r.a},5535:function(t,e,a){"use strict";var n=a("192d"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Content",{staticClass:"main"},[a("router-view")],1),t._m(0),a("BackTop")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-footer"},[t._v("@author MaChao   TEL:3715   PHONE:61907 "),a("br"),t._v(" Build with Node.js,Express,MongoDB,Vue,Vue-Router and iView "),a("br"),t._v(" All source code shared"),a("br"),a("a",{attrs:{href:"http://ahcainfo.miitbeian.gov.cn"}},[t._v("皖ICP备")]),t._v("18018823号")])}],o={},l=o,c=(a("034f"),a("2877")),p=Object(c["a"])(l,i,s,!1,null,null,null);p.options.__file="App.vue";var u=p.exports,d=a("e069"),f=a.n(d),m=(a("dcad"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-wrap"},[a("Card",{staticClass:"card-login",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v("iPaper问卷系统")])]),t.isLoginForm?t._e():a("Form",{key:"codeForm",ref:"codeForm",staticClass:"login-form",attrs:{model:t.codeData,rules:t.ruleCodeForm}},[a("FormItem",{attrs:{prop:"code"}},[a("Input",{staticClass:"input-code login-input",attrs:{type:"text",placeholder:"请输入问卷码",clearable:"",autofocus:""},model:{value:t.codeData.code,callback:function(e){t.$set(t.codeData,"code",e)},expression:"codeData.code"}},[a("Icon",{attrs:{slot:"prepend",type:"md-barcode"},slot:"prepend"})],1)],1),a("FormItem",[a("Button",{staticClass:"button-enter button-left",attrs:{type:"success",size:"large",ghost:""},on:{click:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.onEnter("codeForm")}}},[t._v("Enter\n                ")]),a("Button",{staticClass:"button-login",attrs:{type:"text"},on:{click:function(e){t.toggleFormType("codeForm")}}},[t._v("我是出卷人\n                ")])],1)],1),t.isLoginForm?a("Form",{key:"loginForm",ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginData,rules:t.ruleLoginForm}},[a("FormItem",{attrs:{prop:"account"}},[a("Input",{staticClass:"input-account login-input",attrs:{type:"text",placeholder:"请输入账号",clearable:""},model:{value:t.loginData.account,callback:function(e){t.$set(t.loginData,"account",e)},expression:"loginData.account"}},[a("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),a("FormItem",{attrs:{prop:"password"}},[a("Input",{staticClass:"input-password login-input",attrs:{type:"password",placeholder:"请输入密码",clearable:""},model:{value:t.loginData.password,callback:function(e){t.$set(t.loginData,"password",e)},expression:"loginData.password"}},[a("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),a("FormItem",[a("Button",{staticClass:"button-login button-left",attrs:{type:"success",size:"large",ghost:""},on:{click:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.onEnter("loginForm")}}},[t._v("Login\n                ")]),a("Button",{staticClass:"button-back",attrs:{type:"warning",size:"large",ghost:""},on:{click:function(e){t.toggleFormType("loginForm")}}},[t._v("\n                    Back\n                ")])],1)],1):t._e()],1)],1)}),h=[],v={data:function(){return{isLoginForm:!1,codeData:{code:""},ruleCodeForm:{code:[{required:!0,message:"Please fill in code.",trigger:"blur"}]},loginData:{account:"",password:""},ruleLoginForm:{account:[{required:!0,message:"Please fill in account.",trigger:"blur"}],password:[{required:!0,message:"Please fill in password.",trigger:"blur"}]}}},created:function(){},methods:{onEnter:function(t){var e=this;if("codeForm"===t)this.$refs[t].validate(function(t){t?e.$fetch.get("/enter",{paperCode:e.codeData.code},function(t){t&&e.$router.push({name:"blank",params:{paperCode:e.codeData.code}})}):e.$Message.error("Fail!")});else{if("loginForm"!==t)return null;this.$refs[t].validate(function(t){t?e.$fetch.post("/login",{name:e.loginData.account,password:e.loginData.password},function(t){t&&t.token&&(window.localStorage.setItem("token",t.token),window.localStorage.setItem("userName",e.loginData.account),e.$router.push({name:"list"}))}):e.$Message.error("Fail!")})}},toggleFormType:function(t){this.$refs[t].resetFields(),this.isLoginForm=!this.isLoginForm}}},b=v,g=(a("59bc"),Object(c["a"])(b,m,h,!1,null,"7ca431d4",null));g.options.__file="Login.vue";var x=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blank-wrap"},[a("Card",{staticClass:"title-card"},[a("div",{staticStyle:{"text-align":"center"}},[a("Tooltip",{attrs:{content:"点击查看详情",placement:"right"}},[a("h2",{staticClass:"item-title",on:{click:function(e){t.getDetail("P",t.paper.code)}}},[t._v(t._s(this.paper.title))])]),a("h4",[t._v(t._s("问卷码: "+this.paper.code+" 截至:"+t.paper.dateLine))]),a("h4",[t._v(t._s("创建人:"+t.paper.creator+" 创建日期:"+t.paper.createDate+" 联系方式:"+t.paper.contact))])],1)]),a("Card",{staticClass:"profile-card card-item"},[a("Form",{ref:"profileForm",attrs:{model:t.profile,rules:t.ruleProfile,"label-width":100,inline:""}},[a("FormItem",{attrs:{label:"工号",prop:"number"}},[a("Input",{attrs:{placeholder:"Enter your number",clearable:""},model:{value:t.profile.number,callback:function(e){t.$set(t.profile,"number",e)},expression:"profile.number"}})],1),a("FormItem",{attrs:{label:"姓名",prop:"name"}},[a("Input",{attrs:{placeholder:"Enter your name",clearable:""},model:{value:t.profile.name,callback:function(e){t.$set(t.profile,"name",e)},expression:"profile.name"}})],1),a("FormItem",{attrs:{label:"部门",prop:"department"}},[a("Input",{attrs:{placeholder:"Enter your department",clearable:""},model:{value:t.profile.department,callback:function(e){t.$set(t.profile,"department",e)},expression:"profile.department"}})],1),a("FormItem",{attrs:{label:"联系方式",prop:"contact"}},[a("Input",{attrs:{placeholder:"Enter your contact",clearable:""},model:{value:t.profile.contact,callback:function(e){t.$set(t.profile,"contact",e)},expression:"profile.contact"}})],1),a("FormItem",{staticClass:"remark-input",attrs:{label:"备注",prop:"remark"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"Enter the remark...",clearable:""},model:{value:t.profile.remark,callback:function(e){t.$set(t.profile,"remark",e)},expression:"profile.remark"}})],1)],1)],1),t._l(t.paper.questions,function(e){return a("div",{key:e.index,staticClass:"question-card"},[a("Card",{attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Tooltip",{attrs:{content:"点击查看详情",placement:"right"}},[a("span",{staticClass:"item-title",on:{click:function(a){t.getDetail("Q",e.index)}}},[t._v(t._s(Number(e.index)+1+" . "+e.title)+t._s(e.required?"【必答项】":""))])])],1),"SINGLE"===e.type?a("div",[a("RadioGroup",{attrs:{vertical:""},model:{value:t.answers[e.index].answer[0],callback:function(a){t.$set(t.answers[e.index].answer,0,a)},expression:"answers[question.index].answer[0]"}},t._l(e.items,function(e){return a("Radio",{key:e.index,attrs:{label:e.index}},[a("span",{staticClass:"item-index"},[t._v(t._s(e.index))]),a("span",{staticClass:"item-content"},[t._v(t._s(e.content))])])}))],1):"MULTIPLE"===e.type?a("div",[a("CheckboxGroup",{model:{value:t.answers[e.index].answer,callback:function(a){t.$set(t.answers[e.index],"answer",a)},expression:"answers[question.index].answer"}},t._l(e.items,function(e){return a("p",{key:e.index},[a("Checkbox",{attrs:{label:e.index}},[a("span",{staticClass:"item-index"},[t._v(t._s(e.index))]),a("span",{staticClass:"item-content"},[t._v(t._s(e.content))])])],1)}))],1):"INPUT"===e.type?a("div",[a("Input",{attrs:{type:"textarea",autosize:!0,placeholder:"请输入..."},model:{value:t.answers[e.index].answer[0],callback:function(a){t.$set(t.answers[e.index].answer,0,a)},expression:"answers[question.index].answer[0]"}})],1):a("div",[a("P",[t._v("错误")])],1)])],1)}),a("Card",{staticClass:"action-card"},[a("div",{staticStyle:{"text-align":"center"}},[a("Button",{staticClass:"action-button",attrs:{type:"success",ghost:""},on:{click:t.submit}},[t._v("提交")]),a("Button",{staticClass:"action-button",attrs:{type:"warning",ghost:""},on:{click:t.back}},[t._v("返回")])],1)])],2)},w=[],C=(a("f751"),a("c5f6"),{data:function(){return{paperCode:this.$route.params.paperCode,paper:{},profile:{number:"",name:"",department:"",remark:""},answers:[],ruleProfile:{number:[{required:!0,message:"Please input your number",trigger:"blur"}],name:[{required:!0,message:"Please input your name",trigger:"blur"}],contact:[{required:!0,message:"Please input your contact",trigger:"blur"}],department:[{required:!0,message:"Please input your department",trigger:"blur"}],remark:[{required:!1}]}}},created:function(){var t=this;this.fetchData(function(){t.paper&&t.paper.questions&&(t.answers=t.paper.questions.map(function(t){return{index:t.index,required:t.required,type:t.type,answer:[]}}))})},methods:{fetchData:function(t){var e=this;this.$fetch.get("/getPaperByCode",{paperCode:this.paperCode},function(a){a&&(e.paper=a),t()})},getDetail:function(t,e){var a="",n="";if("P"===t)a=e+"  "+this.paper.title,n=this.paper.description;else if("Q"===t){var r=this.paper.questions.filter(function(t){return t.index===e})[0];a=Number(e)+1+" . "+r.title,n=r.description}this.$Modal.confirm({title:a,content:"<p>"+n+"</p>",okText:"确定",cancelText:" "})},submit:function(){var t=this,e=Object.assign({paperCode:this.paperCode},this.profile);e.answers=this.answers,console.log(e),this.$Modal.confirm({title:"确认",content:"<p>确定提交此答卷?</p>",onOk:function(){t.$refs["profileForm"].validate(function(a){a&&!t.answers.some(function(t){return t.required&&0===t.answer.length})?t.$fetch.post("/submitAnswer",{answer:e},function(e){200===e&&t.$router.push({name:"login"})}):t.$Message.error("尚有未选择的项,请检查!")})},onCancel:function(){}})},back:function(){this.$router.push("/login")}}}),y=C,k=(a("65e9"),Object(c["a"])(y,_,w,!1,null,"1c69870f",null));k.options.__file="BlankEdit.vue";var I=k.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-wrap"},[a("div",{staticClass:"user-name"},[a("span",{staticClass:"user-name-text"},[t._v(t._s(t.userName))])]),a("div",{staticClass:"menu-actions"},[a("a",{staticClass:"action-button",attrs:{href:"javascript:void (0);",title:"新建问卷"},on:{click:t.addPaper}},[a("Icon",{attrs:{type:"md-add-circle"}})],1),a("br"),a("a",{staticClass:"action-button",attrs:{href:"javascript:void (0);",title:"后退"},on:{click:t.backPage}},[a("Icon",{attrs:{type:"ios-arrow-dropleft-circle"}})],1),a("br"),a("a",{staticClass:"action-button",attrs:{href:"javascript:void (0);",title:"前进"},on:{click:t.forwardPage}},[a("Icon",{attrs:{type:"ios-arrow-dropright-circle"}})],1),"list"!==t.$route.name?a("br"):t._e(),"list"!==t.$route.name?a("a",{staticClass:"action-button",attrs:{href:"javascript:void (0);",title:"主页"},on:{click:t.goHome}},[a("Icon",{attrs:{type:"md-home"}})],1):t._e(),a("br"),a("a",{staticClass:"action-button",attrs:{href:"javascript:void (0);",title:"退出登陆"},on:{click:t.logout}},[a("Icon",{attrs:{type:"md-log-out"}})],1)]),a("router-view")],1)},E=[],P={data:function(){return{userName:""}},created:function(){this.userName=window.localStorage.getItem("userName")},methods:{addPaper:function(){this.$router.push("/paper/create")},goHome:function(){this.$router.push("/paper")},backPage:function(){this.$router.go(-1)},forwardPage:function(){this.$router.go(1)},logout:function(){var t=this;this.$Modal.confirm({title:"确认",content:"<p>确定退出登陆？</p>",onOk:function(){window.localStorage.setItem("token",null),window.localStorage.setItem("userName",null),t.$router.push("/login")},onCancel:function(){}})}}},q=P,F=(a("5535"),Object(c["a"])(q,$,E,!1,null,"265c9b36",null));F.options.__file="Papers.vue";var S=F.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-create"},[a("Card",{staticClass:"main-title-card"},[a("p",{staticClass:"title-text",attrs:{slot:"title"},slot:"title"},[a("span",[t._v("新建问卷")])])]),a("Card",{staticClass:"paper-card card-item"},[a("p",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[a("span",[t._v("出卷人信息")])]),a("Form",{ref:"paperForm",attrs:{model:t.paper,rules:t.rulePaper,"label-width":100}},[a("FormItem",{attrs:{label:"问卷标题",prop:"title"}},[a("Input",{attrs:{placeholder:"Enter the title",clearable:""},model:{value:t.paper.title,callback:function(e){t.$set(t.paper,"title",e)},expression:"paper.title"}})],1),a("FormItem",{attrs:{label:"截至",prop:"dateLine"}},[a("DatePicker",{attrs:{type:"date",format:"yyyy-MM-dd",placeholder:"Select date"},model:{value:t.paper.dateLine,callback:function(e){t.$set(t.paper,"dateLine",e)},expression:"paper.dateLine"}})],1),a("FormItem",{attrs:{label:"创建者",prop:"creator"}},[a("Input",{attrs:{placeholder:"Enter the creator",clearable:""},model:{value:t.paper.creator,callback:function(e){t.$set(t.paper,"creator",e)},expression:"paper.creator"}})],1),a("FormItem",{attrs:{label:"联络方式",prop:"contact"}},[a("Input",{attrs:{placeholder:"Enter your cellphone number or email",clearable:""},model:{value:t.paper.contact,callback:function(e){t.$set(t.paper,"contact",e)},expression:"paper.contact"}})],1),a("FormItem",{attrs:{label:"问卷描述",prop:"description"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"Enter the description...",clearable:""},model:{value:t.paper.description,callback:function(e){t.$set(t.paper,"description",e)},expression:"paper.description"}})],1),a("FormItem",{attrs:{label:"期望参与数",prop:"expect"}},[a("Input",{attrs:{placeholder:"Enter a number",clearable:""},model:{value:t.paper.expect,callback:function(e){t.$set(t.paper,"expect",e)},expression:"paper.expect"}})],1)],1)],1),a("Card",{staticClass:"card-item"},[a("p",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[a("span",[t._v("问题列表")])]),t._l(t.paper.questions,function(e,n){return a("Card",{key:n,staticClass:"question-card card-item  question-list",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(n+1+" . "+e.title))])]),a("p",{staticClass:"question-delete",attrs:{slot:"extra"},slot:"extra"},[a("Icon",{attrs:{type:"ios-close-circle-outline"},on:{click:function(e){t.deleteQuestion(n)}}})],1),a("p",[t._v("题目类型:"+t._s("INPUT"===e.type?"【填写题】":"SINGLE"===e.type?"【单选题】":"【多选题】")+" "+t._s(e.required?"【必答】":"【选答】"))]),"INPUT"!==e.type?a("div",t._l(e.items,function(e){return a("p",{key:e.index},[a("span",{staticClass:"item-index"},[t._v(t._s(e.index))]),a("span",{staticClass:"item-content"},[t._v(t._s(e.content))])])})):a("div",[a("P")],1)])})],2),a("Card",{staticClass:"add-card card-item"},[a("p",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[a("span",[t._v("添加问题")])]),a("Form",{ref:"questionForm",attrs:{model:t.newQuestion,rules:t.ruleQuestion,"label-width":80}},[a("FormItem",{attrs:{label:"题目",prop:"title"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"Enter the question...",clearable:""},model:{value:t.newQuestion.title,callback:function(e){t.$set(t.newQuestion,"title",e)},expression:"newQuestion.title"}})],1),a("FormItem",{attrs:{label:"",prop:"required"}},[a("Checkbox",{staticClass:"required-checkbox",model:{value:t.newQuestion.required,callback:function(e){t.$set(t.newQuestion,"required",e)},expression:"newQuestion.required"}},[t._v("必填")])],1),a("FormItem",{attrs:{label:"",prop:"type"}},[a("RadioGroup",{model:{value:t.newQuestion.type,callback:function(e){t.$set(t.newQuestion,"type",e)},expression:"newQuestion.type"}},[a("Radio",{attrs:{label:"SINGLE"}},[t._v("单选题")]),a("Radio",{attrs:{label:"MULTIPLE"}},[t._v("多选题")]),a("Radio",{attrs:{label:"INPUT"}},[t._v("填写题")])],1)],1),"INPUT"!==t.newQuestion.type?a("div",{staticStyle:{"text-align":"left"}},[a("FormItem",{attrs:{label:"选项数目",prop:"itemsSize"}},[a("InputNumber",{attrs:{max:12,min:1},model:{value:t.itemsSize,callback:function(e){t.itemsSize=e},expression:"itemsSize"}})],1),t._l(t.newQuestion.items,function(e,n){return a("P",{key:n,staticClass:"question-item-group"},[a("label",{staticClass:"question-item-index"},[t._v(t._s(t.questionItemList[n]+" :"))]),a("Input",{staticClass:"question-item-input",attrs:{type:"textarea",autosize:{minRows:1,maxRows:5},placeholder:"Enter the content",clearable:""},model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"item.content"}})],1)})],2):t._e()],1),a("div",{staticStyle:{"text-align":"center"}},[a("Button",{on:{click:t.addQuestion}},[t._v("添加")])],1)],1),a("Card",{staticClass:"action-card card-item"},[a("div",{staticStyle:{"text-align":"center"}},[a("Button",{attrs:{type:"success"},on:{click:t.handleSubmit}},[t._v("提交问卷表")])],1)])],1)},D=[],T={data:function(){return{paper:{title:"",dateLine:"",creator:"",contact:"",description:"",expect:"",questions:[]},rulePaper:{title:[{required:!0,message:"The title cannot be empty",trigger:"blur"}],dateLine:[{required:!1}],contact:[{required:!0,message:"Please input your contact",trigger:"blur"}],creator:[{required:!0,message:"Please input the creator",trigger:"blur"}],description:[{required:!1}],expect:[{required:!0,message:"Please input the creator",trigger:"blur"}]},questionItemList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],itemsSize:1,newQuestion:{title:"",type:"SINGLE",required:!0,items:[{index:"A",content:""}]},ruleQuestion:{title:[{required:!0,message:"The title cannot be empty",trigger:"blur"}]}}},watch:{itemsSize:function(t,e){var a=0;if(t>e){a=t-e;for(var n=0;n<a;n++)this.newQuestion.items.push({index:this.questionItemList[e+n],content:""})}else if(t<e){a=e-t;for(var r=0;r<a;r++)this.newQuestion.items.pop()}}},methods:{addQuestion:function(){var t=this;this.$refs["questionForm"].validate(function(e){e&&"INPUT"!==t.newQuestion&&!t.newQuestion.items.some(function(t){return""===t.content})?(t.$Message.success("验证通过!"),t.paper.questions.push(JSON.parse(JSON.stringify(t.newQuestion))),t.itemsSize=1,t.newQuestion.title="",t.newQuestion.required=!0,t.newQuestion.items[0].content=""):t.$Message.error("验证失败,含有尚未填写的项!")})},handleSubmit:function(){var t=this;this.$Modal.confirm({title:"确认",content:"<p>确定新建此问卷?</p>",onOk:function(){t.$refs["paperForm"].validate(function(e){if(e){for(var a=0;a<t.paper.questions.length;a++)t.paper.questions[a]["index"]=a;var n=t.paper.dateLine;t.paper.dateLine=n.getFullYear()+"-"+n.getMonth()+"-"+n.getDate(),t.$fetch.post("/api/submitPaper",{paperData:t.paper},function(e){200===e&&(t.$Notice.open({title:"这里是您创建的问卷码"+e.paperCode,desc:e.paperCode,duration:0}),t.$router.push({name:"list"}))})}else t.$Message.error("数据验证失败,请检查!")})},onCancel:function(){}})},deleteQuestion:function(t){this.paper.questions.splice(t,1)}}},O=T,j=(a("fded"),Object(c["a"])(O,L,D,!1,null,"e3c9a0f4",null));j.options.__file="PaperCreate.vue";var N=j.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-wrap"},[a("Card",{staticClass:"title-card"},[a("p",{staticClass:"title-text",attrs:{slot:"title"},slot:"title"},[a("span",[t._v("问卷详情")])])]),a("Card",{staticClass:"title-card"},[a("div",{staticStyle:{"text-align":"center"}},[a("Tooltip",{attrs:{content:"点击查看详情",placement:"right"}},[a("h2",{staticClass:"item-title",on:{click:function(e){t.getDetail("P",t.paper.code)}}},[t._v(t._s(this.paper.title))])]),a("h4",[t._v(t._s("问卷码: "+this.paper.code+"截至:"+t.paper.dateLine))]),a("h4",[t._v(t._s("创建人:"+t.paper.creator+" 创建日期:"+t.paper.createDate+"   联系方式:"+t.paper.contact))])],1)]),a("Card",{staticClass:"card-item"},t._l(t.paper.questions,function(e,n){return a("Card",{key:n,staticClass:"question-card card-item  question-list",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(e.title))])]),a("p",[t._v("题目类型:"+t._s("INPUT"===e.type?"【填写题】":"SINGLE"===e.type?"【单选题】":"【多选题】")+" "+t._s(e.required?"【必答】":"【选答】"))]),"INPUT"!==e.type?a("div",t._l(e.items,function(e){return a("p",{key:e.index},[a("span",{staticClass:"item-index"},[t._v(t._s(e.index))]),a("span",{staticClass:"item-content"},[t._v(t._s(e.content))])])})):a("div",[a("P")],1)])}))],1)},Q=[],B={data:function(){return{paperId:this.$route.params.paperId,paper:{},answers:[]}},created:function(){var t=this;this.fetchData(function(){t.paper.questions&&(t.answers=t.paper.questions.map(function(t){var e;switch(t.item){case"SINGLE":e="";break;case"MULTIPLE":e=[];break;case"INPUT":e="";break}return{code:t.code,required:t.required,answer:e}}))})},methods:{fetchData:function(t){var e=this;this.$fetch.get("/api/paperDetail",{paperId:this.paperId},function(a){e.paper=a,t()})},getDetail:function(t,e){var a="",n="";if("P"===t)a=e+"  "+this.paper.title,n=this.paper.description;else if("Q"===t){var r=this.paper.questions.filter(function(t){return t.code===e})[0];a=Number(e)+1+" . "+r.title,n=r.description}this.$Modal.confirm({title:a,content:"<p>"+n+"</p>",okText:"确定",cancelText:" "})}}},A=B,R=(a("2aec"),Object(c["a"])(A,M,Q,!1,null,"eec4dfac",null));R.options.__file="PaperDetail.vue";var z=R.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"analysis-wrap"},[a("Card",{staticClass:"title-card"},[a("p",{staticClass:"title-text",attrs:{slot:"title"},slot:"title"},[a("span",[t._v("答卷分析")])])]),a("Card",{staticClass:"title-card card-item"},[a("div",{staticStyle:{"text-align":"center"}},[a("h2",{staticClass:"item-title",on:{click:function(e){t.getDetail("P",t.paper.code)}}},[t._v(t._s(this.paper.title))]),a("h4",[t._v(t._s("问卷码: "+this.paper.code+"截至:"+t.paper.dateLine))]),a("h4",[t._v(t._s("创建人:"+t.paper.creator+" 创建日期:"+t.paper.createDate+" 联系方式:"+t.paper.contact))])])]),a("Card",{staticClass:"content-card card-item"},[a("p",{attrs:{slot:"title",href:"javascript:void(0);"},slot:"title"},[t._v("\n            答题情况表\n        ")]),a("a",{attrs:{slot:"extra",href:"javascript:void(0);"},on:{click:t.exportExcel},slot:"extra"},[a("span",{attrs:{title:"导出EXCEL文件"}},[t._v("导出")])]),t.tableColumns?a("Table",{ref:"answertable",attrs:{width:"auto",height:"auto",border:"",columns:t.tableColumns,data:t.tableData}}):t._e()],1)],1)},G=[],W=(a("20d6"),a("7f7f"),a("6b54"),a("ac6a"),a("ac4d"),a("8a81"),a("a481"),function(){var t=window.navigator.userAgent;return t.indexOf("MSIE")>=0?"ie":t.indexOf("Firefox")>=0?"Firefox":t.indexOf("Chrome")>=0?"Chrome":t.indexOf("Opera")>=0?"Opera":t.indexOf("Safari")>=0?"Safari":void 0}),H=function(t,e){if("ie"==W()){var a=t,n=new ActiveXObject("Excel.Application"),r=n.Workbooks.Add(),i=r.Worksheets(1),s=document.body.createTextRange();s.moveToElementText(a),s.select,s.execCommand("Copy"),i.Paste(),n.Visible=!0;try{n.Application.GetSaveAsFilename("Excel.xls","Excel Spreadsheets (*.xls), *.xls")}catch(t){print("Nested catch caught "+t)}finally{r.SaveAs(fname),r.Close(savechanges=!1),n.Quit(),n=null,window.setInterval("Cleanup();",1),window.setInterval("Cleanup();",1)}}else J(t,e)},J=function(){var t="data:application/vnd.ms-excel;base64,",e='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body><table>{table}</table></body></html>',a=function(t){return window.btoa(unescape(encodeURIComponent(t)))},n=function(t,e){return t.replace(/{(\w+)}/g,function(t,a){return e[a]})};return function(r,i){var s={worksheet:i,table:r},o=document.createElement("a");o.setAttribute("href",t+a(n(e,s))),o.setAttribute("download",i),o.click()}}(),V=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Worksheet",n=[],r=document.createElement("table"),i=document.createElement("thead"),s=e.$el.getElementsByClassName("ivu-table-tbody")[0].cloneNode(!0),o=document.createElement("tr"),l=!0,c=!1,p=void 0;try{for(var u,d=t[Symbol.iterator]();!(l=(u=d.next()).done);l=!0){var f=u.value;n.push(f.key);var m=document.createElement("th"),h=document.createTextNode(f.title);m.appendChild(h),o.appendChild(m)}}catch(t){c=!0,p=t}finally{try{l||null==d.return||d.return()}finally{if(c)throw p}}i.appendChild(o),r.appendChild(i),r.appendChild(s),console.log(r),H(r.innerHTML,a)},X={data:function(){var t=this;return{paperId:this.$route.params.paperId,paper:{},tableColumns:[{title:"操作",key:"action",fixed:"left",width:70,align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"warning",ghost:!0,size:"small"},on:{click:function(){t.deleteItem(a.index)}}},"删除")])}},{title:"序号",key:"_index",fixed:"left",width:90,align:"center",sortable:!0},{title:"姓名",key:"name",width:100,fixed:"left",align:"center",sortable:!0},{title:"工号",key:"number",width:100,align:"center",sortable:!0},{title:"部门",key:"department",width:100,align:"center",sortable:!0},{title:"备注",key:"remark",width:150,align:"center"}],tableData:[]}},created:function(){var t=this;this.fetchData(function(){t.paper.questions&&t.paper.questions.forEach(function(e){t.tableColumns.push({title:e.title,key:e.index,width:e.title.length>8?200:100,align:"center"})});var e=t.paper.answerList;e&&"[object Array]"===Object.prototype.toString.call(e)&&e.forEach(function(e,a){var n={_index:a+1,number:e.number,name:e.name,department:e.department,remark:e.remark?e.remark:"-"};e.answers.forEach(function(t){n[t.index]=t.answer?t.answer.toString():"-"}),t.tableData.push(n)})})},methods:{fetchData:function(t){var e=this;this.$fetch.get("/api/paperAnalysis",{paperId:this.paperId},function(a){e.paper=a,t()})},deleteItem:function(t){var e=this,a=this.paper.answerList[t]._id;this.$Modal.confirm({title:"确认",content:"<p>确定删除此回卷</p>",onOk:function(){var t=e.paper.answerList.findIndex(function(t){return t._id===a});-1!==t&&e.$fetch.get("/api/deleteAnswer",{answerId:a,paperId:e.paperId},function(a){200===a&&(e.paper.answerList.splice(t,1),e.tableData.splice(t,1))})},onCancel:function(){}})},exportExcel:function(){V(this.tableColumns,this.$refs.answertable,this.paper.title+"-答题情况表")}}},K=X,Y=(a("f6f9"),Object(c["a"])(K,U,G,!1,null,"71d80354",null));Y.options.__file="PaperAnalysis.vue";var Z=Y.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-wrap"},[a("Card",{staticClass:"title-card"},[a("p",{staticClass:"title-text",attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"title-text"},[t._v("问卷列表")])]),a("Timeline",{staticClass:"main-content"},t._l(t.papers,function(e){return a("TimelineItem",{key:e._id,attrs:{color:"orange"}},[a("p",{staticClass:"time"},[a("span",[t._v(t._s(e.title))]),a("span",{staticClass:"actions"},[a("Tooltip",{attrs:{content:"此项已逾期",placement:"top"}},[e.outdated?a("a",{staticClass:"alert-button action-button",attrs:{href:"javascript:void (0);"}},[a("Icon",{attrs:{type:"md-information-circle"}})],1):t._e()]),a("a",{staticClass:"action-button",attrs:{href:"javascript:void (0);",title:"查看问卷详细"},on:{click:function(a){t.getDetail(e._id)}}},[a("Icon",{attrs:{type:"ios-book"}})],1),a("a",{staticClass:"action-button",attrs:{href:"javascript:void (0);",title:"查看答题分析"},on:{click:function(a){t.analyzeAnswers(e._id)}}},[a("Icon",{attrs:{type:"ios-analytics"}})],1),e.status?a("a",{staticClass:"action-button",attrs:{href:"javascript:void (0);",title:"点击暂停"},on:{click:function(a){t.toggleStatus(e._id,!e.status)}}},[a("Icon",{attrs:{type:"ios-pause"}})],1):e.status?t._e():a("a",{staticClass:"action-button",attrs:{href:"javascript:void (0);",title:"点击恢复"},on:{click:function(a){t.toggleStatus(e._id,!e.status)}}},[a("Icon",{attrs:{type:"ios-play"}})],1),a("a",{staticClass:"action-button",attrs:{title:"删除问卷"},on:{click:function(a){t.deletePaper(e._id)}}},[a("Icon",{attrs:{type:"ios-close-circle"}})],1)],1)]),a("p",{staticClass:"content"},[a("span",[t._v(t._s("问卷码："+e.code))]),a("span",[t._v(t._s("创建日期："+e.createDate))]),a("span",[t._v("|")]),a("span",[t._v(t._s("截至："+e.dateLine))]),a("span",[t._v("|")]),a("span",[t._v("应填："+t._s(e.expect))])])])}))],1)],1)},et=[],at={data:function(){return{papers:[]}},created:function(){var t=this;this.$fetch.get("/api/papers",{},function(e){e&&(t.papers=e)})},methods:{getDetail:function(t){this.$router.push({name:"detail",params:{paperId:t}})},analyzeAnswers:function(t){this.$router.push({name:"analysis",params:{paperId:t}})},toggleStatus:function(t,e){var a=this,n=this.papers.findIndex(function(e){return e._id===t});-1!==n&&this.$fetch.get("/api/setPaperStatus",{paperId:t,status:e},function(t){200===t&&(a.papers[n].status=!a.papers[n].status)})},deletePaper:function(t){var e=this;this.$Modal.confirm({title:"确认",content:"<p>确定删除此问卷</p>",onOk:function(){var a=e.papers.findIndex(function(e){return e._id===t});-1!==a&&e.$fetch.get("/api/deletePaper",{paperId:t},function(t){200===t&&e.papers.splice(a,1)})},onCancel:function(){}})}}},nt=at,rt=(a("ed12"),Object(c["a"])(nt,tt,et,!1,null,"c6643116",null));rt.options.__file="PaperList.vue";var it=rt.exports,st=[{name:"enter",path:"/",component:x},{name:"login",path:"/login",component:x},{name:"paper",path:"/paper",component:S,children:[{name:"paper_default",path:"/paper",component:it},{name:"list",path:"/paper/list",component:it},{name:"create",path:"/paper/create",component:N},{name:"detail",path:"/paper/detail/:paperId",component:z},{name:"analysis",path:"/paper/analysis/:paperId",component:Z}]},{name:"blank",path:"/blank/:paperCode",component:I}],ot=st,lt=(a("4917"),a("6bde"));a("6d93");d["LoadingBar"].config({color:"#5cb85c",failedColor:"#f0ad4e",height:8});var ct="";function pt(t){var e=[],a=0;for(var n in t)e[a++]=[n,t[n]];return new URLSearchParams(e).toString()}function ut(t){if(t.code&&-1!==[200,201,300,400,401,500].indexOf(t.code)&&t.msg){switch(t.code){case 200:d["LoadingBar"].finish(),d["Message"].success("恭喜您，操作成功！");break;case 300:d["LoadingBar"].error(),d["Message"].warning("嗯...出错了！");break;case 400:d["LoadingBar"].error(),d["Message"].error("额...操作失败！");break;case 500:d["LoadingBar"].error(),d["Message"].warning("登陆过期，请重新登陆"),window.location.href=ct+"/login";break}return!!t.token||(!!t.paperCode||(200===t.code?200:400))}return t&&Object(lt["a"])(t),d["LoadingBar"].finish(),!0}var dt=window.localStorage,ft={get:function(t,e,a){t=ct+t,e&&(t.match(/^\/api*/)&&(e.token=dt.getItem("token")),t+="?"+pt(e)),d["LoadingBar"].start(),fetch(t,{method:"GET",credentials:"include"}).then(function(t){return t.json()}).then(function(t){var e=ut(t);200===e?a&&a(200):!0===e&&a&&a(t)}).catch(function(t){ut(300),console.log(t)})},post:function(t,e,a){e&&t.match(/^\/api/)&&(e.token=dt.getItem("token")),fetch(t,{method:"POST",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(t){var e=ut(t);200===e?a&&a(200):!0===e&&a&&a(t)}).catch(function(t){ut(300),console.log(t)})}},mt={install:function(t){Object.defineProperty(t.prototype,"$fetch",{value:ft})}};a("1368").polyfill(),n["default"].use(mt),n["default"].config.productionTip=!1,n["default"].use(f.a),n["default"].use(r["a"]);var ht=new r["a"]({routes:ot});new n["default"]({router:ht,render:function(t){return t(u)}}).$mount("#app")},"59bc":function(t,e,a){"use strict";var n=a("c9d2"),r=a.n(n);r.a},"65e9":function(t,e,a){"use strict";var n=a("0bc7"),r=a.n(n);r.a},"8caf":function(t,e,a){},a1cd:function(t,e,a){},a45a:function(t,e,a){},c21b:function(t,e,a){},c9d2:function(t,e,a){},d71b:function(t,e,a){},ed12:function(t,e,a){"use strict";var n=a("a45a"),r=a.n(n);r.a},f6f9:function(t,e,a){"use strict";var n=a("8caf"),r=a.n(n);r.a},fded:function(t,e,a){"use strict";var n=a("a1cd"),r=a.n(n);r.a}});
//# sourceMappingURL=app.fa580556.js.map