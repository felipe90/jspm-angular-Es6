'use strict'

import angular_material from 'angular-material';
import mainModule from './routingApp';

angular.element(document).ready( function () {
	console.log("Bootstrap Loaded...");
	angular.bootstrap(document, [ 'mainApp' ]);
});