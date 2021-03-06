angular.module('companyListControllerModule',[])
.controller('companyListController',function(loadData,companyHttpService,utilFactory,$state,$scope){
	
	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	if(!loadData.data.error &&(!loadData.data.value || !loadData.data.value.list.length)){
		$scope.dataIsEmpty = true;
	
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
		
	}

	$scope.pageConfigs={
		params:{
			// 'pageSize':'20',
			// 'pageNumber':'1',
			// 'pageNo': '1',
			'applicationAdminId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId(),
			// 'secondCompanyName':utilFactory.getSecondCompanyName()
		},
		list:null,
		getList:function(params){
			return companyHttpService.getCompanyList(params)
		},
		loadData:function(){},
		dataSet:function(result){
			if(result.value != null){
				var _result = result.value;
				for(var i=0;i<_result.length;i++){
					_result[i]['status'] =_result[i]['status'] == 0?'未激活':'已激活'
				}
			}
		}
	}
	$scope.selectAllStatus = false;
	$scope.queryByKeyObj = {
		'active':{'key':'companyName','value':'公司名称'},
		'list':[{'key':'phoneNumber','value':'管理员手机'}]
	}

	$scope.selectKey = function(activeObj){
		$scope.queryByKeyObj.list.length = 0;
		$scope.queryByKeyObj.list.push( {'key':$scope.queryByKeyObj.active.key,'value':$scope.queryByKeyObj.active.value})
		$scope.queryByKeyObj.active.key = activeObj.key;
		$scope.queryByKeyObj.active.value = activeObj.value;

		$('.dropdown-menu').css('display','none')
	}

	$scope.searchFn = function () {
		var _searchParams = {
			// 'pageSize':'20',
			// 'pageNumber':'1',
			// 'pageNo': '1',
			'applicationAdminId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId(),
			'secondCompanyName':utilFactory.getSecondCompanyName()
		}
		_searchParams[$scope.queryByKeyObj.active.key] = $scope.searchText;
		//$scope.pageConfigs.getList(_searchParams)
		$scope.$broadcast('refreshPageList',_searchParams);
	}
	$scope.showQueryKeyList = function(){
		$('.dropdown-menu').css('display','block')
	}

	$scope.addCompany = function(){
		$state.go('admin.companyAdd',{'applicationAdminId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId(),'secondCompanyName':utilFactory.getSecondCompanyName()})
	};

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看详情',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _params = {
						'secondCompanyId': item.secondCompanyId,
						'companyName': item.name,
						'adminName':item.adminName,
						'companyId': item.partyId,
						'userId':item.adminPartyId,
						'applicationAdminId': utilFactory.getAccountId(),
						'secondCompanyName':utilFactory.getSecondCompanyName(),
						'phoneNumber': item.adminPhoneNumber
					}
					$state.go('admin.companyDetail',_params);
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){

					var _deleteParams = {
						'secondCompanyId': item.secondCompanyId,
						'companyName': item.name,
						'adminName':item.adminName,
						'companyId': item.partyId,
						'userId':item.adminPartyId,
						'applicationAdminId': utilFactory.getAccountId(),
						'secondCompanyName':utilFactory.getSecondCompanyName(),
						'phoneNumber': item.adminPhoneNumber
					}

					alertify.confirm('确认删除"'+item.name+'"吗?',function(){
						companyHttpService.deleteCompanyByID(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('admin.companyList',{},{reload:true});
							} else{
								utilFactory.checkErrorCode(_resultData.error.statusCode)
							}
						});
					},function(){

					}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
		
				}
			}]
		},
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
					'selfKey':{'key':'name','value':'公司名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'adminName','value':'管理员'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'adminPhoneNumber','value':'管理员手机'},
					'checkFlag':true
				}
			]
		}
		// changeEnable:function(item){}
	}

	$scope.$watch('$viewContentLoaded',function(event){
		var _params = {
			'pageSize':'20',
			'pageNumber':'1',
			'applicationAdminId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		};
		// $scope.pageConfigs.getList(_params)
  		$scope.$broadcast('refreshPageList',_params);
	});
})