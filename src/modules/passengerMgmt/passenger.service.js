angular.module('passengerHttpServiceModule',[]).factory('passengerHttpService',function($http,ROLE_CODE,APISERVICEPATH){
	var passengerHttp = {};
	var passengerAccount = APISERVICEPATH.passengerAccount;
	//var passengerAccount = APISERVICEPATH.prd;
	//var passengerProfile = APISERVICEPATH.passengerProfile;
	var passengerTrip    = APISERVICEPATH.passengerTrip;
	var uploadTripHistorysByExcelAPI = APISERVICEPATH.tripHistorysByExcel;
	passengerHttp.getPassengerTrip = function(paramsObj){
		var paramsData = {
			'apiPath':passengerTrip+'web/'+paramsObj.passengerId,
			'paramsList':{
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};
	
	passengerHttp.passenger = function(paramsObj){
		var paramsData = {
			'apiPath':passengerAccount+'pagination/'+paramsObj.hrId+'/secondCompanyId/'+paramsObj.secondCompanyId,
			paramsList:{
				// 'hrId': paramsObj.hrId,
				// 'secondCompanyId':paramsObj.secondCompanyId,
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	passengerHttp.downloadTemplateFile = function(paramsObj){
		var paramsData = {
			'apiPath':passengerAccount+'file'
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer'});
	}

	passengerHttp.tripHistorysByExcel = function(paramsObj){
		var paramsData = {
			'apiPath':uploadTripHistorysByExcelAPI+'tripHistorysByExcel',
			paramsList:{
				'schedulerAccountId':paramsObj.schedulerAccountId
			}
		};

		console.log(1,paramsObj)
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer',data:paramsData.paramsList});
	}

	passengerHttp.updatePassengerByID = function(paramsObj){
		var paramsData = {
			'apiPath':passengerAccount,
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
			'apiPath':passengerAccount,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'employeeId': paramsObj.employeeId,
				'name': paramsObj.name,
				'phoneNumber': paramsObj.phoneNumber,
				'operateAccountId': paramsObj.schedulerId,
				'partyId':  paramsObj.passengerId,
				'status': '2'
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList});
	};


	passengerHttp.addPassenger = function(paramsObj){
		
		var paramsData = {
			'apiPath':passengerAccount,
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

	// passengerHttp.getPassengerFeedback = function(){

		// var paramsData = {
	// 		// 'apiPath':passengerProfile+'passengerByID',
	// 		// paramsList:{
	// 		// 	'passengerUUID':paramsObj.passengerUUID
	// 		// }
	// 	};

	// 	//return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	// }

	return passengerHttp;
});