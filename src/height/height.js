class Height {
	getBorderHeight (el) {
		let rect = el.getBoundingClientRect();
		return rect.height;
	}

	getPaddingHeight (el) {
		return el.clientHeight;
	}

	getContentHeight (el) {
		let paddingHeight = el.clientHeight;
		let paddingTop = parseInt(Height._getStyle(el)['paddingTop'], 10),
			paddingBottom = parseInt(Height._getStyle(el)['paddingBottom'], 10);

		return paddingHeight - paddingTop - paddingBottom;
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

let height = new Height();
export default height;
