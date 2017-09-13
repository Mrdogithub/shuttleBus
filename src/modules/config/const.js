'use strict'
angular.module('constModule',[])
.constant('APISERVICEPATH',{
	'dev'              :'http://ford-shuttlebus-authentication-management.apps.cl-cn-east-preprod01.cf.ford.com/api/v1/',
	'token'            :'http://ford-shuttlebus-authentication-management.apps.cl-cn-east-preprod01.cf.ford.com/api/v1/',
	'assignmentService':'http://ford-shuttlebus-authentication-management.apps.cl-cn-east-preprod01.cf.ford.com/api/v1/assignmentService/',
	//'dev':'http://19.229.169.185:7072/api/v1/',
	// 'dev_1':'http://19.229.169.185:7080/api/v1/',
	'passengerDev'     :'./data/',
	'passengerTrip'    :'http://ford-shuttlebus-route-management.apps.cl-cn-east-preprod01.cf.ford.com/api/v1/tripHistoryService/',
	'passengerAccount' :'http://ford-shuttlebus-accountandauthority-management.apps.cl-cn-east-preprod01.cf.ford.com/api/v1/passengerAccount/',
	'passengerProfile' :'http://ford-shuttlebus-profile-management.apps.cl-cn-east-preprod01.cf.ford.com/api/v1/passengerProfile/',
	'vehicleService'   :'http://ford-shuttlebus-shuttle-management.apps.cl-cn-east-preprod01.cf.ford.com/api/v1/vehicleService/',
	// 'prd':'http://19.229.169.202:7071/api/v1/passengerAccount/',
	'driverAccount'    : 'http://ford-shuttlebus-accountandauthority-management.apps.cl-cn-east-preprod01.cf.ford.com/api/v1/driverAccount/',
	'stationService'   :'http://ford-shuttlebus-route-management.apps.cl-cn-east-preprod01.cf.ford.com/api/v1/stationService/',
	'stationDev'       :'/api/v1/stationService/'
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
	'STATUS_CODE_0200112':{'code':'0200112','message':'无效的请求'}
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
	'STATUS_CODE_0200112':{'code':'0200112','message':'无效的请求'}
})
.constant('SMSCODE_ERROR',{
	'STATUS_CODE_0100108':{'code':'0100108','message':'发送验证码失败,请稍候再试'},
	'STATUS_CODE_0100110':{'code':'0100110','message':'发送验证码失败,请稍候再试'},
	'STATUS_CODE_0200108':{'code':'0200108','message':'无效的请求'},
	'STATUS_CODE_0200109':{'code':'0200109','message':'无效的请求'},
	'STATUS_CODE_0200110':{'code':'0200110','message':'无效的请求'},
	'STATUS_CODE_0200111':{'code':'0200111','message':'无效的请求'},
	'STATUS_CODE_0200112':{'code':'0200112','message':'无效的请求'}
})
.constant('FORGET_ACCOUNT_ERROR',{
	'STATUS_CODE_0100112':{'code':'0100112','message':'验证码不正确,请重新输入或重新获取验证码'},
	'STATUS_CODE_0100109':{'code':'0100109','message':'验证码已经失效,请重新获取验证码'},
	'STATUS_CODE_0200107':{'code':'0200107','message':'无效的请求'},
	'STATUS_CODE_0200106':{'code':'0200106','message':'无效的请求'},
	'STATUS_CODE_0200104':{'code':'0200104','message':'重置密码可能遇到问题，请稍候再试'},
	'STATUS_CODE_0200108':{'code':'0200108','message':'无效的请求'},
	'STATUS_CODE_0200109':{'code':'0200109','message':'无效的请求'},
	'STATUS_CODE_0200110':{'code':'0200110','message':'无效的请求'},
	'STATUS_CODE_0200111':{'code':'0200111','message':'无效的请求'},
	'STATUS_CODE_0200112':{'code':'0200112','message':'无效的请求'}
})
.constant('TOKEN_ERROR',{
	'STATUS_CODE_0200102':{'code':'0200102','message':'token 过期'},
	'STATUS_CODE_0200105':{'code':'0200105','message':'重新登录'}
}).
constant('USER_ACCOUNT',{
	'accountId':'',
	'accessToken':'',
	'refreshToken':'',
	'ROLE_SYSADMIN':false,
	'ROLE_APPLICATION_ADMIN':false,
	'ROLE_SECOND_COMPANY_ADMIN':false,
	'ROLE_HR':false,
	'ROLE_SCHEDULER':false,
	'ROLE_PASSENGER':false,
	'ROLE_DRIVER':false
})