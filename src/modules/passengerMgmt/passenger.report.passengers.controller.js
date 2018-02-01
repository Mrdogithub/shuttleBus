angular.module('passengerReportPassengersControllerModule',[])
.controller('passengerReportPassengersController',function(passengerHttpService,utilFactory,$scope){

	var currentDate = utilFactory.getCurrentDate(new Date().getTime())
	$("#selectDay").val(currentDate);
	$scope.params = {
		'selectDay':$("#selectDay").val(),
		'routeTemplateName':'',
		'routeTemplateId':'',
		'newDateTime':''
	}
	var dateTime = utilFactory.getTimestamp($scope.params.selectDay);

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

	
	var _baseParams = {
		'beginTime':dateTime,
		'endTime':dateTime+24*60*60*1000,
		// 'beginTime':"1514131200000",
		// 'endTime':"1514217600000"
	};

	passengerHttpService.getRouteTemplateList(_baseParams).then(function(result){
		var _resultJSON = result.data;
		if(!_resultJSON.error){
			var _targetObj = _resultJSON.value;
			$scope.params.routeTemplate = _targetObj.length? _targetObj: '';
			console.log("12121212121212")
		}else{
			utilFactory.checkErrorCode(_resultJSON.error.statusCode)
		}
	})


	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'schedulerId':utilFactory.getAccountId(),
			'userCompanyId':utilFactory.getSecondCompanyId(),
			'dateTime':dateTime,
			// 'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId || ""
		},
		list:null,
		getList:function(params){
			return passengerHttpService.getEmployeeList(params)			
		},
		loadData:function(){
		},
		dataSet:function(result){
			// if(result.value != null){
			// 	var _result = result.value;
			// 	for(var i=0;i<_result.length;i++){
			// 	}
			// }
		}
	}

	$scope.importData = function(){

		passengerHttpService.downloadEmployeeList({'createTime':dateTime,'userCompanyId':utilFactory.getSecondCompanyId()}).then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '线路到达时间数据报表');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})

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
		defaultEmptyText:'暂无乘车人员信息',
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'员工姓名'},
					'checkFlag':true
				},
								{
					'parentKey':'',
					'selfKey':{'key':'employeeId','value':'员工工号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'cellPhoneNumber','value':'联系方式'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'startStationName','value':'上车站点'},
					'checkFlag':true
				}
			]
		}
	}
	$scope.$watch('params.selectDay',function(newValue, oldValue){ 
		if (newValue === oldValue) { 
			return
		} else {
			dateTime = utilFactory.getTimestamp(newValue);
			$scope.params.newDateTime = utilFactory.getTimestamp(newValue);
			$scope.importData = function(){

				passengerHttpService.downloadEmployeeList({'createTime':dateTime,'userCompanyId':utilFactory.getSecondCompanyId()}).then(function(data){
					var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
					var objectUrl = URL.createObjectURL(blob);
					var a = document.createElement('a');
					document.body.appendChild(a);
					a.setAttribute('style', 'display:none');
					a.setAttribute('href', objectUrl);
					a.setAttribute('download', '线路到达时间数据报表');
					a.click();
					URL.revokeObjectURL(objectUrl);
				})
			}

			// var params = {
			// 	'pageSize':'20',
			// 	'pageNumber':'1',
			// 	'schedulerId':utilFactory.getAccountId(),
			// 	'userCompanyId':utilFactory.getSecondCompanyId(),
			// 	'dateTime':dateTime,
			// 	// 'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId || ""
			// }
			// $scope.pageConfigs.getList(params);		


			var _baseParams = {
				'beginTime':dateTime,
				'endTime':dateTime + 24*60*60*1000,
				'vehicleInfoFlag': "Y"
			};
			passengerHttpService.getRouteTemplateList(_baseParams).then(function(result){
				var _resultJSON = result.data;
				if(!_resultJSON.error){
					var _targetObj = _resultJSON.value;
					$scope.params.routeTemplate = _targetObj.length? _targetObj: '';
				}else{
					utilFactory.checkErrorCode(_resultJSON.error.statusCode)
				}
			})	

			// $scope.$broadcast('refreshPageList',params);
		}  	

		// $scope.$watch('$viewContentLoaded',function(event){ 
	 //  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
		// });

	});
	
	$scope.$watch('params.routeTemplateObj',function(newRoute, oldRoute){ 
		if (newRoute === oldRoute) { 
			return
		} else {
			var params = {
				'pageSize':'20',
				'pageNumber':'1',
				'schedulerId':utilFactory.getAccountId(),
				'userCompanyId':utilFactory.getSecondCompanyId(),
				'dateTime':$scope.params.newDateTime || dateTime,
				'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId || ""
			}
			$scope.pageConfigs.getList(params);		

			$scope.$broadcast('refreshPageList',params);
		}  	

		$scope.$watch('$viewContentLoaded',function(event){ 
	  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
		});
				
	});

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})