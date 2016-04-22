'use strict';

/**
 * @ngdoc overview
 * @name commonNavMainCtrl
 * @description 导航
 * # commonNavMain
 *
 * Created by yangdeng on 16/4/20.
 */

(function () {

	var commonNavMainCtrl = function ($timeout, commonFullpageConfig) {

		//var _self = this;

		$timeout(function () {
			$('#my_nav').fullpage(commonFullpageConfig.config);

			var colors = ["#80f", "#fc0"];

			var points = [
				"M54,271 L0,271 L0,103 L0,0 L142,0 L285,0 L285,103 L285,271 L230,271 L142,271 Z",
				"M54,271 L71,172 L0,103 L98,89 L142,0 L186,89 L285,103 L213,172 L230,271 L142,224 Z"
			];

			//var points = [
			//	'M0,0 L300,0 L300,300 L0,300 L0,0 Z',
			//	'M0,0 L200,0 L200,200 L0,200 L0,0 Z'
			//];

			animate({
				el: "path",
				easing: "easeInOutQuart",
				direction: "alternate",
				duration: 2000,
				loop: true,
				fill: colors,
				d: points
			});

		});

	};

	commonNavMainCtrl.$inject = ['$timeout', 'commonFullpageConfig'];

	angular.module('commonNavMain', [])
		.controller('commonNavMainCtrl', commonNavMainCtrl);

})();