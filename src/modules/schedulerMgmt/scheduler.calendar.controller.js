'use strict'
angular.module('schedulerCalendarControllerModule',[])
.controller('schedulerCalendarController',function(schedulerHttpService,utilFactory,$scope,$state,$compile){

  ///////////////// ADD Schedule /////////////////////
  $scope.addSchedule = function(){
    $state.go('scheduler.addSchedule')
  }




  /////////////////  INIT CONFIG ////////////////////
  $scope.active = true;
  $scope.submitOnProgress = false;
  $scope.selectAllStatus = false;
  $scope.breadcrumbText={'lv1':'排班管理'};
  $scope.events = [];



  ///////////////////////////////////////////////////

	// function CalendarCtrl($scope,uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
   // $scope.changeTo = 'Hungarian';
    /* event sources that pulls from google.com */
    $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };

    /* event source that contains custom events on the scope */

    console.log(new Date(y, m, 1))
    console.log(new Date(y, m, d - 5))
    console.log(new Date(y, m, d + 1, 19, 0))
    schedulerHttpService.assignmentService({'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'beginDate':$scope.beginDate || '1504195200000','endDate':'1506787200000'}).then(function(result){
        var _resultData = result.data;

        if(!_resultData.error){
            for(var i in _resultData.value){
                console.log('i:'+i)
                console.log(_resultData.value[i].totalShifts)
                $scope.events.push({
                    start:i,
                 	title:'班次'+' ' +_resultData.value[i].totalShifts
                })
            }
        }else{
            alertify.alert(_resultData.error.message)
        }
    })
    // $scope.events = [
    //   {title: 'All Day Event',start: new Date(y, m, 1)},
    //   {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
    //   {dataObj: {'id':999,'name':'ok'},title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
    //   {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
    //   {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
    //   {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    // ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime();
      var e = new Date(end).getTime()
      var m = new Date(start).getMonth();

      console.log('s'+s)
      console.log('1506787200000')
      console.log(utilFactory.getLocalTime( s)+"xxxx");
      console.log(utilFactory.getLocalTime( e )+"end");
      $scope.beginDate = s;
      $scope.endDate =e;
      var events = [];
      callback(events);
      schedulerHttpService.assignmentService({'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'beginDate':s,'endDate':e}).then(function(result){
        var _resultData = result.data;

        if(!_resultData.error){
            for(var i in _resultData.value){
                console.log('i:'+i)
                console.log(_resultData.value[i].totalShifts)
                $scope.events.push({
                    start:i,
                  title:'班次'+' ' +_resultData.value[i].totalShifts
                })
            }
        }else{
            alertify.alert(_resultData.error.message)
        }
      })
    };

    // $scope.calEventsExt = {
    //    color: '#f00',
    //    textColor: 'yellow',
    //    events: [ 
    //       {type:'party',title: 'Lunch',data:{'bus_id':'1'},start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
    //       {type:'party',title: 'Lunch 2',data:{'bus_id':'1'},start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
    //       {type:'party',title: 'Click for Google',data:{'bus_id':'1'},start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    //     ]
    // };
    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){	    	
       $('#myModal').modal('toggle');
       console.log(date.start._i+"::date.start._i")
       var _params = {
  			'date':utilFactory.getTimestamp(date.start._i),
  			'schedulerId':utilFactory.getAccountId(),
  			'secondCompanyId':utilFactory.getSecondCompanyId()
       };
      $scope.eventDay = date.start._i;
      $scope.pageConfigs.list = null;
      schedulerHttpService.getAssignmentsByDay(_params).then(function(result){
      	var _resultData = result.data;
      	if(!_resultData.error){
      		$scope.pageConfigs.list = _resultData.value;
      	}else{
      		alertify.alert(_resultData.error.message)
      	}
      	
      });
      //$scope.$broadcast('refreshPageList');

    };
    /* alert on Drop */
     $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
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

    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
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
        height: 450,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: '今天 prev,next'
        },
        views: {
              month: { // name of view
                  titleFormat: 'YYYY - MM'
                  // other view-specific options here
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

    $scope.changeLang = function() {
      // if($scope.changeTo === 'Hungarian'){
      //   $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
      //   $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
      //   $scope.changeTo= 'English';
      // } else {
      //   $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      //   $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      //   $scope.changeTo = 'Hungarian';
      // }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
// }
/* EOF */
	

  $scope.pageConfigs={
    params:{},
    list:null,
    ngIf:false,
    getList:function(params){
    	console.log('--- params ----')
    	console.log(1,params)
    	return schedulerHttpService.getAssignmentsByDay(params);
    },
    loadData:function(){
      console.log('load data')
    },
    dataSet:function(result){
     if(result.value !=null){
        var _dataArray = result.value
        for(var i=0;i<_dataArray.length;i++){
          _dataArray[i]['departureTime'] =utilFactory.getLocalTime(_dataArray[i]['departureTime']);
        }
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
      operate:[{
        name:'删除',
        ngIf:function(){},
        fun:function(item){
        	$('#myModal').modal('toggle');
        	alertify.confirm('确认删除'+item.routeName+"?",function(){

        		schedulerHttpService.deleteAssignmentById({'routeId':item.routeId,'schedulerId':utilFactory.getAccountId()}).then(function(result){
	        		var _resultData = result.data;
	        		if(!_resultData.error){
	        			$state.go('scheduler.calendar',{},{reload:true});

	        		}else{
	        			alertify.alert(_resultData.error.message)
	        		}
        		})
        	},function(){});
        }
      }]
    },
    // height:290,
    // head:[{name:'文件名',key:'filename'}],
    // className:function(flag){},
    // clickFun:function(){},
    // rowClickFun:function(item){},
    checkbox:{
      checkArray:[]
    },
    defaultValue:'---',
    // radioSelect:function(){},
    operateIfFlag:true,
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
          'selfKey':{'key':'phoneNumber','value':'运行状态'},
          'checkFlag':true
        },
        {
          'parentKey':'',
          'selfKey':{'key':'driverName','value':'司机名称'},
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
    // changeEnable:function(item){}
  }

  // $scope.$watch('$viewContentLoaded',function(event){ 
  //     $scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
  // });
});