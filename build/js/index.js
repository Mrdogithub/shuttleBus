angular.module('constModule',[])

.constant('APISERVICEPATH',{
	//'accounts'              :'http://accountandauthority.apps.cl-cn-east-preprod01.cf.ford.com/api/NanjingShuttle/accounts/v1/',
	'auths'            :'https://services-cn.cx.ford.com/api/NanjingShuttle/auths/v1/',
	'assignmentService':'https://services-cn.cx.ford.com/api/NanjingShuttle/assignments/v1/',
	// 'devPassenger':'http://19.229.169.185:7073/api/v1/passengerAccount/',
	// 'devLogin':'http://19.229.169.185:7072/api/v1/',
	// 'dev_1':'http://192.168.43.163:7072/api/v1/',
	// 'download':'http://19.230.115.136:7078/api/v1/tripHistorysDownload',
	//'busAPI':'http://19.229.169.228:7072/api/v1/vehicleService/',
	//'div_2':'http://187.17.43.163:7073/api/v1/passengerAccount/',
	'passengerDev'     :'./data/',
	'tripHistorysByExcel':'https://services-cn.cx.ford.com/api/v1/tripHistorysDownload/',// error
	'passengerTrip'      :'https://services-cn.cx.ford.com/api/Nanjingshuttle/tripHistories/v1/', // done

	'passengerAccount' :'https://services-cn.cx.ford.com/api/NanjingShuttle/profiles/v1/passenger/',
	'passengerComment' :'https://services-cn.cx.ford.com/api/NanjingShuttle/comments/v1/',

	//'passengerProfile' :'https://services-cn.cx.ford.com/api/v1/passengerProfile/',
	'companyAccount'   :'https://services-cn.cx.ford.com/api/NanjingShuttle/profiles/v1/company/',


	'vehicleService'   :'https://services-cn.cx.ford.com/api/NanjingShuttle/vehicles/v1/',
	// 'prd':'http://19.229.169.202:7071/api/v1/passengerAccount/',
	'driverAccount'    :'https://services-cn.cx.ford.com/api/NanjingShuttle/profiles/v1/',

	'stationService'   :'https://services-cn.cx.ford.com/api/NanjingShuttle/routing/v1/',
	'templateFile'	   :'https://services-cn.cx.ford.com/api/NanjingShuttle/routing/v1/templateFile/',
	'routeService'     :'https://services-cn.cx.ford.com/api/NanjingShuttle/routing/v1/',


	'hrService'		   :'https://services-cn.cx.ford.com/api/NanjingShuttle/profiles/v1/hr/',
	'schedulerService' :'https://services-cn.cx.ford.com/api/NanjingShuttle/profiles/v1/scheduler/',

	'reportingService' :'https://services-cn.cx.ford.com/api/NanjingShuttle/report/v1/'
})
.constant('ERRORCODE',{
	'activeProgress':'0100104',
	'loginProgress':'0100105'
})
.constant('REQUESTTYPE',{
	'activeAccount':0,
	'forgetAccount':1
})
.constant('CHECK_ACCOUNT_STATUS',{
	'accountActive':'0',
	'accountLogin':'1'
})
.constant('ERRORCODE_CONSTANT',{
	'ERROR_CODE_0900100104':{'code':'0900100104','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_0900100101':{'code':'0900100101','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_0900100102':{'code':'0900100102','message':'司机或线路信息发生修改，请刷新后重新选择'},
	
	'ERROR_CODE_1000100201':{'code':'1000100201','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_1000100203':{'code':'1000100203','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_1000100301':{'code':'1000100301','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_1000100401':{'code':'1000100401','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_1000100402':{'code':'1000100402','message':'车辆不存在，请返回列表刷新重试'},
	'ERROR_CODE_1000100302':{'code':'1000100302','message':'车辆不存在，请返回列表刷新重试'},
	//'ERROR_CODE_0800200101':{'code':'0800200101','message':'所属公司不存在,无法创建该线路'},
	'ERROR_CODE_0800200101':{'code':'0800200101','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_0800100201':{'code':'0800100201','message':'可能遇到问题，请稍候再试'},
	
	'ERROR_CODE_0800200301':{'code':'0800200301','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_0800100101':{'code':'0800100101','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_0800100103':{'code':'0800100103','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_0800100401':{'code':'0800100401','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_0800100402':{'code':'0800100402','message':'站点不存在'},
	'ERROR_CODE_0600700201':{'code':'0600700201','message':'司机不存在，请刷新列表重试'},	
	'ERROR_CODE_0600700202':{'code':'0600700202','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_0600900201':{'code':'0600900201','message':'乘客不存在，请刷新列表重试'},
	'ERROR_CODE_0600100101':{'code':'0600100101','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_0600100201':{'code':'0600100201','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_0600800201':{'code':'0600800201','message':'新增操作遇到问题，请重试'},
	'ERROR_CODE_0600800202':{'code':'0600800202','message':'修改操作遇到问题，请重试'},
	'ERROR_CODE_0600800203':{'code':'0600800203','message':'删除操作遇到问题，请重试'},

	'ERROR_CODE_08005001001':{'code':'08005001001','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_08005003001':{'code':'08005003001','message':'可能遇到问题，请稍候再试'},
	'ERROR_CODE_08005003002':{'code':'08005003002','message':'排班不存在，请返回列表，刷新再试'},
	'ERROR_CODE_08005004002':{'code':'08005004002','message':'排班不存在，请返回列表，刷新再试'},
	'ERROR_CODE_08005004004':{'code':'08005004004','message':'删除预约排班须至少提前两天'}

})
.constant('CHECK_ACCOUNT_ERROR',{
	'STATUS_CODE_401':{'code':'401','message':'可能遇到问题,请稍候再试'},
	'STATUS_CODE_0100103':{'code':'0100103','message':'对不起，您的手机号未注册。请联系公司相关负责人进行注册。'},
	'STATUS_CODE_0100102':{'code':'0100102','message':'对不起，您的手机号未注册。请联系公司相关负责人进行注册。'},
	'STATUS_CODE_0100101':{'code':'0100101','message':'请输入正确的手机号码'},
	'STATUS_CODE_0100108':{'code':'0100108','message':'发送验证码失败,请稍候再试'},
	'STATUS_CODE_0100110':{'code':'0100110','message':'发送验证码失败,请稍候再试'},
	'STATUS_CODE_0200108':{'code':'0200108','message':'无效的请求'},
	'STATUS_CODE_0200109':{'code':'0200109','message':'无效的请求'},
	'STATUS_CODE_0200110':{'code':'0200110','message':'无效的请求'},
	'STATUS_CODE_0200111':{'code':'0200111','message':'无效的请求'},
	'STATUS_CODE_0200112':{'code':'0200112','message':'无效的请求'}
})
.constant('ACTIVE_ACCOUNT_ERROR',{
	'STATUS_CODE_0100113':{'code':'0100113','message':'帐户激活可能遇到问题，请稍候再试'},
	'STATUS_CODE_0100115':{'code':'0100115','message':'无效的请求'},
	'STATUS_CODE_0100106':{'code':'0100106','message':'无效的请求'},
	'STATUS_CODE_0100109':{'code':'0100109','message':'验证码已经失效,请重新获取验证码'},
	'STATUS_CODE_0100112':{'code':'0100112','message':'验证码不正确,请重新输入或重新获取验证码'},
	'STATUS_CODE_0200108':{'code':'0200108','message':'无效的请求'},
	'STATUS_CODE_0200109':{'code':'0200109','message':'无效的请求'},
	'STATUS_CODE_0200110':{'code':'0200110','message':'无效的请求'},
	'STATUS_CODE_0200111':{'code':'0200111','message':'无效的请求'},
	'STATUS_CODE_0200112':{'code':'0200112','message':'无效的请求'},
	'STATUS_CODE_0100107':{'code':'0100107','message':'验证码不能为空'},

	'STATUS_CODE_0200104':{'code':'0200104','message':'激活成功'}
	
})
.constant('LOGIN_ACCOUNT_ERROR',{
	'STATUS_CODE_0200101':{'code':'0200101','message':'用户名或密码不正确,请重新输入'},
	'STATUS_CODE_0200104':{'code':'0200104','message':'登陆可能遇到问题,请稍候再试'},
	'STATUS_CODE_0200107':{'code':'0200107','message':'无效的请求'},
	'STATUS_CODE_0200106':{'code':'0200106','message':'无效的请求'},
	'STATUS_CODE_0200108':{'code':'0200108','message':'无效的请求'},
	'STATUS_CODE_0200109':{'code':'0200109','message':'无效的请求'},
	'STATUS_CODE_0200110':{'code':'0200110','message':'无效的请求'},
	'STATUS_CODE_0200111':{'code':'0200111','message':'无效的请求'},
	'STATUS_CODE_0200112':{'code':'0200112','message':'无效的请求'},
	'STATUS_CODE_0200301':{'code':'0200301','message':'无效的用户'}
})
.constant('SMSCODE_ERROR',{
	'STATUS_CODE_0100108':{'code':'0100108','message':'发送验证码失败,请稍候再试'},
	'STATUS_CODE_0100110':{'code':'0100110','message':'发送验证码失败,请稍候再试'},
	'STATUS_CODE_0200108':{'code':'0200108','message':'无效的请求'},
	'STATUS_CODE_0200109':{'code':'0200109','message':'无效的请求'},
	'STATUS_CODE_0200110':{'code':'0200110','message':'无效的请求'},
	'STATUS_CODE_0200111':{'code':'0200111','message':'无效的请求'},
	'STATUS_CODE_0200112':{'code':'0200112','message':'无效的请求'},
	'STATUS_CODE_0100107':{'code':'0100107','message':'验证码不能为空'},
	'STATUS_CODE_0100102':{'code':'0100102','message':'对不起，您的手机号未注册。请联系公司相关负责人进行注册。'},
	'STATUS_CODE_0100103':{'code':'0100103','message':'对不起，您的手机号未注册。请联系公司相关负责人进行注册。'},
	'STATUS_CODE_0100101':{'code':'0100101','message':'无效的手机号'},
	'STATUS_CODE_0200101':{'code':'0200101','message':'用户名或密码不正确,请重新输入'}
})
.constant('FORGET_ACCOUNT_ERROR',{
	'STATUS_CODE_0100112':{'code':'0100112','message':'验证码不正确,请重新输入或重新获取验证码'},
	'STATUS_CODE_0100109':{'code':'0100109','message':'验证码已经失效,请重新获取验证码'},
	'STATUS_CODE_0200107':{'code':'0200107','message':'无效的请求'},
	'STATUS_CODE_0200106':{'code':'0200106','message':'无效的请求'},
	'STATUS_CODE_0200104':{'code':'0200104','message':'密码重置成功'},
	'STATUS_CODE_0200108':{'code':'0200108','message':'无效的请求'},
	'STATUS_CODE_0200109':{'code':'0200109','message':'无效的请求'},
	'STATUS_CODE_0200110':{'code':'0200110','message':'无效的请求'},
	'STATUS_CODE_0200111':{'code':'0200111','message':'无效的请求'},
	'STATUS_CODE_0200112':{'code':'0200112','message':'无效的请求'},

	'STATUS_CODE_0100113':{'code':'0100113','message':'重置密码可能遇到问题，请稍候再试'},
	'STATUS_CODE_0100115':{'code':'0100115','message':'无效的请求'},
	'STATUS_CODE_0100106':{'code':'0100106','message':'无效的请求'},
	'STATUS_CODE_0200101':{'code':'0200101','message':'无效的请求'},
	'STATUS_CODE_0100101':{'code':'0100101','message':'无效的手机号'},
	// 'STATUS_CODE_0100103':{'code':'0100103','message':'重置密码可能遇到问题，请稍后再试。'},
})
.constant('TOKEN_ERROR',{
	'STATUS_CODE_0200102':{'code':'0200102','message':'您的帐户信息已过期，请重新登录'},
	'STATUS_CODE_0200105':{'code':'0200105','message':'您的帐户信息已过期，请重新登录'},
	'STATUS_CODE_0200201':{'code':'0200201','message':'您的帐户信息已过期，请重新登录'}
})
.constant('RESET_ACCOUNT_ERROR',{
	'STATUS_CODE_0200101':{'code':'0200101','message':'旧密码不正确'},
	'STATUS_CODE_0200110':{'code':'0200110','message':'无效的用户'},
	'STATUS_CODE_0100113':{'code':'0100113','message':'重置密码可能遇到问题，请稍候再试'}
})
.constant('USER_ACCOUNT',{
	'accountId':'',
	'accessToken':'',
	'refreshToken':'',
	'secondCompanyId':'',
	'ROLE_SYSADMIN':false,
	'ROLE_COMPANY_ADMIN':false,

	'ROLE_HR':'',
	'ROLE_SCHEDULER':false,
	'ROLE_PASSENGER':false,
	'ROLE_DRIVER':false,
	'ROLE_APPLICATIONADMIN':false,
	'ROLE_SECONDADMIN':false
})
.constant('ROLE_CODE',{
	// 'ROLE_SYSADMIN':'1',
	// 'ROLE_COMPANY_ADMIN':'2',
	// 'ROLE_HR':'4',
	// 'ROLE_SCHEDULER':'5',
	// 'ROLE_PASSENGER':'6',
	// 'ROLE_DRIVER':'7',


	
	'ROLE_CODE_APPLICATION_COMPANY' : "8",
	'ROLE_CODE_OWNER_COMPANY' : "9",
	'ROLE_CODE_SHUTTLE_COMPANY' : "10",
	
	
	'ROLE_CODE_SYSADMIN' : "1",
	'ROLE_CODE_APPLICATIONADMIN' : "2",
	'ROLE_CODE_SECONDADMIN' : "3",
	'ROLE_CODE_HR' : "4",
	'ROLE_CODE_SCHEDULER' : "5",
	'ROLE_CODE_PASSENGER' : "6",
	'ROLE_CODE_DRIVER' : "7"

});

angular.module('injectModules',[
	'ui.router',
	'ui.sortable',
	// 'ui.bootstrap',
	'ui.calendar',
	// 'ngAnimate',
	// 'ngResource',
	'searchByTextModule',
	'headerModule',
	'leftNavModule',
	'constModule',
	'utilFactoryModule',
	'smsCodeModule',
	'breadcrumbModule',
	'checkControllerModule',
	'gobackModule',
	'tableComponentModule',
	'paginationModule',
	'hasPermisstionComponent',
	'getRefreshTokenFacotryModule',
	'localStorageFactoryModule',
	'loginHttpServiceModule',
	'loginControllerModule',
	'forgetControllerModule',
	'cloudDataControllerModule',
	'activeControllerModule',
	
	'adminControllerModule',
	'masterLoginControllerModule',
	'masterControllerModule',
	'masterAddControllerModule',
	'masterDetailControllerModule',
	'applicationAdminHttpServiceModule',
	'passengerControllerModule',
	'passengerHttpServiceModule',
	'passengerAddControllerModule',
	'passengerDetailControllerModule',
	'listControllerModule',
	'reportControllerModule',
	'feedbackControllerModule',
	'resetPasswordControllerModule',
	
	'schedulerControllerModule',
	'schedulerHttpServiceModule',
	'schedulerDriverControllerModule',
	'schedulerDriverDetailControllerModule',
	'schedulerAddDriverControllerModule',
	'schedulerCalendarControllerModule',
	'schedulerAddScheduleControllerModule',
	'schedulerBusControllerModule',
	'schedulerSiteControllerModule',
	'schedulerUpdateSiteControllerModule',
	'schedulerbusCompanyControllerModule',
	
	'schedulerAddBusControllerModule',
	'schedulerBusDetailControllerModule',
	
	'schedulerAddSiteControllerModule',
	
	'schedulerRouteControllerModule',
	'schedulerAddRouteControllerModule',
	'schedulerUpdateRouteControllerModule',

	'schedulerSpecialBusControllerModule',
	'schedulerAddSpecialScheduleControllerModule',
	'schedulerSpecialBusListControllerModule',
	'schedulerAddOneDayScheduleControllerModule',
	// 'schedulerSpecialBusEditControllerModule',

	'httpInterceptorModule',

	'companyControllerModule',
	'companyListControllerModule',
	'companyHttpServiceModule',
	'companyAddControllerModule',

	'HRControllerModule',
	'companyDetailControllerModule',
	'companySchedulerControllerModule',

	'passengerReportDataControllerModule',
	'passengerReportBusRouteControllerModule',
	'passengerReportStationControllerModule',
	'passengerReportPassengersControllerModule',
	'passengerReportArrivalControllerModule',

	'companyAdminControllerModule'
	
])
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
	.state('entry.reset',{
		url:'/reset',
		templateUrl:'modules/login/resetPassword.html',
		params:{'userName':null,'password':null},
		controller:'resetPasswordController'
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
	.state('admin.passenger.report.busRoute',{
		url:'/busRoute',
		templateUrl:'modules/passengerMgmt/passenger.report.busRoute.html',
		controller:'passengerReportBusRouteController'
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
			'status': null,
			'defaultStationName':null,
			'defaultRouteName':null
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
	.state('admin.scheduler.specialBus',{
		url:'/specialBus',
		templateUrl:'modules/schedulerMgmt/scheduler.specialBus.html',
		controller:'schedulerSpecialBusController'
	})
	.state('admin.scheduler.addSpecialSchedule',{
		url:'/specialSchedule',
		templateUrl:'modules/schedulerMgmt/scheduler.addSpecialSchedule.html',
		controller:'schedulerAddSpecialScheduleController'
	})
	.state('admin.scheduler.specialBusList',{
		url:'/specialBusList',
		templateUrl:'modules/schedulerMgmt/scheduler.specialBusList.html',
		params:{'eventDay':null},
		controller:'schedulerSpecialBusListController',
		reload:true,  
		cache:false
	})
	// .state('admin.scheduler.specialBusEdit',{
	// 	url:'/specialBusEdit',
	// 	templateUrl:'modules/schedulerMgmt/scheduler.specialBusEdit.html',
	// 	params:{'assignmentId':null},
	// 	controller:'schedulerSpecialBusEditController'
	// })
	.state('admin.scheduler.addOneDaySchedule',{
		url:'/oneDaySchedule',
		templateUrl:'modules/schedulerMgmt/scheduler.addOneDaySchedule.html',
		params:{'eventDay':null,'dateTime':null},
		controller:'schedulerAddOneDayScheduleController'
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
angular.module('adminControllerModule',[])
.controller('adminController',function($scope){

	$scope.passengerIcon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';
	$scope.schedulerIcon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';
	$scope.cloudDataIcon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';
	$scope.icon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';

	$scope.menuArray =[
		{
			'title':{'name':'首页','icon':$scope.cloudDataIcon,'class':'cloudData','uiSref':'admin.cloudData','href':'cloudData'},
			'permission':'ROLE_HR&ROLE_SCHEDULER'
			//'permission':'ROLE_SYSADMIN'
		},
		{
			'title':{'name':'乘客管理','icon':$scope.passengerIcon,'class':'passenger','uiSref':'admin.passenger.list'},
			'permission':'ROLE_HR',
			'menuList':[
				{'name':'乘客列表','class':'','permission':'ROLE_HR','uiSref':'admin.passenger.list','href':'list'},
				{'name':'乘客反馈','class':'','permission':'ROLE_HR','uiSref':'admin.passenger.feedback','href':'feedback'},
				{'name':'乘坐情况','class':'','permission':'ROLE_HR','uiSref':'admin.passenger.report.data','href':'data'}
			]
		},
		{
			'title':{'name':'班车管理','icon':$scope.schedulerIcon,'class':'scheduler','uiSref':'admin.scheduler.route'},
			'permission':'ROLE_SCHEDULER',
			'menuList':[
				{'name':'线路管理','class':'','permission':'ROLE_SCHEDULER','uiSref':'admin.scheduler.route','href':'route'},
				{'name':'站点管理','class':'','permission':'ROLE_SCHEDULER','uiSref':'admin.scheduler.site','href':'site'},
				{'name':'运营单位','class':'','permission':'ROLE_SCHEDULER','uiSref':'admin.scheduler.busCompany','href':'busCompany'},
				{'name':'司机管理','class':'','permission':'ROLE_SCHEDULER','uiSref':'admin.scheduler.driver','href':'driver'},
				{'name':'车辆管理','class':'','permission':'ROLE_SCHEDULER','uiSref':'admin.scheduler.bus','href':'bus'},
				{'name':'排班管理','class':'','permission':'ROLE_SCHEDULER','uiSref':'admin.scheduler.calendar','href':'calendar'},
				{'name':'专车排班','class':'','permission':'ROLE_SCHEDULER','uiSref':'admin.scheduler.specialBus','href':'specialBus'}
			]
		},
		{
			'title':{'name':'公司管理','icon':$scope.icon,'class':'masterTab',},
			'permission':'ROLE_SYSADMIN',
			'menuList':[
				{'name':'公司列表','class':'','permission':'ROLE_SYSADMIN','uiSref':'admin.master','href':'master'}
			]
		},
		{
			'title':{'name':'公司管理','icon':$scope.icon,'class':'secondAdmin'},
			'permission':'ROLE_SECONDADMIN',
			'menuList':[
				// {'name':'公司列表','class':'','permission':'ROLE_APPLICATIONADMIN','uiSref':'admin.companyList','href':'companyList'},
				{'name':'乘客管理员','class':'','permission':'ROLE_SECONDADMIN','uiSref':'admin.companyAdminHR','href':'hrAdmin'},
				{'name':'班车管理员','class':'','permission':'ROLE_SECONDADMIN','uiSref':'admin.companyAdminScheduler','href':'schedulerAdmin'}
			]
		},
		{
			'title':{'name':'公司管理','icon':$scope.icon,'class':'applicationAdmin'},
			'permission':'ROLE_APPLICATIONADMIN',
			'menuList':[
				{'name':'公司列表','class':'','permission':'ROLE_APPLICATIONADMIN','uiSref':'admin.companyList','href':'companyList'},
				// {'name':'乘客管理员','class':'','permission':'ROLE_SECONDADMIN','uiSref':'admin.companyAdminHR','href':'hrAdmin'},
				// {'name':'班车管理员','class':'','permission':'ROLE_SECONDADMIN','uiSref':'admin.companyAdminScheduler','href':'schedulerAdmin'}
			]
		}
	];

})
angular.module('masterAddControllerModule',[])
.controller('masterAddController',function(applicationAdminHttpService,utilFactory,$stateParams,$state,$scope){

	console.log('add master')
	if($stateParams.systemAdminId){
		// $scope.companyUuid = $stateParams.companyUuid;
		$scope.params = {
			'systemAdminId': $stateParams.systemAdminId,
			'systemAdminCompanyId': $stateParams.systemAdminCompanyId,
			'systemCompanyName':$stateParams.systemCompanyName
			// 'name': $stateParams.name,
			// 'phoneNumber': $stateParams.phoneNumber
		};
		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.submitStatusText = '完成';
		$scope.breadcrumbText={
			'lv1':'公司列表',
			'lv2':'新增公司'
		}
	}else{
		$state.go('admin.master')
	}

	// form information haven't been completed by user and then user trigger ‘取消’
	// we should provide messages for user
	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.master')
		},function(){

		});
	}

	// form information completed by user and the group params whin _params obj
	// invoke API.Before invoke api we need to check all filed's status by 'setDirty'
	// services.
	$scope.addApplicationAdmin = function(formValidate){
		// if all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		
		if(!formValidate) return utilFactory.setDirty($scope.formValidate)
		// alertify.confirm('确认新增名为'+$scope.params.name+'的这个乘客？',function(){
			
		// },function(){
		// 	console.log('cancel')
		// })

		var _params = {
				'systemAdminCompanyId': $scope.params.systemAdminCompanyId,
				'adminName':$scope.params.adminName,
				'name': $scope.params.name,
				'systemAdminId': $scope.params.systemAdminId,
				'phoneNumber': $scope.params.phoneNumber,
				'systemCompanyName':$scope.params.systemCompanyName
		}

		alertify.confirm('确认新增 "'+$scope.params.name+'"，并添加 "'+$scope.params.adminName+'" 为管理员吗？',function(){
			applicationAdminHttpService.addApplicationAdmin(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
				
					alertify.alert('新增成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('admin.master')
					})
				}else{
					utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message)
				}
			},function(errorResult){
				alertify.alert(errorResult.error.message)
			})
		},function(){
			
		})
	}
})
angular.module('masterControllerModule',[])
.controller('masterController',function(loadData,applicationAdminHttpService,utilFactory,$stateParams,$state,$scope){

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{
			'pageSize':'',
			'pageNumber':'',
			'systemAdminId':utilFactory.getAccountId(),
			'systemAdminCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return applicationAdminHttpService.getApplicationAdminList(params)
		},
		loadData:function(){},
		dataSet:function(result){
			if(result.value != null){
				var _result = result.value;
				for(var i=0;i<_result.length;i++){
					_result[i]['status'] =_result[i]['status'] == 0?'未激活':'已激活'
				}
			}
		}
		//extendParams:function(){}
	}
	var _params = {
			'pageSize':'',
			'pageNumber':'',
			'systemAdminId':utilFactory.getAccountId(),
			'systemAdminCompanyId':utilFactory.getSecondCompanyId()
		};
	$scope.pageConfigs.getList(_params)
	$scope.queryByKeyObj = {
		'active':{'key':'companyName','value':'公司名称'},
		'list':[{'key':'phoneNumber','value':'管理员手机'}]
	}

	$scope.selectKey = function(activeObj){
		$scope.queryByKeyObj.list.length = 0;
		$scope.queryByKeyObj.list.push( {'key':$scope.queryByKeyObj.active.key,'value':$scope.queryByKeyObj.active.value})
		$scope.queryByKeyObj.active.key = activeObj.key;
		$scope.queryByKeyObj.active.value = activeObj.value;

		$('.dropdown-menu').css('display','none')
	}


	$scope.searchFn = function(){
		var _searchParams ={
			// 'pageSize':'20',
			// 'pageNo':'1'
			'systemAdminId':utilFactory.getAccountId(),
			'systemAdminCompanyId':utilFactory.getSecondCompanyId()
		}
		_searchParams[$scope.queryByKeyObj.active.key] = $scope.searchText;
		console.log(1,_searchParams)
		$scope.$broadcast('refreshPageList',_searchParams);
	}
	$scope.showQueryKeyList = function(){
		$('.dropdown-menu').css('display','block')
	}

	$scope.addApplicationCompany = function(){
		$state.go('admin.addMaster',{'systemAdminId':utilFactory.getAccountId(),'systemAdminCompanyId':utilFactory.getSecondCompanyId(),'systemCompanyName':utilFactory.getSecondCompanyName()})
	};

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看详情',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _params = {
						'systemAdminCompanyId': item.secondCompanyId,
						'companyName': item.name,
						'adminName':item.adminName,
						'userId': item.partyId,
						'companyId':item.adminPartyId,
						'systemCompanyName':utilFactory.getSecondCompanyName(),
						'systemAdminId': utilFactory.getAccountId(),
						'phoneNumber': item.adminPhoneNumber
					}
					$state.go('admin.detailMaster',_params);
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){

					var _deleteParams = {
						'systemAdminCompanyId': item.secondCompanyId,
						'companyName': item.name,
						'adminName':item.adminName,
						'userId': item.partyId,
						'systemCompanyName':utilFactory.getSecondCompanyName(),
						'systemAdminId': utilFactory.getAccountId(),
						'phoneNumber': item.adminPhoneNumber,
						'companyName':item.name,
						'companyId':item.adminPartyId
					}

					alertify.confirm('确认删除"'+item.name+'"吗?',function(){
						applicationAdminHttpService.deleteApplicationAdminByID(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('admin.master',{},{reload:true});
							} else{
								utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.message)
							}
						});
					},function(){

					}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
		
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
		defaultValue:'——',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'公司名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'adminName','value':'管理员'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'adminPhoneNumber','value':'管理员手机'},
					'checkFlag':true
				}
			]
		}
		// changeEnable:function(item){}
	}
	

	$scope.dataIsEmpty = false;
	if(loadData && (loadData.data.value == null)){
		$scope.dataIsEmpty = true;
		return
	}else if(loadData && loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode);
		return
	}else{
		$scope.$watch('$viewContentLoaded',function(event){ 
			$scope.pageConfigs.getList(_params)
  			$scope.$broadcast('refreshPageList',{pageSize:'',pageNo:''});
		});	
	}


});
angular.module('masterDetailControllerModule',[])
.controller('masterDetailController',function(applicationAdminHttpService,utilFactory,$stateParams,$state,$scope){
	if($stateParams.systemAdminId){

		$scope.params = {
			'systemAdminCompanyId': $stateParams.systemAdminCompanyId,
			'companyName': $stateParams.companyName,
			'adminName':$stateParams.adminName,
			'systemAdminId': $stateParams.systemAdminId,
			'companyId': $stateParams.companyId,
			'phoneNumber': $stateParams.phoneNumber,
			'userId': $stateParams.userId,
			'systemCompanyName': $stateParams.systemCompanyName
		};
		$scope.active = false;
		$scope.active_one = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={
			'lv1':'公司列表',
			'lv2':'公司详情'
		}
	}else{
		$state.go('admin.master')
	}

	$scope.editCompany = function(flag){ $scope.active = !flag; };

	$scope.editCompanyName = function(flag){ $scope.active_one = !flag }

	$scope.updateCompany = function(){
		$scope.submitOnProgress = true;
		var _params = {
			'systemAdminCompanyId': $scope.params.systemAdminCompanyId,
			'companyName': $scope.params.companyName,
			'adminName':$scope.params.adminName,
			'companyId': $scope.params.companyId,
			'userId':$scope.params.userId,
			'systemAdminId': $scope.params.systemAdminId,
			'companyId': $scope.params.companyId,
			'phoneNumber': $scope.params.phoneNumber,
			'systemCompanyName':$scope.params.systemCompanyName
		}

		applicationAdminHttpService.updateApplicationAdminByID(_params).then(function(result){
			$scope.submitOnProgress = false;
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功!',function(){
					$state.go('admin.master')
				})
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		},function(){})
	};
})
angular.module('applicationAdminHttpServiceModule',[])
.factory('applicationAdminHttpService',function($http,ROLE_CODE,localStorageFactory,APISERVICEPATH){
	var masterHttp = {};
	var companyAccount = APISERVICEPATH.companyAccount;
	
	masterHttp.addApplicationAdmin = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
				'affiCompanyId': paramsObj.systemAdminCompanyId,
				'name': paramsObj.name,
				'adminName':paramsObj.adminName,
				//'operateAccountId': paramsObj.applicationAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'companyCode':'8'
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};
	
	masterHttp.getApplicationAdminList = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount+paramsObj.systemAdminId+"/parentCompanyId/"+paramsObj.systemAdminCompanyId+"/companyCode/8",
			paramsList:{
				// 'schedulerId': paramsObj.systemAdminId,
				// 'parentCompanyId':paramsObj.systemAdminCompanyId,
				'pageNumber': paramsObj.pageNumber,
				'pageSize':paramsObj.pageSize,
				'companyName': paramsObj.companyName,
				'phoneNumber': paramsObj.phoneNumber
				// 'companyCode':'2'
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	masterHttp.updateApplicationAdminByID = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
			  'affiCompanyId': paramsObj.systemAdminCompanyId,
			  'name': paramsObj.companyName,
			  'adminName':paramsObj.adminName,
			  'affiCompanyName':paramsObj.systemCompanyName,
			  'operateAccountId': paramsObj.systemAdminId,
			  'partyId': paramsObj.userId,
			  'adminPartyId':paramsObj.companyId,
			  'phoneNumber': paramsObj.phoneNumber,
			  'status': '1',
			  'companyCode':'8'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	masterHttp.deleteApplicationAdminByID = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
			  'affiCompanyId': paramsObj.systemAdminCompanyId,
			  'name': paramsObj.companyName,
			  'adminName':paramsObj.adminName,
			  'affiCompanyName':paramsObj.systemCompanyName,
			  'operateAccountId': paramsObj.systemAdminId,
			  'partyId': paramsObj.userId,
			  'adminPartyId':paramsObj.companyId,
			  'phoneNumber': paramsObj.phoneNumber,
			  'status': '2',
			  'companyCode':'8'
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	return masterHttp;
});
angular.module('cloudDataControllerModule',[]).controller('cloudDataController',function($scope,utilFactory){

	var map = new AMap.Map("container", {
		resizeEnable: true,
		center: [121.339766,31.196099],//地图中心点
		zoom: 12 //地图显示的缩放级别
	});		
	addCloudLayer();  //叠加云数据图层

	function addCloudLayer() {

		var searchOptions = {
			 filter: 'user_company_id:' + utilFactory.getSecondCompanyId()
		};
		var marker;
		var icon;
 		var center = [121.339766,31.196099]
		AMap.service(["AMap.CloudDataSearch"], function() {
			
				var search = new AMap.CloudDataSearch('598a6898305a2a4ed76a78e8', searchOptions); 
				setInterval(randerData,10000)
				function randerData(){
					map.clearMap();
		          	search.searchNearBy(center, 40000, function(status,result){
		          		//console.log('xxxsafsfdasssdfasdf')
		          					if(marker != null){
						marker = null;
						icon = null;
					}
		        	   if(result.datas){
		        		    for (var i = 0; i < result.datas.length; i++) {
		        				icon = new AMap.Icon({
		        				    image: '../images/bus.png',
		        				    size: new AMap.Size(50, 50),
		        				    imageSize: new AMap.Size(50, 50)
		        				});
								var infoWindow = new AMap.InfoWindow({
									isCustom: true,  //使用自定义窗体
						       		offset: new AMap.Pixel(10, -15)
					       		});
		        				marker = new AMap.Marker({
		        					icon: icon,
		        					position: [result.datas[i]._location.lng,result.datas[i]._location.lat],
		        					offset: new AMap.Pixel(-12,-12),
		        					zIndex: 101,
		        					title: result.datas[i]._name,
		        					extData:{'bus_plate':result.datas[i].bus_plate,'_name':result.datas[i]._name,'_address':result.datas[i]._address,'id':result.datas[i]._id,'area_id':result.datas[i].area_id,'gps':result.datas[i]._location,'ismetro':result.datas[i].ismetro},
		        					map: map
		        				});


		        				marker.on('click', markerClick);
		       					marker.emit('click', {target: marker});
		       					function markerClick(e) {
							       infoWindow.setContent(createInfoWindow(e.target.G.extData.bus_plate,e.target.G.extData._name,e.target.G.extData._address));
							       infoWindow.open(map, e.target.getPosition());
		    					}
		        		    }
		        	   	}
		        	});
		        }
		});


 // AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {
 //        if (!PathSimplifier.supportCanvas) {
 //            alert('当前环境不支持 Canvas！');
 //            return;
 //        }

 //        var emptyLineStyle = {
 //            lineWidth: 0,
 //            fillStyle: null,
 //            strokeStyle: null,
 //            borderStyle: null
 //        };

 //        var pathSimplifierIns = new PathSimplifier({
 //            zIndex: 100,
 //            //autoSetFitView:false,
 //            map: map, //所属的地图实例

 //            getPath: function(pathData, pathIndex) {

 //                return pathData.path;
 //            },
 //            getHoverTitle: function(pathData, pathIndex, pointIndex) {

 //                return null;
 //            },
 //            renderOptions: {
 //                //将点、线相关的style全部置emptyLineStyle
 //                pathLineStyle: emptyLineStyle,
 //                pathLineSelectedStyle: emptyLineStyle,
 //                pathLineHoverStyle: emptyLineStyle,
 //                keyPointStyle: emptyLineStyle,
 //                startPointStyle: emptyLineStyle,
 //                endPointStyle: emptyLineStyle,
 //                keyPointHoverStyle: emptyLineStyle,
 //                keyPointOnSelectedPathLineStyle: emptyLineStyle
 //            }
 //        });

 //        window.pathSimplifierIns = pathSimplifierIns;
 //        var path = [[116.41, 39.90],
 //                [113.96, 40.55],
 //                [111.48, 41.14],
 //                [108.95, 41.67],
 //                [106.38, 42.15],
 //                [103.77, 42.57],
 //                [101.14, 42.93],
 //                [98.47, 43.23],
 //                [95.78, 43.47],
 //                [93.07, 43.64],
 //                [90.35, 43.75],
 //                [87.62, 43.79]]

 //        var currentPath = [];
 //        setInterval(function(){
 //        	for(var i=0;i<path.length-i)
 //        },1000)
 //        for(var i =0;i<path.length;path++){

 //        }
 //        pathSimplifierIns.setData([{
 //            name: '测试',
 //            path: [
                
 //            ]
 //        }]);

 //        //initRoutesContainer(d);

 //        function onload() {
 //            pathSimplifierIns.renderLater();
 //        }

 //        function onerror(e) {
 //            alert('图片加载失败！');
 //        }

 //        var navg1 = pathSimplifierIns.createPathNavigator(0, {
 //            loop: true,
 //            speed: 1000000,
 //            pathNavigatorStyle: {
 //                width: 50,
 //                height: 50,
 //                //使用图片
 //                content: PathSimplifier.Render.Canvas.getImageContent('../images/bus.png', onload, onerror),
 //                strokeStyle: null,
 //                fillStyle: null,
 //                //经过路径的样式
 //                pathLinePassedStyle: {
 //                    lineWidth: 0,
 //                    strokeStyle: 'none',
 //                    dirArrowStyle: {
 //                        stepSpace: 1,
 //                        strokeStyle: 'none'
 //                    }
 //                }
 //            }
 //        });

 //        navg1.start();

 //    });


		function createInfoWindow (bus_plate,_name,_address){
			var addSitePop = document.createElement("div"),formContent = document.createElement("div");
			formContent.innerHTML = '<div class="busInfo-wrapper container-shadow-border">'
									+'<p>'+_address+'</p>'
									+'<p>司机姓名：'+_name+'</p>'
									+'<p>驾照信息：'+bus_plate+'</p>'
									+'</div>';
			addSitePop.appendChild(formContent);
			return addSitePop;
		}

    }    

    
    AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {

        var zoomCtrl1 = new BasicControl.Zoom({
                theme: 'light',
                // position: 'tl'

            })
        map.addControl(zoomCtrl1);
    });
})
angular.module('HRControllerModule',[])
.controller('HRController',function(loadData,companyHttpService,utilFactory,$stateParams,$state,$scope){

	// Init current user info
	$scope.params = {'secondCompanyId':utilFactory.getSecondCompanyId(),'secondCompanyAdminId':utilFactory.getAccountId()};

	// Init show/hide status for current view
	$scope.active = false;
	$scope.submitOnProgress = false;
	$scope.breadcrumbText={ 'lv1':'乘客管理员'}

	$scope.searchFn = function () {
		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1','hrName':$scope.searchText});
	}
	$scope.addHR = function(formValidateIsInvalid){
		if(formValidateIsInvalid){
			return utilFactory.setDirty($scope.formValidate);
		}
		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.params.secondCompanyId,
			'name': $scope.params.name,
			'secondCompanyAdminId':$scope.params.secondCompanyAdminId,
			'phoneNumber':$scope.params.phoneNumber
		}
		alertify.confirm('确认新增名为"'+$scope.params.name+'"的这个乘客管理员？',function(){
			companyHttpService.addHR(_params).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					alertify.alert('新增成功！',function(){$state.go('admin.companyAdminHR',{},{reload:true});})
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
				$scope.submitOnProgress = false;
			},function(){
				$scope.submitOnProgress = false;
			})
		},function(){
				$scope.submitOnProgress = false;
		}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	};


	$scope.close = function(){
		$('#myModal').modal('toggle');
	}

	$scope.updateHR = function(updateFormValidateIsInvalid){

		if(updateFormValidateIsInvalid){
			return utilFactory.setDirty($scope.updateFormValidate);
		}

		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.updateParams.secondCompanyId,
			'secondCompanyAdminId': $scope.params.secondCompanyAdminId,
			'name': $scope.updateParams.name,
			'hrId': $scope.updateParams.partyId,
			'phoneNumber': $scope.updateParams.phoneNumber
		}
		$('#myModal').modal('toggle');
		companyHttpService.updateHrById(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('admin.companyAdminHR',{},{reload:true});
				})
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
			$scope.submitOnProgress = false;
		},function(){})
	};	


	$scope.pageConfigs={
		params:{
			'secondCompanyAdminId': utilFactory.getAccountId(),
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'pageSize':'20',
			'pageNumber':'1'
		},
		list:null,
		getList:function(params){
			return companyHttpService.getHrList(params)
		},
		loadData:function(){},
		dataSet:function(result){}
		//extendParams:function(){}
	}

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operateIfFlag:true,
			operate:[{
				name:'编辑',
				ngIf:function(){
					return true
				},
				fun:function(item,event){

					$scope.updateParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'phoneNumber':item.phoneNumber,
						'partyId':item.partyId
					}
					$('#myModal').modal('toggle');
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _deleteParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'senondCompanyName':item.secondCompanyName,
						'secondCompanyAdminId':$scope.params.secondCompanyAdminId,
						'phoneNumber':item.phoneNumber,
						'hrId':item.partyId
					}
					alertify.confirm('确认删除"'+item.name+'"?',function(){
						companyHttpService.deleteHrByID(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('admin.companyAdminHR',{},{reload:true});
							} else{
								utilFactory.checkErrorCode(_resultData.error.statusCode)
							}
						});
					},function(){

					}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
		
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
		defaultValue:'——',
		defaultEmptyText:'还未添加任何乘客管理员',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				}
	    	]
	    }
		// changeEnable:function(item){}
	}

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})
angular.module('companyAddControllerModule',[])
.controller('companyAddController',function(companyHttpService,utilFactory,$stateParams,$state,$scope){

	if($stateParams.secondCompanyId){
		$scope.params = {
			'secondCompanyId': $stateParams.secondCompanyId,
			'applicationAdminId': $stateParams.applicationAdminId,
			'secondCompanyName':$stateParams.secondCompanyName
			// 'name': $stateParams.name,
			// 'phoneNumber': $stateParams.phoneNumber
		};
		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.submitStatusText = '完成';
		$scope.breadcrumbText={
			'lv1':'公司列表',
			'lv2':'新增公司'
		}
	}else{
		$state.go('admin.companyList')
	}

	$scope.editcompanyProfile = function(flag){
		$scope.active = !flag;
	};


	// form information haven't been completed by user and then user trigger ‘取消’
	// we should provide messages for user
	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.companyList')
		},function(){

		});
	}

	// form information completed by user and the group params whin _params obj
	// invoke API.Before invoke api we need to check all filed's status by 'setDirty'
	// services.
	$scope.addcompanyProfile = function(formValidate){
		// if all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		
		if(!formValidate) return utilFactory.setDirty($scope.formValidate)
		// alertify.confirm('确认新增名为'+$scope.params.name+'的这个乘客？',function(){
			
		// },function(){
		// 	console.log('cancel')
		// })

		var _params = {
				'secondCompanyId': $scope.params.secondCompanyId,
				'secondCompanyName':$scope.params.secondCompanyName,
				'adminName':$scope.params.adminName,
				'name': $scope.params.name,
				'applicationAdminId': $scope.params.applicationAdminId,
				'phoneNumber': $scope.params.phoneNumber
		}

		alertify.confirm('确认新增 "'+$scope.params.name+'"，并添加 "'+$scope.params.adminName+'" 为管理员吗？',function(){
			companyHttpService.addCompany(_params).then(function(result){
			var responseData = result.data;
			if(!responseData.error){
				// $state.go('admin.companyList')
				alertify.alert('新增成功！',function(){
					$scope.submitStatusText = '完成';
					$scope.active = true;
					$state.go('admin.companyList')
				})
				}else{
					utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message)
				}
			},function(errorResult){
				alertify.alert(errorResult.error.message)
			})
		},function(){

		})
	}
})
angular.module('companyControllerModule',[])
.controller('companyController',function($scope){
	$scope.icon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';

	$scope.menuArray =[
		{
			'title':{'name':'公司管理','icon':$scope.icon},
			'permission':'ROLE_APPLICATIONADMIN',
			'menuList':[
				{'name':'公司列表','class':'','permission':'','uiS `ref':'admin.company.list','href':'companyList'}
			]
		}
	];
});
angular.module('companySchedulerControllerModule',[])
.controller('companySchedulerController',function(companyHttpService,utilFactory,$stateParams,$state,$scope){

	$scope.params = {
		'secondCompanyId':utilFactory.getSecondCompanyId(),
		'secondCompanyAdminId':utilFactory.getAccountId(),
		'secondCompanyName':utilFactory.getSecondCompanyName()
	};
	$scope.active = false;
	$scope.submitOnProgress = false;
	$scope.breadcrumbText={ 'lv1':'班车管理员'};
	$scope.searchFn = function(){
		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1','schedulerName':$scope.searchText});
	}
	$scope.addScheduler = function(formValidateIsInvalid){
		if(formValidateIsInvalid){
			return utilFactory.setDirty($scope.formValidate);
		}
		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.params.secondCompanyId,
			'secondCompanyName': $scope.params.secondCompanyName,
			'name': $scope.params.name,
			'secondCompanyAdminId':$scope.params.secondCompanyAdminId,
			'phoneNumber':$scope.params.phoneNumber
		}

		alertify.confirm('确认新增名为"'+$scope.params.name+'"的这个班车管理员?',function(){
			companyHttpService.addScheduler(_params).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					alertify.alert('新增成功！',function(){
						$state.go('admin.companyAdminScheduler',{},{reload:true});
					})
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
				$scope.submitOnProgress = false;
			},function(){})
		},function(){
			$scope.submitOnProgress = false;
		}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	};

	$scope.close = function(){ $('#myModal').modal('toggle');}

	$scope.updateScheduler = function(updateFormValidateIsInvalid){

		if(updateFormValidateIsInvalid){
			return utilFactory.setDirty($scope.updateFormValidate);
		}

		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.updateParams.secondCompanyId,
			'secondCompanyAdminId': $scope.params.secondCompanyAdminId,
			'name': $scope.updateParams.name,
			'partyId': $scope.updateParams.partyId,
			'phoneNumber': $scope.updateParams.phoneNumber,
			//'roleCode':$scope.updateParams.roleCode,
			//'status':$scope.updateParams.status
		}
		$('#myModal').modal('toggle');
		companyHttpService.updateSchedulerById(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('admin.companyAdminScheduler',{},{reload:true});
				})
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
			$scope.submitOnProgress = false;
		},function(){
			$scope.submitOnProgress = false;
		})
	};	

	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'secondCompanyAdminId': utilFactory.getAccountId(),
			'secondCompanyId': utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return companyHttpService.getSchedulerList(params)
		},
		loadData:function(){},
		dataSet:function(result){}
		//extendParams:function(){}
	}

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operateIfFlag:true,
			operate:[{
				name:'编辑',
				ngIf:function(){
					return true
				},
				fun:function(item,event){

					$scope.updateParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'phoneNumber':item.phoneNumber,
						'partyId':item.partyId
					}
					$('#myModal').modal('toggle');
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){
					console.log(1,item)
					var _deleteParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'senondCompanyName':item.secondCompanyName,
						'secondCompanyAdminId':$scope.params.secondCompanyAdminId,
						'phoneNumber':item.phoneNumber,
						'partyId':item.partyId
					}
					alertify.confirm('确认删除"'+item.name+'"?',function(){
						companyHttpService.deleteSchedulerByID(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('admin.companyAdminScheduler',{},{reload:true});
							} else{
								utilFactory.checkErrorCode(_resultData.error.statusCode)
							}
						});
					},function(){

					}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
		
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
		defaultValue:'——',
		defaultEmptyText:'还未添加任何班车管理员',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				}
	    	]
	    }
		// changeEnable:function(item){}
	}

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})
angular.module('companyHttpServiceModule',[])
.factory('companyHttpService',function($http,ROLE_CODE,localStorageFactory,APISERVICEPATH){
	var companyHttp = {};
	var companyAccount = APISERVICEPATH.companyAccount;
	var hrService = APISERVICEPATH.hrService;
	var schedulerService = APISERVICEPATH.schedulerService
	var USER_ROLE = localStorageFactory.getObject('account',null);
	
	companyHttp.addCompany = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'adminName':paramsObj.adminName,
				//'operateAccountId': paramsObj.applicationAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'companyCode':'9'
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};
	
	companyHttp.getCompanyList = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount+paramsObj.applicationAdminId+'/parentCompanyId/'+paramsObj.secondCompanyId+'/companyCode/9',
			paramsList:{
				'companyName': paramsObj.companyName,
				'phoneNumber': paramsObj.phoneNumber,
				// 'schedulerId': paramsObj.applicationAdminId,
				// 'parentCompanyId':paramsObj.secondCompanyId,
				'pageNumber': paramsObj.pageNumber,
				'pageSize':paramsObj.pageSize
				// 'companyCode':'3'
			}
		};

		console.log(1,paramsData)

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	companyHttp.updateCompanyByID = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
			  'affiCompanyId': paramsObj.secondCompanyId,
			  'affiCompanyName': paramsObj.secondCompanyName,
			  'name': paramsObj.companyName,
			  'adminName':paramsObj.adminName,
			  'adminPartyId':paramsObj.userId,
			  'operateAccountId': paramsObj.applicationAdminId,
			  'partyId': paramsObj.companyId,
			  'phoneNumber': paramsObj.phoneNumber,
			  'status': '1',
			  'companyCode':'9'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	companyHttp.deleteCompanyByID = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			paramsList:{
			  'affiCompanyId': paramsObj.secondCompanyId,
			  'affiCompanyName': paramsObj.secondCompanyName,
			  'name': paramsObj.companyName,
			  'adminName':paramsObj.adminName,
			  'adminPartyId':paramsObj.userId,
			  'operateAccountId': paramsObj.applicationAdminId,
			  'partyId': paramsObj.companyId,
			  'phoneNumber': paramsObj.phoneNumber,
			  'status': '2',
			  'companyCode':'9'
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	companyHttp.addHR = function(paramsObj){
		
		var paramsData = {
			'apiPath':hrService,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
			//	'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	companyHttp.getHrList = function(paramsObj){
		var paramsData = {
			'apiPath':hrService+'superAdminId/'+paramsObj.secondCompanyAdminId+'/userCompanyId/'+paramsObj.secondCompanyId,
			paramsList:{
				'hrName': paramsObj.hrName,
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	companyHttp.deleteHrByID = function(paramsObj){
		var paramsData = {
			'apiPath':hrService,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName ||'111',
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'partyId':paramsObj.hrId,
				'status': '2'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	companyHttp.updateHrById = function(paramsObj){
		var paramsData = {
			'apiPath':hrService,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'partyId':paramsObj.hrId
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	companyHttp.addScheduler = function(paramsObj){
		
		var paramsData = {
			'apiPath':schedulerService,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	companyHttp.getSchedulerList = function(paramsObj){
		var paramsData = {
			'apiPath':schedulerService+'superAdminId/'+paramsObj.secondCompanyAdminId+'/userCompanyId/'+paramsObj.secondCompanyId,
			paramsList:{
				'schedulerName': paramsObj.schedulerName,
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber
				// 'superAdminId': paramsObj.secondCompanyAdminId,
				// 'userCompanyId':paramsObj.secondCompanyId
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	companyHttp.deleteSchedulerByID = function(paramsObj){
		var paramsData = {
			'apiPath':schedulerService,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'partyId':paramsObj.partyId,
				'status': '2'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	companyHttp.updateSchedulerById = function(paramsObj){
		var paramsData = {
			'apiPath':schedulerService,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'affiCompanyName': paramsObj.secondCompanyName,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.secondCompanyAdminId,
				'phoneNumber': paramsObj.phoneNumber,
				'partyId':paramsObj.partyId
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};
	return companyHttp;
});
angular.module('companyAdminControllerModule',[])
.controller('companyAdminController',function($scope){
	$scope.icon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';
	$scope.menuArray =[
		{
			'title':{'name':'公司管理','icon':$scope.icon,'class':'secondAdmin'},
			'permission':'ROLE_SECONDADMIN',
			'menuList':[
				{'name':'乘客管理员','class':'','permission':'','uiSref':'companyAdmin.HR','href':'hr'},
				{'name':'班车管理员','class':'','permission':'','uiSref':'companyAdmin.scheduler','href':'scheduler'}
			]
		}
	];
});
angular.module('companyDetailControllerModule',[])
.controller('companyDetailController',function(companyHttpService,utilFactory,$stateParams,$state,$scope){
	if($stateParams.secondCompanyId){

		$scope.params = {
			'secondCompanyId': $stateParams.secondCompanyId,
			'companyName': $stateParams.companyName,
			'adminName':$stateParams.adminName,
			'companyId': $stateParams.companyId,
			'userId':$stateParams.userId,
			'applicationAdminId': $stateParams.applicationAdminId,
			'companyId': $stateParams.companyId,
			'phoneNumber': $stateParams.phoneNumber
		};
		$scope.active = false;
		$scope.active_one = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={
			'lv1':'公司列表',
			'lv2':'公司详情'
		}
	}else{
		$state.go('company.list')
	}

	$scope.editCompany = function(flag){
		$scope.active = !flag; 
	};

	$scope.editCompanyName = function(flag){ 
		$scope.active_one = !flag; 
	};

	$scope.updateCompany = function(){
		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId': $scope.params.secondCompanyId,
			'companyName': $scope.params.companyName,
			'adminName':$scope.params.adminName,
			'companyId': $scope.params.companyId,
			'userId':$scope.params.userId,
			'applicationAdminId': $scope.params.applicationAdminId,
			'companyId': $scope.params.companyId,
			'phoneNumber': $scope.params.phoneNumber
		}

		companyHttpService.updateCompanyByID(_params).then(function(result){
			$scope.submitOnProgress = false;
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功!',function(){
					// $state.go('admin.companyList')
					$scope.active = false;
					$scope.active_one = false;
					$scope.$apply();
				})
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		},function(){})
	};
})
angular.module('companyListControllerModule',[])
.controller('companyListController',function(loadData,companyHttpService,utilFactory,$state,$scope){
	
	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	if(!loadData.data.error &&(!loadData.data.value || !loadData.data.value.list.length)){
		$scope.dataIsEmpty = true;
	
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
		
	}

	$scope.pageConfigs={
		params:{
			// 'pageSize':'20',
			// 'pageNumber':'1',
			// 'pageNo': '1',
			'applicationAdminId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId(),
			// 'secondCompanyName':utilFactory.getSecondCompanyName()
		},
		list:null,
		getList:function(params){
			return companyHttpService.getCompanyList(params)
		},
		loadData:function(){},
		dataSet:function(result){
			if(result.value != null){
				var _result = result.value;
				for(var i=0;i<_result.length;i++){
					_result[i]['status'] =_result[i]['status'] == 0?'未激活':'已激活'
				}
			}
		}
	}
	$scope.selectAllStatus = false;
	$scope.queryByKeyObj = {
		'active':{'key':'companyName','value':'公司名称'},
		'list':[{'key':'phoneNumber','value':'管理员手机'}]
	}

	$scope.selectKey = function(activeObj){
		$scope.queryByKeyObj.list.length = 0;
		$scope.queryByKeyObj.list.push( {'key':$scope.queryByKeyObj.active.key,'value':$scope.queryByKeyObj.active.value})
		$scope.queryByKeyObj.active.key = activeObj.key;
		$scope.queryByKeyObj.active.value = activeObj.value;

		$('.dropdown-menu').css('display','none')
	}

	$scope.searchFn = function () {
		var _searchParams = {
			// 'pageSize':'20',
			// 'pageNumber':'1',
			// 'pageNo': '1',
			'applicationAdminId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId(),
			'secondCompanyName':utilFactory.getSecondCompanyName()
		}
		_searchParams[$scope.queryByKeyObj.active.key] = $scope.searchText;
		//$scope.pageConfigs.getList(_searchParams)
		$scope.$broadcast('refreshPageList',_searchParams);
	}
	$scope.showQueryKeyList = function(){
		$('.dropdown-menu').css('display','block')
	}

	$scope.addCompany = function(){
		$state.go('admin.companyAdd',{'applicationAdminId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'secondCompanyName':utilFactory.getSecondCompanyName()})
	};

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看详情',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _params = {
						'secondCompanyId': item.secondCompanyId,
						'companyName': item.name,
						'adminName':item.adminName,
						'companyId': item.partyId,
						'userId':item.adminPartyId,
						'applicationAdminId': utilFactory.getAccountId(),
						'secondCompanyName':utilFactory.getSecondCompanyName(),
						'phoneNumber': item.adminPhoneNumber
					}
					$state.go('admin.companyDetail',_params);
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){

					var _deleteParams = {
						'secondCompanyId': item.secondCompanyId,
						'companyName': item.name,
						'adminName':item.adminName,
						'companyId': item.partyId,
						'userId':item.adminPartyId,
						'applicationAdminId': utilFactory.getAccountId(),
						'secondCompanyName':utilFactory.getSecondCompanyName(),
						'phoneNumber': item.adminPhoneNumber
					}

					alertify.confirm('确认删除"'+item.name+'"吗?',function(){
						companyHttpService.deleteCompanyByID(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('admin.companyList',{},{reload:true});
							} else{
								utilFactory.checkErrorCode(_resultData.error.statusCode)
							}
						});
					},function(){

					}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
		
				}
			}]
		},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'公司名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'adminName','value':'管理员'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'adminPhoneNumber','value':'管理员手机'},
					'checkFlag':true
				}
			]
		}
		// changeEnable:function(item){}
	}

	$scope.$watch('$viewContentLoaded',function(event){
		var _params = {
			'pageSize':'20',
			'pageNumber':'1',
			'applicationAdminId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		};
		// $scope.pageConfigs.getList(_params)
  		$scope.$broadcast('refreshPageList',_params);
	});
})

/**
 * @description
 * goback component works in html files
 *
 * invoke in html file by:<go-back goPath="entry.login" params="pathParamsForGoBack"></go-back>
 * @goPath={string}:refer to module/config/route.js file,and get target place string in state('params')
 * @params={josn}:define json obj as params for the goPath
 *
 */
angular.module('breadcrumbModule',[]).directive('breadcrumbComponent',function($state){
	return {
		restrict:"EA",
		template: '<a class="breadcrumb-link" ng-click="goBack()" style="font-weight:bold;">{{breadcrumbText.lv1}}'
					+'<img style="margin-left: 5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAANCAYAAABlyXS1AAAAAXNSR0IArs4c6QAAAIZJREFUGBljmDlz5om5c+eaMGABTCwsLDl///5dhU0BI0gDSAKkgJmZOSw5OfkMzBCwJC4FcElsClAk0RVgSIIUAH0QCqQ6MCTnzZun9Pv3721MTExZKJJAHcpAHVtBEqmpqfvgkugSIOPBktgkwJIgCUZGxm1AnAkyCiQIA0xAwcnYJEAKACT1SIbDa5BdAAAAAElFTkSuQmCC"/>'
					+'</a>'
					+'<span style="font-weight:bold;">{{breadcrumbText.lv2}}</span>',
		scope:{
			gopath:'@',
			breadcrumbParams:'=',
			breadcrumbText:'=',
			goToTop:'@'
		},
		controller:function($scope){
			$scope.goBack = function(){
				if($scope.goToTop) {
					window.history.go(-2)
				}else{
					window.history.go(-1)
				}
				console.log()
				
			}
		},
		link:function(scope,elements,attrs){
			console.log(scope.breadcrumbText)
			// elements.bind('click',function(){
			// 	if(scope.gopath){
			// 		$state.go(scope.gopath,scope.breadcrumbParams)	
			// 	}else{
			// 		window.history.go(-1)
			// 	}
				
			// });
		}
	}
})	



	
angular.module('getRefreshTokenFacotryModule',[]).factory('getRefreshTokenFacotry',function(APISERVICEPATH,localStorageFactory,$http){
	var $$token = {};
	var _path = APISERVICEPATH.auths+'auth/refreshToken';
	
	function randomNum(n){ 
		 var t=''; 
		 for(var i=0;i<n;i++){ 	
			t+=Math.floor(Math.random()*10); 
		 } 
		 return t;
	}


	$$token.getRefreshToken = function(paramsObj){
		var paramsData = {
			"apiPath":_path,
			paramsList:{
					"client_id":"client_auth_mode",
					"state":randomNum(5),
					"scope":"read write",
					"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
					"response_type":"token",
					"grant_type":"refresh_token",
					"refresh_token":localStorageFactory.getObject('account',null).refreshToken
				},
			setHeader: {'ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}
		};

		return $http({method: 'POST', url:paramsData.apiPath, data:paramsData.paramsList,headers:paramsData.setHeader});
	}


	return $$token;

});
/**
 * @description
 * goback component works in html files
 *
 * invoke in html file by:<go-back goPath="entry.login" params="pathParamsForGoBack"></go-back>
 * @goPath={string}:refer to module/config/route.js file,and get target place string in state('params')
 * @params={josn}:define json obj as params for the goPath
 *
 */
angular.module('gobackModule',[]).directive('goBack',function($state){
	return {
		restrict:"EA",
		template:'<a>'
				+'<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAAAXNSR0IArs4c6QAAAKpJREFUGBl9j7ENQiEQhoUESOx1CS1dQAdwDhqmoWENG+2eG9ixhPYaKMD7jVyeyvMScgffB3eIWSecc4uc85HQQ37zNxxqrRticzEWRnBN51FKuWOhB0MI15cwBfG6+AchSJr2QANxTzwL0AK/4DmUUrWBlqXWek+bSGuVUjqjZYPIPCQgJFrRGLP13t9YQIGbPYn7T0kfAiRr7bKUMlCJdpcfYSSdqL4/AZgNcfcvzqHbAAAAAElFTkSuQmCC"/>'
				+'</a>',
		scope:{
			gopath:'@',
			params:'='
		},
		link:function(scope,elements,attrs){
			elements.bind('click',function(){
				if(scope.gopath){
					$state.go(scope.gopath,scope.params)	
				}else{
					window.history.go(-1)
				}
				
			});
		}
	}
})
/**
 * @description
 * 
 *
 */
angular.module('hasPermisstionComponent',[]).directive('hasPermission',function(localStorageFactory,$state){
	return {
		restrict:"EA",
		scope:{

		},
		link:function(scope,elements,attrs){
			var permissionRolesForCurrentAccount = localStorageFactory.getObject('account',null);
			console.log(permissionRolesForCurrentAccount+"::permissionRolesForCurrentAccount")
			var permissionArray = attrs.hasPermission.split('&');

			permissionArray.map(function(item,index){
				if(	!permissionRolesForCurrentAccount[item]){
					elements.remove()
				}
			})

		
		}
	}
})	



	
angular.module("headerModule",[]).directive('headerComponent',function(localStorageFactory,$state){
	return {
		restrict:"E",
		template:'<div class="header container-shadow-border">'
				 + '<img style="float: left;width: 46px;height: 23px; margin: 15px -10px 15px 30px;" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAXCAYAAAB0zH1SAAAAAXNSR0IArs4c6QAACKlJREFUWAnFV3tQlNcV/y27sAvLAsvKGwREXotEQzBocXw0FhrjMAE1tVNrWiZjOq1Jx87YtI5J2syktjYPa2qeJZnamKjVmEZjazBWxQcWBBERBHm/H8uyPPa9bM+56+KCG6PpH70z33zfPffec88993d+53wSeDSn01lJ3Yc8RHf9HDPboTfaMDvU/67z/sfB6xKJJGOmDtlMwb30B8Ys+KymH38r7wYpxT9+mo1g/2+k6l628zpHRl6WeB3xImzXmXCgsgeHLveiecgIXjjpBPaWd+GZFQleVnwzkZN0kj/cbdL94fmWkOENHoJ4+lZ49MVnQ9849lf04O9kcM+IBb4yCWQ+Ls12sjxCJcexZxYi/msg09k3jFff/xyPLp2P/CUPzNwGe/aVovR8LUp+twmakEDXuNPZS6fYPn2yA3y/qdOFrt4kHfvcTT0+JDicuD4Ig8lGcPCFWumLcYsdJpsDPuQW9nirzohXv2jB7vV3QHGa6p5+PSprW4Th0wZudT47VQW73YHgQI+YkUiiaLhk+nypMHyazO5w4myjDvsre+Hv54P5sSosmauGJtBPePTlf97Ef9pGULQgEulRgTBQcJ6oH8RBuo2C+RFYmT5L6LPa7Pji3FWolP5obO9D9rw5sNnt+EFBLpYuTBMGHjlZifIrN6H0lyM3Kxlt3YNYl58DmUyKzl4deLylYwBR4SFYk/cw5sZHTNnKUCGfQXjxWO0A9pX3oIIMe/0JLYqyInGhWQ+5rw++NUeNjyu68XppG/6yMRPaKBVaCecxaoXAY/Ffr6KNYuDY5mxolH5oaO5BXvEOWMmD/nJfHNj1LF774Dg6enQ4tXcbXtpzBG9+VIrk+EgR4N0DelitNrz122I8mJ6Adc/uhsVmQ2xkKJra+hAdrsYnf96CcE2QMN7H5pjEu2UdWPVGBTZ/fA1lN3XCmEIyet+lbuTtuoQn3qmCbtwKqcQHG3JikEm3sOH9auTuvICCPRWw0S1tXBSDK50G/Olkq1Dc2afDyJgRxUXLcOHAb5AYG4baG51YnpOO7oER7P20DOtXLcbpD5+nZzuWZqdC7ucLbVIMdr53VBh9aPfPwc8LPytEc0c/WKe7yUD+Pts0jKoOA4IUMpBziZutqO8dQ542DCVPPoCoYIWASh3J1mVF4cyNYZy6QUooPluGTGA+n7A4kBYZiKUpGqH7fFUjZqlVeHr9I4gKU6P6ejsM40bhzYvVjTCZrNhQsETAhBfwnGBVAJQBClTXt8FktmLT8yVwOiehN0wgkORTAUvzZb4yH2xfNReVBA9OJhxwVrtTBF33iBkm6yR5chRvnm5DTdcofrI0HpfbDSR38JmRmxSKaDqYTCrBwU1ZSA5Xsh242tCB2VEaRIaFiH5NQzvMFhsyUmLwr7M1kNK+cdGueDBbrDhb2YBFC5LFQfp1o4J1Cr6dJfZgm5QBcoKNyymsUGQN9tSW7yRi25EbZDigjQ6kQHSxop2gNE5GGum50jUmcM3Ybx6aIKaxi4Mw5z5OwepuA8OjaGzrpYBLoet3JabL11oQExGKxJhwBAUGYMJkwQu7DmLFogz8+1Idrjd14fsEHQ7mcE2wOPjq5Vli/YUrTXhq7TJyDsHhVptKdz9aHIfSuiHoJmw4/PRDOH5tEF82DMGPPJmfEYYXV1PUE+1tPVyPHYVpKM6NgzrAV1CkW5n7zVcbFhqEx5Y/KERMreyAFTlaKOR+KMpbiIraVlTVtaKhtQ/x0RrCvhY5C5KEoTt+8T38seQYXnzjMKTkSQ1BrnBlNuKiXDfESqdYhTvXe8bw+bUBbM1Lwt6L3fiIWIR5esPD0di4OBZr376M0vohoWxFqoYOkIqUiFuJghXcapO0iOlQQWzibhZiDCl5TCaVukUYGZ0QjMLYhgCFK6nxBIfDgWFygB9BShWohM+thOdePM1wFpa36nGVIJEZoyIWcSUYB3nsaE0fPrjQBc6UaylAXypIQUSQ3K3H6/tQVR/OUE7gOHpqSRy0BMmyJh2aBo34Md0wQ4xb76gFF1v08KWDWWyTQp5PxBAol+L3lNgemxeOTIKvZ5uCiluYk6jG8dpB/OqTBsEyLDfbJwXGVcQ6W/MSsWVlovC6e81XvY9e7UfHsAldejMZ5AA74DzlhQDCfRll5VfWpAnO76bxd852EJON4xFKYEEKSkB6E0IoU5+oG8RGuvGZ7Q7D2QnP5SeB65NSyogKymIWMjxBE4A/rEnFoxnhM3V47bMX+6mKlJO3n/tukgjq0+R9NmYZUWZahFJ882K+uZgQBekOE6VEZmyQKOT8/aRExX6IprGZ7Q7DeYKSr6goFTfeGqcNTUR5ary2TitS/EwFX9Vvo6xaRzHDjNVOQW0iCDDXa6lM4NpnNrEWBx5Db9unDVRGGMD022OwYOGAUcxlfM+LVnndwqvhPHPOLCVefjwNZeSlbcTzXGDdT2NDfkjZtLpzDF9SssqKC0ZksFzAxEHGLkt2cbKVbvPJRbGEZxkRgRO/zJ9DFahZsNrgmBWFC27XJ577s+EdngLP79XzwmJXZ4bfJk/Pwa/55kJsjKpIZhiuXdQBMuHFtmEjVIRhhga3doqB9851orJ9BMkEHyYGrj6DFL4YMRqRHjnlcbZzJ6/RjdtEAkrmjpcmo/CuI3mCl7G7ioYpA5spGFPClCKZceXIBViedpaATzjV7/5cW1CLpQNw5l5fUi3qnaggBXoNZkHDXHokaKZK3H7629rj3piyqcTq7aEJFno4q993Y2yPE55fWZtO7GBGJAVfC2H+DNVEXNsE0W8eMwzDZPP+OvyaMM4H4ITHMGIiOEh/WlxOeLR7u3mqdvm3roXL3vtt5DHnpdYRsYxoULyNVABR4UZyvbN/1CJklE2dNV0GJ3l22hadwybnyfohJ9VDnnL+kZ9qt1PVlMj1QSsY/430JM4Y+n91LxMyst2b/xc36BE+kCn+MwAAAABJRU5ErkJggg==">'
				 + '<h1 style="float:left;">班车管理平台</h1>'
				 + '<div style="float: right;display: inline-block; margin-top: 19px;margin-right: 30px;">'
				 + 		'<span >{{username}}</span> | '
				 + 		'<a ng-click = "loginOut()">退出</a>'
				 + '</div>'
				 +'</div>',
		controller:function($scope){
			$scope.username = localStorageFactory.getObject('account',null).phoneNumber;

			$scope.loginOut = function(){
				var permissionRolesForCurrentAccount = localStorageFactory.getObject('account',null);
				if(permissionRolesForCurrentAccount['ROLE_SYSADMIN']){
					localStorageFactory.remove('account');
					$state.go('entry.master');
				}else{
					localStorageFactory.remove('account');
					$state.go('entry.check')
				}
				
			}
		}
	}
});
angular.module('httpInterceptorModule',[])
.factory('httpInterceptor',function(localStorageFactory,$q, $injector) {  
	var httpInterceptor = {
		'request':function(request){

            console.log(1,request)
            console.log()
            var _isGaode = request.url.indexOf('http://yuntuapi.amap.com/datasearch/')

            if(_isGaode == 0){
                return request;
            }else{
                request.headers.ApplicationId ='BACKGROUND';
                request.headers['Application-Id'] = 'ED8D2C72-628A-47A6-9893-AF0B1151A8D3';
                if(localStorageFactory.getObject('account',null)){
                    request.headers.Authorization ='Bearer '+localStorageFactory.getObject('account',null).accessToken;
                    request.headers.operateAccountId =localStorageFactory.getObject('account',null).accountId;
                }
            }
	
            
            return request; 
        },
        'responseError' : function(response) {  
            console.log('http response')
            console.log(1,response)
            if (response.status === 401) { 
				alertify.alert('可能遇到问题,请稍候再试:401',function(){})
				return $q.reject(response);  
            } else if (response.status === 404) {  
               alertify.alert('可能遇到问题,请稍候再试:404',function(){}) 
				return $q.reject(response);  
            } else if (response.status === 500){
               alertify.alert('可能遇到问题,请稍候再试:500',function(){}) 
				return $q.reject(response);  
            } else if(response.status === 504 ){
				alertify.alert('响应超时,请重试:504',function(){})
				return $q.reject(response);
            } else if(response.status === 505){
				alertify.alert('HTTP error:505',function(){})
				return $q.reject(response)
            } else if(response.status === 400){
                alertify.alert('可能遇到问题,请稍候再试:400',function(){}) 
                return $q.reject(response)
            } else if(response.status === 403){
                alertify.alert('无权限访问:403',function(){}) 
            } else if(response.status){
                alertify.alert('网络异常,请稍候再试',function(){}) 
            }

        },  
        'response' : function(response) {  
            return response;  
        }  
    }  
    return httpInterceptor;  
});  

angular.module("leftNavModule",[])
.directive('leftNavComponent',function(){
	return {
		restrict:"E",
		replace:true,
		scope:true,
		template:'<div class="left-side">'
				+	'<div class="menu-list">'
				+	'	<ul class="menu-group">'
				+	'		<li ng-repeat="menuItem in menuArray track by $index" class="menuItemTitle" data-link = "{{menuItem.title.uiSref}}"  has-permission="{{menuItem.permission}}">'
				+				'<div class="title-wrapper {{menuItem.title.class}}"">'
				+       			'<img class="menu-icon" ng-src={{menuItem.title.icon}} />'
				+					'<span style = "width:70px;display:inline-block;text-align:left;">{{menuItem.title.name}}</span>'
				+				'</div>'
				+   			'<ul class="menuItemList {{menuItem.title.class}}">'
				+					'<li class="{{childMenuItem.href}}" has-permission="{{childMenuItem.permission}}" ng-repeat="childMenuItem in menuItem.menuList" ng-click="goTo(childMenuItem.uiSref,menuItem,$event)" data-link = "{{childMenuItem.uiSref}}">'
				+                    '{{childMenuItem.name}}'
				+					'</li>'
				+				'</ul>'
				+			'</li>'
				+	'	</ul>'
				+	'</div>'
				+   '</div>',
		controller:function($state,$scope,$rootScope,$location,$timeout,$window){
			// $(document).ready(function(){
			// 	if($('.menu-group > li:first-child').find('ul >li').length >1){
			// 		$('.menu-group > li:first-child').addClass('activeSelected')
			// 	}
				
			// 	$('.menuItemList > li:first-child').addClass('activeSelected');
			// 	$('.menu-group > li ul.menuItemList').css('display','none');
			// 	$('.menu-group > li:first-child ul.menuItemList').css('display','block');	
			// });

			$(document).off('click','.menuItemTitle').on('click','.menuItemTitle',function(event){
				$('.menuItemList li').removeClass('activeSelected')
				$('.menuItemTitle').removeClass('activeSelected')
				$('.cloudData').removeClass('activeSelected')
				$(this).find('ul').css('display') === 'none'?$(this).find('ul').css('display','block'):$(this).find('ul').css('display','none');
				
				console.log($(this).find('ul >li').length)
				if($(this).find('ul >li').length<1){
					console.log('xxxxxx')
					$state.go($(this).data('link'));
					$('.menuItemList li').removeClass('activeSelected')
					$(this).addClass('activeSelected')
				}else{
					$('.menuItemList li').removeClass('activeSelected')
					$(this).find('ul > li:first-child').addClass('activeSelected')
					$state.go($(this).data('link'));
				}


				// if($(this).find('ul').css('display') == 'block'){
				// 	$('.menuItemList li').removeClass('activeSelected')
				// 	$(this).find('ul > li:first-child').addClass('activeSelected')
				// 	$state.go($(this).data('link'));
				// }else{
					
				// }
			})

			$scope.goTo=function(targetState,currentMenuItemObj,event){
				$('.menuItemTitle').removeClass('activeSelected')
				$('.menuItemList li').removeClass('activeSelected')
				$(event.currentTarget).addClass('activeSelected')

				if(currentMenuItemObj && currentMenuItemObj.target === '_blank'){return false;}
				if(targetState === undefined || targetState === ''){ return }
				if(targetState === 'building'){alertify.confirm('正在努力建设中...')}
				
				event.stopPropagation();
				$state.go(targetState);
			}


		$rootScope.$watch(function(){
        	return $location.path();
        },function(newValue,oldValue){
   //      	$('.menuItemList li').removeClass('activeSelected')
			$('.cloudData').removeClass('activeSelected')
			var currentPahtArray = newValue.split('/');
			var currentActiveTab = currentPahtArray[currentPahtArray.length-1];

			var menuItemArray = $scope.menuArray;
			for(var j=0;j<menuItemArray.length;j++){
				if(menuItemArray[j]['menuList']){
					for(var i=0;i<menuItemArray[j].menuList.length;i++){
						if(menuItemArray[j].menuList[i]['href'] === currentActiveTab){
							// console.log('currentActiveTab:'+currentActiveTab)
							// console.log(1,menuItemArray[j])
							// console.log("menuItemArray[j]['title']['class']):"+menuItemArray[j]['title']['class'])
							// console.log($('.'+menuItemArray[j]['title']['class']))
							var activeTab = menuItemArray[j]['title']['class'];
							setTimeout(function(){
								$('.'+activeTab).css('display','block')
								$('.menuItemList li').removeClass('activeSelected')
								$('.'+currentActiveTab).addClass('activeSelected')
							},200)
						}
					}
				}else{
					if(menuItemArray[j]['title']['href'] === currentActiveTab){
					
							var activeTab = menuItemArray[j]['title']['class'];
							setTimeout(function(){
								$('.'+currentActiveTab).addClass('activeSelected')
							},200)
					}
				}
			}
        })
		}
	}
})
angular.module('localStorageFactoryModule',[])
.factory('localStorageFactory',function($window){
	var $$localStorage = {};
	
	$$localStorage.set = function(key, value){
		$window.localStorage[key] = value;
	};

	$$localStorage.get = function(key,defaultValue){
		return $window.localStorage[key] || defaultValue || false;
	};
	
	$$localStorage.setObject = function(key, value){
		$window.localStorage[key] = JSON.stringify(value);
	};

	$$localStorage.getObject = function(key,defaultValue){
		return $window.localStorage[key] != undefined?JSON.parse($window.localStorage[key]) : (defaultValue || false);
	};

	$$localStorage.remove = function(key){
		$window.localStorage.removeItem(key);
	};

	$$localStorage.clear = function(){
		$window.localStorage.clear();
	}

	return $$localStorage;

});
angular.module('paginationModule',[])
.directive('paginationComponent',function(TOKEN_ERROR,getRefreshTokenFacotry,utilFactory,localStorageFactory,$state,$parse,$q){
	return{
		restrict:'E',
		template:'<div class="pagination-wrapper" ng-if="pageConfigs.list.length">' 
				+'	<div class="pagination-num">'
				+'		<select ng-model="currentItemNumber" ng-class="{sleep:pageList.length==1 &&pageConfigs.list.length<21}" ng-disabled="pageList.length==1 &&pageConfigs.list.length<21" class="pagination-select" ng-options="s for s in [20,40,60,80,100]" ng-change="itemNumChange(currentItemNumber,1)"></select>'
				+'		<span>条/页</span>' 
					// <!--
					// 	<span>共{{pageTotal.length}页,<label>{{total}}</label>条</span>
					// -->
				+'	</div>'

				+'	<ul class="pagination-operate">'
			// <!-- 	<li ng-class="{no_active:pageListFlag.pre == false}"
			// 		ng-click="goToFirstOrLast(1)">首页</li> -->
				+'		<li ng-class="{no_active:pageListFlag.pre == false,sleep:pageList.length==1 &&pageConfigs.list.length<21}" ng-disabled="pageList.length==1&&pageConfigs.list.length<21" class="pageOperate" ng-click="prePageList()">上一页</li>'
				+'		<li ng-repeat="i in pageList" class="page_num {{i == currentPageIndex?\'active\':\' \'}}" ng-click="changePage(i)"> {{i}}</li>'
				+'		<li ng-class="{no_active:pageListFlag.next == false,sleep:pageList.length==1 &&pageConfigs.list.length<21}" ng-disabled="pageList.length==1 &&pageConfigs.list.length<21"  ng-click="nextPageList()">下一页</li>'
			// <!-- 		<li ng-class="{no_active:pageListFlag.next == false}"
			// 				ng-click="goToFirstOrLast(pageTotal.length)"></li> -->
				+'	</ul>'
				+'</div>',
		scope:{
			pageConfigs:'='
			// pageConfigs={
			// 	params:{},
			// 	list:null,
			// 	getList:function(){
			// 		return checkListService.getLLDList(this.params)
			// 	},
			// 	dataSet:function(){},
			// 	extendParams:function(){}
			// }
		},
		link:function(scope,elm,attrs){
			scope.$on('refreshAPI',function(){
				getListFun();
			});
			scope.currentItemNumber = '20';
			function getListFun(){
				var deffered = $q.defer();
				scope.pageConfigs.list = null;
				scope.pageConfigs.params.pageSize = scope.currentItemNumber;
				if(scope.pageConfigs.params.pageNumber){
					scope.pageConfigs.params.pageNumber = scope.currentPageIndex;
				}else if(scope.pageConfigs.params.curPage){
					scope.pageConfigs.params.curPage = scope.currentPageIndex;
				}

				var temp = [], _params={};
				for(var key in scope.pageConfigs.params){
					if(scope.pageConfigs.params[key]){
						_params[key] = scope.pageConfigs.params[key];
					}
				}

				var _params = angular.extend(_params,scope.pageConfigs.extendParams);
				scope.pageConfigs.getList(_params).then(function(data){

					if(!data) return

					if(data.data.error){
						if(data.data.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200102.code){
							getRefreshTokenFacotry.getRefreshToken().then(function(result){
								var _tokenRes = result.data;
								console.log('refreshToken result')
								console.log(1,_tokenRes)
								if(!_tokenRes.error){
									var _rewriteToken = localStorageFactory.getObject('account',null);
									_rewriteToken.accessToken = _tokenRes.accessToken;
									_rewriteToken.refreshToken = _tokenRes.refreshToken;
									localStorageFactory.setObject('account',_rewriteToken);
									scope.$broadcast('refreshAPI')
  								}else if(_tokenRes.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200105.code){
									localStorageFactory.remove('account');
									$state.go('entry.check')
								}else if(_tokenRes.error.statusCode == '0200104'){
									alertify.alert(_tokenRes.error.message)
								}else{
									utilFactory.checkErrorCode(_tokenRes.error.statusCode)
								}

							},function(){
								
							});
						}else if(data.data.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200105.code){
							localStorageFactory.remove('account');
							$state.go('entry.check')
						}else if( data.data.error.statusCode == '0200104'){
							alertify.alert(data.data.error.message)
						}else {
							console.log("data.data.error.statusCode:"+data.data.error.statusCode)
							utilFactory.checkErrorCode(data.data.error.statusCode)
						}
					}else{
						var _total;
						var data = data.data;
							// if(scope.pageConfigs.dataSet){
						// 	scope.pageConfigs.dataSet(data)
						// }
						if(scope.pageConfigs.dataSet && data.value){
							// scope.pageConfigs.dataSet(data);
							if(scope.pageConfigs.dataSet && data.value.list.length){
								scope.pageConfigs.dataSet(data);
							}
						}

						if(!data.value) {
							_total = '1'
							scope.pageConfigs.list = null;
						}else if (!data.value.list){
							_total = '1'
							scope.pageConfigs.list = null;
						}else{
							scope.pageConfigs.list = data.value.list;
							_total = data.value.totalNumber
						}

						// if(!data.value.totalNumber){
						// 	_total = '1'
						// }else if (data.value == undefined){
						// 	_total = data.value.length;
						// }


						deffered.resolve(_total);
					}

				},function(errorMessage){
					scope.pageConfigs.list = null
				});

				return deffered.promise;
			}

			function refreshData(pageIndex){
				scope.pageToTotalStart = pageIndex-1;
				scope.currentPageIndex = pageIndex;
				getListFun().then(function(total){
					scope.total = total;
					scope.pageTotal = returnArr();
					scope.pageList = returnShowListArr();
					judgePreNext();
				});
			}

			function judgePreNext(){
				scope.pageListFlag.pre = scope.currentPageIndex ==1?false:true;
				scope.pageListFlag.next = scope.currentPageIndex == scope.pageTotal.length?false:true;
			}

			function returnArr(){
				var arr = [];
				var max = Math.ceil(scope.total / scope.currentItemNumber);
				for(var i=1;i<=max ;i++){
					arr.push(i)
				}

				if(max == 0){
					arr.push(1);
				}
				return arr;
			}

			function returnShowListArr(){
				return scope.pageTotal.slice(scope.pageToTotalStart,scope.pageToTotalStart+scope.pageTotalListNum);
			}

			scope.pageToTotalStart = 0;
			scope.pageTotalListNum=5
			scope.pageTotal = [];
			scope.pageList = [];
			scope.pageListFlag = {
				pre:false,
				next:false
			}

			scope.nextPageList = function(){
				if(scope.currentPageIndex < scope.pageTotal.length){
					var _num = scope.currentPageIndex +1;
					if(parseInt(scope.pageToTotalStart) < 
					   (scope.pageTotal[scope.pageTotal.length-1]-scope.pageTotalListNum) &&
					   scope.currentPageIndex == scope.pageList[scope.pageList.length-1]){
						scope.pageToTotalStart ++;
						scope.pageList = returnShowListArr();

					}
					scope.changePage(_num);
				}
			};

			//上一页
			scope.prePageList = function(){
				if(scope.currentPageIndex > 1){
					var _num = scope.currentPageIndex -1;
					if(parseInt(scope.pageToTotalStart) >=
						parseInt(scope.pageTotal[0])&&
						scope.currentPageIndex == scope.pageList[0]){
						scope.pageToTotalStart --;
						scope.pageList = returnShowListArr();
					}
					scope.changePage(_num)
				}
			};

			scope.itemNumChange = function(num,page){
				var _page = parseInt(page);
				scope.currentItemNumber = parseInt(num);
				refreshData(_page);
			}

			// /scope.itemNumChange(scope.pageConfigs.params.pageSize,scope.pageConfigs.params.pageNo);

			scope.changePage = function(num){
				scope.currentPageIndex = num;
				judgePreNext();
				getListFun().then(function(total){
					if(scope.total !=total){
						scope.total = total;
						scope.pageTotal = returnArr();
						scope.pageList = returnShowListArr();
					}
				})
			}

			scope.goToFirstOrLast = function(){
				// if(scope.currentPageIndex != pageNum){
				// 	scope.pageTotalStart = pageNum == 1?0:pageNum-3<0?pageNum-2:pageNum-3;
				// 	scope.pageList = returnShowListArr();
				// 	scope.changePage(pageNum);
				// }
			}

			scope.$on('refreshPageList',function(e,d){
				if(d){
					scope.pageConfigs.params = angular.extend(scope.pageConfigs.params,d);
					var _obj = d ||{pageSize:scope.currentItemNumber,pageNo:1};
					scope.itemNumChange(_obj.pageSize,_obj.pageNo)
				}
			});
		}
	}
})
/**
 * @description
 */
angular.module('searchByTextModule',[]).directive('searchByText',function($state){
	return {
		restrict:"EA",
		template:'<div class="search-wrapper ">'
					+'<input type="text" name="" placeholder="站点名称" ng-model="searchText">'
					+'<div class="searchImage" ng-click="searchFn()">'
					+'<img style="vertical-align: baseline;"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAV5JREFUKBWNUT1Lw1AUbZ4kSzsLikMNios6mIQYI/gDuhqqkyIoDi7+AN110sFVECfBqbh1MHQJIQmCuggSWhAXF6FL2kDjuTW3FKnohZdz77nv3I8XqZCbbduTnU7nKMsyC1RZkqRnYL1UKp24rpvwPUJBH03TKkmSBBC0ZFneVBRlAqJDxFPtdvvBNM1Zujcw6gDROxKLA3LI0XV9B8d3HGeMaYGRjhGc+77/yOQwhmF4iY4fcRxXmRcgljFSjYlRKISoYVzatW+0UzlN01Yej4Rer9dE8WlOkugJVeaZ+AUXcOeFc+gs6gj2mPiJeAAFgm10uuOcKBaLpyBWDMPYZZKRBHiAC8RvURTdMy+RY1nWTLfbvUbFTxSgpZugaeQtHNp3CVw1CIIG/O+f63neq6qqq4ivcOZw9iEeBx7gySvAdcQ3mGYNfqHfiZy/DD/Yxp1bdNz4t4iK5sKzLwtCfTE0zEQeAAAAAElFTkSuQmCC"/>'
					+'</div>'
					+'</div>',
		scope:{
			gopath:'@',
			params:'='
		},
		link:function(scope,elements,attrs){

			scope.searchFn = function(){

			}
		}
	}
})
/**
 * @description
 * smsCode component works in login/forget.html and login/active.html
 *
 * invoke in html file by:<sms-code-component phone-number="phoneNumber"request-type="requestType" sleep='true'></sms-code-component>
 * @phone-number={string}:get value from parent controller
 * @request-type={string}:--
 * @sleep={booleans}: true => init component status by "获取验证码",false => init component status by "重新获取"
 *
 */
angular.module('smsCodeModule',[]).directive('smsCodeComponent',function(loginHttpService,REQUESTTYPE,$state,utilFactory){
	return {
		restrict:"EA",
		template:'<button  id="smsCodeBtn" class="btn-normal" ng-class="{\'smsActive\': isActive,\'smsSheep\': !isActive}"  ng-click="invokeSmsCode()">{{defaultValue}}</button>',
		scope:{
			phoneNumber:'=phoneNumber',
			requestType:'=requestType',
			smsCode:'=smsCode',
			defaultValue:'@defaultValue',
			requestType:'@requestType',
			codeStatus:'=codeStatus',
			sleep:'@'
		},
		link:function(scope,elements,attrs){
			var time = 60;
			var countTime="";
			var _forgetFlag=false;
			scope.defaultValue == '获取验证码'?_forgetFlag = true:_forgetFlag=false;
			clearTimeout(countTime);
			scope.invokeSmsCode = function(){
				time = 60;
				scope.isActive = true; //disabled click event when get smsCode progress working.
				var _type = scope.requestType == 'forget'? REQUESTTYPE.forgetAccount : REQUESTTYPE.activeAccount
				loginHttpService.account({'phoneNumber':scope.phoneNumber,'requestType':_type}).then(function(result){
					var responseData = result.data;
					if(!responseData.error){
						setTime('smsCodeBtn',time,scope.defaultValue);
						scope.smsCode = responseData.value.smsCode;
						scope.codeStatus = "验证码已发送至"+scope.phoneNumber
					}else{
						utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message)
						scope.activeText = "激活";
						scope.isActive = true;
						scope.disabled = false;
					}
				},function(error){
					alertify.alert('可能遇到问题,请稍侯再试',function(){})
					scope.activeText = "激活";
					scope.disabled = false;
				});
			}

			function setTime(postion,totalTime,defaultValue){
				if(totalTime ==0 && _forgetFlag){
					scope.isActive = false;
					document.getElementById(postion).removeAttribute("disabled");
					document.getElementById(postion).innerHTML = '获取验证码';
					document.getElementById(postion).removeAttribute("class");
					document.getElementById(postion).setAttribute('class','btn-normal smsSheep');
					_forgetFlag = false;
					clearTimeout(countTime);
					return;
				}

				if(totalTime == 0 && !_forgetFlag){
					scope.isActive = false;
					document.getElementById(postion).removeAttribute("disabled");
					document.getElementById(postion).innerHTML = '重新获取';
					document.getElementById(postion).removeAttribute("class");
					document.getElementById(postion).setAttribute('class','btn-normal smsSheep');
					clearTimeout(countTime);
					return;
				}else{
					scope.isActive = true;
					document.getElementById(postion).setAttribute('disabled','disabled');
					document.getElementById(postion).innerHTML='重新获取('+totalTime+')';
					document.getElementById(postion).removeAttribute("class");
					document.getElementById(postion).setAttribute('class','btn-normal smsActive');
					clearTimeout(countTime);
					totalTime--;
				}

				countTime = setTimeout(function(){
					setTime(postion,totalTime);
				},1000);
			}

			if(scope.sleep){
				setTime('smsCodeBtn',0);
			}else{
				setTime('smsCodeBtn',60)
			}
		}
	}
})
/**
 * @description
 * smsCode component works in login/forget.html and login/active.html
 *
 * invoke in html file by:<sms-code-component phone-number="phoneNumber"request-type="requestType" sleep='true'></sms-code-component>
 * @phone-number={string}:get value from parent controller
 * @request-type={string}:--
 * @sleep={booleans}: true => init component status by "获取验证码",false => init component status by "重新获取"
 *
 */
angular.module('tableComponentModule',[]).directive('tableComponent',function(loginHttpService,$state){
	return {
		restrict:"EA",
		template:'	<div class="table-wrapper">'
				+' 	    <div class="table-head">'
				+'		 	<span class="first-operate" ng-if="stableFlag.checkbox"></span>'
				+'			<span ng-repeat="head in tableConfig.head">{{head["selfKey"]["value"]}}</span>'
				+'			<span ng-if="tableConfig.operateIfFlag">操作</span>'
				+'		</div>'
				+'		<ul class="table-body">'
				+'			<li class="list-item" ng-repeat="item in tableData track by $index">'
				+'				<span class="first-operate" ng-if="stableFlag.checkbox">'
				+'					<input type="checkbox" id="item{{$index}}" id="item{{$index}}" ng-model="selectObj.checkArray[$index]" ng-click="selectObj.checkIsAllSelect(selectObj.checkArray[$index])" ng-disabled="tableConfig.changeEnable && tableConfig.changeEnable(item)" data-disable="{{tableConfig.changeEnable && tableConfig.changeEnable(item)}}" />'
				+'				    <label for="item{{$index}}" class="check-box"></label>' 
				+'				</span>'
				+'				<span ng-repeat="head in tableConfig.head">{{(item[head.parentKey]?item[head.parentKey][head.selfKey.key] :item[head.selfKey.key] )|| tableConfig.defaultValue}}</span>'
				// +'				<span ><a>编辑</a></span>'
				+'				<span class="item-operate"  ng-click="preventPropagation($event)" ng-if="tableConfig.operateIfFlag || (stableFlag.operate && stableFlag.operate.length !=0)">'
				
				+'					  <a class="operateBtnForTableList" ng-click="o.fun(item,$event)" ng-repeat="o in stableFlag.operate"  ng-if="tableConfig.operateIfFlag && (o.ngIf(item) || o.ngIf ==undefined)">{{o.name}}</a> '     	
				+'				</span>'
				+'			</li>'
				+'		</ul>'
				// +'  <div ng-if="tableData.length == null" style="text-align: center;margin-top: 50px;">数据加载中...</div>'
				+'  <div ng-if="tableData.length==0" style="text-align: center;margin-top: 50px;"><h3 class="emptyTitle">{{tableConfig.defaultEmptyText}}</h3></div>'
				+'  <div ng-if="!tableData==null" style="text-align: center;margin-top: 50px;">数据加载中...</div>',
		scope:{
			tableConfig:'=',
			tableData:'='
		},
		link:function(scope,elements,attrs){

			scope.headOptional = scope.tableConfig.setHeadOptional;
			scope.stableFlag = scope.tableConfig.stableFlag;
			scope.tableConfig.defaultValue = scope.tableConfig.defaultValue || null;
			scope.tableConfig.defaultEmptyText = scope.tableConfig.defaultEmptyText || '暂无数据';
			if(scope.headOptional){ //generate head title for table component
				scope.setHeadOptionalFn={
					checkArray:scope.headOptional.selectOptions,
					minOptionalNum:scope.headOptional.selectOptions.cancelSelectNum || 5,
					returnHead:function(obj){
						var _headArray = [];
						for(var i=0;i<obj.length;i++){
							if(obj[i].checkFlag == true){
								_headArray.push(obj[i]);
							}
						}
						return _headArray;
					},
					isSelectAllHeadITems:function(){},
					selectItem:function(){},
					ensureSelect:function(){}
				};
				scope.tableConfig.head = scope.setHeadOptionalFn.returnHead(scope.headOptional.selectOptions);
			}


			if(scope.stableFlag.checkbox){
				scope.selectObj = {
					allSelecteFlag:false,
					checkArray:[],
					selectAll:function(){
						var _element='';
						for(var i=0;i<this.checkArray.length;i++){
							_element = "#item"+i;
							this.checkArray[i]=this.allSelecteFlag;
                            var _status = angular.element(document.getElementById(_element)).data('disable')
							if(_status == true &&this.allSelecteFlag){

								this.checkArray[i] = false;
							}
						}
					},
					checkIsAllSelect:function(flag){
						var _isAllSelectFlag = 0;
						var _array = this.checkArray;
						var _length = _array.length;
						if(flag == false){
							this.allSelecteFlag = false;
						}else{
							for(var i=0;i<_length;i++){
								if(_array[i]==flag){
									_isAllSelectFlag++;
								}else{
									return _isAllSelectFlag;
								}
							}

							if(_isAllSelectFlag == _length){
								this.allSelecteFlag = true;
							}
						}
					}
				}

				scope.$on('checkboxSelectAll',function(n,o){
					scope.selectObj.selectAll();
				})
			};


			scope.$watch('tableData',function(n,o){
				if(n === null) return;
				if(scope.stableFlag.checkbox){
					scope.selectObj.allSelectFlag =false;
					//scope.selectObj.checkArray = scope.tableConfig.checkbox.checkArray;
				}
				// if(_beginWidth == 0){
				// 	scope.autoColumnWidth = computeFun.getAutoWidth(n,scope.tableConfig.head)
				// }
			});			
		}
	}
})







angular.module('utilFactoryModule',[])
.factory('utilFactory',function(localStorageFactory,SMSCODE_ERROR,ERRORCODE_CONSTANT,ROLE_CODE,USER_ACCOUNT,FORGET_ACCOUNT_ERROR,CHECK_ACCOUNT_ERROR,LOGIN_ACCOUNT_ERROR,ACTIVE_ACCOUNT_ERROR,TOKEN_ERROR,$http,$state,$window){
	var fn = {};
	
	fn.getLocalTime = function(timestamp){

	    var time = new Date(parseInt(timestamp));
        var year = time.getFullYear();
        var month = (time.getMonth() + 1) > 9 && (time.getMonth() + 1) || ('0' + (time.getMonth() + 1));
        var day = time.getDate() > 9 && time.getDate() || ('0' + time.getDate());
        var hour = time.getHours() > 9 && time.getHours() || ('0' + time.getHours());
        var minute = time.getMinutes() > 9 && time.getMinutes() || ('0' + time.getMinutes());
        var YmdHm = month + '/' + day + '/'+ year + ' ' + hour + ':' + minute;
        return YmdHm;
	}
	fn.getCurrentMonth = function(timestamp){

	    var time = new Date(parseInt(timestamp));
        var year = time.getFullYear();
        var month = (time.getMonth() + 1) > 9 && (time.getMonth() + 1) || ('0' + (time.getMonth() + 1));
        var Ym = year + '/' + month;
        return Ym;
	}
	fn.getCurrentDate = function(timestamp){

	    var time = new Date(parseInt(timestamp));
        var year = time.getFullYear();
        var month = (time.getMonth() + 1) > 9 && (time.getMonth() + 1) || ('0' + (time.getMonth() + 1));
        var day = time.getDate() > 9 && time.getDate() || ('0' + time.getDate());
        var Ymd = year + '/' + month + '/'+ day;
        return Ymd;
	}
 	fn.getCurrentTime = function(timestamp){
	    var time = new Date(parseInt(timestamp));
        var hour = time.getHours() > 9 && time.getHours() || ('0' + time.getHours());
        var minute = time.getMinutes() > 9 && time.getMinutes() || ('0' + time.getMinutes());
        var Hm = hour + ':' + minute;
        return Hm;
	}
 		
 	fn.getTimestamp = function(localTime){
 		return new Date(localTime).getTime();
 	}
	fn.getNewDate = function(countDay) {
		var dd = new Date();
		var now = dd.setDate(dd.getDate()+countDay);//获取2天后的日期
		var y = dd.getFullYear();
		var m = dd.getMonth()+1;//获取当前月份的日期
		var d = dd.getDate();
		return y+"-"+m+"-"+d;
	};
 	fn.getAccountId = function(){
 		return localStorageFactory.getObject('account',null).accountId;
 	}

 	fn.getSecondCompanyId = function(){
 		return localStorageFactory.getObject('account',null).secondCompanyId;
 	}

 	fn.getSecondCompanyName = function(){
 		return localStorageFactory.getObject('account',null).secondCompanyName;
 	}
 	fn.assignRole = function(RoleListArray){
 		for(var i=0;i<RoleListArray.length;i++){
			switch(RoleListArray[i]){
				case ROLE_CODE.ROLE_CODE_SYSADMIN:USER_ACCOUNT.ROLE_SYSADMIN = true
					break;
				case ROLE_CODE.ROLE_CODE_HR:USER_ACCOUNT.ROLE_HR = true
					break;
				case ROLE_CODE.ROLE_CODE_SCHEDULER:USER_ACCOUNT.ROLE_SCHEDULER = true
					break;
				case ROLE_CODE.ROLE_CODE_PASSENGER:USER_ACCOUNT.ROLE_PASSENGER = true
					break;
				case ROLE_CODE.ROLE_CODE_DRIVER:USER_ACCOUNT.ROLE_DRIVER = true
					break;
				case ROLE_CODE.ROLE_CODE_APPLICATIONADMIN:USER_ACCOUNT.ROLE_APPLICATIONADMIN = true
					break;
				case ROLE_CODE.ROLE_CODE_SECONDADMIN:USER_ACCOUNT.ROLE_SECONDADMIN = true
					break;
			}
		}
 	}
 	//  Check emprty form and provide error messages to user about each input filed 
 	fn.setDirty = function(form){ 
 		return (function(form) {
		   angular.forEach(form, function(value, key) {
		   	console.log('--------')
		   	  console.log(1,form[key])
		      if(!/^\$/.test(key)) form[key].$setDirty()
		    })
  		})(form)
 	}
 	fn.checkErrorCode = function(errorCode,errorMessage){
 	// fn.checkErrorCode = function(type, errorCode,errorMessage){
 		// var CONSTANT = {
			// ERRORCODE_CONSTANT: ERRORCODE_CONSTANT,
			// SMSCODE_ERROR: SMSCODE_ERROR,
			// ERRORCODE_CONSTANT: ERRORCODE_CONSTANT,
			// ROLE_CODE: ROLE_CODE,
			// USER_ACCOUNT: USER_ACCOUNT,
			// FORGET_ACCOUNT_ERROR: FORGET_ACCOUNT_ERROR,
			// CHECK_ACCOUNT_ERROR: CHECK_ACCOUNT_ERROR,
			// LOGIN_ACCOUNT_ERROR: LOGIN_ACCOUNT_ERROR,
			// ACTIVE_ACCOUNT_ERROR: ACTIVE_ACCOUNT_ERROR,
			// TOKEN_ERROR: TOKEN_ERROR	
 		// }

 		// alertify.alert(CONSTANT[type][ERROR_CODE_ + errorCode].message,function(){})

 		switch(errorCode){
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100201.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100301.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100301.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0900100102.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0900100102.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0900100104.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0900100104.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0900100101.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0900100101.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800100201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800100201.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100401.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100401.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100402.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100402.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100203.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100203.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800200101.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800200101.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800200301.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800200301.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800100101.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800100101.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800100103.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800100103.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800100401.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800100401.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0800100402.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800100402.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_1000100302.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_1000100302.message,function(){})
 				break;
 				// wrong
 			case TOKEN_ERROR.STATUS_CODE_0200201.code: alertify.alert(TOKEN_ERROR.STATUS_CODE_0200101.message,function(){$state.go('entry.check')})
 				break;
 			case TOKEN_ERROR.STATUS_CODE_0200102.code: alertify.alert(TOKEN_ERROR.STATUS_CODE_0200102.message,function(){$state.go('entry.check')})
 				break;
 			case TOKEN_ERROR.STATUS_CODE_0200105.code:alertify.alert(TOKEN_ERROR.STATUS_CODE_0200105.message,function(){$state.go('entry.check')})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600700202.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600700202.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600900201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600900201.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600100101.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600100101.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600100201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600100201.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600700201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600700201.message,function(){})
 				break;
 			// case ERRORCODE_CONSTANT.ERROR_CODE_0800100601.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0800100601.message,function(){})
 			// 	break;

 			case ERRORCODE_CONSTANT.ERROR_CODE_0600800201.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600800201.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600800202.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600800202.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_0600800203.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_0600800203.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_08005001001.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_08005001001.message,function(){})
 				break; 		
 			case ERRORCODE_CONSTANT.ERROR_CODE_08005003001.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_08005003001.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_08005003002.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_08005003002.message,function(){})
 				break;
 			case ERRORCODE_CONSTANT.ERROR_CODE_08005004002.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_08005004002.message,function(){})
 				break;		
 			case ERRORCODE_CONSTANT.ERROR_CODE_08005004004.code :alertify.alert(ERRORCODE_CONSTANT.ERROR_CODE_08005004004.message,function(){})
 				break;	
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_401.code:alertify.alert(CHECK_ACCOUNT_ERROR.STATUS_CODE_401.message,function(){})
				break;
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100103.code:alertify.alert(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100103.message,function(){})
				break;
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100101.code:alertify.alert(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100101.message,function(){})
				break;
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100108.code:alertify.alert(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100108.message,function(){})
				break;
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100102.code:alertify.alert(CHECK_ACCOUNT_ERROR.STATUS_CODE_0100102.message,function(){})
				break;
			case CHECK_ACCOUNT_ERROR.STATUS_CODE_0100110.code:alertify.alert( CHECK_ACCOUNT_ERROR.STATUS_CODE_0100110.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200108.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200108.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200109.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200109.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200110.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200110.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200111.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200111.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200112.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200112.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200101.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200101.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200104.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200104.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200107.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200107.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200106.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200106.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200108.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200108.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200109.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200109.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200110.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200110.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200111.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200111.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200112.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200112.message,function(){})
				break;
			case LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200301.code:alertify.alert(LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200301.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100113.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100113.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100115.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100115.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100106.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100106.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100109.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100109.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100112.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100112.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200108.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200108.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200109.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200109.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200110.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200110.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200111.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200111.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200112.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200112.message,function(){})
				break;
			case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100107.code:alertify.alert(ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0100107.message,function(){})
				break;
			// case ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200104.code:alertify.alert('激活成功',function(){ $state.go('entry.login')})
			// 	break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100112.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100112.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100109.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100109.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200107.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200107.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200106.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200106.message,function(){})
				break;
			// case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200104.code: $state.go('entry.login')
			// 	break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200108.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200108.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200109.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200109.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200110.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200110.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200111.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200111.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200112.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200112.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100113.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100113.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100115.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100115.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0100106.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0100106.message,function(){})
				break;
			case FORGET_ACCOUNT_ERROR.STATUS_CODE_0200101.code:alertify.alert(FORGET_ACCOUNT_ERROR.STATUS_CODE_0200101.message,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100108.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100108.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100110.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100110.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0200108.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0200108.message,responseData,function(){})
			break;
			case SMSCODE_ERROR.STATUS_CODE_0200109.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0200109.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0200110.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0200110.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0200111.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0200111.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0200112.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0200112.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100107.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100107.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100102.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100102.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100103.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100103.message,responseData,function(){})
				break;
			case SMSCODE_ERROR.STATUS_CODE_0100101.code:alertify.alert(SMSCODE_ERROR.STATUS_CODE_0100101.message,responseData,function(){})
				break;
 			default:alertify.alert(errorCode + ':'+errorMessage,function(){})
 		}


 	}

 	fn.updateExpireToken = function(){
 		var _responseStatus = {
 			'expire':true
 		}
		getRefreshTokenFacotry.getRefreshToken().then(function(result){
			var _tokenRes = result.data;
			if(!_tokenRes.error){
				var _rewriteToken = localStorageFactory.getObject('account',null);
				_rewriteToken.accessToken = _tokenRes.accessToken;
				_rewriteToken.refreshToken = _tokenRes.refreshToken;
				localStorageFactory.setObject('account',_rewriteToken);
				_responseStatus.expire = false
				return _responseStatus;
			}else if(_tokenRes.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200105.code){
				localStorageFactory.remove('account');
				_responseStatus.expire = true
				return _responseStatus;
			}else if(_tokenRes.error.statusCode == '0200104'){
				alertify.alert(_tokenRes.error.message)
			}

		},function(){
			console.log('xxxxx')
		});

		return _responseStatus;
 	}

	return fn;

}).filter('tomin',function(){
	return function(inputArray){
		console.log('xxxxxx')
		console.log(1,inputArray)
		if(inputArray.length){
			for(var i=0;i<inputArray.length;i++){
				console.log(inputArray[i].departureTime )
				if(inputArray[i].departureTime){
					inputArray[i]['departureTime'] = inputArray[i].departureTime / 60 / 1000;
				}
            	
        	}
		}
        return inputArray;
	}
});
angular.module("activeControllerModule",[])
.controller("activeController",function(loginHttpService,ACTIVE_ACCOUNT_ERROR,REQUESTTYPE,utilFactory,localStorageFactory,USER_ACCOUNT,$scope,$state,$stateParams){

	if(!$stateParams.phoneNumber){
		$state.go('entry.check');
	}else{
		$scope.phoneNumber = $stateParams.phoneNumber;
		$scope.smsCode = $stateParams.smsCode;
		$scope.codeStatus = "验证码已发送至"+$scope.phoneNumber;
	}
	
	$scope.activeText = "激活";
	$scope.disabled = false;
	$scope.passwordStatus = false;

	$scope.displayPasswordStatus = function(passwordPosition,passwordStatus){
		if(passwordStatus){
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = false:$scope.passwordFirst=false;
			document.getElementById(passwordPosition).setAttribute('type',"password");
		}else{
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = true:$scope.passwordFirst=true;
			document.getElementById(passwordPosition).setAttribute('type',"text");
		}		
	}	

	$scope.login = function(){
		
		var regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/);

		if(!$scope.smsCode){
			alertify.alert('请输入验证码');
			return;
		}

		if(!$scope.password){
			alertify.alert('请输入密码');
			return;
		}

		if(!regex.test($scope.password)){
			alertify.alert('请输入8-32位密码,必须由数字,字母以及至少包含一个大写字母组成。');
			return;
		}

		if(!$scope.twicePassword){
			alertify.alert('请输入确认密码')
			return;
		}
		
		if($scope.twicePassword == $scope.password){
			$scope.activeText = "激活中...";
			$scope.disabled = true;
			loginHttpService.smsCode({'phoneNumber':$scope.phoneNumber,'requestType':REQUESTTYPE.activeAccount,'smsCode':$scope.smsCode,'password':$scope.password})
			.then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					var tokenObjList = result.data.value;
					if(tokenObjList.roles){
						var _getRoleArray = tokenObjList.roles.split("$");
						
						USER_ACCOUNT.ROLE_HR = false;
						USER_ACCOUNT.ROLE_SCHEDULER = false;
						USER_ACCOUNT.ROLE_SECONDADMIN = false;
						USER_ACCOUNT.ROLE_APPLICATIONADMIN = false;
						USER_ACCOUNT.phoneNumber = $scope.phoneNumber;
						USER_ACCOUNT.accessToken = tokenObjList.accessToken;
						USER_ACCOUNT.refreshToken = tokenObjList.refreshToken;
						USER_ACCOUNT.accountId = tokenObjList.accountId;
						USER_ACCOUNT.secondCompanyId = tokenObjList.secondCompanyId;
						utilFactory.assignRole(_getRoleArray);
						localStorageFactory.remove('account');
						localStorageFactory.setObject('account',USER_ACCOUNT);

						if(USER_ACCOUNT.ROLE_HR || USER_ACCOUNT.ROLE_SCHEDULER){
							return $state.go('admin.passenger.list');
						}
						
						if(USER_ACCOUNT.ROLE_SECONDADMIN){
							return $state.go('admin.companyAdminHR');
						}

						if(USER_ACCOUNT.ROLE_APPLICATIONADMIN){
							return $state.go('admin.companyList')
						}

						if(USER_ACCOUNT.ROLE_DRIVER){
							return alertify.alert('未分配权限,请联系统管理员',function(){
								$scope.activeText = "激活";
								$scope.disabled = false;
								$scope.$apply();
							});
						}

						if(USER_ACCOUNT.ROLE_PASSENGER){
							return alertify.alert('未分配权限,请联系统管理员',function(){
								$scope.activeText = "激活";
								$scope.disabled = false;
								$scope.$apply();
							})
						}
					}
				}else{
					if (responseData.error.statusCode == ACTIVE_ACCOUNT_ERROR.STATUS_CODE_0200104.code) {
						alertify.alert('激活成功',function(){ $state.go('entry.login')})
					}else{
						utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message)
					}
					
					$scope.activeText = "激活";
					$scope.disabled = false;
				}
			},function(error){
				alertify.confirm(error.data.message,function(){})
				$scope.activeText = "激活";
			});	
		}else {
			alertify.alert('密码不一致');
			$scope.activeText = "激活";
		}
	}
});
angular.module("checkControllerModule",[])
.controller("checkController",function(localStorageFactory,loginHttpService,utilFactory,CHECK_ACCOUNT_STATUS,$scope,$state){
	$scope.btnMessage = "下一步";
	$scope.checkNumber = function(e){
		//var myreg = "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$";
		var myreg=/^[0-9][0,1,2,3,4,5,6,7,8,9][0-9]{9}$/; 
		var phoneNumber = $scope.phoneNumber;

		if(!phoneNumber){
			alertify.alert('请输入手机号',function(){});
			return 
		}
        if(phoneNumber && !phoneNumber.match(myreg)) {
        	alertify.alert('请输入正确的手机号码');
        	return
        } else{
        	$scope.btnMessage = "获取权限中...";
        	$scope.disabled= true;

        	loginHttpService.account({'phoneNumber':$scope.phoneNumber,'requestType':0}).then(function(result){

        		var responseData = result.data;
        		var accountActiveObj = responseData.value;
				// check user phone number.and if user account is the first time to login.
				// will provide term popup and after user confirm it. will go to active page
				// requestType 0 :active ,requestType 1: login
				function checkTerm(accountActiveObj){
					console.log('accountActiveObj.termAndConditionFlag:'+accountActiveObj.termAndConditionFlag)
					console.log('accountActiveObj')
					console.log(1,accountActiveObj)
					if(!accountActiveObj.termAndConditionFlag){		
						var _termAndConditionFlagParams = {
							'phoneNumber': $scope.phoneNumber,
							'termAndConditionId':accountActiveObj.termAndConditionId,
							'lastUpdateTermAndConditionTime':accountActiveObj.lastUpdateTermAndConditionTime
						}
						loginHttpService.getTerms().then(function(result){ // Get Terms content

							var _resultData = result.data;
							var _title = _resultData.title;
							var _body  = _resultData.text;

							alertify.confirm( '<div style="max-height: 400px; overflow: auto;width: 440px;box-sizing: content-box;>'+_title+_body+'</div>',function(){
								loginHttpService.termcondition(_termAndConditionFlagParams).then(function(result){
									var _resultData = result.data;
									// Only active account will sent smscode
									if(!_resultData.error && accountActiveObj.status != CHECK_ACCOUNT_STATUS.accountLogin){
										var _obtainSMSCodeParams = {
											'phoneNumber': $scope.phoneNumber,
											'accountStatus':accountActiveObj.status
										}
										loginHttpService.obtainSMSCode(_obtainSMSCodeParams).then(function(result){
											var _obtainSMSCodeResult = result.data;
											if(!_obtainSMSCodeResult.error){
												$state.go('entry.active',{'phoneNumber':$scope.phoneNumber,'requestType':'0','smsCode':_obtainSMSCodeResult.value.smsCode})
											}else{
												utilFactory.checkErrorCode(_obtainSMSCodeResult.error.statusCode,_obtainSMSCodeResult.error.message)
												$scope.btnMessage = "下一步";
												$scope.disabled=false;
											}
										})
									}else if(!_resultData.error && accountActiveObj.status ==CHECK_ACCOUNT_STATUS.accountLogin){
										$state.go('entry.login',{'phoneNumber':$scope.phoneNumber,'requestType':'1'})
									}else if(_resultData.error){
										if(_resultData.error.statusCode == "0100114" || _resultData.error.statusCode == "0200202"){
											var _obtainSMSCodeParams = {
												'phoneNumber': $scope.phoneNumber,
												'accountStatus':accountActiveObj.status
											};
											
											loginHttpService.obtainSMSCode(_obtainSMSCodeParams).then(function(result){
												var _obtainSMSCodeResult = result.data;
												if(!_obtainSMSCodeResult.error){
													$state.go('entry.active',{'phoneNumber':$scope.phoneNumber,'requestType':'0','smsCode':_obtainSMSCodeResult.value.smsCode})
												}else{
													utilFactory.checkErrorCode(_obtainSMSCodeResult.error.statusCode,_obtainSMSCodeResult.error.message)
													$scope.btnMessage = "下一步";
													$scope.disabled=false;
												}
											})

										}else{
											utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.message)
											$scope.btnMessage = "下一步";
											$scope.disabled=false;
										}

									}
								})
							},function(){
								$scope.btnMessage = "下一步";
								$scope.$apply();
							}).set({labels:{ok:'接受', cancel: '拒绝'}, padding: true});

						});
					}else{
						if(accountActiveObj.status == CHECK_ACCOUNT_STATUS.accountLogin){
							$state.go('entry.login',{'phoneNumber':$scope.phoneNumber,'requestType':'1'})
						}
						

						if(accountActiveObj.status == CHECK_ACCOUNT_STATUS.accountActive){
							var _obtainSMSCodeParams = {
								'phoneNumber': $scope.phoneNumber,
								'accountStatus':CHECK_ACCOUNT_STATUS.accountActive
							}

							loginHttpService.obtainSMSCode(_obtainSMSCodeParams).then(function(result){
								var _obtainSMSCodeResult = result.data;
								if(!_obtainSMSCodeResult.error){
									$state.go('entry.active',{'phoneNumber':$scope.phoneNumber,'requestType':'0','smsCode':_obtainSMSCodeResult.value.smsCode})
								}else{
									utilFactory.checkErrorCode(_obtainSMSCodeResult.error.statusCode,_obtainSMSCodeResult.error.message)
									$scope.btnMessage = "下一步";
									$scope.disabled=false;
								}
							})
						}
						
					}
				}

				if(!responseData.error){
					checkTerm(accountActiveObj);
				}else{
					utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.statusContext)
					$scope.btnMessage = "下一步";
					$scope.disabled=false;
				}
			},function(error){
				alertify.alert('可能遇到问题，请稍候再试',function(){})
			});
        }	
	}
});
angular.module("forgetControllerModule",[])
.controller("forgetController",function(utilFactory,loginHttpService,REQUESTTYPE,FORGET_ACCOUNT_ERROR,LOGIN_ACCOUNT_ERROR,$scope,$state,$stateParams){
	if(!$stateParams.phoneNumber){
		$state.go('entry.check')
	}

	$scope.passwordStatus = false; //default status for password false:hidden,true:show
	$scope.phoneNumber=$stateParams.phoneNumber;
	$scope.requestType=REQUESTTYPE.forgetAccount;
	$scope.restText="重置密码";
	
	$scope.pathParamsForGoBack={
		phoneNumber:$scope.phoneNumber,
		requestType:$scope.requestType
	}
	
	$scope.disabled=false;
	$scope.displayPasswordStatus = function(passwordPosition,passwordStatus){
		if(passwordStatus){
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = false:$scope.passwordFirst=false;
			document.getElementById(passwordPosition).setAttribute('type',"password");
		}else{
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = true:$scope.passwordFirst=true;
			document.getElementById(passwordPosition).setAttribute('type',"text");
		}
	}

	$scope.restPassword = function(){
console.log('code', FORGET_ACCOUNT_ERROR.STATUS_CODE_0200101.code)

		//var regex = new RegExp( /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,32}$/);
		var regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/);

		if(!$scope.smsCode){
			alertify.alert('请输入验证码');
			return;
		}

		if(!$scope.password){
			alertify.alert('请输入密码');
			return;
		}
		if(!regex.test($scope.password)){
			alertify.alert('请输入8-32位密码,必须由数字,字母以及至少包含一个大写字母组成。');
			return;
		}

		if(!$scope.twicePassword){
			alertify.alert('请输入确认密码')
			return;
		}
		
		if($scope.twicePassword == $scope.password){
			$scope.restText="正在重置...";
			$scope.disabled=true;

			loginHttpService.smsCode({'phoneNumber':$scope.phoneNumber,'requestType':REQUESTTYPE.forgetAccount,'smsCode':$scope.smsCode,'password':$scope.password})
			.then(function(result){
				var responseData = result.data;
				console.log(responseData.error.statusCode)
				if(!responseData.error){
					alertify.alert('密码重置成功,请重新登录',function(){
						$state.go('entry.login',{"phoneNumber":$scope.phoneNumber})
					})
				}
				if(responseData.error.statusCode == LOGIN_ACCOUNT_ERROR.STATUS_CODE_0200104.code){
					$state.go('entry.login')
				} else if(responseData.error.statusCode == FORGET_ACCOUNT_ERROR.STATUS_CODE_0100113.code){
					alertify.alert('重置密码可能遇到问题，请稍后再试。',function(){
						return
					})
				} else if(responseData.error.statusCode == FORGET_ACCOUNT_ERROR.STATUS_CODE_0100101.code){
					alertify.alert('无效的手机号',function(){
						return
					})
				} else if(responseData.error.statusCode == FORGET_ACCOUNT_ERROR.STATUS_CODE_0200101.code){
					alertify.alert('无效的请求',function(){
						return
					})
				} else{
					utilFactory.checkErrorCode(responseData.error.statusCode)
					$scope.restText="重置密码";
					$scope.disabled = false;
				}
				
				$scope.restText="重置密码";
				$scope.disabled = false;
			},function(error){
					alertify.alert(error.data.message,function(){});
					$scope.restText="重置密码";
					$scope.disabled=false;
			});	
		}else {
			alertify.alert('密码不一致');
		}
	}

});



angular.module("loginControllerModule",[])
.controller("loginController",function(loginHttpService,USER_ACCOUNT,utilFactory,localStorageFactory,$scope,$state,$stateParams){

	if($stateParams.phoneNumber){
		$scope.phoneNumber = $stateParams.phoneNumber;	
	}else{
		$state.go('entry.check')	
	}

	$scope.smsCode = $stateParams.smsCode;
	$scope.loginText="登录";
	$scope.passwordStatus = false;

	$scope.login = function(){

		$scope.disabled = true;
		if($scope.password){
			$scope.loginText = "登录中...";
			loginHttpService.login({'phoneNumber':$stateParams.phoneNumber,'password':$scope.password})
			.then(function(result){
				var responseData = result.data;

				if(!responseData.error){
					loginHttpService.accessToken({'code':responseData.value.authCode}).then(function(result){
						var tokenObjList = result.data.value;
						console.log('role')
						console.log(1,tokenObjList)
						if(tokenObjList.roles){
							var _getRoleArray = tokenObjList.roles.split("$");
							USER_ACCOUNT.ROLE_HR = false;
							USER_ACCOUNT.ROLE_SCHEDULER = false;
							USER_ACCOUNT.ROLE_SECONDADMIN = false;
							USER_ACCOUNT.ROLE_APPLICATIONADMIN = false;
							USER_ACCOUNT.phoneNumber = $scope.phoneNumber;
							USER_ACCOUNT.accessToken = tokenObjList.accessToken;
							USER_ACCOUNT.refreshToken = tokenObjList.refreshToken;
							USER_ACCOUNT.accountId = tokenObjList.accountId;
							USER_ACCOUNT.secondCompanyId = tokenObjList.secondCompanyId;
							USER_ACCOUNT.secondCompanyName = tokenObjList.secondCompanyName;
							localStorageFactory.remove('account');
							utilFactory.assignRole(_getRoleArray);
							localStorageFactory.setObject('account',USER_ACCOUNT);
							if(USER_ACCOUNT.ROLE_HR || USER_ACCOUNT.ROLE_SCHEDULER ){
								return $state.go('admin.cloudData');
							}


							
							if(USER_ACCOUNT.ROLE_SECONDADMIN){
								return $state.go('admin.companyAdminHR');
							}

							if(USER_ACCOUNT.ROLE_APPLICATIONADMIN){
								return $state.go('admin.companyList')
							}

							if(USER_ACCOUNT.ROLE_DRIVER){
								return alertify.alert('未分配权限,请联系统管理员',function(){
									$scope.loginText = "登录";
									$scope.disabled = false;
									$scope.$apply();
								});
								
							}

							if(USER_ACCOUNT.ROLE_PASSENGER){
								return alertify.alert('未分配权限,请联系统管理员',function(){
									$scope.loginText = "登录";
									$scope.disabled = false;
									$scope.$apply();
								})
							}
							
						}
					})

				}else{
					utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message)
					$scope.loginText = "登录";
					$scope.disabled = false;
				}

			},function(errorResult){
				var errorResponseData = errorResult.data.error;
				utilFactory.checkErrorCode(errorResponseData.statusCode,errorResponseData.message)
				$scope.loginText = "登录";
				$scope.disabled = false;
			});
		}else{
			alertify.alert('请输入密码',function(){
				$scope.loginText = "登录";
				$scope.disabled = false;
				$scope.$apply();
			})
		}		
	}

	$scope.forgetPassword = function(){
		if($scope.phoneNumber){
			$state.go('entry.forget',{'phoneNumber':$scope.phoneNumber,'requestType':$stateParams.requestType})
		}else{
			alert('手机号不能为空')
		}
	}
});
'use strict'
angular.module('loginHttpServiceModule',[]).factory('loginHttpService',function($http,APISERVICEPATH){
	var loginHttp = {};
	var auths = APISERVICEPATH.auths;
 	
	/**
	 * @description
	 * check user phonenumbser status,if user recorded in system already, go to step 2(login progress)
	 * invoke list:(modules/login/check.controller.js,modules/components/smscode.directive.js)
	 */
	loginHttp.account = function(paramsObj){ 
		var paramsData = {
			"apiPath":auths+paramsObj.phoneNumber+'/requestType/'+paramsObj.requestType,
			paramsList:{
				// "phoneNumber":paramsObj.phoneNumber,
				// "requestType":paramsObj.requestType
			}
		}

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};


	loginHttp.getTerms = function(){
		var paramsData = {
			"apiPath":'./data/terms.json'
		}

		return  $http({ method: 'GET',url:paramsData.apiPath});		
	}

	loginHttp.obtainSMSCode = function(paramsObj){ 
		var paramsData = {
			"apiPath":auths+'auth/smsCode',
			paramsList:{
				"phoneNumber":paramsObj.phoneNumber,
				"requestType":'0',
				"accountStatus":paramsObj.accountStatus
			}
		}
		return $http({method: 'GET', url:paramsData.apiPath,params:paramsData.paramsList});
	};
	loginHttp.termcondition = function(paramsObj){ 
		var paramsData = {
			"apiPath":auths+'termcondition/'+paramsObj.phoneNumber+'/tcId/'+paramsObj.termAndConditionId+'/tcTime/'+paramsObj.lastUpdateTermAndConditionTime,
			paramsList:{
				//"phoneNumber":paramsObj.phoneNumber,
				// "termAndConditionId":paramsObj.termAndConditionId,
				// "latestUpdateTime":paramsObj.lastUpdateTermAndConditionTime
			}
		}
		return $http({method: 'GET', url:paramsData.apiPath});
	};

	function randomNum(n){ 
	 var t=''; 
	 for(var i=0;i<n;i++){ 	
		t+=Math.floor(Math.random()*10); 
	 } 
	 return t; 
	} 
	
	/**
	 * @description
	 * loginController(modulles/login/login.controller.js) will invoke this function,and store token from server side.
	 **/
	loginHttp.login = function(paramsObj){
		var paramsData = {
			"apiPath":auths+'auth/authcode',
			paramsList:{
				"username":paramsObj.phoneNumber,
				"password":paramsObj.password,
				"client_id":"client_auth_mode",
				"grant_type":"password",
				"state":randomNum(5),
				"scope":"read write",
				"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
				"response_type":"code"
			},
			setHeader: {'ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}
		}

		return $http({method: 'POST', url:paramsData.apiPath, data:paramsData.paramsList,headers:{'Content-type':'application/json','ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}});
	}

	loginHttp.masterLogin = function(paramsObj){
		var paramsData = {
			"apiPath":auths+'auth/admin/login',
			paramsList:{
				"client_id":"client_auth_mode",
				"grant_type":"password",
				"password":paramsObj.password,
				"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
				"response_type":"token",
				"scope":"read write",
				"state":randomNum(5),
				"username":paramsObj.userName
			},
			setHeader: {'ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}
		}

		return $http({method: 'POST', url:paramsData.apiPath, data:paramsData.paramsList,headers:{'Content-type':'application/json','ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}});
	}

	loginHttp.accessToken = function(paramsObj){
		var paramsData = {
			"apiPath":auths+'accessToken',
			paramsList:{
				"client_id":"client_auth_mode",
				"state":randomNum(5),
				"scope":"read write",
				"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
				"response_type":"token",
				"grant_type":"authorization_code",
				"code":paramsObj.code
			},
			setHeader: {'ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}
		}
		return $http({method: 'POST', url:paramsData.apiPath, data: paramsData.paramsList,headers:{'Content-type':'application/json','ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}});
	}



	/**
	 * @description
	 * acitve.controller(modules/login/acitve.controller.js) will invoke this function,and store token from server side.
	 **/
	loginHttp.smsCode = function(paramsObj){
		var paramsData = {
			"apiPath":auths+'auth/smsCode',
			paramsList:{
				// "phoneNumber":paramsObj.phoneNumber,
				// "password":paramsObj.password,
				"requestType":paramsObj.requestType,
				"smsCode":paramsObj.smsCode,
				"grant_type":"password",
				"username":paramsObj.phoneNumber,
				"password":paramsObj.password,
				"client_id":"client_auth_mode",
				"state":randomNum(5),
				"scope":"read write",
				"redirect_uri":"http://f-shuttlebus-authentication-management.apps.cl-cn-north-preprod01.cf.ford.com/api/v1/",
				"response_type":"code"
			},
			setHeader: {'ApplicationId':'BACKGROUND','Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest'}
		}

		return  $http({ method: 'POST',url:paramsData.apiPath,data:paramsData.paramsList,headers:paramsData.setHeader});
	}
	

	loginHttp.passwordReset = function(paramsObj){
		var paramsData = {
			"apiPath":auths+'auth/admin/password',
			paramsList:{
				"password": paramsObj.password,
  				"phoneNumber": paramsObj.phoneNumber,
				"previousPassword": paramsObj.previousPassword
			},
			setHeader: {'ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}
		}

		return $http({method: 'POST', url:paramsData.apiPath, data:paramsData.paramsList,headers:{'Content-type':'application/json','ApplicationId':'BACKGROUND','X-Requested-With':'XMLHttpRequest'}});
	}
	return loginHttp;
});
angular.module("masterLoginControllerModule",[])
.controller("masterLoginController",function(loginHttpService,USER_ACCOUNT,utilFactory,localStorageFactory,$scope,$state,$stateParams){

	// if($stateParams.phoneNumber){
	// 	$scope.phoneNumber = $stateParams.phoneNumber;	
	// }else{
	// 	$state.go('entry.check')	
	// }

	$scope.smsCode = $stateParams.smsCode;
	$scope.loginText="登录";
	$scope.passwordStatus = false;

	$scope.login = function(){

		$scope.disabled = true;
		if($scope.password){
			$scope.loginText = "登录中...";
			loginHttpService.masterLogin({'userName':$scope.userName,'password':$scope.password})
			.then(function(result){
				var responseData = result.data;

				if(!responseData.error){
					$state.go('admin.master')
				}else{
					utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message)
					$scope.loginText = "登录";
					$scope.disabled = false;
				}

			},function(errorResult){
				var errorResponseData = errorResult.data.error;
				utilFactory.checkErrorCode(errorResponseData.statusCode,errorResponseData.message)
				$scope.loginText = "登录";
				$scope.disabled = false;
			});
		}else{
			alertify.alert('请输入密码',function(){
				$scope.loginText = "登录";
				$scope.disabled = false;
				$scope.$apply();
			})
		}		
	}
});
angular.module("masterLoginControllerModule",[])
.controller("masterLoginController",function(loginHttpService,ROLE_CODE,USER_ACCOUNT,utilFactory,localStorageFactory,$scope,$state,$stateParams){

	// if($stateParams.phoneNumber){
	// 	$scope.phoneNumber = $stateParams.phoneNumber;	
	// }else{
	// 	$state.go('entry.check')	
	// }
	$scope.loginText="登录";
	$scope.passwordStatus = false;
	$scope.disabled=false;
	$scope.displayPasswordStatus = function(passwordPosition,passwordStatus){
		console.log(passwordPosition)
		console.log(passwordStatus)
		if(passwordStatus){
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = false:$scope.passwordFirst=false;
			document.getElementById(passwordPosition).setAttribute('type',"password");
		}else{
			passwordPosition == 'passwordSecond'?$scope.passwordSecond = true:$scope.passwordFirst=true;
			document.getElementById(passwordPosition).setAttribute('type',"text");
		}
	}
	$scope.login = function(){

		$scope.disabled = true;
		if($scope.password){
			$scope.loginText = "登录中...";
			loginHttpService.masterLogin({'userName':$scope.userName,'password':$scope.password})
			.then(function(result){
				var responseData = ''
				if(result.data){
					responseData = result.data;
				}else{
					return
				} 

				if(!responseData.error){

					var lastUpdateTime = utilFactory.getTimestamp(responseData.value.lastUpdatePasswordTime);
					var now = Date.parse(new Date());
					var daysDifference = (now - lastUpdateTime) / 1000 / 60 / 60 / 24;

					if(daysDifference < 90) {

						utilFactory.assignRole(ROLE_CODE.ROLE_CODE_SYSADMIN);
						USER_ACCOUNT.phoneNumber = $scope.userName;
						USER_ACCOUNT.accessToken = responseData.value.accessToken;
						USER_ACCOUNT.refreshToken = responseData.value.refreshToken;
						USER_ACCOUNT.accountId = responseData.value.accountId;
						USER_ACCOUNT.secondCompanyName = responseData.value.secondCompanyName;
						USER_ACCOUNT.secondCompanyId = responseData.value.secondCompanyId;
						localStorageFactory.remove('account');
						localStorageFactory.setObject('account',USER_ACCOUNT);

						$state.go('admin.master');
					} else {
						alertify.alert('您的密码已过期，请重置密码！',function(){
							$scope.disabled = false;
							$state.go('entry.reset',{'userName':$scope.userName,'password':$scope.password});
						}).set('label', '重置密码');
					}
					// 'label', 'Alright!'
					// {label:'重置密码'}
					
				}else{
					$scope.loginText = "登录";
					$scope.disabled = false;
					utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message)

				}

			},function(errorResult){
				$scope.loginText = "登录";
				$scope.disabled = false;
				utilFactory.checkErrorCode(errorResponseData.statusCode,errorResponseData.message)

			});
		}else{
			alertify.alert('请输入密码',function(){
				$scope.loginText = "登录";
				$scope.disabled = false;
				$scope.$apply();
			})
		}		
	}

	
});
angular.module("resetPasswordControllerModule",[])
.controller("resetPasswordController",function($scope,$state,$stateParams,RESET_ACCOUNT_ERROR,utilFactory,loginHttpService){
                                              

	$scope.passwordStatus = false; //default status for password false:hidden,true:show
	$scope.restText="重置";

	
	$scope.disabled=false;
	$scope.displayPasswordStatus = function(passwordPosition,passwordStatus){
		var _input = document.getElementsByTagName('Input');
		console.log(_input);
		for(var i=0;i<_input.length;i++) {		 
			if(passwordStatus){
				if(passwordPosition == 'passwordOld') {
					$scope.passwordOld = false;
				}else if(passwordPosition == 'passwordFirst') {
					$scope.passwordFirst = false;
				} else {
					$scope.passwordSecond = false;
				}
				document.getElementById(passwordPosition).setAttribute('type',"password");
			}else{
				if(passwordPosition == 'passwordOld') {
					$scope.passwordOld = true;
				} else if(passwordPosition == 'passwordFirst') {
					$scope.passwordFirst = true;
				} else {
					$scope.passwordSecond = true;
				}
				document.getElementById(passwordPosition).setAttribute('type',"text");
			}		 
		}	
	}

	$scope.restPassword = function(){

		//var regex = new RegExp( /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,32}$/);
		var regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/);		
		
		if($stateParams.userName){
			console.log($stateParams.userName);
		}
		if(!$scope.previousPassword){
			alertify.alert('请输入旧密码').set('label', '确定');
			return;
		}
		if(!$scope.password){
			alertify.alert('请输入新密码').set('label', '确定');
			return;
		}
		if(!regex.test($scope.password)){
			alertify.alert('请输入8-32位密码,必须由数字,字母以及至少包含一个大写字母组成。').set('label', '确定');
			return;
		}
		if(!$scope.twicePassword){
			alertify.alert('请输入确认密码').set('label', '确定');
			return;
		}

		
		if($scope.previousPassword == $scope.password) {
			alertify.alert('旧密码与新密码不能相同').set('label', '确定');
			return;			
		}

		if($scope.twicePassword == $scope.password){
			$scope.restText="正在重置...";
			$scope.disabled=true;

			loginHttpService.passwordReset({'phoneNumber':$stateParams.userName,'password':$scope.password,'previousPassword':$scope.previousPassword})
			.then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					alertify.alert('密码重置成功,请重新登录',function(){
						$state.go('entry.master')
					}).set('label', '确定');
				}else{
					if(responseData.error.statusCode == RESET_ACCOUNT_ERROR.STATUS_CODE_0200101.code){
						alertify.alert('旧密码不正确',function(){}).set('label', '确定');						
					} else if(responseData.error.statusCode == RESET_ACCOUNT_ERROR.STATUS_CODE_0200110.code) {
						alertify.alert('无效的用户',function(){}).set('label', '确定');
					} else if(responseData.error.statusCode == RESET_ACCOUNT_ERROR.STATUS_CODE_0100113.code) {
						alertify.alert('重置密码可能遇到问题，请稍候再试',function(){}).set('label', '确定');
					} else {
						utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.message);
					}
					$scope.restText="重置密码";
					$scope.disabled = false;
				}
			},function(error){
					alertify.alert(error.data.message,function(){}).set('label', '确定');
					$scope.restText="重置密码";
					$scope.disabled=false;
			});	
		}else {
			alertify.alert('密码不一致').set('label', '确定');
		}
	}

});



angular.module('feedbackControllerModule',[]).controller('feedbackController',function($scope,passengerHttpService,utilFactory){
	$scope.pageConfigs={
		params:{
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId(),
			'pageSize':'20',
			'pageNumber':'1'
		},
		list:null,
		getList:function(params){
			return passengerHttpService.getPassengerFeedback(params)
		},
		loadData:function(){},
		dataSet:function(result){
			var _data = result.value.list;
			console.log("_data"+_data);
			for(var i =0;i<_data.length;i++){
				_data[i]['routeType'] =_data[i]['routeType'] == 'AM'?'上行':'下行';
				_data[i]['routeTemplateName'] =  _data[i]['routeTemplateName']+'(' +_data[i]['routeType'] +')'+' - '+ _data[i]['vehicleLicensePlate']+' - '+ _data[i]['driverName']
				_data[i]['beginTime'] = utilFactory.getCurrentTime((_data[i]['beginTime']));
				_data[i]['bookingCount'] = _data[i]['bookingCount'] ? _data[i]['bookingCount'] : '0'
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
			// operate:[{
			// 	name:'编辑',
			// 	ngIf:function(){},
			// 	fun:function(item){
			// 		var _params = {
			// 			'secondCompanyId': item.secondCompanyId,
			// 			'employeeId': item.employeeId,
			// 			'name': item.name,
			// 			'phoneNumber': item.phoneNumber,
			// 			'schedulerId':  item.accountId,
			// 			'status': item.status,
			// 			'passengerId': item.partyId
			// 		}
			// 		$state.go('admin.passenger.detail',_params);
			// 	}
			// },
			// {
			// 	name:'删除',
			// 	ngIf:function(){},
			// 	fun:function(item){
			// 		alertify.alert('正在建设中...')
			// 	}
			// }]
		},
		// height:290,
		// head:[{name:'文件名',key:'filename'}],
		// className:function(flag){},
		// clickFun:function(){},
		// rowClickFun:function(item){},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		// radioSelect:function(){},
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'id','value':'反馈编号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'passengerName','value':'员工姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'routeTemplateName','value':'乘车历史'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'rate','value':'星级'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'commentContent','value':'反馈内容'},
					'checkFlag':true
				}
			]
		}
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})
angular.module('listControllerModule',[]).controller('listController',function(loadData,passengerHttpService,localStorageFactory,utilFactory,APISERVICEPATH,$scope,$state,$window){

	var uploadPassengerUrl = APISERVICEPATH.passengerAccount+'batching/?affiCompanyId='+utilFactory.getSecondCompanyId()+'&affiCompanyName='+encodeURI(utilFactory.getSecondCompanyName())+'&accountId='+utilFactory.getAccountId();
	
	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	if(!loadData.data.error && !loadData.data.value ){
		$scope.dataIsEmpty = true;
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
	}

	$scope.selectAllStatus = false;
	$scope.queryByKeyObj = {
		'active':{'key':'name','value':'员工姓名'},
		'list':[{'key':'phoneNumber','value':'手机号'}]
	}

	$scope.selectKey = function(activeObj){
		$scope.queryByKeyObj.list.length = 0;
		$scope.queryByKeyObj.list.push( {'key':$scope.queryByKeyObj.active.key,'value':$scope.queryByKeyObj.active.value})
		$scope.queryByKeyObj.active.key = activeObj.key;
		$scope.queryByKeyObj.active.value = activeObj.value;

		$('.dropdown-menu').css('display','none')
	}

	$scope.showQueryKeyList = function(){
		$('.dropdown-menu').css('display','block')
	}

	$scope.searchFn = function(){
		var _searchParams = {
			'pageSize':'20',
			'pageNumber':'1',
			'pageNo': '1',
			'hrId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		}
		_searchParams[$scope.queryByKeyObj.active.key] = $scope.searchText;
		$scope.pageConfigs.getList(_searchParams);
		$scope.$broadcast('refreshPageList',_searchParams);
	}

	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'hrId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return passengerHttpService.passenger(params);
		},
		loadData:function(){
		//	console.log('load data'
		},
		dataSet:function(result){
			var _result = result.value.list;
			for(var i=0;i<_result.length;i++){
				_result[i]['status'] =_result[i]['status'] == 0?'未激活':'已激活'
			}
		}
		//extendParams:function(){}
	}



	$scope.downloadTemplate = function(){
		passengerHttpService.downloadTemplateFile().then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '乘客批量导入模板');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})
	}
	// $scope.selectAll = function(){
	// 	//$scope.tableConfig.checkbox.selectAll = true;
	// 	alertify.alert('正在建设中....')
	// 	var _selectAllStatus  = !$scope.selectAllStatus;
	// 	$scope.$broadcast('checkboxSelectAll',{'status':_selectAllStatus})
	// }

	// $scope.deletePassenger = function(){alertify.alert('正在建设中....')};

	$scope.addPassenger = function(){
		console.log('xxx')
		$state.go('admin.passenger.add',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
	};

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看详情',
				ngIf:function(){
					return true
				},
				fun:function(item){
					
					var _params = {
						'secondCompanyId': item.secondCompanyId,
						'employeeId': item.employeeId,
						'name': item.name,
						'phoneNumber': item.phoneNumber,
						// 'schedulerId':  item.accountId,
						'status': item.status,
						// 'passengerId': item.accountId,
						'passengerId': item.partyId,
						'defaultRouteName': item.defautRouteName,
						'defaultStationName': item.defautStationName
					}
					console.log(1,_params);
					$state.go('admin.passenger.detail',_params);
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _params = {
						'secondCompanyId': item.secondCompanyId,
						'employeeId': item.employeeId,
						'name': item.name,
						'phoneNumber': item.phoneNumber,
						'schedulerId':  item.accountId,
						'status': item.status,
						'passengerId': item.partyId
					}
					alertify.confirm('确定删除名为"'+item.name+'"的乘客?',function(){
						passengerHttpService.deletePassengerByID(_params).then(function(result){
							var _resultData = result.data
							if(!_resultData.error){
								$state.go('admin.passenger.list',{},{reload:true})
							}else{
								utilFactory.checkErrorCode(_resultData.error.statusCode)
							}
						});
					})
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
		defaultValue:'——',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'员工姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautStationName','value':'默认站点'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautRouteName','value':'默认线路'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'status','value':'激活状态'},
					'checkFlag':true
				}
			]
		}
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});


		$(document).ready(function(){
			var uploader = new plupload.Uploader({
			runtimes : 'html5,flash,silverlight,html4',
			browse_button : 'pickfiles', // you can pass an id...
			container: document.getElementById('container'), // ... or DOM Element itself
			url : uploadPassengerUrl,
			flash_swf_url : '../vendor/Moxie.swf',
			silverlight_xap_url : '../vendor/Moxie.xap',
			headers:{'ApplicationId':'BACKGROUND','Authorization':'Bearer '+localStorageFactory.getObject('account',null).accessToken,'operateAccountId':localStorageFactory.getObject('account',null).accountId},
			filters : {
				max_file_size : '10mb',
				mime_types: [
					{title : "Image files", extensions : "jpg,gif,png"},
					{title : "Zip files", extensions : "zip"},
					{title : "Zip files", extensions : "xls"},
					{title : "Zip files", extensions : "*"}
				]
			},

			init: {
				Init:function(){
					document.getElementById('filelist').innerHTML = '';
				},
				PostInit: function(up, files) {
					document.getElementById('filelist').innerHTML = '';
					document.getElementById('uploadfiles').onclick = function() {
						if(up.files.length == 0) {
							alertify.alert('请先选择要上传的文件',function(){
								return
							})
						}else {
							up.files[0].status = 1;
							up.start();
						}
					};
				},

				FilesAdded: function(up, files) {
					if(up.files.length>1){
						alertify.alert('只能上传一个文件', function(){
							up.removeFile(up.files[1].id)
						})
						
						return 
					} else{
						plupload.each(up.files, function(file) {
							document.getElementById('filelist').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <span class="fa fa-close" data-id="'+file.id+'" id="removeFile"></span><b></b></div>';
						});				
					}
				},

				UploadProgress: function(up, file) {
					document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<div class="progress" style="margin-top:9px;-webkit-box-shadow:none;box-shadow:none;">'
										+'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+file.percent+'" aria-valuemin="0" aria-valuemax="100" style="width:'+file.percent+'%">'
									    +	'<span class="sr-only">40% Complete (success)</span>'
									  	+'</div>'
										+'</div>';

					console.log(file.percent+"file.percent")
				},
				FileUploaded:function(uploader,file,response){
					var _resultResponse = JSON.parse(response.response);
					if(!_resultResponse.error){
						    $('#importPassengerPopUp').modal('toggle');
						alertify.alert('上传成功',function(){
							$state.go('admin.passenger.list',{},{reload:true})
						})
					} else{
						if(_resultResponse.error.statusCode === '0600900501'){
							var a = JSON.parse(_resultResponse.error.message);	
							var _name = {
								'lineNumber':'',
								'name':'员工姓名',
								'message':''
							}
							var _phone = {
								'lineNumber':'',
								'name':'手机号码',
								'message':''
							}
							for(var j=0; j<a.length; j++) {
								var curEle = a[j];
								if(a[j]['name']){
									var _lineNumber = a[j]['name']; 
									_name.lineNumber = _lineNumber.substring(0,_lineNumber.length-1);
								}
								if(a[j]['phone']){
									var _lineNumber = a[j]['phone']; 
									_phone.lineNumber = _lineNumber.substring(0,_lineNumber.length-1);
								}							
							}
							if((_name.lineNumber.length) ||(_phone.lineNumber.length)){
								_name.message = _name.name + '第'+_name.lineNumber+'行格式错误';
								_phone.message = _phone.name + '第'+_phone.lineNumber+'行格式错误';

								var _nameError = _name.lineNumber.length?_name.message+'<br>':'';
								var _phoneError = _phone.lineNumber.length?_phone.message+'<br>':'';

								alertify.alert(_nameError+_phoneError,function(){
									return 
								});
							}
						} else{
							utilFactory.checkErrorCode(_resultResponse.error.statusCode)
						}
					}
					
				}
			}
		});

		$(document).on('click','#removeFile',function(){
			uploader.removeFile($(this).data('id'));
			document.getElementById('filelist').innerHTML = '';
		})
		uploader.init();
		$scope.importPassenger = function(){
			$('#importPassengerPopUp').modal('toggle');
			if(uploader.files.length>0){
				uploader.removeFile(uploader.files[0].id);
				document.getElementById('filelist').innerHTML = '';
			}
		}
	})

})
angular.module('passengerAddControllerModule',[])
.controller('passengerAddController',function(passengerHttpService,utilFactory,$stateParams,$state,$scope){

	if($stateParams.secondCompanyId){
		// $scope.passengerUuid = $stateParams.passengerUuid;
		$scope.params = {
			'secondCompanyId': $stateParams.secondCompanyId,
			'schedulerId': $stateParams.schedulerId,
			'employeeId': $stateParams.employeeId
			// 'name': $stateParams.name,
			// 'phoneNumber': $stateParams.phoneNumber
		};
		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.submitStatusText = '完成';
		$scope.breadcrumbText={
			'lv1':'乘客列表',
			'lv2':'新增乘客'
		}
	}else{
		$state.go('admin.passenger.list')
	}

	$scope.editPassengerProfile = function(flag){
		$scope.active = !flag;
	};


	// form information haven't been completed by user and then user trigger ‘取消’
	// we should provide messages for user
	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.passenger.list')
		},function(){

		});
	}

	// form information completed by user and the group params whin _params obj
	// invoke API.Before invoke api we need to check all filed's status by 'setDirty'
	// services.
	$scope.addPassengerProfile = function(formValidate){
		// if all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		console.log("*******")
		console.log(1, $scope.formValidate)
		if(!formValidate) return utilFactory.setDirty($scope.formValidate)


		var _params = {
				'secondCompanyId': $scope.params.secondCompanyId,
				'employeeId': $scope.params.employeeId,
				'name': $scope.params.name,
				'phoneNumber': $scope.params.phoneNumber,
				'schedulerId': $scope.params.schedulerId
			}

			alertify.confirm('确认新增名为 "'+_params.name+'" 的这个乘客？',function(){
				passengerHttpService.addPassenger(_params).then(function(result){
					var responseData = result.data;
					if(!responseData.error){
						$state.go('admin.passenger.list',{'hrUuid':$scope.params.hrUuid})
						alertify.alert('新增成功！',function(){
							$scope.submitStatusText = '完成';
							$scope.active = true;
							$state.go('admin.passenger.list')
						})
					}else{
						utilFactory.checkErrorCode(responseData.error.statusCode)
					}
				},function(errorResult){
					alertify.alert(errorResult.error.message)
				})
			},function(){

			}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	}
})
angular.module('passengerControllerModule',[])
.controller('passengerController',function($scope){

	// $scope.leftSideTitle = "乘客管理";
	// $scope.icon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';

	// $scope.menuArray =[
	// 	{
	// 		'title':{'name':'乘客管理','icon':$scope.icon,'class':'passenger'},
	// 		'menuList':[
	// 			{'name':'乘客列表','class':'','permission':'','uiSref':'admin.passenger.list','href':'list'},
	// 			{'name':'乘客反馈','class':'','permission':'','uiSref':'admin.passenger.feedback','href':'feedback'},
	// 			{'name':'乘坐情况','class':'','permission':'','uiSref':'admin.passenger.report','href':'report'}
	// 		]
	// 	}
	// ];

})
angular.module('passengerDetailControllerModule',[])
.controller('passengerDetailController',function(passengerHttpService,utilFactory,$stateParams,$state,$scope){
	if($stateParams.passengerId){

		$scope.params = {
			'passengerId': $stateParams.passengerId,
			'secondCompanyId': $stateParams.secondCompanyId,
			'defaultRouteName': $stateParams.defaultRouteName || '———',
			'defaultStationName': $stateParams.defaultStationName || '———',
			'employeeId': $stateParams.employeeId || '———',
			'status':$stateParams.status == 0?'未激活':'已激活',
			'name': $stateParams.name || '———',
			'phoneNumber': $stateParams.phoneNumber || '———'
		};
		$scope.active = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={
			'lv1':'乘客列表',
			'lv2':'乘客详情'
		}
	}else{
		$state.go('admin.passenger.list')
	}

	$scope.editPassengerProfile = function(flag){ 
		$scope.active = !flag;

		$scope.params['employeeId'] = $stateParams.employeeId || '';
		$scope.params['name'] = $stateParams.name || '';
		$scope.params['phoneNumber'] = $stateParams.phoneNumber || '';
	};

	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.passenger.list')
		},function(){

		});
	}

	$scope.submitPassengerProfile = function(){
		$scope.active = true;
		$scope.submitOnProgress = true;
		var _params = {
			'passengerId': $scope.params.passengerId,
			'secondCompanyId': $scope.params.secondCompanyId,
			'defaultRouteName': $scope.params.defaultRouteName,
			'defaultStationName': $scope.params.defaultStationName,
			'employeeId': $scope.params.employeeId,
			'name': $scope.params.name,
			'phoneNumber': $scope.params.phoneNumber
		}

		alertify.confirm('确认修改名为"' +_params.name+ '"的这个乘客？',function(){
			passengerHttpService.updatePassengerByID(_params).then(function(result){
				$scope.submitOnProgress = false;
				var _resultData = result.data;
				if(!_resultData.error){
					alertify.alert('更新成功!',function(){
						$state.go('admin.passenger.list')
					})
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			},function(){
				$scope.submitOnProgress = false;
			})
		},function(){
			$scope.submitOnProgress = false;
		}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	};


	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'passengerId': $scope.params.passengerId
		},
		list:null,
		getList:function(params){
			return passengerHttpService.getPassengerTrip(params)
		},
		loadData:function(){
		},
		dataSet:function(result){
			for(var i=0;i<result.length;i++){
				result[i]['status'] =result[i]['status'] == 0?'未激活':'已激活'
			}
		}
	}


	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			// operateIfFlag:false,
			operate:[]
		},
		// height:290,
		// head:[{name:'文件名',key:'filename'}],
		// className:function(flag){},
		// clickFun:function(){},
		// rowClickFun:function(item){},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		// radioSelect:function(){},
		defaultEmptyText:'暂无乘车记录',
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'dateTime','value':'上车时间'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'startStationName','value':'上车站点'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'routeName','value':'乘坐线路'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'vehicleLicensePlate','value':'乘坐车辆'},
					'checkFlag':true
				}
	    	]
	    }
		// changeEnable:function(item){}
	}

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})
angular.module('passengerReportArrivalControllerModule',[]).controller('passengerReportArrivalController',function(passengerHttpService,utilFactory,$scope){
	
	$scope.submitOnProgress = false;
	var currentMonth = utilFactory.getCurrentMonth(new Date().getTime())
	$("#selectMonth").val(currentMonth);
	$scope.params = {
		'selectMonth':$("#selectMonth").val(),
		'routeTemplateName':'',
		// 'routeTemplate':'',
		// 'routeTemplateId':'',
		'vehiclePlate':'',
		'vehicleId':'',
		'vehicleList':''
	}

	$('.datepicker').datepicker({ 
	    language: "zh-CN",
		format: 'yyyy/mm',  
		startView: 1,
	    minViewMode: 1
	});

	var dateArray = $("#selectMonth").val().split("/");
	var countDay = new Date(dateArray[0],dateArray[1],0);
	console.log(countDay.getDate());
	var currentDate = countDay.getDate();
	var beginTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00');
	var endTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);

	// $("#noData").hide();

	$scope.importData = function(){

		passengerHttpService.downloadArrivalTime({'beginTime':beginTime,'endTime':endTime}).then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			var _result = data.data;
			var decodedString = String.fromCharCode.apply(null, new Uint8Array(_result));
			console.log(1,decodedString);

			var _decodedString = JSON.stringify(decodedString)
			// localStorage.setItem('key', JSON.stringify(_decodedString));
			var _obj = JSON.parse(_decodedString || '');

			var _errorStr = 'error';
			if(_obj.indexOf(_errorStr) >= 0) {
				console.log('error');
				alertify.alert('暂无报表信息',function(){
				});
				return
			}
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '线路到达时间数据报表');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})


	}
	var _baseParams = {
		'beginTime':beginTime,
		'endTime':endTime,
		// 'beginTime':"1514131200000",
		// 'endTime':"1514217600000",
		'vehicleInfoFlag':"Y"
	};

	passengerHttpService.getRouteTemplateList(_baseParams).then(function(result){
		var _resultJSON = result.data;
		if(!_resultJSON.error){
			if(_resultJSON.value == null) {
				// $scope.params.routeTemplate = '';
				// $scope.params.vehicles = '';
				// alertify.alert('请选择线路',function(){
				// 	return
				// });
			} else {
				var _targetObj = _resultJSON.value;
				$scope.params.routeTemplate = _targetObj? _targetObj: '';
				// for(var i=0;i<_targetObj.length;i++){
				// 	$scope.params.vehicles = _targetObj[i].vehicleList.length? _targetObj[i].vehicleList: '';
				// 	console.log("_targetObj[i].vehicleList"+_targetObj[i].vehicleList);
				// }
				$scope.$watch('params.routeTemplateObj',function(newRoute, oldRoute){ 
					if (newRoute === oldRoute) { 
						return
					} else {
						
						var _routeTemplateList = $scope.params.routeTemplate;
						console.log(1,_routeTemplateList);
						var _selectRouteId = $scope.params.routeTemplateObj.routeTemplateId;
						console.log("12121212121212");	

						var _vehicleList = [];
						for (var i = 0; i < _routeTemplateList.length; i++) {
							var compareRouteId = _routeTemplateList[i].routeTemplateId;
							if (compareRouteId == _selectRouteId) {
								_vehicleList.push(_routeTemplateList[i].vehicleList);
								console.log(1,_vehicleList);
							} 
						}
						// sort vehicleList by vehicleId
						var _newVehicleList = _vehicleList[0].sort(function(a,b){  
				         	return a.vehicleId - b.vehicleId;  
				        });  
				        console.log(_newVehicleList);
						var newArr = [_vehicleList[0][0]];
						for(var i=0; i<_newVehicleList.length; i++){
						       if(_newVehicleList[i].vehicleId !== newArr[newArr.length-1].vehicleId){//获取没重复的最右一值放入新数组
						           	newArr.push(_newVehicleList[i]);
						       } 
			                
						   	console.log(newArr);
						}
						$scope.params.vehicles = newArr;
						console.log(1,$scope.params.vehicles);

					}  	
							
				});
			

			}
			
		}else{
			utilFactory.checkErrorCode(_resultJSON.error.statusCode);
		}
	})

	
	$scope.$watch('params.selectMonth',function(newValue, oldValue){ 
		if (newValue === oldValue) { 
			return
		} else {
			dateArray = $("#selectMonth").val().split("/");
			countDay = new Date(dateArray[0],dateArray[1],0);
			currentDate = countDay.getDate();
			beginTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00');
			// console.log(beginTime);
			endTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);
			// console.log(endTime);
			var _baseParams = {
				'beginTime':beginTime,
				'endTime':endTime,
				'routeTemplateType':"AM",
				'vehicleInfoFlag':"Y"
			};

			passengerHttpService.getRouteTemplateList(_baseParams).then(function(result){
				var _resultJSON = result.data;
				if(!_resultJSON.error){
					var _targetObj = _resultJSON.value;
					$scope.params.routeTemplate = _targetObj? _targetObj: '';
				}else{
					utilFactory.checkErrorCode(_resultJSON.error.statusCode)
				}
			})

			$scope.importData = function(){

				passengerHttpService.downloadArrivalTime({'beginTime':beginTime,'endTime':endTime}).then(function(data){
					var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
					var objectUrl = URL.createObjectURL(blob);
					var a = document.createElement('a');
					document.body.appendChild(a);
					var _result = data.data;
					var decodedString = String.fromCharCode.apply(null, new Uint8Array(_result));
					console.log(1,decodedString);

					var _decodedString = JSON.stringify(decodedString)
					// localStorage.setItem('key', JSON.stringify(_decodedString));
					var _obj = JSON.parse(_decodedString || '');

					var _errorStr = 'error';
					if(_obj.indexOf(_errorStr) >= 0) {
						console.log('error');
					
						alertify.alert('暂无报表信息',function(){
						});
						return
					}
					a.setAttribute('style', 'display:none');
					a.setAttribute('href', objectUrl);
					a.setAttribute('download', '线路到达时间数据报表');
					a.click();
					URL.revokeObjectURL(objectUrl);
				})

			}

		}  	

		// $scope.$watch('$viewContentLoaded',function(event){ 
	 //  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
		// });

	});

	$scope.$watch('params.routeTemplateObj',function(newRoute, oldRoute){ 
		if (newRoute === oldRoute) { 
			return
		} else {
			
			var _routeTemplateList = $scope.params.routeTemplate;
			console.log(1,_routeTemplateList);
			var _selectRouteId = $scope.params.routeTemplateObj.routeTemplateId;
			console.log("12121212121212");	
			var _vehicleList = [];
			for (var i = 0; i < _routeTemplateList.length; i++) {
				var compareRouteId = _routeTemplateList[i].routeTemplateId;
				if (compareRouteId == _selectRouteId) {
					_vehicleList.push(_routeTemplateList[i].vehicleList);
					console.log(1,_vehicleList);
				} 
			}
			 
			var _newVehicleList = _vehicleList[0].sort(function(a,b){  
	         	return a.vehicleId-b.vehicleId;  
	        });  
	        console.log(_newVehicleList);
			var newArr = [_vehicleList[0][0]];
			for(var i=0; i<_newVehicleList.length; i++){
			       if(_newVehicleList[i].vehicleId !== newArr[newArr.length-1].vehicleId){//获取没重复的最右一值放入新数组
			           	newArr.push(_newVehicleList[i]);
			       } 
                
			   	console.log(newArr);
			}
			$scope.params.vehicles = newArr;
			console.log(1,$scope.params.vehicles);

		}  	
		
				
	});
	$scope.arrivalSubmit = function(formValidateIsInvalid){
		// dateArray = $("#selectMonth").val().split("/");

		dateArray = $("#selectMonth").val().split("/");
		countDay = new Date(dateArray[0],dateArray[1],0);
		currentDate = countDay.getDate();
		beginTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00');
		endTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);

		if(formValidateIsInvalid){		
			return utilFactory.setDirty($scope.formValidate);
		}

		if(!$scope.params.selectMonth){
			alertify.alert('请选择月份',function(){
			});
			return
		}

		if(!$scope.params.routeTemplateObj){
			alertify.alert('请选择线路',function(){
			});
			return
		}

		if(!$scope.params.vehicleObj){
			alertify.alert('请选择车辆',function(){
			});
			return
		}
		// $("#noData").hide();

		

		// display scatter plot
		var myChart = echarts.init(document.getElementById('main'));

		var allData = [];
		var preData = [];
		var date = [];

		var time = [];
		var singelDay = [];
		var singelTime = [];
		var _y = [];
		var _mockData = [];
		var option = null;

		var options = {
			  year: 'numeric', month: 'numeric', day: 'numeric',
			  hour: 'numeric', minute: 'numeric', second: 'numeric',
			  hour12: false,
			  timeZone: 'Asia/Shanghai' 
		};

		var _baseParams = {
			'beginTime':beginTime,
			'endTime':endTime,
			'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId,
			'vehicleId':$scope.params.vehicleObj.vehicleId,
			'routeTemplateType':"AM",
			'vehicleInfoFlag':"Y"
		};

		passengerHttpService.getArrivalTime(_baseParams).then(function(result){
			var _resultJSON = result.data;
			if(!_resultJSON.error){
				var arrivalData = _resultJSON;

				if (arrivalData.value == null) {
					alertify.alert('该车辆暂无排班',function(){
						$("#noData").show();
						myChart.dispose(document.getElementById('main'));
						return
					});				
				}

				for(i=0; i<arrivalData.value.length; i++) {
					if (arrivalData.value[i].vehicleList) {
						(_mockData).push(arrivalData);
					} else {
						alertify.alert('该车辆暂无到达时间',function(){
							$("#noData").show();
							myChart.dispose(document.getElementById('main'));
							return
						});
					}
					
				}
				
				console.log(1,_mockData);
				var vehicleArr = (_mockData[0]).value[0].vehicleList;
				console.log(1,vehicleArr);		
				for(var i=vehicleArr.length-1;i>=0;i--){ 
					if(vehicleArr[i].vehicleActualEndTime == null) {
						vehicleArr.splice(i,1);
						console.log(vehicleArr);
					}
				}
				if(vehicleArr.length == 0) {
					alertify.alert('该车辆暂无到达时间',function(){
						$("#noData").show();
						myChart.dispose(document.getElementById('main'));
						return
					});
				} else {
					$("#noData").hide();
					for(var j=0;j<currentDate;j++) {
						var currentDay = j+1;
						console.log(currentDay);
						date.push(currentDay);

						for(var i=0;i<vehicleArr.length;i++){
							var _vehicleActualArr = [];
							_vehicleActualArr.push(vehicleArr[i].vehicleActualEndTime);
							
							var _date = new Intl.DateTimeFormat('zh-cn', options).format(vehicleArr[i].vehicleActualEndTime).split(' ')[0];
							var _datePre = new Intl.DateTimeFormat('zh-cn', options).format(vehicleArr[i].vehicleEndTime).split(' ')[0];
							var _singelDay = new Intl.DateTimeFormat('zh-cn', options).format(vehicleArr[i].vehicleActualEndTime).split(' ')[0].split('/')[2];
							var _time =  utilFactory.getTimestamp(vehicleArr[i].vehicleActualEndTime);
							var _singelTime = utilFactory.getTimestamp(vehicleArr[i].vehicleActualEndTime) - utilFactory.getTimestamp(_date+ ' 00:00')
							var _preTime = utilFactory.getTimestamp(vehicleArr[i].vehicleEndTime) - utilFactory.getTimestamp(_datePre+ ' 00:00')
							console.log("_preTime"+_preTime);

							singelDay.push(_singelDay);
							singelTime.push(_singelTime);
							time.push(_time);
							_y.push([[vehicleArr[i].vehicleActualEndTime]])
							
							allData.push([_singelDay,_singelTime]);
							preData.push([_singelDay,_preTime]);	
						}		
							
					}
					option = {
						// noDataLoadingOption: {
	     //                    text: '暂无数据',
	     //                    effect: 'bubble',
	     //                    effectOption: {
	     //                        effect: {
	     //                            n: 0
	     //                        }
	     //                    }
						// },
					    title : {
					        text: '线路月度到达时间分布图',
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    tooltip : {
					        trigger: 'item',
					        showDelay : 0,
					        formatter : function (params) {
					        	console.log(1,params)
					        	var _date = utilFactory.getTimestamp($scope.params.selectMonth + '/'+ params.data[0]);

						        if (params.value.length > 1) {
						            return  utilFactory.getLocalTime(_date).split(' ')[0] +'<br/>到达时间' +  utilFactory.getCurrentTime(1512057600000+params.data[1])
						        } else {
						        	// var aveData = Math.floor(params.value);
						            return params.name + ' : '
						            + utilFactory.getCurrentTime(1512057600000+aveData) +'<br/>';
						        }
					        }
					    },
				        // axisPointer:{
				        //     show: true,
				        //     type : 'cross',
				        //     lineStyle: {
				        //         type : 'dashed',
				        //         width : 1
				        //     }
				        // },
					    xAxis : [
					        {
					            type : 'category',
					            name:'日期',
					            scale:true,
					            // axisLabel : {
					            //     formatter: function(params){
					            //     	return new Intl.DateTimeFormat('zh-cn').format(params)
					            //     }
					            // },
					            data: date,
					            splitLine: {
					                lineStyle: {
					                    type: 'dashed'
					                }
					            }
					        }
					    ],
					    yAxis : [
					    	{
					            type : 'time',
					            name:'时间点',
					            scale:true,
					           	data: singelTime,
					           	axisLabel: {
						            formatter: function (singelTime, index) {
									    // 格式化成月/日，只在第一个刻度显示年份
									    var date = new Date(1512057600000 + singelTime);
									    var minute = date.getMinutes() > 9 && date.getMinutes() || ('0' + date.getMinutes());
									    console.log(date);
									    var texts = [(date.getHours()), minute];
									    // if (index === 0) {
									    //     texts.unshift(date.getYear());
									    // }
									    return texts.join(':');
									}
						        },
					            splitLine: {
					                show: false
					            }

					        }
					    ],
					    series : [
							{
								name:'',
								type:'scatter',
								data:allData,
								markLine:{
						            lineStyle: {
						                normal: {
						                    type: 'dashed'
						                }
						            }
					        	}
							},

					        {
					            name:'预计到达时间',
					            type:'line',
					            lineStyle: {
					                type : 'dashed',
					                width : 0.5
					            },
					            data:preData,
					            // data:[[1, 40380000], [3, 40380000+10*60*1000],[4, 40380000+20*60*1000],[5, 40380000+10*60*1000],[6, 40380000+10*60*1000]],
					        },
							
					    ]
					};
					myChart.setOption(option)	
					} 

				// console.log("date"+date)
		
			} else{
				utilFactory.checkErrorCode(_resultJSON.error.statusCode)
			}
		});

	}
})
angular.module('passengerReportBusRouteControllerModule',[])
.controller('passengerReportBusRouteController',function(passengerHttpService,utilFactory,$scope){

	var currentMonth = utilFactory.getCurrentMonth(new Date().getTime());
	$("#selectMonth").val(currentMonth);
	// $("#selectMonth").val("2017/12");
	$scope.params = {
		'selectMonth':$("#selectMonth").val()
	}
	var dateTime = utilFactory.getTimestamp($scope.params.selectMonth);

	// Config datepikcer 
	$('.datepicker').datepicker({ 
		language: "zh-CN",
		format: 'yyyy/mm',  
		startView: 1,
	    minViewMode: 1,
	});

	var dateArray = $("#selectMonth").val().split("/");
	var countDay = new Date(dateArray[0],dateArray[1],0);
	console.log(countDay.getDate());
	var currentDate = countDay.getDate();
	var beginTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00');
	console.log(beginTime);
	var endTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);
	console.log(endTime);

	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'beginTime':beginTime,
			'endTime':endTime
		},
		
		list:null,
		getList:function(params){
			return passengerHttpService.getBusRoute(params)
		},
		loadData:function(){
		},
		dataSet:function(result){
			if(result.value){
				var _data = result.value.list;
				for(var i=0;i<_data.length;i++){
					_data[i]['routeType'] =_data[i]['routeType'] == 'AM'?'上行':'下行';
				}
			}
		}
	}

	//export report
	$scope.importData = function(){

		passengerHttpService.downloadBusRoute({'beginTime':beginTime,'endTime':endTime}).then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			var _result = data.data;
			var decodedString = String.fromCharCode.apply(null, new Uint8Array(_result));
			console.log(1,decodedString);

			var _decodedString = JSON.stringify(decodedString)
			// localStorage.setItem('key', JSON.stringify(_decodedString));
			var _obj = JSON.parse(_decodedString || '');

			var _errorStr = 'error';
			if(_obj.indexOf(_errorStr) >= 0) {
				console.log('error');
			
				alertify.alert('暂无报表信息',function(){
				});
				return
			}
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '线路到达时间数据报表');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})

	}

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[]
		},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		defaultEmptyText:'暂无班车线路',
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'routeTemplateName','value':'线路名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'routeType','value':'属性'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'dailyPassenger','value':'日均载客数'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'sumVehicleSeats','value':'总座位数'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'attendence','value':'上座率'},
					'checkFlag':true
				}
			]
		}
	}
	
	$scope.$watch('params.selectMonth',function(newValue, oldValue){ 
		if (newValue === oldValue) { 
			return
		} else {

			dateArray = $("#selectMonth").val().split("/");
			countDay = new Date(dateArray[0],dateArray[1],0);
			var currentDate = countDay.getDate();
			beginTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00');
			endTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);
			var params = {
				'pageSize':'20',
				'pageNumber':'1',
				'beginTime':beginTime,
				'endTime':endTime
			}
			$scope.pageConfigs.getList(params);

			$scope.$broadcast('refreshPageList',params);

			$scope.importData = function(){

				passengerHttpService.downloadBusRoute({'beginTime':beginTime,'endTime':endTime}).then(function(data){

					var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
					var objectUrl = URL.createObjectURL(blob);
					var a = document.createElement('a');
					document.body.appendChild(a);
					var _result = data.data;
					var decodedString = String.fromCharCode.apply(null, new Uint8Array(_result));
					console.log(1,decodedString);

					var _decodedString = JSON.stringify(decodedString)
					// localStorage.setItem('key', JSON.stringify(_decodedString));
					var _obj = JSON.parse(_decodedString || '');

					var _errorStr = 'error';
					if(_obj.indexOf(_errorStr) >= 0) {
						console.log('error');
					
						alertify.alert('暂无报表信息',function(){
						});
						return
					}
					a.setAttribute('style', 'display:none');
					a.setAttribute('href', objectUrl);
					a.setAttribute('download', '线路到达时间数据报表');
					a.click();
					URL.revokeObjectURL(objectUrl);
				})
			}

		}  		
	});

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})
angular.module('passengerReportDataControllerModule',[]).controller('passengerReportDataController',function(passengerHttpService,utilFactory,$scope){
	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return passengerHttpService.getAllTripHistory(params)
		},
		loadData:function(){},
		dataSet:function(result){
		}
		//extendParams:function(){}
	}


	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[]
		},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		// defaultEmptyText:'暂无数据',
		// radioSelect:function(){},
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'id','value':'记录编号'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'name','value':'乘车人员'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'licensePlate','value':'乘坐车辆'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'routeName','value':'线路名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'startStationName','value':'起点站'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'arrivalStationName','value':'终点站'},
					'checkFlag':true
				}
			]
		}
		// changeEnable:function(item){}
	}

	
	$scope.selectAllStatus = false;
	$scope.queryByKeyObj = {
		'active':{'key':'passengerName','value':'乘车人员'},
		'list':[{'key':'tripHistoryId','value':'记录编号'}]
	}

	$scope.selectKey = function(activeObj){
		$scope.queryByKeyObj.list.length = 0;
		$scope.queryByKeyObj.list.push( {'key':$scope.queryByKeyObj.active.key,'value':$scope.queryByKeyObj.active.value})
		$scope.queryByKeyObj.active.key = activeObj.key;
		$scope.queryByKeyObj.active.value = activeObj.value;

		$('.dropdown-menu').css('display','none')
	}

	$scope.showQueryKeyList = function(){
		$('.dropdown-menu').css('display','block')
	}

	$scope.searchFn = function(searchText){
		var _searchParams = {
			'pageSize':'20',
			'pageNumber':'1',
			'pageNo': '1',
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		}
		_searchParams[$scope.queryByKeyObj.active.key] = $scope.searchText;
		// $scope.pageConfigs.getList(_searchParams)
		$scope.$broadcast('refreshPageList',_searchParams);

	}

	$scope.importData = function(){

		passengerHttpService.downloadTripHistory({'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()}).then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '乘客记录数据报表');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})

	}

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})
angular.module('passengerReportPassengersControllerModule',[])
.controller('passengerReportPassengersController',function(passengerHttpService,utilFactory,$scope){

	var currentDate = utilFactory.getCurrentDate(new Date().getTime())
	$("#selectDay").val(currentDate);
	$scope.params = {
		'selectDay':$("#selectDay").val(),
		'routeTemplateName':'',
		'routeTemplateId':'',
		'newDateTime':''
	}
	var dateTime = utilFactory.getTimestamp($scope.params.selectDay);

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
	
	$('.datepicker').datepicker({ 
		language: "zh-CN",
	});

	
	var _baseParams = {
		'beginTime':dateTime,
		'endTime':dateTime+24*60*60*1000,
		// 'beginTime':"1514131200000",
		// 'endTime':"1514217600000"
	};

	passengerHttpService.getRouteTemplateList(_baseParams).then(function(result){
		var _resultJSON = result.data;
		if(!_resultJSON.error){
			var _targetObj = _resultJSON.value;
			$scope.params.routeTemplate = _targetObj.length? _targetObj: '';
			console.log("12121212121212")
		}else{
			utilFactory.checkErrorCode(_resultJSON.error.statusCode)
		}
	})


	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'schedulerId':utilFactory.getAccountId(),
			'userCompanyId':utilFactory.getSecondCompanyId(),
			'dateTime':dateTime,
			// 'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId || ""
		},
		list:null,
		getList:function(params){
			return passengerHttpService.getEmployeeList(params)			
		},
		loadData:function(){
		},
		dataSet:function(result){
			// if(result.value != null){
			// 	var _result = result.value;
			// 	for(var i=0;i<_result.length;i++){
			// 	}
			// }
		}
	}

	$scope.importData = function(){

		passengerHttpService.downloadEmployeeList({'createTime':dateTime,'userCompanyId':utilFactory.getSecondCompanyId()}).then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '线路到达时间数据报表');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})

	}



	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[]
		},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		defaultEmptyText:'暂无乘车人员信息',
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'员工姓名'},
					'checkFlag':true
				},
								{
					'parentKey':'',
					'selfKey':{'key':'employeeId','value':'员工工号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'cellPhoneNumber','value':'联系方式'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'startStationName','value':'上车站点'},
					'checkFlag':true
				}
			]
		}
	}
	$scope.$watch('params.selectDay',function(newValue, oldValue){ 
		if (newValue === oldValue) { 
			return
		} else {
			dateTime = utilFactory.getTimestamp(newValue);
			$scope.params.newDateTime = utilFactory.getTimestamp(newValue);
			$scope.importData = function(){

				passengerHttpService.downloadEmployeeList({'createTime':dateTime,'userCompanyId':utilFactory.getSecondCompanyId()}).then(function(data){
					var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
					var objectUrl = URL.createObjectURL(blob);
					var a = document.createElement('a');
					document.body.appendChild(a);
					a.setAttribute('style', 'display:none');
					a.setAttribute('href', objectUrl);
					a.setAttribute('download', '线路到达时间数据报表');
					a.click();
					URL.revokeObjectURL(objectUrl);
				})
			}

			// var params = {
			// 	'pageSize':'20',
			// 	'pageNumber':'1',
			// 	'schedulerId':utilFactory.getAccountId(),
			// 	'userCompanyId':utilFactory.getSecondCompanyId(),
			// 	'dateTime':dateTime,
			// 	// 'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId || ""
			// }
			// $scope.pageConfigs.getList(params);		


			var _baseParams = {
				'beginTime':dateTime,
				'endTime':dateTime + 24*60*60*1000,
				'vehicleInfoFlag': "Y"
			};
			passengerHttpService.getRouteTemplateList(_baseParams).then(function(result){
				var _resultJSON = result.data;
				if(!_resultJSON.error){
					var _targetObj = _resultJSON.value;
					$scope.params.routeTemplate = _targetObj.length? _targetObj: '';
				}else{
					utilFactory.checkErrorCode(_resultJSON.error.statusCode)
				}
			})	

			// $scope.$broadcast('refreshPageList',params);
		}  	

		// $scope.$watch('$viewContentLoaded',function(event){ 
	 //  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
		// });

	});
	
	$scope.$watch('params.routeTemplateObj',function(newRoute, oldRoute){ 
		if (newRoute === oldRoute) { 
			return
		} else {
			var params = {
				'pageSize':'20',
				'pageNumber':'1',
				'schedulerId':utilFactory.getAccountId(),
				'userCompanyId':utilFactory.getSecondCompanyId(),
				'dateTime':$scope.params.newDateTime || dateTime,
				'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId || ""
			}
			$scope.pageConfigs.getList(params);		

			$scope.$broadcast('refreshPageList',params);
		}  	

		$scope.$watch('$viewContentLoaded',function(event){ 
	  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
		});
				
	});

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})
 angular.module('passengerReportStationControllerModule',[])
.controller('passengerReportStationController',function(passengerHttpService,utilFactory,$scope){

	var currentMonth = utilFactory.getCurrentMonth(new Date().getTime());
	$("#selectMonth").val(currentMonth);
	$scope.params = {
		'selectMonth':$("#selectMonth").val(),
		'routeTemplateName':'',
		'vehicleObj':'',
		'vehiclePlate':'',
		'vehicleId':'',
		'newBeginTime':'',
		'newEndTime':''
	}

	$('.datepicker').datepicker({ 
	    language: "zh-CN",
		format: 'yyyy/mm',  
		startView: 1,
	    minViewMode: 1
	});

	var dateArray = $("#selectMonth").val().split("/");
	var countDay = new Date(dateArray[0],dateArray[1],0);
	console.log(countDay.getDate());
	var currentDate = countDay.getDate();
	var beginTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00');
	var endTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);


	var _baseParams = {
		'beginTime':beginTime,
		'endTime':endTime,
		// 'vehicleInfoFlag':"Y"
	};

	passengerHttpService.getRouteTemplateList(_baseParams).then(function(result){
		var _resultJSON = result.data;
		if(!_resultJSON.error){
			if(_resultJSON.value == null) {
				// alertify.alert('请选择线路',function(){
				// 	return
				// });
			} else {
				var _targetObj = _resultJSON.value;
				$scope.params.routeTemplate = _targetObj? _targetObj: '';
			}
			
		}else{
			utilFactory.checkErrorCode(_resultJSON.error.statusCode);
		}
	})

	$scope.importData = function(){

		if(!$scope.params.routeTemplateObj){
			alertify.alert('请选择线路',function(){
			});
			return
		}
		console.log($scope.params.routeTemplateObj.routeTemplateId);
		var _params = {
			'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId,
			'routeTemplateName':$scope.params.routeTemplateObj.routeTemplateName,
			'downloadMonth':dateArray[1],
			'beginTime':beginTime,
			'endTime':endTime,
			'routeType':"AM"
		}		
		passengerHttpService.downloadRouteStationList(_params).then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			var _result = data.data;
			var decodedString = String.fromCharCode.apply(null, new Uint8Array(_result));
			console.log(1,decodedString);

			var _decodedString = JSON.stringify(decodedString)
			var _obj = JSON.parse(_decodedString || '');

			var _errorStr = 'error';
			if(_obj.indexOf(_errorStr) >= 0) {
				console.log('error');
				alertify.alert('暂无报表信息',function(){
				});
				return
			}
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '班车站点数据报表');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})

	}

	$scope.$watch('params.selectMonth',function(newValue, oldValue){ 
		if (newValue === oldValue) { 
			return
		} else {


			dateArray = $("#selectMonth").val().split("/");
			countDay = new Date(dateArray[0],dateArray[1],0);
			currentDate = countDay.getDate();
			$scope.params.newBeginTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00');
			// beginTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00');
			// console.log(beginTime);
			$scope.params.newEndTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);
			// console.log(endTime);
			var _baseParams = {
				'beginTime':$scope.params.newBeginTime,
				'endTime':$scope.params.newEndTime,
				// 'routeTemplateType':"AM",
				// 'vehicleInfoFlag':"Y"
			};

			passengerHttpService.getRouteTemplateList(_baseParams).then(function(result){
				var _resultJSON = result.data;
				if(!_resultJSON.error){
					var _targetObj = _resultJSON.value;
					$scope.params.routeTemplate = _targetObj? _targetObj: '';
				}else{
					utilFactory.checkErrorCode(_resultJSON.error.statusCode)
				}
			})

			$scope.importData = function(){

				if(!$scope.params.routeTemplateObj){
					alertify.alert('请选择线路',function(){
					});
					return
				}
				console.log($scope.params.routeTemplateObj.routeTemplateId);
				var _params = {
					'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId,
					'routeTemplateName':$scope.params.routeTemplateObj.routeTemplateName,
					'downloadMonth':dateArray[1],
					'beginTime':$scope.params.newBeginTime,
					'endTime':$scope.params.newEndTime,
					'routeType':"AM"
				}		
				passengerHttpService.downloadRouteStationList(_params).then(function(data){
					var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
					var objectUrl = URL.createObjectURL(blob);
					var a = document.createElement('a');
					document.body.appendChild(a);
					var _result = data.data;
					var decodedString = String.fromCharCode.apply(null, new Uint8Array(_result));
					console.log(1,decodedString);

					var _decodedString = JSON.stringify(decodedString)
					var _obj = JSON.parse(_decodedString || '');

					var _errorStr = 'error';
					if(_obj.indexOf(_errorStr) >= 0) {
						console.log('error');
						alertify.alert('暂无报表信息',function(){
						});
						return
					}
					a.setAttribute('style', 'display:none');
					a.setAttribute('href', objectUrl);
					a.setAttribute('download', '班车站点数据报表');
					a.click();
					URL.revokeObjectURL(objectUrl);
				})
			}

		}  	
	});


	$scope.$watch('params.routeTemplateObj',function(newRoute, oldRoute){ 
		if (newRoute === oldRoute) { 
			return
		} else {	
			var date = [];
			var myChart = echarts.init(document.getElementById('main'));
			var _baseParams = {
				'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId,
				'beginTime':$scope.params.newBeginTime || beginTime,
				'endTime':$scope.params.newEndTime || endTime,
				'routeType': 'AM'
			}

			for(var j=0;j<currentDate;j++) {
				var currentDay = j+1;
				console.log(currentDay);
				date.push(currentDay);
			}

			passengerHttpService.getRouteStationList(_baseParams).then(function(result){
				var _resultJSON = result.data;
				if(!_resultJSON.error){
					if(_resultJSON.value == null) {
						alertify.alert('暂无数据',function(){
							$("#noData").show();
							myChart.dispose(document.getElementById('main'));
							return
						});
					} 

					$("#noData").hide();

					var stationRecord = [];
					var stationNameList = [];
					var recordArray = [];
					var allData = [];

					var _targetObj = _resultJSON.value;
					stationRecord.push(_targetObj);
					console.log(1,stationRecord);
					console.log("12121212121212");

					for(var i = 0; i<stationRecord[0].length; i++) {
						var _stationName = stationRecord[0][i].stationName;
						var _recordArray = stationRecord[0][i].recordArray;
						stationNameList.push(_stationName);
						recordArray.push(_recordArray);
						console.log(1,stationNameList);

					}

				  	for( var i = 0; i < stationNameList.length; i++ ) {
						allData.push(
							{'name': stationNameList[i],
							'type': 'bar',
							'stack': '总量',
							label: {
				                normal: {
				                    show: true,
				                    position: 'insideBottom'
				                }
				            },
				            // 'data': [20, 3, 5, 34, 30, 30, 20,0,0,0,10,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0]
				            'data': recordArray[i]
				        })
						console.log(1,allData)
					}
					
					var option = null;

					var options = {
						year: 'numeric', month: 'numeric', day: 'numeric',
						hour: 'numeric', minute: 'numeric', second: 'numeric',
						hour12: false,
						timeZone: 'Asia/Shanghai' 
					};
					// console.log(1,stationRecord[0]);

					option = {
					    title : {
					        text: '站点月度上车人数分布图',
					    },
					    tooltip : {
					        trigger: 'axis',
					        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					        }
					    },
					    legend: {
					        data: stationNameList,
					        type: 'scroll',
    						top: 25
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    yAxis:  {
					        type: 'value'
					    },
					    xAxis: {
					        type: 'category',
					        // data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
					    	data: date
					    },
					    
					    series: allData
					};
					myChart.clear();
					myChart.setOption(option);
				

				}else{
					utilFactory.checkErrorCode(_resultJSON.error.statusCode);
				}
			})

			

		}  	
	});

})
angular.module('passengerHttpServiceModule',[]).factory('passengerHttpService',function($http,ROLE_CODE,APISERVICEPATH){
	var passengerHttp = {};
	var passengerAccount = APISERVICEPATH.passengerAccount;
	//var passengerAccount = APISERVICEPATH.prd;
	//var passengerProfile = APISERVICEPATH.passengerProfile;
	// var passengerTrip    = APISERVICEPATH.passengerTrip;
	var stationService = APISERVICEPATH.stationService;
	var uploadTripHistorysByExcelAPI = APISERVICEPATH.tripHistorysByExcel;
	var passengerComment = APISERVICEPATH.passengerComment;
	var reportingService = APISERVICEPATH.reportingService;
	passengerHttp.getPassengerTrip = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'web/'+paramsObj.passengerId,
			'paramsList':{
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};
	
	passengerHttp.passenger = function(paramsObj){
		var paramsData = {
			'apiPath':passengerAccount+'pagination/'+paramsObj.hrId+'/secondCompanyId/'+paramsObj.secondCompanyId,
			paramsList:{
				// 'hrId': paramsObj.hrId,
				// 'secondCompanyId':paramsObj.secondCompanyId,
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber,
				'name':paramsObj.name,
				'phoneNumber':paramsObj.phoneNumber
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	passengerHttp.downloadTemplateFile = function(paramsObj){
		var paramsData = {
			'apiPath':passengerAccount+'file'
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer'});
	}

	passengerHttp.tripHistorysByExcel = function(paramsObj){
		var paramsData = {
			'apiPath':uploadTripHistorysByExcelAPI+'tripHistorysByExcel',
			paramsList:{
				'schedulerAccountId':paramsObj.schedulerAccountId
			}
		};

		console.log(1,paramsObj)
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer',data:paramsData.paramsList});
	}

	passengerHttp.updatePassengerByID = function(paramsObj){
		var paramsData = {
			'apiPath':passengerAccount,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'employeeId': paramsObj.employeeId,
				'name': paramsObj.name,
				'phoneNumber': paramsObj.phoneNumber,
				'operateAccountId': paramsObj.schedulerId,
				'partyId':  paramsObj.passengerId,
				'status': '1'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	passengerHttp.deletePassengerByID = function(paramsObj){
		var paramsData = {
			'apiPath':passengerAccount,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'employeeId': paramsObj.employeeId,
				'name': paramsObj.name,
				'phoneNumber': paramsObj.phoneNumber,
				'operateAccountId': paramsObj.schedulerId,
				'partyId':  paramsObj.passengerId,
				'status': '2'
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList});
	};


	passengerHttp.addPassenger = function(paramsObj){
		
		var paramsData = {
			'apiPath':passengerAccount,
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'employeeId': paramsObj.employeeId,
				'name': paramsObj.name,
				'phoneNumber': paramsObj.phoneNumber,
				'operateAccountId': paramsObj.schedulerId,
				'status': '1'
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	passengerHttp.getPassengerFeedback = function(paramsObj){

		var paramsData = {
			'apiPath':passengerComment+paramsObj.secondCompanyId+'/'+paramsObj.schedulerId,
			paramsList:{
				// 'secondCompanyId':paramsObj.secondCompanyId,
				// 'schedulerId':paramsObj.schedulerId,
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber,
				// 'Authorization':paramsObj.pageNumber,
				// 'operateAccountId':paramsObj.pageNumber,
				// 'ApplicationId':paramsObj.pageNumber,
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.getBusRoute = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'display/attendence/'+paramsObj.beginTime+'/endTime/'+paramsObj.endTime,
			paramsList:{
				// 'pageSize':paramsObj.pageSize,
				// 'pageNumber':paramsObj.pageNumber,
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.downloadBusRoute = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'download/attendence/'+paramsObj.beginTime+'/endTime/'+paramsObj.endTime,
			paramsList:{
				// 'schedulerAccountId':paramsObj.schedulerAccountId
			}
		};

		console.log(1,paramsObj)
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer',data:paramsData.paramsList});
	}

	passengerHttp.getAllTripHistory = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'scheduler/'+paramsObj.schedulerId+'/secondCompany/'+paramsObj.secondCompanyId,
			paramsList:{
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber,
				'tripHistoryId': paramsObj.tripHistoryId,
				// 'vehicleLicensePlate': paramsObj.vehicleLicensePlate,
				'passengerName': paramsObj.passengerName
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.downloadTripHistory = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'excel/scheduler/'+paramsObj.schedulerId+'/secondCompany/'+paramsObj.secondCompanyId,
			paramsList:{
				// 'schedulerAccountId':paramsObj.schedulerAccountId
			}
		};

		console.log(1,paramsObj)
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer',data:paramsData.paramsList});
	}

	passengerHttp.getArrivalTime = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'display/arrivalTime/'+paramsObj.routeTemplateId,
			paramsList:{
				'beginTime':paramsObj.beginTime,
				'endTime':paramsObj.endTime,
				// 'routeTemplateId':paramsObj.routeTemplateId,
				'vehicleId':paramsObj.vehicleId,
				'routeTemplateType':paramsObj.routeTemplateType,
				'vehicleInfoFlag':paramsObj.vehicleInfoFlag
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	passengerHttp.downloadArrivalTime = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'download/arrivalTime/'+paramsObj.beginTime+'/endTime/'+paramsObj.endTime,
			// paramsList:{
			// 	// 'schedulerAccountId':paramsObj.schedulerAccountId
			// }
		};
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer'});
	}
	passengerHttp.getEmployeeList = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'web/tripHistory/'+paramsObj.userCompanyId+'/dateTime/'+paramsObj.dateTime,
			paramsList:{
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber,
				'routeTemplateId':paramsObj.routeTemplateId,
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	passengerHttp.downloadEmployeeList = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'tripHistory/'+paramsObj.userCompanyId+'/createTime/'+paramsObj.createTime,
		};
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer'});
	}
	passengerHttp.getRouteTemplateList = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'routeTemplateList/'+paramsObj.beginTime+'/endTime/'+paramsObj.endTime,
			paramsList:{
				// 'pageSize':paramsObj.pageSize,
				// 'pageNumber':paramsObj.pageNumber,
				'vehicleInfoFlag':paramsObj.vehicleInfoFlag,

				
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	// passengerHttp.getRouteStationList = function(paramsObj){
	// 	var paramsData = {
	// 		'apiPath':reportingService+'routeTemplateList/'+paramsObj.beginTime+'/endTime/'+paramsObj.endTime,
	// 		paramsList:{
	// 			// 'pageSize':paramsObj.pageSize,
	// 			// 'pageNumber':paramsObj.pageNumber,
	// 			'vehicleInfoFlag':paramsObj.vehicleInfoFlag,
	// 		}
	// 	};

	// 	return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	// }	
	passengerHttp.getArrivalTime = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'display/arrivalTime/'+paramsObj.routeTemplateId,
			paramsList:{
				'beginTime':paramsObj.beginTime,
				'endTime':paramsObj.endTime,
				// 'routeTemplateId':paramsObj.routeTemplateId,
				'vehicleId':paramsObj.vehicleId,
				'routeTemplateType':paramsObj.routeTemplateType,
				'vehicleInfoFlag':paramsObj.vehicleInfoFlag
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	passengerHttp.getRouteStationList = function(paramsObj){
		var paramsData = {
			'apiPath':reportingService+'count/'+paramsObj.routeTemplateId,
			paramsList:{
				'beginTime':paramsObj.beginTime,
				'endTime':paramsObj.endTime,
				'routeType':paramsObj.routeType
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}

	passengerHttp.downloadRouteStationList = function(paramsObj){
		var paramsData = {
			// http://reporting.apps.cl-cn-east-preprod01.cf.ford.com/api/NanjingShuttle/reportings/v1/count/download/2?routeTemplateName=3&downloadMonth=4&beginTime=5&endTime=6
			'apiPath':reportingService+'count/download/'+paramsObj.routeTemplateId+'?routeTemplateName='+encodeURIComponent(paramsObj.routeTemplateName)
			+'&downloadMonth='+encodeURIComponent(paramsObj.downloadMonth)+'&beginTime='+encodeURIComponent(paramsObj.beginTime)+'&endTime='
			+encodeURIComponent(paramsObj.endTime)+'&routeType='+encodeURIComponent(paramsObj.routeType),
			// paramsList:{
			// 	'routeTemplateName':paramsObj.routeTemplateName,
			// 	'downloadMonth':paramsObj.downloadMonth,
			// 	'beginTime':paramsObj.beginTime,
			// 	'endTime':paramsObj.endTime,
			// 	'routeType':paramsObj.routeType
			// }
		};
		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer'});
	}
	return passengerHttp;
});
angular.module('reportControllerModule',[]).controller('reportController',function($scope){
	$scope.tabList = [
		{'name':'记录数据','url':'admin.passenger.report.data'},
		{'name':'到达时间','url':'admin.passenger.report.arrival'},
		{'name':'乘车人员','url':'admin.passenger.report.passengers'},
		{'name':'班车站点','url':'admin.passenger.report.station'},
		{'name':'班车线路','url':'admin.passenger.report.busRoute'}
	]
})
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
		'driverName':'',
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
	
	$('.datepicker').datepicker({ 
		language: "zh-CN",
		startDate: new Date()
	});

	$scope.close = function(){
		$state.go('admin.scheduler.calendar')
	}
	
	$scope.stepOneSubmit = function(formValidateOneIsInvalid){

		if(formValidateOneIsInvalid){
			return utilFactory.setDirty($scope.formValidateOne);
		}

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

				//set default value for select options
				// $scope.params.driverObj = _targetObj.drivers[0];
				// $scope.params.routeTemplateObj = _targetObj.routeTemplate[0];
				// $scope.params.vehicleObj = _targetObj.vehicles[0];
				
				// get select value
				$scope.params.drivers = _targetObj.drivers.length?_targetObj.drivers:'';
				$scope.params.routeTemplate = _targetObj.routeTemplate.length? _targetObj.routeTemplate: '';
				$scope.params.vehicles = _targetObj.vehicles.length? _targetObj.vehicles: '';

				// $scope.params.drivers.unshift({'driverName':'请选择司机','driverId':null});
				// $scope.params.routeTemplate.unshift({'routeTemplateName':'请选择线路','routeTemplateId':null});
				// $scope.params.vehicles.unshift({'licensePlate':'请选择车辆','vehicleId':null});
				
				// $scope.params.driverObj = {'driverName':'请选择司机','driverId':null};
				// $scope.params.routeTemplateObj = {'routeTemplateName':'请选择线路','routeTemplateId':null};
				// $scope.params.vehicleObj = {'licensePlate':'请选择车辆','vehicleId':null};
				
				//close stepone page and show stepTwo page

		

				if((!_targetObj.drivers.length) ||( !_targetObj.routeTemplate.length) ||(!_targetObj.vehicles.length)){
					var _drivers = !_targetObj.drivers.length?'司机姓名':'';
					var _routeTemplate = !_targetObj.routeTemplate.length?'线路名称':'';
					var _vehicles = !_targetObj.vehicles.length?'牌照信息':'';
					alertify.alert('在该时间内暂无'+_drivers +' '+_routeTemplate+' '+_vehicles+' '+',请重新选择时间范围',function(){
						return 
					});
					return 
				}else{
					$scope.stepOne = false;
					$scope.stepTwo = true;
				}


			}else{
				utilFactory.checkErrorCode(_resultJSON.error.statusCode)
			}


		})

	}

	var myDate = new Date();
	var minute = myDate.getMinutes() > 9 && myDate.getMinutes() || ('0' + myDate.getMinutes());
	var startTime = myDate.getHours()+":"+minute;

	$("#departureTime").val(startTime)

	$('.clockpicker').clockpicker({
		placement: 'top',
		align: 'left',
		donetext: '确定',
		afterDone: function(){
			var _selectedTime = $("#departureTime").val();
			if($scope.params.routeType ==='AM' && (_selectedTime.split(":")[0]>12)){
				alertify.alert('上行线路发车时间不能晚于中午12点,请重新选择发车时间',function(){

				});
				startTime = $("#departureTime").val();
				return;
			}else if($scope.params.routeType ==='PM' && (_selectedTime.split(":")[0]<12)){
				alertify.alert('下行线路发车时间不能早于中午12点,请重新选择发车时间',function(){

				});
				startTime = $("#departureTime").val();
				return;
			}else{

				startTime = $("#departureTime").val();
				console.log('startTime:'+startTime)
			}
		}
	});

	$scope.stepTwoSubmit = function(formValidateTwoIsInvalid){
		if(formValidateTwoIsInvalid){
		
			//console.log($scope.params.routeTemplateObj.routeTemplateId+"123123xxx")
			//$scope.params.drivers.unshift({'driverName':'请选择司机','driverId':null});
			//$scope.params.routeTemplate.unshift({'routeTemplateName':'请选择线路','routeTemplateId':null});
			//$scope.params.vehicles.unshift({'licensePlate':'请选择车辆','vehicleId':''});
			return utilFactory.setDirty($scope.formValidateTwo);
		}

		if(!$scope.params.routeTemplateObj.routeTemplateId){
			$scope.params.routeTemplateObj = '';
			return
		}

		if(!$scope.params.vehicleObj.vehicleId){
			$scope.params.vehicleObj = '';
			return
		}

		if(!$scope.params.driverObj.driverId){
			$scope.params.driverObj = '';
			return
		}

		if($scope.params.routeType ==='AM' && (startTime.split(":")[0]>12)){
			alertify.alert('上行线路发车时间不能晚于中午12点,请重新选择发车时间',function(){

			});
			startTime = $("#departureTime").val();
			return;
		}else if($scope.params.routeType ==='PM' && (startTime.split(":")[0]<12)){
			alertify.alert('下行线路发车时间不能早于中午12点,请重新选择发车时间',function(){
				
			});
			startTime = $("#departureTime").val();
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
		
		var _formateDepartureTime = (utilFactory.getTimestamp($scope.params.beginDate + ' '+startTime) - utilFactory.getTimestamp($scope.params.beginDate + ' 00:00'));

		var _stepTwoParams = {
  			'beginDate': _stepOneParams.beginDate,
			'departureTime': _formateDepartureTime,
			'driverId': $scope.params.driverObj.driverId,
			'endDate': _stepOneParams.endDate,
			'includeSaturday': _stepOneParams.includeSaturday,
			'includeSunday': _stepOneParams.includeSunday,
			'routeType': _stepOneParams.routeType,
			'routeId': $scope.params.routeTemplateObj.routeTemplateId,
			// 'routeId':2358710021965824,
			'schedulerId': utilFactory.getAccountId(),
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'vehicleId': $scope.params.vehicleObj.vehicleId,
			'driverName': $scope.params.driverObj.driverName
		};

		schedulerHttpService.addAssignment(_stepTwoParams).then(function(result){
			var _resultData = result.data;

			// var _targetObj = _resultJSON.value;

			// if(!_targetObj.drivers.length){
			// 	var _drivers = !_targetObj.drivers.length?'司机姓名':'';
			// 	alertify.alert('请选择司机',function(){

			// 	});
			// }else{
			// 	$scope.stepOne = true;
			// 	$scope.stepTwo = false;
		
			// }
			if(!_resultData.error){
				alertify.alert('新增成功!',function(){
					$state.go('admin.scheduler.calendar')
				});
				
			} else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});

	}

	$scope.stepTwoPre = function(){
		$scope.stepOne = true;
		$scope.stepTwo = false;
	}
});
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
angular.module('schedulerAddBusControllerModule',[])
.controller('schedulerAddBusController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){
	if($stateParams.secondCompanyId && $stateParams.schedulerId){ 
		$scope.params = {
		  // "annualInspectionExpiration":$stateParams.annualInspectionExpiration,
		  // "availableSeats": $stateParams.availableSeats,
		  // "engineNumber": $stateParams.engineNumber,
		  // "insuranceExpiration": $stateParams.insuranceExpiration,
		  // "licensePlate": $stateParams.licensePlate,
		  "schedulerId": $stateParams.schedulerId,
		  "secondCompanyId": $stateParams.secondCompanyId,
		  'busCompany':[{'name':'数据加载中...','id':null}],
		  'noDataForOptionList':false
		  // "shuttleCompanyId": $stateParams.shuttleCompanyId,
		  // "vehicleLicense": $stateParams.vehicleLicense,
		  // "vehicleModel": $stateParams.vehicleModel,
		  // "vin": $stateParams.vin
		}
		$scope.breadcrumbParams = {
			'schedulerId':$stateParams.schedulerId,
			'secondCompanyId':$stateParams.secondCompanyId	
		}
		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={
			'lv1':'车辆管理',
			'lv2':'新增车辆'
		}

		// Get bus company list
		schedulerHttpService.getBusCompany({'schedulerId': $stateParams.schedulerId,'secondCompanyId': $stateParams.secondCompanyId}).then(function(result){
			var	_resultData = result.data;

			if(!_resultData.error){
				$scope.params.busCompany.length = 0;
				_resultData.value.list.length? $scope.params.busCompany = _resultData.value.list :$scope.params.noDataForOptionList = true
			} else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});
	}else{
		$state.go('admin.scheduler.bus')
	}

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


	$scope.editDriverProfile = function(flag){
		$scope.active = !flag;
	};


	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.scheduler.bus')
		},function(){});	
	}

	$scope.submitDriverProfile = function(formValidateIsInvalid){

		if(formValidateIsInvalid) return utilFactory.setDirty($scope.formValidate);

		alertify.confirm('确认新增 "'+$scope.params.licensePlate+'"?',function(){
			$scope.submitOnProgress = true;
			$scope.submitStatusText = "正在创建中...";

			var _params = {
				"annualInspectionExpiration":utilFactory.getTimestamp($scope.params.annualInspectionExpiration),
				"availableSeats": $scope.params.availableSeats,
				"engineNumber": $scope.params.engineNumber,
				"insuranceExpiration": utilFactory.getTimestamp($scope.params.annualInspectionExpiration),
				//"insuranceExpiration": utilFactory.getTimestamp($scope.params.insuranceExpiration),
				"licensePlate": $scope.params.licensePlate,
				"schedulerId": utilFactory.getAccountId(),
				"secondCompanyId": utilFactory.getSecondCompanyId(),
				"shuttleCompanyId":$scope.params.busCompanyObj.id,
				'shuttleCompanyName': $scope.params.busCompanyObj.name,
				"vehicleLicense": $scope.params.vehicleLicense,
				"vehicleModel": $scope.params.vehicleModel,
				"vin": $scope.params.vin
			}
			
			schedulerHttpService.addBus(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
		
					alertify.alert('新增成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('admin.scheduler.bus')
					})
				}else{
					$scope.submitStatusText = '完成';
					utilFactory.checkErrorCode(responseData.error.statusCode);
					$scope.submitOnProgress = false;
				}
			
			},function(errorResult){
				$scope.submitStatusText = '完成';
				$scope.active = true;
				alertify.alert(errorResult.error.message)
			})
		},function(){}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	};
})
angular.module('schedulerBusControllerModule',[])
.controller('schedulerBusController',function(loadData,utilFactory,schedulerHttpService,$state,$scope){
	
	
	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	if(!loadData.data.error &&(!loadData.data.value || !loadData.data.value.list.length)){
		$scope.dataIsEmpty = true;
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
	}

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'accountId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getBusList(params)
		},
		loadData:function(){
		},
		dataSet:function(result){
		}
		//extendParams:function(){}
	}


	$scope.searchFn = function(){
		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1','licensePlate':$scope.searchText});
	}
	$scope.addBus = function(){
		$state.go('admin.scheduler.addBus',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
	};

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看详情',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var paramsObj = item;
					$state.go('admin.scheduler.busDetail',{
						'annualInspectionExpiration': item.annualInspectionExpiration,
						'availableSeats': item.availableSeats,
						'engineNumber': item.engineNumber,
						'insuranceExpiration': item.insuranceExpiration,
						'licensePlate': item.licensePlate,
						'schedulerId': utilFactory.getAccountId(),
						'shuttleCompanyId': item.shuttleCompanyId,
						'shuttleCompanyName':item.shuttleCompanyName  || '——',
						'secondCompanyId':utilFactory.getSecondCompanyId(),
						'vehicleId': item.vehicleId,
						'vehicleLicense': item.vehicleLicense,
						'vehicleModel': item.vehicleModel,
						'vin': item.vin
					});
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){

					alertify.confirm('该车辆可能有排班任务，如继续删除，排班任务也将被清空！',function(){
						schedulerHttpService.deleteBusByID({'schedulerId':utilFactory.getAccountId(),'vehicleId':item.vehicleId}).then(function(result){
							var _resultData = result.data;
							if(!_resultData.error) {
								$state.go('admin.scheduler.bus',{},{reload:true})
							}else{
								utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.statusText)
							}
						})
					},function(){}).set({labels:{cancel: '取消',ok:'坚持删除'}, padding: true});
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
		defaultValue:'——',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'licensePlate','value':'车辆牌照'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'vehicleModel','value':'车辆类型'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'availableSeats','value':'座位数'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'shuttleCompanyName','value':'运营单位'},
					'checkFlag':true
				}
	    	]
	    }
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});

})
angular.module('schedulerBusDetailControllerModule',[])
.controller('schedulerBusDetailController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){

	if($stateParams.schedulerId){
		
		$scope.params = {
			'vehicleId': $stateParams.vehicleId,
			'schedulerId': $stateParams.schedulerId,
			'annualInspectionExpiration': $stateParams.annualInspectionExpiration?utilFactory.getLocalTime($stateParams.annualInspectionExpiration).split(',')[0]: '——',
			'availableSeats': $stateParams.availableSeats,
			'engineNumber': $stateParams.engineNumber  || '——',
			'insuranceExpiration': $stateParams.insuranceExpiration?utilFactory.getLocalTime($stateParams.insuranceExpiration).split(',')[0] : '——',
			'licensePlate': $stateParams.licensePlate,
			'schedulerId': $stateParams.schedulerId,
			'secondCompanyId': $stateParams.secondCompanyId,
			'shuttleCompanyId': $stateParams.shuttleCompanyId,
			'shuttleCompanyName': $stateParams.shuttleCompanyName,
			'vehicleLicense': $stateParams.vehicleLicense || '——',
			'vehicleModel': $stateParams.vehicleModel || '——',
			'vin': $stateParams.vin || '——',
			'busCompany':[{'name':'数据加载中...','id':null}],
			'noDataForOptionList':false
		}


		$scope.active = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={'lv1':'车辆管理','lv2':'车辆详情'};


		// Get bus company list 
		schedulerHttpService.getBusCompany({'schedulerId': $scope.params.schedulerId,'secondCompanyId': $scope.params.secondCompanyId}).then(function(result){
			var	_resultData = result.data;

			if(!_resultData.error){
				$scope.params.busCompany.length = 0;
				_resultData.value.list.length? $scope.params.busCompany = _resultData.value.list :$scope.params.noDataForOptionList = true;
			} else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});


	}else{
		$state.go('admin.scheduler.bus')
	}

	$scope.editBusProfile = function(flag){
		$scope.params['engineNumber'] = $stateParams.engineNumber  || '';
		$scope.params['vehicleLicense'] = $stateParams.vehicleLicense  || '';
		$scope.params['vehicleModel'] = $stateParams.vehicleModel  || '';
		$scope.params['vin'] = $stateParams.vin  || '';
		$scope.params.busCompanyObj = {'name':$scope.params.shuttleCompanyName,'id':$scope.params.shuttleCompanyId};
	
		$scope.active = !flag;
	};

	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.scheduler.bus')
		},function(){

		});
	}

	$scope.updateBusProfile = function(formValidateIsInvalid){

		if(formValidateIsInvalid) return utilFactory.setDirty($scope.formValidate);

		alertify.confirm('确认更新牌照信息为"'+$scope.params.licensePlate+'"的车辆?',function(){
			$scope.submitOnProgress = true;
			$scope.submitStatusText = "正在更新中...";

			var _params = {
				"annualInspectionExpiration":utilFactory.getTimestamp($scope.params.annualInspectionExpiration),
				"availableSeats": $scope.params.availableSeats,
				"engineNumber": $scope.params.engineNumber,
				"insuranceExpiration": utilFactory.getTimestamp($scope.params.annualInspectionExpiration),
				//"insuranceExpiration": utilFactory.getTimestamp($scope.params.insuranceExpiration),
				"licensePlate": $scope.params.licensePlate,
				"schedulerId": $scope.params.schedulerId,
				"secondCompanyId": $scope.params.secondCompanyId,
				"shuttleCompanyId": $scope.params.busCompanyObj.id,
				"shuttleCompanyName": $scope.params.busCompanyObj.name,
				"vehicleLicense": $scope.params.vehicleLicense,
				"vehicleModel": $scope.params.vehicleModel,
				"vin": $scope.params.vin,
				'vehicleId':$scope.params.vehicleId
			};


			schedulerHttpService.updateBus(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$state.go('admin.scheduler.bus')
					alertify.alert('更新成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('admin.scheduler.bus')
					})
				}else{
					$scope.submitStatusText = '完成';
					utilFactory.checkErrorCode(responseData.error.statusCode);
					$scope.submitOnProgress = false;
				}
			
			},function(errorResult){
				$scope.submitStatusText = '完成';
				$scope.active = true;
				alertify.alert(errorResult.error.message)
			})
		},function(){

		}).set({labels:{ok:'确定', cancel: '取消'}, padding: true});;
	};
})
angular.module('schedulerbusCompanyControllerModule',[])
.controller('schedulerbusCompanyController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){
	
	$scope.params = {
		'secondCompanyId':utilFactory.getSecondCompanyId(),
		'schedulerId':utilFactory.getAccountId()
	};
	$scope.active = false;
	$scope.submitOnProgress = false;
	$scope.breadcrumbText={'lv1':'运营单位'}

	$scope.submitBusCompany = function(formValidate){
		if(formValidate){ return utilFactory.setDirty($scope.formValidate);}

		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.params.secondCompanyId,
			'schedulerId': $scope.params.schedulerId,
			'name': $scope.params.name,
		}
		alertify.confirm('确认新增名为"'+$scope.params.name+'"的这个运营单位？',function(){
			schedulerHttpService.addBusCompany(_params).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					alertify.alert('新增成功！',function(){
						$state.go('admin.scheduler.busCompany',{},{reload:true});
					})
					
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.message);
					$scope.submitOnProgress = false;
				}
				$scope.submitOnProgress = false;
			},function(){
				$scope.submitOnProgress = false;
			})
		},function(){
			$scope.submitOnProgress = false;
		}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	};


	$scope.close = function(){ $('#myModal').modal('toggle');}
	$scope.updateBusCompany = function(updateFormValidateIsInvalid){

		if(updateFormValidateIsInvalid){ return utilFactory.setDirty($scope.updateFormValidate);}

		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.updateParams.secondCompanyId,
			'schedulerId': $scope.params.schedulerId,
			'name': $scope.updateParams.name,
			'partyId': $scope.updateParams.partyId
			//'phoneNumber': $scope.updateParams.phoneNumber,
			//'roleCode':$scope.updateParams.roleCode,
			//'status':$scope.updateParams.status
		}
		$('#myModal').modal('toggle');
		schedulerHttpService.updateBusCompany(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('admin.scheduler.busCompany',{},{reload:true});
				})
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.message)
			}
			$scope.submitOnProgress = false;
		},function(){
			$scope.submitOnProgress = false;
		})
	};	


	$scope.pageConfigs={
		params:{
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'schedulerId': utilFactory.getAccountId(),
			'pageSize':'',
			'pageNumber':''
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getBusCompany(params)
		},
		loadData:function(){	},
		dataSet:function(result){}
		//extendParams:function(){}
	}

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operateIfFlag:true,
			operate:[{
				name:'编辑',
				ngIf:function(){
					return true
				},
				fun:function(item,event){
					$scope.updateParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'partyId':item.partyId
					}
					$('#myModal').modal('toggle');
				}
			}
			,
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _deleteParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'partyId':item.partyId
					}
					alertify.confirm('该公司车辆以及司机可能有排班任务，继续删除该公司将会删除所有相关司机，车辆及线路！',function(){
						schedulerHttpService.deleteBusCompany(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('admin.scheduler.busCompany',{},{reload:true});
							} else{
								utilFactory.checkErrorCode(_resultData.error.statusCode)
							}
						});
					},function(){

					});
		
				}
			}
			]
		},
		// height:290,
		// head:[{name:'文件名',key:'filename'}],
		// className:function(flag){},
		// clickFun:function(){},
		// rowClickFun:function(item){},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		defaultEmptyText:'还未添加过任何运营公司',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'单位名称'},
					'checkFlag':true
				}
				// {
				// 	'parentKey':'',
				// 	'selfKey':{'key':'phoneNumber','value':'手机号'},
				// 	'checkFlag':true
				// }
	    	]
	    }
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'',pageNo:''});
	});
})
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
					    var _todayB =y+"-"+m+"-0"+d;
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
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		})
	};
	
	$scope.alertOnEventClick = function( date, jsEvent, view){			
		$('#myModal').modal('toggle');

		var _params = {
			'date':utilFactory.getTimestamp(date.start._i+" 00:00"),
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
				utilFactory.checkErrorCode(_resultData.error.statusCode)
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
angular.module('schedulerControllerModule',[])
.controller('schedulerController',function($scope){
	$scope.icon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';

	$scope.menuArray =[

		{
			'title':{'name':'班车管理','icon':$scope.icon,'class':'scheduler'},
			'menuList':[
				{'name':'线路管理','class':'','permission':'','uiSref':'scheduler.route','href':'route'},
				{'name':'站点管理','class':'','permission':'','uiSref':'scheduler.site','href':'site'},
				{'name':'运营单位','class':'','permission':'','uiSref':'scheduler.busCompany','href':'busCompany'},
				{'name':'司机管理','class':'','permission':'','uiSref':'scheduler.driver','href':'driver'},
				{'name':'车辆管理','class':'','permission':'','uiSref':'scheduler.bus','href':'bus'},
				{'name':'排班管理','class':'','permission':'','uiSref':'scheduler.calendar','href':'calendarList'}
			]
		}
	];
});
angular.module('schedulerAddDriverControllerModule',[])
.controller('schedulerAddDriverController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){

	if($stateParams.schedulerId  &&$stateParams.secondCompanyId){
		$scope.params = {
			// 'phoneNumber':$stateParams.phoneNumber,
			// 'roleType':$stateParams.roleType,
			// 'name':$stateParams.name,
			// 'accountId':$stateParams.accountId,
			// 'driverUUID':$stateParams.driverUUID,
			'schedulerId':$stateParams.schedulerId ,
			'secondCompanyId':$stateParams.secondCompanyId,
			'busCompany':[{'name':'数据加载中...','id':null}],
			'noDataForOptionList':false
			// 'shuttleCompanyId':$stateParams.shuttleCompanyId,
			// 'licenseID':$stateParams.licenseID,
			// 'licenseExpirationDate':$stateParams.licenseExpirationDate,
			// 'identityCard':$stateParams.identityCard
		};
		console.log("$stateParams.secondCompanyId"+$stateParams.secondCompanyId);
		// Get bus company list
		schedulerHttpService.getBusCompany({'schedulerId': $scope.params.schedulerId,'secondCompanyId': $scope.params.secondCompanyId}).then(function(result){
			
			var	_resultData = result.data;

			if(!_resultData.error){
				$scope.params.busCompany.length = 0;
				_resultData.value.list.length? $scope.params.busCompany = _resultData.value.list :$scope.params.noDataForOptionList = true;
				//$scope.params.busCompany.unshift({'name':'请选择运营单位','partyId':'?'})
			} else{
				alertify.aleret(_resultData.error.message)
			}
		});

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


		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.breadcrumbText={
			'lv1':'司机管理',
			'lv2':'新增司机'
		}
	}else{
		$state.go('admin.scheduler.driver')
	}

	// form information haven't been completed by user and then user trigger ‘取消’
	// we should provide messages for user
	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.scheduler.driver')
		},function(){

		});
	}


	// form information completed by user and the group params whin _params obj
	// invoke API, before invoke api we need to check all filed's status by 'setDirty'
	// services.
	$scope.submitDriverProfile = function(formValidateIsInvalid){
		var currentTimestamp=new Date().getTime();
		var selectedTimestamp = utilFactory.getTimestamp($scope.params.licenseExpirationDate);
		// if all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		if(formValidateIsInvalid) return utilFactory.setDirty($scope.formValidate);
		if(currentTimestamp > selectedTimestamp){
			return alertify.alert('驾照已过期',function(){})
		}
		alertify.confirm('确认新增名为"'+$scope.params.name+'"的司机？',function(){	
			$scope.submitOnProgress = true;
			$scope.submitStatusText = '正在创建中';
			
			var _params = {
				
				'secondCompanyId': $scope.params.secondCompanyId,
				'licenseID': $scope.params.licenseID,
				'licenseExpirationDate': utilFactory.getTimestamp($scope.params.licenseExpirationDate),
				'name': $scope.params.name,
				'phoneNumber': $scope.params.phoneNumber,
				'schedulerId': $scope.params.schedulerId,
				'shuttleCompanyId': $scope.params.busCompanyObj.id,
				'shuttleCompanyName':$scope.params.busCompanyObj.name
			}


			schedulerHttpService.addDriver(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					//$state.go('admin.scheduler.driver')
					alertify.alert('新增成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('admin.scheduler.driver')
					})
				}else{
					$scope.submitStatusText = '完成';
					utilFactory.checkErrorCode(responseData.error.statusCode)
					$scope.submitOnProgress = false;
				}
			
			},function(errorResult){
				$scope.submitStatusText = '完成';
				$scope.active = true;
				alertify.alert(errorResult.error.message)
			});
		}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	};

})
angular.module('schedulerDriverControllerModule',[])
.controller('schedulerDriverController',function(loadData,schedulerHttpService,utilFactory,$state,$scope){
	
	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	if(!loadData.data.error &&(!loadData.data.value || !loadData.data.value.list.length)){
		console.log('test test')
		$scope.dataIsEmpty = true;
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
	}


	$scope.selectAllStatus = false;
	$scope.queryByKeyObj = {
		'active':{'key':'driverName','value':'司机姓名'},
		'list':[{'key':'phoneNumber','value':'手机号'}]
	}

	$scope.selectKey = function(activeObj){
		$scope.queryByKeyObj.list.length = 0;
		$scope.queryByKeyObj.list.push( {'key':$scope.queryByKeyObj.active.key,'value':$scope.queryByKeyObj.active.value})
		$scope.queryByKeyObj.active.key = activeObj.key;
		$scope.queryByKeyObj.active.value = activeObj.value;
		$('.dropdown-menu').css('display','none');
	}

	$scope.showQueryKeyList = function(){
		$('.dropdown-menu').css('display','block')
	}

	$scope.searchFn = function(){
		var _searchParams = {
			'pageSize':'20',
			'pageNumber':'1',
			'pageNo': '1',
			'accountId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		}
		_searchParams[$scope.queryByKeyObj.active.key] = $scope.searchText;
		$scope.pageConfigs.getList(_searchParams);
		$scope.$broadcast('refreshPageList',_searchParams);
	}
	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'accountId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getDriverList(params)
		},
		loadData:function(){},
		dataSet:function(result){}
		//extendParams:function(){}
	}

	// add new driver
	$scope.addDriver = function(){
		$state.go('admin.scheduler.addDriver',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
	};

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看详情',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _params = {
						'schedulerId': utilFactory.getAccountId(),
						'identityCard': item.identityCard,
						'licenseExpirationDate': item.licenseExpirationDate,
						'licenseId': item.licenseId,
						'name': item.name,
						'driverId': item.partyId,
						'phoneNumber': item.phoneNumber,
						'secondCompanyId': item.secondCompanyId,
						'shuttleCompanyName':item.shuttleCompanyName,
						'shuttleCompanyId': item.shuttleCompanyId,
						'secondCompanyName': item.secondCompanyName
					}

					$state.go('admin.scheduler.driverDetail',_params);
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _params = {
						'schedulerId': utilFactory.getAccountId(),
						'identityCard': item.identityCard,
						'licenseExpirationDate': item.licenseExpirationDate,
						'licenseId': item.licenseId,
						'name': item.name,
						'driverId': item.partyId,
						'phoneNumber': item.phoneNumber,
						'secondCompanyId': item.secondCompanyId,
						'secondCompanyName': item.secondCompanyName,
					}

					alertify.confirm('该司机可能有排班任务，如继续删除，排班任务也将被清空！',function(){
						schedulerHttpService.deleteDriverByID(_params).then(function(result){
							var _resultData = result.data;

							if(!_resultData.error){
								$state.go('admin.scheduler.driver',{},{reload:true})
							}else {
								utilFactory.checkErrorCode(_resultData.error.statusCode)
							}
							
						});
					},function(){}).set({labels:{cancel: '取消',ok:'坚持删除'}, padding: true});
				}
			},
			]
		},
		// height:290,
		// head:[{name:'文件名',key:'filename'}],
		// className:function(flag){},
		// clickFun:function(){},
		// rowClickFun:function(item){},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		// radioSelect:function(){},

		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'司机姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'shuttleCompanyName','value':'运营单位'},
					'checkFlag':true
				}
	    	]
	    }
		// changeEnable:function(item){}
	}

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});

})
angular.module('schedulerDriverDetailControllerModule',[])
.controller('schedulerDriverDetailController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){
	//$stateParams.schedulerUUID && $stateParams.secondCompanyId
	if($stateParams.schedulerId){
		//get params from driver list
		// utilFactory.getLocalTime($stateParams.annualInspectionExpiration/1000).split(',')[0]
		$scope.params = {
			'schedulerId': $stateParams.schedulerId,
			'identityCard': $stateParams.identityCard || '———',
			'licenseExpirationDate': $stateParams.licenseExpirationDate?utilFactory.getLocalTime($stateParams.licenseExpirationDate).split(',')[0] : '———',
			'licenseID': $stateParams.licenseId || '———',
			'name': $stateParams.name || '———',
			'driverId': $stateParams.driverId,
			'phoneNumber': $stateParams.phoneNumber || '———',
			'secondCompanyId': $stateParams.secondCompanyId,
			'secondCompanyName': $stateParams.secondCompanyName,
			'shuttleCompanyName': $stateParams.shuttleCompanyName || '———',
			'shuttleCompanyId': $stateParams.shuttleCompanyId,
			'busCompany':[{'name':'数据加载中...','id':null}],
			'noDataForOptionList':false
		};


		// Get bus company list 
		schedulerHttpService.getBusCompany({'schedulerId': $scope.params.schedulerId,'secondCompanyId': $scope.params.secondCompanyId}).then(function(result){
			var	_resultData = result.data;
			if(!_resultData.error){
				$scope.params.busCompany.length = 0;
				_resultData.value.list.length? $scope.params.busCompany = _resultData.value.list :$scope.params.noDataForOptionList = true;
				
			} else{
				alertify.aleret(_resultData.error.message)
			}
		});


		//set default params for driver detail
		$scope.active = false;
		$scope.submitOnProgress = false;

		$scope.breadcrumbText={
			'lv1':'司机管理',
			'lv2':'司机详情'
		}


	}else{
		$state.go('admin.scheduler.driver')
	}

	$scope.editPassengerProfile = function(flag){
		$scope.params['licenseID'] = $stateParams.licenseId || '',
		//$scope.params['identityCard'] = $stateParams.identityCard || '',
		$scope.params['licenseExpirationDate'] = $stateParams.licenseExpirationDate?utilFactory.getLocalTime($stateParams.licenseExpirationDate).split(',')[0] : ' '
		$scope.params['name'] = $stateParams.name || '',
		$scope.params['phoneNumber'] = $stateParams.phoneNumber || '',
		$scope.params['shuttleCompanyName'] = $stateParams.shuttleCompanyName || ''
		$scope.params.busCompanyObj = {'name':$scope.params.shuttleCompanyName,'id':$scope.params.shuttleCompanyId};

		//scope.$apply();
		//console.log(1,$scope.params)
		// $scope.params = {
		// 	'identityCard': $stateParams.identityCard || '',
		// 	'licenseExpirationDate': $stateParams.licenseExpirationDate?utilFactory.getLocalTime($stateParams.licenseExpirationDate).split(',')[0] : ' ',
		// 	'licenseID': $stateParams.licenseId || '',
		// 	'name': $stateParams.name || '',
		// 	'phoneNumber': $stateParams.phoneNumber || '',
		// 	'shuttleCompanyName': $stateParams.shuttleCompanyName || '',
		// 	'busCompany':[{'name':'数据加载中...','id':null}]
		// };
		//$scope.params['busCompanyObj'] = 'sadfasdf';
		$scope.active = !flag;

	};

	$scope.close = function(){
		alertify.confirm('请确认是否离开该页面,未保存的数据将在离开之后丢失。',function(){
			$state.go('admin.scheduler.driver')
		},function(){

		});
	}

	// form information completed by user and the group params whin _params obj
	// invoke API, before invoke api we need to check all filed's status by 'setDirty'
	// services.
	$scope.submitDriverProfile = function(formValidateIsInvalid){
		$scope.active = true;
		var currentTimestamp=new Date().getTime();
		var selectedTimestamp = utilFactory.getTimestamp($scope.params.licenseExpirationDate);
		// all input filed empty and then user trigger submit button
		// we will provide message for user to complete the requre filed.
		if(formValidateIsInvalid) return utilFactory.setDirty($scope.formValidate);
		if(currentTimestamp > selectedTimestamp){
			return alertify.alert('驾照已过期',function(){})
		}
		alertify.confirm('确认更新司机"'+$scope.params.name+'"?',function(){
		
			$scope.submitOnProgress = true;
			$scope.submitStatusText = "正在更新中...";

			var _params = {
				'schedulerId': $scope.params.schedulerId,
				'identityCard': $scope.params.identityCard,
				'licenseExpirationDate': utilFactory.getTimestamp($scope.params.licenseExpirationDate),
				'licenseId': $scope.params.licenseID,
				'name': $scope.params.name,
				'driverId': $scope.params.driverId,
				'phoneNumber': $scope.params.phoneNumber,
				'shuttleCompanyId':$scope.params.busCompanyObj.id,
				'shuttleCompanyName': $scope.params.busCompanyObj.name,
				'secondCompanyId': $scope.params.secondCompanyId,
				'secondCompanyName': $scope.params.secondCompanyName
			}
		
			schedulerHttpService.updateDriverByID(_params).then(function(result){
				var responseData = result.data;
				if(!responseData.error){
					$state.go('admin.cheduler.driver')
					alertify.alert('更新成功！',function(){
						$scope.submitStatusText = '完成';
						$scope.active = true;
						$state.go('admin.scheduler.driver')
					})
				}else{
					$scope.submitStatusText = '完成';
					utilFactory.checkErrorCode(responseData.error.statusCode);
					$scope.submitOnProgress = false;
				}
			},function(errorResult){
				$scope.submitStatusText = '完成';
				$scope.active = true;
				alertify.alert(errorResult.error.message)
			})
		},function(){
			$scope.submitOnProgress = false;
		}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});	
	};
})
angular.module('schedulerAddRouteControllerModule',[])
.controller('schedulerAddRouteController',function(utilFactory,schedulerHttpService,$timeout,$stateParams,$state,$scope){

	var _accountId = $stateParams.schedulerId || utilFactory.getAccountId();
	var _secondCompanyId = $stateParams.secondCompanyId || utilFactory.getSecondCompanyId();
	$scope.stepOne = true;
	$scope.stepTwo = false;
	$scope.stepThree = false;
	if(_accountId &&_secondCompanyId){
		$scope.params = {
		  	'routeName':'',
		  	'stationName':'',
		  	'schedulerId': _accountId,
		  	'secondCompanyId': _secondCompanyId,
		  	'routeType':'',
		  	'routeTypeError':false,
		  	'stationList':[],
		  	'stationList_2':[],
		  	'stationList_3':[]
		}

		$scope.active = true;
		$scope.submitOnProgress = false;

		$scope.routeTypeList = [
			{'name':'上行/下行','routeType':'All','status':false},
			{'name':'仅上行','routeType':'AM','status':false},
			{'name':'仅下行','routeType':'PM','status':false}
		];
		//$scope.params.routeType = 'All';


		$scope.breadcrumbText={'lv1':'线路管理','lv2':'新增线路'}
		// $scope.sortableOptions = {
		// 	placeholder: "dragItem",
		// 	connectWith: ".dragWrapper"
		// };

		// $scope.sortableOptions_2 = {
		// 	placeholder: "dragItem_2",
		// 	connectWith: ".dragWrapper_2"
		// };

	}else{
		$state.go('admin.scheduler.route')
	}

	$scope.selectRouteType = function (routeType) {
		$scope.params.routeTypeError = false;
		$scope.params.routeTypeStautsFlag = true;
		$scope.params.routeType = routeType;
	}

	// Search result by stationName 
	$scope.searchByStationNameForStepTwo = function(){
		var _routeType = $scope.params.routeType =='All'?'AM':$scope.params.routeType;
		schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationName':$scope.params.stationName,'stationType':_routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				$scope.params.stationList = _resultData.value.list; 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode);
			}
		});
	}

	$scope.searchByStationNameForStepThree = function(){
		var _routeType = 'PM';
		schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationName':$scope.params.stationName,'stationType':_routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				$scope.params.stationListForPM = _resultData.value.list; 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode);
			}
		});	
	}

	// submit step one 
	$scope.stepOneSubmit = function(formValidateIsInvalid){
		
		// Submit empty form will provide error messages
		if($scope.params.routeType == ''){
			$scope.params.routeTypeError = true;
		}
		if(formValidateIsInvalid || $scope.params.routeType == ''){

			return 	utilFactory.setDirty($scope.formValidateOne);
		}
		var _routeType = $scope.params.routeType =='All'?'AM':$scope.params.routeType;
		// Get site list for user create site under current route
		schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationType':_routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				
				$scope.params.stationList = _resultData.value.list.length ? $scope.params.stationList = _resultData.value.list : $scope.params.stationList=[{'stationName':'暂无数据'}]; 

			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});
		

		$scope.stepOne = false;
		$scope.stepTwo = true;
	}

	$scope.pre = function(){
		$scope.stepOne = true;
		$scope.stepTwo = false;
	}

	$scope.stepThreePre = function(){
		$scope.params.stationListForPM = null;
		$scope.searchByStationNameForStepTwo()
		$scope.stepThree = false;
		$scope.stepTwo = true;
		
	}
	$scope.close = function(){
		$state.go('admin.scheduler.route')
	}

	$scope.stepTwoSubmit = function(formValidateTwo,obj){
	
		var _stationListArray = angular.copy($scope.params.stationList_2);
		console.log('****** formValidateTwo *******')
		console.log(1,$scope.formValidateTwo)
		if(!formValidateTwo){
			
			utilFactory.setDirty($scope.formValidateTwo)
			return
		}
		
		// Logic for PM or AM only
		if($scope.params.routeType !='All'){
			// Get All selected sites and removed some unuse params.

			if(_stationListArray.length<2) return alertify.alert('请添加至少两个站点',function(){})
			
			for(var i=0;i<_stationListArray.length;i++){
				// filter unuse params
				delete _stationListArray[i]['address'];
				delete _stationListArray[i]['gps'];
				delete _stationListArray[i]['stationName'];
				delete _stationListArray[i]['status'];

				_stationListArray[i]['departureTime'] = _stationListArray[i]['departureTime']?_stationListArray[i]['departureTime']:'0';
				_stationListArray[i]['stationId'] =  _stationListArray[i]['stationId'] == ''?_stationListArray[i]['stationId'] ='0':_stationListArray[i]['stationId']+'';
				
				// if routeType equals All, return AM as the default Route Type for last step.
				_stationListArray[i]['routeType'] = _stationListArray[i]['stationType'] == 'All'?'AM':_stationListArray[i]['stationType'];
				
				delete _stationListArray[i]['stationType'];
			}
			var _params = {
				'routeName': $scope.params.routeName,
				'schedulerId': utilFactory.getAccountId(),
				'secondCompanyId': utilFactory.getSecondCompanyId(),
				'stationList': _stationListArray
			}
			console.log(1,_stationListArray);
			schedulerHttpService.addRoute(_params).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){			
					alertify.alert('新增成功！',function(){
						$state.go('admin.scheduler.route')
					}) 
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			});
		}else{

			if(_stationListArray.length<2) return alertify.alert('请添加至少两个站点',function(){})
			// Logic For routeType All
			schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationType':'PM'}).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					
					$scope.params.stationListForPM = _resultData.value.list.length ? $scope.params.stationList = _resultData.value.list : $scope.params.stationList=[{'stationName':'暂无数据'}]; 

				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			});

			$scope.stepTwo = false;
			$scope.stepThree = true;
		}
	}

	// Logic for routeType All
	$scope.stepThreeSubmit = function(formValidateThree){

		if(!formValidateThree) return utilFactory.setDirty($scope.formValidateThree)
		var _stationListForAllArray = [];
		if($scope.params.stationList_3.length<2) return alertify.alert('请添加至少两个站点',function(){})

		// var _stationListArray = angular.copy($scope.params.stationList_2);
		var _stationListForAllArray = angular.copy($scope.params.stationList_2.concat($scope.params.stationList_3));
		for(var i=0;i<_stationListForAllArray.length;i++){
			// filter unuse params
			delete _stationListForAllArray[i]['address'];
			delete _stationListForAllArray[i]['gps'];
			delete _stationListForAllArray[i]['stationName'];
			delete _stationListForAllArray[i]['status'];

			_stationListForAllArray[i]['departureTime'] = _stationListForAllArray[i]['departureTime']?_stationListForAllArray[i]['departureTime']:'0';
			_stationListForAllArray[i]['stationId'] =  _stationListForAllArray[i]['stationId'] == ''?_stationListForAllArray[i]['stationId'] ='0':_stationListForAllArray[i]['stationId']+'';

			// if routeType equals All, return AM as the default Route Type for last step.
			_stationListForAllArray[i]['routeType'] = _stationListForAllArray[i]['stationType'] == 'All'?'PM':_stationListForAllArray[i]['stationType'];

			delete _stationListForAllArray[i]['stationType'];
		}
		var _params = {
			'routeName': $scope.params.routeName,
			'schedulerId': utilFactory.getAccountId(),
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'stationList': _stationListForAllArray
		}

		schedulerHttpService.addRoute(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('新增成功！',function(){
					$state.go('admin.scheduler.route')
				}) 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});
	}

	// Remove Item from selected area
	$scope.removeSiteItemForStepTwo = function($event,id,stationId,stationType){
		$event.stopPropagation()
		for(var i = $scope.params.stationList_2.length-1 ; i>=0;i--){
			if($scope.params.stationList_2[i].stationId == stationId && $scope.params.stationList_2[i].stationType == stationType){
				$scope.params.stationList.push($scope.params.stationList_2[i])
				$scope.params.stationList_2.splice(i,1)
			}
		}

	}


	// $(document).on('click','.removeSiteForStepTwoBtn',function(){
	// 	var _index = $(this).data('index');
	// 	var _type = $(this).data('type');
	// 	var _id = $(this).data('id')
	// 	$("#item_"+_index).remove();

	// 	for(var i = $scope.params.stationList_2.length-1 ; i>=0;i--){
	// 		if($scope.params.stationList_2[i].stationId == _id && $scope.params.stationList_2[i].stationType == _type){
	// 			$scope.params.stationList.push($scope.params.stationList_2[i])
	// 			$scope.params.stationList_2.splice(i,1)
	// 		}
	// 	}
	// });

	// $(document).on('click','.removeSiteForStepThreeBtn',function(){
	// 	var _index = $(this).data('index');
	// 	var _type = $(this).data('type');
	// 	var _id = $(this).data('id')
	// 	$("#item_"+_index).remove();

	// 	for(var i = $scope.params.stationList_3.length-1 ; i>=0;i--){
	// 		if($scope.params.stationList_3[i].stationId == _id && $scope.params.stationList_3[i].stationType == _type){
	// 			$scope.params.stationListForPM.push($scope.params.stationList_3[i])
	// 			$scope.params.stationList_3.splice(i,1);

	// 		}
	// 	}
	// });

	$(document).on('mouseover','.moveroverItem',function(){
		$('.moveroverItem').css('border','none')
		$(this).css('border','1px solid #0086F9')
	})

	// $(document).ready(function(){
	// 	$('.loadMore').unbind('scroll').bind('scroll',function(){
	// 		var sum = this.scrollHeight;  
	// 		if (sum <= $(this).scrollTop() + $(this).height()) {  
	// 			$(".loadMore").append($(".moveroverItem").clone());  
	// 		}  
	// 	})
	// })
	// $('.addSiteItemForStepTwo').on('click',function(){
	// 	console.log('xxxx---')
	// 	var _index = $(this).data('index');
	// 	var _type = $(this).data('type');
	// 	var _id = $(this).data('id')
	// 	$("#addItemForStepTwo_"+_index).remove();


	// 	for(var i = $scope.params.stationList.length-1 ; i>=0;i--){

	// 		if($scope.params.stationList[i].stationId == _id && $scope.params.stationList[i].stationType == _type){
	// 			$scope.params.stationList_2.push($scope.params.stationList[i])
	// 			$scope.params.stationList.splice(i,1)
	// 		}
	// 	}
	// });

	$scope.addSiteItemForStepTwo = function($event,id,stationId,routeType){
		$event.stopPropagation()
		var _stationList_2 = angular.copy($scope.params.stationList_2);
		for(var i = $scope.params.stationList.length-1 ; i>=0;i--){
			if($scope.params.stationList[i].stationId == stationId && $scope.params.stationList[i]['stationType'] == routeType){
				if(!_stationList_2.length){
					$scope.params.stationList_2.push($scope.params.stationList[i])
					$scope.params.stationList.splice(i,1)
					return
				}

				for(var j=0;j<_stationList_2.length;j++){
					if(_stationList_2.length){
						if(stationId == _stationList_2[j].stationId){
							alertify.alert('不能添加重复站点',function() {})
							return							
						}else if(j == _stationList_2.length-1) {
							$scope.params.stationList_2.push($scope.params.stationList[i])
							$scope.params.stationList.splice(i,1)
							return
						}

					}
				}
				
			}
		}

		// //$("#addItemForStepTwo_"+id).remove();
		// for(var i = $scope.params.stationList.length-1 ; i>=0;i--){
		// 	if($scope.params.stationList[i].stationId == stationId && $scope.params.stationList[i].stationType == stationType){
		// 		$scope.params.stationList_2.push($scope.params.stationList[i])
		// 		$scope.params.stationList.splice(i,1)
		// 		return false
		// 	}
		// }
	}

	$scope.removeSiteItemForStepThree = function($event,id,stationId,stationType){
		$event.stopPropagation()
		for(var i = $scope.params.stationList_3.length-1 ; i>=0;i--){
			if($scope.params.stationList_3[i].stationId == stationId && $scope.params.stationList_3[i].stationType == stationType){
				$scope.params.stationListForPM.push($scope.params.stationList_3[i])
				$scope.params.stationList_3.splice(i,1)		
			}
		}
	}




	$scope.addSiteItemForStepThree = function($event,id,stationId,routeType){

		$event.stopPropagation()
		var _stationList_3 = angular.copy($scope.params.stationList_3);
		for(var i = $scope.params.stationListForPM.length-1 ; i>=0;i--){
			if($scope.params.stationListForPM[i].stationId == stationId && $scope.params.stationListForPM[i]['stationType'] == routeType){
				if(!_stationList_3.length){
					$scope.params.stationList_3.push($scope.params.stationListForPM[i])
					$scope.params.stationListForPM.splice(i,1)
					return
				}

				for(var j=0;j<_stationList_3.length;j++){
					if(_stationList_3.length){
						if(stationId == _stationList_3[j].stationId){
							alertify.alert('不能添加重复站点',function() {})
							return							
						}else if(j == _stationList_3.length-1) {
							$scope.params.stationList_3.push($scope.params.stationListForPM[i])
							$scope.params.stationListForPM.splice(i,1)
							return
						}

					}
				}
				
			}
		}

		// $event.stopPropagation()
		// // console.log('addSiteItemForStepThree')
		// // $("#addItemForStepThree_"+id).remove();
		// for(var i = $scope.params.stationListForPM.length-1 ; i>=0;i--){
		// 	if($scope.params.stationListForPM[i].stationId == stationId && $scope.params.stationListForPM[i].stationType == stationType){
		// 		$scope.params.stationList_3.push($scope.params.stationListForPM[i])
		// 		$scope.params.stationListForPM.splice(i,1)
		// 	}
		// }
	}
})
angular.module('schedulerRouteControllerModule',[])
.controller('schedulerRouteController',function(loadData,utilFactory,schedulerHttpService,$state,$scope){

	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	console.log(1,loadData)
	if(!loadData.data.error &&(!loadData.data.value || !loadData.data.value.list.length)){
		$scope.dataIsEmpty = true;
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
	}

	$scope.addRoute = function(){
		$state.go('admin.scheduler.addRoute',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
	}
	$scope.downLoadTemplte = function(){ alertify.alert('正在建设中...')}
	$scope.importSite = function(){ alertify.alert('正在建设中...')}

	$scope.searchFn = function(searchText){
		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1','routeName':$scope.searchText});
	}

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{
			'pageNumber':'1',
			'pageSize':'20',
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getRoute(params)
		},
		loadData:function(){},
		dataSet:function(result){}
		//extendParams:function(){}
	}

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[
			{
				name:'查看详情',
				ngIf:function(){
					return true
				},
				fun:function(item){
					$state.go('admin.scheduler.updateRoute',{'routeId':item.routeId,'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){
					console.log(1,item)
					alertify.confirm('该线路可能有排班任务，如继续删除，排班任务也将被清空！',function(){
						schedulerHttpService.deleteRouteById({'routeId':item.routeId}).then(function(result){
							var _resultData = result.data;

							if(!_resultData.error) {
								$state.go('admin.scheduler.route',{},{reload:true})
							}else{
								utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.statusText)
							}
						})
					},function(){}).set({labels:{cancel: '取消',ok:'坚持删除'}, padding: true});
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
				}
	    	]
	    }
		// changeEnable:function(item){}
	}

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})
angular.module('schedulerUpdateRouteControllerModule',[])
.controller('schedulerUpdateRouteController',function(utilFactory,schedulerHttpService,$timeout,$stateParams,$state,$scope){

	var _accountId = $stateParams.schedulerId ;
	var _secondCompanyId = $stateParams.secondCompanyId ;
	var _currentAllSitesArray = [];
	$scope.stepOne = true;
	$scope.stepTwo = false;
	if(_accountId &&_secondCompanyId){
		$scope.params = {
			'routeId':$stateParams.routeId,
			'schedulerId': $stateParams.schedulerId,
		  	'routeName':'',
		  	'stationName':'',
		  	'schedulerId': _accountId,
		  	'secondCompanyId': _secondCompanyId,
		  	'routeType':'',
		  	'currentRouteType':'',
		  	'removeSiteForUpdateOperateArray':[],
		  	'stationTypeIsAMList':[],
		  	'stationTypeIsPMList':[],
		  	'stationListForPM':[],
		  	'stationSelectedForRoute':[],
		  	'stationListBySearchForPM':[],
		  	'stationListBySearchForAMOrPM_1':[],
		  	'stationListBySearchForAMOrPM':[],
		  	'stationListTemp':[]
		}
		$scope.active = false;
		$scope.submitOnProgress = false;
		$scope.hideSiteIsActive = false;
		$scope.updateSiteIsActive =false;
		$scope.routeTypeList = [
			{'name':'上行/下行','routeType':'All','status':true},
			{'name':'仅上行','routeType':'AM','status':false},
			{'name':'仅下行','routeType':'PM','status':false}
		];

		schedulerHttpService.getRouteInfo({'routeId':$scope.params.routeId,'schedulerId':$scope.params.schedulerId}).then(function(result){
			var _resultData = result.data;
			var _isRouteTypeAM = 0;
			var _isRouteTypePM =0;
			var _stationTypsIsAMArray = [];
			var _stationTypsIsPMArray = [];
			if(!_resultData.error){
				for(var i=0;i<_resultData.value.getSchedulerRouteStationOutDTOs.length;i++){
					_resultData.value.getSchedulerRouteStationOutDTOs[i]['departureTime'] = _resultData.value.getSchedulerRouteStationOutDTOs[i]['departureTime']/60/1000;
					_resultData.value.getSchedulerRouteStationOutDTOs[i]['routeType'] == 'AM'?_isRouteTypeAM++:'';
					_resultData.value.getSchedulerRouteStationOutDTOs[i]['routeType'] == 'PM'?_isRouteTypePM++:'';
					_resultData.value.getSchedulerRouteStationOutDTOs[i]['status']='1';
					_resultData.value.getSchedulerRouteStationOutDTOs[i]['routeType'] == 'AM'?_stationTypsIsAMArray.push(_resultData.value.getSchedulerRouteStationOutDTOs[i]):_stationTypsIsPMArray.push(_resultData.value.getSchedulerRouteStationOutDTOs[i]);

				}

				$scope.params.routeName = _resultData.value.routeName;
				$scope.params.stationTypeIsAMList =_stationTypsIsAMArray;
				$scope.params.stationTypeIsPMList =_stationTypsIsPMArray;
				_currentAllSitesArray = angular.copy($scope.params.stationTypeIsAMList.concat($scope.params.stationTypeIsPMList));
				// Set radio btn status
				if(_isRouteTypeAM >0 && _isRouteTypePM >0){
					$scope.params.routeType = 'All';
					$scope.params.currentRouteType = 'All';
					return
				}

				if(_isRouteTypeAM >0 && _isRouteTypePM ==0){
					$scope.params.routeType = 'AM';
					$scope.params.currentRouteType = 'AM';
					return
				}

				if(_isRouteTypeAM ==0 && _isRouteTypePM >0){
					$scope.params.routeType = 'PM';
					$scope.params.currentRouteType = 'PM';
					return
				}

	
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.statusText)
			}
		});
		$scope.breadcrumbText={'lv1':'线路管理','lv2':'线路详情'}
	}else{
		$state.go('admin.scheduler.route')
	}


	$scope.editRouteProfile = function(flag){
		$scope.active = !flag;
	};
    $scope.close = function(){
		$scope.updateSiteIsActive = false;
		$scope.hideSiteIsActive = false;
    }

   	$scope.closeAMAndPMEdit = function () {
   		$scope.setOneRouteOnlyFlag = false;
		$scope.hideSiteIsActive = false;
		$scope.selectRouteType($scope.params.currentRouteType)
   	}

	$scope.goToSiteList = function(routeType){
		$scope.updateSiteIsActive = true;
		$scope.hideSiteIsActive = true;
		$scope.route = {
			'routeName':routeType == 'AM'?'上行线路站点':'下行线路站点',
			'routeType':routeType 
		};

		// loading sites data for route update
		schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationType':routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				$scope.params.stationListFromSiteLibrary = _resultData.value.list.length ? $scope.params.stationList = _resultData.value.list : $scope.params.stationList=[{'stationName':'暂无数据'}]; 
				$scope.params.stationListTemp = _resultData.value.list;
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});

		// Setting sites as default data for next page
		$scope.params.stationSelectedForRoute = (routeType == 'AM')?$scope.params.stationTypeIsAMList:$scope.params.stationTypeIsPMList;
	};

	$scope.searchStationNameByRouteType = function(routeType){
		schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationName':$scope.params.stationName,'stationType':routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				$scope.params.stationListFromSiteLibrary = null;
				$scope.params.stationListFromSiteLibrary = _resultData.value.list; 
				$scope.params.stationListTemp = _resultData.value.list
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode);
			}
		});
	}


	$scope.submitRouteUpdateBaseInfo = function(formValidateOne){
		if(!formValidateOne) return utilFactory.setDirty($scope.formValidateOne);
		var totalSite = [];
		var _totalSite = totalSite.concat($scope.params.stationTypeIsAMList).concat($scope.params.stationTypeIsPMList)
		var _params = {
			'routeName': $scope.params.routeName,
			'schedulerId': utilFactory.getAccountId(),
			'routeId': $scope.params.routeId,
			'stationList': totalSite
		}
		console.log(1,_totalSite);
		schedulerHttpService.updateRoute(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功!',function(){
					$scope.active = false;
					$scope.$apply();
				}) 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});
	}


	$scope.addSiteItemForRoute = function($event,id,stationId,routeType){
		$event.stopPropagation()
		var _stationSelectedForRoute = angular.copy($scope.params.stationSelectedForRoute);
		for(var i = $scope.params.stationListFromSiteLibrary.length-1 ; i>=0;i--){
			if($scope.params.stationListFromSiteLibrary[i].stationId == stationId && $scope.params.stationListFromSiteLibrary[i]['stationType'] == routeType){
				if(!_stationSelectedForRoute.length){
					$scope.params.stationSelectedForRoute.push($scope.params.stationListFromSiteLibrary[i])
					$scope.params.stationListFromSiteLibrary.splice(i,1)
					return
				}

				for(var j=0;j<_stationSelectedForRoute.length;j++){
					if(_stationSelectedForRoute.length){
						if(stationId == _stationSelectedForRoute[j].stationId){
							alertify.alert('不能添加重复站点',function() {})
							return							
						}else if(j == _stationSelectedForRoute.length-1) {
							$scope.params.stationSelectedForRoute.push($scope.params.stationListFromSiteLibrary[i])
							$scope.params.stationListFromSiteLibrary.splice(i,1)
							return
						}

					}
				}
				
			}
		}
	}

	$scope.removeSiteItemFromSelectedList = function($event,id,stationId,routeType,departureTime,routeStationId){

		$event.stopPropagation()
		// for(var i =0;i<$scope.params.stationListTemp.length ;i++){
		// 	if($scope.params.stationListTemp[i].stationId == stationId && ($scope.params.stationListTemp[i].stationType == routeType)){
		// 		console.log(1,$scope.params.stationListFromSiteLibrary.length)
		// 		for(var i in $scope.params.stationListFromSiteLibrary.length){
		// 			if($scope.params.stationListFromSiteLibrary[j]['stationId'] == stationId){
		// 				$scope.params.stationSelectedForRoute.splice(i,1)
		// 			}else{
		// 				$scope.params.stationListFromSiteLibrary.push($scope.params.stationListFromSiteLibrary[j])
		// 			}
		// 		}
		// 		// for(var j=0;j<$scope.params.stationListFromSiteLibrary.length;j++){
		// 		// 	if($scope.params.stationListFromSiteLibrary[j]['stationId'] == stationId){
		// 		// 		$scope.params.stationSelectedForRoute.splice(i,1)
		// 		// 	}else{
		// 		// 		$scope.params.stationListFromSiteLibrary.push($scope.params.stationListFromSiteLibrary[j])
		// 		// 	}
		// 		// }
		// 		// $scope.params.removeSiteForUpdateOperateArray.push({
		// 		// 		'departureTime':$scope.params.stationSelectedForRoute[i]['departureTime'],
		// 		// 		'routeStationId':$scope.params.stationSelectedForRoute[i]['routeStationId'],
		// 		// 		'routeType':$scope.params.stationSelectedForRoute[i]['routeType'],
		// 		// 		'stationId':$scope.params.stationSelectedForRoute[i]['stationId'],
		// 		// 		'status':'0'
		// 		// });
		// 	}else {
		// 		$scope.params.stationSelectedForRoute.splice(i,1)
		// 	}
		// }


		for(var j=0;j<$scope.params.stationSelectedForRoute.length;j++){
			if($scope.params.stationSelectedForRoute[j]['stationId'] == stationId){
				// 将当前stationId与搜索的站点结果对比，如果匹配成功，将从已选中列表移除
				$scope.params.stationListFromSiteLibrary.push($scope.params.stationSelectedForRoute[j])
				$scope.params.stationSelectedForRoute.splice(j,1)

			}
		}
		// $scope.params.removeSiteForUpdateOperateArray.push({
		// 		'departureTime':$scope.params.stationSelectedForRoute[i]['departureTime'],
		// 		'routeStationId':$scope.params.stationSelectedForRoute[i]['routeStationId'],
		// 		'routeType':$scope.params.stationSelectedForRoute[i]['routeType'],
		// 		'stationId':$scope.params.stationSelectedForRoute[i]['stationId'],
		// 		'status':'0'
		// });
	}

	$scope.updateSiteForRouteConfirmBtn =  function(formValidate,routeType,obj){
		var _stationListForAllArray = angular.copy($scope.params.stationSelectedForRoute)
		console.log("****** updateSiteForRouteConfirmBtn *******")
		console.log($scope.formValidate)
		if(!formValidate) return utilFactory.setDirty($scope.formValidate);
		if(_stationListForAllArray.length<2) return alertify.alert('请添加至少两个站点',function(){})
		for(var i=0;i<_stationListForAllArray.length;i++){
			// filter unuse params
			delete _stationListForAllArray[i]['address'];
			delete _stationListForAllArray[i]['gps'];
			//delete _stationListForAllArray[i]['stationName'];
			delete _stationListForAllArray[i]['status'];

			delete _stationListForAllArray[i]['stationGPS'];
			delete _stationListForAllArray[i]['stationAddress'];
			_stationListForAllArray[i]['departureTime'] = _stationListForAllArray[i]['departureTime']?_stationListForAllArray[i]['departureTime']:'0';
			_stationListForAllArray[i]['stationId'] =  _stationListForAllArray[i]['stationId'] == ''?_stationListForAllArray[i]['stationId'] ='0':_stationListForAllArray[i]['stationId'];
			_stationListForAllArray[i]['status'] = '1';
			// if routeType equals All, return AM as the default Route Type for last step.
			if(_stationListForAllArray[i]['routeType']){
				delete _stationListForAllArray[i]['routeStationId'];
				continue
			}else{
				_stationListForAllArray[i]['routeType'] = _stationListForAllArray[i]['routeType'] ?_stationListForAllArray[i]['routeType']:routeType;			
			}
			

			delete _stationListForAllArray[i]['stationType'];
		}

		// Add another route site to current
		//routeType == 'AM'?_stationListForAllArray.concat(angular.copy($scope.params.stationTypeIsAMList)):_stationListForAllArray.concat(angular.copy($scope.params.stationTypeIsPMList))
		var _params = {
			'routeName': $scope.params.routeName,
			'schedulerId': utilFactory.getAccountId(),
			'routeId': $scope.params.routeId,
			'stationList': _stationListForAllArray
		}

		//$scope.params.removeSiteForUpdateOperateArray

		for(var i = 0;i<_currentAllSitesArray.length;i++ ){
			delete _currentAllSitesArray[i]['stationAddress'];
			delete _currentAllSitesArray[i]['stationGPS'];
			delete _currentAllSitesArray[i]['stationName'];
			_currentAllSitesArray[i]['status'] = '0'
			_params.stationList.push(_currentAllSitesArray[i])
		}
		console.log(1,_params.stationList);
		// var _deleteSiteParams = {
		// 	'routeName': $scope.params.routeName,
		// 	'schedulerId': utilFactory.getAccountId(),
		// 	'routeId': $scope.params.routeId,
		// 	'secondCompanyId': utilFactory.getSecondCompanyId(),
		// 	'stationList': _currentAllSitesArray
		// }
		schedulerHttpService.updateRoute(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('admin.scheduler.route')
				}) 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});
		// schedulerHttpService.updateRoute(_deleteSiteParams).then(function(result){
		// 	var _resultData = result.data;
		// 	if(!_resultData.error){
		// 		schedulerHttpService.updateRoute(_params).then(function(result){
		// 			var _resultData = result.data;
		// 			if(!_resultData.error){
		// 				alertify.alert('更新成功！',function(){
		// 					$state.go('admin.scheduler.route')
		// 				}) 
		// 			}else{
		// 				utilFactory.checkErrorCode(_resultData.error.statusCode)
		// 			}
		// 		});
		// 	}else{
		// 		utilFactory.checkErrorCode(_resultData.error.statusCode)
		// 	}
		// });
	}



	// swtich routetype logic
	$scope.selectRouteType = function(selectedRouteType){
		if($scope.params.currentRouteType == selectedRouteType){
			$scope.params.routeType = selectedRouteType;
			$scope.setOneRouteOnlyFlag = false;
		}else if(selectedRouteType == 'AM' || selectedRouteType == 'PM'){
			$scope.setOneRouteOnlyFlag = true;
			$scope.setRouteTypeForAll = false;
			$scope.params.routeType = selectedRouteType;// Set title for current route type
			$scope.params.stationListBySearchForAMOrPM_1 = $scope.params.routeType =='AM'?$scope.params.stationTypeIsAMList:$scope.params.stationTypeIsPMList;
			// Get site list as default data for current routeType
			var _routeType = $scope.params.routeType =='AM'?'AM':'PM';
			schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationType':_routeType}).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					$scope.params.stationListBySearchForAMOrPM = _resultData.value.list.length ? $scope.params.stationList = _resultData.value.list : $scope.params.stationList=[{'stationName':'暂无数据'}]; 
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			});
		}else if(selectedRouteType == 'All'){
			$scope.setOneRouteOnlyFlag = true;
			$scope.params.routeType = 'All';// Set title for current route type
			var _routeType = $scope.params.routeType =='All'?'AM':'PM';
			schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationType':_routeType}).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					$scope.params.stationListBySearchForAMOrPM = _resultData.value.list.length ? $scope.params.stationList = _resultData.value.list : $scope.params.stationList=[{'stationName':'暂无数据'}]; 
					$scope.params.stationListBySearchForAMOrPM_1 = $scope.params.stationTypeIsAMList
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			});
		}
	}

	$scope.addSiteItemForAMOrPMOnly = function($event,id,stationId,stationType){
		$event.stopPropagation()
		//$("#addItemForStepTwo_"+id).remove();
		// for(var i = $scope.params.stationListBySearchForAMOrPM.length-1; i>=0;i--){
		// 	if($scope.params.stationListBySearchForAMOrPM[i].stationId == stationId && $scope.params.stationListBySearchForAMOrPM[i].stationType == stationType){
		// 		$scope.params.stationListBySearchForAMOrPM_1.push($scope.params.stationListBySearchForAMOrPM[i])
		// 		$scope.params.stationListBySearchForAMOrPM.splice(i,1)
		// 		return false
		// 	}
		// }

		var stationListBySearchForAMOrPM_1 = angular.copy($scope.params.stationListBySearchForAMOrPM_1);
		for(var i = $scope.params.stationListBySearchForAMOrPM.length-1 ; i>=0;i--){
			if($scope.params.stationListBySearchForAMOrPM[i].stationId == stationId && $scope.params.stationListBySearchForAMOrPM[i]['stationType'] == stationType){
				if(!stationListBySearchForAMOrPM_1.length){
					$scope.params.stationListBySearchForAMOrPM_1.push($scope.params.stationListBySearchForAMOrPM[i])
					$scope.params.stationListBySearchForAMOrPM.splice(i,1)
					return
				}

				for(var j=0;j<stationListBySearchForAMOrPM_1.length;j++){
					if(stationListBySearchForAMOrPM_1.length){
						if(stationId == stationListBySearchForAMOrPM_1[j].stationId){
							alertify.alert('不能添加重复站点',function() {})
							return							
						}else if(j == stationListBySearchForAMOrPM_1.length-1) {
							$scope.params.stationListBySearchForAMOrPM_1.push($scope.params.stationListBySearchForAMOrPM[i])
							$scope.params.stationListBySearchForAMOrPM.splice(i,1)
							return
						}

					}
				}
				
			}
		}
	}

	$scope.removeSiteItemForAMOrPMOnly = function($event,id,stationId,stationType){
		$event.stopPropagation()
		//error
		for(var i = $scope.params.stationListBySearchForAMOrPM_1.length-1; i>=0;i--){
			if($scope.params.stationListBySearchForAMOrPM_1[i].stationId == stationId && $scope.params.stationListBySearchForAMOrPM_1[i].stationType == stationType){
				//$scope.params.stationList.push($scope.params.stationListBySearchForAMOrPM_1[i])
				$scope.params.stationListBySearchForAMOrPM_1.splice(i,1)
			}
		}

	}
	$scope.searchStationNameByRouteTypeForAMOrPM = function(routeType){
		schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationName':$scope.params.stationName,'stationType':routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				$scope.params.stationListBySearchForAMOrPM = _resultData.value.list;
				$scope.params.stationListBySearchForPM = _resultData.value.list; 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode);
			}
		});
	}
	$scope.addSiteItemForPM = function($event,id,stationId,stationType){
		$event.stopPropagation()

		var stationListForPM = angular.copy($scope.params.stationListForPM);
		for(var i = $scope.params.stationListBySearchForPM.length-1 ; i>=0;i--){
			if($scope.params.stationListBySearchForPM[i].stationId == stationId && $scope.params.stationListBySearchForPM[i]['stationType'] == stationType){
				if(!stationListForPM.length){
					$scope.params.stationListForPM.push($scope.params.stationListBySearchForPM[i])
					$scope.params.stationListBySearchForPM.splice(i,1)
					return
				}

				for(var j=0;j<stationListForPM.length;j++){
					if(stationListForPM.length){
						if(stationId == stationListForPM[j].stationId){
							alertify.alert('不能添加重复站点',function() {})
							return							
						}else if(j == stationListForPM.length-1) {
							$scope.params.stationListForPM.push($scope.params.stationListBySearchForPM[i])
							$scope.params.stationListBySearchForPM.splice(i,1)
							return
						}

					}
				}
				
			}
		}

	}


	$scope.removeSiteItemForPM = function($event,id,stationId,stationType){
		$event.stopPropagation()
		for(var i = $scope.params.stationListBySearchForPM.length-1 ; i>=0;i--){
			if($scope.params.stationListBySearchForPM[i].stationId == stationId && $scope.params.stationListBySearchForPM[i].stationType == stationType){
				$scope.params.stationListForPM.push($scope.params.stationListBySearchForPM[i])
				$scope.params.stationListBySearchForPM.splice(i,1)		
			}
		}
	}


	$scope.removeSiteItemForStepThree = function($event,id,stationId,stationType){
		$event.stopPropagation()
		// for(var i = $scope.params.stationListBySearchForPM.length-1 ; i>=0;i--){
		// 	if($scope.params.stationListBySearchForPM[i].stationId == stationId && $scope.params.stationListBySearchForPM[i].stationType == stationType){
		// 		$scope.params.stationListForPMstationListBySearchForPM.push($scope.params.stationListBySearchForPM[i])
		// 		$scope.params.stationListBySearchForPM.splice(i,1)		
		// 	}
		// }

		for(var i =0;i<$scope.params.stationListForPM.length;i++){
			$scope.params.stationListBySearchForPM.push($scope.params.stationListForPM[i])
			$scope.params.stationListForPM.splice(i,1)			
		}
	
	}
	$scope.updateRouteByNewRouteTypeForAMOrPMOlny = function(formValidateTwo){
		//$scope.stationListArray =angular.copy($scope.params.stationListBySearchForAMOrPM_1); 
		
		var _stationList = angular.copy($scope.params.stationListBySearchForAMOrPM_1)
		if(!formValidateTwo) return utilFactory.setDirty($scope.formValidateTwo)

		// Logic for PM or AM only
		if($scope.params.routeType !='All'){
			// Get All selected sites and removed some unuse params.

			if($scope.params.stationListBySearchForAMOrPM_1.length<2) return alertify.alert('请添加至少两个站点',function(){})
			
			for(var i=0;i<_stationList.length;i++){
				// filter unuse params
				delete _stationList[i]['address'];
				delete _stationList[i]['gps'];
				delete _stationList[i]['stationName'];
				delete _stationList[i]['status'];


				_stationList[i]['departureTime'] = _stationList[i]['departureTime']?_stationList[i]['departureTime']:'0';
				_stationList[i]['stationId'] =  _stationList[i]['stationId'] == ''?_stationList[i]['stationId'] ='0':_stationList[i]['stationId']+'';
				
				// if routeType equals All, return AM as the default Route Type for last step.
				_stationList[i]['status'] = '1';

				if(_stationList[i]['routeType']){
					delete _stationList[i]['routeStationId'];
					continue
				}else{
					_stationList[i]['routeType'] = _stationList[i]['stationType'] == 'All'?'AM':_stationList[i]['stationType'];				
				}
				
				
				delete _stationList[i]['stationType'];
			}
			
			var _params = {
				'routeName': $scope.params.routeName,
				'schedulerId': utilFactory.getAccountId(),
				'routeId': $scope.params.routeId,
				'secondCompanyId': utilFactory.getSecondCompanyId(),
				'stationList': _stationList
			}

			for(var i = 0;i<_currentAllSitesArray.length;i++ ){
				delete _currentAllSitesArray[i]['stationAddress'];
				delete _currentAllSitesArray[i]['stationGPS'];
				delete _currentAllSitesArray[i]['stationName'];
				_currentAllSitesArray[i]['status'] = '0'
				_params.stationList.push(_currentAllSitesArray[i])
			}

			// var _deleteSiteParams = {
			// 	'routeName': $scope.params.routeName,
			// 	'schedulerId': utilFactory.getAccountId(),
			// 	'routeId': $scope.params.routeId,
			// 	'secondCompanyId': utilFactory.getSecondCompanyId(),
			// 	'stationList': _currentAllSitesArray
			// }
			schedulerHttpService.updateRoute(_params).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					alertify.alert('更新成功！',function(){
						$state.go('admin.scheduler.route')
					}) 
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			});
			// schedulerHttpService.updateRoute(_deleteSiteParams).then(function(result){
			// 	var _resultData = result.data;
			// 	if(!_resultData.error){
			// 		schedulerHttpService.updateRoute(_params).then(function(result){
			// 			var _resultData = result.data;
			// 			if(!_resultData.error){
			// 				alertify.alert('更新成功！',function(){
			// 					$state.go('admin.scheduler.route')
			// 				}) 
			// 			}else{
			// 				utilFactory.checkErrorCode(_resultData.error.statusCode)
			// 			}
			// 		});
			// 	}else{
			// 		utilFactory.checkErrorCode(_resultData.error.statusCode)
			// 	}
			// });
		}else{

			if($scope.params.stationListBySearchForAMOrPM_1.length<2) return alertify.alert('请添加至少两个站点',function(){})
			// Logic For routeType All
			schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationType':'PM'}).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					
					$scope.params.stationListBySearchForPM = _resultData.value.list.length ? $scope.params.stationList = _resultData.value.list : $scope.params.stationList=[{'stationName':'暂无数据'}]; 

				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			});

			$scope.params.stationListForPM = angular.copy($scope.params.stationTypeIsPMList);

			$scope.setOneRouteOnlyFlag = false;
			$scope.setRouteTypeForAll = true;
		}
	}

	// Logic for routeType All
	$scope.updateRouteForAllRouteType = function(formValidateThree){

		if(!formValidateThree) return utilFactory.setDirty($scope.formValidateThree)
		var _stationListForAllArray = [];
		if($scope.params.stationListForPM.length<2) return alertify.alert('请添加至少两个站点',function(){})
		_stationListForAllArray = angular.copy($scope.params.stationListForPM.concat($scope.params.stationListBySearchForAMOrPM_1))
		for(var i=0;i<_stationListForAllArray.length;i++){
			// filter unuse params
			delete _stationListForAllArray[i]['address'];
			delete _stationListForAllArray[i]['gps'];
			delete _stationListForAllArray[i]['stationName'];
			delete _stationListForAllArray[i]['status'];
			delete _stationListForAllArray[i]['stationAddress'];
			delete _stationListForAllArray[i]['stationGPS'];

			_stationListForAllArray[i]['departureTime'] = _stationListForAllArray[i]['departureTime']?_stationListForAllArray[i]['departureTime']:'0';
			_stationListForAllArray[i]['stationId'] =  _stationListForAllArray[i]['stationId'] == ''?_stationListForAllArray[i]['stationId'] ='0':_stationListForAllArray[i]['stationId'];
			_stationListForAllArray[i]['status'] = '1';
			// if routeType equals All, return AM as the default Route Type for last step.
			if(_stationListForAllArray[i]['routeType']){
				delete _stationListForAllArray[i]['routeStationId'];
				continue
			}else{
				_stationListForAllArray[i]['routeType'] = _stationListForAllArray[i]['stationType'] == 'All'?'PM':_stationListForAllArray[i]['stationType'];				
			}


			delete _stationListForAllArray[i]['stationType'];
			
		}
		var _params = {
			'routeName': $scope.params.routeName,
			'schedulerId': utilFactory.getAccountId(),
			'routeId': $scope.params.routeId,
			'stationList': _stationListForAllArray
		}

		for(var i = 0;i<_currentAllSitesArray.length;i++ ){
			delete _currentAllSitesArray[i]['stationAddress'];
			delete _currentAllSitesArray[i]['stationGPS'];
			delete _currentAllSitesArray[i]['stationName'];
			_currentAllSitesArray[i]['status'] = '0'
			_params.stationList.push(_currentAllSitesArray[i])
		}

		// var _deleteSiteParams = {
		// 	'routeName': $scope.params.routeName,
		// 	'schedulerId': utilFactory.getAccountId(),
		// 	'routeId': $scope.params.routeId,
		// 	'secondCompanyId': utilFactory.getSecondCompanyId(),
		// 	'stationList': _currentAllSitesArray
		// }
		schedulerHttpService.updateRoute(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('admin.scheduler.route')
				}) 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});
		// schedulerHttpService.updateRoute(_deleteSiteParams).then(function(result){
		// 	var _resultData = result.data;
		// 	if(!_resultData.error){
		// 		schedulerHttpService.updateRoute(_params).then(function(result){
		// 			var _resultData = result.data;
		// 			if(!_resultData.error){
		// 				alertify.alert('更新成功！',function(){
		// 					$state.go('admin.scheduler.route')
		// 				}) 
		// 			}else{
		// 				utilFactory.checkErrorCode(_resultData.error.statusCode)
		// 			}
		// 		});
		// 	}else{
		// 		utilFactory.checkErrorCode(_resultData.error.statusCode)
		// 	}
		// });
	}


	$scope.stepThreePre = function () {
		$scope.selectRouteType('All');
		$scope.setOneRouteOnlyFlag = true;
		$scope.setRouteTypeForAll = false;
		$scope.hideSiteIsActive = true;
	}

	$scope.pre = function () {
		$scope.hideSiteIsActive = false;
		$scope.setOneRouteOnlyFlag = false;
	}

	$scope.sortableOptions = {
		placeholder: "dragItem",
		connectWith: ".dragWrapper"
	};

	$scope.sortableOptions_2 = {
		placeholder: "dragItem_2",
		connectWith: ".dragWrapper_2"
	};

})
angular.module('schedulerHttpServiceModule',[])
.factory('schedulerHttpService',function($http,USER_ACCOUNT,ROLE_CODE,APISERVICEPATH){
	var schedulerHttp = {};
	var driverAccount = APISERVICEPATH.driverAccount;
	var vehicleService = APISERVICEPATH.vehicleService;
	//var vehicleService = APISERVICEPATH.busAPI;
	var stationService = APISERVICEPATH.stationService;
	var templateFile   = APISERVICEPATH.templateFile;
	var companyAccount = APISERVICEPATH.companyAccount;
	var routeService	= APISERVICEPATH.routeService;

	// API for scheduler's calendar 
	var assignmentService = APISERVICEPATH.assignmentService;
	schedulerHttp.getDriverList = function(paramsObj){
		var paramsData = {
			'apiPath':driverAccount+'driver/'+paramsObj.accountId+'/secondCompanyId/'+paramsObj.secondCompanyId,
			paramsList:{
				'pageNumber':paramsObj.pageNumber,
				'pageSize':paramsObj.pageSize,
				'driverName':paramsObj.driverName,
				'phoneNumber': paramsObj.phoneNumber
			}
		};
		
		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	schedulerHttp.updateDriverByID = function(paramsObj){
		var paramsData = {
			'apiPath':driverAccount+'driver',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'identityCard': paramsObj.identityCard,
				'licenseExpirationDate': paramsObj.licenseExpirationDate,
				'licenseID': paramsObj.licenseId,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.schedulerId,
				'partyId': paramsObj.driverId,
				'phoneNumber': paramsObj.phoneNumber,
				'shuttleCompanyId': paramsObj.shuttleCompanyId,
				'shuttleCompanyName':paramsObj.shuttleCompanyName,
				'status': '1'
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	schedulerHttp.deleteDriverByID = function(paramsObj){
		var paramsData = {
			'apiPath':driverAccount+'driver',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'identityCard': paramsObj.identityCard,
				'licenseExpirationDate': paramsObj.licenseExpirationDate,
				'licenseID': paramsObj.licenseID,
				'name': paramsObj.name,
				'operateAccountId': paramsObj.schedulerId,
				'partyId': paramsObj.driverId,
				'phoneNumber': paramsObj.phoneNumber,
				'shuttleCompanyId': paramsObj.shuttleCompanyId,
				'shuttleCompanyName':paramsObj.shuttleCompanyName,
				'status': '2'
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'}});
	};

	schedulerHttp.addDriver = function(paramsObj){
		var paramsData = {
			'apiPath':driverAccount+'driver',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				'licenseExpirationDate': paramsObj.licenseExpirationDate,
				'licenseID': paramsObj.licenseID,
				'name': paramsObj.name,
				'phoneNumber': paramsObj.phoneNumber,
				'shuttleCompanyName': paramsObj.shuttleCompanyName,
				'shuttleCompanyId': paramsObj.shuttleCompanyId,
				'operateAccountId': paramsObj.schedulerId
			}
		};
		return	$http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	schedulerHttp.getBusList = function(paramsObj){
		var paramsData = {
			'apiPath':vehicleService+'vehicles',
			paramsList:{
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber,
				'schedulerId':paramsObj.accountId,
				'secondCompanyId':paramsObj.secondCompanyId
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	schedulerHttp.getSiteList = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'web/',
			paramsList:{
				'schedulerId':paramsObj.accountId,
				'secondCompanyId':paramsObj.secondCompanyId,
				'stationName':paramsObj.stationName || '',
				'stationType':paramsObj.stationType || '',
				'pageNumber':paramsObj.pageNumber,
				'pageSize':paramsObj.pageSize,
			}
		};
		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	}
	schedulerHttp.addSite = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'station',
			paramsList:{
	  			'gps': paramsObj.gps,
			    'name': paramsObj.name,
	            'address': paramsObj.address,
	            'stationType': paramsObj.stationType,
				'secondCompanyId':paramsObj.secondCompanyId,
				'schedulerId':paramsObj.schedulerId
			}
		};
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	}



	schedulerHttp.downloadTemplateFile = function(paramsObj){
		var paramsData = {
			'apiPath':templateFile
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,responseType:'arraybuffer'});
	}

	schedulerHttp.updateSite = function(paramsObj){
		
		var paramsData = {
			'apiPath':stationService+'station',
			paramsList:{
	  			'gps': paramsObj.gps,
	            'name': paramsObj.name,
	            'address': paramsObj.address,
	            'stationType': paramsObj.stationType,
				'secondCompanyId':paramsObj.secondCompanyId,
				'schedulerId':paramsObj.schedulerId,
				'stationId':paramsObj.stationId
			}
		};
		return  $http({ method: 'PUT',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	}
	schedulerHttp.getGPSForUpdateSite = function(paramsObj){
		
		// var gaodeUrl = 'http://yuntuapi.amap.com/datasearch/id?';
		var paramsData = {
			'apiPath':'http://yuntuapi.amap.com/datasearch/id?'+'tableid=59b79ca97bbf190cbdb6bdfe'+'&_id='+paramsObj.id+'&key=d13793346f8cba3be2dae68a401d4248'
		}
		
		return  $http({ method: 'GET',url:paramsData.apiPath,headers:{}});
	}
	schedulerHttp.deleteSiteByID = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'station/'+paramsObj.stationId,
			paramsList:{
	            'schedulerId':paramsObj.schedulerId
			}
		};
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	// schedulerHttp.getBusDetail = function(paramsObj){
	// 	var paramsData = {
	// 		'apiPath':vehicleService+'vehicle',
	// 		paramsList:{
	// 			'schedulerUUID':paramsObj.schedulerUUID,
	// 			'vehicleID':paramsObj.vehicleID
	// 		}
	// 	};

	// 	return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	// };

	schedulerHttp.addBus = function(paramsObj){
		var paramsData = {
			'apiPath':vehicleService+'vehicle',
			paramsList:{
				'annualInspectionExpiration': paramsObj.annualInspectionExpiration,
				'availableSeats': paramsObj.availableSeats,
				'engineNumber': paramsObj.engineNumber,
				'insuranceExpiration': paramsObj.insuranceExpiration,
				'licensePlate': paramsObj.licensePlate,
				'schedulerId': paramsObj.schedulerId,
				'secondCompanyId': paramsObj.secondCompanyId,
				'shuttleCompanyId': paramsObj.shuttleCompanyId,
				'shuttleCompanyName': paramsObj.shuttleCompanyName,
				'vehicleLicense': paramsObj.vehicleLicense,
				'vehicleModel': paramsObj.vehicleModel,
				'vin': paramsObj.vin
			}
		};
		
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};


	schedulerHttp.updateBus = function(paramsObj){
		var paramsData = {
			'apiPath':vehicleService+'vehicle',
			paramsList:{
				'annualInspectionExpiration': paramsObj.annualInspectionExpiration,
				'availableSeats': paramsObj.availableSeats,
				'engineNumber': paramsObj.engineNumber,
				'insuranceExpiration': paramsObj.insuranceExpiration,
				'licensePlate': paramsObj.licensePlate,
				'schedulerId': paramsObj.schedulerId,
				'shuttleCompanyId': paramsObj.shuttleCompanyId,
				'shuttleCompanyName': paramsObj.shuttleCompanyName,
				'vehicleId': paramsObj.vehicleId,
				'vehicleLicense': paramsObj.vehicleLicense,
				'vehicleModel': paramsObj.vehicleModel,
				'vin': paramsObj.vin
			}
		};
		
		return  $http({ method: 'PUT',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	schedulerHttp.deleteBusByID = function(paramsObj){
		var paramsData = {
			'apiPath':vehicleService+'vehicle/'+paramsObj.vehicleId,
			paramsList:{
				'schedulerId':paramsObj.schedulerId
				// 'Authorization':'',
				// 'operateAccountId':'',
				// 'ApplicationId':''
			}
		};
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	////////////////	scheduler's calendar /////////////////////////////////
	// Get scheduler's calendar result list
	schedulerHttp.assignmentService = function(paramsObj){
		var paramsData = {
			'apiPath':assignmentService+'count/'+paramsObj.schedulerId+'/'+paramsObj.secondCompanyId,
			//'apiPath':APISERVICEPATH.passengerDev+'assignments.json',
			paramsList:{
				'beginDate':paramsObj.beginDate,
				'endDate':paramsObj.endDate
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	schedulerHttp.getAssignmentsByDay = function(paramsObj){
		var paramsData = {
			'apiPath':assignmentService+paramsObj.schedulerId+'/'+paramsObj.secondCompanyId,
			//'apiPath':APISERVICEPATH.passengerDev+'assignments.json',
			paramsList:{
				'date':paramsObj.date
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};



	// Add schuttle bus company 
    schedulerHttp.addBusCompany = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			//'apiPath':APISERVICEPATH.passengerDev+'company.json',
			paramsList:{
				'affiCompanyId': paramsObj.secondCompanyId,
				//'operateAccountId':paramsObj.schedulerId,
				'name': paramsObj.name,
				'companyCode':'10',
				'status':'1'
				// 'phoneNumber': paramsObj.phoneNumber,
				//'roleCode': ROLE_CODE.COMPANY,
			}
		};
		
		return  $http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
   };

	// get schuttle bus company list
	schedulerHttp.getBusCompany = function(paramsObj){
		var paramsData = {
			//'apiPath':APISERVICEPATH.passengerDev+'company.json',
			'apiPath':companyAccount+paramsObj.schedulerId+'/parentCompanyId/'+paramsObj.secondCompanyId+'/companyCode/10',
			'paramsList':{
				//'schedulerId': paramsObj.schedulerId,
				//'parentCompanyId': paramsObj.secondCompanyId,
				'pageSize': paramsObj.pageSize,
				'pageNumber': paramsObj.pageNumber
				//'companyCode':'8'
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	// Update schuttle bus company 
	schedulerHttp.updateBusCompany = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			'paramsList':{
				'operateAccountId':paramsObj.schedulerId,
				'affiCompanyId': paramsObj.secondCompanyId,
				'partyId': paramsObj.partyId,
				'name': paramsObj.name,
				'companyCode':'10',
				'status':'1'
				// 'phoneNumber': paramsObj.phoneNumber,
				// 'roleCode': paramsObj.roleCode,
				// 'status':paramsObj.status
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'},});
	};

	schedulerHttp.deleteBusCompany = function(paramsObj){
		var paramsData = {
			'apiPath':companyAccount,
			'paramsList':{
				'operateAccountId':paramsObj.schedulerId,
				'affiCompanyId': paramsObj.secondCompanyId,
				'name': paramsObj.name,
				'companyCode':'10',
				// 'phoneNumber': paramsObj.phoneNumber,
				'partyId': paramsObj.partyId,
				'status':'2'
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'},});
	};

	///////////////////// Route Service //////////////////////////////////


	// Add Rote
	schedulerHttp.addRoute = function(paramsObj){
		//var _paramsObj = paramsObj;
		for(var i=0;i<paramsObj.stationList.length;i++){
			paramsObj.stationList[i].departureTime =  paramsObj.stationList[i].departureTime*60*1000;
		}


		var paramsData = {
			'apiPath':routeService+'route',
			paramsList:{
				'routeName': paramsObj.routeName,
				'schedulerId': paramsObj.schedulerId,
				'secondCompanyId': paramsObj.secondCompanyId,
				'stationList': paramsObj.stationList
			}
		};

		return	$http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};


	schedulerHttp.updateRoute = function(paramsObj){

		for(var i=0;i<paramsObj.stationList.length;i++){
			console.log()
			paramsObj.stationList[i].departureTime = paramsObj.stationList[i].departureTime *60*1000;
		}
		
		var paramsData = {
			'apiPath':routeService+'route',
			paramsList:{
				'routeName': paramsObj.routeName,
				'schedulerId': paramsObj.schedulerId,
				'routeId': paramsObj.routeId,
				'stationList': paramsObj.stationList
			}
		};
		return	$http({ method: 'PUT',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	// Get Route List
	schedulerHttp.getRoute = function(paramsObj){
		var paramsData = {
			'apiPath':routeService+'secondCompany/'+paramsObj.secondCompanyId+'/scheduler/'+paramsObj.schedulerId,
			'paramsList':{
				'routeName': paramsObj.routeName,
				'pageNumber': paramsObj.pageNumber,
				'pageSize': paramsObj.pageSize
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};


	// Get Route Info
	schedulerHttp.getRouteInfo = function(paramsObj){
		var paramsData = {
			'apiPath':routeService+'route/'+paramsObj.routeId+'/schedulerId/'+paramsObj.schedulerId,
			'paramsList':{
				// 'secondCompanyId': paramsObj.secondCompanyId,
				// 'schedulerId': paramsObj.schedulerId,
				// 'routeName': paramsObj.routeName,
				// 'pageNumber': paramsObj.pageNumber,
				// 'pageSize': paramsObj.pageSize
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};
	// Delete Route by Id
	schedulerHttp.deleteRouteById = function(paramsObj){
		var paramsData = {
			'apiPath':routeService+'route/'+paramsObj.routeId,
			'paramsList':{
				// 'secondCompanyId': paramsObj.secondCompanyId,
				// 'schedulerId': paramsObj.schedulerId,
				// 'routeName': paramsObj.routeName,
				// 'pageNumber': paramsObj.pageNumber,
				// 'pageSize': paramsObj.pageSize
			}
		};

		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	/////////////////////  assignmentService ////////////////////////////


	// Get driver's list ,vehicle's list and routeTemplate's list.
	// when scheduler create new schedule,below api will provide driver ,vehical and 
	// route name list 
	schedulerHttp.schedulingelements = function(paramsObj){
		var paramsData = {
			'apiPath':assignmentService+'schedulingelements/'+paramsObj.schedulerId+'/'+paramsObj.secondCompanyId,
			//'apiPath':APISERVICEPATH.passengerDev+'schedulingelements.json'
			'paramsList':{
				'beginDate':parseInt(paramsObj.beginDate),
				'endDate':parseInt(paramsObj.endDate),
				'includeSunday':paramsObj.includeSunday,
				'includeSaturday':paramsObj.includeSaturday,
				'routeType':paramsObj.routeType
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};


	schedulerHttp.addAssignment = function(paramsObj){
		var paramsData = {
			'apiPath':assignmentService+'assignment',
			paramsList:{
				'beginDate': paramsObj.beginDate,
				'departureTime': paramsObj.departureTime,
				'driverId': paramsObj.driverId ||'1',
				'driverName': paramsObj.driverName,
				'routeId': paramsObj.routeId ||'1',
				'endDate': paramsObj.endDate,
				'includingSaturday': paramsObj.includeSaturday,
				'includingSunday': paramsObj.includeSunday,
				'routeType': paramsObj.routeType,
				'schedulerId': paramsObj.schedulerId,
				'secondCompanyId': paramsObj.secondCompanyId,
				'vehicleId': paramsObj.vehicleId
			}
		};
		return	$http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	// Delete addAssignment by Id
	schedulerHttp.deleteAssignmentById = function(paramsObj){
		var paramsData = {
			'apiPath':assignmentService+'assignment/'+paramsObj.routeId+'/'+paramsObj.schedulerId,
			'paramsList':{
				// 'secondCompanyId': paramsObj.secondCompanyId,
				// 'schedulerId': paramsObj.schedulerId,
				// 'routeName': paramsObj.routeName,
				// 'pageNumber': paramsObj.pageNumber,
				// 'pageSize': paramsObj.pageSize
			}
		};

		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	// specical bus
	schedulerHttp.addBookingAssignment = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'bookingAssignment',
			paramsList:{
				'beginDate': paramsObj.beginDate,
				'departureTime': paramsObj.departureTime,
				'endDate': paramsObj.endDate,
				'includingSaturday': paramsObj.includingSaturday,
				'includingSunday': paramsObj.includingSunday,
				'bookingStartStation': paramsObj.bookingStartStation,
				'bookingEndStation': paramsObj.bookingEndStation,
				'schedulerId': paramsObj.schedulerId,
				'bookingRoute': paramsObj.bookingRoute,
				'secondCompanyId': paramsObj.secondCompanyId
			}
		};
		return	$http({ method: 'POST',url:paramsData.apiPath,headers:{'Content-type':'application/json'},data:paramsData.paramsList});
	};

	schedulerHttp.bookingAssignment = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'bookingAssignment/'+'count/'+'secondCompany/'+paramsObj.secondCompanyId+'/'+paramsObj.beginTime+'/'+paramsObj.endTime,
			paramsList:{
				'beginTime':paramsObj.beginDate,
				'endTime':paramsObj.endDate,
				'secondCompanyId':paramsObj.secondCompanyId
			}
		};
		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};
	schedulerHttp.getSpecialBusList = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'bookingAssignment/'+'secondCompany/'+paramsObj.secondCompanyId+'/'+paramsObj.dateTime,
			paramsList:{
				// 'pageSize':paramsObj.pageSize,
				// 'pageNumber':paramsObj.pageNumber,
				// 'dateTime':paramsObj.dateTime,
				// 'schedulerId':paramsObj.accountId,
				// 'secondCompanyId':paramsObj.secondCompanyId
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};
	schedulerHttp.updateBookingAssignment = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'bookingAssignment/',
			'paramsList':{
				"beginDate": paramsObj.beginDate,
				"bookingEndStation": paramsObj.bookingEndStation,
				"bookingRoute": paramsObj.bookingRoute,
				"bookingStartStation": paramsObj.bookingStartStation,
				"id": paramsObj.id,
				"schedulerId": paramsObj.schedulerId
			}
		};

		return  $http({ method: 'PUT',url:paramsData.apiPath,data:paramsData.paramsList,headers:{'Content-type':'application/json'},});
	};
	schedulerHttp.deleteSpecialBusList = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'bookingAssignment/'+paramsObj.assignmentId+'/'+'scheduler/'+paramsObj.schedulerId,
			paramsList:{
				// 'assignmentId':paramsObj.assignmentId,
	   //          'schedulerId':paramsObj.schedulerId
			}
		};
		return  $http({ method: 'DELETE',url:paramsData.apiPath,params:paramsData.paramsList});
	};
	schedulerHttp.getPassengerList = function(paramsObj){
		var paramsData = {
			'apiPath':stationService+'bookingOrders/'+'scheduler/'+paramsObj.schedulerId+'/'+'assignment/'+paramsObj.assignmentId,
			paramsList:{
				'pageSize':paramsObj.pageSize,
				'pageNumber':paramsObj.pageNumber
			}
		};

		return  $http({ method: 'GET',url:paramsData.apiPath,params:paramsData.paramsList});
	};

	return schedulerHttp;
});


angular.module('schedulerAddSiteControllerModule',[])
.controller('schedulerAddSiteController',function(schedulerHttpService,utilFactory,getRefreshTokenFacotry,TOKEN_ERROR,$stateParams,$state,$scope){
	var _accountId = $stateParams.accountId || utilFactory.getAccountId();
	var _secondCompanyId = $stateParams.secondCompanyId || utilFactory.getSecondCompanyId();
	var map = new AMap.Map('container', { zoom: 10, center: [121.339766,31.196099] });

	$scope.goBack = function(){
		$state.go('admin.scheduler.site')
	}
	var marker = '';
	if(_accountId && _secondCompanyId){
		$scope.params = { 'secondCompanyId':_secondCompanyId, 'schedulerId':_accountId }
		$scope.breadcrumbText={ 'lv1':'站点管理', 'lv2':'新增站点' }
	}else{
		$state.go('amdin.scheduler.site')
	}

	AMapUI.loadUI(['misc/PoiPicker','overlay/SimpleInfoWindow'], function(PoiPicker,SimpleInfoWindow) {
		var poiPicker = new PoiPicker({city:'021',input: 'pickerInput',});
		poiPickerReady(poiPicker,SimpleInfoWindow);
	});
    AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {

        var zoomCtrl1 = new BasicControl.Zoom({
                theme: 'light'
            })

        map.addControl(zoomCtrl1);

    });

	function poiPickerReady(poiPicker,SimpleInfoWindow) {
		window.poiPicker = poiPicker;
		marker = new AMap.Marker({
			map:map,
			draggable: true,
			icon: new AMap.Icon({		
				size: new AMap.Size(44, 44),  //图标大小
				image: "../images/pin.jpg",
				imageOffset: new AMap.Pixel(7, 11)
			}),
			position: map.getCenter()
		});

		var _formContentTmpl = '<div class="form-item"><input type="text" name="name"  id="name"placeholder="站点名称 (必填)"></div>'
							 + '<div class="form-item"><input type="text" name="address" id="address" placeholder="站点地址"></div>'
							 + '<div class="form-item"><select style = "padding:1px;"name="stationType" id="stationType" required><option value="" disabled selected>站点属性 (必填)</option><option value="AM">上行</option><option value="PM">下行</option></select></div>';
		var title = '新增站点';
		var infoWindow = new AMap.InfoWindow({
			isCustom: true,  //使用自定义窗体
			content: createInfoWindow(title,content),
			offset: new AMap.Pixel(140, 200)
			//autoMove:true
		});


		function createInfoWindow (){
			var addSitePop = document.createElement("div"),titleWrapper = document.createElement("div"),formContent = document.createElement("div");
			addSitePop.className = "addSiteForm-wrapper";
			titleWrapper.className = "title";
			titleWrapper.innerHTML = title;
			addSitePop.appendChild(titleWrapper);
			formContent.className = "content";
			formContent.innerHTML = _formContentTmpl;
			
			var addBtnWrapper = document.createElement('div');
			addBtnWrapper.className = "form-item";
			
			
			var cancelBtn = document.createElement('button');
			cancelBtn.innerHTML = '取消';
			cancelBtn.onclick = function(){
				$state.go('admin.scheduler.site')
			}

			var confirmBtn = document.createElement('button');
			confirmBtn.className = 'confirmBtn';
			confirmBtn.innerHTML = "确定";
			confirmBtn.onclick = confirmBtnFn;

			addBtnWrapper.appendChild(cancelBtn);
			addBtnWrapper.appendChild(confirmBtn);

			formContent.appendChild(addBtnWrapper);
			addSitePop.appendChild(formContent);
			return addSitePop;
		}

		function confirmBtnFn(){
			$scope.httpFlag = true;
			$(".confirmBtn").attr({"disabled":"disabled"});
			var _name = $("#name").val(), _address = $("#address").val(), _stationType =  $("#stationType").val();

			if(_name!=''&&_stationType!=null && $scope.httpFlag){
				$scope.httpFlag = false;
				var _gps = marker.getPosition().lng+","+marker.getPosition().lat;
				var _params = {
					'gps':_gps,
					'name':_name,
					'address':_address,
					'stationType':_stationType,
					'secondCompanyId':$scope.params.secondCompanyId,
					'schedulerId':$scope.params.schedulerId
				}
				schedulerHttpService.addSite(_params).then(function(result){
					var responseData = result.data;
					if(!responseData.error){
						alertify.alert('新增成功！',function(){
							$state.go('admin.scheduler.site',{'schedulerId':_params.schedulerId,'secondCompanyId':_params.secondCompanyId})
						});
						$(".confirmBtn").removeAttr("disabled");
						$scope.httpFlag = true;
					}else{

						if(responseData.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200102.code){
							getRefreshTokenFacotry.getRefreshToken().then(function(){
								var _tokenRes = result.data;
								console.log('refreshToken result')
								console.log(1,_tokenRes)
								if(!_tokenRes.error){
									var _rewriteToken = localStorageFactory.getObject('account',null);
									_rewriteToken.accessToken = _tokenRes.accessToken;
									_rewriteToken.refreshToken = _tokenRes.refreshToken;
									localStorageFactory.setObject('account',_rewriteToken);
									scope.$broadcast('refreshAPI')
									$scope.httpFlag = true;
								}else{
									utilFactory.checkErrorCode(_tokenRes.error.statusCode)
									$scope.httpFlag = true;
								}
							});
						}else{
							utilFactory.checkErrorCode(responseData.error.statusCode)
							$scope.httpFlag = true;
						}
						$(".confirmBtn").removeAttr("disabled");
					}
				},function(errorResult){
					utilFactory.checkErrorCode(responseData.error.statusCode);
					$scope.httpFlag = true;	
				});
			}else{
				alertify.alert('请输入必填项',function(){
					$(".confirmBtn").removeAttr("disabled");
				});
			}
		}


		marker.setMap(map);//设置拖拽默认点位置
		infoWindow.setMap(map);
		infoWindow.open(map, marker.getPosition()); // show popup by default

		poiPicker.on('poiPicked', function(poiResult) {
			var source = poiResult.source,poi = poiResult.item,
			info = {
				source: source,
				id: poi.id,
				name: poi.name,
				location: poi.location.toString(),
				address: poi.address
			};
			
			var _gps = info.location.split(",");
			//map = null
			//var map = new AMap.Map('container', { zoom: 10, center: [_gps[0],_gps[1]] });
			marker.setMap(map);
            infoWindow.setMap(map);
            marker.setPosition(poi.location);
            infoWindow.setPosition(poi.location);
            map.setCenter(poi.location)
            infoWindow.open(map, marker.getPosition()); // show popup by default
            $(document).ready(function(){
				setTimeout(function(){
					$('.addSiteForm-wrapper').css('display','block');
				},400)
			})
			AMap.event.addListener(marker, 'dragging', function() {//拖拽时移除弹出窗体
				//infoWindow.close();
				//console.log(marker.getPosition()+"marker.getPosition()")
				infoWindow.open(map, marker.getPosition());
				$(document).ready(function(){
					$('.addSiteForm-wrapper').css('display','block');
				})
			});

			AMap.event.addListener(marker, 'dragend', function() {//拖拽时移除弹出窗体
				//infoWindow.close();
				// console.log(marker.getPosition()+"marker.getPosition()")
				infoWindow.open(map, marker.getPosition());
				$(document).ready(function(){
					$('.addSiteForm-wrapper').css('display','block');
				})
			});
		});

		poiPicker.onCityReady(function() {
			$(document).ready(function(){
				setTimeout(function(){
				$('.addSiteForm-wrapper').css('display','block');
				},200)
			})
		});
		AMap.event.addListener(marker, 'dragging', function() {//拖拽时移除弹出窗体
			//infoWindow.close();
			//console.log(marker.getPosition()+"marker.getPosition()")
			infoWindow.open(map, marker.getPosition());
			$(document).ready(function(){
				$('.addSiteForm-wrapper').css('display','block');
			})
		});

		AMap.event.addListener(marker, 'dragend', function() {//拖拽时移除弹出窗体
			//infoWindow.close();
			// console.log(marker.getPosition()+"marker.getPosition()")
			infoWindow.open(map, marker.getPosition());
			$(document).ready(function(){
				$('.addSiteForm-wrapper').css('display','block');
			})
		});

	};

	$(document).ready(function(){
		setTimeout(function(){
			$('.addSiteForm-wrapper').css('display','block');
		},200)
	})

});
angular.module('schedulerSiteControllerModule',[])
.controller('schedulerSiteController',function(loadData,schedulerHttpService,localStorageFactory,APISERVICEPATH,utilFactory,$state,$scope){
	
	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	if(!loadData.data.error &&(!loadData.data.value || !loadData.data.value.list.length)){
		$scope.dataIsEmpty = true;
	
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
		
	}

	var uploadStationUrl = APISERVICEPATH.stationService+'file/'+utilFactory.getAccountId()+'/'+utilFactory.getSecondCompanyId();
	$scope.stationTemplateUrl = APISERVICEPATH.stationService+'templateFile';
	$scope.addSite = function(){
		$state.go('admin.scheduler.addSite',{'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
	}
	$scope.downloadTemplate = function(){

		schedulerHttpService.downloadTemplateFile().then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '站点批量导入模板');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})
	}


	$scope.searchFn = function(){
		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1','stationName':$scope.searchText});
	}

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'accountId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getSiteList(params)
		},
		loadData:function(){},
		dataSet:function(result){
			var _result = result.value.list;
			for(var i=0;i<_result.length;i++){
				_result[i]['stationType'] =_result[i]['stationType'] == 'PM'?'下行':'上行';
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
				name:'查看详情',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _params = {
						'address': item.address,
						'gps': item.gps,
						'stationName': item.stationName,
						'schedulerId': utilFactory.getAccountId(),
						'secondCompanyId': utilFactory.getSecondCompanyId(),
						'stationId': item.stationId,
						'stationType': item.stationType == '上行'?'AM':'PM'
					}

					$state.go('admin.scheduler.updateSite',_params)
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _params = {
						'stationId':item.stationId,
						'schedulerId':utilFactory.getAccountId()
					};
					alertify.confirm('请确认是否要删除该站点',function(){
						schedulerHttpService.deleteSiteByID(_params).then(function(result){
							var responseData = result.data;
							if(!responseData.error){
									alertify.alert('删除成功！',function(){
										$state.go('admin.scheduler.site',{},{reload:true})
									});
							}else{
								utilFactory.checkErrorCode(responseData.error.statusCode)
							}
						},function(){

						});			
					},function(){
						
					});
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
		defaultValue:'——',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'stationName','value':'站点名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'stationType','value':'站点类型'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'address','value':'地址'},
					'checkFlag':true
				}
			]
		}
		// changeEnable:function(item){}
	}

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});


	$(document).ready(function(){
		var uploader = new plupload.Uploader({
			runtimes : 'html5,flash,silverlight,html4',
			browse_button : 'pickfiles', // you can pass an id...
			container: document.getElementById('container'), // ... or DOM Element itself
			url : uploadStationUrl,
			flash_swf_url : '../vendor/Moxie.swf',
			silverlight_xap_url : '../vendor/Moxie.xap',
			headers:{'ApplicationId':'BACKGROUND','Authorization':'Bearer '+localStorageFactory.getObject('account',null).accessToken,'operateAccountId':localStorageFactory.getObject('account',null).accountId},
			filters : {
				max_file_size : '10mb',
				mime_types: [
					{title : "Image files", extensions : "jpg,gif,png"},
					{title : "Zip files", extensions : "zip"},
					{title : "Zip files", extensions : "xls"},
					{title : "Zip files", extensions : "*"}
				]
			},

			init: {
				Init:function(){
					document.getElementById('filelist').innerHTML = '';
				},
				PostInit: function(up, files) {
					document.getElementById('filelist').innerHTML = '';
					document.getElementById('uploadfiles').onclick = function() {
						if(up.files.length == 0) {
							alertify.alert('请先选择要上传的文件',function(){
								return
							})
						}else {
							up.files[0].status = 1;
							up.start();
						}
					};
				},

				FilesAdded: function(up, files) {
					if(up.files.length>1){
						alertify.alert('只能上传一个文件', function(){
							up.removeFile(up.files[1].id)
						})
						
						return 
					} else{
						plupload.each(up.files, function(file) {
							document.getElementById('filelist').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <span class="fa fa-close" data-id="'+file.id+'" id="removeFile"></span><b></b></div>';
						});				
					}

				},

				UploadProgress: function(up, file) {
					document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<div class="progress" style="margin-top:9px;-webkit-box-shadow:none;box-shadow:none;">'
						+'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+file.percent+'" aria-valuemin="0" aria-valuemax="100" style="width:'+file.percent+'%">'
					    +	'<span class="sr-only">40% Complete (success)</span>'
					  	+'</div>'
						+'</div>';
				},
				FileUploaded:function(uploader,file,response){
					
					console.log(1, uploader)
					var _resultResponse = JSON.parse(response.response);
					if(!_resultResponse.error){
						$('#importSite').modal('toggle');
						alertify.alert('上传成功',function(){
							$state.go('admin.scheduler.site',{},{reload:true})
						})
					} else{
						if(_resultResponse.error.statusCode === '0800100601'){
							var a = JSON.parse(_resultResponse.error.message);
							
							var _gps = {
								'lineNumber':'',
								'name':'GPS位置',
								'message':''
							}
							var _station_type = {
								'lineNumber':'',
								'name':'站点属性',
								'message':''
							}
							var _station_name = {
								'lineNumber':'',
								'name':'站点名称',
								'message':''
							}
							
							for(var j=0; j<a.length; j++) {
								var curEle = a[j];
								if(a[j]['gps']){
									var _lineNumber = a[j]['gps']; 
									_gps.lineNumber = _lineNumber.substring(0,_lineNumber.length-1);
								}
								if(a[j]['station_type']){
									var _lineNumber = a[j]['station_type']; 
									_station_type.lineNumber = _lineNumber.substring(0,_lineNumber.length-1);
								}
								if(a[j]['station_name']){
									var _lineNumber = a[j]['station_name']; 
									_station_name.lineNumber = _lineNumber.substring(0,_lineNumber.length-1);
								}																					
							}
							if((_station_name.lineNumber.length) ||(_gps.lineNumber.length) ||(_station_type.lineNumber.length)){
								_station_name.message = _station_name.name + '第'+_station_name.lineNumber+'行格式错误';
								_gps.message = _gps.name + '第'+_gps.lineNumber+'行格式错误';
								_station_type.message = _station_type.name + '第'+_station_type.lineNumber+'行格式错误';

								var _station_nameError = _station_name.lineNumber.length?_station_name.message+'<br>':'';
								var _gpsError = _gps.lineNumber.length?_gps.message+'<br>':'';
								var _station_typeError = _station_type.lineNumber.length?_station_type.message:'';

								alertify.alert(_station_nameError+_gpsError+_station_typeError,function(){

									return
								});
							}		
						} else{
							utilFactory.checkErrorCode(_resultResponse.error.statusCode)
						}
					}
				}
			}
		});

		$(document).on('click','#removeFile',function(){
			uploader.removeFile($(this).data('id'));
			document.getElementById('filelist').innerHTML = '';
		})
		uploader.init();
		    //最后给"开始上传"按钮注册事件



		$scope.importSite = function(){
			$('#importSite').modal('toggle');
			if(uploader.files.length>0){
				uploader.removeFile(uploader.files[0].id);
				document.getElementById('filelist').innerHTML = '';
			}
		}
	})

})
angular.module('schedulerUpdateSiteControllerModule',[])
.controller('schedulerUpdateSiteController',function(schedulerHttpService,utilFactory,TOKEN_ERROR,$stateParams,$state,$scope){

	var _accountId = $stateParams.accountId || utilFactory.getAccountId();
	var _secondCompanyId = $stateParams.secondCompanyId || utilFactory.getSecondCompanyId();
	var _accountId = $stateParams.accountId || utilFactory.getAccountId();
	var _secondCompanyId = $stateParams.secondCompanyId || utilFactory.getSecondCompanyId();
	var map ='';
	var gps = '';
	var marker='';
	$scope.goBack = function(){
		$state.go('admin.scheduler.site')
	}

	if(_accountId && _secondCompanyId){
		$scope.address=$stateParams.address  || '';
		$scope.gps=$stateParams.gps;
		$scope.stationName=$stateParams.stationName || '';
		$scope.schedulerId=_accountId;
		$scope.secondCompanyId=_secondCompanyId;
		$scope.stationId=$stateParams.stationId;
		$scope.stationType=$stateParams.stationType;
		$scope.breadcrumbText={
			'lv1':'站点管理',
			'lv2':'编辑站点'
		}
		schedulerHttpService.getGPSForUpdateSite({'id':$scope.gps}).then(function(data){
			if(data.data.info === "OK"){
				gps = data.data.datas[0]._location.split(',')
				console.log(gps)
				map = new AMap.Map('container', { zoom: 10,center:[gps[0],gps[1]]});
				AMapUI.loadUI(['misc/PoiPicker','overlay/SimpleInfoWindow'], function(PoiPicker,SimpleInfoWindow) {
					var poiPicker = new PoiPicker({ city:'021', input: 'pickerInput',});
					poiPickerReady(poiPicker,SimpleInfoWindow);
				});
			}
		},function(){

		});
	}else{
		$state.go('admin.scheduler.site')
	}


	function poiPickerReady(poiPicker,SimpleInfoWindow) {
		window.poiPicker = poiPicker;
		marker = new AMap.Marker({
			map:map,
			draggable: true,
			icon: new AMap.Icon({		
				size: new AMap.Size(44, 44),  //图标大小
				image: "../images/pin.jpg",
				imageOffset: new AMap.Pixel(7, 11)
			}),
			position: map.getCenter()
		});
		var _formContentTmpl = '<div class="form-item"><input type="text" placeholder="站点名称 (必填)"  name="name"  id="name" value="'
							 +  $scope.stationName+'"></div>'
							 + '<div class="form-item"><input type="text" name="address" placeholder="站点地址" id="address" value="'
							 +  $scope.address+'"></div>'
							 + '<div class="form-item"><select style="padding:1px;" name="stationType" id="stationType"><option value="AM" >上行</option><option value="PM">下行</option></select></div>';

		var title = '编辑站点';
		var infoWindow = new AMap.InfoWindow({
			isCustom: true,
			content: createInfoWindow(title),
			offset: new AMap.Pixel(140, 200),
		});


		function createInfoWindow (){
			var addSitePop = document.createElement("div"),titleWrapper = document.createElement("div"),formContent = document.createElement("div");
			addSitePop.className = "addSiteForm-wrapper";
			titleWrapper.className = "title";
			titleWrapper.innerHTML = title;
			addSitePop.appendChild(titleWrapper);
			formContent.className = "content";
			formContent.innerHTML = _formContentTmpl;
			
			var addBtnWrapper = document.createElement('div');
			addBtnWrapper.className = "form-item";
			
			
			var cancelBtn = document.createElement('button');
			cancelBtn.innerHTML = '取消';
			cancelBtn.onclick = function(){
				$state.go('admin.scheduler.site')
			}

			var confirmBtn = document.createElement('button');
			confirmBtn.className = 'updateConfirmBtn';
			confirmBtn.innerHTML = "确定";
			confirmBtn.onclick = confirmBtnFn;

			addBtnWrapper.appendChild(cancelBtn);
			addBtnWrapper.appendChild(confirmBtn);

			formContent.appendChild(addBtnWrapper);
			addSitePop.appendChild(formContent);
			return addSitePop;
		}
		
		function confirmBtnFn(){
			$(".updateConfirmBtn").attr({"disabled":"disabled"});
			event.stopPropagation();
			$scope.httpFlag = true;
			var _name = $("#name").val(), _address = $("#address").val(), _stationType =  $("#stationType").val();
			if(_name!='' && $scope.httpFlag){
				$scope.httpFlag = false;
				var _gps = marker.getPosition().lng+","+marker.getPosition().lat;
				var _params = {
					'gps':_gps,
					'name':_name,
					'address':_address,
					'stationType':_stationType,
					"secondCompanyId":$scope.secondCompanyId,
					"schedulerId":$scope.schedulerId,
					'stationId':$scope.stationId
				}

				schedulerHttpService.updateSite(_params).then(function(result){
					var responseData = result.data;
					if(!responseData.error){
						alertify.alert('更新成功！',function(){
							$state.go('admin.scheduler.site')
						})
					}else{
						if(responseData.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200102.code){
							getRefreshTokenFacotry.getRefreshToken().then(function(){
								var _tokenRes = result.data;
								console.log('refreshToken result')
								console.log(1,_tokenRes)
								if(!_tokenRes.error){
									var _rewriteToken = localStorageFactory.getObject('account',null);
									_rewriteToken.accessToken = _tokenRes.accessToken;
									_rewriteToken.refreshToken = _tokenRes.refreshToken;
									localStorageFactory.setObject('account',_rewriteToken);
									scope.$broadcast('refreshAPI')
								}else{
									utilFactory.checkErrorCode(_tokenRes.error.statusCode)
									$scope.httpFlag = true;
								}
							});
						}else{
							utilFactory.checkErrorCode(responseData.error.statusCode)
							$scope.httpFlag = true;
						}
						$(".updateConfirmBtn").removeAttr("disabled");
					}
				},function(errorResult){
					//utilFactory.checkErrorCode(responseData.error.statusCode)
				});
			}else{
				alertify.alert('请输入必填项',function(){
					$(".updateConfirmBtn").removeAttr("disabled");
				});
			}
		}

		marker.setMap(map);
		infoWindow.setMap(map);

		infoWindow.open(map, marker.getPosition()); // show popup by default

		poiPicker.on('poiPicked', function(poiResult) {
			var source = poiResult.source,poi = poiResult.item,
			info = {
				source: source,
				id: poi.id,
				name: poi.name,
				location: poi.location.toString(),
				address: poi.address
			};
			
			var _gps = info.location.split(",");
			//map = null
			//var map = new AMap.Map('container', { zoom: 10, center: [_gps[0],_gps[1]] });
			marker.setMap(map);
            infoWindow.setMap(map);
            marker.setPosition(poi.location);
            infoWindow.setPosition(poi.location);
            map.setCenter(poi.location)
            console.log('xxx')
            infoWindow.open(map, marker.getPosition()); // show popup by default
            $(document).ready(function(){
				setTimeout(function(){
					$('.addSiteForm-wrapper').css('display','block');
				},400)
			})
			AMap.event.addListener(marker, 'dragging', function() {//拖拽时移除弹出窗体
				//infoWindow.close();
				//console.log(marker.getPosition()+"marker.getPosition()")
				infoWindow.open(map, marker.getPosition());
				$(document).ready(function(){
					$('.addSiteForm-wrapper').css('display','block');
				})
			});

			AMap.event.addListener(marker, 'dragend', function() {//拖拽时移除弹出窗体
				//infoWindow.close();
				// console.log(marker.getPosition()+"marker.getPosition()")
				infoWindow.open(map, marker.getPosition());
				$(document).ready(function(){
					$('.addSiteForm-wrapper').css('display','block');
				})
			});
		});

		$(document).ready(function(){
			setTimeout(function(){
				console.log('$scope.stationType:'+$scope.stationType)
				// $scope.stationType == '上行'
				$("#stationType").val($scope.stationType);
			},200)
		})

		poiPicker.onCityReady(function() {
			$(document).ready(function(){
				setTimeout(function(){
				$('.addSiteForm-wrapper').css('display','block');
				},200)
			})
		});
		AMap.event.addListener(marker, 'dragging', function() {
			//infoWindow.close();
			infoWindow.open(map, marker.getPosition());
			$(document).ready(function(){
				$('.addSiteForm-wrapper').css('display','block');
			})
		});

		AMap.event.addListener(marker, 'dragend', function() {//拖拽时移除弹出窗体
			//infoWindow.close();
			// console.log(marker.getPosition()+"marker.getPosition()")
			infoWindow.open(map, marker.getPosition());
			$(document).ready(function(){
				$('.addSiteForm-wrapper').css('display','block');
			})
		});
	};

	$(document).ready(function(){
		setTimeout(function(){
			$('.addSiteForm-wrapper').css('display','block');
		},400)
	})

})
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
angular.module('schedulerSpecialBusEditControllerModule',[])
.controller('schedulerSpecialBusEditController',function(schedulerHttpService,TOKEN_ERROR,utilFactory,$scope,$state,$compile,$stateParams){
	$scope.breadcrumbText={
		'lv1':'专车排班',
		'lv2':'排班详情'
	}

	$scope.addSchedule = function(){
		$state.go('admin.scheduler.addOneDaySchedule');
	}

	$('.datepicker').datepicker({ 
		language: "zh-CN"
	});

	// $scope.eventDay = $stateParams.eventDay;

	$scope.pageConfigsModal={

		// var result = $scope.tableConfig.stableFlag.operate;
		// for(var i =0;i<result.length;i++) {
		// 	$scope.tableConfig.stableFlag.operate[i].fun();
		// 	console.log("1234567890")
		// }
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'schedulerId':utilFactory.getAccountId(),
			'assignmentId': $stateParams.assignmentId
		},
		list:null,
		ngIf:false,
		getList:function(params){
			return schedulerHttpService.getPassengerList(params);
		},
		loadData:function(){
		},
		dataSet:function(result){
			// if(result.value !=null){
			// 	var _dataArray = result.value
			// 	for(var i=0;i<_dataArray.length;i++){
			// 		_dataArray[i]['departureTime'] = utilFactory.getLocalTime(_dataArray[i]['departureTime']);
			// 	}
			// }
		}
  	}

	$scope.tableConfigModal={
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
					'selfKey':{'key':'curElementsNum','value':'编号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'bookingAssignmentId','value':'预约编号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'passengerName','value':'姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'beginTime','value':'创建时间'},
					'checkFlag':true
				}
			]
		}
	}

});
angular.module('schedulerSpecialBusListControllerModule',[])
.controller('schedulerSpecialBusListController',function(schedulerHttpService,TOKEN_ERROR,utilFactory,$scope,$state,$stateParams,ERRORCODE_CONSTANT){
	$scope.breadcrumbText={
		'lv1':'专车排班',
		'lv2':'排班详情'
	}

	$("#currentDay").val($stateParams.eventDay);
	$scope.params = {
		'currentDay':$("#currentDay").val()
	}

	var dateTime = utilFactory.getTimestamp($scope.params.currentDay);
	var d = new Date();
	var clickDay = utilFactory.getTimestamp($scope.params.currentDay+" 00:00");
	var compareDay = utilFactory.getTimestamp(d)+24*60*60*1000;

	$scope.clickDate = $stateParams.eventDay.replace(/\//g,'.');

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
	$('.datepicker').datepicker({ 
		language: "zh-CN",
	});

	if(clickDay < compareDay) {
		$scope.display = true
	} else {
		$scope.display = false
	}

	$scope.selectAllStatus = false;



	// get specialBusList table
	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'accountId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId(),
			'dateTime':utilFactory.getTimestamp($scope.params.currentDay)
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getSpecialBusList(params)
		},
		loadData:function(){
		},
		dataSet:function(result){
			var _data = result.value.list;
			for(var i =0;i<_data.length;i++){
				_data[i]['bookingRoute'] = _data[i]['bookingRoute'] + '(' +_data[i]['bookingStartStation'] +' - '+ _data[i]['bookingEndStation']+')'
				_data[i]['beginTime'] = utilFactory.getCurrentTime((_data[i]['beginTime']));
				_data[i]['bookingCount'] = _data[i]['bookingCount'] ? _data[i]['bookingCount'] : '0';

			}
		},
		extendParams:function(){}
		
	}

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看预约人',
				ngIf:function(item){
					if (clickDay < compareDay) {
						return true
					} else {
						return false
					}
				},
				fun:function(item,event){
				
					// $state.go('admin.scheduler.specialBusEdit',{'assignmentId': item.id});
					$scope.checkParams = {
						'pageSize':'20',
						'pageNumber':'1',
						'schedulerId':utilFactory.getAccountId(),
						'assignmentId': item.id
					}
					$scope.routeName = item.bookingRoute.split("(")[0];
					$scope.departureTime = item.beginTime;
					$('#myModal').modal('toggle');
					schedulerHttpService.getPassengerList($scope.checkParams).then(function(result){
						var _resultData = result.data;
						if(!_resultData.error){
							var _data = _resultData.value.list
							for(var i=0;i<_data.length;i++){
								_data[i]['passengerId'] = i+1;
								_data[i]['createTime'] = utilFactory.getLocalTime((_data[i]['createTime']));
							}
							$scope.pageConfigsModal.list = _resultData.value.list;
						}else{
							utilFactory.checkErrorCode(_resultData.error.statusCode)
						}
			      	});
					$scope.pageConfigsModal={

						params:{
							'pageSize':'20',
							'pageNumber':'1',
							'schedulerId':utilFactory.getAccountId(),
							'assignmentId': $scope.checkParams.assignmentId
						},
						list:null,
						getList:function(params){
							return schedulerHttpService.getPassengerList(params);
						},
						loadData:function(){
						},
						dataSet:function(result){
						}
				  	}
				}
			},
			{
				name:'编辑',
				ngIf:function(){
					if (clickDay < compareDay) {
						return false;
					} else {
						return true;
					}
				},
				fun:function(item,event){
					$scope.updateParams = {
						"bookingEndStation": item.bookingEndStation,
						"bookingRoute": item.bookingRoute,
						"bookingStartStation": item.bookingStartStation,
						"id": item.id
					}
					$("#departureTime").val(item.beginTime);
					$('#updateModal').modal('toggle');
				}
			},
			{
				name:'删除',
				ngIf:function(){
					if (clickDay < compareDay) {
						return false;
					} else {
						return true;
					}
				},
				fun:function(item){
					var deleteParams = {
						'schedulerId': utilFactory.getAccountId(),
						'assignmentId': item.id
					}
					alertify.confirm('确认要删除该排班吗',function(){
						schedulerHttpService.deleteSpecialBusList(deleteParams).then(function(result){
							var _resultData = result.data;
							if(!_resultData.error) {
								alertify.alert('删除成功！',function(){
									$state.go('admin.scheduler.specialBusList',{},{reload:true})
									var params = {
										'pageSize':'20',
										'pageNumber':'1',
										'accountId':utilFactory.getAccountId(),
										'secondCompanyId':utilFactory.getSecondCompanyId(),
										'dateTime':utilFactory.getTimestamp($("#currentDay").val())
									}
									// $scope.pageConfigs.getList(params);

									// $state.reload();
									// $scope.$broadcast('refreshPageList',{
									// 	pageSize:'20',
									// 	pageNo:'1',
									// 	secondCompanyId:utilFactory.getSecondCompanyId(),
									// 	dateTime:utilFactory.getTimestamp($("#currentDay").val())
									// });

								})
								
							}else{
								utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.statusText)
							}
						})
					},function(){}).set({labels:{cancel: '取消',ok:'坚持删除'}, padding: true});
				}
			}
			]
		},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		defaultEmptyText:'还未添加过任何排班',
		radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'bookingRoute','value':'线路信息'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'beginTime','value':'发车时间'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'bookingCount','value':'预约人数'},
					'checkFlag':true
				}
	    	]
	    },
		changeEnable:function(item){}
	}


	$scope.addSchedule = function(){
		$state.go('admin.scheduler.addOneDaySchedule',{'eventDay':$scope.params.currentDay,'dateTime':dateTime});
	}	

	$('.clockpicker').clockpicker({
		placement: 'top',
		align: 'left',
		autoclose: true
	});
	// var _startTime = $("#departureTime").val();

	$scope.close = function(){ $('#updateModal').modal('toggle');}


 //    get passenger list
	$scope.tableConfigModal={
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
					'selfKey':{'key':'curElementsNum','value':'编号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'bookingAssignmentId','value':'预约编号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'passengerName','value':'姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'createTime','value':'创建时间'},
					'checkFlag':true
				}
			]
		}
	}

	$scope.$watch('params.currentDay',function(newValue, oldValue){ 
		if (newValue === oldValue) { 
			return
		} else {
			var params = {
				'pageSize':'20',
				'pageNumber':'1',
				'accountId':utilFactory.getAccountId(),
				'secondCompanyId':utilFactory.getSecondCompanyId(),
				'dateTime':utilFactory.getTimestamp(newValue)
			}

			var _result = $scope.tableConfig.stableFlag.operate;
			for(var i =0;i<_result.length;i++) {
				clickDay = utilFactory.getTimestamp(newValue);
				$scope.tableConfig.stableFlag.operate[i].ngIf();
			}
			// $scope.pageConfigs.list = null
			$scope.pageConfigs.getList(params);
			
			if(clickDay < compareDay) {
				$scope.display = true;
			} else {
				$scope.display = false;
			}

			$scope.$broadcast('refreshPageList',{
				pageSize:'20',
				pageNo:'1',
				secondCompanyId:utilFactory.getSecondCompanyId(),
				dateTime:utilFactory.getTimestamp(newValue)
			});
		}  		
	});
	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});

	$scope.updateBookingAssignment = function(updateFormValidateIsInvalid){

		// if(updateFormValidateIsInvalid){ 
		// 	return utilFactory.setDirty($scope.updateFormValidate)
		// }
		$("#departureTime").val();

		var _startTime = $("#departureTime").val();
		$scope._startTime = $("#departureTime").val();
		var _formateDepartureTime = utilFactory.getTimestamp($scope.params.currentDay + ' '+_startTime);
		var _bookingRoute = $scope.updateParams.bookingRoute.split("(");
		var _params = {
			"beginDate": _formateDepartureTime,
			"bookingEndStation": $scope.updateParams.bookingEndStation,
			"bookingRoute": _bookingRoute[0],
			"bookingStartStation": $scope.updateParams.bookingStartStation,
			"id": $scope.updateParams.id,
			'schedulerId': utilFactory.getAccountId()
		}
	
		$scope.submitOnProgress = true;
		$('#updateModal').modal('toggle');
		schedulerHttpService.updateBookingAssignment(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					var params = {
						'pageSize':'20',
						'pageNumber':'1',
						'accountId':utilFactory.getAccountId(),
						'secondCompanyId':utilFactory.getSecondCompanyId(),
						'dateTime':utilFactory.getTimestamp($("#currentDay").val())
					}
					$scope.pageConfigs.getList(params);

					$scope.$broadcast('refreshPageList',{
						pageSize:'20',
						pageNo:'1',
						secondCompanyId:utilFactory.getSecondCompanyId(),
						dateTime:utilFactory.getTimestamp($("#currentDay").val())
					});

				})
			}else{

				if(_resultData.error.statusCode == ERRORCODE_CONSTANT.ERROR_CODE_08005004004.code) {
					alertify.alert('编辑预约排班须至少提前两天',function(){})
				} else {
					utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.statusText);
				}
			}
			$scope.submitOnProgress = false;
		},function(){
			$scope.submitOnProgress = false;
		})
	};	
});