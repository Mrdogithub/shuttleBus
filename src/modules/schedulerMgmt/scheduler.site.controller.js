angular.module('schedulerSiteControllerModule',[])
.controller('schedulerSiteController',function(loadData,schedulerHttpService,localStorageFactory,APISERVICEPATH,utilFactory,$state,$scope){
	
	// If data empty wil use empry page replace table.
	$scope.dataIsEmpty = false;
	if(!loadData.data.error &&(!loadData.data.value || !loadData.data.value.list.length)){
		$scope.dataIsEmpty = true;
	
	}else if(loadData.data.error){
		utilFactory.checkErrorCode(loadData.data.error.statusCode)
		
	}

	var uploadStationUrl = APISERVICEPATH.stationService+'file/'+utilFactory.getAccountId()+'/'+utilFactory.getSecondCompanyId();
	$scope.stationTemplateUrl = APISERVICEPATH.stationService+'templateFile';
	$scope.addSite = function(){
		$state.go('admin.scheduler.addSite',{'accountId':utilFactory.getAccountId(),'secondCompanyId':utilFactory.getSecondCompanyId()})
	}
	$scope.downloadTemplate = function(){

		schedulerHttpService.downloadTemplateFile().then(function(data){
			var blob = new Blob([data.data], {type: "application/vnd.ms-excel;charset=utf-8"});
			var objectUrl = URL.createObjectURL(blob);
			var a = document.createElement('a');
			document.body.appendChild(a);
			a.setAttribute('style', 'display:none');
			a.setAttribute('href', objectUrl);
			a.setAttribute('download', '站点批量导入模板');
			a.click();
			URL.revokeObjectURL(objectUrl);
		})
	}


	$scope.searchFn = function(){
		$scope.$broadcast('refreshPageList',{pageSize:'20',pageNo:'1','stationName':$scope.searchText});
	}

	$scope.selectAllStatus = false;
	$scope.pageConfigs={
		params:{
			'pageSize':'20',
			'pageNumber':'1',
			'accountId':utilFactory.getAccountId(),
			'secondCompanyId':utilFactory.getSecondCompanyId()
		},
		list:null,
		getList:function(params){
			return schedulerHttpService.getSiteList(params)
		},
		loadData:function(){},
		dataSet:function(result){
			var _result = result.value.list;
			for(var i=0;i<_result.length;i++){
				_result[i]['stationType'] =_result[i]['stationType'] == 'PM'?'下行':'上行';
			}
		}
		//extendParams:function(){}
	}

	$scope.tableConfig={
		stableFlag:{
			arrow:true,
			index:true,
			checkbox:false,
			radio:true,
			operate:[{
				name:'查看详情',
				ngIf:function(){},
				fun:function(item){
					var _params = {
						'address': item.address,
						'gps': item.gps,
						'stationName': item.stationName,
						'schedulerId': utilFactory.getAccountId(),
						'secondCompanyId': utilFactory.getSecondCompanyId(),
						'stationId': item.stationId,
						'stationType': item.stationType == '上行'?'AM':'PM'
					}

					$state.go('admin.scheduler.updateSite',_params)
				}
			},
			{
				name:'删除',
				ngIf:function(){},
				fun:function(item){
					var _params = {
						'stationId':item.stationId,
						'schedulerId':utilFactory.getAccountId()
					};
					alertify.confirm('请确认是否要删除该站点',function(){
						schedulerHttpService.deleteSiteByID(_params).then(function(result){
							var responseData = result.data;
							if(!responseData.error){
									alertify.alert('删除成功！',function(){
										$state.go('admin.scheduler.site',{},{reload:true})
									});
							}else{
								utilFactory.checkErrorCode(responseData.error.statusCode)
							}
						},function(){

						});			
					},function(){
						
					});
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
					'selfKey':{'key':'stationName','value':'站点名称'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'stationType','value':'站点类型'},
					'checkFlag':true
				},
				{
					'parentKey':'',
					'selfKey':{'key':'address','value':'地址'},
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
			url : uploadStationUrl,
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
						uploader.start();
						return false;
					};
				},

				FilesAdded: function(up, files) {
					if(up.files.length>1){
						uploader.removeFile(up.files[1].id)
						return 
					}
					plupload.each(files, function(file) {
						document.getElementById('filelist').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <span class="fa fa-close" data-id="'+file.id+'" id="removeFile"></span><b></b></div>';
					});
				},

				UploadProgress: function(up, file) {
					document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<div class="progress" style="margin-top:9px;-webkit-box-shadow:none;box-shadow:none;">'
										+'<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="'+file.percent+'" aria-valuemin="0" aria-valuemax="100" style="width:'+file.percent+'%">'
									    +	'<span class="sr-only">40% Complete (success)</span>'
									  	+'</div>'
										+'</div>';
				},
				FileUploaded:function(uploader,file,response){
					var _resultResponse = JSON.parse(response.response);
					if(!_resultResponse.error){
						    $('#importSite').modal('toggle');
						alertify.alert('上传成功',function(){
							$state.go('admin.scheduler.site',{},{reload:true})
						})
					}else{
						if(_resultResponse.error.statusCode == '0600100101'){
							alertify.alert('字段格式不正确，请修改后重新上传',function(){

							})
						}else{
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
		$scope.importSite = function(){
			$('#importSite').modal('toggle');
			if(uploader.files.length>0){
				uploader.removeFile(uploader.files[0].id);
				document.getElementById('filelist').innerHTML = '';
			}
		}
	})

})