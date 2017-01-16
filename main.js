////////////////////////////
// Angular App
////////////////////////////

var app = angular.module('RouteRouting', ['ngRoute'])
app.config(($routeProvider) => {
	$routeProvider
		.when('/route66', {
			controller: 'Route66Ctrl',
			templateUrl: 'partials/route66.html'
		})
		.when('/blueridgeparkway', {
			controller: 'BlueRidgeCtrl',
			templateUrl: 'partials/blueridgeparkway.html'
		})
})

app.controller('Route66Ctrl', function($scope) {
	$scope.highwayName = "Route 66"
	$scope.highwayDescription = 'U.S. Route 66 (US 66 or Route 66), also known as the Will Rogers Highway, the Main Street of America or the Mother Road, was one of the original highways within the U.S. Highway System. US 66 was established on November 11, 1926, with road signs erected the following year.[4] The highway, which became one of the most famous roads in America, originally ran from Chicago, Illinois, through Missouri, Kansas, Oklahoma, Texas, New Mexico, and Arizona before ending at Santa Monica, California, covering a total of 2,448 miles (3,940 km).[5] It was recognized in popular culture by both the hit song "(Get Your Kicks on) Route 66" and the Route 66 television show in the 1960s.'
})

app.controller('BlueRidgeCtrl', function($scope) {
	$scope.highwayName = "Blue Ridge Parkway"
	$scope.highwayDescription = 'The Blue Ridge Parkway is a National Parkway and All-American Road in the United States, noted for its scenic beauty. The parkway, which is America\'s longest linear park,[3] runs for 469 miles (755 km) through 29 Virginia and North Carolina counties, mostly along the Blue Ridge, a major mountain chain that is part of the Appalachian Mountains. Its southern terminus is on the boundary between Great Smoky Mountains National Park and the Cherokee Indian Reservation in North Carolina, from which it travels north to Shenandoah National Park in Virginia and offers access to the Skyline Drive. While the two roads join together end-to-end, they are separate and distinct entities, built as two different projects and managed by two different National Park Service units. The Blue Ridge Parkway was built to connect Shenandoah National Park to the Great Smoky Mountains National Park.'
})
