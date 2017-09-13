'use strict';

angular.module('app',['injectModules'])
.config(['$stateProvider', '$urlRouterProvider','$qProvider','$httpProvider',function ($stateProvider,$urlRouterProvider,$qProvider,$httpProvider) {

	$httpProvider.interceptors.push('httpInterceptor');

	$stateProvider
	.state('entry',{
		url:"/entry",
		templateUrl:"modules/login/entry.html"
	})
	.state('entry.check',{
		url:"/check",
		templateUrl:"modules/login/check.html",
		controller:"checkController"
	})
	.state('entry.login',{
		url:"/login",
		params:{'phoneNumber':null,'requestType':null,'smsCode':null},
		templateUrl:"modules/login/login.html",
		controller:'loginController'
	})
	.state('entry.active',{
		url:"/active",
		params:{'phoneNumber':null,'smsCode':null,'requestType':null},
		templateUrl:"modules/login/active.html",
		controller:'activeController'
	})
	.state('entry.forget',{
		url:'/forget',
		templateUrl:"modules/login/forget.html",
		params:{'phoneNumber':null,'smsCode':null,'requestType':null},
		controller:'forgetController'
	})
	.state('admin',{
		url:'/',
		templateUrl:'modules/admin/admin.html',
		controller:'adminController'
	})
	.state('passenger',{
		url:"/passenger",
		templateUrl:'modules/passengerMgmt/passenger.html',
		controller:'passengerController'
	})
	.state('passenger.list',{
		url:'/list',
		templateUrl:'modules/passengerMgmt/list.html',
		params:{
			'status':null,
			'passengerUuid':null,
			'roleType':null,
			'hrUuid':null,
			'secondCompanyId':null,
			'accountId':null,
			'routeName':null,
			'stationName':null,
			'phoneNumber':null,
			'employeeId':null,
			'passengerName':null
		},
		controller:'listController'
	})
	.state('passenger.feedback',{
		url:'/feedback',
		templateUrl:'modules/passengerMgmt/feedback.html',
		controller:'feedbackController'
	})
	.state('passenger.report',{
		url:'/report',
		templateUrl:'modules/passengerMgmt/report.html',
		controller:'reportController'
	})
	.state('passenger.add',{
		url:'/add',
		params:{
			'secondCompanyId':null,
			'hrUuid':null
		},
		templateUrl:'modules/passengerMgmt/passenger.add.html',
		controller:'passengerAddController'
	})
	.state('passenger.detail',{
		url:'/detail',
		params:{
			'status':null,
			'passengerUuid':null,
			'roleType':null,
			'hrUuid':null,
			'secondCompanyId':null,
			'accountId':null,
			'routeName':null,
			'stationName':null,
			'phoneNumber':null,
			'employeeId':null,
			'passengerName':null
		},
		templateUrl:'modules/passengerMgmt/passenger.detail.html',
		controller:'passengerDetailController'
	})
	.state('scheduler',{
		url:"/scheduler",
		templateUrl:'modules/schedulerMgmt/scheduler.html',
		controller:'schedulerController'
	})
	.state('scheduler.route',{
		url:'/route',
		templateUrl:'modules/schedulerMgmt/scheduler.route.html',
		controller:'schedulerRouteController'
	})
	.state('scheduler.addRoute',{
		url:'/addRoute',
		params:{
			'schedulerUUID':null,
			'secondCompanyID':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.route.add.html',
		controller:'schedulerAddRouteController'
	})
	.state('scheduler.site',{
		url:'/site',
		templateUrl:'modules/schedulerMgmt/scheduler.site.html',
		controller:'schedulerSiteController'
	})
	.state('scheduler.addSite',{
		url:'/addSite',
		params:{
			'secondCompanyId':null,
			'schedulerUUID':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.site.add.html',
		controller:'schedulerAddSiteController'
	})
	.state('scheduler.driver',{
		url:'/driver',
		params:{
			'phoneNumber':null,
			'roleType':null,
			'name':null,
			'accountId':null,
			'driverUUID':null,
			'schedulerUUID':null,
			'secondCompanyId':null,
			'shuttleCompanyId':null,
			'licenseID':null,
			'licenseExpirationDate':null,
			'identityCard':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.driver.html',
		controller:'schedulerDriverController'
	})
	.state('scheduler.driverDetail',{
		url:'/detail',
		params:{
			'phoneNumber':null,
			'roleType':null,
			'name':null,
			'accountId':null,
			'driverUUID':null,
			'schedulerUUID':null,
			'secondCompanyId':null,
			'shuttleCompanyId':null,
			'licenseID':null,
			'licenseExpirationDate':null,
			'identityCard':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.driver.detail.html',
		controller:'schedulerDriverDetailController'
	})
	.state('scheduler.addDriver',{
		url:'/addDriver',
		params:{
			'phoneNumber':null,
			'roleType':null,
			'name':null,
			'accountId':null,
			'driverUUID':null,
			'schedulerUUID':null,
			'secondCompanyId':null,
			'shuttleCompanyId':null,
			'licenseID':null,
			'licenseExpirationDate':null,
			'identityCard':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.driver.add.html',
		controller:'schedulerAddDriverController'
	})
	.state('scheduler.bus',{
		url:'/bus',
		templateUrl:'modules/schedulerMgmt/scheduler.bus.html',
		controller:'schedulerBusController'
	})
	.state('scheduler.addBus',{
		url:'/addBus',
		params:{
			'schedulerUUID':null,
			'secondCompanyId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.bus.add.html',
		controller:'schedulerAddBusController'
	})
	.state('scheduler.busDetail',{
		url:'/busDetail',
		params:{
			'vehicleID':null,
			'schedulerUUID':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.bus.detail.html',
		controller:'schedulerBusDetailController'
	})
	.state('scheduler.calendar',{
		url:'/calendar',
		templateUrl:'modules/schedulerMgmt/scheduler.calendar.html',
		controller:'schedulerCalendarController'
	})
	.state('scheduler.addSchedule',{
		url:'/addSchedule',
		templateUrl:'modules/schedulerMgmt/scheduler.addSchedule.html',
		controller:'schedulerAddScheduleController'
	})
	$urlRouterProvider.otherwise('entry/check')

}]);