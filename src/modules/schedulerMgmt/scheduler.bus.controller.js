
'use strict'
angular.module('schedulerBusControllerModule',[])
.controller('schedulerBusController',function(schedulerHttpService,$state,$scope){

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return schedulerHttpService.getBusList({'schedulerUUID':'111','secondCompanyId':'111'})
		},
		loadData:function(){
			console.log('load data')
			
		},
		dataSet:function(result){
			// var _result = result.data.value;
			// for(var i=0;i<_result.length;i++){
			// 	_result[i]['passengerProfileOutDTO']['status'] =_result[i]['passengerProfileOutDTO']['status'] == 0?'未激活':'已激活'
			// }
		}
		//extendParams:function(){}
	}

	$scope.selectAll = function(){
		//$scope.tableConfig.checkbox.selectAll = true;
		var _selectAllStatus  = !$scope.selectAllStatus;
		console.log(_selectAllStatus+':_selectAllStatus')
		$scope.$broadcast('checkboxSelectAll',{'status':_selectAllStatus})

	}

	$scope.addBus = function(){
		$state.go('scheduler.addBus',{
			'schedulerUUID':'18','secondCompanyId':'18'})
	};

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:true,
			radio:true,
			operate:[{
				name:'编辑',
				ngIf:function(){},
				fun:function(item){
					var _params = {
						'vehicleID':item.value.vehicleID,
						'schedulerUUID':item.value.schedulerUUID
					}

					console.log(1,_params)
					$state.go('scheduler.busDetail',{
						'vehicleID':_params.phoneNumber,
						'schedulerUUID':_params.schedulerUUID
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
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'baseProfileDTO',
					'selfKey':{'key':'vehicleLicense','value':'牌照信息'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'vehicleModel','value':'车辆类型'},
					'checkFlag':true
				},
				{
					'parentKey':'driverProfileDTO',
					'selfKey':{'key':'availableSeats','value':'座位数'},
					'checkFlag':true
				},
				{
					'parentKey':'driverProfileDTO',
					'selfKey':{'key':'shuttleCompanyId','value':'巴士公司'},
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