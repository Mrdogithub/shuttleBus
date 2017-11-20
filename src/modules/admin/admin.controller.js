'use strict'
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
				{'name':'排班管理','class':'','permission':'ROLE_SCHEDULER','uiSref':'admin.scheduler.calendar','href':'calendar'}
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
				{'name':'公司列表','class':'','permission':'ROLE_APPLICATIONADMIN','uiSref':'admin.companyList','href':'companyList'},
				{'name':'乘客管理员','class':'','permission':'ROLE_SECONDADMIN','uiSref':'admin.companyAdminHR','href':'hrAdmin'},
				{'name':'班车管理员','class':'','permission':'ROLE_SECONDADMIN','uiSref':'admin.companyAdminScheduler','href':'schedulerAdmin'}
			]
		}
	];

})