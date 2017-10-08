<<<<<<< HEAD
angular.module('getRefreshTokenFacotryModule',[]).factory('getRefreshTokenFacotry',function(APISERVICEPATH,localStorageFactory,$http){
	var $$token = {};
	var _path = APISERVICEPATH.token+'authService/refreshToken';
	
	function randomNum(n){ 
		 var t=''; 
		 for(var i=0;i<n;i++){ 	
			t+=Math.floor(Math.random()*10); 
		 } 
		 return t;
	} 


	$$token.getRefreshToken = function(paramsObj){
		var paramsData = {
			"apiPath":_path,
			paramsList:{
					"client_id":"client_auth_mode",
					"state":randomNum(5),
					"scope":"read write",
					"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
					"response_type":"token",
					"grant_type":"refresh_token",
					"refresh_token":localStorageFactory.getObject('account',null).refreshToken
				},
			setHeader: {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest'}
		};

		return $http({method: 'POST', url:paramsData.apiPath, data:paramsData.paramsList,headers:paramsData.setHeader});
	}


	return $$token;

=======
angular.module('getRefreshTokenFacotryModule',[]).factory('getRefreshTokenFacotry',function(APISERVICEPATH,localStorageFactory,$http){
	var $$token = {};
	var _path = APISERVICEPATH.token+'authService/refreshToken';
	
	function randomNum(n){ 
		 var t=''; 
		 for(var i=0;i<n;i++){ 	
			t+=Math.floor(Math.random()*10); 
		 } 
		 return t;
	} 


	$$token.getRefreshToken = function(paramsObj){
		var paramsData = {
			"apiPath":_path,
			paramsList:{
					"client_id":"client_auth_mode",
					"state":randomNum(5),
					"scope":"read write",
					"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
					"response_type":"token",
					"grant_type":"refresh_token",
					"refresh_token":localStorageFactory.getObject('account',null).refreshToken
				},
			setHeader: {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest'}
		};

		return $http({method: 'POST', url:paramsData.apiPath, data:paramsData.paramsList,headers:paramsData.setHeader});
	}


	return $$token;

>>>>>>> 7d3cf1803017ce6215a2432ad96e570109fcee20
});