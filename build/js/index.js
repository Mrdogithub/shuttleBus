'use strict'
/**
 * @description
 * md5 password service. 
 *
 * invoke list:
 * login.controller.js 
 * forget.controller.js
 * active.controller.js
 *
 */

var encrypt = angular.module('md5ServiceModule', []);
encrypt.service('md5Service', function(){
    var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
    var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
    var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

    this.hex_md5 = function(s) {

        return binl2hex(core_md5(str2binl(s), s.length * chrsz));
    }
    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length
     */
    function core_md5(x, len) {
      /* append padding */
      x[len >> 5] |= 0x80 << ((len) % 32);
      x[(((len + 64) >>> 9) << 4) + 14] = len;

      var a =  1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d =  271733878;

      for(var i = 0; i < x.length; i += 16)
      {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;

        a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
        d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
        b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
        d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
        c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
        d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
        d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

        a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
        d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
        c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
        b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
        d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
        c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
        d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
        c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
        a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
        d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
        c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
        b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

        a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
        d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
        b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
        d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
        c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
        d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
        a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
        d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
        b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

        a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
        d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
        c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
        d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
        d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
        a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
        d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
        b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
      }
      return Array(a, b, c, d);
    }

    function md5_cmn(q, a, b, x, s, t) {
            return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
        }

    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }
    /*
     * Calculate the HMAC-MD5, of a key and some data
     */
    function core_hmac_md5(key, data) {
        var bkey = str2binl(key);
        if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
        var ipad = Array(16),
            opad = Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
        return core_md5(opad.concat(hash), 512 + 128);
    }
    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
    /*
     * Bitwise rotate a 32-bit number to the left.
     */
    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }
    /*
     * Convert a string to an array of little-endian words
     * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
     */
    function str2binl(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
        return bin;
    }
    /*
     * Convert an array of little-endian words to a string
     */
    function binl2str(bin) {
        var str = "";
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < bin.length * 32; i += chrsz)
        str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
        return str;
    }
    /*
     * Convert an array of little-endian words to a hex string.
     */
    function binl2hex(binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
        }
        return str;
    }
    /*
     * Convert an array of little-endian words to a base-64 string
     */
    function binl2b64(binarray) {
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i += 3) {
            var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16) | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8) | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
            for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
                else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
            }
        }
        return str;
    }
}).
service('Base64', function(){
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }


    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
}).
service('Sha1', function(){
    var hexcase = 0; /*   hex   output   format.   0   -   lowercase;   1   -   uppercase                 */
    var b64pad = ""; /*   base-64   pad   character.   "="   for   strict   RFC   compliance       */
    var chrsz = 8; /*   bits   per   input   character.   8   -   ASCII;   16   -   Unicode             */

    /*  
     * 供外部调用的方法 
     */
    this.hex_sha1 = function (s) {
        return binb2hex(core_sha1(str2binb(s), s.length * chrsz));
    }
    /*  
     *   Calculate   the   SHA-1   of   an   array   of   big-endian   words,   and   a   bit   length  
     */
    function core_sha1(x, len) {
        /*   append   padding   */
        x[len >> 5] |= 0x80 << (24 - len % 32);
        x[((len + 64 >> 9) << 4) + 15] = len;

        var w = Array(80);
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        var e = -1009589776;

        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            var olde = e;

            for (var j = 0; j < 80; j++) {
                if (j < 16) w[j] = x[i + j];
                else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
                var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
                e = d;
                d = c;
                c = rol(b, 30);
                b = a;
                a = t;
            }

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
            e = safe_add(e, olde);
        }
        return Array(a, b, c, d, e);

    }  
})
'use strict'
/**
 * @description
 * smsCode component works in login/forget.html and login/active.html
 *
 * invoke in html file by:<sms-code-component phone-number="phoneNumber"request-type="requestType" sleep='true'></sms-code-component>
 * @phone-number={string}:get value from parent controller
 * @request-type={string}:--
 * @sleep={booleans}: true => init component status by "获取验证码",false => init component status by "重新获取"
 *
 */
angular.module('enterSubmitModule',[]).directive('enterSubmit', function () {
    // return {
    //     restrict: 'A',
    //     // scope:true,
    //     link: function (scope, elem, attrs) {
    //         console.log('xxx submit xxxx')
    //         elem.bind('keydown keypress', function(event) {
    //               console.log('hi keydown')
    //              var code = event.keyCode || event.which;
    //              if (code === 13) {
    //                     console.log('--- enterSubmit ----')
   
    //              }
    //         });
    //     }
    // }
});
'use strict'

/**
 * @description
 * goback component works in html files
 *
 * invoke in html file by:<go-back goPath="entry.login" params="pathParamsForGoBack"></go-back>
 * @goPath={string}:refer to module/config/route.js file,and get target place string in state('params')
 * @params={josn}:define json obj as params for the goPath
 *
 */
angular.module('gobackModule',[]).directive('goBack',function($state){
	return {
		restrict:"EA",
		template:'<a>'
				+'<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAAAXNSR0IArs4c6QAAAKpJREFUGBl9j7ENQiEQhoUESOx1CS1dQAdwDhqmoWENG+2eG9ixhPYaKMD7jVyeyvMScgffB3eIWSecc4uc85HQQ37zNxxqrRticzEWRnBN51FKuWOhB0MI15cwBfG6+AchSJr2QANxTzwL0AK/4DmUUrWBlqXWek+bSGuVUjqjZYPIPCQgJFrRGLP13t9YQIGbPYn7T0kfAiRr7bKUMlCJdpcfYSSdqL4/AZgNcfcvzqHbAAAAAElFTkSuQmCC"/>'
				+'</a>',
		scope:{
			gopath:'@',
			params:'='
		},
		link:function(scope,elements,attrs){
			elements.bind('click',function(){
				if(scope.gopath){
					$state.go(scope.gopath,scope.params)	
				}else{
					window.history.go(-1)
				}
				
			});
		}
	}
})
'use strict';
angular.module("headerModule",[]).directive('headerComponent',function(){
	return {
		restrict:"E",
		template:'<div class="header container-shadow-border">'
				 + '<h1>福特 - 班车管理平台</h1>'
				 +'</div>'
	}
})



angular.module('httpInterceptorModule',[]).factory('httpInterceptor', [ '$q', '$injector',function($q, $injector) {  
        var httpInterceptor = {  
            'responseError' : function(response) {  
                if (response.status == 401) {  
                    // var rootScope = $injector.get('$rootScope');  
                    // var state = $injector.get('$rootScope').$state.current.name;  
                    // rootScope.stateBeforLogin = state;  
                    // rootScope.$state.go("login"); 
                    $.alert('可能遇到问题，请稍候再试:401')
                    return $q.reject(response);  
                } else if (response.status === 404) {  
                   $.alert('可能遇到问题，请稍候再试:404') 
                    return $q.reject(response);  
                } else if (response.status === 500){
                   $.alert('可能遇到问题，请稍候再试:500') 
                    return $q.reject(response);  
                }
            },  
            'response' : function(response) {  
                return response;  
            }  
        }  
        return httpInterceptor;  
    }   
]);  

