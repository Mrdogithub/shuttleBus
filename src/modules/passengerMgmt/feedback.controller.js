angular.module('feedbackControllerModule',[]).controller('feedbackController',function($scope,passengerHttpService,utilFactory){
	$scope.pageConfigs={
		params:{
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId(),
			'pageSize':'20',
			'pageNumber':'1'
		},
		list:null,
		getList:function(params){
			return passengerHttpService.getPassengerFeedback(params)
		},
		loadData:function(){},
		dataSet:function(result){
			var _data = result.value.list;
			console.log("_data"+_data);
			for(var i =0;i<_data.length;i++){
				_data[i]['routeType'] =_data[i]['routeType'] == 'AM'?'上行':'下行';
				_data[i]['routeTemplateName'] =  _data[i]['routeTemplateName']+'(' +_data[i]['routeType'] +')'+' - '+ _data[i]['vehicleLicensePlate']+' - '+ _data[i]['driverName']
				_data[i]['beginTime'] = utilFactory.getCurrentTime((_data[i]['beginTime']));
				_data[i]['bookingCount'] = _data[i]['bookingCount'] ? _data[i]['bookingCount'] : '0'
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
			// operate:[{
			// 	name:'编辑',
			// 	ngIf:function(){},
			// 	fun:function(item){
			// 		var _params = {
			// 			'secondCompanyId': item.secondCompanyId,
			// 			'employeeId': item.employeeId,
			// 			'name': item.name,
			// 			'phoneNumber': item.phoneNumber,
			// 			'schedulerId':  item.accountId,
			// 			'status': item.status,
			// 			'passengerId': item.partyId
			// 		}
			// 		$state.go('admin.passenger.detail',_params);
			// 	}
			// },
			// {
			// 	name:'删除',
			// 	ngIf:function(){},
			// 	fun:function(item){
			// 		alertify.alert('正在建设中...')
			// 	}
			// }]
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
					'selfKey':{'key':'id','value':'反馈编号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'passengerName','value':'员工姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'routeTemplateName','value':'乘车历史'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'rate','value':'星级'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'commentContent','value':'反馈内容'},
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