'use strict'
angular.module('schedulerAddScheduleControllerModule',[])
.controller('schedulerAddScheduleController',function(schedulerHttpService,utilFactory,setDirty,$scope,$state,$compile){

	$scope.stepOne = true;
	$scope.stepTwo = false;
	$scope.active = true;
    $scope.submitOnProgress =  false;
	$scope.params = {
		'beginDate':'',
		'departureTime':'',
		'driverID':'',
		'endDate':'',
		'includingSaturday':'',
		'includingSunday':'',
		'routeID':'',
		'routeType':'',
		'schedulerUUID':'',
		'secondCompanyId':'',
		'vehicleID':'',

		// render select 
		'drivers':'',
		'routeTemplate':'',
		'vehicles':''	
	}

	$scope.stepOneSubmit = function(formValidateOneIsInvalid){
		if(formValidateOneIsInvalid){
			return setDirty($scope.formValidateOne);
		}
		$scope.stepOne = false;
		$scope.stepTwo = true;




		schedulerHttpService.schedulingelements().then(function(result){
			var _resultJSON = result.data;
			if(!_resultJSON.error){
				var _targetObj = _resultJSON.value;

				// set default value for select options
				$scope.params.driverObj = _targetObj.drivers[0];
				$scope.params.routeTemplateObj = _targetObj.routeTemplate[0];
				$scope.params.vehicleObj = _targetObj.vehicles[0];

				// get select value
				$scope.params.drivers = _targetObj.drivers;
				$scope.params.routeTemplate = _targetObj.routeTemplate;
				$scope.params.vehicles = _targetObj.vehicles;


				//close stepone page and show stepTwo page
				$scope.stepOne = false;
				$scope.stepTwo = true;
			}
		})

	}

	$scope.stepTwoSubmit = function(formValidateTwoIsInvalid){
		
		// 
		if(formValidateTwoIsInvalid){
			return setDirty($scope.formValidateTwo);
		}

		// Group params from step One
		var _stepOneParams = {
			'beginDate':utilFactory.getTimestamp($scope.params.beginDate),
			'endDate':utilFactory.getTimestamp($scope.params.endDate),
			'routeType':$scope.params.routeType,
			'includingSaturday':$scope.params.includingSaturday,
			'includingSunday':$scope.params.includingSunday
		}

		var _formateDepartureTime = utilFactory.getTimestamp($scope.params.departureTime) - utilFactory.getTimestamp($scope.params.beginDate);
		var _stepTwoParams = {
			'routeID':$scope.params.routeTemplateObj.routeTemplateId,
			'driverID':$scope.params.driverObj.driverId,
			'vehicleID':$scope.params.vehicleObj.vehicleID,
			'departureTime':_formateDepartureTime,
			'schedulerUUID': 0,
  			'secondCompanyId': 0,
		};

		console.log(1,_stepOneParams)
		console.log(1,_stepTwoParams)

	}

	$scope.stepTwoPre = function(){
		$scope.stepOne = true;
		$scope.stepTwo = false;
	}



	// config '发车时间'
	$scope.params.departureTime = new Date();
	$scope.ismeridian = false;
	$scope.clear = function() {
	    $scope.params.departureTime = null;
	};


});
