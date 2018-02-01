angular.module('schedulerSpecialBusEditControllerModule',[])
.controller('schedulerSpecialBusEditController',function(schedulerHttpService,TOKEN_ERROR,utilFactory,$scope,$state,$compile,$stateParams){
	$scope.breadcrumbText={
		'lv1':'专车排班',
		'lv2':'排班详情'
	}

	$scope.addSchedule = function(){
		$state.go('admin.scheduler.addOneDaySchedule');
	}

	$('.datepicker').datepicker({ 
		language: "zh-CN"
	});

	// $scope.eventDay = $stateParams.eventDay;

	$scope.pageConfigsModal={

		// var result = $scope.tableConfig.stableFlag.operate;
		// for(var i =0;i<result.length;i++) {
		// 	$scope.tableConfig.stableFlag.operate[i].fun();
		// 	console.log("1234567890")
		// }
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'schedulerId':utilFactory.getAccountId(),
			'assignmentId': $stateParams.assignmentId
		},
		list:null,
		ngIf:false,
		getList:function(params){
			return schedulerHttpService.getPassengerList(params);
		},
		loadData:function(){
		},
		dataSet:function(result){
			// if(result.value !=null){
			// 	var _dataArray = result.value
			// 	for(var i=0;i<_dataArray.length;i++){
			// 		_dataArray[i]['departureTime'] = utilFactory.getLocalTime(_dataArray[i]['departureTime']);
			// 	}
			// }
		}
  	}

	$scope.tableConfigModal={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true
		},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'curElementsNum','value':'编号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'bookingAssignmentId','value':'预约编号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'passengerName','value':'姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'beginTime','value':'创建时间'},
					'checkFlag':true
				}
			]
		}
	}

});