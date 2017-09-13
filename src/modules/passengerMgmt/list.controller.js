'use strict'
angular.module('listControllerModule',[]).controller('listController',function(passengerHttpService,USER_ACCOUNT,$state,$scope){
		//table data config
	var _configAccount = {
		'accountId':USER_ACCOUNT.accountId
	}
	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return passengerHttpService.passenger(_configAccount)
		},
		loadData:function(){
			console.log('load data')
			
		},
		dataSet:function(result){
			if(result.value != null){
				var _result = result.value;
				for(var i=0;i<_result.length;i++){
					_result[i]['passengerProfileOutDTO']['status'] =_result[i]['passengerProfileOutDTO']['status'] == 0?'未激活':'已激活'
				}
			}
		}
		//extendParams:function(){}
	}

	$scope.queryByKeyObj = {
		'active':{'key':'name','value':'员工姓名'},
		'list':[{'key':'phoneNumber','value':'手机号'},{'key':'name','value':'员工姓名'}]
	}

	$scope.selectKey = function(activeObj){
		$scope.queryByKeyObj.active.key = activeObj.key;
		$scope.queryByKeyObj.active.value = activeObj.value;
		$('.dropdown-menu').css('display','none')
	}

	$scope.showQueryKeyList = function(){
		$('.dropdown-menu').css('display','block')
	}
	$scope.selectAll = function(){
		//$scope.tableConfig.checkbox.selectAll = true;
		alertify.alert('正在建设中....')
		var _selectAllStatus  = !$scope.selectAllStatus;
		console.log(_selectAllStatus+':_selectAllStatus')
		$scope.$broadcast('checkboxSelectAll',{'status':_selectAllStatus})

	}

	$scope.deletePassenger = function(){
		alertify.alert('正在建设中....')
	};

	$scope.importPassenger = function(){
		alertify.alert('正在建设中...')
	}
	$scope.addPassenger = function(){
		$state.go('passenger.add',{'hrUuid':_configAccount.hrUUID,'secondCompanyId':_configAccount.secondCompanyID})
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
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'passengerProfileOutDTO',
					'selfKey':{'key':'passengerUuid','value':'员工姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				},
				{
					'parentKey':'passengerProfileOutDTO',
					'selfKey':{'key':'stationName','value':'默认站点'},
					'checkFlag':true
				},
				{
					'parentKey':'passengerProfileOutDTO',
					'selfKey':{'key':'routeName','value':'默认线路'},
					'checkFlag':true
				},
				{
					'parentKey':'passengerProfileOutDTO',
					'selfKey':{'key':'status','value':'激活状态'},
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