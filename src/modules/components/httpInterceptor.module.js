

angular.module('httpInterceptorModule',[]).factory('httpInterceptor',function(localStorageFactory,$q, $injector) {  
        var httpInterceptor = {
            'request':function(request){
                request.headers.ApplicationId ='BACKGROUND';
                if(localStorageFactory.getObject('account',null)){
                    request.headers.Authorization ='Bearer '+localStorageFactory.getObject('account',null).accessToken;
                    request.headers.operateAccountId =localStorageFactory.getObject('account',null).accountId;
                }

                return request; 
            },
            'responseError' : function(response) {  
                console.log('http response')
                console.log(1,response)
                if (response.status === 401) { 
                    alertify.alert('可能遇到问题，请稍候再试:401')
                    return $q.reject(response);  
                } else if (response.status === 404) {  
                   alertify.alert('可能遇到问题，请稍候再试:404') 
                    return $q.reject(response);  
                } else if (response.status === 500){
                   alertify.alert('可能遇到问题，请稍候再试:500') 
                    return $q.reject(response);  
                } else if(response.status === 504 ){
                    alertify.alert('响应超时，请重试:504')
                    return $q.reject(response);
                } else if(response.status === 505){
                    alertify.alert('HTTP error:505')
                    return $q.reject(response)
                }
            },  
            'response' : function(response) {  
                return response;  
            }  
        }  
        return httpInterceptor;  
    }  );  
