'use strict';

/**
 * @ngdoc overview
 * @name headerDirective
 * @description 导航栏
 * # commonNavMain
 *
 * Created by yangdeng on 16/4/22.
 */
(function(){

	var headerCtrl = function($timeout,toaster){
		var _self = this;
		/**
		 * @description 右边导航toogle变化
		 * @param e
		 */
		_self.navRToogle = function (e) {
			e.stopPropagation();
			_self.isShowNavR = (_self.isShowNavR) ? false : true;
		};

		/**
		 * @description 导航点击
		 * @param e
		 */
		_self.chooseNav = function (e) {
			e.stopPropagation();
			_self.isShowNavR = false;
			toaster.warning('别着急','建设中.....');
		}
	};

	headerCtrl.$inject = ['$timeout','toaster'];

	var header = function(){

		return {
			restrict:'A',
			templateUrl:'views/com.common.nav/header.html',
			controller: headerCtrl,
			controllerAs: 'head'
		};

	};

	header.$inject = [];

	angular.module('headerDirective',[])
		.directive('header',header);

})();