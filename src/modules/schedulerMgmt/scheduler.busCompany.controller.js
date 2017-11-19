angular.module('schedulerbusCompanyControllerModule',[])
.controller('schedulerbusCompanyController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){
	
	$scope.params = {
		'secondCompanyId':utilFactory.getSecondCompanyId(),
		'schedulerId':utilFactory.getAccountId()
	};
	$scope.active = false;
	$scope.submitOnProgress = false;
	$scope.breadcrumbText={'lv1':'运营单位'}

	$scope.submitBusCompany = function(formValidate){
		if(formValidate){ return utilFactory.setDirty($scope.formValidate);}

		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.params.secondCompanyId,
			'schedulerId': $scope.params.schedulerId,
			'name': $scope.params.name,
		}
		alertify.confirm('确认新增名为"'+$scope.params.name+'"的这个运营单位？',function(){
			schedulerHttpService.addBusCompany(_params).then(function(result){
				var _resultData = result.data;
				if(!_resultData.error){
					alertify.alert('新增成功！',function(){
						$state.go('admin.scheduler.busCompany',{},{reload:true});
					})
					
				}else{
					utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.message);
					$scope.submitOnProgress = false;
				}
				$scope.submitOnProgress = false;
			},function(){
				$scope.submitOnProgress = false;
			})
		},function(){
			$scope.submitOnProgress = false;
		}).set({labels:{ok:'确认', cancel: '取消'}, padding: true});
	};


	$scope.close = function(){ $('#myModal').modal('toggle');}
	$scope.updateBusCompany = function(updateFormValidateIsInvalid){

		if(updateFormValidateIsInvalid){ return utilFactory.setDirty($scope.updateFormValidate);}

		$scope.submitOnProgress = true;
		var _params = {
			'secondCompanyId':$scope.updateParams.secondCompanyId,
			'schedulerId': $scope.params.schedulerId,
			'name': $scope.updateParams.name,
			'partyId': $scope.updateParams.partyId
			//'phoneNumber': $scope.updateParams.phoneNumber,
			//'roleCode':$scope.updateParams.roleCode,
			//'status':$scope.updateParams.status
		}
		$('#myModal').modal('toggle');
		schedulerHttpService.updateBusCompany(_params).then(function(result){
			var _resultData = result.data;
			if(!_resultData.error){
				alertify.alert('更新成功！',function(){
					$state.go('admin.scheduler.busCompany',{},{reload:true});
				})
			}else{
				utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.message)
			}
			$scope.submitOnProgress = false;
		},function(){
			$scope.submitOnProgress = false;
		})
	};	


	$scope.pageConfigs={
		params:{
			'secondCompanyId': utilFactory.getSecondCompanyId(),
			'schedulerId': utilFactory.getAccountId(),
			'pageSize':'',
			'pageNumber':''
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getBusCompany(params)
		},
		loadData:function(){	},
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
						'partyId':item.partyId
					}
					$('#myModal').modal('toggle');
				}
			}
			,
			{
				name:'删除',
				ngIf:function(){},
				fun:function(item){
					var _deleteParams = {
						'name':item.name,
						'secondCompanyId':item.secondCompanyId,
						'partyId':item.partyId
					}
					alertify.confirm('该公司车辆以及司机可能有排班任务，继续删除该公司将会删除所有相关司机，车辆及线路！',function(){
						schedulerHttpService.deleteBusCompany(_deleteParams).then(function(result){
							var _resultData =result.data;
							if(!_resultData.error){
								$state.go('admin.scheduler.busCompany',{},{reload:true});
							} else{
								utilFactory.checkErrorCode(_resultData.error.statusCode)
							}
						});
					},function(){

					});
		
				}
			}
			]
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
		defaultEmptyText:'还未添加过任何运营公司',
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
	    	selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'单位名称'},
					'checkFlag':true
				}
				// {
				// 	'parentKey':'',
				// 	'selfKey':{'key':'phoneNumber','value':'手机号'},
				// 	'checkFlag':true
				// }
	    	]
	    }
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'',pageNo:''});
	});
})