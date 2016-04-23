'use strict';

/**
 * @ngdoc overview
 * @name headerDirective
 * @description 导航栏
 * # commonNavMain
 *
 * Created by yangdeng on 16/4/22.
 */
(function () {

	var aboutModalCtrl = function ($uibModalInstance) {
		var _self = this;

		/**
		 * @description 关闭弹层
		 */
		_self.close = function () {
			$uibModalInstance.dismiss('cancel');
		}

	};

	aboutModalCtrl.$inject = ['$uibModalInstance'];

	var headerCtrl = function ($timeout, toaster, $uibModal) {
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
		_self.chooseNav = function (e, type) {
			e.stopPropagation();
			_self.isShowNavR = false;
			switch (type) {
				case 'home':
					toaster.warning('别着急', '建设中.....');
					break;
				case 'history':
					toaster.warning('别着急', '建设中.....');
					break;
				case 'product':
					toaster.warning('别着急', '建设中.....');
					break;
				case 'about':
					_self.aboutModal = $uibModal.open({
						animation: true,
						templateUrl: '../../../views/com.common.nav/modal/about.modal.html',
						controller: 'aboutModalCtrl',
						controllerAs: 'about',
						size: 'sm',
						keyboard:true
					});
					break;
			}
		};
	};

	headerCtrl.$inject = ['$timeout', 'toaster', '$uibModal'];

	var header = function () {

		return {
			restrict: 'A',
			templateUrl: 'views/com.common.nav/header.html',
			controller: headerCtrl,
			controllerAs: 'head'
		};

	};

	header.$inject = [];

	angular.module('headerDirective', [])
		.directive('header', header)
		.controller('aboutModalCtrl',aboutModalCtrl);

})();