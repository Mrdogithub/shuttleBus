
'use strict'
angular.module('schedulerDriverControllerModule',[])
.controller('schedulerDriverController',function(schedulerHttpService,utilFactory,$state,$scope){


	$scope.selectAllStatus = false;

	// search inpuut 

	$scope.queryByKeyObj = {
		'active':{'key':'name','value':'司机姓名'},
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

	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return schedulerHttpService.getDriverList({'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
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

	// add new driver
	$scope.addDriver = function(){
		$state.go('scheduler.addDriver',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
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
					var _params = {
						'schedulerId': utilFactory.getAccountId(),
						'identityCard': item.identityCard,
						'licenseExpirationDate': item.licenseExpirationDate,
						'licenseId': item.name,
						'name': item.name,
						'driverId': item.partyId,
						'phoneNumber': item.phoneNumber,
						'secondCompanyId': item.secondCompanyId,
						'shuttleCompanyName':item.shuttleCompanyName,
						'shuttleCompanyId': item.shuttleCompanyId,
						'secondCompanyName': item.secondCompanyName
					}

					$state.go('scheduler.driverDetail',_params);
				}
			},
			{
				name:'删除',
				ngIf:function(){},
				fun:function(item){
					var _params = {
						'schedulerId': utilFactory.getAccountId(),
						'identityCard': item.identityCard,
						'licenseExpirationDate': item.licenseExpirationDate,
						'licenseId': item.name,
						'name': item.name,
						'driverId': item.partyId,
						'phoneNumber': item.phoneNumber,
						'secondCompanyId': item.secondCompanyId,
						'secondCompanyName': item.secondCompanyName,
					}

					alertify.confirm('确认删除'+_params.name+"?",function(){
						schedulerHttpService.deleteDriverByID(_params).then(function(result){
							var _resultData = result.data;

							if(!_resultData.error){
								$state.go('scheduler.driver',{},{reload:true})
							}else {
								alertify.alert(_resultData.error.message)
							}
							
						});
					},function(){})
				}
			},
			]
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
					'selfKey':{'key':'name','value':'司机姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
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