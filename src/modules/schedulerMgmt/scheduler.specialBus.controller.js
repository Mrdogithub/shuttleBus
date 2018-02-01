angular.module('schedulerSpecialBusControllerModule',[])
.controller('schedulerSpecialBusController',function(schedulerHttpService,utilFactory,$scope,$state,$compile,$stateParams){

  ///////////////// ADD Schedule /////////////////////
	$scope.addSchedule = function(){
		$state.go('admin.scheduler.addSpecialSchedule')
	}

	/////////////////	INIT CONFIG ////////////////////
	$scope.active = true;
	$scope.submitOnProgress = false;
	$scope.selectAllStatus = false;
	$scope.breadcrumbText={'lv1':'排班管理'};
	$scope.events = [];
	$scope.calEventsExt = [];

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	$scope.eventSource = {
		url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
		className: 'gcal-event',// an option!
		currentTimezone: 'America/Chicago' // an option!
	};

	$scope.eventsF = function (start, end, timezone, callback) {
		var s = new Date(start).getTime();
		var e = new Date(end).getTime()
		var m = new Date(start).getMonth();

		$scope.beginDate = s;
		$scope.endDate =e;
		var events = [];
		callback(events);
		schedulerHttpService.bookingAssignment({'secondCompanyId':utilFactory.getSecondCompanyId(),'beginTime':s,'endTime':e}).then(function(result){
			var _resultData = '';
			if(result){
				 _resultData = result.data;
			}
			if(!_resultData.error){
				for(var i in _resultData.value.assignmentCountMap){
						var date = new Date();
						var y =date.getFullYear();
						var d = date.getDate();
						var m = date.getMonth()+1;
					    var _today =y+"-"+m+"-"+d;
					    var _todayB =y+"-"+m+"-0"+d
					if(i ==_today || i ==_todayB){
						$scope.events.push({
							start:i,
							title:'班次:'+' '+_resultData.value.assignmentCountMap[i],
							className:['todayTextColor']
						})
					}else{
						$scope.events.push({
							start:i,
							title:'班次:'+' '+_resultData.value.assignmentCountMap[i]
						})
					}
					
				}
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		})
	};
	$scope.alertOnEventClick = function(date, jsEvent, view){	

		var _params = {
			'date':utilFactory.getTimestamp(date.start._i+" 00:00"),
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		};
		$scope.eventDay = date.start._i.replace(/-/g,'/');	
		// console.log($scope.eventDay);
		$state.go('admin.scheduler.specialBusList',{'eventDay':$scope.eventDay});
		// var d = new Date();
		// var clickDay = utilFactory.getTimestamp(date.start._i+" 00:00");
		// var currentDay = utilFactory.getTimestamp(d)+24*60*60*1000;
		// if (clickDay < currentDay) {
		// 	$state.go('admin.scheduler.specialBusList',{'eventDay':$scope.eventDay});
		// } else {
		// 	$state.go('admin.scheduler.specialBusEdit',{'eventDay':$scope.eventDay});	
		// }
	}

	/* add and removes an event source of choice */
	$scope.addRemoveEventSource = function(sources,source) {
		var canAdd = 0;
		angular.forEach(sources,function(value, key){
			if(sources[key] === source){
				sources.splice(key,1);
				canAdd = 1;
			}
		});
		
		if(canAdd === 0){
			sources.push(source);
		}
	};

	/* remove event */
	$scope.remove = function(index) {
		$scope.events.splice(index,1);
	};

	/* Change View */
	$scope.changeView = function(view,calendar) {
		uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
	};

	/* Change View */
	$scope.renderCalender = function(calendar) {
		if(uiCalendarConfig.calendars[calendar]){
			uiCalendarConfig.calendars[calendar].fullCalendar('render');
		}
	};

	/* Render Tooltip */
	$scope.eventRender = function( event, element, view ) { 
		element.attr({'tooltip': event.title,'tooltip-append-to-body': true});
		$compile(element)($scope);
	};

	/* config object */
	$scope.uiConfig = {
		calendar:{
			height: 500,
			editable: true,
			header:{
				left: 'title',
				center: '',
				right: '今天 prev,next'
			},
			views: {
				month: {
					titleFormat: 'YYYY年MM月'
				}
			},
			monthNames:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'], 
			monthNamesShort:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
			dayNames:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
			dayNamesShort:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
			eventClick: $scope.alertOnEventClick,
			eventDrop: $scope.alertOnDrop,
			eventResize: $scope.alertOnResize,
			eventRender: $scope.eventRender
		}
	};

	/* event sources array*/
	$scope.eventSources = [$scope.calEventsExt,$scope.events, $scope.eventsF];
	$scope.eventSources2 = [ $scope.eventsF, $scope.events];

});