'use strict';
angular.module("leftNavModule",[]).directive('leftNavComponent',function(){
	return {
		restrict:"E",
		replace:true,
		scope:false,
		template:'<div class="left-side">'
				+	'<div class="title-wrapper">'
				+       '<img class="menu-icon" ng-src={{icon}} />'
				+		'<span>{{leftSideTitle}}</span>'
				+	'</div>'
				+	'<div class="menu-list">'
				+	'	<ul>'
				+	'		<li ng-repeat="menuItem in menuArray track by $index" ng-click="goTo(menuItem.uiSref,menuItem)" permission="{{menuItem.permission}}" ui-sref="{{menuItem.uiSref}}" ui-sref-active="selected">{{menuItem.name}}</li>'
				+	'	</ul>'
				+	'</div>'
				+   '</div>',
		controller:function($state,$scope,$location,$timeout,$window){
			$scope.goTo=function(targetState,currentMenuItemObj){
				if(currentMenuItemObj && currentMenuItemObj.target === '_blank'){
					return false;
				}

				if(targetState === undefined || targetState === ''){
					return
				}

				if(targetState === 'building'){
					$.confirm('正在努力建设中...')
				}

				$state.go(targetState);
			}
		}
	}
})
angular.module('paginationModule',[])
.directive('paginationComponent',['$parse','$q',function($parse,$q){
	return{
		restrict:'E',
		template:'<div class="pagination-wrapper">'
				+'	<div class="pagination-num">'
				+'		<select ng-model="currentItemNumber" class="pagination-select" ng-options="s for s in [20,40,60,80,100]" ng-change="itemNumChange(currentItemNumber)"></select>'
				+'		<span>条/页</span>'
					// <!--
					// 	<span>共{{pageTotal.length}页,<label>{{total}}</label>条</span>
					// -->
				+'	</div>'

				+'	<ul class="pagination-operate">'
			// <!-- 	<li ng-class="{no_active:pageListFlag.pre == false}"
			// 		ng-click="goToFirstOrLast(1)">首页</li> -->
				+'		<li ng-class="{no_active:pageListFlag.pre == false}" class="pageOperate" ng-click="prePageList()">上一页</li>'
				+'		<li ng-repeat="i in pageList" class="page_num {{i == currentPageIndex?\'active\':\' \'}}" ng-click="changePage(i)"> {{i}}</li>'
				+'		<li ng-class="{no_active:pageListFlag.next == false}"  ng-click="nextPageList()">下一页</li>'
			// <!-- 		<li ng-class="{no_active:pageListFlag.next == false}"
			// 				ng-click="goToFirstOrLast(pageTotal.length)"></li> -->
				+'	</ul>'
				+'</div>',
		scope:{
			pageConfigs:'='
			// pageConfigs={
			// 	params:{},
			// 	list:null,
			// 	getList:function(){
			// 		return checkListService.getLLDList(this.params)
			// 	},
			// 	dataSet:function(){},
			// 	extendParams:function(){}
			// }
		},
		link:function(scope,elm,attrs){
			function getListFun(){
				var deffered = $q.defer();
				scope.pageConfigs.list = null;
				scope.pageConfigs.params.pageSize = scope.currentItemNumber;
				if(scope.pageConfigs.params.pageNo){
					scope.pageConfigs.params.pageNo = scope.currentPageIndex;
				}else if(scope.pageConfigs.params.curPage){
					scope.pageConfigs.params.curPage = scope.currentPageIndex;
				}

				var temp = [];
				var _params={};

				for(var key in scope.pageConfigs.params){
					if(scope.pageConfigs.params[key]){
						_params[key] = scope.pageConfigs.params[key];
					}
				}

				var _params = angular.extend(_params,scope.pageConfigs.extendParams);

				scope.pageConfigs.getList(_params).then(function(data){
					var _total;
					if(scope.pageConfigs.dataSet){
						scope.pageConfigs.dataSet(data)
					}

					if(data.data){
						data = data.data;
					}
					scope.pageConfigs.list = data.result || data.value;
					_total = scope.pageConfigs.list.length;
		

					// if(data.total != undefined){
					// 	_total = data.total
					// }else if(data.totalRows != undefined){
					// 	_total = data.totalRows;
					// }else if(data.totalNumber !=undefined){
					// 	_total = data.totalNumber;
					// }else{
					// 	if(data.pageVO == null){
					// 		_total = 0;
					// 	}else{
					// 		_total = data.pageVO.totalRows;
					// 	}
					// }
					deffered.resolve(_total);
				},function(errorMessage){
					scope.pageConfigs.list = [0]
				});

				return deffered.promise;
			}

			function refreshData(pageIndex){
				scope.pageToTotalStart = pageIndex-1;
				scope.currentPageIndex = pageIndex;
				getListFun().then(function(total){
					scope.total = total;
					scope.pageTotal = returnArr();
					scope.pageList = returnShowListArr();
					judgePreNext();
				});
			}

			function judgePreNext(){
				scope.pageListFlag.pre = scope.currentPageIndex ==1?false:true;
				scope.pageListFlag.next = scope.currentPageIndex == scope.pageTotal.length?false:true;
			}

			function returnArr(){
				var arr = [];
				var max = Math.ceil(scope.total / scope.currentItemNumber);
				for(var i=1;i<=max ;i++){
					arr.push(i)
				}

				if(max == 0){
					arr.push(1);
				}
				return arr;
			}

			function returnShowListArr(){
				return scope.pageTotal.slice(scope.pageToTotalStart,scope.pageToTotalStart+scope.pageTotalListNum);
			}

			scope.pageToTotalStart = 0;
			scope.pageTotalListNum=5
			scope.pageTotal = [];
			scope.pageList = [];
			scope.pageListFlag = {
				pre:false,
				next:false
			}

			scope.nextPageList = function(){
				console.log('nextPageList')
				if(scope.currentPageIndex < scope.pageTotal.length){
					var _num = scope.currentPageIndex +1;
					if(parseInt(scope.pageToTotalStart) < 
					   (scope.pageTotal[scope.pageTotal.length-1]-scope.pageTotalListNum) &&
					   scope.currentPageIndex == scope.pageList[scope.pageList.length-1]){
						scope.pageToTotalStart ++;
						scope.pageList = returnShowListArr();

					}
					scope.changePage(_num);
				}
			};

			//上一页
			scope.prePageList = function(){
				if(scope.currentPageIndex > 1){
					var _num = scope.currentPageIndex -1;
					if(parseInt(scope.pageToTotalStart) >=
						parseInt(scope.pageTotal[0])&&
						scope.currentPageIndex == scope.pageList[0]){
						scope.pageToTotalStart --;
						scope.pageList = returnShowListArr();
					}
					scope.changePage(_num)
				}
			};

			scope.itemNumChange = function(num,page){
				var _page = parseInt(page) ||1;
				scope.currentItemNumber = parseInt(num) || 20;
				refreshData(_page);
			}

			// /scope.itemNumChange(scope.pageConfigs.params.pageSize,scope.pageConfigs.params.pageNo);

			scope.changePage = function(num){
				scope.currentPageIndex = num;
				judgePreNext();
				getListFun().then(function(total){
					if(scope.total !=total){
						scope.total = total;
						scope.pageTotal = returnArr();
						scope.pageList = returnShowListArr();
					}
				})
			}

			scope.goToFirstOrLast = function(){
				// if(scope.currentPageIndex != pageNum){
				// 	scope.pageTotalStart = pageNum == 1?0:pageNum-3<0?pageNum-2:pageNum-3;
				// 	scope.pageList = returnShowListArr();
				// 	scope.changePage(pageNum);
				// }
			}

			scope.$on('refreshPageList',function(e,d){
				if(d){
					scope.pageConfigs.params = angular.extend(scope.pageConfigs.params,d);
				}
				var _obj = d ||{pageSize:scope.currentItemNumber,pageNo:1};
				scope.itemNumChange(_obj.pageSize,_obj.pageNo)
			});
		}
	}
}])
'use strict'
/**
 * @description
 * smsCode component works in login/forget.html and login/active.html
 *
 * invoke in html file by:<sms-code-component phone-number="phoneNumber"request-type="requestType" sleep='true'></sms-code-component>
 * @phone-number={string}:get value from parent controller
 * @request-type={string}:--
 * @sleep={booleans}: true => init component status by "获取验证码",false => init component status by "重新获取"
 *
 */
