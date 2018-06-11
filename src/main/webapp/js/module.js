/**
 * 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'
 */
angular.module('tabshift',['ngMaterial','ngMessages']).controller('shift',function($scope)
		{
	    $scope.display={flight : false, hotel: true ,car :true};
	    angular.element( document.querySelector( '#flightbutton' )).addClass('w3-blue');
	    $scope.myDate = new Date();
	    $scope.tabevent=function(id)
	    {
	    	var flight=angular.element(document.querySelector('#flightbutton'));
	    	var hotel=angular.element(document.querySelector('#hotelbutton'));
	    	var car=angular.element(document.querySelector('#carbutton'));
	    	switch(id)
	    	{
	    	case 'flight':
	    		{
	    		$scope.display.flight=false;
	    		$scope.display.hotel=true;
	    		$scope.display.car=true;
	    		flight.addClass('w3-blue');
	    		hotel.removeClass('w3-blue');
	    		car.removeClass('w3-blue');
	    		break;
	    		}
	    	case 'hotel':
	    		{
	    		$scope.display.flight=true;
	    		$scope.display.hotel=false;
	    		$scope.display.car=true;
	    		flight.removeClass('w3-blue');
	    		hotel.addClass('w3-blue');
	    		car.removeClass('w3-blue');
	    		break;
	    		}
	    	default:
	    		{
	    		$scope.display.flight=true;
	    		$scope.display.hotel=true;
	    		$scope.display.car=false;
	    		flight.removeClass('w3-blue');
	    		hotel.removeClass('w3-blue');
	    		car.addClass('w3-blue');
	    		break;
	    		}
	    	}
	    };
	
		});
angular.module('MyApp', []).controller('AppCtrl', function() {

	  this.myDate = new Date();
	  this.isOpen = false;
	});
