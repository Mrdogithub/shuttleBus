angular.module('companyControllerModule',[])
.controller('companyController',function($scope){

	$scope.leftSideTitle = "公司管理";
	$scope.icon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAR5JREFUOBGlk89KAlEUh+eWK90EuRBx1SKIwB5BXCTi2jdo7Sp6gla+Qy/gC7hQCRSC1oKbQJI2QRBtRILK6fvdjnoJlFEPfHP+/c7MYe6Mi8ziOC4Q1qEMZ5AD2RuM4RF68OCcmzsGaiQNqMABXMEQQrsgubPCK/5Wg1OCjBXlOvAc5ApP4DKoTTX4TeEwKCYJf1KmusYPkkygKUEz0hOhmHBI+qJm9DJ2sr0H81s81mt3fqt7rzph1Ru437CyetJMvMaOo6qEOA2f8N9US5umSrw8jqy/SxQd4RcfhZW8U0092Z9W0zCDFrzAOlNPGmm/tN4AtrW+jkNrjOBUe2D6C959tLocE3YtfcKf+5jhNszhA8JfbNHPWE+atoq/NQP1DeFlCFoAAAAASUVORK5CYII=';

	$scope.menuArray =[
		{'name':'公司列表','class':'','permission':'','uiSref':'company.list','href':'route'},
		{'name':'乘客管理员','class':'','permission':'','uiSref':'company.HR','href':'route'},
		{'name':'班车管理员','class':'','permission':'','uiSref':'company.scheduler','href':'route'}
		
	];

	
});