class Page {
	getPageWidth () {
		return document.documentElement.scrollWidth;
	}

	getPageHeight () {
		return document.documentElement.scrollHeight;
	}

	getPageViewWidth () {
		return document.documentElement.clientWidth;
	}

	getPageViewHeight () {
		return document.documentElement.clientHeight;
	}
}

let page = new Page();
export default page;
