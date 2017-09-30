'use strict'
angular.module('schedulerDriverDetailControllerModule',[])
.controller('schedulerDriverDetailController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){
	//$stateParams.schedulerUUID && $stateParams.secondCompanyId
	if(true){

		//get params from driver list
		$scope.params = {
			'schedulerId': $stateParams.schedulerId,
			'identityCard': $stateParams.identityCard,
			'licenseExpirationDate': $stateParams.licenseExpirationDate,
			'licenseId': $stateParams.licenseId,
			'name': $stateParams.name,
			'driverId': $stateParams.driverId,
			'phoneNumber': $stateParams.phoneNumber,
			'secondCompanyId': $stateParams.secondCompanyId,
			'secondCompanyName': $stateParams.secondCompanyName,
			'shuttleCompanyName': $stateParams.shuttleCompanyName,
			'shuttleCompanyId': $stateParams.shuttleCompanyId,
			'busCompany':[{'name':'数据加载中...','id':null}],
		};


		// Get bus company list 
		schedulerHttpService.getBusCompany({'schedulerId': $scope.params.schedulerId,'secondCompanyId': $scope.params.secondCompanyId}).then(function(result){
			var	_resultData = result.data;

			if(!_resultData.error){
				$scope.params.busCompany.length = 0;
				_resultData.value.list.length? $scope.params.busCompany = _resultData.value.list :$scope.params.busCompany.push({'name':'暂无数据','id':null});
			} else{
				alertify.aleret(_resultData.error.message)
			}
		});


		//set default params for driver detail
		$scope.active = false;
		$scope.submitOnProgress = false;

		$scope.breadcrumbText={
			'lv1':'司机管理',
			'lv2':'司机详情'
		}
	}else{
		$state.go('scheduler.driver')
	}

	$scope.editPassengerProfile = function(flag){
		$scope.active = !flag;
	};


	// form information completed by user and the group params whin _params obj
	// invoke API, before invoke api we need to check all filed's status by 'setDirty'
	// services.
	$scope.submitDriverProfile = function(formValidateIsInvalid){
		
		// all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		if(formValidateIsInvalid) return utilFactory.setDirty($scope.formValidate);
		

		alertify.confirm('确认更新司机"'+$scope.params.name+'"?',function(){
			$scope.submitOnProgress = true;
			$scope.submitStatusText = "正在更新中...";

			var _params = {
				'schedulerId': $scope.params.schedulerId,
				'identityCard': $scope.params.identityCard,
				'licenseExpirationDate': utilFactory.getTimestamp($scope.params.licenseExpirationDate),
				'licenseId': $scope.params.licenseId,
				'name': $scope.params.name,
				'driverId': $scope.params.driverId,
				'phoneNumber': $scope.params.phoneNumber,
				'shuttleCompanyId':$scope.params.busCompanyObj.shuttleCompanyId,
				'shuttleCompanyName': $scope.params.busCompanyObj.shuttleCompanyName,
				'secondCompanyId': $scope.params.secondCompanyId,
				'secondCompanyName': $scope.params.secondCompanyName
			}

			schedulerHttpService.updateDriverByID(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$state.go('scheduler.driver')
					alertify.alert('新增成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('scheduler.driver')
					})
				}else{
					$scope.submitStatusText = '完成';
					switch(responseData.error.statusCode){
						case '500':alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
						break;
						case '400':alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
						break;
						default:alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
					}
					$scope.submitOnProgress = false;
				}
			},function(errorResult){
				$scope.submitStatusText = '完成';
				$scope.active = true;
				alertify.alert(errorResult.error.message)
			})


		},function(){
			// cancel submit
		});


	


		
	};

	$scope.deleteDriver = function(){
		var _params = {
			'driverUUID':$scope.params.driverUUID,
			'schedulerUUID':$scope.params.schedulerUUID,
		}
		alertify.confirm('该司机仍有排版任务,如果继续删除,排班安排也将被情况！请查看排班，并替换司机。',function(){
			alertify.alert('删除成功')
			schedulerHttpService.deletePassengerByID(_params).then(function(result){
				console.log(1,result)
			},function(){
				$.aleret('正在建设中...')
			})
		},function(){}).set('labels', {cancel:'查看排班',ok:'坚持删除'});

	};


})