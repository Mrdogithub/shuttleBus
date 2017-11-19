angular.module('applicationAdminHttpServiceModule',[])
.factory('applicationAdminHttpService',function($http,ROLE_CODE,localStorageFactory,APISERVICEPATH){
	var masterHttp = {};
	var companyAccount = APISERVICEPATH.companyAccount;
	
	masterHttp.addApplicationAdmin = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
				'affiCompanyId': paramsObj.systemAdminCompanyId,
				'name': paramsObj.name,
				'adminName':paramsObj.adminName,
				//'operateAccountId': paramsObj.applicationAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'companyCode':'8'
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};
	
	masterHttp.getApplicationAdminList = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount+paramsObj.systemAdminId+"/parentCompanyId/"+paramsObj.systemAdminCompanyId+"/companyCode/8",
			paramsList:{
				// 'schedulerId': paramsObj.systemAdminId,
				// 'parentCompanyId':paramsObj.systemAdminCompanyId,
				'pageNumber': paramsObj.pageNumber,
				'pageSize':paramsObj.pageSize,
				// 'companyCode':'2'
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	masterHttp.updateApplicationAdminByID = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
			  'affiCompanyId': paramsObj.systemAdminCompanyId,
			  'name': paramsObj.companyName,
			  'adminName':paramsObj.adminName,
			  'affiCompanyName':paramsObj.systemCompanyName,
			  'operateAccountId': paramsObj.systemAdminId,
			  'partyId': paramsObj.userId,
			  'adminPartyId':paramsObj.companyId,
			  'phoneNumber': paramsObj.phoneNumber,
			  'status': '1',
			  'companyCode':'8'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	masterHttp.deleteApplicationAdminByID = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
			  'affiCompanyId': paramsObj.systemAdminCompanyId,
			  'name': paramsObj.companyName,
			  'adminName':paramsObj.adminName,
			  'affiCompanyName':paramsObj.systemCompanyName,
			  'operateAccountId': paramsObj.systemAdminId,
			  'partyId': paramsObj.userId,
			  'adminPartyId':paramsObj.companyId,
			  'phoneNumber': paramsObj.phoneNumber,
			  'status': '2',
			  'companyCode':'8'
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	return masterHttp;
});