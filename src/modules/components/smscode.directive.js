'use strict'
/**
 * @description
 * smsCode component works in login/forget.html and login/active.html
 *
 * invoke in html file by:<sms-code-component phone-number="phoneNumber"request-type="requestType" sleep='true'></sms-code-component>
 * @phone-number={string}:get value from parent controller
 * @request-type={string}:--
 * @sleep={booleans}: true => init component status by "获取验证码",false => init component status by "重新获取"
 *
 */
angular.module('smsCodeModule',[]).directive('smsCodeComponent',function(loginHttpService,REQUESTTYPE,SMSCODE_ERROR,$state){
	return {
		restrict:"EA",
		template:'<button  id="smsCodeBtn" class="btn-normal" ng-class="{\'smsActive\': isActive,\'smsSheep\': !isActive}"  ng-click="invokeSmsCode()">{{defaultValue}}</button>',
		scope:{
			phoneNumber:'=phoneNumber',
			requestType:'=requestType',
			smsCode:'=smsCode',
			defaultValue:'@defaultValue',
			requestType:'@requestType',
			codeStatus:'=codeStatus',
			sleep:'@'
		},
		link:function(scope,elements,attrs){
			var time = 60;
			var countTime="";
			var _forgetFlag=false;
			scope.defaultValue == '获取验证码'?_forgetFlag = true:_forgetFlag=false;
			clearTimeout(countTime);
			scope.invokeSmsCode = function(){
				time = 60;
				scope.isActive = true; //disabled click event when get smsCode progress working.
				var _type = scope.requestType == 'forget'? REQUESTTYPE.forgetAccount : REQUESTTYPE.activeAccount
				loginHttpService.account({'phoneNumber':scope.phoneNumber,'requestType':_type}).then(function(result){
					var responseData = result.data;
					if(!responseData.error){
						setTime('smsCodeBtn',time,scope.defaultValue);
						scope.smsCode = responseData.value.smsCode;
						scope.codeStatus = "验证码已发送至"+scope.phoneNumber
					}else{
						switch(responseData.error.statusCode){
							case SMSCODE_ERROR.STATUS_CODE_0100108.code:errorMessageFn(SMSCODE_ERROR.STATUS_CODE_0100108.message,responseData)
								break;
							case SMSCODE_ERROR.SMSCODE_ERROR_0100110.code:errorMessageFn(SMSCODE_ERROR.STATUS_CODE_0100108.message,responseData)
								break;
							case SMSCODE_ERROR.STATUS_CODE_0200108.code:errorMessageFn(SMSCODE_ERROR.STATUS_CODE_0200108.message,responseData)
							break;
							case SMSCODE_ERROR.STATUS_CODE_0200109.code:errorMessageFn(SMSCODE_ERROR.STATUS_CODE_0200109.message,responseData)
								break;
							case SMSCODE_ERROR.STATUS_CODE_0200110.code:errorMessageFn(SMSCODE_ERROR.STATUS_CODE_0200110.message,responseData)
								break;
							case SMSCODE_ERROR.STATUS_CODE_0200111.code:errorMessageFn(SMSCODE_ERROR.STATUS_CODE_0200111.message,responseData)
								break;
							case SMSCODE_ERROR.STATUS_CODE_0200112.code:errorMessageFn(SMSCODE_ERROR.STATUS_CODE_0200112.message,responseData)
								break;
							default:errorMessageFn(responseData.error.message)
						}
						
						function errorMessageFn(errorMessageText,responseDataObj){
							alertify.alert(errorMessageText,function(){
								scope.activeText = "激活";
								scope.disabled = false;
							})
						}
					}
				},function(error){
					alertify.alert('可能遇到问题,请稍后再试。',function(){})
					scope.activeText = "激活";
					scope.disabled = false;
				});
			}

			function setTime(postion,totalTime,defaultValue){
				if(totalTime ==0 && _forgetFlag){
					scope.isActive = false;
					document.getElementById(postion).removeAttribute("disabled");
					document.getElementById(postion).innerHTML = '获取验证码';
					document.getElementById(postion).removeAttribute("class");
					document.getElementById(postion).setAttribute('class','btn-normal smsSheep');
					_forgetFlag = false;
					clearTimeout(countTime);
					return;
				}

				if(totalTime == 0 && !_forgetFlag){
					scope.isActive = false;
					document.getElementById(postion).removeAttribute("disabled");
					document.getElementById(postion).innerHTML = '重新获取';
					document.getElementById(postion).removeAttribute("class");
					document.getElementById(postion).setAttribute('class','btn-normal smsSheep');
					clearTimeout(countTime);
					return;
				}else{
					scope.isActive = true;
					document.getElementById(postion).setAttribute('disabled','disabled');
					document.getElementById(postion).innerHTML='重新获取('+totalTime+')';
					document.getElementById(postion).removeAttribute("class");
					document.getElementById(postion).setAttribute('class','btn-normal smsActive');
					clearTimeout(countTime);
					totalTime--;
				}

				countTime = setTimeout(function(){
					setTime(postion,totalTime);
				},1000);
			}

			if(scope.sleep){
				setTime('smsCodeBtn',0);
			}else{
				setTime('smsCodeBtn',60)
			}
		}
	}
})