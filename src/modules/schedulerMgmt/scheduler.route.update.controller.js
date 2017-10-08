<<<<<<< HEAD

'use strict'
angular.module('schedulerUpdateRouteControllerModule',[])
.controller('schedulerUpdateRouteController',function(utilFactory,schedulerHttpService,$timeout,$stateParams,$state,$scope){

	var _accountId = $stateParams.schedulerId || utilFactory.getAccountId();
	var _secondCompanyId = $stateParams.secondCompanyId || utilFactory.getSecondCompanyId();
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
		  	'stationList':[{'stationName':'数据加载中...'}],
		  	'stationList_2':[]
		}

		$scope.active = true;
		$scope.submitOnProgress = false;

		$scope.routeTypeList = [
			// {'name':'上行 / 下行','routeType':'0'},
			{'name':'仅上行','routeType':'AM'},
			{'name':'仅下行','routeType':'PM'}
		];

		schedulerHttpService.getRouteInfo({'routeId':$scope.params.routeId,'schedulerId':$scope.params.schedulerId}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
			
				for(var i=0;i<_resultData.value.list.length;i++){
					// filter unuse params
					delete _resultData.value.list[i]['address'];
					delete _resultData.value.list[i]['gps'];
					delete _resultData.value.list[i]['stationName'];
					delete _resultData.value.list[i]['status'];
				}

				$scope.params.stationList_2 = _resultData.value.list;
			}
		});
		$scope.breadcrumbText={'lv1':'线路管理','lv2':'新增线路'}

	}else{
		$state.go('scheduler.route')
	}


	$scope.selectRouteType = function (routeType) {
		$scope.params.routeType = routeType;
	}

	// Search result by stationName 
	$scope.searchByStationName = function(){
		schedulerHttpService.getSiteList({'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationName':$scope.params.stationName,'stationType':$scope.params.routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){

				$scope.params.stationList = _resultData.value.list; 
			}else{
				alertify.alert(_resultData.error.message)
			}
		});
	}

	// submit step one 
	$scope.stepOneSubmit = function(formValidateOneIsInvalid){

		// Submit empty form will provide error messages
		if(formValidateOneIsInvalid){
			return utilFactory.setDirty($scope.formValidateOne);
		}


		// Get site list for user create site under current route
		schedulerHttpService.getSiteList({'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationType':$scope.params.routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				
				$scope.params.stationList = _resultData.value.list.length ? $scope.params.stationList = _resultData.value.list : $scope.params.stationList=[{'stationName':'暂无数据'}]; 

			}else{
				alertify.alert(_resultData.error.message)
			}
		});

		$scope.stepOne = false;
		$scope.stepTwo = true;
	}


	$scope.pre = function(){
		$scope.stepOne = true;
		$scope.stepTwo = false;
	}

	$scope.sortableOptions = {
		placeholder: "dragItem",
		connectWith: ".dragWrapper"
	};


	$scope.stepTwoSubmit = function(){
		var _stationList = $scope.params.stationList_2;
		for(var i=0;i<_stationList.length;i++){
			// filter unuse params
			delete _stationList[i]['address'];
			delete _stationList[i]['gps'];
			delete _stationList[i]['stationName'];
			delete _stationList[i]['status'];
		}
		var _params = {
			'routeName': $scope.params.routeName,
			'schedulerId': utilFactory.getAccountId(),
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'stationList': _stationList
		}

		schedulerHttpService.addRoute(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('scheduler.route')
				}) 
			}else{
				if(_resultData.error.statusCode == '0800200101'){
					alertify.alert('所属公司不存在,无法创建该线路')
				}
				alertify.alert(_resultData.error.message)
			}
		});
	}

	// Remove Item from selected area
	$scope.removeSiteItem = function(id){

		$("#item_"+id).remove();
	}
=======

'use strict'
angular.module('schedulerUpdateRouteControllerModule',[])
.controller('schedulerUpdateRouteController',function(utilFactory,schedulerHttpService,$timeout,$stateParams,$state,$scope){

	var _accountId = $stateParams.schedulerId || utilFactory.getAccountId();
	var _secondCompanyId = $stateParams.secondCompanyId || utilFactory.getSecondCompanyId();
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
		  	'stationList':[{'stationName':'数据加载中...'}],
		  	'stationList_2':[]
		}

		$scope.active = true;
		$scope.submitOnProgress = false;

		$scope.routeTypeList = [
			// {'name':'上行 / 下行','routeType':'0'},
			{'name':'仅上行','routeType':'AM'},
			{'name':'仅下行','routeType':'PM'}
		];

		schedulerHttpService.getRouteInfo({'routeId':$scope.params.routeId,'schedulerId':$scope.params.schedulerId}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
			
				for(var i=0;i<_resultData.value.list.length;i++){
					// filter unuse params
					delete _resultData.value.list[i]['address'];
					delete _resultData.value.list[i]['gps'];
					delete _resultData.value.list[i]['stationName'];
					delete _resultData.value.list[i]['status'];
				}

				$scope.params.stationList_2 = _resultData.value.list;
			}
		});
		$scope.breadcrumbText={'lv1':'线路管理','lv2':'新增线路'}

	}else{
		$state.go('scheduler.route')
	}


	$scope.selectRouteType = function (routeType) {
		$scope.params.routeType = routeType;
	}

	// Search result by stationName 
	$scope.searchByStationName = function(){
		schedulerHttpService.getSiteList({'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationName':$scope.params.stationName,'stationType':$scope.params.routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){

				$scope.params.stationList = _resultData.value.list; 
			}else{
				alertify.alert(_resultData.error.message)
			}
		});
	}

	// submit step one 
	$scope.stepOneSubmit = function(formValidateOneIsInvalid){

		// Submit empty form will provide error messages
		if(formValidateOneIsInvalid){
			return utilFactory.setDirty($scope.formValidateOne);
		}


		// Get site list for user create site under current route
		schedulerHttpService.getSiteList({'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationType':$scope.params.routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				
				$scope.params.stationList = _resultData.value.list.length ? $scope.params.stationList = _resultData.value.list : $scope.params.stationList=[{'stationName':'暂无数据'}]; 

			}else{
				alertify.alert(_resultData.error.message)
			}
		});

		$scope.stepOne = false;
		$scope.stepTwo = true;
	}


	$scope.pre = function(){
		$scope.stepOne = true;
		$scope.stepTwo = false;
	}

	$scope.sortableOptions = {
		placeholder: "dragItem",
		connectWith: ".dragWrapper"
	};


	$scope.stepTwoSubmit = function(){
		var _stationList = $scope.params.stationList_2;
		for(var i=0;i<_stationList.length;i++){
			// filter unuse params
			delete _stationList[i]['address'];
			delete _stationList[i]['gps'];
			delete _stationList[i]['stationName'];
			delete _stationList[i]['status'];
		}
		var _params = {
			'routeName': $scope.params.routeName,
			'schedulerId': utilFactory.getAccountId(),
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'stationList': _stationList
		}

		schedulerHttpService.addRoute(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('scheduler.route')
				}) 
			}else{
				if(_resultData.error.statusCode == '0800200101'){
					alertify.alert('所属公司不存在,无法创建该线路')
				}
				alertify.alert(_resultData.error.message)
			}
		});
	}

	// Remove Item from selected area
	$scope.removeSiteItem = function(id){

		$("#item_"+id).remove();
	}
>>>>>>> 7d3cf1803017ce6215a2432ad96e570109fcee20
})