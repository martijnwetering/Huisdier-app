angular.module('myDirectives', []).directive('custumDirective', function() {
	return {
		restrict: 'A',
		transclude: false,
	  	template: '<marquee scrollamount="100%">Blink!</marquee>',
	  	link: function(scope, element, attrs) {
		    
	    }
	};
});
