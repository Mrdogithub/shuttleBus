'use strict';
angular.module("headerModule",[]).directive('headerComponent',function(localStorageFactory,$state){
	return {
		restrict:"E",
		template:'<div class="header container-shadow-border">'
				 + '<h1 style="float:left;">福特 - 班车管理平台</h1>'
				 + '<div style="float: right;display: inline-block; margin-top: 19px;margin-right: 30px;">'
				 + 		'<span >{{username}}</span> | '
				 + 		'<a ng-click = "loginOut()">退出</a>'
				 + '</div>'
				 +'</div>',
		controller:function($scope){
			$scope.username = localStorageFactory.getObject('account',null).accountId;

			$scope.loginOut = function(){
				localStorageFactory.remove('account');
				$state.go('entry.check')
			}
		}
	}
});