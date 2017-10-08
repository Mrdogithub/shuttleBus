angular.module('HRControllerModule',[])
.controller('HRController',function(companyHttpService,utilFactory,$stateParams,$state,$scope){
	

	$scope.params = {
		'secondCompanyId':utilFactory.getSecondCompanyId(),
		'secondCompanyAdminId':utilFactory.getAccountId()
	};
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
			'secondCompanyName': $scope.params.schedulerId,
			'name': $scope.params.name,
			'secondCompanyAdminId':$scope.params.secondCompanyAdminId,
			'phoneNumber':$scope.params.phoneNumber
		}

		companyHttpService.addHR(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('添加成功！',function(){
					$state.go('company.HR',{},{reload:true});
				})
			}else{
				alertify.alert(_resultData.error.message)
			}
			$scope.submitOnProgress = false;
		},function(){})
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
			'phoneNumber': $scope.updateParams.phoneNumber,
			//'roleCode':$scope.updateParams.roleCode,
			//'status':$scope.updateParams.status
		}
		$('#myModal').modal('toggle');
		companyHttpService.updateHrById(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('company.HR',{},{reload:true});
				})
			}else{
				alertify.alert(_resultData.error.message)
			}
			$scope.submitOnProgress = false;
		},function(){})
	};	


	$scope.pageConfigs={
		params:{},
		list:null,
		getList:function(){
			return companyHttpService.getHrList({
				'secondCompanyAdminId': utilFactory.getAccountId(),
				'secondCompanyId': utilFactory.getSecondCompanyId()
			})
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
					// }
					// $scope.tableConfig.operate[0].ngIf = function(){
					// 	return false;
					// }

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
					alertify.confirm('确认删除'+item.name+'?',function(){
						companyHttpService.deleteHrByID(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('company.HR',{},{reload:true});
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