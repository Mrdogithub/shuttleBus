<<<<<<< HEAD
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
	.state('passenger.report.data',{
		url:'/data',
		templateUrl:'modules/passengerMgmt/passenger.report.data.html',
		controller:'passengerReportDataController'
	})
	.state('passenger.report.arrival',{
		url:'/arrival',
		templateUrl:'modules/passengerMgmt/passenger.report.arrival.html',
		controller:'passengerReportArrivalController'
	})
	.state('passenger.report.passengers',{
		url:'/passengers',
		templateUrl:'modules/passengerMgmt/passenger.report.passengers.html',
		controller:'passengerReportPassengersController'
	})
	.state('passenger.report.station',{
		url:'/station',
		templateUrl:'modules/passengerMgmt/passenger.report.station.html',
		controller:'passengerReportStationController'
	})
	.state('passenger.report.route',{
		url:'/route',
		templateUrl:'modules/passengerMgmt/passenger.report.route.html',
		controller:'passengerReportRouteController'
	})
	.state('passenger.add',{
		url:'/add',
		params:{
			'secondCompanyId':null,
			'schedulerId':null
		},
		templateUrl:'modules/passengerMgmt/passenger.add.html',
		controller:'passengerAddController'
	})
	.state('passenger.detail',{
		url:'/detail',
		params:{
			'secondCompanyId': null,
			'employeeId': null,
			'name': null,
			'phoneNumber': null,
			'schedulerId':  null,
			'passengerId':null,
			'status': null
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
			'schedulerId':null,
			'secondCompanyId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.route.add.html',
		controller:'schedulerAddRouteController'
	})
	.state('scheduler.updateRoute',{
		url:'/updateRoute',
		params:{
			'routeId':null,
			'schedulerId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.route.update.html',
		controller:'schedulerUpdateRouteController'
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
			'schedulerId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.site.add.html',
		controller:'schedulerAddSiteController'
	})
	.state('scheduler.updateSite',{
		url:'/updateSite',
		params:{
			"address": null,
			"gps": null,
		  	"stationName": null,
		  	"schedulerId": null,
		  	"secondCompanyId": null,
		  	"stationId": null,
		  	"stationType": null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.site.update.html',
		controller:'schedulerUpdateSiteController'
	})
	.state('scheduler.driver',{
		url:'/driver',
		params:{
			'schedulerId': null,
			'identityCard': null,
			'licenseExpirationDate': null,
			'licenseId': null,
			'name': null,
			'driverId': null,
			'phoneNumber': null,
			'secondCompanyId': null,
			'secondCompanyName': null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.driver.html',
		controller:'schedulerDriverController'
	})
	.state('scheduler.driverDetail',{
		url:'/detail',
		params:{
			'schedulerId': null,
			'identityCard': null,
			'licenseExpirationDate': null,
			'licenseId': null,
			'name': null,
			'driverId': null,
			'phoneNumber': null,
			'secondCompanyId': null,
			'secondCompanyName': null,
			'shuttleCompanyName': null,
			'shuttleCompanyId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.driver.detail.html',
		controller:'schedulerDriverDetailController'
	})
	.state('scheduler.addDriver',{
		url:'/addDriver',
		params:{
			'schedulerId':null,
			'secondCompanyId':null
			// 'phoneNumber':null,
			// 'roleType':null,
			// 'name':null,
			// 'accountId':null,
			// 'driverUUID':null,
			// 'schedulerId':null,
			// 'secondCompanyId':null,
			// 'shuttleCompanyId':null,
			// 'licenseID':null,
			// 'licenseExpirationDate':null,
			// 'identityCard':null
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
			'schedulerId':null,
			'secondCompanyId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.bus.add.html',
		controller:'schedulerAddBusController'
	})
	.state('scheduler.busDetail',{
		url:'/busDetail',
		params:{
			'annualInspectionExpiration': null,
			'availableSeats': null,
			'engineNumber': null,
			'insuranceExpiration': null,
			'licensePlate': null,
			'schedulerId': null,
			'shuttleCompanyId': null,
			'shuttleCompanyName':null,
			'vehicleId': null,
			'vehicleLicense': null,
			'vehicleModel': null,
			'vin': null,
			'secondCompanyId':null
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
	.state('scheduler.busCompany',{
		url:'/busCompany',
		templateUrl:'modules/schedulerMgmt/scheduler.busCompany.html',
		controller:'schedulerbusCompanyController'
	})
	.state('company',{
		url:'/company',
		templateUrl:'modules/companyMgmt/company.html',
		controller:'companyController'
	})
	.state('company.list',{
		url:'/companyList',
		templateUrl:'modules/companyMgmt/company.companyList.html',
		params:{

		},
		controller:'companyListController'
	})
	.state('company.add',{
		url:'/addCompany',
		templateUrl:'modules/companyMgmt/company.addCompany.html',
		params:{
			'applicationAdminId': null,
			'secondCompanyId': null
		},
		controller:'companyAddController'
	})
	.state('company.detail',{
		url:'/detailCompany',
		templateUrl:'modules/companyMgmt/company.detailCompany.html',
		params:{
			'secondCompanyId': null,
			'companyName': null,
			'companyId': null,
			'applicationAdminId': null,
			'companyId': null,
			'phoneNumber': null
		},
		controller:'companyDetailController'
	})
	.state('company.HR',{
		url:'/hr',
		templateUrl:'modules/companyMgmt/company.hr.html',
		controller:'HRController'
	})
	.state('company.scheduler',{
		url:'/scheduler',
		templateUrl:'modules/companyMgmt/company.scheduler.html',
		controller:'companySchedulerController'
	})
	$urlRouterProvider.otherwise('entry/check')

=======
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
			'schedulerId':null
		},
		templateUrl:'modules/passengerMgmt/passenger.add.html',
		controller:'passengerAddController'
	})
	.state('passenger.detail',{
		url:'/detail',
		params:{
			'secondCompanyId': null,
			'employeeId': null,
			'name': null,
			'phoneNumber': null,
			'schedulerId':  null,
			'passengerId':null,
			'status': null
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
			'schedulerId':null,
			'secondCompanyId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.route.add.html',
		controller:'schedulerAddRouteController'
	})
	.state('scheduler.updateRoute',{
		url:'/updateRoute',
		params:{
			'routeId':null,
			'schedulerId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.route.update.html',
		controller:'schedulerUpdateRouteController'
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
			'schedulerId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.site.add.html',
		controller:'schedulerAddSiteController'
	})
	.state('scheduler.updateSite',{
		url:'/updateSite',
		params:{
			"address": null,
			"gps": null,
		  	"stationName": null,
		  	"schedulerId": null,
		  	"secondCompanyId": null,
		  	"stationId": null,
		  	"stationType": null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.site.update.html',
		controller:'schedulerUpdateSiteController'
	})
	.state('scheduler.driver',{
		url:'/driver',
		params:{
			'schedulerId': null,
			'identityCard': null,
			'licenseExpirationDate': null,
			'licenseId': null,
			'name': null,
			'driverId': null,
			'phoneNumber': null,
			'secondCompanyId': null,
			'secondCompanyName': null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.driver.html',
		controller:'schedulerDriverController'
	})
	.state('scheduler.driverDetail',{
		url:'/detail',
		params:{
			'schedulerId': null,
			'identityCard': null,
			'licenseExpirationDate': null,
			'licenseId': null,
			'name': null,
			'driverId': null,
			'phoneNumber': null,
			'secondCompanyId': null,
			'secondCompanyName': null,
			'shuttleCompanyName': null,
			'shuttleCompanyId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.driver.detail.html',
		controller:'schedulerDriverDetailController'
	})
	.state('scheduler.addDriver',{
		url:'/addDriver',
		params:{
			'schedulerId':null,
			'secondCompanyId':null
			// 'phoneNumber':null,
			// 'roleType':null,
			// 'name':null,
			// 'accountId':null,
			// 'driverUUID':null,
			// 'schedulerId':null,
			// 'secondCompanyId':null,
			// 'shuttleCompanyId':null,
			// 'licenseID':null,
			// 'licenseExpirationDate':null,
			// 'identityCard':null
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
			'schedulerId':null,
			'secondCompanyId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.bus.add.html',
		controller:'schedulerAddBusController'
	})
	.state('scheduler.busDetail',{
		url:'/busDetail',
		params:{
			'annualInspectionExpiration': null,
			'availableSeats': null,
			'engineNumber': null,
			'insuranceExpiration': null,
			'licensePlate': null,
			'schedulerId': null,
			'shuttleCompanyId': null,
			'shuttleCompanyName':null,
			'vehicleId': null,
			'vehicleLicense': null,
			'vehicleModel': null,
			'vin': null,
			'secondCompanyId':null
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
	.state('scheduler.busCompany',{
		url:'/busCompany',
		templateUrl:'modules/schedulerMgmt/scheduler.busCompany.html',
		controller:'schedulerbusCompanyController'
	})
	$urlRouterProvider.otherwise('entry/check')

>>>>>>> 7d3cf1803017ce6215a2432ad96e570109fcee20
}]);