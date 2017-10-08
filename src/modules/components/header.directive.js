'use strict';
angular.module("headerModule",[]).directive('headerComponent',function(localStorageFactory,$state){
	return {
		restrict:"E",
		template:'<div class="header container-shadow-border">'
				 + '<img style="float: left;width: 46px;height: 23px; margin: 15px -10px 15px 30px;" src="data:image/jpeg;base64,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">'
				 + '<h1 style="float:left;">班车管理平台</h1>'
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