'use strict'
/**
 * @description
 * smsCode component works in login/forget.html and login/active.html
 *
 * invoke in html file by:<sms-code-component phone-number="phoneNumber"request-type="requestType" sleep='true'></sms-code-component>
 * @phone-number={string}:get value from parent controller
 * @request-type={string}:--
 * @sleep={booleans}: true => init component status by "获取验证码",false => init component status by "重新获取"
 *
 */
angular.module('enterSubmitModule',[]).directive('enterSubmit', function () {
    // return {
    //     restrict: 'A',
    //     // scope:true,
    //     link: function (scope, elem, attrs) {
    //         console.log('xxx submit xxxx')
    //         elem.bind('keydown keypress', function(event) {
    //               console.log('hi keydown')
    //              var code = event.keyCode || event.which;
    //              if (code === 13) {
    //                     console.log('--- enterSubmit ----')
   
    //              }
    //         });
    //     }
    // }
});