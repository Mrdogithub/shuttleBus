
'use strict'
angular.module('schedulerAddRouteControllerModule',[])
.controller('schedulerAddRouteController',function(schedulerHttpService,$stateParams,$state,$scope){

	if($stateParams.schedulerUUID &&$stateParams.secondCompanyID){
		console.log('okok')
		$scope.params = {
		  	'routeName':'',
		  	'routeType': '',
		  	'schedulerUUID': $stateParams.schedulerUUID,
		  	'secondCompanyID': $stateParams.secondCompanyID,
		  	'stationList': [
			    {
					'departureTime': 0,
					'stationId': 0
			    }
			]
		}

		$scope.active = true;
		$scope.submitOnProgress = false;
		$scope.breadcrumbParams = {
			'schedulerUUID':$stateParams.schedulerUUID,
			'secondCompanyId':$stateParams.secondCompanyId	
		}
		$scope.routeTypeList = [
			{'name':'上行 / 下行','routeType':'0'},
			{'name':'仅上行','routeType':'1'},
			{'name':'仅下行','routeType':'2'},
		];
		$scope.breadcrumbText={
			'lv1':'线路管理',
			'lv2':'新增线路'
		}
	}else{
		$state.go('scheduler.route',$scope.breadcrumbParams)
	}


	$scope.selectRouteType = function (routeType) {
		console.log(routeType+"selectRouteType")
	}
})