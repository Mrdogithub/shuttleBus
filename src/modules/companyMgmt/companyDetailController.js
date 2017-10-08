'use strict'
angular.module('companyDetailControllerModule',[])
.controller('companyDetailController',function(companyHttpService,$stateParams,$state,$scope){
	if(true){

		$scope.params = {
			'secondCompanyId': $stateParams.secondCompanyId,
			'companyName': $stateParams.companyName,
			'companyId': $stateParams.companyId,
			'applicationAdminId': $stateParams.applicationAdminId,
			'companyId': $stateParams.companyId,
			'phoneNumber': $stateParams.phoneNumber
		};
		$scope.active = false;
		$scope.active_one = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={
			'lv1':'公司列表',
			'lv2':'公司详情'
		}
	}else{
		$state.go('company.list')
	}

	$scope.editCompany = function(flag){
		$scope.active = !flag;
	};

	$scope.editCompanyName = function(flag){
		$scope.active_one = !flag
	}

	$scope.updateCompany = function(){
		$scope.submitOnProgress = true;
		console.log('xxx')
		var _params = {
			'secondCompanyId': $scope.params.secondCompanyId,
			'companyName': $scope.params.companyName,
			'companyId': $scope.params.companyId,
			'applicationAdminId': $scope.params.applicationAdminId,
			'companyId': $scope.params.companyId,
			'phoneNumber': $scope.params.phoneNumber
		}

		companyHttpService.updateCompanyByID(_params).then(function(result){
			$scope.submitOnProgress = false;
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功!',function(){
					$state.go('passenger.list')
				})
			}else{
				alertify.alert(_resultData.error.message)
			}
		},function(){})
	};

})