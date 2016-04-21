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

	var commonNavMainCtrl = function ($timeout, commonFullpageConfig, toaster) {

		var _self = this;

		$timeout(function () {
			$('#my_nav').fullpage(commonFullpageConfig.config);
		});

		/**
		 * @description 右边导航toogle变化
		 * @param e
		 */
		_self.navRToogle = function (e) {
			e.stopPropagation();
			_self.isShowNavR = (_self.isShowNavR) ? false : true;
		};

		_self.chooseNav = function (e) {
			e.stopPropagation();
			_self.isShowNavR = false;
			toaster.warning('别着急','建设中.....')
		}

	};

	commonNavMainCtrl.$inject = ['$timeout', 'commonFullpageConfig', 'toaster'];

	angular.module('commonNavMain', [])
		.controller('commonNavMainCtrl', commonNavMainCtrl);

})();