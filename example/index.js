import {box} from '../src/smart-box.js';

var item1 = document.querySelector('.content-item1');
var contentWidth = box.getContentWidth(item1)
var paddingWidth = box.getPaddingWidth(item1)
var borderWidth = box.getBorderWidth(item1)
console.log(contentWidth,paddingWidth,borderWidth)
// 
// function _getStyle(el) {
// 	var style = window.getComputedStyle ? 
// 		window.getComputedStyle(el,null) :
// 		el.currentStyle;
// 	return style;
// }


// function contentWidth(el) {
// 	var paddingWidth = el.clientWidth;
// 	var paddingLeft = parseInt(_getStyle(el)['paddingLeft'], 10),
// 		paddingRight = parseInt(_getStyle(el)['paddingRight'], 10);

// 	return paddingWidth - paddingLeft - paddingRight;
// }

// var Width = contentWidth(item1)
// console.log(Width)