angular.module('cloudDataControllerModule',[]).controller('cloudDataController',function($scope,utilFactory){

	var map = new AMap.Map("container", {
		resizeEnable: true,
		center: [121.339766,31.196099],//地图中心点
		zoom: 12 //地图显示的缩放级别
	});		
	addCloudLayer();  //叠加云数据图层

	function addCloudLayer() {

		var searchOptions = {
			 filter: 'user_company_id:' + utilFactory.getSecondCompanyId()
		};
		var marker;
		var icon;
 		var center = [121.339766,31.196099]
		AMap.service(["AMap.CloudDataSearch"], function() {
			
				var search = new AMap.CloudDataSearch('598a6898305a2a4ed76a78e8', searchOptions); 
				setInterval(randerData,10000)
				function randerData(){
					map.clearMap();
		          	search.searchNearBy(center, 40000, function(status,result){
		          		//console.log('xxxsafsfdasssdfasdf')
		          					if(marker != null){
						marker = null;
						icon = null;
					}
		        	   if(result.datas){
		        		    for (var i = 0; i < result.datas.length; i++) {
		        				icon = new AMap.Icon({
		        				    image: '../images/bus.png',
		        				    size: new AMap.Size(50, 50),
		        				    imageSize: new AMap.Size(50, 50)
		        				});
								var infoWindow = new AMap.InfoWindow({
									isCustom: true,  //使用自定义窗体
						       		offset: new AMap.Pixel(10, -15)
					       		});
		        				marker = new AMap.Marker({
		        					icon: icon,
		        					position: [result.datas[i]._location.lng,result.datas[i]._location.lat],
		        					offset: new AMap.Pixel(-12,-12),
		        					zIndex: 101,
		        					title: result.datas[i]._name,
		        					extData:{'bus_plate':result.datas[i].bus_plate,'_name':result.datas[i]._name,'_address':result.datas[i]._address,'id':result.datas[i]._id,'area_id':result.datas[i].area_id,'gps':result.datas[i]._location,'ismetro':result.datas[i].ismetro},
		        					map: map
		        				});


		        				marker.on('click', markerClick);
		       					marker.emit('click', {target: marker});
		       					function markerClick(e) {
							       infoWindow.setContent(createInfoWindow(e.target.G.extData.bus_plate,e.target.G.extData._name,e.target.G.extData._address));
							       infoWindow.open(map, e.target.getPosition());
		    					}
		        		    }
		        	   	}
		        	});
		        }
		});


 // AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {
 //        if (!PathSimplifier.supportCanvas) {
 //            alert('当前环境不支持 Canvas！');
 //            return;
 //        }

 //        var emptyLineStyle = {
 //            lineWidth: 0,
 //            fillStyle: null,
 //            strokeStyle: null,
 //            borderStyle: null
 //        };

 //        var pathSimplifierIns = new PathSimplifier({
 //            zIndex: 100,
 //            //autoSetFitView:false,
 //            map: map, //所属的地图实例

 //            getPath: function(pathData, pathIndex) {

 //                return pathData.path;
 //            },
 //            getHoverTitle: function(pathData, pathIndex, pointIndex) {

 //                return null;
 //            },
 //            renderOptions: {
 //                //将点、线相关的style全部置emptyLineStyle
 //                pathLineStyle: emptyLineStyle,
 //                pathLineSelectedStyle: emptyLineStyle,
 //                pathLineHoverStyle: emptyLineStyle,
 //                keyPointStyle: emptyLineStyle,
 //                startPointStyle: emptyLineStyle,
 //                endPointStyle: emptyLineStyle,
 //                keyPointHoverStyle: emptyLineStyle,
 //                keyPointOnSelectedPathLineStyle: emptyLineStyle
 //            }
 //        });

 //        window.pathSimplifierIns = pathSimplifierIns;
 //        var path = [[116.41, 39.90],
 //                [113.96, 40.55],
 //                [111.48, 41.14],
 //                [108.95, 41.67],
 //                [106.38, 42.15],
 //                [103.77, 42.57],
 //                [101.14, 42.93],
 //                [98.47, 43.23],
 //                [95.78, 43.47],
 //                [93.07, 43.64],
 //                [90.35, 43.75],
 //                [87.62, 43.79]]

 //        var currentPath = [];
 //        setInterval(function(){
 //        	for(var i=0;i<path.length-i)
 //        },1000)
 //        for(var i =0;i<path.length;path++){

 //        }
 //        pathSimplifierIns.setData([{
 //            name: '测试',
 //            path: [
                
 //            ]
 //        }]);

 //        //initRoutesContainer(d);

 //        function onload() {
 //            pathSimplifierIns.renderLater();
 //        }

 //        function onerror(e) {
 //            alert('图片加载失败！');
 //        }

 //        var navg1 = pathSimplifierIns.createPathNavigator(0, {
 //            loop: true,
 //            speed: 1000000,
 //            pathNavigatorStyle: {
 //                width: 50,
 //                height: 50,
 //                //使用图片
 //                content: PathSimplifier.Render.Canvas.getImageContent('../images/bus.png', onload, onerror),
 //                strokeStyle: null,
 //                fillStyle: null,
 //                //经过路径的样式
 //                pathLinePassedStyle: {
 //                    lineWidth: 0,
 //                    strokeStyle: 'none',
 //                    dirArrowStyle: {
 //                        stepSpace: 1,
 //                        strokeStyle: 'none'
 //                    }
 //                }
 //            }
 //        });

 //        navg1.start();

 //    });


		function createInfoWindow (bus_plate,_name,_address){
			var addSitePop = document.createElement("div"),formContent = document.createElement("div");
			formContent.innerHTML = '<div class="busInfo-wrapper container-shadow-border">'
									+'<p>'+_address+'</p>'
									+'<p>司机姓名：'+_name+'</p>'
									+'<p>驾照信息：'+bus_plate+'</p>'
									+'</div>';
			addSitePop.appendChild(formContent);
			return addSitePop;
		}

    }    

    
    AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {

        var zoomCtrl1 = new BasicControl.Zoom({
                theme: 'light',
                // position: 'tl'

            })
        map.addControl(zoomCtrl1);
    });
})