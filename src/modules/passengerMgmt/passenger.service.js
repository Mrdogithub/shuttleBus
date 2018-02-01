angular.module('passengerHttpServiceModule',[]).factory('passengerHttpService',function($http,ROLE_CODE,APISERVICEPATH){
	var passengerHttp = {};
	var passengerAccount = APISERVICEPATH.passengerAccount;
	//var passengerAccount = APISERVICEPATH.prd;
	//var passengerProfile = APISERVICEPATH.passengerProfile;
	// var passengerTrip    = APISERVICEPATH.passengerTrip;
	var stationService = APISERVICEPATH.stationService;
	var uploadTripHistorysByExcelAPI = APISERVICEPATH.tripHistorysByExcel;
	var passengerComment = APISERVICEPATH.passengerComment;
	var reportingService = APISERVICEPATH.reportingService;
	passengerHttp.getPassengerTrip = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'web/'+paramsObj.passengerId,
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
				'pageNumber':paramsObj.pageNumber,
				'name':paramsObj.name,
				'phoneNumber':paramsObj.phoneNumber
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

	passengerHttp.getPassengerFeedback = function(paramsObj){

		var paramsData = {
			'apiPath':passengerComment+paramsObj.secondCompanyId+'/'+paramsObj.schedulerId,
			paramsList:{
				// 'secondCompanyId':paramsObj.secondCompanyId,
				// 'schedulerId':paramsObj.schedulerId,
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber,
				// 'Authorization':paramsObj.pageNumber,
				// 'operateAccountId':paramsObj.pageNumber,
				// 'ApplicationId':paramsObj.pageNumber,
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.getBusRoute = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'display/attendence/'+paramsObj.beginTime+'/endTime/'+paramsObj.endTime,
			paramsList:{
				// 'pageSize':paramsObj.pageSize,
				// 'pageNumber':paramsObj.pageNumber,
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.downloadBusRoute = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'download/attendence/'+paramsObj.beginTime+'/endTime/'+paramsObj.endTime,
			paramsList:{
				// 'schedulerAccountId':paramsObj.schedulerAccountId
			}
		};

		console.log(1,paramsObj)
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer',data:paramsData.paramsList});
	}

	passengerHttp.getAllTripHistory = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'scheduler/'+paramsObj.schedulerId+'/secondCompany/'+paramsObj.secondCompanyId,
			paramsList:{
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber,
				'tripHistoryId': paramsObj.tripHistoryId,
				// 'vehicleLicensePlate': paramsObj.vehicleLicensePlate,
				'passengerName': paramsObj.passengerName
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.downloadTripHistory = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'excel/scheduler/'+paramsObj.schedulerId+'/secondCompany/'+paramsObj.secondCompanyId,
			paramsList:{
				// 'schedulerAccountId':paramsObj.schedulerAccountId
			}
		};

		console.log(1,paramsObj)
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer',data:paramsData.paramsList});
	}

	passengerHttp.getArrivalTime = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'display/arrivalTime/'+paramsObj.routeTemplateId,
			paramsList:{
				'beginTime':paramsObj.beginTime,
				'endTime':paramsObj.endTime,
				// 'routeTemplateId':paramsObj.routeTemplateId,
				'vehicleId':paramsObj.vehicleId,
				'routeTemplateType':paramsObj.routeTemplateType,
				'vehicleInfoFlag':paramsObj.vehicleInfoFlag
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	passengerHttp.downloadArrivalTime = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'download/arrivalTime/'+paramsObj.beginTime+'/endTime/'+paramsObj.endTime,
			// paramsList:{
			// 	// 'schedulerAccountId':paramsObj.schedulerAccountId
			// }
		};
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer'});
	}
	passengerHttp.getEmployeeList = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'web/tripHistory/'+paramsObj.userCompanyId+'/dateTime/'+paramsObj.dateTime,
			paramsList:{
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber,
				'routeTemplateId':paramsObj.routeTemplateId,
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	passengerHttp.downloadEmployeeList = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'tripHistory/'+paramsObj.userCompanyId+'/createTime/'+paramsObj.createTime,
		};
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer'});
	}
	passengerHttp.getRouteTemplateList = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'routeTemplateList/'+paramsObj.beginTime+'/endTime/'+paramsObj.endTime,
			paramsList:{
				// 'pageSize':paramsObj.pageSize,
				// 'pageNumber':paramsObj.pageNumber,
				'vehicleInfoFlag':paramsObj.vehicleInfoFlag,

				
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	// passengerHttp.getRouteStationList = function(paramsObj){
	// 	var paramsData = {
	// 		'apiPath':reportingService+'routeTemplateList/'+paramsObj.beginTime+'/endTime/'+paramsObj.endTime,
	// 		paramsList:{
	// 			// 'pageSize':paramsObj.pageSize,
	// 			// 'pageNumber':paramsObj.pageNumber,
	// 			'vehicleInfoFlag':paramsObj.vehicleInfoFlag,
	// 		}
	// 	};

	// 	return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	// }	
	passengerHttp.getArrivalTime = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'display/arrivalTime/'+paramsObj.routeTemplateId,
			paramsList:{
				'beginTime':paramsObj.beginTime,
				'endTime':paramsObj.endTime,
				// 'routeTemplateId':paramsObj.routeTemplateId,
				'vehicleId':paramsObj.vehicleId,
				'routeTemplateType':paramsObj.routeTemplateType,
				'vehicleInfoFlag':paramsObj.vehicleInfoFlag
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	passengerHttp.getRouteStationList = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'count/'+paramsObj.routeTemplateId,
			paramsList:{
				'beginTime':paramsObj.beginTime,
				'endTime':paramsObj.endTime,
				'routeType':paramsObj.routeType
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.downloadRouteStationList = function(paramsObj){
		var paramsData = {
			// http://reporting.apps.cl-cn-east-preprod01.cf.ford.com/api/NanjingShuttle/reportings/v1/count/download/2?routeTemplateName=3&downloadMonth=4&beginTime=5&endTime=6
			'apiPath':reportingService+'count/download/'+paramsObj.routeTemplateId+'?routeTemplateName='+encodeURIComponent(paramsObj.routeTemplateName)
			+'&downloadMonth='+encodeURIComponent(paramsObj.downloadMonth)+'&beginTime='+encodeURIComponent(paramsObj.beginTime)+'&endTime='
			+encodeURIComponent(paramsObj.endTime)+'&routeType='+encodeURIComponent(paramsObj.routeType),
			// paramsList:{
			// 	'routeTemplateName':paramsObj.routeTemplateName,
			// 	'downloadMonth':paramsObj.downloadMonth,
			// 	'beginTime':paramsObj.beginTime,
			// 	'endTime':paramsObj.endTime,
			// 	'routeType':paramsObj.routeType
			// }
		};
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer'});
	}
	return passengerHttp;
});