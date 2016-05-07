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

	var commonNavMainCtrl = function ($timeout, commonFullpageConfig, $scope, imgs) {

		var _self = this;

		var currIndex = 0;
		$scope.active = 0;

		var slides = $scope.slides = imgs;

		var assignNewIndexesToSlides = function (indexes) {
			for (var i = 0, l = slides.length; i < l; i++) {
				slides[i].id = indexes.pop();
			}
		};

		var generateIndexesArray = function () {
			var indexes = [];
			for (var i = 0; i < currIndex; ++i) {
				indexes[i] = i;
			}
			return shuffle(indexes);
		};

		var shuffle = function (array) {
			var tmp, current, top = array.length;

			if (top) {
				while (--top) {
					current = Math.floor(Math.random() * (top + 1));
					tmp = array[current];
					array[current] = array[top];
					array[top] = tmp;
				}
			}

			return array;
		};


		/**
		 * anonymous function - description
		 *
		 * @return {type}  description
		 */
		$scope.randomize = function () {
			var indexes = generateIndexesArray();
			assignNewIndexesToSlides(indexes);
		};

		$scope.myInterval = 5000;

		$scope.noWrapSlides = false;

		$timeout(function () {
			$('#my_nav').fullpage(commonFullpageConfig.config);
		});

	};

	commonNavMainCtrl.$inject = ['$timeout', 'commonFullpageConfig', '$scope', 'imgs'];

	angular.module('commonNavMain', [])
		.controller('commonNavMainCtrl', commonNavMainCtrl);

})();
