'use strict';

/**
 * Created by yangdeng on 16/4/22.
 */
(function(){

	var imgs = [{
		id: 0,
		image: '../../../images/com.common.nav/cy.jpg',
		text: '青虬卧雪藏雅志，\n玄鹤排云引诗情，\n仙乡久在红尘里，\n唯余一山月色清。'
	}, {
		id: 1,
		image: '../../../images/com.common.nav/dxc.jpg',
		text: '十里娉婷芙蕖路，\n大侠英名已作古，\n竹林侧畔风云起，\n稻花香里亦江湖。'
	}, {
		id: 2,
		image: '../../../images/com.common.nav/qx.jpg',
		text: '七秀剑舞动四方，\n水云仙乐演宫商，\n莲步笙歌相知起，\n一船星月坐听香。'
	}, {
		id: 3,
		image: '../../../images/com.common.nav/whjqg.jpg',
		text: '翠阁青峰鸣花鹿，\n疏星郎月照水云，\n此去人间不知岁，\n未解桃源何处寻。'
	}, {
		id: 4,
		image: '../../../images/com.common.nav/yz.jpg',
		text: '江头飞花入幽梦，\n柳梢明月碎客心，\n独行闹市无人问，\n青灯剑影响素琴。'
	}];

	angular.module('imgConstant',[])
		.constant('imgs',imgs);


})();
