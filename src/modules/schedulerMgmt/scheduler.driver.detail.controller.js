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
			'driverUUID':$scope.params.driverUUID,
			'schedulerUUID':$scope.params.schedulerUUID,
		}
		$.confirm('该司机仍有排版任务,如果继续删除,排班安排也将被情况！请查看排班，并替换司机。',function(){
			$.alert('删除成功')
			schedulerHttpService.deletePassengerByID(_params).then(function(result){
				console.log(1,result)
			},function(){
				$.aleret('正在建设中...')
			})
		},function(){}).set('labels', {cancel:'查看排班',ok:'坚持删除'});

	};


})