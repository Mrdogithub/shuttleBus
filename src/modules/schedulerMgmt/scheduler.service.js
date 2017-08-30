'use strict'
angular.module('schedulerHttpServiceModule',['ngResource']).factory('schedulerHttpService',function($http,APISERVICEPATH){
	var schedulerHttp = {};
	var driverAccount = APISERVICEPATH.driverAccount;
	var vehicleService = APISERVICEPATH.vehicleService;
	var stationService = APISERVICEPATH.stationService;
	schedulerHttp.getDriverList = function(paramsObj){
		var paramsData = {
			"apiPath":driverAccount+"driver",
			paramsList:{
				"schedulerUUID":paramsObj.schedulerUUID,
				"secondCompanyID":paramsObj.secondCompanyID
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	schedulerHttp.updateDriverByID = function(paramsObj){
		var paramsData = {
			"apiPath":driverAccount+"driver",
			paramsList:{
				"accountDTO": {
				    "phoneNumber": paramsObj.phoneNumber,
				    "roleType": 'ROLE_DRIVER'
				},
				"baseProfileDTO": {
				    "accountId": paramsObj.accountId,
				    "name": paramsObj.name
				},
				"driverProfileDTO": {
				    "accountId": paramsObj.accountId,
				    "driverUUID": paramsObj.driverUUID,
				    "identityCard": paramsObj.identityCard,
				    "licenseExpirationDate": paramsObj.licenseExpirationDate,
				    "licenseID": paramsObj.licenseID,
				    "schedulerUUID": paramsObj.schedulerUUID,
				    "secondCompanyId": paramsObj.secondCompanyId,
				    "shuttleCompanyId": paramsObj.shuttleCompanyId
				}
			}
		};
		return  $http({ method: 'PATCH',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};
	// passengerHttp.passenger = function(paramsObj){
	// 	var paramsData = {
	// 		"apiPath":passengerAccount+"passenger",
	// 		paramsList:{
	// 			"hrUUID":paramsObj.hrUUID,
	// 			"secondCompanyID":paramsObj.secondCompanyID,
	// 			"pageNumber":"1",
	// 			"pageSize":"10"
	// 		}
	// 	};

	// 	return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	// }

	// passengerHttp.passengerByID = function(paramsObj){

	// 	var paramsData = {
	// 		"apiPath":passengerProfile+"passengerByID",
	// 		paramsList:{
	// 			"passengerUUID":paramsObj.passengerUUID
	// 		}
	// 	};

	// 	return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	// };

	// passengerHttp.updatePassengerByID = function(paramsObj){
	// 	var paramsData = {
	// 		"apiPath":passengerAccount+"passenger",
	// 		paramsList:{
	// 			 "accountDTO": {
	// 			    "phoneNumber": paramsObj.phoneNumber,
	// 			    "roleType":'ROLE_PASSENGER'
	// 			  },
	// 			  "baseProfileDTO": {
	// 			    "accountId": paramsObj.accountId,
	// 			    //'accountId':'2329059598338048',
	// 			    "name": paramsObj.name
	// 			  },
	// 			  "passengerProfileDTO": {
	// 			    "accountId": paramsObj.accountId,
	// 			    //'accountId':'2329059598338048',
	// 			    "employeeId": paramsObj.employeeId,
	// 			    "hrUuid": paramsObj.hrUuid,
	// 			    "passengerUuid": paramsObj.passengerUuid,
	// 			    //'passengerUuid':'2329059612100608',
	// 			   "secondCompanyId":paramsObj.secondCompanyId
	// 			   //'secondCompanyId':'666'
	// 			  }
	// 		}
	// 	};

	// 	return  $http({ method: 'PATCH',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	// };

	schedulerHttp.deleteDriverByID = function(paramsObj){
		var paramsData = {
			"apiPath":driverAccount+"driver",
			paramsList:{
				'driverUUID':paramsObj.driverUUID,
				'schedulerUUID':paramsObj.schedulerUUID,
				"roleType":'ROLE_DRIVER',
			}
		};
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};


	schedulerHttp.addDriver = function(paramsObj){
		var paramsData = {
			"apiPath":driverAccount+"driver",
			paramsList:{
				"accountDTO": {
				    "phoneNumber": paramsObj.phoneNumber,
				    "roleType": "ROLE_DRIVER"
				},
				  "baseProfileDTO": {
				    "name": paramsObj.name
				},
				  "driverProfileDTO": {
				    "identityCard": "18",
				    "licenseExpirationDate": paramsObj.licenseExpirationDate,
				    "licenseID": paramsObj.licenseID,
				    "schedulerUUID": paramsObj.schedulerUUID,
				    "secondCompanyId":  paramsObj.secondCompanyId,
				    "shuttleCompanyId":  paramsObj.secondCompanyId//需要后端提供巴士名称
				}			
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};



	schedulerHttp.getBusList = function(paramsObj){
		var paramsData = {
			"apiPath":vehicleService+"vehicles",
			paramsList:{
				"schedulerUUID":paramsObj.schedulerUUID,
				"secondCompanyId":paramsObj.secondCompanyId
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};



	schedulerHttp.getSiteList = function(paramsObj){
		var paramsData = {
			"apiPath":stationService+"stations/company/",
			paramsList:{
				"secondCompanyID":paramsObj.secondCompanyID,
				"schedulerID":paramsObj.schedulerID
			}
		};
		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	return schedulerHttp;
});