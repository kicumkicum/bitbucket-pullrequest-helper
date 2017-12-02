import Pullrequest from './pullrequest';


export default class PullrequestList {
	/**
	 * @param {HTMLTableElement} node
	 */
	constructor(node) {
		/**
		 * @type {HTMLTableElement}
		 * @private
		 */
		this._node = node;

		/**
		 * @type {Array<HTMLTableRowElement>}
		 * @private
		 */
		this._nodes = [];

		/**
		 * @type {Array<Pullrequest>}
		 * @private
		 */
		this._pullrequests = [];

		this._parsePullrequests(node);
	}

	/**
	 * @return {Array<Pullrequest>}
	 */
	getItems() {
		return this._pullrequests;
	}

	/**
	 * @param {Pullrequest} pullrequest
	 * @param {number} newPosition
	 * @return {boolean}
	 */
	move(pullrequest, newPosition) {
		const currentIndex = this._pullrequests.indexOf(pullrequest);
		if (currentIndex === -1) {
			return false;
		}

		const currentPullrequestNode = this._nodes[currentIndex];
		const newPullrequestNode = this._nodes[newPosition];
		this._node.insertBefore(currentPullrequestNode, newPullrequestNode);
	}

	insertBefore(p1, p2) {
		const i = this._pullrequests.indexOf(p2);
		this.move(p1, i);
	}

	/**
	 * @param {HTMLTableElement} node
	 * @return {Array<Pullrequest>}
	 * @private
	 */
	_parsePullrequests(node) {
		try {
			const nodes = node.getElementsByClassName('pull-request-row');
			const list = Array.prototype.slice.call(nodes);
			list.forEach((pullrequestNode, index) => {
				this._nodes[index] = pullrequestNode;
				const pullrequest = new Pullrequest(pullrequestNode);

				this._pullrequests[index] = pullrequest;

				pullrequest.setNodePropValue('onmouseover', () => pullrequestNode.classList.add('focused'));
				pullrequest.setNodePropValue('onmouseout', () => pullrequestNode.classList.remove('focused'));
			});
		} catch (e) {
			console.error('PR list not parsed');
		}
	}
}
