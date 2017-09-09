
'use strict'
angular.module('schedulerRouteControllerModule',[])
.controller('schedulerRouteController',function(schedulerHttpService,$state,$scope){

	$scope.addRoute = function(){
		$state.go('scheduler.addRoute',{'schedulerUUID':'666','secondCompanyID':'666'})
	}

	$scope.downLoadTemplte = function(){
		alertify.alert('正在建设中...')
	}

	$scope.importSite = function(){
		alertify.alert('正在建设中...')
	}





	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return schedulerHttpService.getSiteList({'schedulerUUID':'5555','secondCompanyID':'5555'})
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

	$scope.addDriver = function(){
		$state.go('scheduler.addDriver',{
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
						'phoneNumber':item.accountDTO.phoneNumber,
						'roleType':item.accountDTO.roleType,
						'name':item.baseProfileDTO.name,
						'accountId':item.baseProfileDTO.accountId,
						'driverUUID':item.driverProfileDTO.driverUUID,
						'schedulerUUID':item.driverProfileDTO.schedulerUUID,
						'secondCompanyId':item.driverProfileDTO.secondCompanyId,
						'shuttleCompanyId':item.driverProfileDTO.shuttleCompanyId,
						'licenseID':item.driverProfileDTO.licenseID,
						'licenseExpirationDate':item.driverProfileDTO.licenseExpirationDate,
						'identityCard':item.driverProfileDTO.identityCard,
					}

					console.log(1,_params)
					$state.go('scheduler.driverDetail',{
						'phoneNumber':_params.phoneNumber,
						'roleType':_params.roleType,
						'name':_params.name,
						'accountId':_params.accountId,
						'driverUUID':_params.driverUUID,
						'schedulerUUID':_params.schedulerUUID,
						'secondCompanyId':_params.secondCompanyId,
						'shuttleCompanyId':_params.shuttleCompanyId,
						'licenseID':_params.licenseID,
						'licenseExpirationDate':_params.licenseExpirationDate,
						'identityCard':_params.identityCard
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
					'selfKey':{'key':'name','value':'线路名称'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'stationType','value':'线路类型'},
					'checkFlag':true
				},
				{
					'parentKey':'driverProfileDTO',
					'selfKey':{'key':'address','value':'起点站'},
					'checkFlag':true
				},
				{
					'parentKey':'driverProfileDTO',
					'selfKey':{'key':'address','value':'终点站'},
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