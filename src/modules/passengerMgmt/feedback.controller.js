'use strict'
angular.module('feedbackControllerModule',[]).controller('feedbackController',function($scope,passengerHttpService,utilFactory){
	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return passengerHttpService.getPassengerFeedback({'hrId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
		},
		loadData:function(){
			console.log('load data')
			
		},
		dataSet:function(result){
			// if(result.value != null){
			// 	var _result = result.value;
			// 	for(var i=0;i<_result.length;i++){
			// 		_result[i]['status'] =_result[i]['status'] == 0?'未激活':'已激活'
			// 	}
			// }
		}
		//extendParams:function(){}
	}

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
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'反馈编号'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'phoneNumber','value':'员工姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautStationName','value':'乘车历史'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautRouteName','value':'星级'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'status','value':'反馈内容'},
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