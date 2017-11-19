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
				_currentAllSitesArray = $scope.params.stationTypeIsAMList.concat($scope.params.stationTypeIsPMList);
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
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});

		// Setting sites as default data for next page
		$scope.params.stationSelectedForRoute = routeType == 'AM'?$scope.params.stationTypeIsAMList:$scope.params.stationTypeIsPMList;
	};

	$scope.searchStationNameByRouteType = function(routeType){
		schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationName':$scope.params.stationName,'stationType':routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				$scope.params.stationListFromSiteLibrary = null;
				$scope.params.stationListFromSiteLibrary = _resultData.value.list; 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode);
			}
		});
	}


	$scope.submitRouteUpdateBaseInfo = function(formValidateOne){
		if(!formValidateOne) return utilFactory.setDirty($scope.formValidateOne);
		var totalSite = [];
		totalSite.concat($scope.params.stationTypeIsAMList).concat($scope.params.stationTypeIsPMList)
		var _params = {
			'routeName': $scope.params.routeName,
			'schedulerId': utilFactory.getAccountId(),
			'routeId': $scope.params.routeId,
			'stationList': totalSite
		}

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
		for(var i = $scope.params.stationListFromSiteLibrary.length-1 ; i>=0;i--){
			if($scope.params.stationListFromSiteLibrary[i].stationId == stationId && $scope.params.stationListFromSiteLibrary[i]['stationType'] == routeType){
				$scope.params.stationSelectedForRoute.push($scope.params.stationListFromSiteLibrary[i])
				$scope.params.stationListFromSiteLibrary.splice(i,1)
			}
		}
	}

	$scope.removeSiteItemFromSelectedList = function($event,id,stationId,routeType,departureTime,routeStationId){

		$event.stopPropagation()
		for(var i = $scope.params.stationSelectedForRoute.length-1 ; i>=0;i--){
			if($scope.params.stationSelectedForRoute[i].stationId == stationId && ($scope.params.stationSelectedForRoute[i].routeType == routeType)){
				
				$scope.params.removeSiteForUpdateOperateArray.push({
						'departureTime':$scope.params.stationSelectedForRoute[i]['departureTime'],
						'routeStationId':$scope.params.stationSelectedForRoute[i]['routeStationId'],
						'routeType':$scope.params.stationSelectedForRoute[i]['routeType'],
						'stationId':$scope.params.stationSelectedForRoute[i]['stationId'],
						'status':2
				});
				$scope.params.stationListFromSiteLibrary.push($scope.params.stationSelectedForRoute[i])
				$scope.params.stationSelectedForRoute.splice(i,1)		
			}
		}
	}

	$scope.updateSiteForRouteConfirmBtn =  function(formValidate,routeType){

		if(!formValidate) return utilFactory.setDirty($scope.formValidate);
		var _stationListForAllArray = $scope.params.stationSelectedForRoute;

		if($scope.params.stationSelectedForRoute.length<2) return alertify.alert('至少两个站点可以组成一条线路',function(){})
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
			_stationListForAllArray[i]['routeType'] = _stationListForAllArray[i]['routeType'] ?_stationListForAllArray[i]['routeType']:routeType;

			delete _stationListForAllArray[i]['stationType'];
		}

		// Add another route site to current
		routeType == 'AM'?_stationListForAllArray.concat($scope.params.stationTypeIsAMList):_stationListForAllArray.concat($scope.params.stationTypeIsPMList)
		var _params = {
			'routeName': $scope.params.routeName,
			'schedulerId': utilFactory.getAccountId(),
			'routeId': $scope.params.routeId,
			'stationList': _stationListForAllArray.concat($scope.params.removeSiteForUpdateOperateArray)
		}

		schedulerHttpService.updateRoute(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功!',function(){
					$state.go('admin.scheduler.route')
				}) 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});	
	}



	// swtich routetype logic
	$scope.selectRouteType = function(selectedRouteType){
		console.log(selectedRouteType)
		if($scope.params.currentRouteType == selectedRouteType){
			$scope.params.routeType = selectedRouteType;
		}else if(selectedRouteType == 'AM' || selectedRouteType == 'PM'){
			$scope.setOneRouteOnlyFlag = true;
			$scope.params.routeType = selectedRouteType;// Set title for current route type

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
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			});
		}
	}

	$scope.addSiteItemForAMOrPMOnly = function($event,id,stationId,stationType){
		$event.stopPropagation()
		//$("#addItemForStepTwo_"+id).remove();
		for(var i = $scope.params.stationListBySearchForAMOrPM.length-1 ; i>=0;i--){
			if($scope.params.stationListBySearchForAMOrPM[i].stationId == stationId && $scope.params.stationListBySearchForAMOrPM[i].stationType == stationType){
				$scope.params.stationListBySearchForAMOrPM_1.push($scope.params.stationListBySearchForAMOrPM[i])
				$scope.params.stationListBySearchForAMOrPM.splice(i,1)
				return false
			}
		}
	}

	$scope.removeSiteItemForAMOrPMOnly = function($event,id,stationId,stationType){
		$event.stopPropagation()
		for(var i = $scope.params.stationList_2.length-1 ; i>=0;i--){
			if($scope.params.stationList_2[i].stationId == stationId && $scope.params.stationList_2[i].stationType == stationType){
				$scope.params.stationList.push($scope.params.stationList_2[i])
				$scope.params.stationList_2.splice(i,1)
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
		//$("#addItemForStepTwo_"+id).remove();
		for(var i = $scope.params.stationListBySearchForPM.length-1 ; i>=0;i--){
			if($scope.params.stationListBySearchForPM[i].stationId == stationId && $scope.params.stationListBySearchForPM[i].stationType == stationType){
				$scope.params.stationListForPM.push($scope.params.stationListBySearchForPM[i])
				$scope.params.stationListBySearchForPM.splice(i,1)
				return false
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
	$scope.updateRouteByNewRouteTypeForAMOrPMOlny = function(formValidateTwo){

		
		var _stationList = $scope.params.stationListBySearchForAMOrPM_1;
		if(!formValidateTwo) return utilFactory.setDirty($scope.formValidateTwo)

		// Logic for PM or AM only
		if($scope.params.routeType !='All'){
			// Get All selected sites and removed some unuse params.

			if($scope.params.stationListBySearchForAMOrPM_1.length<2) return alertify.alert('至少两个站点可以组成一条线路',function(){})
			
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
				_stationList[i]['routeType'] = _stationList[i]['stationType'] == 'All'?'AM':_stationList[i]['stationType'];
				
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
				_currentAllSitesArray[i]['status'] = '2'
			}

			var _deleteSiteParams = {
				'routeName': $scope.params.routeName,
				'schedulerId': utilFactory.getAccountId(),
				'routeId': $scope.params.routeId,
				'secondCompanyId': utilFactory.getSecondCompanyId(),
				'stationList': _currentAllSitesArray
			}

			schedulerHttpService.updateRoute(_deleteSiteParams).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
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
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			});
		}else{

			if($scope.params.stationListBySearchForAMOrPM_1.length<2) return alertify.alert('至少两个站点可以组成一条线路',function(){})
			// Logic For routeType All
			schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationType':'PM'}).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					
					$scope.params.stationListBySearchForPM = _resultData.value.list.length ? $scope.params.stationList = _resultData.value.list : $scope.params.stationList=[{'stationName':'暂无数据'}]; 

				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			});

			$scope.setOneRouteOnlyFlag = false;
			$scope.setRouteTypeForAll = true;
		}
	}

	// Logic for routeType All
	$scope.updateRouteForAllRouteType = function(formValidateThree){

		if(!formValidateThree) return utilFactory.setDirty($scope.formValidateThree)
		var _stationListForAllArray = [];
		if($scope.params.stationListForPM.length<2) return alertify.alert('至少两个站点可以组成一条线路',function(){})
		_stationListForAllArray = $scope.params.stationListForPM.concat($scope.params.stationListBySearchForAMOrPM_1)
		for(var i=0;i<_stationListForAllArray.length;i++){
			// filter unuse params
			delete _stationListForAllArray[i]['address'];
			delete _stationListForAllArray[i]['gps'];
			delete _stationListForAllArray[i]['stationName'];
			delete _stationListForAllArray[i]['status'];

			_stationListForAllArray[i]['departureTime'] = _stationListForAllArray[i]['departureTime']?_stationListForAllArray[i]['departureTime']:'0';
			_stationListForAllArray[i]['stationId'] =  _stationListForAllArray[i]['stationId'] == ''?_stationListForAllArray[i]['stationId'] ='0':_stationListForAllArray[i]['stationId']+'';
			_stationListForAllArray[i]['status'] = '1';
			// if routeType equals All, return AM as the default Route Type for last step.
			_stationListForAllArray[i]['routeType'] = _stationListForAllArray[i]['stationType'] == 'All'?'PM':_stationListForAllArray[i]['stationType'];

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
			_currentAllSitesArray[i]['status'] = '2'
		}

		var _deleteSiteParams = {
			'routeName': $scope.params.routeName,
			'schedulerId': utilFactory.getAccountId(),
			'routeId': $scope.params.routeId,
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'stationList': _currentAllSitesArray
		}

		schedulerHttpService.updateRoute(_deleteSiteParams).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
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
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});
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