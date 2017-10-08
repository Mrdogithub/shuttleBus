angular.module('passengerReportPassengersControllerModule',[]).controller('passengerReportPassengersController',function(passengerHttpService,utilFactory,$scope){

	$scope.params = {
		'routeList':[{
			'routeName':'线路1'
		},
		{
			'routeName':'线路2'
		},
		{
			'routeName':'线路3'
		}]
	}
	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			//return passengerHttpService.passenger({'hrId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
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
					'selfKey':{'key':'name','value':'员工姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'phoneNumber','value':'联系方式'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautStationName','value':'部门'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautRouteName','value':'上车站点'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'status','value':'乘车次数'},
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