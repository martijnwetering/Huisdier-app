
'use strict';

angular.module('angularApp')
	.controller('MainCtrl', function ($scope) {
    	
 	})
	.controller('MapCtrl', ['$scope', function ($scope) {

	  	angular.extend($scope, {
			center: {
				latitude: 52.381048 , // initial map center latitude
				longitude: 4.634857, // initial map center longitude
			},
			markers: [], // an array of markers,
			zoom: 13 // the zoom level
		});
	  
  	}]);


