angular.module('schedulerAddScheduleControllerModule',[])
.controller('schedulerAddScheduleController',function(schedulerHttpService,TOKEN_ERROR,utilFactory,$scope,$state,$compile){


	$scope.stepOne = true;
	$scope.stepTwo = false;
	$scope.active = true;
	$scope.submitOnProgress =  false;
	$scope.params = {
		'beginDate':'',
		'departureTime':'',
		'driverID':'',
		'driverName':'',
		'endDate':'',
		'includeSaturday':false,
		'includeSunday':false,
		'routeID':'',
		'routeType':'',
		'schedulerUUID':'',
		'secondCompanyId':'',
		'vehicleID':'',

		// render select 
		'drivers':'',
		'routeTemplate':'',
		'vehicles':''	
	}

	$scope.breadcrumbText={
		'lv1':'排班管理',
		'lv2':'新增排班'
	}

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
		startDate: new Date()
	});

	$scope.close = function(){
		$state.go('admin.scheduler.calendar')
	}
	
	$scope.stepOneSubmit = function(formValidateOneIsInvalid){

		if(formValidateOneIsInvalid){
			return utilFactory.setDirty($scope.formValidateOne);
		}

		/////// CONFIG　PARAMS AND　INVOKE API　FOR STEP TWO SELECT LIST DATA //////
		var _baseParams = {
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId(),
			'beginDate':utilFactory.getTimestamp($scope.params.beginDate),
			'endDate':utilFactory.getTimestamp($scope.params.endDate),
			'includeSaturday':$scope.params.includeSaturday,
			'includeSunday':$scope.params.includeSunday,
			'routeType':$scope.params.routeType
		};

		schedulerHttpService.schedulingelements(_baseParams).then(function(result){
			var _resultJSON = result.data;
			if(!_resultJSON.error){
				var _targetObj = _resultJSON.value;

				//set default value for select options
				// $scope.params.driverObj = _targetObj.drivers[0];
				// $scope.params.routeTemplateObj = _targetObj.routeTemplate[0];
				// $scope.params.vehicleObj = _targetObj.vehicles[0];
				
				// get select value
				$scope.params.drivers = _targetObj.drivers.length?_targetObj.drivers:'';
				$scope.params.routeTemplate = _targetObj.routeTemplate.length? _targetObj.routeTemplate: '';
				$scope.params.vehicles = _targetObj.vehicles.length? _targetObj.vehicles: '';

				// $scope.params.drivers.unshift({'driverName':'请选择司机','driverId':null});
				// $scope.params.routeTemplate.unshift({'routeTemplateName':'请选择线路','routeTemplateId':null});
				// $scope.params.vehicles.unshift({'licensePlate':'请选择车辆','vehicleId':null});
				
				// $scope.params.driverObj = {'driverName':'请选择司机','driverId':null};
				// $scope.params.routeTemplateObj = {'routeTemplateName':'请选择线路','routeTemplateId':null};
				// $scope.params.vehicleObj = {'licensePlate':'请选择车辆','vehicleId':null};
				
				//close stepone page and show stepTwo page

		

				if((!_targetObj.drivers.length) ||( !_targetObj.routeTemplate.length) ||(!_targetObj.vehicles.length)){
					var _drivers = !_targetObj.drivers.length?'司机姓名':'';
					var _routeTemplate = !_targetObj.routeTemplate.length?'线路名称':'';
					var _vehicles = !_targetObj.vehicles.length?'牌照信息':'';
					alertify.alert('在该时间内暂无'+_drivers +' '+_routeTemplate+' '+_vehicles+' '+',请重新选择时间范围',function(){
						return 
					});
					return 
				}else{
					$scope.stepOne = false;
					$scope.stepTwo = true;
				}


			}else{
				utilFactory.checkErrorCode(_resultJSON.error.statusCode)
			}


		})

	}

	var myDate = new Date();
	var minute = myDate.getMinutes() > 9 && myDate.getMinutes() || ('0' + myDate.getMinutes());
	var startTime = myDate.getHours()+":"+minute;

	$("#departureTime").val(startTime)

	$('.clockpicker').clockpicker({
		placement: 'top',
		align: 'left',
		donetext: '确定',
		afterDone: function(){
			var _selectedTime = $("#departureTime").val();
			if($scope.params.routeType ==='AM' && (_selectedTime.split(":")[0]>12)){
				alertify.alert('上行线路发车时间不能晚于中午12点,请重新选择发车时间',function(){

				});
				startTime = $("#departureTime").val();
				return;
			}else if($scope.params.routeType ==='PM' && (_selectedTime.split(":")[0]<12)){
				alertify.alert('下行线路发车时间不能早于中午12点,请重新选择发车时间',function(){

				});
				startTime = $("#departureTime").val();
				return;
			}else{

				startTime = $("#departureTime").val();
				console.log('startTime:'+startTime)
			}
		}
	});

	$scope.stepTwoSubmit = function(formValidateTwoIsInvalid){
		if(formValidateTwoIsInvalid){
		
			//console.log($scope.params.routeTemplateObj.routeTemplateId+"123123xxx")
			//$scope.params.drivers.unshift({'driverName':'请选择司机','driverId':null});
			//$scope.params.routeTemplate.unshift({'routeTemplateName':'请选择线路','routeTemplateId':null});
			//$scope.params.vehicles.unshift({'licensePlate':'请选择车辆','vehicleId':''});
			return utilFactory.setDirty($scope.formValidateTwo);
		}

		if(!$scope.params.routeTemplateObj.routeTemplateId){
			$scope.params.routeTemplateObj = '';
			return
		}

		if(!$scope.params.vehicleObj.vehicleId){
			$scope.params.vehicleObj = '';
			return
		}

		if(!$scope.params.driverObj.driverId){
			$scope.params.driverObj = '';
			return
		}

		if($scope.params.routeType ==='AM' && (startTime.split(":")[0]>12)){
			alertify.alert('上行线路发车时间不能晚于中午12点,请重新选择发车时间',function(){

			});
			startTime = $("#departureTime").val();
			return;
		}else if($scope.params.routeType ==='PM' && (startTime.split(":")[0]<12)){
			alertify.alert('下行线路发车时间不能早于中午12点,请重新选择发车时间',function(){
				
			});
			startTime = $("#departureTime").val();
			return;
		}
		// Group params from step One
		var _stepOneParams = {
			'beginDate':utilFactory.getTimestamp($scope.params.beginDate),
			'endDate':utilFactory.getTimestamp($scope.params.endDate),
			'routeType':$scope.params.routeType,
			'includeSaturday':$scope.params.includeSaturday,
			'includeSunday':$scope.params.includeSunday
		}
		
		var _formateDepartureTime = (utilFactory.getTimestamp($scope.params.beginDate + ' '+startTime) - utilFactory.getTimestamp($scope.params.beginDate + ' 00:00'));

		var _stepTwoParams = {
  			'beginDate': _stepOneParams.beginDate,
			'departureTime': _formateDepartureTime,
			'driverId': $scope.params.driverObj.driverId,
			'endDate': _stepOneParams.endDate,
			'includeSaturday': _stepOneParams.includeSaturday,
			'includeSunday': _stepOneParams.includeSunday,
			'routeType': _stepOneParams.routeType,
			'routeId': $scope.params.routeTemplateObj.routeTemplateId,
			// 'routeId':2358710021965824,
			'schedulerId': utilFactory.getAccountId(),
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'vehicleId': $scope.params.vehicleObj.vehicleId,
			'driverName': $scope.params.driverObj.driverName
		};

		schedulerHttpService.addAssignment(_stepTwoParams).then(function(result){
			var _resultData = result.data;

			// var _targetObj = _resultJSON.value;

			// if(!_targetObj.drivers.length){
			// 	var _drivers = !_targetObj.drivers.length?'司机姓名':'';
			// 	alertify.alert('请选择司机',function(){

			// 	});
			// }else{
			// 	$scope.stepOne = true;
			// 	$scope.stepTwo = false;
		
			// }
			if(!_resultData.error){
				alertify.alert('新增成功!',function(){
					$state.go('admin.scheduler.calendar')
				});
				
			} else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});

	}

	$scope.stepTwoPre = function(){
		$scope.stepOne = true;
		$scope.stepTwo = false;
	}
});