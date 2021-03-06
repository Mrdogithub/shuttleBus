angular.module('schedulerAddDriverControllerModule',[])
.controller('schedulerAddDriverController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){

	if($stateParams.schedulerId  &&$stateParams.secondCompanyId){
		$scope.params = {
			// 'phoneNumber':$stateParams.phoneNumber,
			// 'roleType':$stateParams.roleType,
			// 'name':$stateParams.name,
			// 'accountId':$stateParams.accountId,
			// 'driverUUID':$stateParams.driverUUID,
			'schedulerId':$stateParams.schedulerId ,
			'secondCompanyId':$stateParams.secondCompanyId,
			'busCompany':[{'name':'数据加载中...','id':null}],
			'noDataForOptionList':false
			// 'shuttleCompanyId':$stateParams.shuttleCompanyId,
			// 'licenseID':$stateParams.licenseID,
			// 'licenseExpirationDate':$stateParams.licenseExpirationDate,
			// 'identityCard':$stateParams.identityCard
		};
		console.log("$stateParams.secondCompanyId"+$stateParams.secondCompanyId);
		// Get bus company list
		schedulerHttpService.getBusCompany({'schedulerId': $scope.params.schedulerId,'secondCompanyId': $scope.params.secondCompanyId}).then(function(result){
			
			var	_resultData = result.data;

			if(!_resultData.error){
				$scope.params.busCompany.length = 0;
				_resultData.value.list.length? $scope.params.busCompany = _resultData.value.list :$scope.params.noDataForOptionList = true;
				//$scope.params.busCompany.unshift({'name':'请选择运营单位','partyId':'?'})
			} else{
				alertify.aleret(_resultData.error.message)
			}
		});

		// Config datepikcer 
		$.fn.datepicker.dates['zh-CN'] = {
				days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
				daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
				daysMin:  ["日", "一", "二", "三", "四", "五", "六"],
				months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
				monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				today: "今日",
				clear: "清除",
				format: "yyyy/mm/dd",
				titleFormat: "yyyy/mm",
				weekStart: 1
		};
		
		$('.datepicker').datepicker({ language: "zh-CN"});


		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={
			'lv1':'司机管理',
			'lv2':'新增司机'
		}
	}else{
		$state.go('admin.scheduler.driver')
	}

	// form information haven't been completed by user and then user trigger ‘取消’
	// we should provide messages for user
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
		var currentTimestamp=new Date().getTime();
		var selectedTimestamp = utilFactory.getTimestamp($scope.params.licenseExpirationDate);
		// if all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		if(formValidateIsInvalid) return utilFactory.setDirty($scope.formValidate);
		if(currentTimestamp > selectedTimestamp){
			return alertify.alert('驾照已过期',function(){})
		}
		alertify.confirm('确认新增名为"'+$scope.params.name+'"的司机？',function(){	
			$scope.submitOnProgress = true;
			$scope.submitStatusText = '正在创建中';
			
			var _params = {
				
				'secondCompanyId': $scope.params.secondCompanyId,
				'licenseID': $scope.params.licenseID,
				'licenseExpirationDate': utilFactory.getTimestamp($scope.params.licenseExpirationDate),
				'name': $scope.params.name,
				'phoneNumber': $scope.params.phoneNumber,
				'schedulerId': $scope.params.schedulerId,
				'shuttleCompanyId': $scope.params.busCompanyObj.id,
				'shuttleCompanyName':$scope.params.busCompanyObj.name
			}


			schedulerHttpService.addDriver(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					//$state.go('admin.scheduler.driver')
					alertify.alert('新增成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('admin.scheduler.driver')
					})
				}else{
					$scope.submitStatusText = '完成';
					utilFactory.checkErrorCode(responseData.error.statusCode)
					$scope.submitOnProgress = false;
				}
			
			},function(errorResult){
				$scope.submitStatusText = '完成';
				$scope.active = true;
				alertify.alert(errorResult.error.message)
			});
		}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	};

})