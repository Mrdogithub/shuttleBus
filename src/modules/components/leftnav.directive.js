<<<<<<< HEAD
'use strict';
angular.module("leftNavModule",[]).directive('leftNavComponent',function(){
	return {
		restrict:"E",
		replace:true,
		scope:true,
		template:'<div class="left-side">'
				+	'<div class="title-wrapper">'
				+       '<img class="menu-icon" ng-src={{icon}} />'
				+		'<span>{{leftSideTitle}}</span>'
				+	'</div>'
				+	'<div class="menu-list">'
				+	'	<ul class="menuItemList">'
				+	'		<li ng-repeat="menuItem in menuArray track by $index" ng-click="goTo(menuItem.uiSref,menuItem,$event)" permission="{{menuItem.permission}}">{{menuItem.name}}</li>'
				+	'	</ul>'
				+	'</div>'
				+   '</div>',
		controller:function($state,$scope,$rootScope,$location,$timeout,$window){
				$('.menuItem').on('click',function(){
					console.log('xx click')
					$(this).addClass('selected')
				})
				$(document).ready(function(){
					$('.menuItemList > li:first-child').addClass('selected')
				});
				$scope.goTo=function(targetState,currentMenuItemObj,event){
					$('.menuItemList li').removeClass('selected')
					console.log(1,event)
					$(event.currentTarget).addClass('selected')
					if(currentMenuItemObj && currentMenuItemObj.target === '_blank'){
						return false;
					}

					if(targetState === undefined || targetState === ''){
						return
					}

					if(targetState === 'building'){
						alertify.confirm('正在努力建设中...')
					}

				$state.go(targetState);
			}
		}
	}
=======
'use strict';
angular.module("leftNavModule",[]).directive('leftNavComponent',function(){
	return {
		restrict:"E",
		replace:true,
		scope:true,
		template:'<div class="left-side">'
				+	'<div class="title-wrapper">'
				+       '<img class="menu-icon" ng-src={{icon}} />'
				+		'<span>{{leftSideTitle}}</span>'
				+	'</div>'
				+	'<div class="menu-list">'
				+	'	<ul class="menuItemList">'
				+	'		<li ng-repeat="menuItem in menuArray track by $index" ng-click="goTo(menuItem.uiSref,menuItem,$event)" permission="{{menuItem.permission}}">{{menuItem.name}}</li>'
				+	'	</ul>'
				+	'</div>'
				+   '</div>',
		controller:function($state,$scope,$rootScope,$location,$timeout,$window){
				$('.menuItem').on('click',function(){
					console.log('xx click')
					$(this).addClass('selected')
				})
				$(document).ready(function(){
					$('.menuItemList > li:first-child').addClass('selected')
				});
				$scope.goTo=function(targetState,currentMenuItemObj,event){
					$('.menuItemList li').removeClass('selected')
					console.log(1,event)
					$(event.currentTarget).addClass('selected')
					if(currentMenuItemObj && currentMenuItemObj.target === '_blank'){
						return false;
					}

					if(targetState === undefined || targetState === ''){
						return
					}

					if(targetState === 'building'){
						alertify.confirm('正在努力建设中...')
					}

				$state.go(targetState);
			}
		}
	}
>>>>>>> 7d3cf1803017ce6215a2432ad96e570109fcee20
})