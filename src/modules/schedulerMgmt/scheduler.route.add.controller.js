angular.module('schedulerAddRouteControllerModule',[])
.controller('schedulerAddRouteController',function(utilFactory,schedulerHttpService,$timeout,$stateParams,$state,$scope){

	var _accountId = $stateParams.schedulerId || utilFactory.getAccountId();
	var _secondCompanyId = $stateParams.secondCompanyId || utilFactory.getSecondCompanyId();
	$scope.stepOne = true;
	$scope.stepTwo = false;
	$scope.stepThree = false;
	if(_accountId &&_secondCompanyId){
		$scope.params = {
		  	'routeName':'',
		  	'stationName':'',
		  	'schedulerId': _accountId,
		  	'secondCompanyId': _secondCompanyId,
		  	'routeType':'',
		  	'routeTypeError':false,
		  	'stationList':[],
		  	'stationList_2':[],
		  	'stationList_3':[]
		}

		$scope.active = true;
		$scope.submitOnProgress = false;

		$scope.routeTypeList = [
			{'name':'上行/下行','routeType':'All','status':false},
			{'name':'仅上行','routeType':'AM','status':false},
			{'name':'仅下行','routeType':'PM','status':false}
		];
		//$scope.params.routeType = 'All';


		$scope.breadcrumbText={'lv1':'线路管理','lv2':'新增线路'}
		// $scope.sortableOptions = {
		// 	placeholder: "dragItem",
		// 	connectWith: ".dragWrapper"
		// };

		// $scope.sortableOptions_2 = {
		// 	placeholder: "dragItem_2",
		// 	connectWith: ".dragWrapper_2"
		// };

	}else{
		$state.go('admin.scheduler.route')
	}

	$scope.selectRouteType = function (routeType) {
		$scope.params.routeTypeError = false;
		$scope.params.routeTypeStautsFlag = true;
		$scope.params.routeType = routeType;
	}

	// Search result by stationName 
	$scope.searchByStationNameForStepTwo = function(){
		var _routeType = $scope.params.routeType =='All'?'AM':$scope.params.routeType;
		schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationName':$scope.params.stationName,'stationType':_routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				$scope.params.stationList = _resultData.value.list; 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode);
			}
		});
	}

	$scope.searchByStationNameForStepThree = function(){
		var _routeType = 'PM';
		schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationName':$scope.params.stationName,'stationType':_routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				$scope.params.stationListForPM = _resultData.value.list; 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode);
			}
		});	
	}

	// submit step one 
	$scope.stepOneSubmit = function(formValidateIsInvalid){
		
		// Submit empty form will provide error messages
		if($scope.params.routeType == ''){
			$scope.params.routeTypeError = true;
		}
		if(formValidateIsInvalid || $scope.params.routeType == ''){

			return 	utilFactory.setDirty($scope.formValidateOne);
		}
		var _routeType = $scope.params.routeType =='All'?'AM':$scope.params.routeType;
		// Get site list for user create site under current route
		schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationType':_routeType}).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				
				$scope.params.stationList = _resultData.value.list.length ? $scope.params.stationList = _resultData.value.list : $scope.params.stationList=[{'stationName':'暂无数据'}]; 

			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});
		

		$scope.stepOne = false;
		$scope.stepTwo = true;
	}

	$scope.pre = function(){
		$scope.stepOne = true;
		$scope.stepTwo = false;
	}

	$scope.stepThreePre = function(){
		$scope.params.stationListForPM = null;
		$scope.searchByStationNameForStepTwo()
		$scope.stepThree = false;
		$scope.stepTwo = true;
		
	}
	$scope.close = function(){
		$state.go('admin.scheduler.route')
	}

	$scope.stepTwoSubmit = function(formValidateTwo,obj){
	
		var _stationListArray = angular.copy($scope.params.stationList_2);
		console.log('****** formValidateTwo *******')
		console.log(1,$scope.formValidateTwo)
		if(!formValidateTwo){
			
			utilFactory.setDirty($scope.formValidateTwo)
			return
		}
		
		// Logic for PM or AM only
		if($scope.params.routeType !='All'){
			// Get All selected sites and removed some unuse params.

			if(_stationListArray.length<2) return alertify.alert('请添加至少两个站点',function(){})
			
			for(var i=0;i<_stationListArray.length;i++){
				// filter unuse params
				delete _stationListArray[i]['address'];
				delete _stationListArray[i]['gps'];
				delete _stationListArray[i]['stationName'];
				delete _stationListArray[i]['status'];

				_stationListArray[i]['departureTime'] = _stationListArray[i]['departureTime']?_stationListArray[i]['departureTime']:'0';
				_stationListArray[i]['stationId'] =  _stationListArray[i]['stationId'] == ''?_stationListArray[i]['stationId'] ='0':_stationListArray[i]['stationId']+'';
				
				// if routeType equals All, return AM as the default Route Type for last step.
				_stationListArray[i]['routeType'] = _stationListArray[i]['stationType'] == 'All'?'AM':_stationListArray[i]['stationType'];
				
				delete _stationListArray[i]['stationType'];
			}
			var _params = {
				'routeName': $scope.params.routeName,
				'schedulerId': utilFactory.getAccountId(),
				'secondCompanyId': utilFactory.getSecondCompanyId(),
				'stationList': _stationListArray
			}
			console.log(1,_stationListArray);
			schedulerHttpService.addRoute(_params).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){			
					alertify.alert('新增成功！',function(){
						$state.go('admin.scheduler.route')
					}) 
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			});
		}else{

			if(_stationListArray.length<2) return alertify.alert('请添加至少两个站点',function(){})
			// Logic For routeType All
			schedulerHttpService.getSiteList({'pageSize':1000,'pageNumber':1,'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'stationType':'PM'}).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					
					$scope.params.stationListForPM = _resultData.value.list.length ? $scope.params.stationList = _resultData.value.list : $scope.params.stationList=[{'stationName':'暂无数据'}]; 

				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
			});

			$scope.stepTwo = false;
			$scope.stepThree = true;
		}
	}

	// Logic for routeType All
	$scope.stepThreeSubmit = function(formValidateThree){

		if(!formValidateThree) return utilFactory.setDirty($scope.formValidateThree)
		var _stationListForAllArray = [];
		if($scope.params.stationList_3.length<2) return alertify.alert('请添加至少两个站点',function(){})

		// var _stationListArray = angular.copy($scope.params.stationList_2);
		var _stationListForAllArray = angular.copy($scope.params.stationList_2.concat($scope.params.stationList_3));
		for(var i=0;i<_stationListForAllArray.length;i++){
			// filter unuse params
			delete _stationListForAllArray[i]['address'];
			delete _stationListForAllArray[i]['gps'];
			delete _stationListForAllArray[i]['stationName'];
			delete _stationListForAllArray[i]['status'];

			_stationListForAllArray[i]['departureTime'] = _stationListForAllArray[i]['departureTime']?_stationListForAllArray[i]['departureTime']:'0';
			_stationListForAllArray[i]['stationId'] =  _stationListForAllArray[i]['stationId'] == ''?_stationListForAllArray[i]['stationId'] ='0':_stationListForAllArray[i]['stationId']+'';

			// if routeType equals All, return AM as the default Route Type for last step.
			_stationListForAllArray[i]['routeType'] = _stationListForAllArray[i]['stationType'] == 'All'?'PM':_stationListForAllArray[i]['stationType'];

			delete _stationListForAllArray[i]['stationType'];
		}
		var _params = {
			'routeName': $scope.params.routeName,
			'schedulerId': utilFactory.getAccountId(),
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'stationList': _stationListForAllArray
		}

		schedulerHttpService.addRoute(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('新增成功！',function(){
					$state.go('admin.scheduler.route')
				}) 
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
		});
	}

	// Remove Item from selected area
	$scope.removeSiteItemForStepTwo = function($event,id,stationId,stationType){
		$event.stopPropagation()
		for(var i = $scope.params.stationList_2.length-1 ; i>=0;i--){
			if($scope.params.stationList_2[i].stationId == stationId && $scope.params.stationList_2[i].stationType == stationType){
				$scope.params.stationList.push($scope.params.stationList_2[i])
				$scope.params.stationList_2.splice(i,1)
			}
		}

	}


	// $(document).on('click','.removeSiteForStepTwoBtn',function(){
	// 	var _index = $(this).data('index');
	// 	var _type = $(this).data('type');
	// 	var _id = $(this).data('id')
	// 	$("#item_"+_index).remove();

	// 	for(var i = $scope.params.stationList_2.length-1 ; i>=0;i--){
	// 		if($scope.params.stationList_2[i].stationId == _id && $scope.params.stationList_2[i].stationType == _type){
	// 			$scope.params.stationList.push($scope.params.stationList_2[i])
	// 			$scope.params.stationList_2.splice(i,1)
	// 		}
	// 	}
	// });

	// $(document).on('click','.removeSiteForStepThreeBtn',function(){
	// 	var _index = $(this).data('index');
	// 	var _type = $(this).data('type');
	// 	var _id = $(this).data('id')
	// 	$("#item_"+_index).remove();

	// 	for(var i = $scope.params.stationList_3.length-1 ; i>=0;i--){
	// 		if($scope.params.stationList_3[i].stationId == _id && $scope.params.stationList_3[i].stationType == _type){
	// 			$scope.params.stationListForPM.push($scope.params.stationList_3[i])
	// 			$scope.params.stationList_3.splice(i,1);

	// 		}
	// 	}
	// });

	$(document).on('mouseover','.moveroverItem',function(){
		$('.moveroverItem').css('border','none')
		$(this).css('border','1px solid #0086F9')
	})

	// $(document).ready(function(){
	// 	$('.loadMore').unbind('scroll').bind('scroll',function(){
	// 		var sum = this.scrollHeight;  
	// 		if (sum <= $(this).scrollTop() + $(this).height()) {  
	// 			$(".loadMore").append($(".moveroverItem").clone());  
	// 		}  
	// 	})
	// })
	// $('.addSiteItemForStepTwo').on('click',function(){
	// 	console.log('xxxx---')
	// 	var _index = $(this).data('index');
	// 	var _type = $(this).data('type');
	// 	var _id = $(this).data('id')
	// 	$("#addItemForStepTwo_"+_index).remove();


	// 	for(var i = $scope.params.stationList.length-1 ; i>=0;i--){

	// 		if($scope.params.stationList[i].stationId == _id && $scope.params.stationList[i].stationType == _type){
	// 			$scope.params.stationList_2.push($scope.params.stationList[i])
	// 			$scope.params.stationList.splice(i,1)
	// 		}
	// 	}
	// });

	$scope.addSiteItemForStepTwo = function($event,id,stationId,routeType){
		$event.stopPropagation()
		var _stationList_2 = angular.copy($scope.params.stationList_2);
		for(var i = $scope.params.stationList.length-1 ; i>=0;i--){
			if($scope.params.stationList[i].stationId == stationId && $scope.params.stationList[i]['stationType'] == routeType){
				if(!_stationList_2.length){
					$scope.params.stationList_2.push($scope.params.stationList[i])
					$scope.params.stationList.splice(i,1)
					return
				}

				for(var j=0;j<_stationList_2.length;j++){
					if(_stationList_2.length){
						if(stationId == _stationList_2[j].stationId){
							alertify.alert('不能添加重复站点',function() {})
							return							
						}else if(j == _stationList_2.length-1) {
							$scope.params.stationList_2.push($scope.params.stationList[i])
							$scope.params.stationList.splice(i,1)
							return
						}

					}
				}
				
			}
		}

		// //$("#addItemForStepTwo_"+id).remove();
		// for(var i = $scope.params.stationList.length-1 ; i>=0;i--){
		// 	if($scope.params.stationList[i].stationId == stationId && $scope.params.stationList[i].stationType == stationType){
		// 		$scope.params.stationList_2.push($scope.params.stationList[i])
		// 		$scope.params.stationList.splice(i,1)
		// 		return false
		// 	}
		// }
	}

	$scope.removeSiteItemForStepThree = function($event,id,stationId,stationType){
		$event.stopPropagation()
		for(var i = $scope.params.stationList_3.length-1 ; i>=0;i--){
			if($scope.params.stationList_3[i].stationId == stationId && $scope.params.stationList_3[i].stationType == stationType){
				$scope.params.stationListForPM.push($scope.params.stationList_3[i])
				$scope.params.stationList_3.splice(i,1)		
			}
		}
	}




	$scope.addSiteItemForStepThree = function($event,id,stationId,routeType){

		$event.stopPropagation()
		var _stationList_3 = angular.copy($scope.params.stationList_3);
		for(var i = $scope.params.stationListForPM.length-1 ; i>=0;i--){
			if($scope.params.stationListForPM[i].stationId == stationId && $scope.params.stationListForPM[i]['stationType'] == routeType){
				if(!_stationList_3.length){
					$scope.params.stationList_3.push($scope.params.stationListForPM[i])
					$scope.params.stationListForPM.splice(i,1)
					return
				}

				for(var j=0;j<_stationList_3.length;j++){
					if(_stationList_3.length){
						if(stationId == _stationList_3[j].stationId){
							alertify.alert('不能添加重复站点',function() {})
							return							
						}else if(j == _stationList_3.length-1) {
							$scope.params.stationList_3.push($scope.params.stationListForPM[i])
							$scope.params.stationListForPM.splice(i,1)
							return
						}

					}
				}
				
			}
		}

		// $event.stopPropagation()
		// // console.log('addSiteItemForStepThree')
		// // $("#addItemForStepThree_"+id).remove();
		// for(var i = $scope.params.stationListForPM.length-1 ; i>=0;i--){
		// 	if($scope.params.stationListForPM[i].stationId == stationId && $scope.params.stationListForPM[i].stationType == stationType){
		// 		$scope.params.stationList_3.push($scope.params.stationListForPM[i])
		// 		$scope.params.stationListForPM.splice(i,1)
		// 	}
		// }
	}
})