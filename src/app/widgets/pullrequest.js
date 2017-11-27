export default class Pullrequest {
	/**
	 * @param {HTMLTableRowElement} node
	 */
	constructor(node) {
		/**
		 * @type {HTMLTableRowElement}
		 * @private
		 */
		this._node = node;
		/**
		 * @type {string}
		 */
		this.title = this._parseTitle(node);
	}

	/**
	 * @param {boolean} isVisible
	 */
	setVisible(isVisible) {
		if (isVisible === this._node.hidden) {
			return;
		}

		this._node.hidden = isVisible;
	}

	/**
	 * @param node
	 * @return {string}
	 * @private
	 */
	_parseTitle(node) {
		let title = '';
		try {
			title = node.getElementsByClassName('pull-request-title')[0].title;
		} catch (e) {
			console.error(`Parse PR title error: ${e}`);
		}

		return title;
	}
}
