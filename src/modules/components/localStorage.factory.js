angular.module('localStorageFactoryModule',[]).factory('localStorageFactory',function($window){
	var $$localStorage = {};
	
	$$localStorage.set = function(key, value){
		$window.localStorage[key] = value;
	};

	$$localStorage.get = function(key,defaultValue){
		return $window.localStorage[key] || defaultValue || false;
	};
	
	$$localStorage.setObject = function(key, value){
		$window.localStorage[key] = JSON.stringify(value);
	};

	$$localStorage.getObject = function(key,defaultValue){
		return $window.localStorage[key] != undefined?JSON.parse($window.localStorage[key]) : (defaultValue || false);
	};

	$$localStorage.remove = function(key){
		$window.localStorage.removeItem(key);
	};

	$$localStorage.clear = function(){
		$window.localStorage.clear();
	}

	return $$localStorage;

});