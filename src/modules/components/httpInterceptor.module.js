angular.module('httpInterceptorModule',[])
.factory('httpInterceptor',function(localStorageFactory,$q, $injector) {  
	var httpInterceptor = {
		'request':function(request){

            console.log(1,request)
            console.log()
            var _isGaode = request.url.indexOf('http://yuntuapi.amap.com/datasearch/')

            if(_isGaode == 0){
                return request;
            }else{
                request.headers.ApplicationId ='BACKGROUND';
                request.headers['Application-Id'] = 'ED8D2C72-628A-47A6-9893-AF0B1151A8D3';
                if(localStorageFactory.getObject('account',null)){
                    request.headers.Authorization ='Bearer '+localStorageFactory.getObject('account',null).accessToken;
                    request.headers.operateAccountId =localStorageFactory.getObject('account',null).accountId;
                }
            }
	
            
            return request; 
        },
        'responseError' : function(response) {  
            console.log('http response')
            console.log(1,response)
            if (response.status === 401) { 
				alertify.alert('可能遇到问题,请稍候再试:401',function(){})
				return $q.reject(response);  
            } else if (response.status === 404) {  
               alertify.alert('可能遇到问题,请稍候再试:404',function(){}) 
				return $q.reject(response);  
            } else if (response.status === 500){
               alertify.alert('可能遇到问题,请稍候再试:500',function(){}) 
				return $q.reject(response);  
            } else if(response.status === 504 ){
				alertify.alert('响应超时,请重试:504',function(){})
				return $q.reject(response);
            } else if(response.status === 505){
				alertify.alert('HTTP error:505',function(){})
				return $q.reject(response)
            } else if(response.status === 400){
                alertify.alert('可能遇到问题,请稍候再试:400',function(){}) 
                return $q.reject(response)
            } else if(response.status === 403){
                alertify.alert('无权限访问:403',function(){}) 
            } else if(response.status){
                alertify.alert('网络异常,请稍候再试',function(){}) 
            }

        },  
        'response' : function(response) {  
            return response;  
        }  
    }  
    return httpInterceptor;  
});  
