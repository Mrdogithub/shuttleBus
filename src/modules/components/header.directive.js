'use strict';
angular.module("headerModule",[]).directive('headerComponent',function(){
	return {
		restrict:"E",
		template:'<div class="header container-shadow-border">'
				 + '<h1>福特 - 班车管理平台</h1>'
				 +'</div>'
	}
})