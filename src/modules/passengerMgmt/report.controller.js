'use strict'
angular.module('reportControllerModule',[]).controller('reportController',function($scope){

	$scope.tabList = [
		{'name':'记录数据','url':'passenger.report.data'},
		{'name':'到达时间','url':'passenger.report.arrival'},
		{'name':'乘车人员','url':'passenger.report.passengers'},
		{'name':'班车站点','url':'passenger.report.station'},
		{'name':'班车线路','url':'passenger.report.route'}
	]
})