angular.module('passengerReportDataControllerModule',[]).controller('passengerReportDataController',function(passengerHttpService,utilFactory,$scope){
	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return passengerHttpService.getAllTripHistory(params)
		},
		loadData:function(){},
		dataSet:function(result){
		}
		//extendParams:function(){}
	}


	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[]
		},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		// defaultEmptyText:'暂无数据',
		// radioSelect:function(){},
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'id','value':'记录编号'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'name','value':'乘车人员'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'licensePlate','value':'乘坐车辆'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'routeName','value':'线路名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'startStationName','value':'起点站'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'arrivalStationName','value':'终点站'},
					'checkFlag':true
				}
			]
		}
		// changeEnable:function(item){}
	}

	
	$scope.selectAllStatus = false;
	$scope.queryByKeyObj = {
		'active':{'key':'passengerName','value':'乘车人员'},
		'list':[{'key':'tripHistoryId','value':'记录编号'}]
	}

	$scope.selectKey = function(activeObj){
		$scope.queryByKeyObj.list.length = 0;
		$scope.queryByKeyObj.list.push( {'key':$scope.queryByKeyObj.active.key,'value':$scope.queryByKeyObj.active.value})
		$scope.queryByKeyObj.active.key = activeObj.key;
		$scope.queryByKeyObj.active.value = activeObj.value;

		$('.dropdown-menu').css('display','none')
	}

	$scope.showQueryKeyList = function(){
		$('.dropdown-menu').css('display','block')
	}

	$scope.searchFn = function(searchText){
		var _searchParams = {
			'pageSize':'20',
			'pageNumber':'1',
			'pageNo': '1',
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		}
		_searchParams[$scope.queryByKeyObj.active.key] = $scope.searchText;
		// $scope.pageConfigs.getList(_searchParams)
		$scope.$broadcast('refreshPageList',_searchParams);

	}

	$scope.importData = function(){

		passengerHttpService.downloadTripHistory({'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()}).then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '乘客记录数据报表');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})

	}

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})