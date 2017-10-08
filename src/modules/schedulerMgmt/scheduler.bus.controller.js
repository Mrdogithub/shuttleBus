
'use strict'
angular.module('schedulerBusControllerModule',[])
.controller('schedulerBusController',function(utilFactory,schedulerHttpService,$state,$scope){



	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return schedulerHttpService.getBusList({'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
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
		$scope.$broadcast('checkboxSelectAll',{'status':_selectAllStatus})
	}

	$scope.addBus = function(){
		$state.go('scheduler.addBus',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
	};

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'编辑',
				ngIf:function(){},
				fun:function(item){
					var paramsObj = item;
					$state.go('scheduler.busDetail',{
						'annualInspectionExpiration': item.annualInspectionExpiration,
						'availableSeats': item.availableSeats,
						'engineNumber': item.engineNumber,
						'insuranceExpiration': item.insuranceExpiration,
						'licensePlate': item.licensePlate,
						'schedulerId': utilFactory.getAccountId(),
						'shuttleCompanyId': item.shuttleCompanyId,
						'shuttleCompanyName':item.shuttleCompanyName  || '——',
						'secondCompanyId':utilFactory.getSecondCompanyId(),
						'vehicleId': item.vehicleId,
						'vehicleLicense': item.vehicleLicense,
						'vehicleModel': item.vehicleModel,
						'vin': item.vin
					});
				}
			},
			{
				name:'删除',
				ngIf:function(){},
				fun:function(item){

					alertify.confirm('确认删除车牌照'+item.licensePlate+'的车辆？',function(){
						schedulerHttpService.deleteBusByID({'schedulerId':utilFactory.getAccountId(),'vehicleId':item.vehicleId}).then(function(result){
							var _resultData = result.data;

							if(!_resultData.error) {
								$state.go('scheduler.bus',{},{reload:true})
							}else{
								alertify.alert(_resultData.error.message)
							}
						})
					},function(){})

					// $state.go('scheduler.busDetail',{
					// 	'vehicleId':paramsObj.vehicleId,
					// 	'schedulerId':paramsObj.schedulerId,
					// 	'annualInspectionExpiration':paramsObj.annualInspectionExpiration,
					// 	'availableSeats': paramsObj.availableSeats,
					// 	'engineNumber': paramsObj.engineNumber,
					// 	'insuranceExpiration': paramsObj.insuranceExpiration,
					// 	'licensePlate': paramsObj.licensePlate,
					// 	'schedulerId': paramsObj.schedulerId,
					// 	'secondCompanyId': paramsObj.secondCompanyId,
					// 	'shuttleCompanyId': paramsObj.shuttleCompanyId,
					// 	'vehicleLicense': paramsObj.vehicleLicense,
					// 	'vehicleModel': paramsObj.vehicleModel,
					// 	'vin': paramsObj.vin
					// });
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
		defaultValue:'——',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'baseProfileDTO',
					'selfKey':{'key':'licensePlate','value':'车辆牌照'},
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
					'selfKey':{'key':'shuttleCompanyName','value':'运营单位'},
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