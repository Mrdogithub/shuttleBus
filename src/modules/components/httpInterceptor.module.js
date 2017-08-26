


angular.module('httpInterceptorModule',[]).factory('httpInterceptor', [ '$q', '$injector',function($q, $injector) {  
        var httpInterceptor = {  
            'responseError' : function(response) {  
                if (response.status == 401) {  
                    // var rootScope = $injector.get('$rootScope');  
                    // var state = $injector.get('$rootScope').$state.current.name;  
                    // rootScope.stateBeforLogin = state;  
                    // rootScope.$state.go("login"); 
                    $.alert('可能遇到问题，请稍候再试:401')
                    return $q.reject(response);  
                } else if (response.status === 404) {  
                   $.alert('可能遇到问题，请稍候再试:404') 
                    return $q.reject(response);  
                } else if (response.status === 500){
                   $.alert('可能遇到问题，请稍候再试:500') 
                    return $q.reject(response);  
                }
            },  
            'response' : function(response) {  
                return response;  
            }  
        }  
        return httpInterceptor;  
    }   
]);  
