angular.module('companyHttpServiceModule',[])
.factory('companyHttpService',function($http,ROLE_CODE,localStorageFactory,APISERVICEPATH){
	var companyHttp = {};
	var companyAccount = APISERVICEPATH.companyAccount;
	var hrService = APISERVICEPATH.hrService;
	var schedulerService = APISERVICEPATH.schedulerService
	var USER_ROLE = localStorageFactory.getObject('account',null);
	
	companyHttp.addCompany = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'adminName':paramsObj.adminName,
				//'operateAccountId': paramsObj.applicationAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'companyCode':'9'
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};
	
	companyHttp.getCompanyList = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount+paramsObj.applicationAdminId+'/parentCompanyId/'+paramsObj.secondCompanyId+'/companyCode/9',
			paramsList:{
				'companyName': paramsObj.companyName,
				'phoneNumber': paramsObj.phoneNumber,
				// 'schedulerId': paramsObj.applicationAdminId,
				// 'parentCompanyId':paramsObj.secondCompanyId,
				'pageNumber': paramsObj.pageNumber,
				'pageSize':paramsObj.pageSize
				// 'companyCode':'3'
			}
		};

		console.log(1,paramsData)

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	companyHttp.updateCompanyByID = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
			  'affiCompanyId': paramsObj.secondCompanyId,
			  'affiCompanyName': paramsObj.secondCompanyName,
			  'name': paramsObj.companyName,
			  'adminName':paramsObj.adminName,
			  'adminPartyId':paramsObj.userId,
			  'operateAccountId': paramsObj.applicationAdminId,
			  'partyId': paramsObj.companyId,
			  'phoneNumber': paramsObj.phoneNumber,
			  'status': '1',
			  'companyCode':'9'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	companyHttp.deleteCompanyByID = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
			  'affiCompanyId': paramsObj.secondCompanyId,
			  'affiCompanyName': paramsObj.secondCompanyName,
			  'name': paramsObj.companyName,
			  'adminName':paramsObj.adminName,
			  'adminPartyId':paramsObj.userId,
			  'operateAccountId': paramsObj.applicationAdminId,
			  'partyId': paramsObj.companyId,
			  'phoneNumber': paramsObj.phoneNumber,
			  'status': '2',
			  'companyCode':'9'
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	companyHttp.addHR = function(paramsObj){
		
		var paramsData = {
			'apiPath':hrService,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
			//	'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	companyHttp.getHrList = function(paramsObj){
		var paramsData = {
			'apiPath':hrService+'superAdminId/'+paramsObj.secondCompanyAdminId+'/userCompanyId/'+paramsObj.secondCompanyId,
			paramsList:{
				'hrName': paramsObj.hrName,
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	companyHttp.deleteHrByID = function(paramsObj){
		var paramsData = {
			'apiPath':hrService,
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
			'apiPath':hrService,
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
			'apiPath':schedulerService,
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
			'apiPath':schedulerService+'superAdminId/'+paramsObj.secondCompanyAdminId+'/userCompanyId/'+paramsObj.secondCompanyId,
			paramsList:{
				'schedulerName': paramsObj.schedulerName,
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber
				// 'superAdminId': paramsObj.secondCompanyAdminId,
				// 'userCompanyId':paramsObj.secondCompanyId
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	companyHttp.deleteSchedulerByID = function(paramsObj){
		var paramsData = {
			'apiPath':schedulerService,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'partyId':paramsObj.partyId,
				'status': '2'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	companyHttp.updateSchedulerById = function(paramsObj){
		var paramsData = {
			'apiPath':schedulerService,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'partyId':paramsObj.partyId
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};
	return companyHttp;
});