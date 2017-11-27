import Pullrequest from './pullrequest';


export default class PullrequestList {
	/**
	 * @param {HTMLTableElement} node
	 */
	constructor(node) {
		this.pullrequests = this._parsePullrequests(node);
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
			return list.map((prNode) => new Pullrequest(prNode));
		} catch (e) {
			console.error('PR list not parsed');
			return [];
		}
	}
}
