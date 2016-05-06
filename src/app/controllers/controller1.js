/**
	page 1 controller
*/

angular.module( 'routingApp', [ 'ngMaterial' , 'ngRoute' ])
	
	.controller( 'pgControlller1' , function(){
		this.title = "Index - from controller";
	});