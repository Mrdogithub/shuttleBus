'use strict'
angular.module('passengerHttpServiceModule',['ngResource']).factory('passengerHttpService',function($http,ROLE_CODE,APISERVICEPATH){
	var passengerHttp = {};
	var passengerAccount = APISERVICEPATH.passengerAccount;
	//var passengerAccount = APISERVICEPATH.prd;
	var passengerProfile = APISERVICEPATH.passengerProfile;
	var passengerTrip    = APISERVICEPATH.passengerTrip;
	
	passengerHttp.getPassengerTrip = function(paramsObj){
		var paramsData = {
			'apiPath':passengerTrip+'passengerTrip/'+paramsObj.passengerId,
			paramsList:{
				'pageNumber': paramsObj.pageNumber || '1',
				'pageSize': paramsObj.pageSize || '20'
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};
	
	passengerHttp.passenger = function(paramsObj){
		var paramsData = {
			'apiPath':passengerAccount+'passenger',
			paramsList:{
				'hrId': paramsObj.hrId,
				'secondCompanyId':paramsObj.secondCompanyId,
				'pageNumber': '1',
				'pageSize':'10'
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.passengerByID = function(paramsObj){

		var paramsData = {
			'apiPath':passengerProfile+'passengerByID',
			paramsList:{
				'passengerUUID':paramsObj.passengerUUID
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	passengerHttp.updatePassengerByID = function(paramsObj){
		var paramsData = {
			'apiPath':passengerAccount+'passenger',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'employeeId': paramsObj.employeeId,
				'name': paramsObj.name,
				'phoneNumber': paramsObj.phoneNumber,
				'operateAccountId': paramsObj.schedulerId,
				'partyId':  paramsObj.passengerId,
				'status': '1'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	passengerHttp.deletePassengerByID = function(paramsObj){
		var paramsData = {
			'apiPath':passengerAccount+'passenger',
			paramsList:{
				//'passengerUUID':'2329059612100608',
				'passengerUUID':paramsObj.passengerUuid,
				'hrUUID':paramsObj.hrUuid,
				//'hrUUID':'666',
				'roleType':'ROLE_PASSENGER',
			}
		};
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};


	passengerHttp.addPassenger = function(paramsObj){
		
		var paramsData = {
			'apiPath':passengerAccount+'passenger',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'employeeId': paramsObj.employeeId,
				'name': paramsObj.name,
				'phoneNumber': paramsObj.phoneNumber,
				'operateAccountId': paramsObj.schedulerId,
				'status': '1'
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	return passengerHttp;
});