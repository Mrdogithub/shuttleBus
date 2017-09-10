'use strict'
angular.module('schedulerDriverDetailControllerModule',[])
.controller('schedulerDriverDetailController',function(schedulerHttpService,setDirty,$stateParams,$state,$scope){
	//$stateParams.schedulerUUID && $stateParams.secondCompanyId
	if(true){

		//get params from driver list
		$scope.params = {
			'phoneNumber':$stateParams.phoneNumber ||'--',
			'roleType':$stateParams.roleType,
			'name':$stateParams.name ||'--',
			'accountId':$stateParams.accountId ||'--',
			'driverUUID':$stateParams.driverUUID ||'--',
			'schedulerUUID':$stateParams.schedulerUUID ||'--',
			'secondCompanyId':$stateParams.secondCompanyId ||'--',
			'shuttleCompanyId':$stateParams.shuttleCompanyId ||'--',
			'licenseID':$stateParams.licenseID ||'--',
			'licenseExpirationDate':$stateParams.licenseExpirationDate ||'--',
			'identityCard':$stateParams.identityCard||'--'
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


	// form information completed by user and the group params whin _params obj
	// invoke API, before invoke api we need to check all filed's status by 'setDirty'
	// services.
	$scope.submitDriverProfile = function(formValidateIsInvalid){
		
		// all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		if(formValidateIsInvalid) return setDirty($scope.formValidate);
		

		alertify.confirm('确认更新司机"'+$scope.params.name+'"?',function(){
			$scope.submitOnProgress = true;
			$scope.submitStatusText = "正在更新中...";

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

			console.log(1,_params)
			schedulerHttpService.updateDriverByID(_params).then(function(result){
				console.log(1,result)
				var responseData = result.data;
				if(!responseData.error){
					$state.go('scheduler.driver',{'schedulerUUID':_params.schedulerUUID,'secondCompanyID':_params.shuttleCompanyId})
					// alertify.alert('新增成功！',function(){
					// 	$scope.submitStatusText = '完成';
					// 	$scope.active = true;
					// 	$state.go('scheduler.driver',{'schedulerUUID':_params.schedulerUUID,'secondCompanyID':_params.shuttleCompanyId})
					// })
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