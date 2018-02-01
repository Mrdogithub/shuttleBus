 angular.module('passengerReportStationControllerModule',[])
.controller('passengerReportStationController',function(passengerHttpService,utilFactory,$scope){

	var currentMonth = utilFactory.getCurrentMonth(new Date().getTime());
	$("#selectMonth").val(currentMonth);
	$scope.params = {
		'selectMonth':$("#selectMonth").val(),
		'routeTemplateName':'',
		'vehicleObj':'',
		'vehiclePlate':'',
		'vehicleId':'',
		'newBeginTime':'',
		'newEndTime':''
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


	var _baseParams = {
		'beginTime':beginTime,
		'endTime':endTime,
		// 'vehicleInfoFlag':"Y"
	};

	passengerHttpService.getRouteTemplateList(_baseParams).then(function(result){
		var _resultJSON = result.data;
		if(!_resultJSON.error){
			if(_resultJSON.value == null) {
				// alertify.alert('请选择线路',function(){
				// 	return
				// });
			} else {
				var _targetObj = _resultJSON.value;
				$scope.params.routeTemplate = _targetObj? _targetObj: '';
			}
			
		}else{
			utilFactory.checkErrorCode(_resultJSON.error.statusCode);
		}
	})

	$scope.importData = function(){

		if(!$scope.params.routeTemplateObj){
			alertify.alert('请选择线路',function(){
			});
			return
		}
		console.log($scope.params.routeTemplateObj.routeTemplateId);
		var _params = {
			'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId,
			'routeTemplateName':$scope.params.routeTemplateObj.routeTemplateName,
			'downloadMonth':dateArray[1],
			'beginTime':beginTime,
			'endTime':endTime,
			'routeType':"AM"
		}		
		passengerHttpService.downloadRouteStationList(_params).then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			var _result = data.data;
			var decodedString = String.fromCharCode.apply(null, new Uint8Array(_result));
			console.log(1,decodedString);

			var _decodedString = JSON.stringify(decodedString)
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
			a.setAttribute('download', '班车站点数据报表');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})

	}

	$scope.$watch('params.selectMonth',function(newValue, oldValue){ 
		if (newValue === oldValue) { 
			return
		} else {


			dateArray = $("#selectMonth").val().split("/");
			countDay = new Date(dateArray[0],dateArray[1],0);
			currentDate = countDay.getDate();
			$scope.params.newBeginTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00');
			// beginTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00');
			// console.log(beginTime);
			$scope.params.newEndTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);
			// console.log(endTime);
			var _baseParams = {
				'beginTime':$scope.params.newBeginTime,
				'endTime':$scope.params.newEndTime,
				// 'routeTemplateType':"AM",
				// 'vehicleInfoFlag':"Y"
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

				if(!$scope.params.routeTemplateObj){
					alertify.alert('请选择线路',function(){
					});
					return
				}
				console.log($scope.params.routeTemplateObj.routeTemplateId);
				var _params = {
					'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId,
					'routeTemplateName':$scope.params.routeTemplateObj.routeTemplateName,
					'downloadMonth':dateArray[1],
					'beginTime':$scope.params.newBeginTime,
					'endTime':$scope.params.newEndTime,
					'routeType':"AM"
				}		
				passengerHttpService.downloadRouteStationList(_params).then(function(data){
					var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
					var objectUrl = URL.createObjectURL(blob);
					var a = document.createElement('a');
					document.body.appendChild(a);
					var _result = data.data;
					var decodedString = String.fromCharCode.apply(null, new Uint8Array(_result));
					console.log(1,decodedString);

					var _decodedString = JSON.stringify(decodedString)
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
					a.setAttribute('download', '班车站点数据报表');
					a.click();
					URL.revokeObjectURL(objectUrl);
				})
			}

		}  	
	});


	$scope.$watch('params.routeTemplateObj',function(newRoute, oldRoute){ 
		if (newRoute === oldRoute) { 
			return
		} else {	
			var date = [];
			var myChart = echarts.init(document.getElementById('main'));
			var _baseParams = {
				'routeTemplateId':$scope.params.routeTemplateObj.routeTemplateId,
				'beginTime':$scope.params.newBeginTime || beginTime,
				'endTime':$scope.params.newEndTime || endTime,
				'routeType': 'AM'
			}

			for(var j=0;j<currentDate;j++) {
				var currentDay = j+1;
				console.log(currentDay);
				date.push(currentDay);
			}

			passengerHttpService.getRouteStationList(_baseParams).then(function(result){
				var _resultJSON = result.data;
				if(!_resultJSON.error){
					if(_resultJSON.value == null) {
						alertify.alert('暂无数据',function(){
							$("#noData").show();
							myChart.dispose(document.getElementById('main'));
							return
						});
					} 

					$("#noData").hide();

					var stationRecord = [];
					var stationNameList = [];
					var recordArray = [];
					var allData = [];

					var _targetObj = _resultJSON.value;
					stationRecord.push(_targetObj);
					console.log(1,stationRecord);
					console.log("12121212121212");

					for(var i = 0; i<stationRecord[0].length; i++) {
						var _stationName = stationRecord[0][i].stationName;
						var _recordArray = stationRecord[0][i].recordArray;
						stationNameList.push(_stationName);
						recordArray.push(_recordArray);
						console.log(1,stationNameList);

					}

				  	for( var i = 0; i < stationNameList.length; i++ ) {
						allData.push(
							{'name': stationNameList[i],
							'type': 'bar',
							'stack': '总量',
							label: {
				                normal: {
				                    show: true,
				                    position: 'insideBottom'
				                }
				            },
				            // 'data': [20, 3, 5, 34, 30, 30, 20,0,0,0,10,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0]
				            'data': recordArray[i]
				        })
						console.log(1,allData)
					}
					
					var option = null;

					var options = {
						year: 'numeric', month: 'numeric', day: 'numeric',
						hour: 'numeric', minute: 'numeric', second: 'numeric',
						hour12: false,
						timeZone: 'Asia/Shanghai' 
					};
					// console.log(1,stationRecord[0]);

					option = {
					    title : {
					        text: '站点月度上车人数分布图',
					    },
					    tooltip : {
					        trigger: 'axis',
					        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					        }
					    },
					    legend: {
					        data: stationNameList,
					        type: 'scroll',
    						top: 25
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    yAxis:  {
					        type: 'value'
					    },
					    xAxis: {
					        type: 'category',
					        // data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
					    	data: date
					    },
					    
					    series: allData
					};
					myChart.clear();
					myChart.setOption(option);
				

				}else{
					utilFactory.checkErrorCode(_resultJSON.error.statusCode);
				}
			})

			

		}  	
	});

})