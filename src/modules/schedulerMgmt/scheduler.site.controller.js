
'use strict'
angular.module('schedulerSiteControllerModule',[])
.controller('schedulerSiteController',function(schedulerHttpService,utilFactory,$state,$scope){


	$scope.addSite = function(){
		$state.go('scheduler.addSite',{'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
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
			return schedulerHttpService.getSiteList({'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'pageNumber':1,'pageSize':20})
		},
		loadData:function(){
			//console.log('load data')
			
		},
		dataSet:function(result){
			// var _result = result.value;
			// for(var i=0;i<_result.length;i++){
			// 	_result[i]['stationType'] =_result[i]['stationType'] == 'PM'?'上行':'下行'
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
				name:'编辑',
				ngIf:function(){},
				fun:function(item){
					var _params = {
						  "address": item.address,
						  "gps": item.gps,
						  "stationName": item.stationName,
						  "schedulerId": utilFactory.getAccountId(),
						  "secondCompanyId": utilFactory.getSecondCompanyId(),
						  "stationId": item.stationId,
						  "stationType": item.stationType
					}

					$state.go('scheduler.updateSite',_params)
				}
			},
			{
				name:'删除',
				ngIf:function(){},
				fun:function(item){
					var _params = {
						'stationId':item.stationId,
						'schedulerId':utilFactory.getAccountId()
					}

					alertify.confirm('请确认时候要删除该站点',function(){
						schedulerHttpService.deleteSiteByID(_params).then(function(result){
							var responseData = result.data;
							if(!responseData.error){
									alertify.alert('删除成功！',function(){
										$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
									});
							}else{
								switch(responseData.error.statusCode){
									case '500':alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
									break;
									case '400':alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
									break;
								}
							}
			
						},function(){

						});			
					},function(errorResult){
						alertify.alert(errorResult.error.message)
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
		defaultValue:'——',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'stationName','value':'站点名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'stationType','value':'站点类型'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'address','value':'地址'},
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