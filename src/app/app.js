import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material/angular-material.css!';

import routeConfig from './routes/ui-router';
import controller from './controllers/controller1';

angular
    .module('myModule', ['ui.router', 'ngMaterial'])
    .config(routeConfig)
    .controller('Controller', controller);