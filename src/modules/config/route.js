angular.module('app',['injectModules'])
.config(['$stateProvider', '$urlRouterProvider','$qProvider','$httpProvider',function ($stateProvider,$urlRouterProvider,$qProvider,$httpProvider) {

	$httpProvider.interceptors.push('httpInterceptor');

	$stateProvider
	.state('entry',{
		url:'/entry',
		templateUrl:'modules/login/entry.html'
	})
	.state('entry.check',{
		url:'/check',
		templateUrl:'modules/login/check.html',
		controller:'checkController'
	})
	.state('entry.login',{
		url:'/login',
		params:{'phoneNumber':null,'requestType':null,'smsCode':null},
		templateUrl:'modules/login/login.html',
		controller:'loginController'
	})
	.state('entry.active',{
		url:'/active',
		params:{'phoneNumber':null,'smsCode':null,'requestType':null},
		templateUrl:'modules/login/active.html',
		controller:'activeController'
	})
	.state('entry.forget',{
		url:'/forget',
		templateUrl:'modules/login/forget.html',
		params:{'phoneNumber':null,'smsCode':null,'requestType':null},
		controller:'forgetController'
	})
	.state('entry.master',{
		url:'/master',
		templateUrl:'modules/login/masterLogin.html',
		controller:'masterLoginController'
	})

	.state('admin',{
		url:'/admin',
		templateUrl:'modules/admin/admin.html',
		controller:'adminController'
	})
	.state('admin.cloudData',{
		url:'/cloudData',
		templateUrl:'modules/cloudDataMgmt/index.html',
		controller:'cloudDataController'
	})
	.state('admin.passenger',{
		url:'/passenger'
	})
	.state('admin.master',{
		url:'/master',
		templateUrl:'modules/admin/master.html',
		params:{
			'systemAdminCompanyId': null,
			'companyName': null,
			'adminName': null,
			'companyId': null,
			'systemAdminId':  null,
			'phoneNumber': null
		},
		resolve:{
			loadData:function(applicationAdminHttpService,utilFactory){
				return applicationAdminHttpService.getApplicationAdminList({'systemAdminId':utilFactory.getAccountId(),'systemAdminCompanyId':utilFactory.getSecondCompanyId()})
			}
		},
		controller:'masterController'
	})
	.state('admin.addMaster',{
		url:'/addMaster',
		templateUrl:'modules/admin/admin.addMaster.html',
		params:{
			'systemAdminId': null,
			'systemAdminCompanyId': null,
			'systemCompanyName':null
		},
		controller:'masterAddController'
	})
	.state('admin.detailMaster',{
		url:'/detailMaster',
		templateUrl:'modules/admin/masterDetail.html',
		params:{
			'systemAdminCompanyId': null,
			'companyName': null,
			'adminName':null,
			'companyId': null,
			'systemAdminId': null,
			'phoneNumber': null,
			'systemCompanyName':null,
			'userId':null
		},
		controller:'masterDetailController'
	})
	
	.state('admin.passenger.list',{
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
		resolve:{
			loadData:function(passengerHttpService,utilFactory){
				return passengerHttpService.passenger({'hrId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
			}
		},
		controller:'listController'
	})
	.state('admin.passenger.feedback',{
		url:'/feedback',
		templateUrl:'modules/passengerMgmt/feedback.html',
		controller:'feedbackController'
	})
	.state('admin.passenger.report',{
		url:'/report',
		templateUrl:'modules/passengerMgmt/report.html',
		controller:'reportController'
	})
	.state('admin.passenger.report.data',{
		url:'/data',
		templateUrl:'modules/passengerMgmt/passenger.report.data.html',
		controller:'passengerReportDataController'
	})
	.state('admin.passenger.report.arrival',{
		url:'/arrival',
		templateUrl:'modules/passengerMgmt/passenger.report.arrival.html',
		controller:'passengerReportArrivalController'
	})
	.state('admin.passenger.report.passengers',{
		url:'/passengers',
		templateUrl:'modules/passengerMgmt/passenger.report.passengers.html',
		controller:'passengerReportPassengersController'
	})
	.state('admin.passenger.report.station',{
		url:'/station',
		templateUrl:'modules/passengerMgmt/passenger.report.station.html',
		controller:'passengerReportStationController'
	})
	.state('admin.passenger.report.route',{
		url:'/route',
		templateUrl:'modules/passengerMgmt/passenger.report.route.html',
		controller:'passengerReportRouteController'
	})
	.state('admin.passenger.add',{
		url:'/add',
		params:{
			'secondCompanyId':null,
			'schedulerId':null
		},
		templateUrl:'modules/passengerMgmt/passenger.add.html',
		controller:'passengerAddController'
	})
	.state('admin.passenger.detail',{
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
	.state('admin.scheduler',{
		url:'/scheduler'
		// templateUrl:'modules/schedulerMgmt/scheduler.html',
		// controller:'schedulerController'
	})
	.state('admin.scheduler.route',{
		url:'/route',
		templateUrl:'modules/schedulerMgmt/scheduler.route.html',
		controller:'schedulerRouteController',
		resolve:{
			loadData:function(schedulerHttpService,utilFactory){
				return schedulerHttpService.getRoute({'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
			}
		}
	})
	.state('admin.scheduler.addRoute',{
		url:'/addRoute',
		params:{
			'schedulerId':null,
			'secondCompanyId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.route.add.html',
		controller:'schedulerAddRouteController'
	})
	.state('admin.scheduler.updateRoute',{
		url:'/updateRoute',
		params:{
			'routeId':null,
			'schedulerId':null,
			'secondCompanyId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.route.update.html',
		controller:'schedulerUpdateRouteController'
	})
	.state('admin.scheduler.site',{
		url:'/site',
		templateUrl:'modules/schedulerMgmt/scheduler.site.html',
		controller:'schedulerSiteController',
		resolve:{
			loadData:function(schedulerHttpService,utilFactory){
				return schedulerHttpService.getSiteList({'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
			}
		}
	})
	.state('admin.scheduler.addSite',{
		url:'/addSite',
		params:{
			'secondCompanyId':null,
			'schedulerId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.site.add.html',
		controller:'schedulerAddSiteController'
	})
	.state('admin.scheduler.updateSite',{
		url:'/updateSite',
		params:{
			'address': null,
			'gps': null,
		  	'stationName': null,
		  	'schedulerId': null,
		  	'secondCompanyId': null,
		  	'stationId': null,
		  	'stationType': null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.site.update.html',
		controller:'schedulerUpdateSiteController'
	})
	.state('admin.scheduler.driver',{
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
		controller:'schedulerDriverController',
		resolve:{
			loadData:function(schedulerHttpService,utilFactory){
				return schedulerHttpService.getDriverList({'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
			}
		}

	})
	.state('admin.scheduler.driverDetail',{
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
	.state('admin.scheduler.addDriver',{
		url:'/addDriver',
		params:{
			'schedulerId':null,
			'secondCompanyId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.driver.add.html',
		controller:'schedulerAddDriverController'
	})
	.state('admin.scheduler.bus',{
		url:'/bus',
		templateUrl:'modules/schedulerMgmt/scheduler.bus.html',
		controller:'schedulerBusController',
		resolve:{
			loadData:function(schedulerHttpService,utilFactory){
				return schedulerHttpService.getBusList({'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
			}
		}
	})
	.state('admin.scheduler.addBus',{
		url:'/addBus',
		params:{
			'schedulerId':null,
			'secondCompanyId':null
		},
		templateUrl:'modules/schedulerMgmt/scheduler.bus.add.html',
		controller:'schedulerAddBusController'
	})
	.state('admin.scheduler.busDetail',{
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
	.state('admin.scheduler.calendar',{
		url:'/calendarList',
		templateUrl:'modules/schedulerMgmt/scheduler.calendar.html',
		controller:'schedulerCalendarController'
	})
	.state('admin.scheduler.addSchedule',{
		url:'/addSchedule',
		templateUrl:'modules/schedulerMgmt/scheduler.addSchedule.html',
		controller:'schedulerAddScheduleController'
	})
	.state('admin.scheduler.busCompany',{
		url:'/busCompany',
		templateUrl:'modules/schedulerMgmt/scheduler.busCompany.html',
		controller:'schedulerbusCompanyController'
	})
	// .state('admin.company',{
	// 	url:'/company',
	// 	templateUrl:'modules/companyMgmt/company.html',
	// 	controller:'companyController'
	// })
	.state('admin.companyList',{
		url:'/companyList',
		templateUrl:'modules/companyMgmt/company.companyList.html',
		controller:'companyListController',
		resolve:{
			loadData:function(companyHttpService,utilFactory){
				return companyHttpService.getCompanyList({'applicationAdminId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
			}
		}
	})
	.state('admin.companyAdd',{
		url:'/addCompany',
		templateUrl:'modules/companyMgmt/company.addCompany.html',
		params:{
			'applicationAdminId': null,
			'secondCompanyId': null,
			'secondCompanyName':null,
			'systemCompanyName':null
		},
		controller:'companyAddController'
	})
	.state('admin.companyDetail',{
		url:'/detailCompany',
		templateUrl:'modules/companyMgmt/company.detailCompany.html',
		params:{
			'secondCompanyId': null,
			'companyName': null,
			'adminName':null,
			'companyId': null,
			'applicationAdminId': null,
			'companyId': null,
			'userId':null,
			'phoneNumber': null,
			'systemCompanyName':null
		},
		controller:'companyDetailController'
	})
	// .state('admin.companyAdmin',{
	// 	url:'companyAdmin',
	// 	templateUrl:'modules/companyMgmt/companyAdmin.html',
	// 	controller:'companyAdminController'
	// })
	.state('admin.companyAdminHR',{
		url:'/hr',
		templateUrl:'modules/companyMgmt/company.hr.html',
		controller:'HRController',
		resolve:{
			loadData:function(companyHttpService,utilFactory){
				return companyHttpService.getHrList({'secondCompanyAdminId': utilFactory.getAccountId(),'secondCompanyId': utilFactory.getSecondCompanyId()})
			}
		}
	})
	.state('admin.companyAdminScheduler',{
		url:'/scheduler',
		templateUrl:'modules/companyMgmt/company.scheduler.html',
		controller:'companySchedulerController'
	})
	$urlRouterProvider.otherwise('entry/check')

}]);