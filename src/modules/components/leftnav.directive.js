angular.module("leftNavModule",[])
.directive('leftNavComponent',function(){
	return {
		restrict:"E",
		replace:true,
		scope:true,
		template:'<div class="left-side">'
				+	'<div class="menu-list">'
				+	'	<ul class="menu-group">'
				+	'		<li ng-repeat="menuItem in menuArray track by $index" class="menuItemTitle" data-link = "{{menuItem.title.uiSref}}"  has-permission="{{menuItem.permission}}">'
				+				'<div class="title-wrapper">'
				+       			'<img class="menu-icon" ng-src={{menuItem.title.icon}} />'
				+					'<span style = "width:70px;display:inline-block;text-align:left;">{{menuItem.title.name}}</span>'
				+				'</div>'
				+   			'<ul class="menuItemList {{menuItem.title.class}}">'
				+					'<li class="{{childMenuItem.href}}" has-permission="{{childMenuItem.permission}}" ng-repeat="childMenuItem in menuItem.menuList" ng-click="goTo(childMenuItem.uiSref,menuItem,$event)" data-link = "{{childMenuItem.uiSref}}">'
				+                    '{{childMenuItem.name}}'
				+					'</li>'
				+				'</ul>'
				+			'</li>'
				+	'	</ul>'
				+	'</div>'
				+   '</div>',
		controller:function($state,$scope,$rootScope,$location,$timeout,$window){
			// $(document).ready(function(){
			// 	if($('.menu-group > li:first-child').find('ul >li').length >1){
			// 		$('.menu-group > li:first-child').addClass('activeSelected')
			// 	}
				
			// 	$('.menuItemList > li:first-child').addClass('activeSelected');
			// 	$('.menu-group > li ul.menuItemList').css('display','none');
			// 	$('.menu-group > li:first-child ul.menuItemList').css('display','block');	
			// });

			$(document).off('click','.menuItemTitle').on('click','.menuItemTitle',function(event){
				$('.menuItemList li').removeClass('activeSelected')
				$('.menuItemTitle').removeClass('activeSelected')
				$(this).find('ul').css('display') === 'none'?$(this).find('ul').css('display','block'):$(this).find('ul').css('display','none');
				
				console.log($(this).find('ul >li').length)
				if($(this).find('ul >li').length<1){
					console.log('xxxxxx')
					$state.go($(this).data('link'));
					$('.menuItemList li').removeClass('activeSelected')
					$(this).addClass('activeSelected')
				}else{
					$('.menuItemList li').removeClass('activeSelected')
					$(this).find('ul > li:first-child').addClass('activeSelected')
					$state.go($(this).data('link'));
				}


				// if($(this).find('ul').css('display') == 'block'){
				// 	$('.menuItemList li').removeClass('activeSelected')
				// 	$(this).find('ul > li:first-child').addClass('activeSelected')
				// 	$state.go($(this).data('link'));
				// }else{
					
				// }
			})

			$scope.goTo=function(targetState,currentMenuItemObj,event){
				$('.menuItemList li').removeClass('activeSelected')
				$(event.currentTarget).addClass('activeSelected')

				if(currentMenuItemObj && currentMenuItemObj.target === '_blank'){return false;}
				if(targetState === undefined || targetState === ''){ return }
				if(targetState === 'building'){alertify.confirm('正在努力建设中...')}
				
				event.stopPropagation();
				$state.go(targetState);
			}


		$rootScope.$watch(function(){
        	return $location.path();
        },function(newValue,oldValue){
			console.log(oldValue+"oldValue")
			console.log(newValue+"newValue")
			var currentPahtArray = newValue.split('/');
			var currentActiveTab = currentPahtArray[currentPahtArray.length-1];

			var menuItemArray = $scope.menuArray;
			for(var j=0;j<menuItemArray.length;j++){
				console.log(1,menuItemArray[j])
				if(menuItemArray[j]['menuList']){
					for(var i=0;i<menuItemArray[j].menuList.length;i++){
						if(menuItemArray[j].menuList[i]['href'] === currentActiveTab){
							// console.log('currentActiveTab:'+currentActiveTab)
							// console.log(1,menuItemArray[j])
							// console.log("menuItemArray[j]['title']['class']):"+menuItemArray[j]['title']['class'])
							// console.log($('.'+menuItemArray[j]['title']['class']))
							var activeTab = menuItemArray[j]['title']['class'];
							setTimeout(function(){
								$('.'+activeTab).css('display','block')
								$('.menuItemList li').removeClass('activeSelected')
								$('.'+currentActiveTab).addClass('activeSelected')
							},200)

							return
						}
						return
					}
					return
					
				}
			}
        })
		}
	}
})