angular.module('smsCodeModule',[]).directive('smsCodeComponent',function(loginHttpService,SMSCODE_ERROR,$state){
	return {
		restrict:"EA",
		template:'<button  id="smsCodeBtn" class="btn-normal" ng-class="{\'smsActive\': isActive,\'smsSheep\': !isActive}"  ng-click="invokeSmsCode()">{{defaultValue}}</button>',
		scope:{
			phoneNumber:'=phoneNumber',
			requestType:'=requestType',
			smsCode:'=smsCode',
			defaultValue:'@defaultValue',
			codeStatus:'=codeStatus',
			sleep:'@'
		},
		link:function(scope,elements,attrs){
			var time = 60;
			var countTime="";
			var _forgetFlag=false;
			scope.defaultValue == '获取验证码'?_forgetFlag = true:_forgetFlag=false;
			clearTimeout(countTime);
			scope.invokeSmsCode = function(){
				time = 60;
				scope.isActive = true; //disabled click event when get smsCode progress working.
				
				loginHttpService.account({'phoneNumber':scope.phoneNumber,'requestType':scope.requestType}).then(function(result){
					var responseData = result.data;
					if(!responseData.error){
						setTime('smsCodeBtn',time,scope.defaultValue);
						scope.smsCode = responseData.value.smsCode;
						scope.codeStatus = "验证码已发送至"+scope.phoneNumber
					}else{
						switch(responseData.error.statusCode){
							case SMSCODE_ERROR.STATUS_CODE_0100108.code:errorMessageFn(SMSCODE_ERROR.STATUS_CODE_0100108.message,responseData)
								break;
							case SMSCODE_ERROR.SMSCODE_ERROR_0100110.code:errorMessageFn(SMSCODE_ERROR.STATUS_CODE_0100108.message,responseData)
								break;
						}
						
						function errorMessageFn(errorMessageText,responseDataObj){
							$.alert(errorMessageText,function(){
								scope.activeText = "激活";
								scope.disabled = false;
							})
						}
					}
				},function(error){
					$.alert('可能遇到问题,请稍后再试。',function(){})
					scope.activeText = "激活";
					scope.disabled = false;
				});
			}

			function setTime(postion,totalTime,defaultValue){
				if(totalTime ==0 && _forgetFlag){
					scope.isActive = false;
					document.getElementById(postion).removeAttribute("disabled");
					document.getElementById(postion).innerHTML = '获取验证码';
					document.getElementById(postion).removeAttribute("class");
					document.getElementById(postion).setAttribute('class','btn-normal smsSheep');
					_forgetFlag = false;
					clearTimeout(countTime);
					return;
				}

				if(totalTime == 0 && !_forgetFlag){
					scope.isActive = false;
					document.getElementById(postion).removeAttribute("disabled");
					document.getElementById(postion).innerHTML = '重新获取';
					document.getElementById(postion).removeAttribute("class");
					document.getElementById(postion).setAttribute('class','btn-normal smsSheep');
					clearTimeout(countTime);
					return;
				}else{
					scope.isActive = true;
					document.getElementById(postion).setAttribute('disabled','disabled');
					document.getElementById(postion).innerHTML='重新获取('+totalTime+')';
					document.getElementById(postion).removeAttribute("class");
					document.getElementById(postion).setAttribute('class','btn-normal smsActive');
					clearTimeout(countTime);
					totalTime--;
				}

				countTime = setTimeout(function(){
					setTime(postion,totalTime);
				},1000);
			}

			if(scope.sleep){
				setTime('smsCodeBtn',0);
			}else{
				setTime('smsCodeBtn',60)
			}
		}
	}
})
'use strict'
/**
 * @description
 * smsCode component works in login/forget.html and login/active.html
 *
 * invoke in html file by:<sms-code-component phone-number="phoneNumber"request-type="requestType" sleep='true'></sms-code-component>
 * @phone-number={string}:get value from parent controller
 * @request-type={string}:--
 * @sleep={booleans}: true => init component status by "获取验证码",false => init component status by "重新获取"
 *
 */
