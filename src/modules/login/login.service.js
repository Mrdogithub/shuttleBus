'use strict'
angular.module('loginHttpServiceModule',[]).factory('loginHttpService',function($http,APISERVICEPATH){
	var loginHttp = {};
	var auths = APISERVICEPATH.auths;
 
	/**
	 * @description
	 * check user phonenumbser status,if user recorded in system already, go to step 2(login progress)
	 * invoke list:(modules/login/check.controller.js,modules/components/smscode.directive.js)
	 */
	loginHttp.account = function(paramsObj){ 
		var paramsData = {
			"apiPath":auths+paramsObj.phoneNumber+'/requestType/'+paramsObj.requestType,
			paramsList:{
				// "phoneNumber":paramsObj.phoneNumber,
				// "requestType":paramsObj.requestType
			}
		}

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};


	loginHttp.getTerms = function(){
		var paramsData = {
			"apiPath":'./data/terms.json'
		}

		return  $http({ method: 'GET',url:paramsData.apiPath});		
	}

	loginHttp.obtainSMSCode = function(paramsObj){ 
		var paramsData = {
			"apiPath":auths+'auth/smsCode',
			paramsList:{
				"phoneNumber":paramsObj.phoneNumber,
				"requestType":'0',
				"accountStatus":paramsObj.accountStatus
			}
		}
		return $http({method: 'GET', url:paramsData.apiPath,params:paramsData.paramsList});
	};
	loginHttp.termcondition = function(paramsObj){ 
		var paramsData = {
			"apiPath":auths+'termcondition/'+paramsObj.phoneNumber+'/tcId/'+paramsObj.termAndConditionId+'/tcTime/'+paramsObj.lastUpdateTermAndConditionTime,
			paramsList:{
				//"phoneNumber":paramsObj.phoneNumber,
				// "termAndConditionId":paramsObj.termAndConditionId,
				// "latestUpdateTime":paramsObj.lastUpdateTermAndConditionTime
			}
		}
		return $http({method: 'GET', url:paramsData.apiPath});
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
			"apiPath":auths+'auth/authcode',
			paramsList:{
				"username":paramsObj.phoneNumber,
				"password":paramsObj.password,
				"client_id":"client_auth_mode",
				"state":randomNum(5),
				"scope":"read write",
				"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
				"response_type":"code"
			},
			setHeader: {'ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}
		}

		return $http({method: 'POST', url:paramsData.apiPath, data:paramsData.paramsList,headers:{'Content-type':'application/json','ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}});
	}

	loginHttp.masterLogin = function(paramsObj){
		var paramsData = {
			"apiPath":auths+'auth/admin/login',
			paramsList:{
				"client_id":"client_auth_mode",
				"grant_type":"password",
				"password":paramsObj.password,
				"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
				"response_type":"token",
				"scope":"read write",
				"state":randomNum(5),
				"username":paramsObj.userName
			},
			setHeader: {'ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}
		}

		return $http({method: 'POST', url:paramsData.apiPath, data:paramsData.paramsList,headers:{'Content-type':'application/json','ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}});
	}

	loginHttp.accessToken = function(paramsObj){
		var paramsData = {
			"apiPath":auths+'accessToken',
			paramsList:{
				"client_id":"client_auth_mode",
				"state":randomNum(5),
				"scope":"read write",
				"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
				"response_type":"token",
				"grant_type":"authorization_code",
				"code":paramsObj.code
			},
			setHeader: {'ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}
		}
		return $http({method: 'POST', url:paramsData.apiPath, data: paramsData.paramsList,headers:{'Content-type':'application/json','ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}});
	}



	/**
	 * @description
	 * acitve.controller(modules/login/acitve.controller.js) will invoke this function,and store token from server side.
	 **/
	loginHttp.smsCode = function(paramsObj){
		var paramsData = {
			"apiPath":auths+'auth/smsCode',
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
			setHeader: {'ApplicationId':'BACKGROUND','Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest'}
		}

		return  $http({ method: 'POST',url:paramsData.apiPath,data:paramsData.paramsList,headers:paramsData.setHeader});
	}
	return loginHttp;
});