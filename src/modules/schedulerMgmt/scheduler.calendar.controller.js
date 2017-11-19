angular.module('schedulerCalendarControllerModule',[])
.controller('schedulerCalendarController',function(schedulerHttpService,utilFactory,$scope,$state,$compile){

  ///////////////// ADD Schedule /////////////////////
	$scope.addSchedule = function(){
		$state.go('admin.scheduler.addSchedule')
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

	/* event source that contains custom events on the scope */
	schedulerHttpService.assignmentService({'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'beginDate':$scope.beginDate || '1504195200000','endDate':'1506787200000'}).then(function(result){
		var _resultData = '';
		if(result){
			_resultData = result.data;
		}
		if(!_resultData.error){
			for(var i in _resultData.value){
				$scope.events.push({
					start:i,
					title:'班次'+' ' +_resultData.value[i].totalShifts
				})
			}
		}else{
			alertify.alert(_resultData.error.message)
		}
	})


	// $scope.calEventsExt = {
 //       color: '#f00',
 //       textColor: 'yellow',
 //       events: [ 
 //          {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
 //          {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
 //          {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
 //        ]
 //    };

	$scope.eventsF = function (start, end, timezone, callback) {
		var s = new Date(start).getTime();
		var e = new Date(end).getTime()
		var m = new Date(start).getMonth();

		$scope.beginDate = s;
		$scope.endDate =e;
		var events = [];
		callback(events);
		schedulerHttpService.assignmentService({'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'beginDate':s,'endDate':e}).then(function(result){
			var _resultData = '';
			if(result){
				 _resultData = result.data;
			}
			if(!_resultData.error){
				for(var i in _resultData.value){
						var date = new Date();
						var y =date.getFullYear();
						var d = date.getDate();
						var m = date.getMonth()+1;
					    var _today =y+"-"+m+"-"+d;
					    var _todayB =y+"-"+m+"-0"+d
					if(i ==_today || i ==_todayB){
						$scope.events.push({
							start:i,
							title:'班次:'+' '+_resultData.value[i].totalShifts,
							className:['todayTextColor']
						})
					}else{
						$scope.events.push({
							start:i,
							title:'班次:'+' '+_resultData.value[i].totalShifts
						})
					}
					
				}
			}else{
				alertify.alert(_resultData.error.message)
			}
		})
	};

	$scope.alertOnEventClick = function( date, jsEvent, view){			
		$('#myModal').modal('toggle');

		var _params = {
			'date':utilFactory.getTimestamp(date.start._i),
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		};
		$scope.eventDay = date.start._i.replace(/-/g,'.');
		$scope.pageConfigs.list = null;
		$scope.pageConfigs.list = null;
		schedulerHttpService.getAssignmentsByDay(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				for(var i=0;i<_resultData.value.length;i++){
					_resultData.value[i]['departureTime'] = utilFactory.getLocalTime(_resultData.value[i]['departureTime']);
					_resultData.value[i]['routeType'] = _resultData.value[i]['routeType'] == 'PM'?'下午':'上午';

					
				}
				$scope.pageConfigs.list = _resultData.value;
			}else{
				alertify.alert(_resultData.error.message)
			}
      	});
		//$scope.pageConfigs.getList(_params);
	};


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

	$scope.pageConfigs={
		params:{
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		ngIf:false,
		getList:function(params){
			return schedulerHttpService.getAssignmentsByDay(params);
		},
		loadData:function(){
		console.log('load data')
		},
		dataSet:function(result){
			if(result.value !=null){
				var _dataArray = result.value
				for(var i=0;i<_dataArray.length;i++){
					_dataArray[i]['departureTime'] = utilFactory.getLocalTime(_dataArray[i]['departureTime']);
				}
			}
		}
  	}

	$scope.tableConfig={
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
					'selfKey':{'key':'routeName','value':'线路名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'routeType','value':'运行时段'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'driverName','value':'司机姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'vehicleLicensePlate','value':'牌照信息'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'departureTime','value':'发车时间'},
					'checkFlag':true
				}
			]
		}
	}
	
	// $scope.$watch('$viewContentLoaded',function(event){ 
 //  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	// });
});