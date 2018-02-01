angular.module('schedulerBusControllerModule',[])
.controller('schedulerBusController',function(loadData,utilFactory,schedulerHttpService,$state,$scope){
	
	
	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	if(!loadData.data.error &&(!loadData.data.value || !loadData.data.value.list.length)){
		$scope.dataIsEmpty = true;
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
	}

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'accountId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getBusList(params)
		},
		loadData:function(){
		},
		dataSet:function(result){
		}
		//extendParams:function(){}
	}


	$scope.searchFn = function(){
		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1','licensePlate':$scope.searchText});
	}
	$scope.addBus = function(){
		$state.go('admin.scheduler.addBus',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
	};

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看详情',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var paramsObj = item;
					$state.go('admin.scheduler.busDetail',{
						'annualInspectionExpiration': item.annualInspectionExpiration,
						'availableSeats': item.availableSeats,
						'engineNumber': item.engineNumber,
						'insuranceExpiration': item.insuranceExpiration,
						'licensePlate': item.licensePlate,
						'schedulerId': utilFactory.getAccountId(),
						'shuttleCompanyId': item.shuttleCompanyId,
						'shuttleCompanyName':item.shuttleCompanyName  || '——',
						'secondCompanyId':utilFactory.getSecondCompanyId(),
						'vehicleId': item.vehicleId,
						'vehicleLicense': item.vehicleLicense,
						'vehicleModel': item.vehicleModel,
						'vin': item.vin
					});
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){

					alertify.confirm('该车辆可能有排班任务，如继续删除，排班任务也将被清空！',function(){
						schedulerHttpService.deleteBusByID({'schedulerId':utilFactory.getAccountId(),'vehicleId':item.vehicleId}).then(function(result){
							var _resultData = result.data;
							if(!_resultData.error) {
								$state.go('admin.scheduler.bus',{},{reload:true})
							}else{
								utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.statusText)
							}
						})
					},function(){}).set({labels:{cancel: '取消',ok:'坚持删除'}, padding: true});
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
					'selfKey':{'key':'licensePlate','value':'车辆牌照'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'vehicleModel','value':'车辆类型'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'availableSeats','value':'座位数'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'shuttleCompanyName','value':'运营单位'},
					'checkFlag':true
				}
	    	]
	    }
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});

})