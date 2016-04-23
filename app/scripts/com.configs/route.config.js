'use strict';

/**
 *
 * @ngdoc overview
 * @name routeConfig
 * @description 路由配置
 * # routeConfig
 *
 * Created by yangdeng on 16/4/20.
 */

(function () {

	var routeConfig = function ($stateProvider, $urlRouterProvider,$locationProvider) {
		$urlRouterProvider.otherwise('/');

		$locationProvider.html5Mode(true);

		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'views/com.common.nav/main.html',
				controller: 'commonNavMainCtrl',
				controllerAs:'commonNavMain'
			});
	};

	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];

	angular.module('routeConfig', [])
		.config(routeConfig);

})();