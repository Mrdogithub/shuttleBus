
'use strict'
angular.module('schedulerRouteControllerModule',[])
.controller('schedulerRouteController',function(utilFactory,schedulerHttpService,$state,$scope){

	//var _accountId = localStorageFactory.getObject('account',null).accountId;

	$scope.addRoute = function(){
		$state.go('scheduler.addRoute',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
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
			return schedulerHttpService.getRoute({'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'pageNumber':'1','pageSize':'20'})
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
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看详情',
				ngIf:function(){},
				fun:function(item){

					$state.go('scheduler.routeDetail',{'routeId':item.routeId,'schedulerId':utilFactory.getAccountId()})
					

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
					'parentKey':'',
					'selfKey':{'key':'routeName','value':'线路名称'},
					'checkFlag':true
				}
				// ,
				// {
				// 	'parentKey':'accountDTO',
				// 	'selfKey':{'key':'stationType','value':'线路类型'},
				// 	'checkFlag':true
				// },
				// {
				// 	'parentKey':'driverProfileDTO',
				// 	'selfKey':{'key':'address','value':'起点站'},
				// 	'checkFlag':true
				// },
				// {
				// 	'parentKey':'driverProfileDTO',
				// 	'selfKey':{'key':'address','value':'终点站'},
				// 	'checkFlag':true
				// }
	    	]
	    }
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});


})