angular.module('tableComponentModule',[]).directive('tableComponent',function(loginHttpService,$state){
	return {
		restrict:"EA",
		template:'	<div class="table-wrapper">'
				+' 	    <div class="table-head">'
				+'		 	<span class="first-operate"></span>'
				+'			<span ng-repeat="head in tableConfig.head">{{head["selfKey"]["value"]}}</span>'
				+'			<span>操作</span>'
				+'		</div>'
				+'		<ul class="table-body">'
				+'			<li class="list-item" ng-repeat="item in tableData track by $index">'
				+'				<span class="first-operate" ng-if="stableFlag.checkbox">'
				+'					<input type="checkbox" id="item{{$index}}" id="item{{$index}}" ng-model="selectObj.checkArray[$index]" ng-click="selectObj.checkIsAllSelect(selectObj.checkArray[$index])" ng-disabled="tableConfig.changeEnable && tableConfig.changeEnable(item)" data-disable="{{tableConfig.changeEnable && tableConfig.changeEnable(item)}}" />'
				+'				    <label for="item{{$index}}" class="check-box"></label>' 
				+'				</span>'
				+'				<span ng-repeat="head in tableConfig.head">{{item[head.parentKey][head.selfKey.key] || tableConfig.defaultValue}}</span>'
				// +'				<span ><a>编辑</a></span>'
				+'				<span ng-repeat="o in stableFlag.operate" class="item-operate"  ng-click="preventPropagation($event)" ng-if="tableConfig.operateIfFlag || (stableFlag.operate && stableFlag.operate.Length !=0 && (o.ngIf(item) ||o.ngIf ==undefined))">'
				+'					  <a ng-click="o.fun(item,$event)" ng-if="tableConfig.operateIfFlag || (o.ngIf(item) || o.ngIf ==undefined)">{{o.name}}</a> '     	
				+'				</span>'
				+'			</li>'
				+'		</ul>'
				+'	</div>',
		scope:{
			tableConfig:'=',
			tableData:'='
		},
		link:function(scope,elements,attrs){
			scope.headOptional = scope.tableConfig.setHeadOptional;
			scope.stableFlag = scope.tableConfig.stableFlag;
			scope.tableConfig.defaultValue = scope.tableConfig.defaultValue || null;
			if(scope.headOptional){ //generate head title for table component
				scope.setHeadOptionalFn={
					checkArray:scope.headOptional.selectOptions,
					minOptionalNum:scope.headOptional.selectOptions.cancelSelectNum || 5,
					returnHead:function(obj){
						var _headArray = [];
						for(var i=0;i<obj.length;i++){
							if(obj[i].checkFlag == true){
								_headArray.push(obj[i]);
							}
						}
						return _headArray;
					},
					isSelectAllHeadITems:function(){},
					selectItem:function(){},
					ensureSelect:function(){}
				};
				scope.tableConfig.head = scope.setHeadOptionalFn.returnHead(scope.headOptional.selectOptions);
			}


			if(scope.stableFlag.checkbox){//check box fn...
				scope.selectObj = {
					allSelecteFlag:false,
					checkArray:[],
					selectAll:function(){
						var _element='';
						for(var i=0;i<this.checkArray.length;i++){
							_element = "#item"+i;
							this.checkArray[i]=this.allSelecteFlag;
                            var _status = angular.element(document.getElementById(_element)).data('disable')
							console.log(_status+"xxx ststu")
							if(_status == true &&this.allSelecteFlag){

								this.checkArray[i] = false;
							}
						}
					},
					checkIsAllSelect:function(flag){
						var _isAllSelectFlag = 0;
						var _array = this.checkArray;
						var _length = _array.length;
						if(flag == false){
							this.allSelecteFlag = false;
						}else{
							for(var i=0;i<_length;i++){
								if(_array[i]==flag){
									_isAllSelectFlag++;
								}else{
									return _isAllSelectFlag;
								}
							}

							if(_isAllSelectFlag == _length){
								this.allSelecteFlag = true;
							}
						}
					}
				}

				scope.$on('checkboxSelectAll',function(n,o){
					scope.selectObj.selectAll();
				})
			};


			scope.$watch('tableData',function(n,o){
				console.log(1,n)
				if(n === null) return;
				if(scope.stableFlag.checkbox){
					scope.selectObj.allSelectFlag =false;
					//scope.selectObj.checkArray = scope.tableConfig.checkbox.checkArray;
					console.log('checkArray')
					console.log(scope.selectObj.checkArray)
				}
				// if(_beginWidth == 0){
				// 	scope.autoColumnWidth = computeFun.getAutoWidth(n,scope.tableConfig.head)
				// }
			});			
		}
	}
})







'use strict'
angular.module('constModule',[])
.constant('APISERVICEPATH',{
	"dev":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
	"passengerDev":'./modules/data/',
	"passengerAccount":"http://f-shuttlebus-accountandauthority-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/passengerAccount/",
	"passengerProfile":"http://f-shuttlebus-profile-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/passengerProfile/",
	"prd":"http://19.229.169.185:7072/api/v1/"
})
.constant('ERRORCODE',{
	'activeProgress':'0100104',
	'loginProgress':'0100105'
})
.constant('REQUESTTYPE',{
	'activeAccount':0,
	'forgetAccount':1
})
.constant('CHECK_ACCOUNT_STATUS',{
	'accountActive':'0',
	'accountLogin':'1'
})
.constant('CHECK_ACCOUNT_ERROR',{
	'STATUS_CODE_401':{'code':'401','message':'可能遇到问题，请稍候再试。'},
	'STATUS_CODE_2':{'code':'2','message':'对不起，您的手机号未注册。请联系公司相关负责人进行注册。'},
	'STATUS_CODE_0100102':{'code':'0100102','message':'对不起，您的手机号未注册。请联系公司相关负责人进行注册。'},
	'STATUS_CODE_0100101':{'code':'0100101','message':'无效手机号。'},
	'STATUS_CODE_0100108':{'code':'0100108','message':'发送验证码失败，请稍候再试'},
	'STATUS_CODE_0100110':{'code':'0100110','message':'发送验证码失败，请稍候再试'}

})
.constant('ACTIVE_ACCOUNT_ERROR',{
	'STATUS_CODE_0100113':{'code':'0100113','message':'帐户激活可能遇到问题，请稍候再试。'},
	'STATUS_CODE_0100115':{'code':'0100115','message':'无效的请求。'},
	'STATUS_CODE_0100106':{'code':'0100106','message':'无效的请求。'},
	'STATUS_CODE_0100109':{'code':'0100109','message':'验证码已经失效,请重新获取验证码。'},
	'STATUS_CODE_0100112':{'code':'0100112','message':'验证码不正确,请重新输入或重新获取验证码。'}
})
.constant('LOGIN_ACCOUNT_ERROR',{
	'STATUS_CODE_0200101':{'code':'0200101','message':'用户名或密码不正确，请重新输入。'},
	'STATUS_CODE_0200104':{'code':'0200104','message':'登陆可能遇到问题，请稍候再试'},
	'STATUS_CODE_0200107':{'code':'0200107','message':'无效的请求'},
	'STATUS_CODE_0200106':{'code':'0200106','message':'无效的请求'}
})
.constant('SMSCODE_ERROR',{
	'STATUS_CODE_0100108':{'code':'0100108','message':'发送验证码失败，请稍候再试。'},
	'STATUS_CODE_0100110':{'code':'0100110','message':'发送验证码失败，请稍候再试。'}
})
.constant('FORGET_ACCOUNT_ERROR',{
	'STATUS_CODE_0100112':{'code':'0100112','message':'验证码不正确,请重新输入或重新获取验证码。'},
	'STATUS_CODE_0100109':{'code':'0100109','message':'验证码已经失效,请重新获取验证码。'},
	'STATUS_CODE_0200107':{'code':'0200107','message':'无效的请求'},
	'STATUS_CODE_0200106':{'code':'0200106','message':'无效的请求'},
	'STATUS_CODE_0200104':{'code':'0200104','message':'重置密码可能遇到问题，请稍候再试'},
})
'use strict'
angular.module('injectModules',[
	'ui.router',
	'ngAnimate',
	'ngResource',
	'headerModule',
	'md5ServiceModule',
	'checkControllerModule',
	'gobackModule',
	'constModule',
	'loginHttpServiceModule',
	'forgetControllerModule',
	'loginControllerModule',
	'activeControllerModule',
	'smsCodeModule',
	'passengerControllerModule',
	'listControllerModule',
	'reportControllerModule',
	'feedbackControllerModule',
	'leftNavModule',
	'schedulerControllerModule',
	'routeControllerModule',
	'busControllerModule',
	'dirverControllerModule',
	'siteControllerModule',
	'scheduleControllerModule',
	'tableComponentModule',
	'paginationModule',
	'passengerHttpServiceModule',
	'passengerDetailControllerModule',
	'httpInterceptorModule'
])
'use strict';

