angular.module('HRControllerModule',[])
.controller('HRController',function(loadData,companyHttpService,utilFactory,$stateParams,$state,$scope){

	// Init current user info
	$scope.params = {'secondCompanyId':utilFactory.getSecondCompanyId(),'secondCompanyAdminId':utilFactory.getAccountId()};

	// Init show/hide status for current view
	$scope.active = false;
	$scope.submitOnProgress = false;
	$scope.breadcrumbText={ 'lv1':'乘客管理员'}


	$scope.addHR = function(formValidateIsInvalid){
		if(formValidateIsInvalid){
			return utilFactory.setDirty($scope.formValidate);
		}
		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.params.secondCompanyId,
			'name': $scope.params.name,
			'secondCompanyAdminId':$scope.params.secondCompanyAdminId,
			'phoneNumber':$scope.params.phoneNumber
		}
		alertify.confirm('确认新增名为"'+$scope.params.name+'"的这个乘客管理员？',function(){
			companyHttpService.addHR(_params).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					alertify.alert('新增成功！',function(){$state.go('admin.companyAdminHR',{},{reload:true});})
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode)
				}
				$scope.submitOnProgress = false;
			},function(){
				$scope.submitOnProgress = false;
			})
		},function(){
				$scope.submitOnProgress = false;
		}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	};


	$scope.close = function(){
		$('#myModal').modal('toggle');
	}

	$scope.updateHR = function(updateFormValidateIsInvalid){

		if(updateFormValidateIsInvalid){
			return utilFactory.setDirty($scope.updateFormValidate);
		}

		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.updateParams.secondCompanyId,
			'secondCompanyAdminId': $scope.params.secondCompanyAdminId,
			'name': $scope.updateParams.name,
			'hrId': $scope.updateParams.partyId,
			'phoneNumber': $scope.updateParams.phoneNumber
		}
		$('#myModal').modal('toggle');
		companyHttpService.updateHrById(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('admin.companyAdminHR',{},{reload:true});
				})
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode)
			}
			$scope.submitOnProgress = false;
		},function(){})
	};	


	$scope.pageConfigs={
		params:{
			'secondCompanyAdminId': utilFactory.getAccountId(),
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'pageSize':'20',
			'pageNumber':'1'
		},
		list:null,
		getList:function(params){
			return companyHttpService.getHrList(params)
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
			operateIfFlag:true,
			operate:[{
				name:'编辑',
				ngIf:function(){},
				fun:function(item,event){

					$scope.updateParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'phoneNumber':item.phoneNumber,
						'partyId':item.partyId
					}
					$('#myModal').modal('toggle');
				}
			},
			{
				name:'删除',
				ngIf:function(){},
				fun:function(item){
					var _deleteParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'senondCompanyName':item.secondCompanyName,
						'secondCompanyAdminId':$scope.params.secondCompanyAdminId,
						'phoneNumber':item.phoneNumber,
						'hrId':item.partyId
					}
					alertify.confirm('确认删除"'+item.name+'"?',function(){
						companyHttpService.deleteHrByID(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('admin.companyAdminHR',{},{reload:true});
							} else{
								utilFactory.checkErrorCode(_resultData.error.statusCode)
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
		defaultEmptyText:'还未添加任何乘客管理员',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
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