angular.module('passengerReportDataControllerModule',[]).controller('passengerReportDataController',function(passengerHttpService,utilFactory,$scope){
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
		'active':{'key':'name','value':'乘车人员'},
		'list':[{'key':'phoneNumber','value':'记录编号'}]
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


	$scope.importData = function(){
		alertify.alert('正在建设中...')
	}


	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[]
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
					'selfKey':{'key':'name','value':'记录编号'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'phoneNumber','value':'乘车人员'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautStationName','value':'乘坐车辆'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautRouteName','value':'线路名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'status','value':'起点站'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'status','value':'终点站'},
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