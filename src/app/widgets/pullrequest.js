export default class Pullrequst {
	/**
	 * @param {HTMLTableRowElement} node
	 */
	constructor(node) {
		this._node = node;
		this.title = this._parseTitle(node);
	}

	hide() {
		this._node.hidden = true;
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
