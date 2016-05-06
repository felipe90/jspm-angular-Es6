'use strict' 

import angular_material from 'github:angular/bower-material@1.0.7';
import angular_route from 'angular-route';

var app = angular.module( 'routingApp', [ 'ngMaterial' , 'ngRoute' ]);

app.config([ '$routeProvider' ,function($routeProvider) {
	$routeProvider.when( '/' , {
		"templateUrl" : "templates/index.html",
		"controller" : "pgControlller1",
	});		
	$routeProvider.when( '/page2' , {
		"templateUrl" : "templates/page2.html"
		,
	});
	$routeProvider.when( '/page3' , {
		"templateUrl" : "templates/page3.html",
	});
	$routeProvider.when( '/page4' , {
		"templateUrl" : "templates/page4.html",
	});
	$routeProvider.otherwise({
		redirectTo: '/',
		templateUrl: 'templates/index.html',
	});

}]);

app.controller('routingController', function(){
	this.title = `Routing with Angular 1.5`;
});