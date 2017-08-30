'use strict'
angular.module('passengerDetailControllerModule',[])
.controller('passengerDetailController',function(passengerHttpService,$stateParams,$state,$scope){
	if($stateParams.passengerUuid && $stateParams.hrUuid){
		$scope.passengerUuid = $stateParams.passengerUuid;
		$scope.params = {
			'status':$stateParams.status,
			'passengerUuid':$stateParams.passengerUuid,
			'roleType':$stateParams.roleType,
			'hrUuid':$stateParams.hrUuid,
			'secondCompanyId':$stateParams.secondCompanyId,
			'accountId':$stateParams.accountId,
			'routeName':$stateParams.routeName,
			'stationName':$stateParams.stationName,
			'phoneNumber':$stateParams.phoneNumber,
			'employeeId':$stateParams.employeeId,
			'passengerName':$stateParams.passengerName

		};
		$scope.active = false;
		$scope.submitOnProgress = false;
		$scope.breadcrumbParams = {
			'hrUuid':$stateParams.hrUuid,
			'secondCompanyId':$stateParams.secondCompanyId	
		}
		$scope.breadcrumbText={
			'lv1':'乘客列表',
			'lv2':'乘客详情'
		}
	}else{
		$state.go('passenger.list',{'hrUUID':'666','secondCompanyID':'666'})
	}

	$scope.editPassengerProfile = function(flag){
		$scope.active = !flag;
	};

	$scope.submitPassengerProfile = function(){
		$scope.submitOnProgress = true;
		var _params = {
			'phoneNumber':$scope.params.phoneNumber,
			'roleType':$scope.params.roleType,
			'accountId':$scope.params.accountId,
			'name':$scope.params.passengerName,
			'employeeId':$scope.params.employeeId,
			'hrUuid':$scope.params.hrUuid,
			'passengerUuid':$scope.params.passengerUuid,
			'secondCompanyId':$scope.params.secondCompanyId
		}
		passengerHttpService.updatePassengerByID(_params).then(function(result){
			$scope.submitOnProgress = false;
		},function(){})
	};

	$scope.deletePassenger = function(){
		var _params = {
			'roleType':$scope.params.roleType,
			'hrUuid':$scope.params.hrUuid,
			'passengerUuid':$scope.params.passengerUuid
		}
		passengerHttpService.deletePassengerByID(_params).then(function(result){
			console.log(1,result)
		},function(){})
	};


	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return passengerHttpService.getPassengerTrip({'passengerId':'1'})
		},
		loadData:function(){
			console.log('load data')
			
		},
		dataSet:function(result){
			var _result = result.data.value;
			for(var i=0;i<_result.length;i++){
				_result[i]['passengerProfileOutDTO']['status'] =_result[i]['passengerProfileOutDTO']['status'] == 0?'未激活':'已激活'
			}
		}
		//extendParams:function(){}
	}


	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operateIfFlag:false,
			operate:[{
				name:'编辑',
				ngIf:function(){},
				fun:function(item){
					var _params = {
						'status':item.passengerProfileOutDTO.status,
						'passengerUuid':item.passengerProfileOutDTO.passengerUuid,
						'roleType':item.passengerProfileOutDTO.roleType,
						'hrUuid':item.passengerProfileOutDTO.hrUuid,
						'secondCompanyId':item.passengerProfileOutDTO.secondCompanyId,
						'accountId':item.passengerProfileOutDTO.accountId,
						'routeName':item.passengerProfileOutDTO.routeName,
						'stationName':item.passengerProfileOutDTO.stationName,
						'phoneNumber':item.accountDTO.phoneNumber,
						'employeeId':item.passengerProfileOutDTO.employeeId,
						'passengerName':item.baseProfileInDTO.name,
					}

					$state.go('passenger.detail',{
						'status':_params.status,
						'passengerUuid':_params.passengerUuid,
						'roleType':_params.roleType,
						'hrUuid':_params.hrUuid,
						'secondCompanyId':_params.secondCompanyId,
						'accountId':_params.accountId,
						'routeName':_params.routeName,
						'stationName':_params.stationName,
						'phoneNumber':_params.phoneNumber,
						'employeeId':_params.employeeId,
						'passengerName':_params.passengerName
					});
				}
			}]
		},
		// height:290,
		// head:[{name:'文件名',key:'filename'}],
		// className:function(flag){},
		// clickFun:function(){},
		// rowClickFun:function(item){},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'---',
		// radioSelect:function(){},
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'passengerProfileOutDTO',
					'selfKey':{'key':'passengerUuid','value':'上车时间'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'phoneNumber','value':'上车站点'},
					'checkFlag':true
				},
				{
					'parentKey':'passengerProfileOutDTO',
					'selfKey':{'key':'stationName','value':'乘车线路'},
					'checkFlag':true
				},
				{
					'parentKey':'passengerProfileOutDTO',
					'selfKey':{'key':'routeName','value':'乘坐车辆'},
					'checkFlag':true
				}
	    	]
	    }
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});





})