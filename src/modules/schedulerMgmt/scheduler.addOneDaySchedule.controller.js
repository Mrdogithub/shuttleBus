angular.module('schedulerAddOneDayScheduleControllerModule',[])
.controller('schedulerAddOneDayScheduleController',function(schedulerHttpService,TOKEN_ERROR,utilFactory,$scope,$state,$stateParams,$compile){
             
	$scope.active = true;
	$scope.submitOnProgress =  false;
	$scope.params = {
		'beginDate':'',
		'departureTime':'',
		'endDate':'',
		'includingSaturday':true,
		'includingSunday':true,
		'bookingRoute':'',
		'bookingStartStation':'',
		'bookingEndStation':'',
		'schedulerId':'',
		'secondCompanyId':''
	};

	$scope.breadcrumbText={
		'lv1':'专车排班',
		'lv2':'新增排班'
	};

	$scope.eventDay = ($stateParams.eventDay).replace(/\//g,'.');

	$('.clockpicker').clockpicker({
		placement: 'top',
		align: 'left',
		donetext: '确定'
	});

	$scope.submit = function(formValidateOneIsInvalid){

		if(formValidateOneIsInvalid){
			return utilFactory.setDirty($scope.formValidateOne);
		}
		var startTime = $("#departureTime").val();
		var _formateDepartureTime = (utilFactory.getTimestamp($stateParams.eventDay + ' '+startTime) - utilFactory.getTimestamp($stateParams.eventDay + ' 00:00'));
		console.log(_formateDepartureTime);
		console.log(utilFactory.getTimestamp($stateParams.eventDay + ' '+startTime));
		console.log(utilFactory.getTimestamp($stateParams.eventDay + ' 00:00'));

		var _baseParams = {
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId(),
			'beginDate':$stateParams.dateTime,
			'endDate':$stateParams.dateTime,
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

	$scope.close = function(){
		$state.go('admin.scheduler.specialBus')
	}
	// var myDate = new Date();
	// var startTime = myDate.getHours()+":"+myDate.getMinutes();

	// $("#departureTime").val(startTime);

});