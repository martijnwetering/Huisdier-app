
'use strict';

angular.module('angularApp')
	.controller('MainCtrl', function ($scope, $modal) {
    	$scope.modal = {content: 'Hello Modal', saved: false};
	  $scope.viaService = function() {
	    // do something
	    var modal = $modal({
	      template: 'modal.html',
	      show: true,
	      backdrop: 'static',
	      scope: $scope
	    });
	  }
	  $scope.parentController = function(dismiss) {
	    console.warn(arguments);
	    // do something
	    dismiss();
	  }

	  $('#map-canvas').css('left', '0px');
 	})
 	
 	.controller('SearchCtrl', function ($scope) {

 		$('#map-canvas').css('left', '400px');
 	});


