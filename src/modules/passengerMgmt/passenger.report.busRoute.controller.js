angular.module('passengerReportBusRouteControllerModule',[])
.controller('passengerReportBusRouteController',function(passengerHttpService,utilFactory,$scope){

	var currentMonth = utilFactory.getCurrentMonth(new Date().getTime());
	$("#selectMonth").val(currentMonth);
	// $("#selectMonth").val("2017/12");
	$scope.params = {
		'selectMonth':$("#selectMonth").val()
	}
	var dateTime = utilFactory.getTimestamp($scope.params.selectMonth);

	// Config datepikcer 
	$('.datepicker').datepicker({ 
		language: "zh-CN",
		format: 'yyyy/mm',  
		startView: 1,
	    minViewMode: 1,
	});

	var dateArray = $("#selectMonth").val().split("/");
	var countDay = new Date(dateArray[0],dateArray[1],0);
	console.log(countDay.getDate());
	var currentDate = countDay.getDate();
	var beginTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00');
	console.log(beginTime);
	var endTime = utilFactory.getTimestamp($scope.params.selectMonth + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);
	console.log(endTime);

	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'beginTime':beginTime,
			'endTime':endTime
		},
		
		list:null,
		getList:function(params){
			return passengerHttpService.getBusRoute(params)
		},
		loadData:function(){
		},
		dataSet:function(result){
			if(result.value){
				var _data = result.value.list;
				for(var i=0;i<_data.length;i++){
					_data[i]['routeType'] =_data[i]['routeType'] == 'AM'?'上行':'下行';
				}
			}
		}
	}

	//export report
	$scope.importData = function(){

		passengerHttpService.downloadBusRoute({'beginTime':beginTime,'endTime':endTime}).then(function(data){
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

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[]
		},
		checkbox:{
			checkArray:[]
		},
		defaultValue:'——',
		defaultEmptyText:'暂无班车线路',
		operateIfFlag:false,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'routeTemplateName','value':'线路名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'routeType','value':'属性'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'dailyPassenger','value':'日均载客数'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'sumVehicleSeats','value':'总座位数'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'attendence','value':'上座率'},
					'checkFlag':true
				}
			]
		}
	}
	
	$scope.$watch('params.selectMonth',function(newValue, oldValue){ 
		if (newValue === oldValue) { 
			return
		} else {

			dateArray = $("#selectMonth").val().split("/");
			countDay = new Date(dateArray[0],dateArray[1],0);
			var currentDate = countDay.getDate();
			beginTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00');
			endTime = utilFactory.getTimestamp(newValue + '/01'+ ' 00:00')+(24*60*60*1000*currentDate);
			var params = {
				'pageSize':'20',
				'pageNumber':'1',
				'beginTime':beginTime,
				'endTime':endTime
			}
			$scope.pageConfigs.getList(params);

			$scope.$broadcast('refreshPageList',params);

			$scope.importData = function(){

				passengerHttpService.downloadBusRoute({'beginTime':beginTime,'endTime':endTime}).then(function(data){

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
	});

	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});
})