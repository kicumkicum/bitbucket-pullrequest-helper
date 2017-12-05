import Pullrequest from './pullrequest';
import PullrequestMap from '../services/pullrequest-map';

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

		const pairs = this._parsePullrequests(node);

		this._pullrequestMap = new PullrequestMap(pairs);
	}

	/**
	 * @return {Array<Pullrequest>}
	 */
	getItems() {
		return this._pullrequestMap.getPairs().map((pair) => pair.pullrequest);
	}

	/**
	 * @param {Pullrequest} pullrequest
	 * @param {number} newPosition
	 * @return {boolean}
	 */
	move(pullrequest, newPosition) {
		const pair = this._pullrequestMap.find(pullrequest);
		if (!pair) {
			return false;
		}

		const currentPullrequestNode = pair.node;
		const newPullrequestPair = this._pullrequestMap.item(newPosition);

		if (!newPullrequestPair) {
			return false;
		}

		const oldPosition = this._pullrequestMap.indexOf(pullrequest);
		const result = this._pullrequestMap.move(oldPosition, newPosition);

		if (!result) {
			return false;
		}

		this._node.insertBefore(currentPullrequestNode, newPullrequestPair.node);
	}

	insertBefore(p1, p2) {
		const i = this._pullrequestMap.indexOf(p2);
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
			return list.map((pullrequestNode) => {
				const pullrequest = new Pullrequest(pullrequestNode);

				pullrequest.setNodePropValue('onmouseover', () => pullrequestNode.classList.add('focused'));
				pullrequest.setNodePropValue('onmouseout', () => pullrequestNode.classList.remove('focused'));

				return {
					pullrequest: pullrequest,
					node: pullrequestNode
				};
			});
		} catch (e) {
			console.error('PR list not parsed');
			return [];
		}
	}
}
