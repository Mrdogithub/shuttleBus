'use strict'
angular.module('listControllerModule',[]).controller('listController',function(passengerHttpService,utilFactory,$state,$scope){

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return passengerHttpService.passenger({'hrId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
		},
		loadData:function(){
			console.log('load data')
			
		},
		dataSet:function(result){
			if(result.value != null){
				var _result = result.value;
				for(var i=0;i<_result.length;i++){
					_result[i]['status'] =_result[i]['status'] == 0?'未激活':'已激活'
				}
			}
		}
		//extendParams:function(){}
	}

	$scope.queryByKeyObj = {
		'active':{'key':'name','value':'员工姓名'},
		'list':[{'key':'phoneNumber','value':'手机号'}]
	}

	$scope.selectKey = function(activeObj){
		$scope.queryByKeyObj.list.length = 0;
		$scope.queryByKeyObj.list.push( {'key':$scope.queryByKeyObj.active.key,'value':$scope.queryByKeyObj.active.value})
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
		$state.go('passenger.add',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
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
					var _params = {
						'secondCompanyId': item.secondCompanyId,
						'employeeId': item.employeeId,
						'name': item.name,
						'phoneNumber': item.phoneNumber,
						'schedulerId':  item.accountId,
						'status': item.status,
						'passengerId': item.partyId
					}
					console.log('------- params -----------')
					console.log(1,_params)
					$state.go('passenger.detail',_params);
				}
			},
			{
				name:'删除',
				ngIf:function(){},
				fun:function(item){
					alertify.alert('正在建设中...')
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
					'parentKey':'',
					'selfKey':{'key':'name','value':'员工姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautStationName','value':'默认站点'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautRouteName','value':'默认线路'},
					'checkFlag':true
				},
				{
					'parentKey':'',
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