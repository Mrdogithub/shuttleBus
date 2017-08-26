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