angular.module('app',['injectModules'])
.config(['$stateProvider', '$urlRouterProvider','$qProvider','$httpProvider',function ($stateProvider,$urlRouterProvider,$qProvider,$httpProvider) {

	//$qProvider.errorOnUnhandledRejections(false);

	$httpProvider.interceptors.push('httpInterceptor');
	
	$stateProvider
	.state('entry',{
		url:"/entry",
		templateUrl:"modules/login/entry.html"
	})
	.state('entry.check',{
		url:"/check",
		templateUrl:"modules/login/check.html",
		controller:"checkController"
	})
	.state('entry.login',{
		url:"/login",
		params:{'phoneNumber':null,'requestType':null,'smsCode':null},
		templateUrl:"modules/login/login.html",
		controller:'loginController'
	})
	.state('entry.active',{
		url:"/active",
		params:{'phoneNumber':null,'smsCode':null,'requestType':null},
		templateUrl:"modules/login/active.html",
		controller:'activeController'
	})
	.state('entry.forget',{
		url:'/forget',
		templateUrl:"modules/login/forget.html",
		params:{'phoneNumber':null,'smsCode':null,'requestType':null},
		controller:'forgetController'
	})
	.state('passenger',{
		url:"/passenger",
		templateUrl:'modules/passengerMgmt/passenger.html',
		controller:'passengerController'
	})
	.state('passenger.list',{
		url:'/list',
		templateUrl:'modules/passengerMgmt/list.html',
		controller:'listController'
	})
	.state('passenger.feedback',{
		url:'/feedback',
		templateUrl:'modules/passengerMgmt/feedback.html',
		controller:'feedbackController'
	})
	.state('passenger.report',{
		url:'/report',
		templateUrl:'modules/passengerMgmt/report.html',
		controller:'reportController'
	})
	.state('passenger.detail',{
		url:'/detail',
		params:{
			'status':null,
			'passengerUuid':null,
			'roleType':null,
			'hrUuid':null,
			'secondCompanyId':null,
			'accountId':null,
			'routeName':null,
			'stationName':null,
			'phoneNumber':null,
			'employeeId':null,
			'passengerName':null
		},
		templateUrl:'modules/passengerMgmt/passenger.detail.html',
		controller:'detailController'
	})
	.state('scheduler',{
		url:"/scheduler",
		templateUrl:'modules/schedulerMgmt/scheduler.html',
		controller:'schedulerController'
	})
	.state('scheduler.route',{
		url:'/route',
		templateUrl:'modules/schedulerMgmt/route.html',
		controller:'routeController'
	})
	.state('scheduler.site',{
		url:'/site',
		templateUrl:'modules/schedulerMgmt/site.html',
		controller:'siteController'
	})
	.state('scheduler.dirver',{
		url:'/dirver',
		templateUrl:'modules/schedulerMgmt/dirver.html',
		controller:'dirverController'
	})
	.state('scheduler.bus',{
		url:'/bus',
		templateUrl:'modules/schedulerMgmt/bus.html',
		controller:'busController'
	})
	.state('scheduler.schedule',{
		url:'/schedule',
		templateUrl:'modules/schedulerMgmt/schedule.html',
		controller:'scheduleController'
	})
	$urlRouterProvider.otherwise('entry/check')

}]);
angular.module("activeControllerModule",[])
.controller("activeController",function(loginHttpService,REQUESTTYPE,ACTIVE_ACCOUNT_ERROR,md5Service,$scope,$state,$stateParams){

	if(!$stateParams.phoneNumber){
		$state.go('entry.check');
	}else{
		$scope.phoneNumber = $stateParams.phoneNumber;
		$scope.smsCode = $stateParams.smsCode;
		$scope.codeStatus = "验证码已发送至"+$scope.phoneNumber;
	}
	
	$scope.activeText = "激活";
	$scope.disabled = false;
	$scope.passwordStatus = false;

	$scope.displayPasswordStatus = function(passwordPosition,passwordStatus){
		if(passwordStatus){
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = false:$scope.passwordFirst=false;
			document.getElementById(passwordPosition).setAttribute('type',"password");
		}else{
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = true:$scope.passwordFirst=true;
			document.getElementById(passwordPosition).setAttribute('type',"text");
		}		
	}	

	$scope.login = function(){
		
		var regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/);

		if(!$scope.smsCode){
			$.alert('请输入验证码');
			return;
		}

		if(!$scope.password){
			$.alert('请输入密码');
			return;
		}
		if(!regex.test($scope.password)){
			$.alert('请输入8-32位密码,必须由数字,字母以及至少包含一个大写字母组成。');
			return;
		}

		if(!$scope.twicePassword){
			$.alert('请输入确认密码')
			return;
		}
				
		if($scope.twicePassword == $scope.password){
			$scope.activeText = "正在激活...";
			$scope.disabled = true;
			loginHttpService.smsCode({'phoneNumber':$scope.phoneNumber,'requestType':REQUESTTYPE.activeAccount,'smsCode':$scope.smsCode,'password':md5Service.hex_md5($scope.password)})
			.then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$.alert('激活成功')
				}else{
					switch(responseData.statusCode){
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100113.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100113.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100115.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100115.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100106.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100106.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100109.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100109.message,responseData)
							break;
						case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100112.code:errorMessageFn(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100112.message,responseData)
							break;
					}

					function errorMessageFn(errorMessageText,responseDataObj){
						$.alert(errorMessageText,function(){
							$scope.activeText = "激活";
							$scope.disabled = false;
						})
					}
				}
			},function(error){
				$.confirm(error.data.message,function(){})
			});	
		}else {
			alertify.alert('密码不一致')
		}
	}
});
angular.module("checkControllerModule",[]).controller("checkController",function(loginHttpService,CHECK_ACCOUNT_STATUS,CHECK_ACCOUNT_ERROR,$scope,$state){
	$scope.btnMessage = "下一步";

	$scope.$watch('phoneNumber',function(n,o){

	})
	$scope.checkNumber = function(e){
		//var myreg = "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$";
		var myreg=/^[0-9][0,1,2,3,4,5,6,7,8,9][0-9]{9}$/; 
		var phoneNumber = $scope.phoneNumber;

		if(!phoneNumber){
			$.alert('请输入手机号',function(){});
			return 
		}
        if(phoneNumber && !phoneNumber.match(myreg)) {
        		alertify.alert('请输入正确的手机号码');
        } else{
        	$scope.btnMessage = "获取权限中..";
        	$scope.disabled= true;

        	loginHttpService.account({'phoneNumber':$scope.phoneNumber,'requestType':0}).then(function(result){
				var responseData = result.data;
				var accountActiveObj = responseData.value;
				
				if(!responseData.error){
					switch(accountActiveObj.status){
						case CHECK_ACCOUNT_STATUS.accountActive:$state.go('entry.active',{'phoneNumber':$scope.phoneNumber,'requestType':'0','smsCode':accountActiveObj.smsCode})
						break;
						case CHECK_ACCOUNT_STATUS.accountLogin:$state.go('entry.login',{'phoneNumber':$scope.phoneNumber,'requestType':'0'})
						break;
					}
				}else{
					switch(responseData.error.statusCode){
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_401.code:errorMessageFn(CHECK_ACCOUNT_ERROR.STATUS_CODE_401.message,responseData)
							break;
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_2.code:errorMessageFn(CHECK_ACCOUNT_ERROR.STATUS_CODE_2.message,responseData)
							break;
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100101.code:errorMessageFn(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100101.message,responseData)
							break;
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100108.code:errorMessageFn(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100108.message,responseData)
							break;
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100102.code:errorMessageFn(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100102.message,responseData)
							break;
						case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100110.code:errorMessageFn( CHECK_ACCOUNT_ERROR.STATUS_CODE_0100110.message,responseData)
							break;
					}

					function errorMessageFn(errorMessageText,responseDataObj){
						$.alert(errorMessageText,function(){
							$scope.btnMessage = "下一步";
							$scope.disabled=false;
							$scope.$apply();
						})
					}
				}
			},function(error){
				$.alert('可能遇到问题，请稍候再试',function(){})
			});
        }	
	}
});
angular.module("forgetControllerModule",[])
.controller("forgetController",function(loginHttpService,REQUESTTYPE,md5Service,$scope,$state,$stateParams){

	if(!$stateParams.phoneNumber){
		$state.go('entry.check')
	}

	$scope.passwordStatus = false; //default status for password false:hidden,true:show
	$scope.phoneNumber=$stateParams.phoneNumber;
	$scope.requestType=REQUESTTYPE.forgetAccount;
	$scope.restText="重置密码";
	$scope.disabled=false;
	$scope.pathParamsForGoBack={
		phoneNumber:$scope.phoneNumber,
		requestType:$scope.requestType
	}

	$scope.displayPasswordStatus = function(passwordPosition,passwordStatus){
		if(passwordStatus){
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = false:$scope.passwordFirst=false;
			document.getElementById(passwordPosition).setAttribute('type',"password");
		}else{
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = true:$scope.passwordFirst=true;
			document.getElementById(passwordPosition).setAttribute('type',"text");
		}
	}

	$scope.restPassword = function(){

		//var regex = new RegExp( /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,32}$/);
		var regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/);

		if(!$scope.smsCode){
			$.alert('请输入验证码');
			return;
		}

		if(!$scope.password){
			$.alert('请输入密码');
			return;
		}
		if(!regex.test($scope.password)){
			$.alert('请输入8-32位密码,必须由数字,字母以及至少包含一个大写字母组成。');
			return;
		}

		if(!$scope.twicePassword){
			$.alert('请输入确认密码')
			return;
		}
		
		if($scope.twicePassword == $scope.password){
			$scope.restText="正在重置...";
			$scope.disabled=true;

			loginHttpService.smsCode({'phoneNumber':$scope.phoneNumber,'requestType':REQUESTTYPE.forgetAccount,'smsCode':$scope.smsCode,'password':md5Service.hex_md5($scope.password)})
			.then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$.alert('密码重置成功,请重新登录',function(){
						$state.go('entry.login',{"phoneNumber":$scope.phoneNumber})
					})
				}else{
					$.alert('可能遇到问题，请稍候再试'+'ErrorCode :'+responseData.statusCode+" : "+responseData.message);
					$scope.restText="重置密码";
					$scope.disabled=false;
				}
			},function(error){
					$.alert(error.data.message,function(){});
					$scope.restText="重置密码";
					$scope.disabled=false;
			});	
		}else {
			alertify.alert('密码不一致');
		}
	}

});
angular.module("loginControllerModule",[])
.controller("loginController",function(loginHttpService,md5Service,LOGIN_ACCOUNT_ERROR,$scope,$state,$stateParams){

	if($stateParams.phoneNumber){
		$scope.phoneNumber = $stateParams.phoneNumber;	
	}else{
		$state.go('entry.check')	
	}

	$scope.smsCode = $stateParams.smsCode;
	$scope.loginText="登录";
	$scope.passwordStatus = false;

	$scope.login = function(){
		// if($scope.)
		$scope.disabled = true;
		if($scope.password){
			$scope.loginText = "登录中...";
			loginHttpService.login({'phoneNumber':$stateParams.phoneNumber,'password':md5Service.hex_md5($scope.password)})
			.then(function(result){
				console.log(1,result)
				var responseData = result.data;
				if(!responseData.error){
					$.alert('登录成功！ 管理页面正在建设中...',function(){
						$scope.loginText = "登录";
						$scope.disabled = false;
						$scope.$apply();						
					})
				}else{

					switch(responseData.error.statusCode){
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200101.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200101.message,responseData)
							break;
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200104.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200104.message,responseData)
							break;
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200107.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200107.message,responseData)
							break;
						case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200106.code:errorMessageFn(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200106.message,responseData)
							break;
						default :$.alert(responseData.error.message)
					}

					function errorMessageFn(errorMessageText,responseDataObj){
						$.alert(errorMessageText,function(){
							$scope.loginText = "登录";
							$scope.disabled = false;
							$scope.$apply();
						})
					}
				}

			},function(errorResult){
				var errorResponseData = errorResult.data.error;
				$.alert(errorResponseData.message+":"+errorResponseData.statusCode,function(){
					$scope.loginText = "登录";
					$scope.disabled = false;
				})
			});
		}else{
			$.alert('请输入密码',function(){
				$scope.loginText = "登录";
				$scope.disabled = false;
				$scope.$apply();
			})
		}		
	}

	$scope.forgetPassword = function(){
		if($scope.phoneNumber){
			$state.go('entry.forget',{'phoneNumber':$scope.phoneNumber,'requestType':$stateParams.requestType})
		}else{
			alert('手机号不能为空')
		}
	}
});
'use strict'
angular.module('loginHttpServiceModule',[]).factory('loginHttpService',function($http,APISERVICEPATH){
	var loginHttp = {};
	var servicePath = APISERVICEPATH.dev;
	// var loginAPI = APISERVICEPATH.login;

 
	/**
	 * @description
	 * check user phonenumbser status,if user recorded in system already, go to step 2(login progress)
	 * invoke list:(modules/login/check.controller.js,modules/components/smscode.directive.js)
	 */
	loginHttp.account = function(paramsObj){ 
		var paramsData = {
			"apiPath":servicePath+'authService/account',
			paramsList:{
				"phoneNumber":paramsObj.phoneNumber,
				"requestType":paramsObj.requestType
			}
		}

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	function randomNum(n){ 
	 var t=''; 
	 for(var i=0;i<n;i++){ 
	 t+=Math.floor(Math.random()*10); 
	 } 
	 return t; 
	} 
	
	/**
	 * @description
	 * loginController(modulles/login/login.controller.js) will invoke this function,and store token from server side.
	 **/
	loginHttp.login = function(paramsObj){
		var paramsData = {
			"apiPath":servicePath+'authService/authorization',
			paramsList:{
				"username":paramsObj.phoneNumber,
				"password":paramsObj.password,
				"client_id":"client_auth_mode",
				"state":randomNum(5),
				"scope":"read write",
				"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
				"response_type":"code"
			},
			setHeader: {'Content-Type': 'application/x-www-form-urlencoded','X-Requested-With':'XMLHttpRequest'}
		}
		return $http({method: 'POST', url:paramsData.apiPath, params:paramsData.paramsList,headers:paramsData.setHeader});
	}



	loginHttp.accessToken = function(){
		var paramsData = {
			"apiPath":servicePath+'authService/accessToken',
			paramsList:{
				"client_id":"client_auth_mode",
				"state":randomNum(5),
				"scope":"read write",
				"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
				"response_type":"token",
				"grant_type":"authorization_code",
				"code":""
			},
			setHeader: {'Content-Type': 'application/x-www-form-urlencoded','X-Requested-With':'XMLHttpRequest'}
		}
		return $http({method: 'POST', url:paramsData.apiPath, data: paramsData.paramsList,headers:paramsData.setHeader});
	}
	/**
	 * @description
	 * acitve.controller(modules/login/acitve.controller.js) will invoke this function,and store token from server side.
	 **/
	loginHttp.smsCode = function(paramsObj){
		var paramsData = {
			"apiPath":servicePath+'authService/smsCode',
			paramsList:{
				// "phoneNumber":paramsObj.phoneNumber,
				// "password":paramsObj.password,
				"requestType":paramsObj.requestType,
				"smsCode":paramsObj.smsCode,
				"grant_type":"password",
				"username":paramsObj.phoneNumber,
				"password":paramsObj.password,
				"client_id":"client_auth_mode",
				"state":randomNum(5),
				"scope":"read write",
				"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
				"response_type":"code"
			},
			setHeader: {'Content-Type': 'application/x-www-form-urlencoded','X-Requested-With':'XMLHttpRequest'}
		}

		return  $http({ method: 'POST',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	return loginHttp;
});
'use strict'
angular.module('passengerDetailControllerModule',[])
.controller('detailController',function(passengerHttpService,$stateParams,$state,$scope){

	if($stateParams.passengerUuid && $stateParams.hrUuid){
		$scope.passengerUuid = $stateParams.passengerUuid;
		$scope.params = {
			'status':$stateParams.status == 0?'未激活':'已激活',
			'passengerUuid':$stateParams.passengerUuid,
			'roleType':$stateParams.roleType,
			'hrUuid':$stateParams.hrUuid,
			'secondCompanyId':$stateParams.secondCompanyId,
			'accountId':$stateParams.accountId,
			'routeName':$stateParams.routeName,
			'stationName':$stateParams.stationName,
			'phoneNumber':$stateParams.phoneNumber,
			'employeeId':$stateParams.employeeId,
			'passengerName':$stateParams.passengerName

		};
		$scope.active = false;
	}else{
		$state.go('passenger.list',{'hrUUID':'666','secondCompanyID':'666'})
	}

	$scope.editPassengerProfile = function(flag){
		$scope.active = !flag;
	};

	$scope.submitPassengerProfile = function(){

		var _params = {
			'phoneNumber':$scope.params.phoneNumber,
			'roleType':$scope.params.roleType,
			'accountId':$scope.params.accountId,
			'name':$scope.params.passengerName,
			'employeeId':$scope.params.employeeId,
			'hrUuid':$scope.params.hrUuid,
			'passengerUuid':$scope.params.passengerUuid,
			'secondCompanyId':$scope.params.secondCompanyId
		}
		passengerHttpService.updatePassengerByID(_params).then(function(result){
			console.log('result')
		},function(){})
	};

	$scope.deletePassenger = function(){
		var _params = {
			'roleType':$scope.params.roleType,
			'hrUuid':$scope.params.hrUuid,
			'passengerUuid':$scope.params.passengerUuid
		}

		console.log("--- del passenger ---")
		console.log(1,_params)
		passengerHttpService.deletePassengerByID(_params).then(function(result){
			console.log(1,result)
		},function(){})
	};
})
'use strict'
angular.module('feedbackControllerModule',[]).controller('feedbackController',function($scope){
	
})
// $scope.menu = [
// {name:'配置管理',class:'',left:'fa fa-cogs',attrs:''},
// {name:'xxx',class:'fa-angle-left pull-right',left:'',attrs:'',permission:'Server$zhizhenmanage$zhizhen.read',
// sub:[{
// 	name:'xxx',
// 	permission:''
// 	class:'',
// 	left:'',
// 	uiSref:'#!/configHome/meetManagement'
// }]}
// ]
// function leftMenu(){
// 	return {
// 		restrict:'E',
// 		templateUrl:'xx',
// 		bindToController:true,
// 		replace:true,
// 		controller:function($state,$scope,$location,$timeout,$window,$rootScope){
// 			$scope.$on('resetMenuData',function(e,d){
// 				$scope = angular.extend($scope,d)
// 			});

// 			$scope.stateGo = function(state,menuItem){
// 				if(menuItem && menuItem.target === '_blank'){
// 					return false;
// 				}

// 				if(state === undefined || state === ''){
// 					return
// 				}
// 				if(state ==='building'){
// 					$.alert('building')
// 				}

// 				$window.location.href=state;
// 			}
// 		}
// 	}
// }
'use strict'
angular.module('listControllerModule',[]).controller('listController',function(passengerHttpService,$state,$scope){
		//table data config

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return passengerHttpService.passenger({'hrUUID':'666','secondCompanyID':'666'})
		},
		loadData:function(){
			console.log('load data')
			
		},
		dataSet:function(result){
			var _result = result.data.value;
			for(var i=0;i<_result.length;i++){
				_result[i]['passengerProfileOutDTO']['status'] =_result[i]['passengerProfileOutDTO']['status'] == 0?'未激活':'已激活'
			}
		}
		//extendParams:function(){}
	}

	$scope.selectAll = function(){
		//$scope.tableConfig.checkbox.selectAll = true;
		var _selectAllStatus  = !$scope.selectAllStatus;
		console.log(_selectAllStatus+':_selectAllStatus')
		$scope.$broadcast('checkboxSelectAll',{'status':_selectAllStatus})

	}


	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:true,
			radio:true,
			operate:[{
				name:'编辑',
				ngIf:function(){},
				fun:function(item){
					var _params = {
						'status':item.passengerProfileOutDTO.status,
						'passengerUuid':item.passengerProfileOutDTO.passengerUuid,
						'roleType':item.passengerProfileOutDTO.roleType,
						'hrUuid':item.passengerProfileOutDTO.hrUuid,
						'secondCompanyId':item.passengerProfileOutDTO.secondCompanyId,
						'accountId':item.passengerProfileOutDTO.accountId,
						'routeName':item.passengerProfileOutDTO.routeName,
						'stationName':item.passengerProfileOutDTO.stationName,
						'phoneNumber':item.accountDTO.phoneNumber,
						'employeeId':item.passengerProfileOutDTO.employeeId,
						'passengerName':item.baseProfileInDTO.name,
					}

					console.log('----- list ----------')
					console.log(1,_params)
					$state.go('passenger.detail',{
						'status':_params.status,
						'passengerUuid':_params.passengerUuid,
						'roleType':_params.roleType,
						'hrUuid':_params.hrUuid,
						'secondCompanyId':_params.secondCompanyId,
						'accountId':_params.accountId,
						'routeName':_params.routeName,
						'stationName':_params.stationName,
						'phoneNumber':_params.phoneNumber,
						'employeeId':_params.employeeId,
						'passengerName':_params.passengerName
					});
				}
			}]
		},
		// height:290,
		// head:[{name:'文件名',key:'filename'}],
		// className:function(flag){},
		// clickFun:function(){},
		// rowClickFun:function(item){},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'---',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'passengerProfileOutDTO',
					'selfKey':{'key':'passengerUuid','value':'员工姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				},
				{
					'parentKey':'passengerProfileOutDTO',
					'selfKey':{'key':'stationName','value':'默认站点'},
					'checkFlag':true
				},
				{
					'parentKey':'passengerProfileOutDTO',
					'selfKey':{'key':'routeName','value':'默认线路'},
					'checkFlag':true
				},
				{
					'parentKey':'passengerProfileOutDTO',
					'selfKey':{'key':'status','value':'激活状态'},
					'checkFlag':true
				}
	    	]
	    }
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})
'use strict'
angular.module('passengerControllerModule',[])
.controller('passengerController',function($scope){

	$scope.leftSideTitle = "乘客管理";
	$scope.icon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';

	$scope.menuArray =[
		{'name':'乘客列表','class':'','permission':'','uiSref':'passenger.list'},
		{'name':'乘客反馈','class':'','permission':'','uiSref':'passenger.feedback'},
		{'name':'乘坐情况','class':'','permission':'','uiSref':'passenger.report'},
	];

})
'use strict'
angular.module('passengerHttpServiceModule',['ngResource']).factory('passengerHttpService',function($http,APISERVICEPATH){
	var passengerHttp = {};
	var passengerAccount = APISERVICEPATH.passengerAccount;
	var passengerProfile = APISERVICEPATH.passengerProfile;
	
	passengerHttp.passenger = function(paramsObj){
		var paramsData = {
			"apiPath":passengerAccount+"passenger",
			paramsList:{
				"hrUUID":paramsObj.hrUUID,
				"secondCompanyID":paramsObj.secondCompanyID
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.passengerByID = function(paramsObj){
		console.log(paramsObj+":::okok")
		console.log(1,paramsObj)
		var paramsData = {
			"apiPath":passengerProfile+"passengerByID",
			paramsList:{
				"passengerUUID":paramsObj.passengerUUID
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	passengerHttp.updatePassengerByID = function(paramsObj){
		var paramsData = {
			"apiPath":passengerAccount+"passenger",
			paramsList:{
				 "accountDTO": {
				    "phoneNumber": paramsObj.phoneNumber,
				    "roleType": paramsObj.roleType
				  },
				  "baseProfileDTO": {
				    "accountId": paramsObj.accountId,
				    "name": paramsObj.name
				  },
				  "passengerProfileDTO": {
				    "accountId": paramsObj.accountId,
				    "employeeId": paramsObj.employeeId,
				    "hrUuid": paramsObj.hrUuid,
				    "passengerUuid": paramsObj.passengerUuid,
				    "secondCompanyId":paramsObj.secondCompanyId
				  }
			}
		};

		return  $http({ method: 'PATCH',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	passengerHttp.deletePassengerByID = function(paramsObj){
		var paramsData = {
			"apiPath":passengerAccount+"passenger",
			paramsList:{
				'passengerUUID':paramsObj.passengerUuid,
				'hrUUID':paramsObj.hrUuid,
				'roleType':paramsObj.roleType
				 // "accountDTO": {
				 //    "phoneNumber": paramsObj.phoneNumber,
				 //    "roleType": paramsObj.roleType
				 //  },
				 //  "baseProfileDTO": {
				 //    "accountId": paramsObj.accountId,
				 //    "name": paramsObj.name
				 //  },
				 //  "passengerProfileDTO": {
				 //    "accountId": paramsObj.accountId,
				 //    "employeeId": paramsObj.employeeId,
				 //    "hrUuid": paramsObj.hrUuid,
				 //    "passengerUuid": paramsObj.passengerUuid,
				 //    "secondCompanyId":paramsObj.secondCompanyId
				 //  }
			}
		};
		console.log('passenger service');
		console.log(1,paramsData.paramsList)
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	return passengerHttp;
});
'use strict'
angular.module('reportControllerModule',[]).controller('reportController',function($scope){
	
})

'use strict'
angular.module('busControllerModule',[])
.controller('busController',function($scope){


})

'use strict'
angular.module('dirverControllerModule',[])
.controller('dirverController',function($scope){


})

'use strict'
angular.module('routeControllerModule',[])
.controller('routeController',function($scope){


})

'use strict'
angular.module('scheduleControllerModule',[])
.controller('scheduleController',function($scope){


})
'use strict'
angular.module('schedulerControllerModule',[])
.controller('schedulerController',function($scope){

	$scope.leftSideTitle = "班车管理";
	$scope.icon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';

	$scope.menuArray =[
		{'name':'线路管理','class':'','permission':'','uiSref':'scheduler.route'},
		{'name':'站点管理','class':'','permission':'','uiSref':'scheduler.site'},
		{'name':'司机管理','class':'','permission':'','uiSref':'scheduler.dirver'},
		{'name':'车辆管理','class':'','permission':'','uiSref':'scheduler.bus'},
		{'name':'排班管理','class':'','permission':'','uiSref':'scheduler.schedule'}
	]
})

'use strict'
angular.module('siteControllerModule',[])
.controller('siteController',function($scope){


})