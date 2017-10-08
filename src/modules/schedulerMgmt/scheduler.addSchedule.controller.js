'use strict'
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
	
	$('.datepicker').datepicker({ language: "zh-CN"});


	$scope.stepOneSubmit = function(formValidateOneIsInvalid){

		if(formValidateOneIsInvalid){
			return utilFactory.setDirty($scope.formValidateOne);
		}
		$scope.stepOne = false;
		$scope.stepTwo = true;


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

				// set default value for select options
				$scope.params.driverObj = _targetObj.drivers[0];
				$scope.params.routeTemplateObj = _targetObj.routeTemplate[0];
				$scope.params.vehicleObj = _targetObj.vehicles[0];

				// get select value
				$scope.params.drivers = _targetObj.drivers.length?_targetObj.drivers:_targetObj.drivers=[{'driverName':'暂无数据'}];
				$scope.params.routeTemplate = _targetObj.routeTemplate.length? _targetObj.routeTemplate: _targetObj.routeTemplate = [{'routeTemplateName':'暂无数据'}];
				$scope.params.vehicles = _targetObj.vehicles.length? _targetObj.vehicles : _targetObj.vehicles = [{'licensePlate':'暂无数据'}];


				//close stepone page and show stepTwo page
				$scope.stepOne = false;
				$scope.stepTwo = true;
			}else{
				if(_resultJSON.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200102){
					var _tokenStatus = utilFactory.updateExpireToken();
				} else if(_resultJSON.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200105){
					 $state.go('entry.check')
				}
			}
		})

	}

	var myDate = new Date();
	var startTime = myDate.getHours()+":"+myDate.getMinutes();

	$("#departureTime").val(startTime)

	$('#departureTime').clockpicker({
		placement: 'top',
		align: 'left',
		donetext: '确定',
		afterDone: function(){
			var _selectedTime = $("#departureTime").val();
			if($scope.params.routeType ==='AM' && (_selectedTime.split(":")[0]>12)){
				alertify.alert('上行线路发车时间不能晚于上午12点,请重新选择发车时间');
				return;
			}else if($scope.params.routeType ==='PM' && (_selectedTime.split(":")[0]<12)){
				alertify.alert('下行线路发车时间不能早于上午12点,请重新选择发车时间');
				return;
			}else{
				startTime = $("#departureTime").val();
			}
		}
	});

	$scope.stepTwoSubmit = function(formValidateTwoIsInvalid){
		
		if(formValidateTwoIsInvalid){
			return utilFactory.setDirty($scope.formValidateTwo);
		}

		if($scope.params.routeType ==='AM' && (startTime.split(":")[0]>12)){
			alertify.alert('上行线路发车时间不能晚于上午12点,请重新选择发车时间');
			return;
		}else if($scope.params.routeType ==='PM' && (startTime.split(":")[0]<12)){
			alertify.alert('下行线路发车时间不能早于上午12点,请重新选择发车时间');
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

		var _formateDepartureTime = (utilFactory.getTimestamp($scope.params.beginDate + ' '+startTime) - utilFactory.getTimestamp($scope.params.beginDate));

		var _stepTwoParams = {
  			'beginDate': _stepOneParams.beginDate,
			'departureTime': _formateDepartureTime,
			'driverId': $scope.params.driverObj.driverId,
			'endDate': _stepOneParams.endDate,
			'includeSaturday': _stepOneParams.includeSaturday,
			'includeSunday': _stepOneParams.includeSunday,
			'routeType': _stepOneParams.routeType,
			//'routeId': $scope.params.vehicleObj.routeId,
			'routeId':2358710021965824,
			'schedulerId': utilFactory.getAccountId(),
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'vehicleId': $scope.params.vehicleObj.vehicleId
		};

		schedulerHttpService.addAssignment(_stepTwoParams).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				$state.go('scheduler.calendar')
			} else{
				alertify.alert(_resultData.error.message)
			}
		});

	}

	$scope.stepTwoPre = function(){
		$scope.stepOne = true;
		$scope.stepTwo = false;
	}
});
