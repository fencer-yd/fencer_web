'use strict';

/**
 *
 * @ngdoc overview
 * @name commonFullpageConfig
 * @description 导航
 * # commonFullpageConfig
 *
 * Created by yangdeng on 16/4/20.
 */
(function(){

	var commonFullpageConfig = function(){
		return {
			config: {
				//Navigation
				menu: '#menu',
				lockAnchors: true,
				anchors: [],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['', '','',''],
				navigationColor: '#fff',
				showActiveTooltip: false,
				slidesNavigation: true,
				slidesNavPosition: 'bottom',

				//Scrolling
				css3: true,
				scrollingSpeed: 1000,
				autoScrolling: true,
				fitToSection: true,
				fitToSectionDelay: 1000,
				scrollBar: false,
				easing: 'easeInOutCubic',
				easingcss3: 'ease',
				loopBottom: false,
				loopTop: false,
				loopHorizontal: true,
				continuousVertical: false,
				normalScrollElements: '#element1, .element2',
				scrollOverflow: false,
				touchSensitivity: 15,
				normalScrollElementTouchThreshold: 5,

				//Accessibility
				keyboardScrolling: true,
				animateAnchor: true,
				recordHistory: true,

				//Design
				controlArrows: false,
				verticalCentered: true,
				resize: false,
				sectionsColor: [],
				paddingTop: '0',
				paddingBottom: '0',
				fixedElements: '.header, .footer',
				responsiveWidth: 0,
				responsiveHeight: 0,

				//Custom selectors
				sectionSelector: '.section',
				slideSelector: '.slide',

				//events
				onLeave: function (index, nextIndex, direction) {
				},
				afterLoad: function (anchorLink, index) {
				},
				afterRender: function () {
				},
				afterResize: function () {
				},
				afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
				},
				onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
				}
			}
		};
	};

	commonFullpageConfig.$inject = [];

	angular.module('commonFullpageConfig',[])
		.factory('commonFullpageConfig',commonFullpageConfig);

})();