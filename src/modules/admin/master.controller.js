angular.module('masterControllerModule',[])
.controller('masterController',function(loadData,applicationAdminHttpService,utilFactory,$stateParams,$state,$scope){

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{
			'pageSize':'',
			'pageNumber':'',
			'systemAdminId':utilFactory.getAccountId(),
			'systemAdminCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return applicationAdminHttpService.getApplicationAdminList(params)
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
		//extendParams:function(){}
	}
	var _params = {
			'pageSize':'',
			'pageNumber':'',
			'systemAdminId':utilFactory.getAccountId(),
			'systemAdminCompanyId':utilFactory.getSecondCompanyId()
		};
	$scope.pageConfigs.getList(_params)
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


	$scope.searchFn = function(){
		var _searchParams ={
			// 'pageSize':'20',
			// 'pageNo':'1'
			'systemAdminId':utilFactory.getAccountId(),
			'systemAdminCompanyId':utilFactory.getSecondCompanyId()
		}
		_searchParams[$scope.queryByKeyObj.active.key] = $scope.searchText;
		console.log(1,_searchParams)
		$scope.$broadcast('refreshPageList',_searchParams);
	}
	$scope.showQueryKeyList = function(){
		$('.dropdown-menu').css('display','block')
	}

	$scope.addApplicationCompany = function(){
		$state.go('admin.addMaster',{'systemAdminId':utilFactory.getAccountId(),'systemAdminCompanyId':utilFactory.getSecondCompanyId(),'systemCompanyName':utilFactory.getSecondCompanyName()})
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
						'systemAdminCompanyId': item.secondCompanyId,
						'companyName': item.name,
						'adminName':item.adminName,
						'userId': item.partyId,
						'companyId':item.adminPartyId,
						'systemCompanyName':utilFactory.getSecondCompanyName(),
						'systemAdminId': utilFactory.getAccountId(),
						'phoneNumber': item.adminPhoneNumber
					}
					$state.go('admin.detailMaster',_params);
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){

					var _deleteParams = {
						'systemAdminCompanyId': item.secondCompanyId,
						'companyName': item.name,
						'adminName':item.adminName,
						'userId': item.partyId,
						'systemCompanyName':utilFactory.getSecondCompanyName(),
						'systemAdminId': utilFactory.getAccountId(),
						'phoneNumber': item.adminPhoneNumber,
						'companyName':item.name,
						'companyId':item.adminPartyId
					}

					alertify.confirm('确认删除"'+item.name+'"吗?',function(){
						applicationAdminHttpService.deleteApplicationAdminByID(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('admin.master',{},{reload:true});
							} else{
								utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.message)
							}
						});
					},function(){

					}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
		
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
	

	$scope.dataIsEmpty = false;
	if(loadData && (loadData.data.value == null)){
		$scope.dataIsEmpty = true;
		return
	}else if(loadData && loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode);
		return
	}else{
		$scope.$watch('$viewContentLoaded',function(event){ 
			$scope.pageConfigs.getList(_params)
  			$scope.$broadcast('refreshPageList',{pageSize:'',pageNo:''});
		});	
	}


});