directive('paging',['$parse','$q',function($parse,$q){
	return{
		restrict:'E',
		template:'',
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
			function getListFun(){
				var deffered = $q.defer();
				scope.pageConfigs.list = nul;
				scope.pageConfigs.params.pageSize = scope.currentItemNumber;
				if(scope.pageConfigs.params.pageNo){
					scope.pageConfigs.params.pageNo = scope.currentPageIndex;
				}else if(scope.pageConfigs.params.curPage){
					scope.pageConfigs.params.curPage = scope.currentPageIndex;
				}

				var temp = [];
				var _params={};

				for(var key in scope.pageConfigs.params){
					if(scope.pageConfigs.params[key]){
						_params[key] = scope.pageConfigs.params[key];
					}
				}

				var _params = angular.extend(_params,scope.pageConfigs.extendParams);

				scope.pageConfigs.getList(_params).then(function(data){
					var _total;
					if(scope.pageConfigs.dataSet){
						scope.pageConfigs.dataSet(data)
					}

					if(data.data){
						data = data.data;
					}
					scope.pageConfigs.list = data.result;

					if(data.total != undefined){
						_total = data.total
					}else if(data.totalRows != undefined){
						_total = data.totalRows;
					}else if(data.totalNumber !=undefined){
						_total = data.totalNumber;
					}else{
						if(data.pageVO == null){
							_total = 0;
						}else{
							_total = data.pageVO.totalRows;
						}
					}
					deffered.resolve(_total);
				},function(errorMessage){
					scope.pageConfigs.list = [0]
				});

				return deffered.promise;
			}

			function refreshData(){
				scope.pageToTotalStart = pageIndex-1;
				scope.currentPageIndex = pageIndex;
				getListFun().then(function(total){
					scope.total = total;
					scope.pageTotal = returnArr();
					scope.pageList = returnShowisArr();
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
			scope.pageTotalListNum=3;
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
						scope.pageList = returnShowisArr();
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
				var _page = parseInt(page) ||1;
				scope.currentItemNumber = parseInt(num) || 20;
				refreshData(_page);
			}

			scope.itemNumChange(scope.pageConfigs.params.pageSize,scope.pageConfigs.params.pageNo);

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
				if(scope.currentPageIndex != pageNum){
					scope.pageTotalStart = pageNum == 1?0:pageNum-3<0?pageNum-2:pageNum-3;
					scope.pageList = returnShowListArr();
					scope.changePage(pageNum);
				}
			}

			scope.$on('refreshPageList',function(e,d){
				if(d){
					scope.pageConfigs.params = angular.extend(scope.pageConfigs.params,d);
				}
				var _obj = d ||{pageSize:scope.currentItemNumber,pageNo:1};
				scope.itemNumChange(_obj.pageSize,_obj.pageNo)
			});
		}
	}
}])