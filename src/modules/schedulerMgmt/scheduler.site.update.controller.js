angular.module('schedulerUpdateSiteControllerModule',[])
.controller('schedulerUpdateSiteController',function(schedulerHttpService,utilFactory,TOKEN_ERROR,$stateParams,$state,$scope){

	var _accountId = $stateParams.accountId || utilFactory.getAccountId();
	var _secondCompanyId = $stateParams.secondCompanyId || utilFactory.getSecondCompanyId();
	var _accountId = $stateParams.accountId || utilFactory.getAccountId();
	var _secondCompanyId = $stateParams.secondCompanyId || utilFactory.getSecondCompanyId();
	
	$scope.goBack = function(){
		$state.go('admin.scheduler.site')
	}

	if(_accountId && _secondCompanyId){
		$scope.address=$stateParams.address  || '';
		$scope.gps=$stateParams.gps;
		$scope.stationName=$stateParams.stationName || '';
		$scope.schedulerId=_accountId;
		$scope.secondCompanyId=_secondCompanyId;
		$scope.stationId=$stateParams.stationId;
		$scope.stationType=$stateParams.stationType;
		$scope.breadcrumbText={
			'lv1':'站点管理',
			'lv2':'编辑站点'
		}
	}else{
		$state.go('admin.scheduler.site')
	}

	var map = new AMap.Map('container', { zoom: 10,center: [121.339766,31.196099] });
	var marker='';
	AMapUI.loadUI(['misc/PoiPicker','overlay/SimpleInfoWindow'], function(PoiPicker,SimpleInfoWindow) {
		var poiPicker = new PoiPicker({ city:'021', input: 'pickerInput',});
		poiPickerReady(poiPicker,SimpleInfoWindow);
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
		var _formContentTmpl = '<div class="form-item"><input type="text" placeholder="站点名称 (必填)"  name="name"  id="name" value="'
							 +  $scope.stationName+'"></div>'
							 + '<div class="form-item"><input type="text" name="address" placeholder="站点地址" id="address" value="'
							 +  $scope.address+'"></div>'
							 + '<div class="form-item"><select style="padding:1px;" name="stationType" id="stationType"><option value="AM" >上行</option><option value="PM">下行</option></select></div>';

		var title = '编辑站点';
		var infoWindow = new AMap.InfoWindow({
			isCustom: true,
			content: createInfoWindow(title),
			offset: new AMap.Pixel(140, 200),
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
			confirmBtn.className = 'updateConfirmBtn';
			confirmBtn.innerHTML = "确定";
			confirmBtn.onclick = confirmBtnFn;

			addBtnWrapper.appendChild(cancelBtn);
			addBtnWrapper.appendChild(confirmBtn);

			formContent.appendChild(addBtnWrapper);
			addSitePop.appendChild(formContent);
			return addSitePop;
		}
		
		function confirmBtnFn(){
			$(".updateConfirmBtn").attr({"disabled":"disabled"});
			event.stopPropagation();
			$scope.httpFlag = true;
			var _name = $("#name").val(), _address = $("#address").val(), _stationType =  $("#stationType").val();
			if(_name!='' && $scope.httpFlag){
				$scope.httpFlag = false;
				var _gps = marker.getPosition().lng+","+marker.getPosition().lat;
				var _params = {
					'gps':_gps,
					'name':_name,
					'address':_address,
					'stationType':_stationType,
					"secondCompanyId":$scope.secondCompanyId,
					"schedulerId":$scope.schedulerId,
					'stationId':$scope.stationId
				}

				schedulerHttpService.updateSite(_params).then(function(result){
					var responseData = result.data;
					if(!responseData.error){
						alertify.alert('更新成功！',function(){
							$state.go('admin.scheduler.site')
						})
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
								}else{
									utilFactory.checkErrorCode(_tokenRes.error.statusCode)
									$scope.httpFlag = true;
								}
							});
						}else{
							utilFactory.checkErrorCode(responseData.error.statusCode)
							$scope.httpFlag = true;
						}
						$(".updateConfirmBtn").removeAttr("disabled");
					}
				},function(errorResult){
					//utilFactory.checkErrorCode(responseData.error.statusCode)
				});
			}else{
				alertify.alert('请输入必填项',function(){
					$(".updateConfirmBtn").removeAttr("disabled");
				});
			}
		}

		marker.setMap(map);
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
			map = null
			var map = new AMap.Map('container', { zoom: 10, center: [_gps[0],_gps[1]] });
			marker.setMap(map);
            infoWindow.setMap(map);
            marker.setPosition(poi.location);
            infoWindow.setPosition(poi.location);

            infoWindow.open(map, marker.getPosition()); // show popup by default
            $(document).ready(function(){
				setTimeout(function(){
					$('.addSiteForm-wrapper').css('display','block');
				},400)
			})
		});
		// poiPicker.onCityReady(function() {});

		// AMap.event.addListener(marker, 'click', function() {//点击时，显示弹出窗体
		// 	$('.addSiteForm-wrapper').css('display','block');
		// 	infoWindow.open(map, marker.getPosition());
		// 	$(document).ready(function(){
		// 		setTimeout(function(){
		// 			$("#stationType").val($scope.stationType);
		// 		},200)
		// 	})
		// });
		$(document).ready(function(){
			setTimeout(function(){
				console.log('$scope.stationType:'+$scope.stationType)
				// $scope.stationType == '上行'
				$("#stationType").val($scope.stationType);
			},200)
		})
		AMap.event.addListener(marker, 'dragging', function() {
			//infoWindow.close();
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
		},400)
	})

})