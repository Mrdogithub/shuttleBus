angular.module('companyDetailControllerModule',[])
.controller('companyDetailController',function(companyHttpService,utilFactory,$stateParams,$state,$scope){
	if($stateParams.secondCompanyId){

		$scope.params = {
			'secondCompanyId': $stateParams.secondCompanyId,
			'companyName': $stateParams.companyName,
			'adminName':$stateParams.adminName,
			'companyId': $stateParams.companyId,
			'userId':$stateParams.userId,
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
		$scope.active_one = !flag; 
	};

	$scope.updateCompany = function(){
		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId': $scope.params.secondCompanyId,
			'companyName': $scope.params.companyName,
			'adminName':$scope.params.adminName,
			'companyId': $scope.params.companyId,
			'userId':$scope.params.userId,
			'applicationAdminId': $scope.params.applicationAdminId,
			'companyId': $scope.params.companyId,
			'phoneNumber': $scope.params.phoneNumber
		}

		companyHttpService.updateCompanyByID(_params).then(function(result){
			$scope.submitOnProgress = false;
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功!',function(){
					// $state.go('admin.companyList')
					$scope.active = false;
					$scope.active_one = false;
					$scope.$apply();
				})
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		},function(){})
	};
})