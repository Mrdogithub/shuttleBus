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
			setHeader: {'ApplicationId':'BACKGROUND','Content-Type': 'application/x-www-form-urlencoded','X-Requested-With':'XMLHttpRequest'}
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
			setHeader: {'ApplicationId':'BACKGROUND','Content-Type': 'application/x-www-form-urlencoded','X-Requested-With':'XMLHttpRequest'}
		}

		return  $http({ method: 'POST',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	return loginHttp;
});