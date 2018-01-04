/**
 * 获取目标元素的样式
 * @param  {Object HTMLElement} el 目标元素
 * @return {Object}    目标元素的所有样式
 */
// function _getStyle(el) {
// 	let style = window.getComputedStyle ? 
// 		window.getComputedStyle(el, null) :
// 		el.currentStyle;
// 	return style;
// }

// export function borderWidth(el) {
// 	let rect = el.getBoundingClientRect();
// 	return rect.width;
// }

// export function paddingWidth(el) {
// 	return el.clientWidth;
// }

// export function contentWidth(el) {
// 	let paddingWidth = el.clientWidth;
// 	let paddingLeft = parseInt(_getStyle(el)['paddingLeft'], 10),
// 		paddingRight = parseInt(_getStyle(el)['paddingRight'], 10);

// 	return paddingWidth - paddingLeft - paddingRight;
// }
class Width {
	getBorderWidth (el) {
		let rect = el.getBoundingClientRect();
		return rect.width;
	}

	getPaddingWidth (el) {
		// 除了 html 元素外，body 以及 body 内的所有元素，
		// 其 clientWidth 属性都是包含 padding 在内的宽度
		let borderLeft = parseInt(Width._getStyle(el)['borderLeftWidth'], 10),
			borderRight = parseInt(Width._getStyle(el)['borderRightWidth'], 10);
		return this.getBorderWidth(el) - borderLeft - borderRight;
	}

	getContentWidth (el) {
		let paddingLeft = parseInt(Width._getStyle(el)['paddingLeft'], 10),
			paddingRight = parseInt(Width._getStyle(el)['paddingRight'], 10);

		return this.getPaddingWidth(el) - paddingLeft - paddingRight;
	}

	/**
	 * 获取目标元素的样式
	 * @param  {Object HTMLElement} el 目标元素
	 * @return {Object}    目标元素的所有样式
	 */
	static _getStyle(el) {
		let style = window.getComputedStyle ? 
			window.getComputedStyle(el, null) :
			el.currentStyle;
		return style;
	}
}

let width = new Width();
export default width;
