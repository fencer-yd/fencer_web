'use strict';

/**
 * @ngdoc overview
 * @name fencerApp
 * @description
 * # fencerApp
 *
 * Main module of the application.
 */
(function(){

	angular
		.module('fencerApp', [
			'ngAnimate',
			'ngAria',
			'ngCookies',
			'ngMessages',
			'ngResource',
			'ngSanitize',
			'ngTouch',
			'ui.router',
			'ui.bootstrap',
			'toastr',
			'toaster',

			'configApp',
			'commonNavApp'
		]);

})();

