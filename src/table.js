.directive('tableDirective',["$parse","$q","$window",function($parse,$q,$window){
	return {
		restrict:'E',
		templateUrl:'template.html',
		scope:{
			tableConfig:"=",
			tableData:'='
			/*
			scope.tableConfigs={
				stableFlag:{
					arrow:true,
					index:true,
					checkbox:true,
					radio:true,
					operate:[{
						name:"action",
						ngIf:function(){},
						fun:function(item){
							$window.location="./"
						}
					}]
				},
				height:290,
				head:[{name:'文件名',key:'filename'}],
				className:function(flag){},
				clickFun:function(){},
				rowClickFun:function(item){},
				checkbox:{
					checkArray:[]
				},
				defaultValue:'---',
				radioSelect:function(){},
				operateIfFlag:true
				setHeadOptional:{
					cancelSelectNum:5,
					selectOptions:[
					{'key':'regionName',name:'局点',checkFlag:true}
					]
				},
				changeEnable:function(item){}
			}


			*/
		},
		link:function(scope,elm,attrs){
			var initTableWidth;
			scope.stableFlag = scope.tableConfigs.stableFlag;
			scope.tableConfigs.defaultValue = scope.tableConfigs.defaultValue || null;
			scope.headOptional =  scope.tableConfigs.setHeadOptional;

			if(scope.headOptional){
				scope.setHeadOptionalFun={
					checkArray:scope.headOptional.selectOptions,
					minOptionalNum:scope.headOptional.selectOptions.cancelSelectNum || 5,
					returnHead:function(obj){
						var _headArray = [];
						for(var i =0;i<obj.length;i++){
							if(obj[i].checkFlag == true){
								_headArray.push(obj[i]);
							}
						}
						return _headArray;
					},
					isSelectAllHeadItems:function(bool){
						for(var i=0;i<this.checkArray.length;i++){
							if(bool == false && i<this.minOptionalNum){
								this.checkArray[i].checkFlag = !bool;
							}else{
								this.checkArray[i].checkFlag=bool;
							}
					},
					selectItem:function(index){
						this.checkArray[index].checkFlag = !this.checkArray[index].checkFlag;
					},
					ensureSelect:function(){
						scope.tableConfigs.head = this.returnHead(this.checkArray);	
					}
				}
				scope.tableConfigs.head = scope.setHeadOptionalFun.returnHead(scope.headOptional.selectOptions)
			}
			var computeFun={
				wordLength:7,
				keyMinWidth:55,
				keyMaxWidth:200,
				screenMaxKeyLength:13,
				stableFlagLength:function(){
					var _l=0,_sFlag = scope.tableConfigs.stableFlag;
					for(var key in _sFlag){
						if(_sFlag[key] == true){
							if(key == 'status'){

								_l=_l+80;
							}else{
								_l=_l+40;
							}
							
						}else if(typeof(_sFlag[key])=="object"){
							for(var i=0;i<_sFlag[key].length;i++){
								_sFlag[key][i].width = this.getLengthPX(_sFlag[key][i].name)+25;
								_l = _l+_sFlag[key][i].width +10;
							}
							//_l = _l+_sFlag[key].length*80 默认宽度80
						}
					}
					return _l;s
				},
				getLengthPX:function(str){
					if(!str || typeof(str) !=='string') return 0;
					var l = str.length;
					var blen =0;
					for(var i=0;i<l;i++){
						if((str.charCodeAt(i) & 0xff00) !=0){
							blen++;
						}
						blen++；
					}
					return blen = this.wordLength;
				},
				getAutoWidth:function(item,head){
					initTableWidth = elm[0].firstChild.clientWidth;
					var maxAutoWidth = initTableWidth - this.stableFlagLength() -40 - head.length*10;
					var _total =0,_width=[];
					if(item && item.length>0){
						for(var i=0;i<item.length;i++){
							for(var j=0;j<head.length;j++){
								if(i==0){
									_width[j]=this.getLengthPX(item[i][head[j].key])
								}else{
									var _w = this.getLengthPX(item[i][head[j].key])
									_width[j] = _width[j]>_w?_width[j] :_w;
								}
							}
						}
					}else{
						for(var j=0;j<head.length;j++){
							_width[j] = this.keyMinWidth;
						}
					}

					for(var i=0;i< _width.length;i++){
						_width[i] = (_width[i]<this.keyMinWidth?this.keyMinWidth:_width[i]<this.keyMinWidth?_width[i]:this.keyMaxWidth)+'px'
						_total = _total+parseInt(_width[i]);
					}

					if(_width.length>=this.screenMaxKeyLength && _total>initTableWidth){
						scope.overflowCss = {
							"overflow-x":'scroll'
						};
						scope.newestTableWidth = (_total+this.stableFlagLength()+270)+'px';
					}else{
						scope.overflowCss={
							"overflow-x":"hidden"
						}
						for(var i=0;i<_width.length;i++){
							_width[i]=Math.round(maxAutoWidth * (parseInt(_width[i])/_total))+'px';
						}
					}
					return _width;
				}
			};

			if(scope.stableFlag.checkbox){
				scope.selectObj = {
					allSelecteFlag:false,
					checkArray:[],
					selectAll:function(){
						var _element='';
						for(var i=0;i<this.checkArray.length;i++){
							_element = "#item"+i;
							this.checkArray[i]=this.allSelecteFlag;
							if($(_element).data('disable') == true &&this.allSelecteFlag){
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
			};
			scope.$watch('tableData',function(n,o){
				if(n==null) return;
				if(scope.stableFlag.checkbox){
					scope.selectObj.allSelecteFlag = false;
					scope.selectObj.checkArray = scope.tableConfigs.checkbox.checkArray
				}
				if(_beginWidth == 0){
					scope.autoColumnWidth = computeFun.getAutoWidth(n,scope.tableConfigs.head);
				}
			});
			angular.element($window).bind('resize',function(){
				if(_beginWidth == 0){
					scope.$apply(function(){
						scope.autoColumnWidth=computeFun.getAutoWidth(scope.tableData,scope.tableConfigs.head);
					});
				}
			});
			scope.$watch("tableConfigs.head",function(n,o){
				_beginWidth =0;
				scope.newestTableWidth =null;
				scope.overflowCss ={
					"overflow-x":"hidden"
				};
				if(scope.headOptional){
					scope.autoColumnWidth=computeFun.getAutoWidth(scope.tableData,scope.tableConfigs.head)
				}
			});

			var _beginWidth = 0,_beginPosition=0,_beginTableWidth=0;
			var _moveIndex;
			scope.resizeFlag = true;
			scope.beginResizeTable = function(event,index){
				scope.resizeFlag = false;
				_moveIndex = index;
				_beginPosition = event.clientX;
				_beginWidth = parseInt(scope.autoColumnWidth[_moveIndex]);
				_beginTableWidth = computeFun.stableFlagLength()+150;
				for(var i=0;i<scope.autoColumnWidth.length;i++){
					_beginTableWidth +=(parseInt(scope.autoColumnWidth[i])+10);
				}
			};
			scope.endResizeTable = function(){
				scope.resizeFlag = true;
			}
			scope.resizeTable = function(event){
				//计算移动距离
				var _distance = event.clientX = _beginPosition;
				//限制tbale 列最小宽度
				if(_distance < 0&&(_beginWidth+_distance)<=40){
					scope.resizeFlag = true;
				}else{
					//相应列宽变化
					scope.autoColumnWidth[_moveIndex] = (_beginWidth+_distance)+'px';
				}

				//计算新表格宽度
				var _updateWidth = _beginTableWidth + _distance;
				if(_updateWidth > initTableWidth){
					scope.newestTableWidth = _updateWidth +'px';
					scope.overflowCss = {
						"overflow-x":"scroll"
					}
				}else{
					scope.newestTableWidth = initTableWidth+"px";
					scope.overflowCss={
						"overflow-x":"hidden"
					};
				}
			};
			scope.preventPropagation = function(event){
				event.stopPropagation();
			}
		}
	}
}]);