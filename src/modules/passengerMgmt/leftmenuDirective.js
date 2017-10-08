// function leftMenu(){
// 	return {
// 		restrict:'E',
// 		templateUrl:'xx',
// 		bindToController:true,
// 		replace:true,
// 		controller:function($state,$scope,$location,$timeout,$window,$rootScope){
// 			$scope.$on('resetMenuData',function(e,d){
// 				$scope = angular.extend($scope,d)
// 			});

// 			$scope.stateGo = function(state,menuItem){
// 				if(menuItem && menuItem.target === '_blank'){
// 					return false;
// 				}

// 				if(state === undefined || state === ''){
// 					return
// 				}
// 				if(state ==='building'){
// 					alertify.alert('building')
// 				}

// 				$window.location.href=state;
// 			}
// 		}
// 	}
// }