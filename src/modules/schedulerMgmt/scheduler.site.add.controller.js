
'use strict'
angular.module('schedulerAddSiteControllerModule',[])
.controller('schedulerAddSiteController',function(schedulerHttpService,utilFactory,$stateParams,$state,$scope){
	var _accountId = $stateParams.accountId || utilFactory.getAccountId();
	var _secondCompanyId = $stateParams.secondCompanyId || utilFactory.getSecondCompanyId();

	if(_accountId && _secondCompanyId){
		$scope.params = {
			'secondCompanyId':_secondCompanyId,
			'schedulerId':_accountId
		}
	}else{
		$state.go('scheduler.site')
	}

	var map = new AMap.Map('container', {
		zoom: 10,
		center: [121.339766,31.196099]
	});

	AMapUI.loadUI(['misc/PoiPicker','overlay/SimpleInfoWindow'], function(PoiPicker,SimpleInfoWindow) {
		var poiPicker = new PoiPicker({city:'021',input: 'pickerInput',});
		// init poiPicker
		poiPickerReady(poiPicker,SimpleInfoWindow);
	});

	function poiPickerReady(poiPicker,SimpleInfoWindow) {
		window.poiPicker = poiPicker;
		var marker = new AMap.Marker({
			map:map,
			draggable: true,
			icon: new AMap.Icon({	
			size: new AMap.Size(44, 44),  //图标大小
			image: "../images/pin.jpg",
			imageOffset: new AMap.Pixel(7, 11)
		}),
		position: map.getCenter()
	});




// <div class="addSiteForm-wrapper">
//     <div class="title">新建站点</div>
//     <div class="content">
//       <div class="form-item"><input type="text" name="name"  id="name"placeholder="站点名称"></div>
//       <div class="form-item"><input type="text" name="address" id="address" placeholder="站点地址"></div>
//       <div class="form-item"><select name="stationType" id="stationType"><option>站点属性</option><option>上行</option><option>下行</option></select></div>
//       <div class="form-item"><button>取消</button><button class="confirmBtn">确认</button></div>
//     </div>
//   </div>




	var _formContentTmpl = '<div class="form-item"><input type="text" name="name"  id="name"placeholder="站点名称"></div>'+
		'<div class="form-item"><input type="text" name="address" id="address" placeholder="站点地址"></div>'+
		'<div class="form-item"><select name="stationType" id="stationType"><option>站点属性</option><option>上行</option><option>下行</option></select></div>'+
		'<div class="form-item"><button>取消</button><button class="confirmBtn" >确认</button></div>';
	var title = '新建站点';

	var infoWindow = new AMap.InfoWindow({
		isCustom: true,  //使用自定义窗体
		content: createInfoWindow(title,content),
		//  offset: new AMap.Pixel(140,200)
		offset: new AMap.Pixel(140, 200),
		// infoTitle:'新增站点',
		// infoBody:_tml
	});

	function createInfoWindow (){

		var addSitePop = document.createElement("div");
		addSitePop.className = "addSiteForm-wrapper";

		//可以通过下面的方式修改自定义窗体的宽高
		//info.style.width = "400px";
		// 定义顶部标题
		var titleWrapper = document.createElement("div");
		// var closeX = document.createElement("img");
		titleWrapper.className = "title";
		titleWrapper.innerHTML = title;
		// closeX.src = "http://webapi.amap.com/images/close2.gif";
		//closeX.onclick = closeInfoWindow;
	       // top.appendChild(closeX);
		addSitePop.appendChild(titleWrapper);


		// 定义底部内容
		var formContent = document.createElement("div");
		formContent.className = "content";
		formContent.innerHTML = _formContentTmpl;
		// bottom.style.position = 'relative';
		// bottom.style.top = '0px';
		// bottom.style.margin = '0 auto';
		// var sharp = document.createElement("img");
		// sharp.src = "http://webapi.amap.com/images/sharp.png";
		// bottom.appendChild(sharp);
		addSitePop.appendChild(formContent);
		return addSitePop;
	}

	marker.setMap(map);//设置拖拽默认点位置
	infoWindow.setMap(map);
	
	poiPicker.on('poiPicked', function(poiResult) {
	var source = poiResult.source,poi = poiResult.item,
	info = {
		source: source,
		id: poi.id,
		name: poi.name,
		location: poi.location.toString(),
		address: poi.address
	};

	marker.setMap(map);
	marker.setPosition(poi.location);
	infoWindow.open(map, marker.getPosition());
      });

      poiPicker.onCityReady(function() {
	//poiPicker.suggest('美食');
      });

      AMap.event.addListener(marker, 'click', function() {//点击时，显示弹出窗体
	$('.addSiteForm-wrapper').css('display','block');
	infoWindow.open(map, marker.getPosition());
      });

      AMap.event.addListener(marker, 'dragstart', function() {//拖拽时移除弹出窗体
	infoWindow.close();
      });


     $(document).on('click', '.confirmBtn', function(event) {

        event.stopPropagation();
        var _name = $("#name").val()
        var _address = $("#address").val()
        var _stationType =  $("#stationType").val() =="上行"?"AM":"PM";

        if(_name!=''&&_address!=''&&_stationType!='' &&_stationType!='站点属性'){
	var _gps = marker.getPosition().lng+","+marker.getPosition().lat;
	var _params = {
	'name':_name,
	'address':_address,
	'stationType':_stationType,
	'gps':_gps,
	"secondCompanyId":$scope.params.secondCompanyId,
		"schedulerId":$scope.params.schedulerId
	}
		schedulerHttpService.addSite(_params).then(function(result){
	var responseData = result.data;
	if(!responseData.error){
	alertify.alert('新增成功！',function(){
	$state.go('scheduler.site',{'schedulerId':_params.schedulerId,'secondCompanyId':_params.secondCompanyId})
	})
	}else{
	switch(responseData.error.statusCode){
	case '500':alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
	break;
	case '400':alertify.alert(responseData.error.message+":"+responseData.error.statusCode)
	break;
	}
	}
	},function(errorResult){
	alertify.alert(errorResult.error.message)
	});

        }else{
	alertify.alert('请输入必填项');
        }
      });
    }






   // AMapUI.loadUI(['misc/MarkerList', 'overlay/SimpleMarker', 'overlay/SimpleInfoWindow','misc/PositionPicker'],
   //      function(MarkerList, SimpleMarker, SimpleInfoWindow,PositionPicker) {
   //  	    var map = new AMap.Map('container', {
   //	zoom: 9,
   //	center: [121.339766,31.196099]
   //	});
  
	
   //	var $ = MarkerList.utils.$;

   //	var defaultIconStyle = 'red', //默认的图标样式
   //	hoverIconStyle = 'green', //鼠标hover时的样式
   //	selectedIconStyle = 'purple' //选中时的图标样式
   //	;

   //	var markerList = new MarkerList({
   //	map: map,
   //	//ListElement对应的父节点或者ID
   //	listContainer: "myList", //document.getElementById("myList"),
   //	//选中后显示

   //	//从数据中读取位置, 返回lngLat
   //	getPosition: function(item) {
   //	return item.location;
   //	},
   //	//数据ID，如果不提供，默认使用数组索引，即index
   //	getDataId: function(item, index) {

   //	return item.id;
   //	},
   //	getInfoWindow: function(data, context, recycledInfoWindow) {

   //	if (recycledInfoWindow) {

   //	recycledInfoWindow.setInfoTitle(data.name);
   //	recycledInfoWindow.setInfoBody(data.address);

   //	return recycledInfoWindow;
   //	}

   //	return new SimpleInfoWindow({
   //	infoTitle: data.name,
   //	infoBody: data.address,
   //	offset: new AMap.Pixel(0, -37)
   //	});
   //	},
   //	//构造marker用的options对象, content和title支持模板，也可以是函数，返回marker实例，或者返回options对象
   //	getMarker: function(data, context, recycledMarker) {

   //	var label = String.fromCharCode('A'.charCodeAt(0) + context.index);

   //	if (recycledMarker) {
   //	recycledMarker.setIconLabel(label);
   //	return;
   //	}

   //	return new SimpleMarker({
   //	containerClassNames: 'my-marker',
   //	iconStyle: defaultIconStyle,
   //	iconLabel: label
   //	});
   //	},
   //	//构造列表元素，与getMarker类似，可以是函数，返回一个dom元素，或者模板 html string
   //	getListElement: function(data, context, recycledListElement) {

   //	var label = String.fromCharCode('A'.charCodeAt(0) + context.index);

   //	//使用模板创建
   //	var innerHTML = MarkerList.utils.template(
   //	'<% if(data.photos && data.photos[0]) { %>' +
   //	// '<div class="poi-imgbox">' +
   //	// '    <span class="poi-img" style="background-image:url(<%- data.photos[0].url %>)"></span>' +
   //	// '</div>' +
   //	'<% } %>' +
   //	'<div class="poi-info-left">' +
   //	'    <h3 class="poi-title">' +
   //	'        <%- label %>. <%- data.name %>' +
   //	'    </h3>' +
   //	'    <div class="poi-info">' +
   //	'        <p class="poi-addr">地址：<%- data.address %></p>' +
   //	// '<% if(data.tel ){ %>' +
   //	// // '        <p class="poi-addr">电话：<%- data.tel %></p>' +
   //	// '<% } %>' +
   //	'    </div>' +
   //	'</div>' +
   //	'<div class="clear"></div>', {
   //	data: data,
   //	label: label
   //	});

   //	if (recycledListElement) {
   //	recycledListElement.innerHTML = innerHTML;
   //	return recycledListElement;
   //	}

   //	return '<li class="poibox">' +
   //	innerHTML +
   //	'</li>';
   //	},
   //	//列表节点上监听的事件
   //	listElementEvents: ['click', 'mouseenter', 'mouseleave'],
   //	//marker上监听的事件
   //	markerEvents: ['click', 'mouseover', 'mouseout'],
   //	//makeSelectedEvents:false,
   //	selectedClassNames: 'selected',
   //	autoSetFitView: true
   //          });

   //          window.markerList = markerList;





   //      var marker = new AMap.Marker({ //添加自定义点标记
   //          map: map,
   //          position: map.getCenter(), //基点位置
   //          offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
   //          draggable: true,  //是否可拖动
   //          content: '<div class="marker-route marker-marker-bus-from"></div>'   //自定义点标记覆盖物内容
   //      });


   //      var infoWindow = new SimpleInfoWindow({

   //          infoTitle:  '<strong>新增站点</strong>',
   //          infoBody:  '<div><input type="text" name="name"  id="name"placeholder="站点名称"></div>'+
   //	'<div><input type="text" name="address" id="address" placeholder="站点地址"></div>'+
   //	'<div><select name="stationType" id="stationType"><option>站点属性</option><option>上行</option><option>下行</option></select></div>'+
   //	'<div><button>取消</button><button class="confirmBtn">确认</button></div>' ,

   //          //基点指向marker的头部位置
   //          offset: new AMap.Pixel(0, -31)
   //      });

   //  //     infoWindow.get$InfoBody().on('click', '.confirmBtn', function(event) {

   //  //         //阻止冒泡
   //  //         event.stopPropagation();
 		// 	// var _name = $("#name").val()
   //  //         var _address = $("#address").val()
   //  //         var _stationType =  $("#stationType").val()
   //  //         if(_name!=''&&_address!=''&&_stationType!='' &&_stationType!='站点属性'){
			// 	// var _params = {
			//  //    	'name':_name,
			//  //  		'address':_address,
			//  //  		'stationType':_stationType,
			//  //  		'gps':marker.getPosition(),
			//  //  		"secondCompanyID":'12',
			// 	// 	"schedulerID":'22'
			//  //    }
			//  //    schedulerHttpService.addSite(_params).then(function(result){

			//  //    })
   //  //         }else{
   //  //         	alertify.alert('请输入必填项');
   //  //         	//alert(_name+"x"+_address+"x"+_stationType)
   //  //         }
   //  //     });

   //      function openInfoWin() {
   //          infoWindow.open(map, marker.getPosition());
   //      }

   //      AMap.event.addListener(marker, 'click', function() {
   //          openInfoWin();
   //      });



	  //   // AMap.plugin(["AMap.PlaceSearch"],function(){

		 //   //  var placeSearch = new AMap.PlaceSearch({
		 //   //      map: map,
		 //   //      city: "021" //城市
		 //   //  });  //构造地点查询类

		 //   //  AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
		 //   //  function select(e) {
		 //   //      placeSearch.setCity(e.poi.adcode);
		 //   //      placeSearch.search(e.poi.name);  //关键字查询查询
		 //   //  }
	  //   // });

   //      AMap.plugin(["AMap.PlaceSearch"], function() {

   //	var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
   //	pageSize: 5,
   //	pageIndex: 1,
   //	map: map,
   //	extensions: 'all',
   //	city: "021" //城市
   //	});
   //	var inited = false;

   //	var $keywords = $('#keywords');

   //	function goPage(page) {

   //	//设置当前页
   //	placeSearch.setPageIndex(page);
   //	//关键字查询
   //	placeSearch.search($keywords.val(), function(status, result) {

   //	if (status !== 'complete') {
   //	alert('返回数据出错!');
   //	}
   //	//render当前页的数据
   //	markerList.render(result.poiList.pois);
   //	});
   //	}

   //             // goPage(1);

   //	$keywords.on('keypress', function(e) {
   //	if (e.which === 13) {
   //	inited = false;
   //	goPage(1);
   //	}
   //	});
   //      });

   //          markerList.on('selectedChanged', function(event, info) {

   //	if (info.selected) {

   //	if (info.selected.marker) {
   //	//更新为选中样式
   //	info.selected.marker.setIconStyle(selectedIconStyle);
   //	}
   //	}

   //	if (info.unSelected && info.unSelected.marker) {
   //	//更新为默认样式
   //	info.unSelected.marker.setIconStyle(defaultIconStyle);
   //	}
   //          });


   //          markerList.on('listElementMouseenter markerMouseover', function(event, record) {

   //	if (record && record.marker) {
   //	//非选中的id
   //	if (!this.isSelectedDataId(record.id)) {
   //	//设置为hover样式
   //	record.marker.setIconStyle(hoverIconStyle);
   //	//this.closeInfoWindow();
   //	}
   //	}
   //          });

   //          markerList.on('listElementMouseleave markerMouseout', function(event, record) {

   //	if (record && record.marker) {

   //	if (!this.isSelectedDataId(record.id)) {
   //	//恢复默认样式
   //	record.marker.setIconStyle(defaultIconStyle);
   //	}
   //	}
   //          });


   //      });

})