angular.module('schedulerHttpServiceModule',[])
.factory('schedulerHttpService',function($http,USER_ACCOUNT,ROLE_CODE,APISERVICEPATH){
	var schedulerHttp = {};
	var driverAccount = APISERVICEPATH.driverAccount;
	var vehicleService = APISERVICEPATH.vehicleService;
	//var vehicleService = APISERVICEPATH.busAPI;
	var stationService = APISERVICEPATH.stationService;
	var templateFile   = APISERVICEPATH.templateFile;
	var companyAccount = APISERVICEPATH.companyAccount;
	var routeService	= APISERVICEPATH.routeService;

	// API for scheduler's calendar 
	var assignmentService = APISERVICEPATH.assignmentService;
	schedulerHttp.getDriverList = function(paramsObj){
		var paramsData = {
			'apiPath':driverAccount+'driver/'+paramsObj.accountId+'/secondCompanyId/'+paramsObj.secondCompanyId,
			paramsList:{
				'pageNumber':paramsObj.pageNumber,
				'pageSize':paramsObj.pageSize
				// 'schedulerId':paramsObj.accountId,
				// 'secondCompanyId':paramsObj.secondCompanyId
			}
		};
		
		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	schedulerHttp.updateDriverByID = function(paramsObj){
		var paramsData = {
			'apiPath':driverAccount+'driver',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'identityCard': paramsObj.identityCard,
				'licenseExpirationDate': paramsObj.licenseExpirationDate,
				'licenseID': paramsObj.licenseId,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.schedulerId,
				'partyId': paramsObj.driverId,
				'phoneNumber': paramsObj.phoneNumber,
				'shuttleCompanyId': paramsObj.shuttleCompanyId,
				'shuttleCompanyName':paramsObj.shuttleCompanyName,
				'status': '1'
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	schedulerHttp.deleteDriverByID = function(paramsObj){
		var paramsData = {
			'apiPath':driverAccount+'driver',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'identityCard': paramsObj.identityCard,
				'licenseExpirationDate': paramsObj.licenseExpirationDate,
				'licenseID': paramsObj.licenseID,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.schedulerId,
				'partyId': paramsObj.driverId,
				'phoneNumber': paramsObj.phoneNumber,
				'shuttleCompanyId': paramsObj.shuttleCompanyId,
				'shuttleCompanyName':paramsObj.shuttleCompanyName,
				'status': '2'
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	schedulerHttp.addDriver = function(paramsObj){
		var paramsData = {
			'apiPath':driverAccount+'driver',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'licenseExpirationDate': paramsObj.licenseExpirationDate,
				'licenseID': paramsObj.licenseID,
				'name': paramsObj.name,
				'phoneNumber': paramsObj.phoneNumber,
				'shuttleCompanyName': paramsObj.shuttleCompanyName,
				'shuttleCompanyId': paramsObj.shuttleCompanyId,
				'operateAccountId': paramsObj.schedulerId
			}
		};
		return	$http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	schedulerHttp.getBusList = function(paramsObj){
		var paramsData = {
			'apiPath':vehicleService+'vehicles',
			paramsList:{
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber,
				'schedulerId':paramsObj.accountId,
				'secondCompanyId':paramsObj.secondCompanyId
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	schedulerHttp.getSiteList = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'web/',
			paramsList:{
				'schedulerId':paramsObj.accountId,
				'secondCompanyId':paramsObj.secondCompanyId,
				'stationName':paramsObj.stationName || '',
				'stationType':paramsObj.stationType || '',
				'pageNumber':paramsObj.pageNumber,
				'pageSize':paramsObj.pageSize,
			}
		};
		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	schedulerHttp.addSite = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'station',
			paramsList:{
	  			'gps': paramsObj.gps,
			    'name': paramsObj.name,
	            'address': paramsObj.address,
	            'stationType': paramsObj.stationType,
				'secondCompanyId':paramsObj.secondCompanyId,
				'schedulerId':paramsObj.schedulerId
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	}



	schedulerHttp.downloadTemplateFile = function(paramsObj){
		var paramsData = {
			'apiPath':templateFile
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer'});
	}

	schedulerHttp.updateSite = function(paramsObj){
		
		var paramsData = {
			'apiPath':stationService+'station',
			paramsList:{
	  			'gps': paramsObj.gps,
	            'name': paramsObj.name,
	            'address': paramsObj.address,
	            'stationType': paramsObj.stationType,
				'secondCompanyId':paramsObj.secondCompanyId,
				'schedulerId':paramsObj.schedulerId,
				'stationId':paramsObj.stationId
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	}

	schedulerHttp.deleteSiteByID = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'station/'+paramsObj.stationId,
			paramsList:{
	            'schedulerId':paramsObj.schedulerId
			}
		};
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	// schedulerHttp.getBusDetail = function(paramsObj){
	// 	var paramsData = {
	// 		'apiPath':vehicleService+'vehicle',
	// 		paramsList:{
	// 			'schedulerUUID':paramsObj.schedulerUUID,
	// 			'vehicleID':paramsObj.vehicleID
	// 		}
	// 	};

	// 	return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	// };

	schedulerHttp.addBus = function(paramsObj){
		var paramsData = {
			'apiPath':vehicleService+'vehicle',
			paramsList:{
				'annualInspectionExpiration': paramsObj.annualInspectionExpiration,
				'availableSeats': paramsObj.availableSeats,
				'engineNumber': paramsObj.engineNumber,
				'insuranceExpiration': paramsObj.insuranceExpiration,
				'licensePlate': paramsObj.licensePlate,
				'schedulerId': paramsObj.schedulerId,
				'secondCompanyId': paramsObj.secondCompanyId,
				'shuttleCompanyId': paramsObj.shuttleCompanyId,
				'shuttleCompanyName': paramsObj.shuttleCompanyName,
				'vehicleLicense': paramsObj.vehicleLicense,
				'vehicleModel': paramsObj.vehicleModel,
				'vin': paramsObj.vin
			}
		};
		
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};


	schedulerHttp.updateBus = function(paramsObj){
		var paramsData = {
			'apiPath':vehicleService+'vehicle',
			paramsList:{
				'annualInspectionExpiration': paramsObj.annualInspectionExpiration,
				'availableSeats': paramsObj.availableSeats,
				'engineNumber': paramsObj.engineNumber,
				'insuranceExpiration': paramsObj.insuranceExpiration,
				'licensePlate': paramsObj.licensePlate,
				'schedulerId': paramsObj.schedulerId,
				'shuttleCompanyId': paramsObj.shuttleCompanyId,
				'shuttleCompanyName': paramsObj.shuttleCompanyName,
				'vehicleId': paramsObj.vehicleId,
				'vehicleLicense': paramsObj.vehicleLicense,
				'vehicleModel': paramsObj.vehicleModel,
				'vin': paramsObj.vin
			}
		};
		
		return  $http({ method: 'PUT',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	schedulerHttp.deleteBusByID = function(paramsObj){
		var paramsData = {
			'apiPath':vehicleService+'vehicle/'+paramsObj.vehicleId,
			paramsList:{
				'schedulerId':paramsObj.schedulerId
				// 'Authorization':'',
				// 'operateAccountId':'',
				// 'ApplicationId':''
			}
		};
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	////////////////	scheduler's calendar /////////////////////////////////
	// Get scheduler's calendar result list
	schedulerHttp.assignmentService = function(paramsObj){
		var paramsData = {
			'apiPath':assignmentService+'count/'+paramsObj.schedulerId+'/'+paramsObj.secondCompanyId,
			//'apiPath':APISERVICEPATH.passengerDev+'assignments.json',
			paramsList:{
				'beginDate':paramsObj.beginDate,
				'endDate':paramsObj.endDate
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	schedulerHttp.getAssignmentsByDay = function(paramsObj){
		var paramsData = {
			'apiPath':assignmentService+paramsObj.schedulerId+'/'+paramsObj.secondCompanyId,
			//'apiPath':APISERVICEPATH.passengerDev+'assignments.json',
			paramsList:{
				'date':paramsObj.date
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};



	// Add schuttle bus company 
    schedulerHttp.addBusCompany = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			//'apiPath':APISERVICEPATH.passengerDev+'company.json',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				//'operateAccountId':paramsObj.schedulerId,
				'name': paramsObj.name,
				'companyCode':'10',
				'status':'1'
				// 'phoneNumber': paramsObj.phoneNumber,
				//'roleCode': ROLE_CODE.COMPANY,
			}
		};
		
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
   };

	// get schuttle bus company list
	schedulerHttp.getBusCompany = function(paramsObj){
		var paramsData = {
			//'apiPath':APISERVICEPATH.passengerDev+'company.json',
			'apiPath':companyAccount+paramsObj.schedulerId+'/parentCompanyId/'+paramsObj.secondCompanyId+'/companyCode/10',
			'paramsList':{
				//'schedulerId': paramsObj.schedulerId,
				//'parentCompanyId': paramsObj.secondCompanyId,
				'pageSize': paramsObj.pageSize,
				'pageNumber': paramsObj.pageNumber
				//'companyCode':'8'
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	// Update schuttle bus company 
	schedulerHttp.updateBusCompany = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			'paramsList':{
				'operateAccountId':paramsObj.schedulerId,
				'affiCompanyId': paramsObj.secondCompanyId,
				'partyId': paramsObj.partyId,
				'name': paramsObj.name,
				'companyCode':'10',
				'status':'1'
				// 'phoneNumber': paramsObj.phoneNumber,
				// 'roleCode': paramsObj.roleCode,
				// 'status':paramsObj.status
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'},});
	};

	schedulerHttp.deleteBusCompany = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			'paramsList':{
				'operateAccountId':paramsObj.schedulerId,
				'affiCompanyId': paramsObj.secondCompanyId,
				'name': paramsObj.name,
				'companyCode':'10',
				// 'phoneNumber': paramsObj.phoneNumber,
				'partyId': paramsObj.partyId,
				'status':'2'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'},});
	};

	///////////////////// Route Service //////////////////////////////////


	// Add Rote
	schedulerHttp.addRoute = function(paramsObj){

		for(var i=0;i<paramsObj.stationList.length;i++){
			console.log()
			paramsObj.stationList[i].departureTime = paramsObj.stationList[i].departureTime *60*1000;
		}

		var paramsData = {
			'apiPath':routeService+'route',
			paramsList:{
				'routeName': paramsObj.routeName,
				'schedulerId': paramsObj.schedulerId,
				'secondCompanyId': paramsObj.secondCompanyId,
				'stationList': paramsObj.stationList
			}
		};

		return	$http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};


	schedulerHttp.updateRoute = function(paramsObj){

		for(var i=0;i<paramsObj.stationList.length;i++){
			console.log()
			paramsObj.stationList[i].departureTime = paramsObj.stationList[i].departureTime *60*1000;
		}
		
		var paramsData = {
			'apiPath':routeService+'route',
			paramsList:{
				'routeName': paramsObj.routeName,
				'schedulerId': paramsObj.schedulerId,
				'routeId': paramsObj.routeId,
				'stationList': paramsObj.stationList
			}
		};
		return	$http({ method: 'PUT',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	// Get Route List
	schedulerHttp.getRoute = function(paramsObj){
		var paramsData = {
			'apiPath':routeService+'secondCompany/'+paramsObj.secondCompanyId+'/scheduler/'+paramsObj.schedulerId,
			'paramsList':{
				'routeName': paramsObj.routeName,
				'pageNumber': paramsObj.pageNumber,
				'pageSize': paramsObj.pageSize
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};


	// Get Route Info
	schedulerHttp.getRouteInfo = function(paramsObj){
		var paramsData = {
			'apiPath':routeService+'route/'+paramsObj.routeId+'/schedulerId/'+paramsObj.schedulerId,
			'paramsList':{
				// 'secondCompanyId': paramsObj.secondCompanyId,
				// 'schedulerId': paramsObj.schedulerId,
				// 'routeName': paramsObj.routeName,
				// 'pageNumber': paramsObj.pageNumber,
				// 'pageSize': paramsObj.pageSize
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};
	// Delete Route by Id
	schedulerHttp.deleteRouteById = function(paramsObj){
		var paramsData = {
			'apiPath':routeService+'route/'+paramsObj.routeId,
			'paramsList':{
				// 'secondCompanyId': paramsObj.secondCompanyId,
				// 'schedulerId': paramsObj.schedulerId,
				// 'routeName': paramsObj.routeName,
				// 'pageNumber': paramsObj.pageNumber,
				// 'pageSize': paramsObj.pageSize
			}
		};

		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	/////////////////////  assignmentService ////////////////////////////


	// Get driver's list ,vehicle's list and routeTemplate's list.
	// when scheduler create new schedule,below api will provide driver ,vehical and 
	// route name list 
	schedulerHttp.schedulingelements = function(paramsObj){
		var paramsData = {
			'apiPath':assignmentService+'schedulingelements/'+paramsObj.schedulerId+'/'+paramsObj.secondCompanyId,
			//'apiPath':APISERVICEPATH.passengerDev+'schedulingelements.json'
			'paramsList':{
				'beginDate':parseInt(paramsObj.beginDate),
				'endDate':parseInt(paramsObj.endDate),
				'includeSunday':paramsObj.includeSunday,
				'includeSaturday':paramsObj.includeSaturday,
				'routeType':paramsObj.routeType
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};


	schedulerHttp.addAssignment = function(paramsObj){
		var paramsData = {
			'apiPath':assignmentService+'assignment',
			paramsList:{
				'beginDate': paramsObj.beginDate,
				'departureTime': paramsObj.departureTime,
				'driverId': paramsObj.driverId ||'1',
				'routeId': paramsObj.routeId ||'1',
				'endDate': paramsObj.endDate,
				'includingSaturday': paramsObj.includeSaturday,
				'includingSunday': paramsObj.includeSunday,
				'routeType': paramsObj.routeType,
				'schedulerId': paramsObj.schedulerId,
				'secondCompanyId': paramsObj.secondCompanyId,
				'vehicleId': paramsObj.vehicleId
			}
		};
		return	$http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	// Delete addAssignment by Id
	schedulerHttp.deleteAssignmentById = function(paramsObj){
		var paramsData = {
			'apiPath':assignmentService+'assignment/'+paramsObj.routeId+'/'+paramsObj.schedulerId,
			'paramsList':{
				// 'secondCompanyId': paramsObj.secondCompanyId,
				// 'schedulerId': paramsObj.schedulerId,
				// 'routeName': paramsObj.routeName,
				// 'pageNumber': paramsObj.pageNumber,
				// 'pageSize': paramsObj.pageSize
			}
		};

		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};
	return schedulerHttp;
});

