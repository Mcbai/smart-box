import width from './width/width.js';
import height from './height/height.js';

export let box = {
	getContentWidth: width.getContentWidth,
	getPaddingWidth: width.getPaddingWidth,
	getBorderWidth: width.getBorderWidth,


	getContentHeight: height.getContentHeight,
	getPaddingHeight: height.getPaddingHeight,
	getBorderHeight: height.getBorderHeight
}
