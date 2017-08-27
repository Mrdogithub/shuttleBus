'use strict'
angular.module('passengerAddControllerModule',[])
.controller('passengerAddController',function(passengerHttpService,$stateParams,$state,$scope){

	//set default


	if($stateParams.hrUuid){
		$scope.passengerUuid = $stateParams.passengerUuid;

		$scope.params = {
			'status':1,
			'passengerUuid':$stateParams.passengerUuid,
			'roleType':$stateParams.roleType,
			'hrUuid':$stateParams.hrUuid,
			'secondCompanyId':$stateParams.secondCompanyId,
			'accountId':$stateParams.accountId,
			'routeName':$stateParams.routeName,
			'stationName':$stateParams.stationName,
			'phoneNumber':$stateParams.phoneNumber,
			'employeeId':$stateParams.employeeId,
			'passengerName':$stateParams.passengerName

		};
		$scope.active = true;
		$scope.breadcrumbParams = {
			'hrUuid':$stateParams.hrUuid,
			'secondCompanyId':$stateParams.secondCompanyId	
		}
		$scope.breadcrumbText={
			"lv1":"乘客列表",
			"lv2":"乘客详情"
		}
	}else{
		$state.go('passenger.list',{'hrUUID':'666','secondCompanyID':'666'})
	}

	$scope.editPassengerProfile = function(flag){
		$scope.active = !flag;
	};

	$scope.addPassengerProfile = function(){
		var _params = {
			'phoneNumber':$scope.params.phoneNumber,
			'roleType':$scope.params.roleType,
			'accountId':$scope.params.accountId,
			'name':$scope.params.passengerName,
			'employeeId':$scope.params.employeeId,
			'hrUuid':$scope.params.hrUuid,
			'passengerUuid':$scope.params.passengerUuid,
			'secondCompanyId':$scope.params.secondCompanyId
		}

		console.log(_params)
		passengerHttpService.addPassenger(_params).then(function(result){
			console.log('result')
		},function(){})
	}
	

	$scope.deletePassenger = function(){
		var _params = {
			'roleType':$scope.params.roleType,
			'hrUuid':$scope.params.hrUuid,
			'passengerUuid':$scope.params.passengerUuid
		}

		console.log("--- del passenger ---")
		console.log(1,_params)
		passengerHttpService.deletePassengerByID(_params).then(function(result){
			console.log(1,result)
		},function(){})
	};
})