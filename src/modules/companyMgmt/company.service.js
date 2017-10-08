'use strict'
angular.module('companyHttpServiceModule',[]).factory('companyHttpService',function($http,ROLE_CODE,APISERVICEPATH){
	var companyHttp = {};
	var companyAccount = APISERVICEPATH.companyAccount;
	var hrService = APISERVICEPATH.hrService;
	var schedulerService = APISERVICEPATH.schedulerService
	

	companyHttp.addCompany = function(paramsObj){
		
		var paramsData = {
			'apiPath':companyAccount+'company',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName':  paramsObj.companyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.applicationAdminId,
				'phoneNumber': paramsObj.phoneNumber
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};
	
	companyHttp.getCompanyList = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount+'company',
			paramsList:{
				'schedulerId': paramsObj.applicationAdminId,
				'parentCompanyId':paramsObj.secondCompanyId,
				'pageNumber': paramsObj.pageNumber || '1',
				'pageSize':paramsObj.pageSize || '10'
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}



	companyHttp.updateCompanyByID = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount+'company',
			paramsList:{
			  'affiCompanyId': paramsObj.secondCompanyId,
			  'affiCompanyName': paramsObj.companyName,
			  'name': paramsObj.name,
			  'operateAccountId': paramsObj.applicationAdminId,
			  'partyId': paramsObj.companyId,
			  'phoneNumber': paramsObj.phoneNumber,
			  'status': '1'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	companyHttp.deleteCompanyByID = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount+'company',
			paramsList:{
				'operateAccountId':paramsObj.applicationAdminId,
				'affiCompanyId': paramsObj.secondCompanyId,
				'name': paramsObj.companyName,
				// 'phoneNumber': paramsObj.phoneNumber,
				'partyId': paramsObj.companyId,
				'status':'2'
			}
		};
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};


	companyHttp.addHR = function(paramsObj){
		
		var paramsData = {
			'apiPath':hrService+'hr',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	companyHttp.getHrList = function(paramsObj){
		var paramsData = {
			'apiPath':hrService+'hr',
			paramsList:{
				'superAdminId': paramsObj.secondCompanyAdminId,
				'userCompanyId':paramsObj.secondCompanyId
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	companyHttp.deleteHrByID = function(paramsObj){
		var paramsData = {
			'apiPath':hrService+'hr',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName ||'111',
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'partyId':paramsObj.hrId,
				'status': '2'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	companyHttp.updateHrById = function(paramsObj){
		var paramsData = {
			'apiPath':hrService+'hr',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'partyId':paramsObj.hrId
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};


	companyHttp.addScheduler = function(paramsObj){
		
		var paramsData = {
			'apiPath':schedulerService+'scheduler',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};
	companyHttp.getSchedulerList = function(paramsObj){
		var paramsData = {
			'apiPath':schedulerService+'scheduler',
			paramsList:{
				'superAdminId': paramsObj.secondCompanyAdminId,
				'userCompanyId':paramsObj.secondCompanyId
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	companyHttp.deleteSchedulerByID = function(paramsObj){
		var paramsData = {
			'apiPath':schedulerService+'scheduler',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName ||'111',
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'partyId':paramsObj.schedulerId,
				'status': '2'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	companyHttp.updateSchedulerById = function(paramsObj){
		var paramsData = {
			'apiPath':schedulerService+'scheduler',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'partyId':paramsObj.schedulerId
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};
	return companyHttp;
});