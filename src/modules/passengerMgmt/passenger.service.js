'use strict'
angular.module('passengerHttpServiceModule',['ngResource']).factory('passengerHttpService',function($http,APISERVICEPATH){
	var passengerHttp = {};
	var passengerAccount = APISERVICEPATH.passengerAccount;
	var passengerProfile = APISERVICEPATH.passengerProfile;
	
	passengerHttp.passenger = function(paramsObj){
		var paramsData = {
			"apiPath":passengerAccount+"passenger",
			paramsList:{
				"hrUUID":paramsObj.hrUUID,
				"secondCompanyID":paramsObj.secondCompanyID
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.passengerByID = function(paramsObj){
		console.log(paramsObj+":::okok")
		console.log(1,paramsObj)
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
				    "roleType": paramsObj.roleType
				  },
				  "baseProfileDTO": {
				    "accountId": paramsObj.accountId,
				    "name": paramsObj.name
				  },
				  "passengerProfileDTO": {
				    "accountId": paramsObj.accountId,
				    "employeeId": paramsObj.employeeId,
				    "hrUuid": paramsObj.hrUuid,
				    "passengerUuid": paramsObj.passengerUuid,
				    "secondCompanyId":paramsObj.secondCompanyId
				  }
			}
		};

		return  $http({ method: 'PATCH',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	passengerHttp.deletePassengerByID = function(paramsObj){
		var paramsData = {
			"apiPath":passengerAccount+"passenger",
			paramsList:{
				'passengerUUID':paramsObj.passengerUuid,
				'hrUUID':paramsObj.hrUuid,
				'roleType':paramsObj.roleType
				 // "accountDTO": {
				 //    "phoneNumber": paramsObj.phoneNumber,
				 //    "roleType": paramsObj.roleType
				 //  },
				 //  "baseProfileDTO": {
				 //    "accountId": paramsObj.accountId,
				 //    "name": paramsObj.name
				 //  },
				 //  "passengerProfileDTO": {
				 //    "accountId": paramsObj.accountId,
				 //    "employeeId": paramsObj.employeeId,
				 //    "hrUuid": paramsObj.hrUuid,
				 //    "passengerUuid": paramsObj.passengerUuid,
				 //    "secondCompanyId":paramsObj.secondCompanyId
				 //  }
			}
		};
		console.log('passenger service');
		console.log(1,paramsData.paramsList)
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	return passengerHttp;
});