angular.module("checkControllerModule",[])
.controller("checkController",function(localStorageFactory,loginHttpService,utilFactory,CHECK_ACCOUNT_STATUS,$scope,$state){
	$scope.btnMessage = "下一步";
	$scope.checkNumber = function(e){
		//var myreg = "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$";
		var myreg=/^[0-9][0,1,2,3,4,5,6,7,8,9][0-9]{9}$/; 
		var phoneNumber = $scope.phoneNumber;

		if(!phoneNumber){
			alertify.alert('请输入手机号',function(){});
			return 
		}
        if(phoneNumber && !phoneNumber.match(myreg)) {
        	alertify.alert('请输入正确的手机号码');
        	return
        } else{
        	$scope.btnMessage = "获取权限中...";
        	$scope.disabled= true;

        	loginHttpService.account({'phoneNumber':$scope.phoneNumber,'requestType':0}).then(function(result){

        		var responseData = result.data;
        		var accountActiveObj = responseData.value;
				// check user phone number.and if user account is the first time to login.
				// will provide term popup and after user confirm it. will go to active page
				// requestType 0 :active ,requestType 1: login
				function checkTerm(accountActiveObj){
					console.log('accountActiveObj.termAndConditionFlag:'+accountActiveObj.termAndConditionFlag)
					console.log('accountActiveObj')
					console.log(1,accountActiveObj)
					if(!accountActiveObj.termAndConditionFlag){		
						var _termAndConditionFlagParams = {
							'phoneNumber': $scope.phoneNumber,
							'termAndConditionId':accountActiveObj.termAndConditionId,
							'lastUpdateTermAndConditionTime':accountActiveObj.lastUpdateTermAndConditionTime
						}
						loginHttpService.getTerms().then(function(result){ // Get Terms content

							var _resultData = result.data;
							var _title = _resultData.title;
							var _body  = _resultData.text;

							alertify.confirm( '<div style="max-height: 400px; overflow: auto;width: 440px;box-sizing: content-box;>'+_title+_body+'</div>',function(){
								loginHttpService.termcondition(_termAndConditionFlagParams).then(function(result){
									var _resultData = result.data;
									// Only active account will sent smscode
									if(!_resultData.error && accountActiveObj.status != CHECK_ACCOUNT_STATUS.accountLogin){
										var _obtainSMSCodeParams = {
											'phoneNumber': $scope.phoneNumber,
											'accountStatus':accountActiveObj.status
										}
										loginHttpService.obtainSMSCode(_obtainSMSCodeParams).then(function(result){
											var _obtainSMSCodeResult = result.data;
											if(!_obtainSMSCodeResult.error){
												$state.go('entry.active',{'phoneNumber':$scope.phoneNumber,'requestType':'0','smsCode':_obtainSMSCodeResult.value.smsCode})
											}else{
												utilFactory.checkErrorCode(_obtainSMSCodeResult.error.statusCode,_obtainSMSCodeResult.error.message)
												$scope.btnMessage = "下一步";
												$scope.disabled=false;
											}
										})
									}else if(!_resultData.error && accountActiveObj.status ==CHECK_ACCOUNT_STATUS.accountLogin){
										$state.go('entry.login',{'phoneNumber':$scope.phoneNumber,'requestType':'1'})
									}else if(_resultData.error){
										if(_resultData.error.statusCode == "0100114" || _resultData.error.statusCode == "0200202"){
											var _obtainSMSCodeParams = {
												'phoneNumber': $scope.phoneNumber,
												'accountStatus':accountActiveObj.status
											};
											
											loginHttpService.obtainSMSCode(_obtainSMSCodeParams).then(function(result){
												var _obtainSMSCodeResult = result.data;
												if(!_obtainSMSCodeResult.error){
													$state.go('entry.active',{'phoneNumber':$scope.phoneNumber,'requestType':'0','smsCode':_obtainSMSCodeResult.value.smsCode})
												}else{
													utilFactory.checkErrorCode(_obtainSMSCodeResult.error.statusCode,_obtainSMSCodeResult.error.message)
													$scope.btnMessage = "下一步";
													$scope.disabled=false;
												}
											})

										}else{
											utilFactory.checkErrorCode(_resultData.error.statusCode,_resultData.error.message)
											$scope.btnMessage = "下一步";
											$scope.disabled=false;
										}

									}
								})
							},function(){
								$scope.btnMessage = "下一步";
								$scope.$apply();
							}).set({labels:{ok:'接受', cancel: '拒绝'}, padding: true});

						});
					}else{
						if(accountActiveObj.status == CHECK_ACCOUNT_STATUS.accountLogin){
							$state.go('entry.login',{'phoneNumber':$scope.phoneNumber,'requestType':'1'})
						}
						

						if(accountActiveObj.status == CHECK_ACCOUNT_STATUS.accountActive){
							var _obtainSMSCodeParams = {
								'phoneNumber': $scope.phoneNumber,
								'accountStatus':CHECK_ACCOUNT_STATUS.accountActive
							}

							loginHttpService.obtainSMSCode(_obtainSMSCodeParams).then(function(result){
								var _obtainSMSCodeResult = result.data;
								if(!_obtainSMSCodeResult.error){
									$state.go('entry.active',{'phoneNumber':$scope.phoneNumber,'requestType':'0','smsCode':_obtainSMSCodeResult.value.smsCode})
								}else{
									utilFactory.checkErrorCode(_obtainSMSCodeResult.error.statusCode,_obtainSMSCodeResult.error.message)
									$scope.btnMessage = "下一步";
									$scope.disabled=false;
								}
							})
						}
						
					}
				}

				if(!responseData.error){
					checkTerm(accountActiveObj);
				}else{
					utilFactory.checkErrorCode(responseData.error.statusCode,responseData.error.statusContext)
					$scope.btnMessage = "下一步";
					$scope.disabled=false;
				}
			},function(error){
				alertify.alert('可能遇到问题，请稍候再试',function(){})
			});
        }	
	}
});