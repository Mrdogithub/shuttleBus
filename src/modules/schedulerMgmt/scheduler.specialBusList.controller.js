angular.module('schedulerSpecialBusListControllerModule',[])
.controller('schedulerSpecialBusListController',function(schedulerHttpService,TOKEN_ERROR,utilFactory,$scope,$state,$stateParams,ERRORCODE_CONSTANT){
	$scope.breadcrumbText={
		'lv1':'专车排班',
		'lv2':'排班详情'
	}

	$("#currentDay").val($stateParams.eventDay);
	$scope.params = {
		'currentDay':$("#currentDay").val()
	}

	var dateTime = utilFactory.getTimestamp($scope.params.currentDay);
	var d = new Date();
	var clickDay = utilFactory.getTimestamp($scope.params.currentDay+" 00:00");
	var compareDay = utilFactory.getTimestamp(d)+24*60*60*1000;

	$scope.clickDate = $stateParams.eventDay.replace(/\//g,'.');

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
	$('.datepicker').datepicker({ 
		language: "zh-CN",
	});

	if(clickDay < compareDay) {
		$scope.display = true
	} else {
		$scope.display = false
	}

	$scope.selectAllStatus = false;



	// get specialBusList table
	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'accountId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId(),
			'dateTime':utilFactory.getTimestamp($scope.params.currentDay)
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getSpecialBusList(params)
		},
		loadData:function(){
		},
		dataSet:function(result){
			var _data = result.value.list;
			for(var i =0;i<_data.length;i++){
				_data[i]['bookingRoute'] = _data[i]['bookingRoute'] + '(' +_data[i]['bookingStartStation'] +' - '+ _data[i]['bookingEndStation']+')'
				_data[i]['beginTime'] = utilFactory.getCurrentTime((_data[i]['beginTime']));
				_data[i]['bookingCount'] = _data[i]['bookingCount'] ? _data[i]['bookingCount'] : '0';

			}
		},
		extendParams:function(){}
		
	}

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看预约人',
				ngIf:function(item){
					if (clickDay < compareDay) {
						return true
					} else {
						return false
					}
				},
				fun:function(item,event){
				
					// $state.go('admin.scheduler.specialBusEdit',{'assignmentId': item.id});
					$scope.checkParams = {
						'pageSize':'20',
						'pageNumber':'1',
						'schedulerId':utilFactory.getAccountId(),
						'assignmentId': item.id
					}
					$scope.routeName = item.bookingRoute.split("(")[0];
					$scope.departureTime = item.beginTime;
					$('#myModal').modal('toggle');
					schedulerHttpService.getPassengerList($scope.checkParams).then(function(result){
						var _resultData = result.data;
						if(!_resultData.error){
							var _data = _resultData.value.list
							for(var i=0;i<_data.length;i++){
								_data[i]['passengerId'] = i+1;
								_data[i]['createTime'] = utilFactory.getLocalTime((_data[i]['createTime']));
							}
							$scope.pageConfigsModal.list = _resultData.value.list;
						}else{
							utilFactory.checkErrorCode(_resultData.error.statusCode)
						}
			      	});
					$scope.pageConfigsModal={

						params:{
							'pageSize':'20',
							'pageNumber':'1',
							'schedulerId':utilFactory.getAccountId(),
							'assignmentId': $scope.checkParams.assignmentId
						},
						list:null,
						getList:function(params){
							return schedulerHttpService.getPassengerList(params);
						},
						loadData:function(){
						},
						dataSet:function(result){
						}
				  	}
				}
			},
			{
				name:'编辑',
				ngIf:function(){
					if (clickDay < compareDay) {
						return false;
					} else {
						return true;
					}
				},
				fun:function(item,event){
					$scope.updateParams = {
						"bookingEndStation": item.bookingEndStation,
						"bookingRoute": item.bookingRoute,
						"bookingStartStation": item.bookingStartStation,
						"id": item.id
					}
					$("#departureTime").val(item.beginTime);
					$('#updateModal').modal('toggle');
				}
			},
			{
				name:'删除',
				ngIf:function(){
					if (clickDay < compareDay) {
						return false;
					} else {
						return true;
					}
				},
				fun:function(item){
					var deleteParams = {
						'schedulerId': utilFactory.getAccountId(),
						'assignmentId': item.id
					}
					alertify.confirm('确认要删除该排班吗',function(){
						schedulerHttpService.deleteSpecialBusList(deleteParams).then(function(result){
							var _resultData = result.data;
							if(!_resultData.error) {
								alertify.alert('删除成功！',function(){
									$state.go('admin.scheduler.specialBusList',{},{reload:true})
									var params = {
										'pageSize':'20',
										'pageNumber':'1',
										'accountId':utilFactory.getAccountId(),
										'secondCompanyId':utilFactory.getSecondCompanyId(),
										'dateTime':utilFactory.getTimestamp($("#currentDay").val())
									}
									// $scope.pageConfigs.getList(params);

									// $state.reload();
									// $scope.$broadcast('refreshPageList',{
									// 	pageSize:'20',
									// 	pageNo:'1',
									// 	secondCompanyId:utilFactory.getSecondCompanyId(),
									// 	dateTime:utilFactory.getTimestamp($("#currentDay").val())
									// });

								})
								
							}else{
								utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.statusText)
							}
						})
					},function(){}).set({labels:{cancel: '取消',ok:'坚持删除'}, padding: true});
				}
			}
			]
		},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		defaultEmptyText:'还未添加过任何排班',
		radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'bookingRoute','value':'线路信息'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'beginTime','value':'发车时间'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'bookingCount','value':'预约人数'},
					'checkFlag':true
				}
	    	]
	    },
		changeEnable:function(item){}
	}


	$scope.addSchedule = function(){
		$state.go('admin.scheduler.addOneDaySchedule',{'eventDay':$scope.params.currentDay,'dateTime':dateTime});
	}	

	$('.clockpicker').clockpicker({
		placement: 'top',
		align: 'left',
		autoclose: true
	});
	// var _startTime = $("#departureTime").val();

	$scope.close = function(){ $('#updateModal').modal('toggle');}


 //    get passenger list
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
					'selfKey':{'key':'createTime','value':'创建时间'},
					'checkFlag':true
				}
			]
		}
	}

	$scope.$watch('params.currentDay',function(newValue, oldValue){ 
		if (newValue === oldValue) { 
			return
		} else {
			var params = {
				'pageSize':'20',
				'pageNumber':'1',
				'accountId':utilFactory.getAccountId(),
				'secondCompanyId':utilFactory.getSecondCompanyId(),
				'dateTime':utilFactory.getTimestamp(newValue)
			}

			var _result = $scope.tableConfig.stableFlag.operate;
			for(var i =0;i<_result.length;i++) {
				clickDay = utilFactory.getTimestamp(newValue);
				$scope.tableConfig.stableFlag.operate[i].ngIf();
			}
			// $scope.pageConfigs.list = null
			$scope.pageConfigs.getList(params);
			
			if(clickDay < compareDay) {
				$scope.display = true;
			} else {
				$scope.display = false;
			}

			$scope.$broadcast('refreshPageList',{
				pageSize:'20',
				pageNo:'1',
				secondCompanyId:utilFactory.getSecondCompanyId(),
				dateTime:utilFactory.getTimestamp(newValue)
			});
		}  		
	});
	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});

	$scope.updateBookingAssignment = function(updateFormValidateIsInvalid){

		// if(updateFormValidateIsInvalid){ 
		// 	return utilFactory.setDirty($scope.updateFormValidate)
		// }
		$("#departureTime").val();

		var _startTime = $("#departureTime").val();
		$scope._startTime = $("#departureTime").val();
		var _formateDepartureTime = utilFactory.getTimestamp($scope.params.currentDay + ' '+_startTime);
		var _bookingRoute = $scope.updateParams.bookingRoute.split("(");
		var _params = {
			"beginDate": _formateDepartureTime,
			"bookingEndStation": $scope.updateParams.bookingEndStation,
			"bookingRoute": _bookingRoute[0],
			"bookingStartStation": $scope.updateParams.bookingStartStation,
			"id": $scope.updateParams.id,
			'schedulerId': utilFactory.getAccountId()
		}
	
		$scope.submitOnProgress = true;
		$('#updateModal').modal('toggle');
		schedulerHttpService.updateBookingAssignment(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					var params = {
						'pageSize':'20',
						'pageNumber':'1',
						'accountId':utilFactory.getAccountId(),
						'secondCompanyId':utilFactory.getSecondCompanyId(),
						'dateTime':utilFactory.getTimestamp($("#currentDay").val())
					}
					$scope.pageConfigs.getList(params);

					$scope.$broadcast('refreshPageList',{
						pageSize:'20',
						pageNo:'1',
						secondCompanyId:utilFactory.getSecondCompanyId(),
						dateTime:utilFactory.getTimestamp($("#currentDay").val())
					});

				})
			}else{

				if(_resultData.error.statusCode == ERRORCODE_CONSTANT.ERROR_CODE_08005004004.code) {
					alertify.alert('编辑预约排班须至少提前两天',function(){})
				} else {
					utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.statusText);
				}
			}
			$scope.submitOnProgress = false;
		},function(){
			$scope.submitOnProgress = false;
		})
	};	
});