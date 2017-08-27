"use strict";angular.module("breadcrumbModule",[]).directive("breadcrumbComponent",function(e){return{restrict:"EA",template:'<a class="breadcrumb-link">{{breadcrumbText.lv1}}<img style="margin-left: 5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAANCAYAAABlyXS1AAAAAXNSR0IArs4c6QAAAIZJREFUGBljmDlz5om5c+eaMGABTCwsLDl///5dhU0BI0gDSAKkgJmZOSw5OfkMzBCwJC4FcElsClAk0RVgSIIUAH0QCqQ6MCTnzZun9Pv3721MTExZKJJAHcpAHVtBEqmpqfvgkugSIOPBktgkwJIgCUZGxm1AnAkyCiQIA0xAwcnYJEAKACT1SIbDa5BdAAAAAElFTkSuQmCC"/></a><span>{{breadcrumbText.lv2}}</span>',scope:{gopath:"@",breadcrumbParams:"=",breadcrumbText:"="},link:function(t,a,r){console.log("breadcrumbText"),console.log(t.breadcrumbText),a.bind("click",function(){t.gopath?e.go(t.gopath,t.breadcrumbParams):window.history.go(-1)})}}});var encrypt=angular.module("md5ServiceModule",[]);encrypt.service("md5Service",function(){function e(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var l=1732584193,u=-271733879,c=-1732584194,i=271733878,d=0;d<e.length;d+=16){var p=l,m=u,g=c,h=i;u=o(u=o(u=o(u=o(u=n(u=n(u=n(u=n(u=r(u=r(u=r(u=r(u=a(u=a(u=a(u=a(u,c=a(c,i=a(i,l=a(l,u,c,i,e[d+0],7,-680876936),u,c,e[d+1],12,-389564586),l,u,e[d+2],17,606105819),i,l,e[d+3],22,-1044525330),c=a(c,i=a(i,l=a(l,u,c,i,e[d+4],7,-176418897),u,c,e[d+5],12,1200080426),l,u,e[d+6],17,-1473231341),i,l,e[d+7],22,-45705983),c=a(c,i=a(i,l=a(l,u,c,i,e[d+8],7,1770035416),u,c,e[d+9],12,-1958414417),l,u,e[d+10],17,-42063),i,l,e[d+11],22,-1990404162),c=a(c,i=a(i,l=a(l,u,c,i,e[d+12],7,1804603682),u,c,e[d+13],12,-40341101),l,u,e[d+14],17,-1502002290),i,l,e[d+15],22,1236535329),c=r(c,i=r(i,l=r(l,u,c,i,e[d+1],5,-165796510),u,c,e[d+6],9,-1069501632),l,u,e[d+11],14,643717713),i,l,e[d+0],20,-373897302),c=r(c,i=r(i,l=r(l,u,c,i,e[d+5],5,-701558691),u,c,e[d+10],9,38016083),l,u,e[d+15],14,-660478335),i,l,e[d+4],20,-405537848),c=r(c,i=r(i,l=r(l,u,c,i,e[d+9],5,568446438),u,c,e[d+14],9,-1019803690),l,u,e[d+3],14,-187363961),i,l,e[d+8],20,1163531501),c=r(c,i=r(i,l=r(l,u,c,i,e[d+13],5,-1444681467),u,c,e[d+2],9,-51403784),l,u,e[d+7],14,1735328473),i,l,e[d+12],20,-1926607734),c=n(c,i=n(i,l=n(l,u,c,i,e[d+5],4,-378558),u,c,e[d+8],11,-2022574463),l,u,e[d+11],16,1839030562),i,l,e[d+14],23,-35309556),c=n(c,i=n(i,l=n(l,u,c,i,e[d+1],4,-1530992060),u,c,e[d+4],11,1272893353),l,u,e[d+7],16,-155497632),i,l,e[d+10],23,-1094730640),c=n(c,i=n(i,l=n(l,u,c,i,e[d+13],4,681279174),u,c,e[d+0],11,-358537222),l,u,e[d+3],16,-722521979),i,l,e[d+6],23,76029189),c=n(c,i=n(i,l=n(l,u,c,i,e[d+9],4,-640364487),u,c,e[d+12],11,-421815835),l,u,e[d+15],16,530742520),i,l,e[d+2],23,-995338651),c=o(c,i=o(i,l=o(l,u,c,i,e[d+0],6,-198630844),u,c,e[d+7],10,1126891415),l,u,e[d+14],15,-1416354905),i,l,e[d+5],21,-57434055),c=o(c,i=o(i,l=o(l,u,c,i,e[d+12],6,1700485571),u,c,e[d+3],10,-1894986606),l,u,e[d+10],15,-1051523),i,l,e[d+1],21,-2054922799),c=o(c,i=o(i,l=o(l,u,c,i,e[d+8],6,1873313359),u,c,e[d+15],10,-30611744),l,u,e[d+6],15,-1560198380),i,l,e[d+13],21,1309151649),c=o(c,i=o(i,l=o(l,u,c,i,e[d+4],6,-145523070),u,c,e[d+11],10,-1120210379),l,u,e[d+2],15,718787259),i,l,e[d+9],21,-343485551),l=s(l,p),u=s(u,m),c=s(c,g),i=s(i,h)}return Array(l,u,c,i)}function t(e,t,a,r,n,o){return s(l(s(s(t,e),s(r,o)),n),a)}function a(e,a,r,n,o,s,l){return t(a&r|~a&n,e,a,o,s,l)}function r(e,a,r,n,o,s,l){return t(a&n|r&~n,e,a,o,s,l)}function n(e,a,r,n,o,s,l){return t(a^r^n,e,a,o,s,l)}function o(e,a,r,n,o,s,l){return t(r^(a|~n),e,a,o,s,l)}function s(e,t){var a=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(a>>16)<<16|65535&a}function l(e,t){return e<<t|e>>>32-t}function u(e){for(var t=Array(),a=(1<<d)-1,r=0;r<e.length*d;r+=d)t[r>>5]|=(e.charCodeAt(r/d)&a)<<r%32;return t}function c(e){for(var t=i?"0123456789ABCDEF":"0123456789abcdef",a="",r=0;r<4*e.length;r++)a+=t.charAt(e[r>>2]>>r%4*8+4&15)+t.charAt(e[r>>2]>>r%4*8&15);return a}var i=0,d=8;this.hex_md5=function(t){return c(e(u(t),t.length*d))}}).service("Base64",function(){_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",this.encode=function(e){var t,a,r,n,o,s,l,u="",c=0;for(e=_utf8_encode(e);c<e.length;)n=(t=e.charCodeAt(c++))>>2,o=(3&t)<<4|(a=e.charCodeAt(c++))>>4,s=(15&a)<<2|(r=e.charCodeAt(c++))>>6,l=63&r,isNaN(a)?s=l=64:isNaN(r)&&(l=64),u=u+_keyStr.charAt(n)+_keyStr.charAt(o)+_keyStr.charAt(s)+_keyStr.charAt(l);return u},_utf8_encode=function(e){e=e.replace(/\r\n/g,"\n");for(var t="",a=0;a<e.length;a++){var r=e.charCodeAt(a);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128))}return t}}).service("Sha1",function(){function e(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var a=Array(80),r=1732584193,n=-271733879,o=-1732584194,s=271733878,l=-1009589776,u=0;u<e.length;u+=16){for(var c=r,i=n,d=o,p=s,m=l,g=0;g<80;g++){a[g]=g<16?e[u+g]:rol(a[g-3]^a[g-8]^a[g-14]^a[g-16],1);var h=safe_add(safe_add(rol(r,5),sha1_ft(g,n,o,s)),safe_add(safe_add(l,a[g]),sha1_kt(g)));l=s,s=o,o=rol(n,30),n=r,r=h}r=safe_add(r,c),n=safe_add(n,i),o=safe_add(o,d),s=safe_add(s,p),l=safe_add(l,m)}return Array(r,n,o,s,l)}this.hex_sha1=function(t){return binb2hex(e(str2binb(t),8*t.length))}}),angular.module("enterSubmitModule",[]).directive("enterSubmit",function(){}),angular.module("gobackModule",[]).directive("goBack",function(e){return{restrict:"EA",template:'<a><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAAAXNSR0IArs4c6QAAAKpJREFUGBl9j7ENQiEQhoUESOx1CS1dQAdwDhqmoWENG+2eG9ixhPYaKMD7jVyeyvMScgffB3eIWSecc4uc85HQQ37zNxxqrRticzEWRnBN51FKuWOhB0MI15cwBfG6+AchSJr2QANxTzwL0AK/4DmUUrWBlqXWek+bSGuVUjqjZYPIPCQgJFrRGLP13t9YQIGbPYn7T0kfAiRr7bKUMlCJdpcfYSSdqL4/AZgNcfcvzqHbAAAAAElFTkSuQmCC"/></a>',scope:{gopath:"@",params:"="},link:function(t,a,r){a.bind("click",function(){t.gopath?e.go(t.gopath,t.params):window.history.go(-1)})}}}),angular.module("headerModule",[]).directive("headerComponent",function(){return{restrict:"E",template:'<div class="header container-shadow-border"><h1>福特 - 班车管理平台</h1></div>'}}),angular.module("httpInterceptorModule",[]).factory("httpInterceptor",["$q","$injector",function(e,t){return{responseError:function(t){return 401==t.status?($.alert("可能遇到问题，请稍候再试:401"),e.reject(t)):404===t.status?($.alert("可能遇到问题，请稍候再试:404"),e.reject(t)):500===t.status?($.alert("可能遇到问题，请稍候再试:500"),e.reject(t)):void 0},response:function(e){return e}}}]),angular.module("leftNavModule",[]).directive("leftNavComponent",function(){return{restrict:"E",replace:!0,scope:!1,template:'<div class="left-side"><div class="title-wrapper"><img class="menu-icon" ng-src={{icon}} /><span>{{leftSideTitle}}</span></div><div class="menu-list">\t<ul>\t\t<li ng-repeat="menuItem in menuArray track by $index" ng-click="goTo(menuItem.uiSref,menuItem)" permission="{{menuItem.permission}}" ui-sref="{{menuItem.uiSref}}" ui-sref-active="selected">{{menuItem.name}}</li>\t</ul></div></div>',controller:function(e,t,a,r,n){t.goTo=function(t,a){if(a&&"_blank"===a.target)return!1;void 0!==t&&""!==t&&("building"===t&&$.confirm("正在努力建设中..."),e.go(t))}}}}),angular.module("paginationModule",[]).directive("paginationComponent",["$parse","$q",function(e,t){return{restrict:"E",template:'<div class="pagination-wrapper">\t<div class="pagination-num">\t\t<select ng-model="currentItemNumber" class="pagination-select" ng-options="s for s in [20,40,60,80,100]" ng-change="itemNumChange(currentItemNumber)"></select>\t\t<span>条/页</span>\t</div>\t<ul class="pagination-operate">\t\t<li ng-class="{no_active:pageListFlag.pre == false}" class="pageOperate" ng-click="prePageList()">上一页</li>\t\t<li ng-repeat="i in pageList" class="page_num {{i == currentPageIndex?\'active\':\' \'}}" ng-click="changePage(i)"> {{i}}</li>\t\t<li ng-class="{no_active:pageListFlag.next == false}"  ng-click="nextPageList()">下一页</li>\t</ul></div>',scope:{pageConfigs:"="},link:function(e,a,r){function n(){var a=t.defer();e.pageConfigs.list=null,e.pageConfigs.params.pageSize=e.currentItemNumber,e.pageConfigs.params.pageNo?e.pageConfigs.params.pageNo=e.currentPageIndex:e.pageConfigs.params.curPage&&(e.pageConfigs.params.curPage=e.currentPageIndex);n={};for(var r in e.pageConfigs.params)e.pageConfigs.params[r]&&(n[r]=e.pageConfigs.params[r]);var n=angular.extend(n,e.pageConfigs.extendParams);return e.pageConfigs.getList(n).then(function(t){var r;e.pageConfigs.dataSet&&e.pageConfigs.dataSet(t),t.data&&(t=t.data),e.pageConfigs.list=t.result||t.value,r=e.pageConfigs.list.length,a.resolve(r)},function(t){e.pageConfigs.list=[0]}),a.promise}function o(t){e.pageToTotalStart=t-1,e.currentPageIndex=t,n().then(function(t){e.total=t,e.pageTotal=l(),e.pageList=u(),s()})}function s(){e.pageListFlag.pre=1!=e.currentPageIndex,e.pageListFlag.next=e.currentPageIndex!=e.pageTotal.length}function l(){for(var t=[],a=Math.ceil(e.total/e.currentItemNumber),r=1;r<=a;r++)t.push(r);return 0==a&&t.push(1),t}function u(){return e.pageTotal.slice(e.pageToTotalStart,e.pageToTotalStart+e.pageTotalListNum)}e.pageToTotalStart=0,e.pageTotalListNum=5,e.pageTotal=[],e.pageList=[],e.pageListFlag={pre:!1,next:!1},e.nextPageList=function(){if(console.log("nextPageList"),e.currentPageIndex<e.pageTotal.length){var t=e.currentPageIndex+1;parseInt(e.pageToTotalStart)<e.pageTotal[e.pageTotal.length-1]-e.pageTotalListNum&&e.currentPageIndex==e.pageList[e.pageList.length-1]&&(e.pageToTotalStart++,e.pageList=u()),e.changePage(t)}},e.prePageList=function(){if(e.currentPageIndex>1){var t=e.currentPageIndex-1;parseInt(e.pageToTotalStart)>=parseInt(e.pageTotal[0])&&e.currentPageIndex==e.pageList[0]&&(e.pageToTotalStart--,e.pageList=u()),e.changePage(t)}},e.itemNumChange=function(t,a){var r=parseInt(a)||1;e.currentItemNumber=parseInt(t)||20,o(r)},e.changePage=function(t){e.currentPageIndex=t,s(),n().then(function(t){e.total!=t&&(e.total=t,e.pageTotal=l(),e.pageList=u())})},e.goToFirstOrLast=function(){},e.$on("refreshPageList",function(t,a){a&&(e.pageConfigs.params=angular.extend(e.pageConfigs.params,a));var r=a||{pageSize:e.currentItemNumber,pageNo:1};e.itemNumChange(r.pageSize,r.pageNo)})}}}]),angular.module("smsCodeModule",[]).directive("smsCodeComponent",function(e,t,a){return{restrict:"EA",template:'<button  id="smsCodeBtn" class="btn-normal" ng-class="{\'smsActive\': isActive,\'smsSheep\': !isActive}"  ng-click="invokeSmsCode()">{{defaultValue}}</button>',scope:{phoneNumber:"=phoneNumber",requestType:"=requestType",smsCode:"=smsCode",defaultValue:"@defaultValue",codeStatus:"=codeStatus",sleep:"@"},link:function(a,r,n){function o(e,t,r){return 0==t&&u?(a.isActive=!1,document.getElementById(e).removeAttribute("disabled"),document.getElementById(e).innerHTML="获取验证码",document.getElementById(e).removeAttribute("class"),document.getElementById(e).setAttribute("class","btn-normal smsSheep"),u=!1,void clearTimeout(l)):0!=t||u?(a.isActive=!0,document.getElementById(e).setAttribute("disabled","disabled"),document.getElementById(e).innerHTML="重新获取("+t+")",document.getElementById(e).removeAttribute("class"),document.getElementById(e).setAttribute("class","btn-normal smsActive"),clearTimeout(l),t--,void(l=setTimeout(function(){o(e,t)},1e3))):(a.isActive=!1,document.getElementById(e).removeAttribute("disabled"),document.getElementById(e).innerHTML="重新获取",document.getElementById(e).removeAttribute("class"),document.getElementById(e).setAttribute("class","btn-normal smsSheep"),void clearTimeout(l))}var s=60,l="",u=!1;u="获取验证码"==a.defaultValue,clearTimeout(l),a.invokeSmsCode=function(){s=60,a.isActive=!0,e.account({phoneNumber:a.phoneNumber,requestType:a.requestType}).then(function(e){var r=e.data;if(r.error){switch(r.error.statusCode){case t.STATUS_CODE_0100108.code:case t.SMSCODE_ERROR_0100110.code:n(t.STATUS_CODE_0100108.message,r)}function n(e,t){$.alert(e,function(){a.activeText="激活",a.disabled=!1})}}else o("smsCodeBtn",s,a.defaultValue),a.smsCode=r.value.smsCode,a.codeStatus="验证码已发送至"+a.phoneNumber},function(e){$.alert("可能遇到问题,请稍后再试。",function(){}),a.activeText="激活",a.disabled=!1})},a.sleep?o("smsCodeBtn",0):o("smsCodeBtn",60)}}}),angular.module("tableComponentModule",[]).directive("tableComponent",function(e,t){return{restrict:"EA",template:'\t<div class="table-wrapper"> \t    <div class="table-head">\t\t \t<span class="first-operate"></span>\t\t\t<span ng-repeat="head in tableConfig.head">{{head["selfKey"]["value"]}}</span>\t\t\t<span>操作</span>\t\t</div>\t\t<ul class="table-body">\t\t\t<li class="list-item" ng-repeat="item in tableData track by $index">\t\t\t\t<span class="first-operate" ng-if="stableFlag.checkbox">\t\t\t\t\t<input type="checkbox" id="item{{$index}}" id="item{{$index}}" ng-model="selectObj.checkArray[$index]" ng-click="selectObj.checkIsAllSelect(selectObj.checkArray[$index])" ng-disabled="tableConfig.changeEnable && tableConfig.changeEnable(item)" data-disable="{{tableConfig.changeEnable && tableConfig.changeEnable(item)}}" />\t\t\t\t    <label for="item{{$index}}" class="check-box"></label>\t\t\t\t</span>\t\t\t\t<span ng-repeat="head in tableConfig.head">{{item[head.parentKey][head.selfKey.key] || tableConfig.defaultValue}}</span>\t\t\t\t<span ng-repeat="o in stableFlag.operate" class="item-operate"  ng-click="preventPropagation($event)" ng-if="tableConfig.operateIfFlag || (stableFlag.operate && stableFlag.operate.Length !=0 && (o.ngIf(item) ||o.ngIf ==undefined))">\t\t\t\t\t  <a ng-click="o.fun(item,$event)" ng-if="tableConfig.operateIfFlag || (o.ngIf(item) || o.ngIf ==undefined)">{{o.name}}</a> \t\t\t\t</span>\t\t\t</li>\t\t</ul>\t</div>',scope:{tableConfig:"=",tableData:"="},link:function(e,t,a){e.headOptional=e.tableConfig.setHeadOptional,e.stableFlag=e.tableConfig.stableFlag,e.tableConfig.defaultValue=e.tableConfig.defaultValue||null,e.headOptional&&(e.setHeadOptionalFn={checkArray:e.headOptional.selectOptions,minOptionalNum:e.headOptional.selectOptions.cancelSelectNum||5,returnHead:function(e){for(var t=[],a=0;a<e.length;a++)1==e[a].checkFlag&&t.push(e[a]);return t},isSelectAllHeadITems:function(){},selectItem:function(){},ensureSelect:function(){}},e.tableConfig.head=e.setHeadOptionalFn.returnHead(e.headOptional.selectOptions)),e.stableFlag.checkbox&&(e.selectObj={allSelecteFlag:!1,checkArray:[],selectAll:function(){for(var e="",t=0;t<this.checkArray.length;t++){e="#item"+t,this.checkArray[t]=this.allSelecteFlag;var a=angular.element(document.getElementById(e)).data("disable");console.log(a+"xxx ststu"),1==a&&this.allSelecteFlag&&(this.checkArray[t]=!1)}},checkIsAllSelect:function(e){var t=0,a=this.checkArray,r=a.length;if(0==e)this.allSelecteFlag=!1;else{for(var n=0;n<r;n++){if(a[n]!=e)return t;t++}t==r&&(this.allSelecteFlag=!0)}}},e.$on("checkboxSelectAll",function(t,a){e.selectObj.selectAll()})),e.$watch("tableData",function(t,a){console.log(1,t),null!==t&&e.stableFlag.checkbox&&(e.selectObj.allSelectFlag=!1,console.log("checkArray"),console.log(e.selectObj.checkArray))})}}}),angular.module("constModule",[]).constant("APISERVICEPATH",{dev:"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",passengerDev:"./modules/data/",passengerAccount:"http://f-shuttlebus-accountandauthority-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/passengerAccount/",passengerProfile:"http://f-shuttlebus-profile-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/passengerProfile/",prd:"http://19.229.169.185:7072/api/v1/"}).constant("ERRORCODE",{activeProgress:"0100104",loginProgress:"0100105"}).constant("REQUESTTYPE",{activeAccount:0,forgetAccount:1}).constant("CHECK_ACCOUNT_STATUS",{accountActive:"0",accountLogin:"1"}).constant("CHECK_ACCOUNT_ERROR",{STATUS_CODE_401:{code:"401",message:"可能遇到问题，请稍候再试。"},STATUS_CODE_2:{code:"2",message:"对不起，您的手机号未注册。请联系公司相关负责人进行注册。"},STATUS_CODE_0100102:{code:"0100102",message:"对不起，您的手机号未注册。请联系公司相关负责人进行注册。"},STATUS_CODE_0100101:{code:"0100101",message:"无效手机号。"},STATUS_CODE_0100108:{code:"0100108",message:"发送验证码失败，请稍候再试"},STATUS_CODE_0100110:{code:"0100110",message:"发送验证码失败，请稍候再试"}}).constant("ACTIVE_ACCOUNT_ERROR",{STATUS_CODE_0100113:{code:"0100113",message:"帐户激活可能遇到问题，请稍候再试。"},STATUS_CODE_0100115:{code:"0100115",message:"无效的请求。"},STATUS_CODE_0100106:{code:"0100106",message:"无效的请求。"},STATUS_CODE_0100109:{code:"0100109",message:"验证码已经失效,请重新获取验证码。"},STATUS_CODE_0100112:{code:"0100112",message:"验证码不正确,请重新输入或重新获取验证码。"}}).constant("LOGIN_ACCOUNT_ERROR",{STATUS_CODE_0200101:{code:"0200101",message:"用户名或密码不正确，请重新输入。"},STATUS_CODE_0200104:{code:"0200104",message:"登陆可能遇到问题，请稍候再试"},STATUS_CODE_0200107:{code:"0200107",message:"无效的请求"},STATUS_CODE_0200106:{code:"0200106",message:"无效的请求"}}).constant("SMSCODE_ERROR",{STATUS_CODE_0100108:{code:"0100108",message:"发送验证码失败，请稍候再试。"},STATUS_CODE_0100110:{code:"0100110",message:"发送验证码失败，请稍候再试。"}}).constant("FORGET_ACCOUNT_ERROR",{STATUS_CODE_0100112:{code:"0100112",message:"验证码不正确,请重新输入或重新获取验证码。"},STATUS_CODE_0100109:{code:"0100109",message:"验证码已经失效,请重新获取验证码。"},STATUS_CODE_0200107:{code:"0200107",message:"无效的请求"},STATUS_CODE_0200106:{code:"0200106",message:"无效的请求"},STATUS_CODE_0200104:{code:"0200104",message:"重置密码可能遇到问题，请稍候再试"}}),angular.module("injectModules",["ui.router","ngAnimate","ngResource","headerModule","md5ServiceModule","checkControllerModule","gobackModule","constModule","loginHttpServiceModule","forgetControllerModule","loginControllerModule","activeControllerModule","smsCodeModule","breadcrumbModule","passengerControllerModule","listControllerModule","reportControllerModule","feedbackControllerModule","leftNavModule","schedulerControllerModule","routeControllerModule","busControllerModule","dirverControllerModule","siteControllerModule","scheduleControllerModule","tableComponentModule","paginationModule","passengerHttpServiceModule","passengerAddControllerModule","passengerDetailControllerModule","httpInterceptorModule"]),angular.module("app",["injectModules"]).config(["$stateProvider","$urlRouterProvider","$qProvider","$httpProvider",function(e,t,a,r){r.interceptors.push("httpInterceptor"),e.state("entry",{url:"/entry",templateUrl:"modules/login/entry.html"}).state("entry.check",{url:"/check",templateUrl:"modules/login/check.html",controller:"checkController"}).state("entry.login",{url:"/login",params:{phoneNumber:null,requestType:null,smsCode:null},templateUrl:"modules/login/login.html",controller:"loginController"}).state("entry.active",{url:"/active",params:{phoneNumber:null,smsCode:null,requestType:null},templateUrl:"modules/login/active.html",controller:"activeController"}).state("entry.forget",{url:"/forget",templateUrl:"modules/login/forget.html",params:{phoneNumber:null,smsCode:null,requestType:null},controller:"forgetController"}).state("passenger",{url:"/passenger",templateUrl:"modules/passengerMgmt/passenger.html",controller:"passengerController"}).state("passenger.list",{url:"/list",templateUrl:"modules/passengerMgmt/list.html",params:{status:null,passengerUuid:null,roleType:null,hrUuid:null,secondCompanyId:null,accountId:null,routeName:null,stationName:null,phoneNumber:null,employeeId:null,passengerName:null},controller:"listController"}).state("passenger.feedback",{url:"/feedback",templateUrl:"modules/passengerMgmt/feedback.html",controller:"feedbackController"}).state("passenger.report",{url:"/report",templateUrl:"modules/passengerMgmt/report.html",controller:"reportController"}).state("passenger.add",{url:"/add",params:{passengerUuid:null,hrUuid:null},templateUrl:"modules/passengerMgmt/passenger.add.html",controller:"passengerAddController"}).state("passenger.detail",{url:"/detail",params:{status:null,passengerUuid:null,roleType:null,hrUuid:null,secondCompanyId:null,accountId:null,routeName:null,stationName:null,phoneNumber:null,employeeId:null,passengerName:null},templateUrl:"modules/passengerMgmt/passenger.detail.html",controller:"passengerDetailController"}).state("scheduler",{url:"/scheduler",templateUrl:"modules/schedulerMgmt/scheduler.html",controller:"schedulerController"}).state("scheduler.route",{url:"/route",templateUrl:"modules/schedulerMgmt/route.html",controller:"routeController"}).state("scheduler.site",{url:"/site",templateUrl:"modules/schedulerMgmt/site.html",controller:"siteController"}).state("scheduler.dirver",{url:"/dirver",templateUrl:"modules/schedulerMgmt/dirver.html",controller:"dirverController"}).state("scheduler.bus",{url:"/bus",templateUrl:"modules/schedulerMgmt/bus.html",controller:"busController"}).state("scheduler.schedule",{url:"/schedule",templateUrl:"modules/schedulerMgmt/schedule.html",controller:"scheduleController"}),t.otherwise("entry/check")}]),angular.module("activeControllerModule",[]).controller("activeController",function(e,t,a,r,n,o,s){s.phoneNumber?(n.phoneNumber=s.phoneNumber,n.smsCode=s.smsCode,n.codeStatus="验证码已发送至"+n.phoneNumber):o.go("entry.check"),n.activeText="激活",n.disabled=!1,n.passwordStatus=!1,n.displayPasswordStatus=function(e,t){t?("passwordSecond"==e?n.passwordSecond=!1:n.passwordFirst=!1,document.getElementById(e).setAttribute("type","password")):("passwordSecond"==e?n.passwordSecond=!0:n.passwordFirst=!0,document.getElementById(e).setAttribute("type","text"))},n.login=function(){var o=new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/);n.smsCode?n.password?o.test(n.password)?n.twicePassword?n.twicePassword==n.password?(n.activeText="正在激活...",n.disabled=!0,e.smsCode({phoneNumber:n.phoneNumber,requestType:t.activeAccount,smsCode:n.smsCode,password:r.hex_md5(n.password)}).then(function(e){var t=e.data;if(t.error){switch(t.statusCode){case a.STATUS_CODE_0100113.code:r(a.STATUS_CODE_0100113.message,t);break;case a.STATUS_CODE_0100115.code:r(a.STATUS_CODE_0100115.message,t);break;case a.STATUS_CODE_0100106.code:r(a.STATUS_CODE_0100106.message,t);break;case a.STATUS_CODE_0100109.code:r(a.STATUS_CODE_0100109.message,t);break;case a.STATUS_CODE_0100112.code:r(a.STATUS_CODE_0100112.message,t)}function r(e,t){$.alert(e,function(){n.activeText="激活",n.disabled=!1})}}else $.alert("激活成功")},function(e){$.confirm(e.data.message,function(){})})):alertify.alert("密码不一致"):$.alert("请输入确认密码"):$.alert("请输入8-32位密码,必须由数字,字母以及至少包含一个大写字母组成。"):$.alert("请输入密码"):$.alert("请输入验证码")}}),angular.module("checkControllerModule",[]).controller("checkController",function(e,t,a,r,n){r.btnMessage="下一步",r.$watch("phoneNumber",function(e,t){}),r.checkNumber=function(o){var s=/^[0-9][0,1,2,3,4,5,6,7,8,9][0-9]{9}$/,l=r.phoneNumber;l?l&&!l.match(s)?alertify.alert("请输入正确的手机号码"):(r.btnMessage="获取权限中..",r.disabled=!0,e.account({phoneNumber:r.phoneNumber,requestType:0}).then(function(e){var o=e.data,s=o.value;if(o.error){switch(o.error.statusCode){case a.STATUS_CODE_401.code:l(a.STATUS_CODE_401.message,o);break;case a.STATUS_CODE_2.code:l(a.STATUS_CODE_2.message,o);break;case a.STATUS_CODE_0100101.code:l(a.STATUS_CODE_0100101.message,o);break;case a.STATUS_CODE_0100108.code:l(a.STATUS_CODE_0100108.message,o);break;case a.STATUS_CODE_0100102.code:l(a.STATUS_CODE_0100102.message,o);break;case a.STATUS_CODE_0100110.code:l(a.STATUS_CODE_0100110.message,o)}function l(e,t){$.alert(e,function(){r.btnMessage="下一步",r.disabled=!1,r.$apply()})}}else switch(s.status){case t.accountActive:n.go("entry.active",{phoneNumber:r.phoneNumber,requestType:"0",smsCode:s.smsCode});break;case t.accountLogin:n.go("entry.login",{phoneNumber:r.phoneNumber,requestType:"0"})}},function(e){$.alert("可能遇到问题，请稍候再试",function(){})})):$.alert("请输入手机号",function(){})}}),angular.module("forgetControllerModule",[]).controller("forgetController",function(e,t,a,r,n,o){o.phoneNumber||n.go("entry.check"),r.passwordStatus=!1,r.phoneNumber=o.phoneNumber,r.requestType=t.forgetAccount,r.restText="重置密码",r.disabled=!1,r.pathParamsForGoBack={phoneNumber:r.phoneNumber,requestType:r.requestType},r.displayPasswordStatus=function(e,t){t?("passwordSecond"==e?r.passwordSecond=!1:r.passwordFirst=!1,document.getElementById(e).setAttribute("type","password")):("passwordSecond"==e?r.passwordSecond=!0:r.passwordFirst=!0,document.getElementById(e).setAttribute("type","text"))},r.restPassword=function(){var o=new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/);r.smsCode?r.password?o.test(r.password)?r.twicePassword?r.twicePassword==r.password?(r.restText="正在重置...",r.disabled=!0,e.smsCode({phoneNumber:r.phoneNumber,requestType:t.forgetAccount,smsCode:r.smsCode,password:a.hex_md5(r.password)}).then(function(e){var t=e.data;t.error?($.alert("可能遇到问题，请稍候再试ErrorCode :"+t.statusCode+" : "+t.message),r.restText="重置密码",r.disabled=!1):$.alert("密码重置成功,请重新登录",function(){n.go("entry.login",{phoneNumber:r.phoneNumber})})},function(e){$.alert(e.data.message,function(){}),r.restText="重置密码",r.disabled=!1})):alertify.alert("密码不一致"):$.alert("请输入确认密码"):$.alert("请输入8-32位密码,必须由数字,字母以及至少包含一个大写字母组成。"):$.alert("请输入密码"):$.alert("请输入验证码")}}),angular.module("loginControllerModule",[]).controller("loginController",function(e,t,a,r,n,o){o.phoneNumber?r.phoneNumber=o.phoneNumber:n.go("entry.check"),r.smsCode=o.smsCode,r.loginText="登录",r.passwordStatus=!1,r.login=function(){r.disabled=!0,r.password?(r.loginText="登录中...",e.login({phoneNumber:o.phoneNumber,password:t.hex_md5(r.password)}).then(function(e){console.log(1,e);var t=e.data;if(t.error){switch(t.error.statusCode){case a.STATUS_CODE_0200101.code:n(a.STATUS_CODE_0200101.message,t);break;case a.STATUS_CODE_0200104.code:n(a.STATUS_CODE_0200104.message,t);break;case a.STATUS_CODE_0200107.code:n(a.STATUS_CODE_0200107.message,t);break;case a.STATUS_CODE_0200106.code:n(a.STATUS_CODE_0200106.message,t);break;default:$.alert(t.error.message)}function n(e,t){$.alert(e,function(){r.loginText="登录",r.disabled=!1,r.$apply()})}}else $.alert("登录成功！ 管理页面正在建设中...",function(){r.loginText="登录",r.disabled=!1,r.$apply()})},function(e){var t=e.data.error;$.alert(t.message+":"+t.statusCode,function(){r.loginText="登录",r.disabled=!1})})):$.alert("请输入密码",function(){r.loginText="登录",r.disabled=!1,r.$apply()})},r.forgetPassword=function(){r.phoneNumber?n.go("entry.forget",{phoneNumber:r.phoneNumber,requestType:o.requestType}):alert("手机号不能为空")}}),angular.module("loginHttpServiceModule",[]).factory("loginHttpService",function(e,t){function a(e){for(var t="",a=0;a<e;a++)t+=Math.floor(10*Math.random());return t}var r={},n=t.dev;return r.account=function(t){var a={apiPath:n+"authService/account",paramsList:{phoneNumber:t.phoneNumber,requestType:t.requestType}};return e({method:"GET",url:a.apiPath,params:a.paramsList})},r.login=function(t){var r={apiPath:n+"authService/authorization",paramsList:{username:t.phoneNumber,password:t.password,client_id:"client_auth_mode",state:a(5),scope:"read write",redirect_uri:"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",response_type:"code"},setHeader:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"}};return e({method:"POST",url:r.apiPath,params:r.paramsList,headers:r.setHeader})},r.accessToken=function(){var t={apiPath:n+"authService/accessToken",paramsList:{client_id:"client_auth_mode",state:a(5),scope:"read write",redirect_uri:"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",response_type:"token",grant_type:"authorization_code",code:""},setHeader:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"}};return e({method:"POST",url:t.apiPath,data:t.paramsList,headers:t.setHeader})},r.smsCode=function(t){var r={apiPath:n+"authService/smsCode",paramsList:{requestType:t.requestType,smsCode:t.smsCode,grant_type:"password",username:t.phoneNumber,password:t.password,client_id:"client_auth_mode",state:a(5),scope:"read write",redirect_uri:"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",response_type:"code"},setHeader:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"}};return e({method:"POST",url:r.apiPath,params:r.paramsList})},r}),angular.module("feedbackControllerModule",[]).controller("feedbackController",function(e){}),angular.module("listControllerModule",[]).controller("listController",function(e,t,a){a.selectAllStatus=!1,a.pageConfigs={params:{},list:null,getList:function(){return e.passenger({hrUUID:"666",secondCompanyID:"666"})},loadData:function(){console.log("load data")},dataSet:function(e){for(var t=e.data.value,a=0;a<t.length;a++)t[a].passengerProfileOutDTO.status=0==t[a].passengerProfileOutDTO.status?"未激活":"已激活"}},a.selectAll=function(){var e=!a.selectAllStatus;console.log(e+":_selectAllStatus"),a.$broadcast("checkboxSelectAll",{status:e})},a.addPassenger=function(){t.go("passenger.add",{passengerUuid:"111",hrUuid:"111"})},a.tableConfig={stableFlag:{arrow:!0,index:!0,checkbox:!0,radio:!0,operate:[{name:"编辑",ngIf:function(){},fun:function(e){var a={status:e.passengerProfileOutDTO.status,passengerUuid:e.passengerProfileOutDTO.passengerUuid,roleType:e.passengerProfileOutDTO.roleType,hrUuid:e.passengerProfileOutDTO.hrUuid,secondCompanyId:e.passengerProfileOutDTO.secondCompanyId,accountId:e.passengerProfileOutDTO.accountId,routeName:e.passengerProfileOutDTO.routeName,stationName:e.passengerProfileOutDTO.stationName,phoneNumber:e.accountDTO.phoneNumber,employeeId:e.passengerProfileOutDTO.employeeId,passengerName:e.baseProfileInDTO.name};t.go("passenger.detail",{status:a.status,passengerUuid:a.passengerUuid,roleType:a.roleType,hrUuid:a.hrUuid,secondCompanyId:a.secondCompanyId,accountId:a.accountId,routeName:a.routeName,stationName:a.stationName,phoneNumber:a.phoneNumber,employeeId:a.employeeId,passengerName:a.passengerName})}}]},checkbox:{checkArray:[]},defaultValue:"---",operateIfFlag:!0,setHeadOptional:{cancelSelectNum:5,selectOptions:[{parentKey:"passengerProfileOutDTO",selfKey:{key:"passengerUuid",value:"员工姓名"},checkFlag:!0},{parentKey:"accountDTO",selfKey:{key:"phoneNumber",value:"手机号"},checkFlag:!0},{parentKey:"passengerProfileOutDTO",selfKey:{key:"stationName",value:"默认站点"},checkFlag:!0},{parentKey:"passengerProfileOutDTO",selfKey:{key:"routeName",value:"默认线路"},checkFlag:!0},{parentKey:"passengerProfileOutDTO",selfKey:{key:"status",value:"激活状态"},checkFlag:!0}]}},a.$watch("$viewContentLoaded",function(e){a.$broadcast("refreshPageList",{pageSize:"20",pageNo:"1"})})}),angular.module("passengerAddControllerModule",[]).controller("passengerAddController",function(e,t,a,r){t.hrUuid?(r.passengerUuid=t.passengerUuid,r.params={status:1,passengerUuid:t.passengerUuid,roleType:t.roleType,hrUuid:t.hrUuid,secondCompanyId:t.secondCompanyId,accountId:t.accountId,routeName:t.routeName,stationName:t.stationName,phoneNumber:t.phoneNumber,employeeId:t.employeeId,passengerName:t.passengerName},r.active=!0,r.breadcrumbParams={hrUuid:t.hrUuid,secondCompanyId:t.secondCompanyId},r.breadcrumbText={lv1:"乘客列表",lv2:"乘客详情"}):a.go("passenger.list",{hrUUID:"666",secondCompanyID:"666"}),r.editPassengerProfile=function(e){r.active=!e},r.addPassengerProfile=function(){var t={phoneNumber:r.params.phoneNumber,roleType:r.params.roleType,accountId:r.params.accountId,name:r.params.passengerName,employeeId:r.params.employeeId,hrUuid:r.params.hrUuid,passengerUuid:r.params.passengerUuid,secondCompanyId:r.params.secondCompanyId};console.log(t),e.addPassenger(t).then(function(e){console.log("result")},function(){})},r.deletePassenger=function(){var t={roleType:r.params.roleType,hrUuid:r.params.hrUuid,passengerUuid:r.params.passengerUuid};console.log("--- del passenger ---"),console.log(1,t),e.deletePassengerByID(t).then(function(e){console.log(1,e)},function(){})}}),angular.module("passengerControllerModule",[]).controller("passengerController",function(e){e.leftSideTitle="乘客管理",e.icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=",e.menuArray=[{name:"乘客列表",class:"",permission:"",uiSref:"passenger.list"},{name:"乘客反馈",class:"",permission:"",uiSref:"passenger.feedback"},{name:"乘坐情况",class:"",permission:"",uiSref:"passenger.report"}]}),angular.module("passengerDetailControllerModule",[]).controller("passengerDetailController",function(e,t,a,r){t.passengerUuid&&t.hrUuid?(r.passengerUuid=t.passengerUuid,r.params={status:0==t.status?"未激活":"已激活",passengerUuid:t.passengerUuid,roleType:t.roleType,hrUuid:t.hrUuid,secondCompanyId:t.secondCompanyId,accountId:t.accountId,routeName:t.routeName,stationName:t.stationName,phoneNumber:t.phoneNumber,employeeId:t.employeeId,passengerName:t.passengerName},r.active=!1,r.breadcrumbParams={hrUuid:t.hrUuid,secondCompanyId:t.secondCompanyId},r.breadcrumbText={lv1:"乘客列表",lv2:"乘客详情"},console.log("xxx"),console.log(r.breadcrumbText)):a.go("passenger.list",{hrUUID:"666",secondCompanyID:"666"}),r.editPassengerProfile=function(e){r.active=!e},r.submitPassengerProfile=function(){var t={phoneNumber:r.params.phoneNumber,roleType:r.params.roleType,accountId:r.params.accountId,name:r.params.passengerName,employeeId:r.params.employeeId,hrUuid:r.params.hrUuid,passengerUuid:r.params.passengerUuid,secondCompanyId:r.params.secondCompanyId};e.updatePassengerByID(t).then(function(e){console.log("result")},function(){})},r.deletePassenger=function(){var t={roleType:r.params.roleType,hrUuid:r.params.hrUuid,passengerUuid:r.params.passengerUuid};console.log("--- del passenger ---"),console.log(1,t),e.deletePassengerByID(t).then(function(e){console.log(1,e)},function(){})}}),angular.module("passengerHttpServiceModule",["ngResource"]).factory("passengerHttpService",function(e,t){var a={},r=t.passengerAccount,n=t.passengerProfile;return a.passenger=function(t){var a={apiPath:r+"passenger",paramsList:{hrUUID:t.hrUUID,secondCompanyID:t.secondCompanyID}};return e({method:"GET",url:a.apiPath,params:a.paramsList})},a.passengerByID=function(t){console.log(t+":::okok"),console.log(1,t);var a={apiPath:n+"passengerByID",paramsList:{passengerUUID:t.passengerUUID}};return e({method:"GET",url:a.apiPath,params:a.paramsList})},a.updatePassengerByID=function(t){var a={apiPath:r+"passenger",paramsList:{accountDTO:{phoneNumber:t.phoneNumber,roleType:t.roleType},baseProfileDTO:{accountId:t.accountId,name:t.name},passengerProfileDTO:{accountId:t.accountId,employeeId:t.employeeId,hrUuid:t.hrUuid,passengerUuid:t.passengerUuid,secondCompanyId:t.secondCompanyId}}};return e({method:"PATCH",url:a.apiPath,params:a.paramsList})},a.deletePassengerByID=function(t){var a={apiPath:r+"passenger",paramsList:{passengerUUID:t.passengerUuid,hrUUID:t.hrUuid,roleType:t.roleType}};return e({method:"DELETE",url:a.apiPath,params:a.paramsList})},a.addPassenger=function(t){var a={apiPath:r+"passenger",paramsList:{accountDTO:{phoneNumber:t.phoneNumber,roleType:t.roleType},baseProfileDTO:{accountId:t.accountId,name:t.name},passengerProfileDTO:{accountId:t.accountId,employeeId:t.employeeId,hrUuid:t.hrUuid,passengerUuid:t.passengerUuid,secondCompanyId:t.secondCompanyId}}};return e({method:"POST",url:a.apiPath,params:a.paramsList})},a}),angular.module("reportControllerModule",[]).controller("reportController",function(e){}),angular.module("busControllerModule",[]).controller("busController",function(e){}),angular.module("dirverControllerModule",[]).controller("dirverController",function(e){}),angular.module("routeControllerModule",[]).controller("routeController",function(e){}),angular.module("scheduleControllerModule",[]).controller("scheduleController",function(e){}),angular.module("schedulerControllerModule",[]).controller("schedulerController",function(e){e.leftSideTitle="班车管理",e.icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=",e.menuArray=[{name:"线路管理",class:"",permission:"",uiSref:"scheduler.route"},{name:"站点管理",class:"",permission:"",uiSref:"scheduler.site"},{name:"司机管理",class:"",permission:"",uiSref:"scheduler.dirver"},{name:"车辆管理",class:"",permission:"",uiSref:"scheduler.bus"},{name:"排班管理",class:"",permission:"",uiSref:"scheduler.schedule"}]}),angular.module("siteControllerModule",[]).controller("siteController",function(e){});