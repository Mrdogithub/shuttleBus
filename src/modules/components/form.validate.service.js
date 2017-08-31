angular.module('formValidateSerivceModule',[])
.service('setDirty', function setDirty() {
  return function(form) {
    angular.forEach(form, function(value, key) {
      if(!/^\$/.test(key)) form[key].$setDirty()
    })
  }
})