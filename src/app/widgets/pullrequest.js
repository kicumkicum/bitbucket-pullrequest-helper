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

		/**
		 * @type {string}
		 */
		this.id = this._node.getAttribute('data-pull-request-id');
	}

	/**
	 * @param {string} prop
	 * @param {*} value
	 */
	setNodePropValue(prop, value) {
		this._node[prop] = value;
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
