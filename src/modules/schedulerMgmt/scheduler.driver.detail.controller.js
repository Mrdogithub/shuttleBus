angular.module('schedulerDriverDetailControllerModule',[])
.controller('schedulerDriverDetailController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){
	//$stateParams.schedulerUUID && $stateParams.secondCompanyId
	if($stateParams.schedulerId){
		//get params from driver list
		// utilFactory.getLocalTime($stateParams.annualInspectionExpiration/1000).split(',')[0]
		$scope.params = {
			'schedulerId': $stateParams.schedulerId,
			'identityCard': $stateParams.identityCard || '———',
			'licenseExpirationDate': $stateParams.licenseExpirationDate?utilFactory.getLocalTime($stateParams.licenseExpirationDate).split(',')[0] : '———',
			'licenseID': $stateParams.licenseId || '———',
			'name': $stateParams.name || '———',
			'driverId': $stateParams.driverId,
			'phoneNumber': $stateParams.phoneNumber || '———',
			'secondCompanyId': $stateParams.secondCompanyId,
			'secondCompanyName': $stateParams.secondCompanyName,
			'shuttleCompanyName': $stateParams.shuttleCompanyName || '———',
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
		$state.go('admin.scheduler.driver')
	}

	$scope.editPassengerProfile = function(flag){
		$scope.params['licenseID'] = $stateParams.licenseId || '',
		//$scope.params['identityCard'] = $stateParams.identityCard || '',
		$scope.params['licenseExpirationDate'] = $stateParams.licenseExpirationDate?utilFactory.getLocalTime($stateParams.licenseExpirationDate).split(',')[0] : ' '
		$scope.params['name'] = $stateParams.name || '',
		$scope.params['phoneNumber'] = $stateParams.phoneNumber || '',
		$scope.params['shuttleCompanyName'] = $stateParams.shuttleCompanyName || ''
		$scope.params.busCompanyObj = {'name':$scope.params.shuttleCompanyName,'partyId':$scope.params.shuttleCompanyId};

		//scope.$apply();
		//console.log(1,$scope.params)
		// $scope.params = {
		// 	'identityCard': $stateParams.identityCard || '',
		// 	'licenseExpirationDate': $stateParams.licenseExpirationDate?utilFactory.getLocalTime($stateParams.licenseExpirationDate).split(',')[0] : ' ',
		// 	'licenseID': $stateParams.licenseId || '',
		// 	'name': $stateParams.name || '',
		// 	'phoneNumber': $stateParams.phoneNumber || '',
		// 	'shuttleCompanyName': $stateParams.shuttleCompanyName || '',
		// 	'busCompany':[{'name':'数据加载中...','id':null}]
		// };
		//$scope.params['busCompanyObj'] = 'sadfasdf';
		$scope.active = !flag;

	};

	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.scheduler.driver')
		},function(){

		});
	}

	// form information completed by user and the group params whin _params obj
	// invoke API, before invoke api we need to check all filed's status by 'setDirty'
	// services.
	$scope.submitDriverProfile = function(formValidateIsInvalid){
		$scope.active = true;
		var currentTimestamp=new Date().getTime();
		var selectedTimestamp = utilFactory.getTimestamp($scope.params.licenseExpirationDate);
		// all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		if(formValidateIsInvalid) return utilFactory.setDirty($scope.formValidate);
		if(currentTimestamp > selectedTimestamp){
			return alertify.alert('驾照已过期',function(){})
		}
		alertify.confirm('确认更新司机"'+$scope.params.name+'"?',function(){
		
			$scope.submitOnProgress = true;
			$scope.submitStatusText = "正在更新中...";

			var _params = {
				'schedulerId': $scope.params.schedulerId,
				'identityCard': $scope.params.identityCard,
				'licenseExpirationDate': utilFactory.getTimestamp($scope.params.licenseExpirationDate),
				'licenseId': $scope.params.licenseID,
				'name': $scope.params.name,
				'driverId': $scope.params.driverId,
				'phoneNumber': $scope.params.phoneNumber,
				'shuttleCompanyId':$scope.params.busCompanyObj.partyId,
				'shuttleCompanyName': $scope.params.busCompanyObj.name,
				'secondCompanyId': $scope.params.secondCompanyId,
				'secondCompanyName': $scope.params.secondCompanyName
			}
		
			schedulerHttpService.updateDriverByID(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$state.go('admin.cheduler.driver')
					alertify.alert('更新成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('admin.scheduler.driver')
					})
				}else{
					$scope.submitStatusText = '完成';
					utilFactory.checkErrorCode(responseData.error.statusCode);
					$scope.submitOnProgress = false;
				}
			},function(errorResult){
				$scope.submitStatusText = '完成';
				$scope.active = true;
				alertify.alert(errorResult.error.message)
			})
		},function(){
			$scope.submitOnProgress = false;
		}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});	
	};
})