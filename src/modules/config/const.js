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
