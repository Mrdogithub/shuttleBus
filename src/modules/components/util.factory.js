angular.module('utilFactoryModule',[]).factory('utilFactory',function($window){
	var fn = {};
	
	fn.getLocalTime = function(timestamp){
		return new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
	}
 	
 	fn.getTimestamp = function(localTime){
 		return new Date(localTime).getTime()
 	}
	return fn;

});