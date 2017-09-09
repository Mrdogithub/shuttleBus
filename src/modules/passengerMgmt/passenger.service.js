'use strict'
angular.module('passengerHttpServiceModule',['ngResource']).factory('passengerHttpService',function($http,APISERVICEPATH){
	var passengerHttp = {};
	var passengerAccount = APISERVICEPATH.passengerAccount;
	//var passengerAccount = APISERVICEPATH.prd;
	var passengerProfile = APISERVICEPATH.passengerProfile;
	var passengerTrip    = APISERVICEPATH.passengerTrip;
	
	passengerHttp.getPassengerTrip = function(paramsObj){
		var paramsData = {
			"apiPath":passengerTrip+"passengerTrip",
			paramsList:{
				"passengerId":paramsObj.passengerUuid,
				"pageNumber":'10'
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};
	passengerHttp.passenger = function(paramsObj){
		var paramsData = {
			"apiPath":passengerAccount+"passenger",
			paramsList:{
				"hrUUID": '2', //paramsObj.hrUUID,
				"secondCompanyID":'2',//paramsObj.secondCompanyID,
				"pageNumber":"1",
				"pageSize":"10"
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.passengerByID = function(paramsObj){

		var paramsData = {
			"apiPath":passengerProfile+"passengerByID",
			paramsList:{
				"passengerUUID":paramsObj.passengerUUID
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	passengerHttp.updatePassengerByID = function(paramsObj){
		var paramsData = {
			"apiPath":passengerAccount+"passenger",
			paramsList:{
				 "accountDTO": {
				    "phoneNumber": paramsObj.phoneNumber,
				    "roleType":'ROLE_PASSENGER'
				  },
				  "baseProfileDTO": {
				    "accountId": paramsObj.accountId,
				    //'accountId':'2329059598338048',
				    "name": paramsObj.name
				  },
				  "passengerProfileDTO": {
				    "accountId": paramsObj.accountId,
				    //'accountId':'2329059598338048',
				    "employeeId": paramsObj.employeeId,
				    "hrUuid": paramsObj.hrUuid,
				    "passengerUuid": paramsObj.passengerUuid,
				    //'passengerUuid':'2329059612100608',
				   "secondCompanyId":paramsObj.secondCompanyId
				   //'secondCompanyId':'666'
				  }
			}
		};

		return  $http({ method: 'PATCH',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	passengerHttp.deletePassengerByID = function(paramsObj){
		var paramsData = {
			"apiPath":passengerAccount+"passenger",
			paramsList:{
				//'passengerUUID':'2329059612100608',
				'passengerUUID':paramsObj.passengerUuid,
				'hrUUID':paramsObj.hrUuid,
				//'hrUUID':'666',
				"roleType":'ROLE_PASSENGER',
			}
		};
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};


	passengerHttp.addPassenger = function(paramsObj){
		var paramsData = {
			"apiPath":passengerAccount+"passenger",
			paramsList:{
				 "accountDTO": {
				    "phoneNumber": paramsObj.phoneNumber,
				    "roleType": 'ROLE_PASSENGER'
				  },
				  "baseProfileDTO": {
				    "accountId": '',
				    "name": paramsObj.name
				  },
				  "passengerProfileDTO": {
				    "accountId":'',
				    "employeeId": paramsObj.employeeId,
				    "hrUuid": paramsObj.hrUuid,
				    "passengerUuid": '',
				    "secondCompanyId":paramsObj.secondCompanyId 
				  }
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	return passengerHttp;
});