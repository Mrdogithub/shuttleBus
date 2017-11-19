/**
 * @description
 * 
 *
 */
angular.module('hasPermisstionComponent',[]).directive('hasPermission',function(localStorageFactory,$state){
	return {
		restrict:"EA",
		scope:{

		},
		link:function(scope,elements,attrs){
			var permissionRolesForCurrentAccount = localStorageFactory.getObject('account',null);
			console.log(permissionRolesForCurrentAccount+"::permissionRolesForCurrentAccount")
			var permissionArray = attrs.hasPermission.split('&');

			permissionArray.map(function(item,index){
				if(	!permissionRolesForCurrentAccount[item]){
					elements.remove()
				}
			})

		
		}
	}
})	



	