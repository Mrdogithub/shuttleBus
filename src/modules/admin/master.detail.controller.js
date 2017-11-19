angular.module('masterDetailControllerModule',[])
.controller('masterDetailController',function(applicationAdminHttpService,utilFactory,$stateParams,$state,$scope){
	if($stateParams.systemAdminId){

		$scope.params = {
			'systemAdminCompanyId': $stateParams.systemAdminCompanyId,
			'companyName': $stateParams.companyName,
			'adminName':$stateParams.adminName,
			'systemAdminId': $stateParams.systemAdminId,
			'companyId': $stateParams.companyId,
			'phoneNumber': $stateParams.phoneNumber,
			'userId': $stateParams.userId,
			'systemCompanyName': $stateParams.systemCompanyName
		};
		$scope.active = false;
		$scope.active_one = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={
			'lv1':'公司列表',
			'lv2':'公司详情'
		}
	}else{
		$state.go('admin.master')
	}

	$scope.editCompany = function(flag){ $scope.active = !flag; };

	$scope.editCompanyName = function(flag){ $scope.active_one = !flag }

	$scope.updateCompany = function(){
		$scope.submitOnProgress = true;
		var _params = {
			'systemAdminCompanyId': $scope.params.systemAdminCompanyId,
			'companyName': $scope.params.companyName,
			'adminName':$scope.params.adminName,
			'companyId': $scope.params.companyId,
			'userId':$scope.params.userId,
			'systemAdminId': $scope.params.systemAdminId,
			'companyId': $scope.params.companyId,
			'phoneNumber': $scope.params.phoneNumber,
			'systemCompanyName':$scope.params.systemCompanyName
		}

		applicationAdminHttpService.updateApplicationAdminByID(_params).then(function(result){
			$scope.submitOnProgress = false;
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功!',function(){
					$state.go('admin.master')
				})
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		},function(){})
	};
})