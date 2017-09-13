'use strict'
angular.module('schedulerCalendarControllerModule',[])
.controller('schedulerCalendarController',function(schedulerHttpService,utilFactory,$scope,$state,$compile){

<<<<<<< HEAD
  // add Schedule

  $scope.addSchedule = function(){
    $state.go('scheduler.addSchedule')
  }

  /////////////////  TABLE CONFIG ////////////////////
  $scope.active = true;
  $scope.submitOnProgress = false;

  $scope.selectAllStatus = false;
  $scope.pageConfigs={
    params:{},
    list:null,
    ngIf:false,
    getList:function(_params){
      return schedulerHttpService.assignmentService(_params);
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

  $scope.queryByKeyObj = {
    'active':{'key':'name','value':'员工姓名'},
    'list':[{'key':'phoneNumber','value':'手机号'},{'key':'name','value':'员工姓名'}]
  }

  $scope.selectKey = function(activeObj){
    $scope.queryByKeyObj.active.key = activeObj.key;
    $scope.queryByKeyObj.active.value = activeObj.value;
    $('.dropdown-menu').css('display','none')
  }

  $scope.showQueryKeyList = function(){
    $('.dropdown-menu').css('display','block')
  }
  $scope.selectAll = function(){
    //$scope.tableConfig.checkbox.selectAll = true;
    alertify.alert('正在建设中....')
    var _selectAllStatus  = !$scope.selectAllStatus;
    console.log(_selectAllStatus+':_selectAllStatus')
    $scope.$broadcast('checkboxSelectAll',{'status':_selectAllStatus})

  }

  $scope.deletePassenger = function(){
    alertify.alert('正在建设中....')
  };

  $scope.importPassenger = function(){
    alertify.alert('正在建设中...')
  }
  $scope.addPassenger = function(){
    $state.go('passenger.add',{'hrUuid':_configAccount.hrUUID,'secondCompanyId':_configAccount.secondCompanyID})
  };

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
          alertify.alert('正在努力建设中...')
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




  ///////////////////////////////////////////////////
=======



  $scope.pre = function(){
   $scope.uiConfig.calendar.eventClick();
  };

  $scope.next = function(){

  };
>>>>>>> fae182c997129da5e738fdc0f7f3592524772844
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
    $scope.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {dataObj: {'id':999,'name':'ok'},title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
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
       var _params = {
          'schedulerUUID':'',
          'secondCompanyId':'',
          'date':''
       };
      $scope.pageConfigs.list = null;
      $scope.pageConfigs.getList(_params);
      $scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});

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


        console.log(1, uiCalendarConfig.calendars[calendar].fullCalendar('render'))
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
        eventClick: function(event, element){
  alertify.dialog('errorAlert',function factory(){
    return{
            build:function(){
                var errorHeader = '<span class="fa fa-times-circle fa-2x" '
                +    'style="vertical-align:middle;color:#e10000;">'
                + '</span> Application Error';
                this.setHeader(errorHeader);
            }
        };
    },true,'alert');
        },//$scope.alertOnEventClick,
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
	
});