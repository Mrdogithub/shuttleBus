'use strict'
angular.module('companyListControllerModule',[]).controller('companyListController',function(companyHttpService,utilFactory,$state,$scope){

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return companyHttpService.getCompanyList({'applicationAdminId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
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
		'active':{'key':'name','value':'管理员'},
		'list':[{'key':'phoneNumber','value':'管理员手机'}]
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


	$scope.addCompany = function(){
		$state.go('company.add',{'applicationAdminId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
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
						'companyName': item.name,
						'companyId': item.partyId,
						'applicationAdminId': utilFactory.getAccountId(),
						'companyId': item.secondCompanyId,
						'phoneNumber': item.phoneNumber
					}
				
					$state.go('company.detail',_params);
				}
			},
			{
				name:'删除',
				ngIf:function(){},
				fun:function(item){

					var _deleteParams = {
						'companyName':item.name,
						'secondCompanyId':item.secondCompanyId,
						'companyId':item.partyId,
						'applicationAdminId': item.operateAccountId
					}

					alertify.confirm('确认删除'+item.name+'?',function(){
						schedulerHttpService.deleteCompanyByID(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('scheduler.busCompany',{},{reload:true});
							} else{
								alertify.alert('服务器错误：'+_resultData.error.message)
							}
						});
					},function(){

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
					'selfKey':{'key':'secondCompanyName','value':'公司姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'管理员'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'phoneNumber','value':'管理员手机'},
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