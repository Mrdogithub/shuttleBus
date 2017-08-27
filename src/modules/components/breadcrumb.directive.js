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
angular.module('breadcrumbModule',[]).directive('breadcrumbComponent',function($state){
	return {
		restrict:"EA",
		template: '<a class="breadcrumb-link">{{breadcrumbText.lv1}}'
					+'<img style="margin-left: 5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAANCAYAAABlyXS1AAAAAXNSR0IArs4c6QAAAIZJREFUGBljmDlz5om5c+eaMGABTCwsLDl///5dhU0BI0gDSAKkgJmZOSw5OfkMzBCwJC4FcElsClAk0RVgSIIUAH0QCqQ6MCTnzZun9Pv3721MTExZKJJAHcpAHVtBEqmpqfvgkugSIOPBktgkwJIgCUZGxm1AnAkyCiQIA0xAwcnYJEAKACT1SIbDa5BdAAAAAElFTkSuQmCC"/>'
					+'</a>'
					+'<span>{{breadcrumbText.lv2}}</span>',
		scope:{
			gopath:'@',
			breadcrumbParams:'=',
			breadcrumbText:'='
		},
		link:function(scope,elements,attrs){
			console.log('breadcrumbText')
			console.log(scope.breadcrumbText)
			elements.bind('click',function(){
				if(scope.gopath){
					$state.go(scope.gopath,scope.breadcrumbParams)	
				}else{
					window.history.go(-1)
				}
				
			});
		}
	}
})	



	