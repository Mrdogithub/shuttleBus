angular.module('listControllerModule',[]).controller('listController',function(loadData,passengerHttpService,localStorageFactory,utilFactory,APISERVICEPATH,$scope,$state,$window){

	var uploadPassengerUrl = APISERVICEPATH.passengerAccount+'batching/?affiCompanyId='+utilFactory.getSecondCompanyId()+'&affiCompanyName='+encodeURI(utilFactory.getSecondCompanyName())+'&accountId='+utilFactory.getAccountId();
	
	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	if(!loadData.data.error && !loadData.data.value ){
		$scope.dataIsEmpty = true;
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
	}

	$scope.selectAllStatus = false;
	$scope.queryByKeyObj = {
		'active':{'key':'name','value':'员工姓名'},
		'list':[{'key':'phoneNumber','value':'手机号'}]
	}

	$scope.selectKey = function(activeObj){
		$scope.queryByKeyObj.list.length = 0;
		$scope.queryByKeyObj.list.push( {'key':$scope.queryByKeyObj.active.key,'value':$scope.queryByKeyObj.active.value})
		$scope.queryByKeyObj.active.key = activeObj.key;
		$scope.queryByKeyObj.active.value = activeObj.value;

		$('.dropdown-menu').css('display','none')
	}

	$scope.showQueryKeyList = function(){
		$('.dropdown-menu').css('display','block')
	}

	$scope.searchFn = function(){
		var _searchParams = {
			'pageSize':'20',
			'pageNumber':'1',
			'pageNo': '1',
			'hrId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		}
		_searchParams[$scope.queryByKeyObj.active.key] = $scope.searchText;
		$scope.pageConfigs.getList(_searchParams);
		$scope.$broadcast('refreshPageList',_searchParams);
	}

	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'hrId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return passengerHttpService.passenger(params);
		},
		loadData:function(){
		//	console.log('load data'
		},
		dataSet:function(result){
			var _result = result.value.list;
			for(var i=0;i<_result.length;i++){
				_result[i]['status'] =_result[i]['status'] == 0?'未激活':'已激活'
			}
		}
		//extendParams:function(){}
	}



	$scope.downloadTemplate = function(){
		passengerHttpService.downloadTemplateFile().then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '乘客批量导入模板');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})
	}
	// $scope.selectAll = function(){
	// 	//$scope.tableConfig.checkbox.selectAll = true;
	// 	alertify.alert('正在建设中....')
	// 	var _selectAllStatus  = !$scope.selectAllStatus;
	// 	$scope.$broadcast('checkboxSelectAll',{'status':_selectAllStatus})
	// }

	// $scope.deletePassenger = function(){alertify.alert('正在建设中....')};

	$scope.addPassenger = function(){
		console.log('xxx')
		$state.go('admin.passenger.add',{'schedulerId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
	};

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看详情',
				ngIf:function(){
					return true
				},
				fun:function(item){
					
					var _params = {
						'secondCompanyId': item.secondCompanyId,
						'employeeId': item.employeeId,
						'name': item.name,
						'phoneNumber': item.phoneNumber,
						// 'schedulerId':  item.accountId,
						'status': item.status,
						// 'passengerId': item.accountId,
						'passengerId': item.partyId,
						'defaultRouteName': item.defautRouteName,
						'defaultStationName': item.defautStationName
					}
					console.log(1,_params);
					$state.go('admin.passenger.detail',_params);
				}
			},
			{
				name:'删除',
				ngIf:function(){
					return true
				},
				fun:function(item){
					var _params = {
						'secondCompanyId': item.secondCompanyId,
						'employeeId': item.employeeId,
						'name': item.name,
						'phoneNumber': item.phoneNumber,
						'schedulerId':  item.accountId,
						'status': item.status,
						'passengerId': item.partyId
					}
					alertify.confirm('确定删除名为"'+item.name+'"的乘客?',function(){
						passengerHttpService.deletePassengerByID(_params).then(function(result){
							var _resultData = result.data
							if(!_resultData.error){
								$state.go('admin.passenger.list',{},{reload:true})
							}else{
								utilFactory.checkErrorCode(_resultData.error.statusCode)
							}
						});
					})
				}
			}]
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
		// radioSelect:function(){},
		operateIfFlag:true,
		setHeadOptional:{
			cancelSelectNum:5,
			selectOptions:[
				{
					'parentKey':'',
					'selfKey':{'key':'name','value':'员工姓名'},
					'checkFlag':true
				},
				{
					'parentKey':'accountDTO',
					'selfKey':{'key':'phoneNumber','value':'手机号'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautStationName','value':'默认站点'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'defautRouteName','value':'默认线路'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'status','value':'激活状态'},
					'checkFlag':true
				}
			]
		}
		// changeEnable:function(item){}
	}


	$scope.$watch('$viewContentLoaded',function(event){ 
  		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1'});
	});


		$(document).ready(function(){
			var uploader = new plupload.Uploader({
			runtimes : 'html5,flash,silverlight,html4',
			browse_button : 'pickfiles', // you can pass an id...
			container: document.getElementById('container'), // ... or DOM Element itself
			url : uploadPassengerUrl,
			flash_swf_url : '../vendor/Moxie.swf',
			silverlight_xap_url : '../vendor/Moxie.xap',
			headers:{'ApplicationId':'BACKGROUND','Authorization':'Bearer '+localStorageFactory.getObject('account',null).accessToken,'operateAccountId':localStorageFactory.getObject('account',null).accountId},
			filters : {
				max_file_size : '10mb',
				mime_types: [
					{title : "Image files", extensions : "jpg,gif,png"},
					{title : "Zip files", extensions : "zip"},
					{title : "Zip files", extensions : "xls"},
					{title : "Zip files", extensions : "*"}
				]
			},

			init: {
				Init:function(){
					document.getElementById('filelist').innerHTML = '';
				},
				PostInit: function(up, files) {
					document.getElementById('filelist').innerHTML = '';
					document.getElementById('uploadfiles').onclick = function() {
						if(up.files.length == 0) {
							alertify.alert('请先选择要上传的文件',function(){
								return
							})
						}else {
							up.files[0].status = 1;
							up.start();
						}
					};
				},

				FilesAdded: function(up, files) {
					if(up.files.length>1){
						alertify.alert('只能上传一个文件', function(){
							up.removeFile(up.files[1].id)
						})
						
						return 
					} else{
						plupload.each(up.files, function(file) {
							document.getElementById('filelist').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <span class="fa fa-close" data-id="'+file.id+'" id="removeFile"></span><b></b></div>';
						});				
					}
				},

				UploadProgress: function(up, file) {
					document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<div class="progress" style="margin-top:9px;-webkit-box-shadow:none;box-shadow:none;">'
										+'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+file.percent+'" aria-valuemin="0" aria-valuemax="100" style="width:'+file.percent+'%">'
									    +	'<span class="sr-only">40% Complete (success)</span>'
									  	+'</div>'
										+'</div>';

					console.log(file.percent+"file.percent")
				},
				FileUploaded:function(uploader,file,response){
					var _resultResponse = JSON.parse(response.response);
					if(!_resultResponse.error){
						    $('#importPassengerPopUp').modal('toggle');
						alertify.alert('上传成功',function(){
							$state.go('admin.passenger.list',{},{reload:true})
						})
					} else{
						if(_resultResponse.error.statusCode === '0600900501'){
							var a = JSON.parse(_resultResponse.error.message);	
							var _name = {
								'lineNumber':'',
								'name':'员工姓名',
								'message':''
							}
							var _phone = {
								'lineNumber':'',
								'name':'手机号码',
								'message':''
							}
							for(var j=0; j<a.length; j++) {
								var curEle = a[j];
								if(a[j]['name']){
									var _lineNumber = a[j]['name']; 
									_name.lineNumber = _lineNumber.substring(0,_lineNumber.length-1);
								}
								if(a[j]['phone']){
									var _lineNumber = a[j]['phone']; 
									_phone.lineNumber = _lineNumber.substring(0,_lineNumber.length-1);
								}							
							}
							if((_name.lineNumber.length) ||(_phone.lineNumber.length)){
								_name.message = _name.name + '第'+_name.lineNumber+'行格式错误';
								_phone.message = _phone.name + '第'+_phone.lineNumber+'行格式错误';

								var _nameError = _name.lineNumber.length?_name.message+'<br>':'';
								var _phoneError = _phone.lineNumber.length?_phone.message+'<br>':'';

								alertify.alert(_nameError+_phoneError,function(){
									return 
								});
							}
						} else{
							utilFactory.checkErrorCode(_resultResponse.error.statusCode)
						}
					}
					
				}
			}
		});

		$(document).on('click','#removeFile',function(){
			uploader.removeFile($(this).data('id'));
			document.getElementById('filelist').innerHTML = '';
		})
		uploader.init();
		$scope.importPassenger = function(){
			$('#importPassengerPopUp').modal('toggle');
			if(uploader.files.length>0){
				uploader.removeFile(uploader.files[0].id);
				document.getElementById('filelist').innerHTML = '';
			}
		}
	})

})