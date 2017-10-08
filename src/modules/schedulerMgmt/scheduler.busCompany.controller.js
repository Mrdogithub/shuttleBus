<<<<<<< HEAD
'use strict'
angular.module('schedulerbusCompanyControllerModule',[])
.controller('schedulerbusCompanyController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){
	

	$scope.params = {
		'secondCompanyId':utilFactory.getSecondCompanyId(),
		'schedulerId':utilFactory.getAccountId()
		// 'routeName':$stateParams.routeName,
		// 'stationName':$stateParams.stationName,
		// 'phoneNumber':$stateParams.phoneNumber,
		// 'employeeId':$stateParams.employeeId,
		// 'passengerName':$stateParams.passengerName
	};
	$scope.active = false;
	$scope.submitOnProgress = false;

	$scope.breadcrumbText={
		'lv1':'运营单位'
	}
	// if($stateParams.passengerUuid && $stateParams.hrUuid){

	// }else{
	// 	$state.go('passenger.list',{'hrUUID':'666','secondCompanyID':'666'})
	// }


	$scope.submitBusCompany = function(){
		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.params.secondCompanyId,
			'schedulerId': $scope.params.schedulerId,
			'name': $scope.params.name,
			// 'phoneNumber': $scope.params.phoneNumber,


		}

		schedulerHttpService.addBusCompany(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('添加成功',function(){
					$state.go('scheduler.busCompany',{},{reload:true});
				})
			}else{
				alertify.alert(_resultData.error.message)
			}
			$scope.submitOnProgress = false;
		},function(){})
	};


	$scope.close = function(){
		$('#myModal').modal('toggle');
	}

	$scope.updateBusCompany = function(updateFormValidateIsInvalid){

		if(updateFormValidateIsInvalid){
			return utilFactory.setDirty($scope.updateFormValidate);
		}

		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.updateParams.secondCompanyId,
			'schedulerId': $scope.params.schedulerId,
			'name': $scope.updateParams.name,
			'partyId': $scope.updateParams.partyId
			//'phoneNumber': $scope.updateParams.phoneNumber,
			//'roleCode':$scope.updateParams.roleCode,
			//'status':$scope.updateParams.status
		}
		$('#myModal').modal('toggle');
		schedulerHttpService.updateBusCompany(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('scheduler.busCompany',{},{reload:true});
				})
			}else{
				alertify.alert(_resultData.error.message)
			}
			$scope.submitOnProgress = false;
		},function(){})
	};	

	// $scope.deletePassenger = function(){
	// 	var _params = {
	// 		'roleType':$scope.params.roleType,
	// 		'hrUuid':$scope.params.hrUuid,
	// 		'passengerUuid':$scope.params.passengerUuid
	// 	}
	// 	passengerHttpService.deletePassengerByID(_params).then(function(result){
	// 		console.log(1,result)
	// 	},function(){})
	// };


	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return schedulerHttpService.getBusCompany({
				'secondCompanyId': utilFactory.getSecondCompanyId(),
				'schedulerId': utilFactory.getAccountId(),
				'pageSize':'10',
				'pageNumber':'1'
			})
		},
		loadData:function(){
			console.log('load data')
			
		},
		dataSet:function(result){
			// var _result = result.data.value;
			// for(var i=0;i<_result.length;i++){
			// 	_result[i]['passengerProfileOutDTO']['status'] =_result[i]['passengerProfileOutDTO']['status'] == 0?'未激活':'已激活'
			// }
		}
		//extendParams:function(){}
	}


	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operateIfFlag:true,
			operate:[{
				name:'编辑',
				ngIf:function(){},
				fun:function(item,event){

					$scope.updateParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'partyId':item.partyId
					}

					$('#myModal').modal('toggle');
					// }
					// $scope.tableConfig.operate[0].ngIf = function(){
					// 	return false;
					// }

				}
			},
			{
				name:'删除',
				ngIf:function(){},
				fun:function(item){
					var _deleteParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'partyId':item.partyId
					}
					alertify.confirm('确认删除'+item.name+'?',function(){
						schedulerHttpService.deleteBusCompany(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('scheduler.busCompany',{},{reload:true});
							} else{
								alertify.alert('服务器错误：'+_resultData.error.message)
							}
						});
					},function(){

					});
		
				}
			}]
		},
		// height:290,
		// head:[{name:'文件名',key:'filename'}],
		// className:function(flag){},
		// clickFun:function(){},
		// rowClickFun:function(item){},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'单位名称'},
					'checkFlag':true
				}
				// {
				// 	'parentKey':'',
				// 	'selfKey':{'key':'phoneNumber','value':'手机号'},
				// 	'checkFlag':true
				// }
	    	]
	    }
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
=======
'use strict'
angular.module('schedulerbusCompanyControllerModule',[])
.controller('schedulerbusCompanyController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){
	

	$scope.params = {
		'secondCompanyId':utilFactory.getSecondCompanyId(),
		'schedulerId':utilFactory.getAccountId()
		// 'routeName':$stateParams.routeName,
		// 'stationName':$stateParams.stationName,
		// 'phoneNumber':$stateParams.phoneNumber,
		// 'employeeId':$stateParams.employeeId,
		// 'passengerName':$stateParams.passengerName
	};
	$scope.active = false;
	$scope.submitOnProgress = false;

	$scope.breadcrumbText={
		'lv1':'运营单位'
	}
	// if($stateParams.passengerUuid && $stateParams.hrUuid){

	// }else{
	// 	$state.go('passenger.list',{'hrUUID':'666','secondCompanyID':'666'})
	// }


	$scope.submitBusCompany = function(){
		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.params.secondCompanyId,
			'schedulerId': $scope.params.schedulerId,
			'name': $scope.params.name,
			// 'phoneNumber': $scope.params.phoneNumber,


		}

		schedulerHttpService.addBusCompany(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('添加成功',function(){
					$state.go('scheduler.busCompany',{},{reload:true});
				})
			}else{
				alertify.alert(_resultData.error.message)
			}
			$scope.submitOnProgress = false;
		},function(){})
	};


	$scope.close = function(){
		$('#myModal').modal('toggle');
	}

	$scope.updateBusCompany = function(updateFormValidateIsInvalid){

		if(updateFormValidateIsInvalid){
			return utilFactory.setDirty($scope.updateFormValidate);
		}

		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.updateParams.secondCompanyId,
			'schedulerId': $scope.params.schedulerId,
			'name': $scope.updateParams.name,
			'partyId': $scope.updateParams.partyId
			//'phoneNumber': $scope.updateParams.phoneNumber,
			//'roleCode':$scope.updateParams.roleCode,
			//'status':$scope.updateParams.status
		}
		$('#myModal').modal('toggle');
		schedulerHttpService.updateBusCompany(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('scheduler.busCompany',{},{reload:true});
				})
			}else{
				alertify.alert(_resultData.error.message)
			}
			$scope.submitOnProgress = false;
		},function(){})
	};	

	// $scope.deletePassenger = function(){
	// 	var _params = {
	// 		'roleType':$scope.params.roleType,
	// 		'hrUuid':$scope.params.hrUuid,
	// 		'passengerUuid':$scope.params.passengerUuid
	// 	}
	// 	passengerHttpService.deletePassengerByID(_params).then(function(result){
	// 		console.log(1,result)
	// 	},function(){})
	// };


	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return schedulerHttpService.getBusCompany({
				'secondCompanyId': utilFactory.getSecondCompanyId(),
				'schedulerId': utilFactory.getAccountId(),
				'pageSize':'10',
				'pageNumber':'1'
			})
		},
		loadData:function(){
			console.log('load data')
			
		},
		dataSet:function(result){
			// var _result = result.data.value;
			// for(var i=0;i<_result.length;i++){
			// 	_result[i]['passengerProfileOutDTO']['status'] =_result[i]['passengerProfileOutDTO']['status'] == 0?'未激活':'已激活'
			// }
		}
		//extendParams:function(){}
	}


	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operateIfFlag:true,
			operate:[{
				name:'编辑',
				ngIf:function(){},
				fun:function(item,event){

					$scope.updateParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'partyId':item.partyId
					}

					$('#myModal').modal('toggle');
					// }
					// $scope.tableConfig.operate[0].ngIf = function(){
					// 	return false;
					// }

				}
			},
			{
				name:'删除',
				ngIf:function(){},
				fun:function(item){
					var _deleteParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'partyId':item.partyId
					}
					alertify.confirm('确认删除'+item.name+'?',function(){
						schedulerHttpService.deleteBusCompany(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('scheduler.busCompany',{},{reload:true});
							} else{
								alertify.alert('服务器错误：'+_resultData.error.message)
							}
						});
					},function(){

					});
		
				}
			}]
		},
		// height:290,
		// head:[{name:'文件名',key:'filename'}],
		// className:function(flag){},
		// clickFun:function(){},
		// rowClickFun:function(item){},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'单位名称'},
					'checkFlag':true
				}
				// {
				// 	'parentKey':'',
				// 	'selfKey':{'key':'phoneNumber','value':'手机号'},
				// 	'checkFlag':true
				// }
	    	]
	    }
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
>>>>>>> 7d3cf1803017ce6215a2432ad96e570109fcee20
})