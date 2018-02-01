angular.module('schedulerAddSpecialScheduleControllerModule',[])
.controller('schedulerAddSpecialScheduleController',function(schedulerHttpService,TOKEN_ERROR,utilFactory,$scope,$state,$compile){

	$scope.active = true;
	$scope.submitOnProgress =  false;
	$scope.params = {
		'beginDate':'',
		'departureTime':'',
		'endDate':'',
		'includingSaturday':false,
		'includingSunday':false,
		'bookingRoute':'',
		'bookingStartStation':'',
		'bookingEndStation':'',
		'schedulerId':'',
		'secondCompanyId':''
	}

	$scope.breadcrumbText={
		'lv1':'专车排班',
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
		weekStart: 1,
		startDate: "2017-12-10"
	};



	$('.datepicker').datepicker({ 
		language: "zh-CN",
		startDate: utilFactory.getNewDate(2)
	});

	$scope.close = function(){
		$state.go('admin.scheduler.specialBus')
	}

	$('.clockpicker').clockpicker({
		placement: 'top',
		align: 'left',
		donetext: '确定'
		// afterDone: function(){
			// startTime = $("#departureTime").val();
			// console.log('startTime:'+startTime)
		// }
	});

	$scope.submit = function(formValidateOneIsInvalid){

		if(formValidateOneIsInvalid){
			return utilFactory.setDirty($scope.formValidateOne);
		}
		// $("#departureTime").val();
		var startTime = $("#departureTime").val();
		var _formateDepartureTime = (utilFactory.getTimestamp($scope.params.beginDate + ' '+startTime) - utilFactory.getTimestamp($scope.params.beginDate + ' 00:00'));
		console.log(_formateDepartureTime);
		var _baseParams = {
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId(),
			'beginDate':utilFactory.getTimestamp($scope.params.beginDate),
			'endDate':utilFactory.getTimestamp($scope.params.endDate),
			'bookingRoute':$scope.params.bookingRoute,
			'includingSaturday':$scope.params.includingSaturday,
			'includingSunday':$scope.params.includingSunday,
			'bookingStartStation':$scope.params.bookingStartStation,
			'bookingEndStation':$scope.params.bookingEndStation,
			'departureTime': _formateDepartureTime
		};

		schedulerHttpService.addBookingAssignment(_baseParams).then(function(result){
			var _resultData = result.data;

			if(!_resultData.error){
				alertify.alert('新增成功!',function(){
					$state.go('admin.scheduler.specialBus');
				});
				
			} else{
				utilFactory.checkErrorCode(_resultData.error.statusCode);
			}

		})

	}

	// var myDate = new Date();
	// var startTime = myDate.getHours()+":"+myDate.getMinutes();

	// $("#departureTime").val(startTime);

});