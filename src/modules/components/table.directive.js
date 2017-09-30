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
angular.module('tableComponentModule',[]).directive('tableComponent',function(loginHttpService,$state){
	return {
		restrict:"EA",
		template:'	<div class="table-wrapper">'
				+' 	    <div class="table-head">'
				+'		 	<span class="first-operate" ng-if="stableFlag.checkbox"></span>'
				+'			<span ng-repeat="head in tableConfig.head">{{head["selfKey"]["value"]}}</span>'
				+'			<span ng-if="tableConfig.operateIfFlag">操作</span>'
				+'		</div>'
				+'		<ul class="table-body">'
				+'			<li class="list-item" ng-repeat="item in tableData track by $index">'
				+'				<span class="first-operate" ng-if="stableFlag.checkbox">'
				+'					<input type="checkbox" id="item{{$index}}" id="item{{$index}}" ng-model="selectObj.checkArray[$index]" ng-click="selectObj.checkIsAllSelect(selectObj.checkArray[$index])" ng-disabled="tableConfig.changeEnable && tableConfig.changeEnable(item)" data-disable="{{tableConfig.changeEnable && tableConfig.changeEnable(item)}}" />'
				+'				    <label for="item{{$index}}" class="check-box"></label>' 
				+'				</span>'
				+'				<span ng-repeat="head in tableConfig.head">{{(item[head.parentKey]?item[head.parentKey][head.selfKey.key] :item[head.selfKey.key] )|| tableConfig.defaultValue}}</span>'
				// +'				<span ><a>编辑</a></span>'
				+'				<span class="item-operate"  ng-click="preventPropagation($event)" ng-if="tableConfig.operateIfFlag || (stableFlag.operate && stableFlag.operate.Length !=0 && (o.ngIf(item) ||o.ngIf ==undefined))">'
				
				+'					  <a class="operateBtnForTableList" ng-click="o.fun(item,$event)" ng-repeat="o in stableFlag.operate"  ng-if="tableConfig.operateIfFlag || (o.ngIf(item) || o.ngIf ==undefined)">{{o.name}}</a> '     	
				+'				</span>'
				+'			</li>'
				+'		</ul>'
				+'	</div>'
				+'  <div ng-if="tableData.length === 0" style="text-align: center;margin-top: 50px;">暂无数据</div>',
		scope:{
			tableConfig:'=',
			tableData:'='
		},
		link:function(scope,elements,attrs){
			scope.headOptional = scope.tableConfig.setHeadOptional;
			scope.stableFlag = scope.tableConfig.stableFlag;
			scope.tableConfig.defaultValue = scope.tableConfig.defaultValue || null;
			if(scope.headOptional){ //generate head title for table component
				scope.setHeadOptionalFn={
					checkArray:scope.headOptional.selectOptions,
					minOptionalNum:scope.headOptional.selectOptions.cancelSelectNum || 5,
					returnHead:function(obj){
						var _headArray = [];
						for(var i=0;i<obj.length;i++){
							if(obj[i].checkFlag == true){
								_headArray.push(obj[i]);
							}
						}
						return _headArray;
					},
					isSelectAllHeadITems:function(){},
					selectItem:function(){},
					ensureSelect:function(){}
				};
				scope.tableConfig.head = scope.setHeadOptionalFn.returnHead(scope.headOptional.selectOptions);
			}


			if(scope.stableFlag.checkbox){
				scope.selectObj = {
					allSelecteFlag:false,
					checkArray:[],
					selectAll:function(){
						var _element='';
						for(var i=0;i<this.checkArray.length;i++){
							_element = "#item"+i;
							this.checkArray[i]=this.allSelecteFlag;
                            var _status = angular.element(document.getElementById(_element)).data('disable')
							console.log(_status+"xxx ststu")
							if(_status == true &&this.allSelecteFlag){

								this.checkArray[i] = false;
							}
						}
					},
					checkIsAllSelect:function(flag){
						var _isAllSelectFlag = 0;
						var _array = this.checkArray;
						var _length = _array.length;
						if(flag == false){
							this.allSelecteFlag = false;
						}else{
							for(var i=0;i<_length;i++){
								if(_array[i]==flag){
									_isAllSelectFlag++;
								}else{
									return _isAllSelectFlag;
								}
							}

							if(_isAllSelectFlag == _length){
								this.allSelecteFlag = true;
							}
						}
					}
				}

				scope.$on('checkboxSelectAll',function(n,o){
					scope.selectObj.selectAll();
				})
			};


			scope.$watch('tableData',function(n,o){
				console.log(1,n)
				if(n === null) return;
				if(scope.stableFlag.checkbox){
					scope.selectObj.allSelectFlag =false;
					//scope.selectObj.checkArray = scope.tableConfig.checkbox.checkArray;
					console.log('checkArray')
					console.log(scope.selectObj.checkArray)
				}
				// if(_beginWidth == 0){
				// 	scope.autoColumnWidth = computeFun.getAutoWidth(n,scope.tableConfig.head)
				// }
			});			
		}
	}
})






