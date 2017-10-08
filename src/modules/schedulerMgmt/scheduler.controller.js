'use strict'
angular.module('schedulerControllerModule',[])
.controller('schedulerController',function($scope){

	$scope.leftSideTitle = "班车管理";
	$scope.icon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';

	$scope.menuArray =[
		{'name':'线路管理','class':'','permission':'','uiSref':'scheduler.route','href':'route'},
		{'name':'站点管理','class':'','permission':'','uiSref':'scheduler.site','href':'site'},
		{'name':'运营单位','class':'','permission':'','uiSref':'scheduler.busCompany','href':'busCompany'},
		{'name':'司机管理','class':'','permission':'','uiSref':'scheduler.driver','href':'driver'},
		{'name':'车辆管理','class':'','permission':'','uiSref':'scheduler.bus','href':'bus'},
		{'name':'排班管理','class':'','permission':'','uiSref':'scheduler.calendar','href':'calendar'}
		
	];

	
});