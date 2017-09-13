'use strict'
angular.module('schedulerHttpServiceModule',['ngResource']).factory('schedulerHttpService',function($http,APISERVICEPATH){
	var schedulerHttp = {};
	var driverAccount = APISERVICEPATH.driverAccount;
	var vehicleService = APISERVICEPATH.vehicleService;
	var stationService = APISERVICEPATH.stationService;

	// API for scheduler's calendar 
	var assignmentService = APISERVICEPATH.assignmentService;
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
				    "shuttleCompanyId":  paramsObj.secondCompanyId,//需要后端提供巴士名称
				    "shuttleCompanyName": paramsObj.secondCompanyName
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
			"apiPath":stationService+"stations/company/"+paramsObj.secondCompanyID,
			paramsList:{
				"schedulerID":paramsObj.schedulerID
			}
		};
		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	schedulerHttp.addSite = function(paramsObj){
		var paramsData = {
			"apiPath":stationService+"station",
			paramsList:{
	  			"gps": paramsObj.gps,
	            "name": paramsObj.name,
	            "address": paramsObj.address,
	            "stationType": paramsObj.stationType,
				"secondCompanyId":paramsObj.secondCompanyId,
				"schedulerUUID":paramsObj.schedulerUUID
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	}

	schedulerHttp.deleteSiteByID = function(paramsObj){
		var paramsData = {
			"apiPath":stationService+paramsObj.stationID,
			paramsList:{
	            "schedulerID":paramsObj.schedulerID
			}
		};
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	schedulerHttp.getBusDetail = function(paramsObj){
		var paramsData = {
			"apiPath":vehicleService+"vehicle",
			paramsList:{
				"schedulerUUID":paramsObj.schedulerUUID,
				"vehicleID":paramsObj.vehicleID
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

   schedulerHttp.addBus = function(paramsObj){
		var paramsData = {
			"apiPath":vehicleService+"vehicle",
			paramsList:{
   				"annualInspectionExpiration":paramsObj.annualInspectionExpiration,
				"availableSeats": paramsObj.availableSeats,
				"engineNumber": paramsObj.engineNumber,
				"insuranceExpiration": paramsObj.insuranceExpiration,
				"licensePlate": paramsObj.licensePlate,
				"schedulerUUID": paramsObj.schedulerUUID,
				"secondCompanyId": paramsObj.secondCompanyId,
				"shuttleCompanyId": paramsObj.shuttleCompanyId,
				"vehicleLicense": paramsObj.vehicleLicense,
				"vehicleModel": paramsObj.vehicleModel,
				"vin": paramsObj.vin
			}
		};
		
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
   };

	schedulerHttp.deleteBusByID = function(paramsObj){
		var paramsData = {
			"apiPath":vehicleService+"vehicle",
			paramsList:{
				"schedulerUUID":paramsObj.schedulerUUID,
				"vehicleID":paramsObj.vehicleID
			}
		};
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};


	// Get scheduler's calendar result for one day
	schedulerHttp.assignmentService = function(paramsObj){
		var paramsData = {
			//"apiPath":assignmentService+"assignments/"+paramsObj.schedulerUUID+"/"+paramsObj.secondCompanyId,
			"apiPath":APISERVICEPATH.passengerDev+"assignments.json",
			paramsList:{
				"date":paramsObj.date
			}
		};
		return  $http({ method: 'GET',url:paramsData.apiPath});
		//return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	// Get driver's list ,vehicle's list and routeTemplate's list.
	// when scheduler create new schedule,below api will provide driver ,vehical and 
	// route name list 
	schedulerHttp.schedulingelements = function(paramsObj){
		var paramsData = {
			//"apiPath":assignmentService+"schedulingelements/"+paramsObj.schedulerUUID+"/"+paramsObj.secondCompanyId,
			"apiPath":APISERVICEPATH.passengerDev+"schedulingelements.json"
		};
		return  $http({ method: 'GET',url:paramsData.apiPath});
		//return  $http({ method: 'GET',url:paramsData.apiPath});
	};

	return schedulerHttp;
});

