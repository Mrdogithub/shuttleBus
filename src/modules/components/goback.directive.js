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