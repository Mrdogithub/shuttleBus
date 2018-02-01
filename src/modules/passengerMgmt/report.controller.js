angular.module('reportControllerModule',[]).controller('reportController',function($scope){
	$scope.tabList = [
		{'name':'记录数据','url':'admin.passenger.report.data'},
		{'name':'到达时间','url':'admin.passenger.report.arrival'},
		{'name':'乘车人员','url':'admin.passenger.report.passengers'},
		{'name':'班车站点','url':'admin.passenger.report.station'},
		{'name':'班车线路','url':'admin.passenger.report.busRoute'}
	]
})