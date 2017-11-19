angular.module('paginationModule',[])
.directive('paginationComponent',function(TOKEN_ERROR,getRefreshTokenFacotry,utilFactory,localStorageFactory,$state,$parse,$q){
	return{
		restrict:'E',
		template:'<div class="pagination-wrapper" ng-if="pageConfigs.list.length">' 
				+'	<div class="pagination-num">'
				+'		<select ng-model="currentItemNumber" ng-class="{sleep:pageList.length==1 &&pageConfigs.list.length<21}" ng-disabled="pageList.length==1 &&pageConfigs.list.length<21" class="pagination-select" ng-options="s for s in [20,40,60,80,100]" ng-change="itemNumChange(currentItemNumber,1)"></select>'
				+'		<span>条/页</span>' 
					// <!--
					// 	<span>共{{pageTotal.length}页,<label>{{total}}</label>条</span>
					// -->
				+'	</div>'

				+'	<ul class="pagination-operate">'
			// <!-- 	<li ng-class="{no_active:pageListFlag.pre == false}"
			// 		ng-click="goToFirstOrLast(1)">首页</li> -->
				+'		<li ng-class="{no_active:pageListFlag.pre == false,sleep:pageList.length==1 &&pageConfigs.list.length<21}" ng-disabled="pageList.length==1&&pageConfigs.list.length<21" class="pageOperate" ng-click="prePageList()">上一页</li>'
				+'		<li ng-repeat="i in pageList" class="page_num {{i == currentPageIndex?\'active\':\' \'}}" ng-click="changePage(i)"> {{i}}</li>'
				+'		<li ng-class="{no_active:pageListFlag.next == false,sleep:pageList.length==1 &&pageConfigs.list.length<21}" ng-disabled="pageList.length==1 &&pageConfigs.list.length<21"  ng-click="nextPageList()">下一页</li>'
			// <!-- 		<li ng-class="{no_active:pageListFlag.next == false}"
			// 				ng-click="goToFirstOrLast(pageTotal.length)"></li> -->
				+'	</ul>'
				+'</div>',
		scope:{
			pageConfigs:'='
			// pageConfigs={
			// 	params:{},
			// 	list:null,
			// 	getList:function(){
			// 		return checkListService.getLLDList(this.params)
			// 	},
			// 	dataSet:function(){},
			// 	extendParams:function(){}
			// }
		},
		link:function(scope,elm,attrs){
			scope.$on('refreshAPI',function(){
				getListFun();
			});
			scope.currentItemNumber = '20';
			function getListFun(){
				var deffered = $q.defer();
				scope.pageConfigs.list = null;
				scope.pageConfigs.params.pageSize = scope.currentItemNumber;
				if(scope.pageConfigs.params.pageNumber){
					scope.pageConfigs.params.pageNumber = scope.currentPageIndex;
				}else if(scope.pageConfigs.params.curPage){
					scope.pageConfigs.params.curPage = scope.currentPageIndex;
				}

				var temp = [], _params={};
				for(var key in scope.pageConfigs.params){
					if(scope.pageConfigs.params[key]){
						_params[key] = scope.pageConfigs.params[key];
					}
				}

				var _params = angular.extend(_params,scope.pageConfigs.extendParams);
				scope.pageConfigs.getList(_params).then(function(data){

					if(!data) return

					if(data.data.error){
						if(data.data.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200102.code){
							getRefreshTokenFacotry.getRefreshToken().then(function(result){
								var _tokenRes = result.data;
								console.log('refreshToken result')
								console.log(1,_tokenRes)
								if(!_tokenRes.error){
									var _rewriteToken = localStorageFactory.getObject('account',null);
									_rewriteToken.accessToken = _tokenRes.accessToken;
									_rewriteToken.refreshToken = _tokenRes.refreshToken;
									localStorageFactory.setObject('account',_rewriteToken);
									scope.$broadcast('refreshAPI')
								}else if(_tokenRes.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200105.code){
									localStorageFactory.remove('account');
									$state.go('entry.check')
								}else if(_tokenRes.error.statusCode == '0200104'){
									alertify.alert(_tokenRes.error.message)
								}else{
									utilFactory.checkErrorCode(_tokenRes.error.statusCode)
								}

							},function(){
								
							});
						}else if(data.data.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200105.code){
							localStorageFactory.remove('account');
							$state.go('entry.check')
						}else if( data.data.error.statusCode == '0200104'){
							alertify.alert(data.data.error.message)
						}else {
							console.log("data.data.error.statusCode:"+data.data.error.statusCode)
							utilFactory.checkErrorCode(data.data.error.statusCode)
						}
					}else{
						var _total;
						var data = data.data;
						if(scope.pageConfigs.dataSet){
							scope.pageConfigs.dataSet(data)
						}

						if(!data.value) {
							scope.pageConfigs.list = null;
						}else{
							scope.pageConfigs.list = data.value.list;
							_total = data.value.totalNumber
							
						}
						if(!data.value.totalNumber){
							_total = '1'
						}else if (data.value == undefined){
							_total = data.value.length;
						}

						deffered.resolve(_total);
					}

				},function(errorMessage){
					scope.pageConfigs.list = null
				});

				return deffered.promise;
			}

			function refreshData(pageIndex){
				scope.pageToTotalStart = pageIndex-1;
				scope.currentPageIndex = pageIndex;
				getListFun().then(function(total){
					scope.total = total;
					scope.pageTotal = returnArr();
					scope.pageList = returnShowListArr();
					judgePreNext();
				});
			}

			function judgePreNext(){
				scope.pageListFlag.pre = scope.currentPageIndex ==1?false:true;
				scope.pageListFlag.next = scope.currentPageIndex == scope.pageTotal.length?false:true;
			}

			function returnArr(){
				var arr = [];
				var max = Math.ceil(scope.total / scope.currentItemNumber);
				for(var i=1;i<=max ;i++){
					arr.push(i)
				}

				if(max == 0){
					arr.push(1);
				}
				return arr;
			}

			function returnShowListArr(){
				return scope.pageTotal.slice(scope.pageToTotalStart,scope.pageToTotalStart+scope.pageTotalListNum);
			}

			scope.pageToTotalStart = 0;
			scope.pageTotalListNum=5
			scope.pageTotal = [];
			scope.pageList = [];
			scope.pageListFlag = {
				pre:false,
				next:false
			}

			scope.nextPageList = function(){
				if(scope.currentPageIndex < scope.pageTotal.length){
					var _num = scope.currentPageIndex +1;
					if(parseInt(scope.pageToTotalStart) < 
					   (scope.pageTotal[scope.pageTotal.length-1]-scope.pageTotalListNum) &&
					   scope.currentPageIndex == scope.pageList[scope.pageList.length-1]){
						scope.pageToTotalStart ++;
						scope.pageList = returnShowListArr();

					}
					scope.changePage(_num);
				}
			};

			//上一页
			scope.prePageList = function(){
				if(scope.currentPageIndex > 1){
					var _num = scope.currentPageIndex -1;
					if(parseInt(scope.pageToTotalStart) >=
						parseInt(scope.pageTotal[0])&&
						scope.currentPageIndex == scope.pageList[0]){
						scope.pageToTotalStart --;
						scope.pageList = returnShowListArr();
					}
					scope.changePage(_num)
				}
			};

			scope.itemNumChange = function(num,page){
				var _page = parseInt(page);
				scope.currentItemNumber = parseInt(num);
				refreshData(_page);
			}

			// /scope.itemNumChange(scope.pageConfigs.params.pageSize,scope.pageConfigs.params.pageNo);

			scope.changePage = function(num){
				scope.currentPageIndex = num;
				judgePreNext();
				getListFun().then(function(total){
					if(scope.total !=total){
						scope.total = total;
						scope.pageTotal = returnArr();
						scope.pageList = returnShowListArr();
					}
				})
			}

			scope.goToFirstOrLast = function(){
				// if(scope.currentPageIndex != pageNum){
				// 	scope.pageTotalStart = pageNum == 1?0:pageNum-3<0?pageNum-2:pageNum-3;
				// 	scope.pageList = returnShowListArr();
				// 	scope.changePage(pageNum);
				// }
			}

			scope.$on('refreshPageList',function(e,d){
				if(d){
					scope.pageConfigs.params = angular.extend(scope.pageConfigs.params,d);
					var _obj = d ||{pageSize:scope.currentItemNumber,pageNo:1};
					scope.itemNumChange(_obj.pageSize,_obj.pageNo)
				}
			});
		}
	}
})