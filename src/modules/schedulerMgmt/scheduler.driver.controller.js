angular.module('schedulerDriverControllerModule',[])
.controller('schedulerDriverController',function(loadData,schedulerHttpService,utilFactory,$state,$scope){
	
	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	if(!loadData.data.error &&(!loadData.data.value || !loadData.data.value.list.length)){
		console.log('test test')
		$scope.dataIsEmpty = true;
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
	}


	$scope.selectAllStatus = false;
	$scope.queryByKeyObj = {
		'active':{'key':'driverName','value':'司机姓名'},
		'list':[{'key':'phoneNumber','value':'手机号'}]
	}

	$scope.selectKey = function(activeObj){
		$scope.queryByKeyObj.list.length = 0;
		$scope.queryByKeyObj.list.push( {'key':$scope.queryByKeyObj.active.key,'value':$scope.queryByKeyObj.active.value})
		$scope.queryByKeyObj.active.key = activeObj.key;
		$scope.queryByKeyObj.active.value = activeObj.value;
		$('.dropdown-menu').css('display','none');
	}

	$scope.showQueryKeyList = function(){
		$('.dropdown-menu').css('display','block')
	}

	$scope.searchFn = function(){
		var _searchParams = {
			'pageSize':'20',
			'pageNumber':'1',
			'pageNo': '1',
			'accountId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		}
		_searchParams[$scope.queryByKeyObj.active.key] = $scope.searchText;
		$scope.pageConfigs.getList(_searchParams);
		$scope.$broadcast('refreshPageList',_searchParams);
	}
	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'accountId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getDriverList(params)
		},
		loadData:function(){},
		dataSet:function(result){}
		//extendParams:function(){}
	}

	// add new driver
	$scope.addDriver = function(){
		$state.go('admin.scheduler.addDriver',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
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
					var _params = {
						'schedulerId': utilFactory.getAccountId(),
						'identityCard': item.identityCard,
						'licenseExpirationDate': item.licenseExpirationDate,
						'licenseId': item.licenseId,
						'name': item.name,
						'driverId': item.partyId,
						'phoneNumber': item.phoneNumber,
						'secondCompanyId': item.secondCompanyId,
						'shuttleCompanyName':item.shuttleCompanyName,
						'shuttleCompanyId': item.shuttleCompanyId,
						'secondCompanyName': item.secondCompanyName
					}

					$state.go('admin.scheduler.driverDetail',_params);
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _params = {
						'schedulerId': utilFactory.getAccountId(),
						'identityCard': item.identityCard,
						'licenseExpirationDate': item.licenseExpirationDate,
						'licenseId': item.licenseId,
						'name': item.name,
						'driverId': item.partyId,
						'phoneNumber': item.phoneNumber,
						'secondCompanyId': item.secondCompanyId,
						'secondCompanyName': item.secondCompanyName,
					}

					alertify.confirm('该司机可能有排班任务，如继续删除，排班任务也将被清空！',function(){
						schedulerHttpService.deleteDriverByID(_params).then(function(result){
							var _resultData = result.data;

							if(!_resultData.error){
								$state.go('admin.scheduler.driver',{},{reload:true})
							}else {
								utilFactory.checkErrorCode(_resultData.error.statusCode)
							}
							
						});
					},function(){}).set({labels:{cancel: '取消',ok:'坚持删除'}, padding: true});
				}
			},
			]
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
					'selfKey':{'key':'name','value':'司机姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
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