angular.module('passengerDetailControllerModule',[])
.controller('passengerDetailController',function(passengerHttpService,utilFactory,$stateParams,$state,$scope){
	if($stateParams.passengerId){

		$scope.params = {
			'passengerId': $stateParams.passengerId,
			'secondCompanyId': $stateParams.secondCompanyId,
			'defaultRouteName': $stateParams.defaultRouteName || '———',
			'defaultStationName': $stateParams.defaultStationName || '———',
			'employeeId': $stateParams.employeeId || '———',
			'status':$stateParams.status == 0?'未激活':'已激活',
			'name': $stateParams.name || '———',
			'phoneNumber': $stateParams.phoneNumber || '———'
		};
		$scope.active = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={
			'lv1':'乘客列表',
			'lv2':'乘客详情'
		}
	}else{
		$state.go('admin.passenger.list')
	}

	$scope.editPassengerProfile = function(flag){ 
		$scope.active = !flag;

		$scope.params['employeeId'] = $stateParams.employeeId || '';
		$scope.params['name'] = $stateParams.name || '';
		$scope.params['phoneNumber'] = $stateParams.phoneNumber || '';
	};

	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.passenger.list')
		},function(){

		});
	}

	$scope.submitPassengerProfile = function(){
		$scope.active = true;
		$scope.submitOnProgress = true;
		var _params = {
			'passengerId': $scope.params.passengerId,
			'secondCompanyId': $scope.params.secondCompanyId,
			'defaultRouteName': $scope.params.defaultRouteName,
			'defaultStationName': $scope.params.defaultStationName,
			'employeeId': $scope.params.employeeId,
			'name': $scope.params.name,
			'phoneNumber': $scope.params.phoneNumber
		}

		alertify.confirm('确认修改名为"' +_params.name+ '"的这个乘客？',function(){
			passengerHttpService.updatePassengerByID(_params).then(function(result){
				$scope.submitOnProgress = false;
				var _resultData = result.data;
				if(!_resultData.error){
					alertify.alert('更新成功!',function(){
						$state.go('admin.passenger.list')
					})
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			},function(){
				$scope.submitOnProgress = false;
			})
		},function(){
			$scope.submitOnProgress = false;
		}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	};

	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'hrId':utilFactory.getAccountId(),
			'passengerId':$scope.params.passengerId
		},
		list:null,
		getList:function(params){
			return passengerHttpService.getPassengerTrip(params)
		},
		loadData:function(){},
		dataSet:function(result){
			for(var i=0;i<result.length;i++){
				result[i]['status'] =result[i]['status'] == 0?'未激活':'已激活'
			}
		}
		//extendParams:function(){}
	}


	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operateIfFlag:false,
			operate:[]
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
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'passengerUuid','value':'上车时间'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'phoneNumber','value':'上车站点'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'stationName','value':'乘坐线路'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'routeName','value':'乘坐车辆'},
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