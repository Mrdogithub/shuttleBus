angular.module('schedulerRouteControllerModule',[])
.controller('schedulerRouteController',function(loadData,utilFactory,schedulerHttpService,$state,$scope){

	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	console.log(1,loadData)
	if(!loadData.data.error &&(!loadData.data.value || !loadData.data.value.list.length)){
		$scope.dataIsEmpty = true;
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
	}

	$scope.addRoute = function(){
		$state.go('admin.scheduler.addRoute',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
	}
	$scope.downLoadTemplte = function(){ alertify.alert('正在建设中...')}
	$scope.importSite = function(){ alertify.alert('正在建设中...')}

	$scope.searchFn = function(searchText){
		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1','routeName':$scope.searchText});
	}

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{
			'pageNumber':'1',
			'pageSize':'20',
			'schedulerId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getRoute(params)
		},
		loadData:function(){},
		dataSet:function(result){}
		//extendParams:function(){}
	}

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[
			{
				name:'查看详情',
				ngIf:function(){
					return true
				},
				fun:function(item){
					$state.go('admin.scheduler.updateRoute',{'routeId':item.routeId,'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){
					console.log(1,item)
					alertify.confirm('该线路可能有排班任务，如继续删除，排班任务也将被清空！',function(){
						schedulerHttpService.deleteRouteById({'routeId':item.routeId}).then(function(result){
							var _resultData = result.data;

							if(!_resultData.error) {
								$state.go('admin.scheduler.route',{},{reload:true})
							}else{
								utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.statusText)
							}
						})
					},function(){}).set({labels:{cancel: '取消',ok:'坚持删除'}, padding: true});
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
	    	]
	    }
		// changeEnable:function(item){}
	}

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})