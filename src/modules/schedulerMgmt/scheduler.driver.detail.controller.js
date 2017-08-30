'use strict'
angular.module('schedulerDriverDetailControllerModule',[])
.controller('schedulerDriverDetailController',function(schedulerHttpService,$stateParams,$state,$scope){
	if($stateParams.schedulerUUID && $stateParams.secondCompanyId){

		//get params from driver list
		$scope.params = {
			'phoneNumber':$stateParams.phoneNumber,
			'roleType':$stateParams.roleType,
			'name':$stateParams.name,
			'accountId':$stateParams.accountId,
			'driverUUID':$stateParams.driverUUID,
			'schedulerUUID':$stateParams.schedulerUUID ,
			'secondCompanyId':$stateParams.secondCompanyId,
			'shuttleCompanyId':$stateParams.shuttleCompanyId,
			'licenseID':$stateParams.licenseID ||'--',
			'licenseExpirationDate':$stateParams.licenseExpirationDate ||'--',
			'identityCard':$stateParams.identityCard
		};

					
		//set default params for driver detail

		$scope.active = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbParams = {
			'schedulerUUID':$stateParams.schedulerUUID,
			'secondCompanyId':$stateParams.secondCompanyId	
		}
		$scope.breadcrumbText={
			'lv1':'司机管理',
			'lv2':'司机详情'
		}
	}else{
		$state.go('scheduler.driver',$scope.breadcrumbParams)
	}

	$scope.editPassengerProfile = function(flag){
		$scope.active = !flag;
	};

	$scope.submitDriverProfile = function(){
		$scope.submitOnProgress = true;
		var _params = {
			'phoneNumber':$scope.params.phoneNumber,
			'roleType':$scope.params.roleType,
			'name':$scope.params.name,
			'accountId':$scope.params.accountId,
			'driverUUID':$scope.params.driverUUID,
			'schedulerUUID':$scope.params.schedulerUUID,
			'secondCompanyId':$scope.params.secondCompanyId,
			'shuttleCompanyId':$scope.params.shuttleCompanyId,
			'licenseID':$scope.params.licenseID,
			'licenseExpirationDate':$scope.params.licenseExpirationDate,
			'identityCard':$scope.params.identityCard
		}


		schedulerHttpService.updateDriverByID(_params).then(function(result){
			console.log(1,result)
			$scope.submitOnProgress = false;
		},function(){})
	};

	$scope.deleteDriver = function(){
		var _params = {
			'driverUUID':$scope.params.driverUUID, //后端返回为null 无法删除
			'schedulerUUID':$scope.params.schedulerUUID
		}
		schedulerHttpService.deleteDriverByID(_params).then(function(result){
			console.log(1,result)
		},function(){})
	};


})