import {box} from '../src/smart-box.js';

// var item1 = document.querySelector('.content-item1');
// var item1 = document.documentElement;
var item1 = document.body;
// 
var contentWidth = box.getContentWidth(item1)
var paddingWidth = box.getPaddingWidth(item1)
var borderWidth = box.getBorderWidth(item1)
console.log(contentWidth,paddingWidth,borderWidth)

var contentHeight = box.getContentHeight(item1)
var paddingHeight = box.getPaddingHeight(item1)
var borderHeight = box.getBorderHeight(item1)
console.log(contentHeight,paddingHeight,borderHeight)
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
// 
// var de = document.documentElement;
// console.log(de.clientWidth, de.clientHeight)
// // var de = document.documentElement;
// console.log(window.innerWidth, window.innerHeight)
// var db = document.body;
// console.log(db.clientWidth, db.clientHeight)