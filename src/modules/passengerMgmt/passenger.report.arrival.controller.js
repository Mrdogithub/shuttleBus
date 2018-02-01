angular.module('passengerReportArrivalControllerModule',[]).controller('passengerReportArrivalController',function(passengerHttpService,utilFactory,$scope){
	
	$scope.submitOnProgress = false;
	var currentMonth = utilFactory.getCurrentMonth(new Date().getTime())
	$("#selectMonth").val(currentMonth);
	$scope.params = {
		'selectMonth':$("#selectMonth").val(),
		'routeTemplateName':'',
		// 'routeTemplate':'',
		// 'routeTemplateId':'',
		'vehiclePlate':'',
		'vehicleId':'',
		'vehicleList':''
	}

	$('.datepicker').datepicker({ 
	    language: "zh-CN",
		format: 'yyyy/mm',  
		startView: 1,
	    minViewMode: 1
	});

	var dateArray = $("#selectMonth").val().split("/");
	var countDay = new Date(dateArray[0],dateArray[1],0);
	console.log(countDay.getDate());
	var currentDate = countDay.getDate();
	var beginTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00');
	var endTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);

	// $("#noData").hide();

	$scope.importData = function(){

		passengerHttpService.downloadArrivalTime({'beginTime':beginTime,'endTime':endTime}).then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			var _result = data.data;
			var decodedString = String.fromCharCode.apply(null, new Uint8Array(_result));
			console.log(1,decodedString);

			var _decodedString = JSON.stringify(decodedString)
			// localStorage.setItem('key', JSON.stringify(_decodedString));
			var _obj = JSON.parse(_decodedString || '');

			var _errorStr = 'error';
			if(_obj.indexOf(_errorStr) >= 0) {
				console.log('error');
				alertify.alert('暂无报表信息',function(){
				});
				return
			}
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '线路到达时间数据报表');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})


	}
	var _baseParams = {
		'beginTime':beginTime,
		'endTime':endTime,
		// 'beginTime':"1514131200000",
		// 'endTime':"1514217600000",
		'vehicleInfoFlag':"Y"
	};

	passengerHttpService.getRouteTemplateList(_baseParams).then(function(result){
		var _resultJSON = result.data;
		if(!_resultJSON.error){
			if(_resultJSON.value == null) {
				// $scope.params.routeTemplate = '';
				// $scope.params.vehicles = '';
				// alertify.alert('请选择线路',function(){
				// 	return
				// });
			} else {
				var _targetObj = _resultJSON.value;
				$scope.params.routeTemplate = _targetObj? _targetObj: '';
				// for(var i=0;i<_targetObj.length;i++){
				// 	$scope.params.vehicles = _targetObj[i].vehicleList.length? _targetObj[i].vehicleList: '';
				// 	console.log("_targetObj[i].vehicleList"+_targetObj[i].vehicleList);
				// }
				$scope.$watch('params.routeTemplateObj',function(newRoute, oldRoute){ 
					if (newRoute === oldRoute) { 
						return
					} else {
						
						var _routeTemplateList = $scope.params.routeTemplate;
						console.log(1,_routeTemplateList);
						var _selectRouteId = $scope.params.routeTemplateObj.routeTemplateId;
						console.log("12121212121212");	

						var _vehicleList = [];
						for (var i = 0; i < _routeTemplateList.length; i++) {
							var compareRouteId = _routeTemplateList[i].routeTemplateId;
							if (compareRouteId == _selectRouteId) {
								_vehicleList.push(_routeTemplateList[i].vehicleList);
								console.log(1,_vehicleList);
							} 
						}
						// sort vehicleList by vehicleId
						var _newVehicleList = _vehicleList[0].sort(function(a,b){  
				         	return a.vehicleId - b.vehicleId;  
				        });  
				        console.log(_newVehicleList);
						var newArr = [_vehicleList[0][0]];
						for(var i=0; i<_newVehicleList.length; i++){
						       if(_newVehicleList[i].vehicleId !== newArr[newArr.length-1].vehicleId){//获取没重复的最右一值放入新数组
						           	newArr.push(_newVehicleList[i]);
						       } 
			                
						   	console.log(newArr);
						}
						$scope.params.vehicles = newArr;
						console.log(1,$scope.params.vehicles);

					}  	
							
				});
			

			}
			
		}else{
			utilFactory.checkErrorCode(_resultJSON.error.statusCode);
		}
	})

	
	$scope.$watch('params.selectMonth',function(newValue, oldValue){ 
		if (newValue === oldValue) { 
			return
		} else {
			dateArray = $("#selectMonth").val().split("/");
			countDay = new Date(dateArray[0],dateArray[1],0);
			currentDate = countDay.getDate();
			beginTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00');
			// console.log(beginTime);
			endTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);
			// console.log(endTime);
			var _baseParams = {
				'beginTime':beginTime,
				'endTime':endTime,
				'routeTemplateType':"AM",
				'vehicleInfoFlag':"Y"
			};

			passengerHttpService.getRouteTemplateList(_baseParams).then(function(result){
				var _resultJSON = result.data;
				if(!_resultJSON.error){
					var _targetObj = _resultJSON.value;
					$scope.params.routeTemplate = _targetObj? _targetObj: '';
				}else{
					utilFactory.checkErrorCode(_resultJSON.error.statusCode)
				}
			})

			$scope.importData = function(){

				passengerHttpService.downloadArrivalTime({'beginTime':beginTime,'endTime':endTime}).then(function(data){
					var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
					var objectUrl = URL.createObjectURL(blob);
					var a = document.createElement('a');
					document.body.appendChild(a);
					var _result = data.data;
					var decodedString = String.fromCharCode.apply(null, new Uint8Array(_result));
					console.log(1,decodedString);

					var _decodedString = JSON.stringify(decodedString)
					// localStorage.setItem('key', JSON.stringify(_decodedString));
					var _obj = JSON.parse(_decodedString || '');

					var _errorStr = 'error';
					if(_obj.indexOf(_errorStr) >= 0) {
						console.log('error');
					
						alertify.alert('暂无报表信息',function(){
						});
						return
					}
					a.setAttribute('style', 'display:none');
					a.setAttribute('href', objectUrl);
					a.setAttribute('download', '线路到达时间数据报表');
					a.click();
					URL.revokeObjectURL(objectUrl);
				})

			}

		}  	

		// $scope.$watch('$viewContentLoaded',function(event){ 
	 //  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
		// });

	});

	$scope.$watch('params.routeTemplateObj',function(newRoute, oldRoute){ 
		if (newRoute === oldRoute) { 
			return
		} else {
			
			var _routeTemplateList = $scope.params.routeTemplate;
			console.log(1,_routeTemplateList);
			var _selectRouteId = $scope.params.routeTemplateObj.routeTemplateId;
			console.log("12121212121212");	
			var _vehicleList = [];
			for (var i = 0; i < _routeTemplateList.length; i++) {
				var compareRouteId = _routeTemplateList[i].routeTemplateId;
				if (compareRouteId == _selectRouteId) {
					_vehicleList.push(_routeTemplateList[i].vehicleList);
					console.log(1,_vehicleList);
				} 
			}
			 
			var _newVehicleList = _vehicleList[0].sort(function(a,b){  
	         	return a.vehicleId-b.vehicleId;  
	        });  
	        console.log(_newVehicleList);
			var newArr = [_vehicleList[0][0]];
			for(var i=0; i<_newVehicleList.length; i++){
			       if(_newVehicleList[i].vehicleId !== newArr[newArr.length-1].vehicleId){//获取没重复的最右一值放入新数组
			           	newArr.push(_newVehicleList[i]);
			       } 
                
			   	console.log(newArr);
			}
			$scope.params.vehicles = newArr;
			console.log(1,$scope.params.vehicles);

		}  	
		
				
	});
	$scope.arrivalSubmit = function(formValidateIsInvalid){
		// dateArray = $("#selectMonth").val().split("/");

		dateArray = $("#selectMonth").val().split("/");
		countDay = new Date(dateArray[0],dateArray[1],0);
		currentDate = countDay.getDate();
		beginTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00');
		endTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);

		if(formValidateIsInvalid){		
			return utilFactory.setDirty($scope.formValidate);
		}

		if(!$scope.params.selectMonth){
			alertify.alert('请选择月份',function(){
			});
			return
		}

		if(!$scope.params.routeTemplateObj){
			alertify.alert('请选择线路',function(){
			});
			return
		}

		if(!$scope.params.vehicleObj){
			alertify.alert('请选择车辆',function(){
			});
			return
		}
		// $("#noData").hide();

		

		// display scatter plot
		var myChart = echarts.init(document.getElementById('main'));

		var allData = [];
		var preData = [];
		var date = [];

		var time = [];
		var singelDay = [];
		var singelTime = [];
		var _y = [];
		var _mockData = [];
		var option = null;

		var options = {
			  year: 'numeric', month: 'numeric', day: 'numeric',
			  hour: 'numeric', minute: 'numeric', second: 'numeric',
			  hour12: false,
			  timeZone: 'Asia/Shanghai' 
		};

		var _baseParams = {
			'beginTime':beginTime,
			'endTime':endTime,
			'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId,
			'vehicleId':$scope.params.vehicleObj.vehicleId,
			'routeTemplateType':"AM",
			'vehicleInfoFlag':"Y"
		};

		passengerHttpService.getArrivalTime(_baseParams).then(function(result){
			var _resultJSON = result.data;
			if(!_resultJSON.error){
				var arrivalData = _resultJSON;

				if (arrivalData.value == null) {
					alertify.alert('该车辆暂无排班',function(){
						$("#noData").show();
						myChart.dispose(document.getElementById('main'));
						return
					});				
				}

				for(i=0; i<arrivalData.value.length; i++) {
					if (arrivalData.value[i].vehicleList) {
						(_mockData).push(arrivalData);
					} else {
						alertify.alert('该车辆暂无到达时间',function(){
							$("#noData").show();
							myChart.dispose(document.getElementById('main'));
							return
						});
					}
					
				}
				
				console.log(1,_mockData);
				var vehicleArr = (_mockData[0]).value[0].vehicleList;
				console.log(1,vehicleArr);		
				for(var i=vehicleArr.length-1;i>=0;i--){ 
					if(vehicleArr[i].vehicleActualEndTime == null) {
						vehicleArr.splice(i,1);
						console.log(vehicleArr);
					}
				}
				if(vehicleArr.length == 0) {
					alertify.alert('该车辆暂无到达时间',function(){
						$("#noData").show();
						myChart.dispose(document.getElementById('main'));
						return
					});
				} else {
					$("#noData").hide();
					for(var j=0;j<currentDate;j++) {
						var currentDay = j+1;
						console.log(currentDay);
						date.push(currentDay);

						for(var i=0;i<vehicleArr.length;i++){
							var _vehicleActualArr = [];
							_vehicleActualArr.push(vehicleArr[i].vehicleActualEndTime);
							
							var _date = new Intl.DateTimeFormat('zh-cn', options).format(vehicleArr[i].vehicleActualEndTime).split(' ')[0];
							var _datePre = new Intl.DateTimeFormat('zh-cn', options).format(vehicleArr[i].vehicleEndTime).split(' ')[0];
							var _singelDay = new Intl.DateTimeFormat('zh-cn', options).format(vehicleArr[i].vehicleActualEndTime).split(' ')[0].split('/')[2];
							var _time =  utilFactory.getTimestamp(vehicleArr[i].vehicleActualEndTime);
							var _singelTime = utilFactory.getTimestamp(vehicleArr[i].vehicleActualEndTime) - utilFactory.getTimestamp(_date+ ' 00:00')
							var _preTime = utilFactory.getTimestamp(vehicleArr[i].vehicleEndTime) - utilFactory.getTimestamp(_datePre+ ' 00:00')
							console.log("_preTime"+_preTime);

							singelDay.push(_singelDay);
							singelTime.push(_singelTime);
							time.push(_time);
							_y.push([[vehicleArr[i].vehicleActualEndTime]])
							
							allData.push([_singelDay,_singelTime]);
							preData.push([_singelDay,_preTime]);	
						}		
							
					}
					option = {
						// noDataLoadingOption: {
	     //                    text: '暂无数据',
	     //                    effect: 'bubble',
	     //                    effectOption: {
	     //                        effect: {
	     //                            n: 0
	     //                        }
	     //                    }
						// },
					    title : {
					        text: '线路月度到达时间分布图',
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    tooltip : {
					        trigger: 'item',
					        showDelay : 0,
					        formatter : function (params) {
					        	console.log(1,params)
					        	var _date = utilFactory.getTimestamp($scope.params.selectMonth + '/'+ params.data[0]);

						        if (params.value.length > 1) {
						            return  utilFactory.getLocalTime(_date).split(' ')[0] +'<br/>到达时间' +  utilFactory.getCurrentTime(1512057600000+params.data[1])
						        } else {
						        	// var aveData = Math.floor(params.value);
						            return params.name + ' : '
						            + utilFactory.getCurrentTime(1512057600000+aveData) +'<br/>';
						        }
					        }
					    },
				        // axisPointer:{
				        //     show: true,
				        //     type : 'cross',
				        //     lineStyle: {
				        //         type : 'dashed',
				        //         width : 1
				        //     }
				        // },
					    xAxis : [
					        {
					            type : 'category',
					            name:'日期',
					            scale:true,
					            // axisLabel : {
					            //     formatter: function(params){
					            //     	return new Intl.DateTimeFormat('zh-cn').format(params)
					            //     }
					            // },
					            data: date,
					            splitLine: {
					                lineStyle: {
					                    type: 'dashed'
					                }
					            }
					        }
					    ],
					    yAxis : [
					    	{
					            type : 'time',
					            name:'时间点',
					            scale:true,
					           	data: singelTime,
					           	axisLabel: {
						            formatter: function (singelTime, index) {
									    // 格式化成月/日，只在第一个刻度显示年份
									    var date = new Date(1512057600000 + singelTime);
									    var minute = date.getMinutes() > 9 && date.getMinutes() || ('0' + date.getMinutes());
									    console.log(date);
									    var texts = [(date.getHours()), minute];
									    // if (index === 0) {
									    //     texts.unshift(date.getYear());
									    // }
									    return texts.join(':');
									}
						        },
					            splitLine: {
					                show: false
					            }

					        }
					    ],
					    series : [
							{
								name:'',
								type:'scatter',
								data:allData,
								markLine:{
						            lineStyle: {
						                normal: {
						                    type: 'dashed'
						                }
						            }
					        	}
							},

					        {
					            name:'预计到达时间',
					            type:'line',
					            lineStyle: {
					                type : 'dashed',
					                width : 0.5
					            },
					            data:preData,
					            // data:[[1, 40380000], [3, 40380000+10*60*1000],[4, 40380000+20*60*1000],[5, 40380000+10*60*1000],[6, 40380000+10*60*1000]],
					        },
							
					    ]
					};
					myChart.setOption(option)	
					} 

				// console.log("date"+date)
		
			} else{
				utilFactory.checkErrorCode(_resultJSON.error.statusCode)
			}
		});

	}
})