angular.module('schedulerAddSiteControllerModule',[])
.controller('schedulerAddSiteController',function(schedulerHttpService,utilFactory,getRefreshTokenFacotry,TOKEN_ERROR,$stateParams,$state,$scope){
	var _accountId = $stateParams.accountId || utilFactory.getAccountId();
	var _secondCompanyId = $stateParams.secondCompanyId || utilFactory.getSecondCompanyId();
	var map = new AMap.Map('container', { zoom: 10, center: [121.339766,31.196099] });

	$scope.goBack = function(){
		$state.go('admin.scheduler.site')
	}
	var marker = '';
	if(_accountId && _secondCompanyId){
		$scope.params = { 'secondCompanyId':_secondCompanyId, 'schedulerId':_accountId }
		$scope.breadcrumbText={ 'lv1':'站点管理', 'lv2':'新增站点' }
	}else{
		$state.go('amdin.scheduler.site')
	}

	AMapUI.loadUI(['misc/PoiPicker','overlay/SimpleInfoWindow'], function(PoiPicker,SimpleInfoWindow) {
		var poiPicker = new PoiPicker({city:'021',input: 'pickerInput',});
		poiPickerReady(poiPicker,SimpleInfoWindow);
	});
    AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {

        var zoomCtrl1 = new BasicControl.Zoom({
                theme: 'light'
            })

        map.addControl(zoomCtrl1);

    });

	function poiPickerReady(poiPicker,SimpleInfoWindow) {
		window.poiPicker = poiPicker;
		marker = new AMap.Marker({
			map:map,
			draggable: true,
			icon: new AMap.Icon({		
				size: new AMap.Size(44, 44),  //图标大小
				image: "../images/pin.jpg",
				imageOffset: new AMap.Pixel(7, 11)
			}),
			position: map.getCenter()
		});

		var _formContentTmpl = '<div class="form-item"><input type="text" name="name"  id="name"placeholder="站点名称 (必填)"></div>'
							 + '<div class="form-item"><input type="text" name="address" id="address" placeholder="站点地址"></div>'
							 + '<div class="form-item"><select style = "padding:1px;"name="stationType" id="stationType" required><option value="" disabled selected>站点属性 (必填)</option><option value="AM">上行</option><option value="PM">下行</option></select></div>';
		var title = '新增站点';
		var infoWindow = new AMap.InfoWindow({
			isCustom: true,  //使用自定义窗体
			content: createInfoWindow(title,content),
			offset: new AMap.Pixel(140, 200)
			//autoMove:true
		});


		function createInfoWindow (){
			var addSitePop = document.createElement("div"),titleWrapper = document.createElement("div"),formContent = document.createElement("div");
			addSitePop.className = "addSiteForm-wrapper";
			titleWrapper.className = "title";
			titleWrapper.innerHTML = title;
			addSitePop.appendChild(titleWrapper);
			formContent.className = "content";
			formContent.innerHTML = _formContentTmpl;
			
			var addBtnWrapper = document.createElement('div');
			addBtnWrapper.className = "form-item";
			
			
			var cancelBtn = document.createElement('button');
			cancelBtn.innerHTML = '取消';
			cancelBtn.onclick = function(){
				$state.go('admin.scheduler.site')
			}

			var confirmBtn = document.createElement('button');
			confirmBtn.className = 'confirmBtn';
			confirmBtn.innerHTML = "确定";
			confirmBtn.onclick = confirmBtnFn;

			addBtnWrapper.appendChild(cancelBtn);
			addBtnWrapper.appendChild(confirmBtn);

			formContent.appendChild(addBtnWrapper);
			addSitePop.appendChild(formContent);
			return addSitePop;
		}

		function confirmBtnFn(){
			$scope.httpFlag = true;
			$(".confirmBtn").attr({"disabled":"disabled"});
			var _name = $("#name").val(), _address = $("#address").val(), _stationType =  $("#stationType").val();

			if(_name!=''&&_stationType!=null && $scope.httpFlag){
				$scope.httpFlag = false;
				var _gps = marker.getPosition().lng+","+marker.getPosition().lat;
				var _params = {
					'gps':_gps,
					'name':_name,
					'address':_address,
					'stationType':_stationType,
					'secondCompanyId':$scope.params.secondCompanyId,
					'schedulerId':$scope.params.schedulerId
				}
				schedulerHttpService.addSite(_params).then(function(result){
					var responseData = result.data;
					if(!responseData.error){
						alertify.alert('新增成功！',function(){
							$state.go('admin.scheduler.site',{'schedulerId':_params.schedulerId,'secondCompanyId':_params.secondCompanyId})
						});
						$(".confirmBtn").removeAttr("disabled");
						$scope.httpFlag = true;
					}else{

						if(responseData.error.statusCode == TOKEN_ERROR.STATUS_CODE_0200102.code){
							getRefreshTokenFacotry.getRefreshToken().then(function(){
								var _tokenRes = result.data;
								console.log('refreshToken result')
								console.log(1,_tokenRes)
								if(!_tokenRes.error){
									var _rewriteToken = localStorageFactory.getObject('account',null);
									_rewriteToken.accessToken = _tokenRes.accessToken;
									_rewriteToken.refreshToken = _tokenRes.refreshToken;
									localStorageFactory.setObject('account',_rewriteToken);
									scope.$broadcast('refreshAPI')
									$scope.httpFlag = true;
								}else{
									utilFactory.checkErrorCode(_tokenRes.error.statusCode)
									$scope.httpFlag = true;
								}
							});
						}else{
							utilFactory.checkErrorCode(responseData.error.statusCode)
							$scope.httpFlag = true;
						}
						$(".confirmBtn").removeAttr("disabled");
					}
				},function(errorResult){
					utilFactory.checkErrorCode(responseData.error.statusCode);
					$scope.httpFlag = true;	
				});
			}else{
				alertify.alert('请输入必填项',function(){
					$(".confirmBtn").removeAttr("disabled");
				});
			}
		}


		marker.setMap(map);//设置拖拽默认点位置
		infoWindow.setMap(map);
		infoWindow.open(map, marker.getPosition()); // show popup by default

		poiPicker.on('poiPicked', function(poiResult) {
			var source = poiResult.source,poi = poiResult.item,
			info = {
				source: source,
				id: poi.id,
				name: poi.name,
				location: poi.location.toString(),
				address: poi.address
			};
			
			var _gps = info.location.split(",");
			//map = null
			//var map = new AMap.Map('container', { zoom: 10, center: [_gps[0],_gps[1]] });
			marker.setMap(map);
            infoWindow.setMap(map);
            marker.setPosition(poi.location);
            infoWindow.setPosition(poi.location);
            map.setCenter(poi.location)
            infoWindow.open(map, marker.getPosition()); // show popup by default
            $(document).ready(function(){
				setTimeout(function(){
					$('.addSiteForm-wrapper').css('display','block');
				},400)
			})
			AMap.event.addListener(marker, 'dragging', function() {//拖拽时移除弹出窗体
				//infoWindow.close();
				//console.log(marker.getPosition()+"marker.getPosition()")
				infoWindow.open(map, marker.getPosition());
				$(document).ready(function(){
					$('.addSiteForm-wrapper').css('display','block');
				})
			});

			AMap.event.addListener(marker, 'dragend', function() {//拖拽时移除弹出窗体
				//infoWindow.close();
				// console.log(marker.getPosition()+"marker.getPosition()")
				infoWindow.open(map, marker.getPosition());
				$(document).ready(function(){
					$('.addSiteForm-wrapper').css('display','block');
				})
			});
		});

		poiPicker.onCityReady(function() {
			$(document).ready(function(){
				setTimeout(function(){
				$('.addSiteForm-wrapper').css('display','block');
				},200)
			})
		});
		AMap.event.addListener(marker, 'dragging', function() {//拖拽时移除弹出窗体
			//infoWindow.close();
			//console.log(marker.getPosition()+"marker.getPosition()")
			infoWindow.open(map, marker.getPosition());
			$(document).ready(function(){
				$('.addSiteForm-wrapper').css('display','block');
			})
		});

		AMap.event.addListener(marker, 'dragend', function() {//拖拽时移除弹出窗体
			//infoWindow.close();
			// console.log(marker.getPosition()+"marker.getPosition()")
			infoWindow.open(map, marker.getPosition());
			$(document).ready(function(){
				$('.addSiteForm-wrapper').css('display','block');
			})
		});

	};

	$(document).ready(function(){
		setTimeout(function(){
			$('.addSiteForm-wrapper').css('display','block');
		},200)
	})

});