/**
 * 获取目标元素的样式
 * @param  {Object HTMLElement} el 目标元素
 * @return {Object}    目标元素的所有样式
 */
function _getStyle(el) {
	let style = window.getComputedStyle ? 
		window.getComputedStyle(el, null) :
		el.currentStyle;
	return style;
}

export function borderWidth(el) {
	let rect = el.getBoundingClientRect();
	return rect.width;
}

export function paddingWidth(el) {
	return el.clientWidth;
}

export function contentWidth(el) {
	let paddingWidth = el.clientWidth;
	let paddingLeft = parseInt(_getStyle(el)['paddingLeft'], 10),
		paddingRight = parseInt(_getStyle(el)['paddingRight'], 10);

	return paddingWidth - paddingLeft - paddingRight;
}
