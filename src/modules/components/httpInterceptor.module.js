

angular.module('httpInterceptorModule',[]).factory('httpInterceptor',function(localStorageFactory,$q, $injector) {  
        var httpInterceptor = {
            'request':function(request){
                if(localStorageFactory.getObject('token',null)){
                    request.headers['Authorization'] ='Bearer '+localStorageFactory.getObject('token',null).accessToken;
                }

                return request; 
            },
            'responseError' : function(response) {  
                if (response.status == 401) { 
                    alertify.alert('可能遇到问题，请稍候再试:401')
                    return $q.reject(response);  
                } else if (response.status === 404) {  
                   alertify.alert('可能遇到问题，请稍候再试:404') 
                    return $q.reject(response);  
                } else if (response.status === 500){
                   alertify.alert('可能遇到问题，请稍候再试:500') 
                    return $q.reject(response);  
                } else if(response.status == 504 ){
                    alertify.alert('响应超时，请重试:504')
                }
            },  
            'response' : function(response) {  
                return response;  
            }  
        }  
        return httpInterceptor;  
    }  );  
