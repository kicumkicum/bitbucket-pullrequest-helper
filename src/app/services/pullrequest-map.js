import Pullrequest from '../widgets/pullrequest';

export default class PullrequestMap {
	/**
	 * @param {Array<PullrequestPair>=} opt_pairs
	 */
	constructor(opt_pairs) {
		/**
		 * @type {Array<PullrequestPair>}
		 * @private
		 */
		this._pullrequestPair = opt_pairs || [];
	}

	/**
	 * @param {number} index
	 * @return {?PullrequestPair}
	 */
	item(index) {
		return this._pullrequestPair[index] || null;
	}

	/**
	 * @param {number} oldPosition
	 * @param {number} newPosition
	 * @return {boolean}
	 */
	move(oldPosition, newPosition) {
		const length = this._pullrequestPair.length;
		if (newPosition >= length || oldPosition >= length) {
			return false;
		}

		const movedPair = this._pullrequestPair.splice(oldPosition, 1)[0];
		let factor = 0;
		if (newPosition >= oldPosition) {
			factor = 1;
		}

		this._pullrequestPair.splice(newPosition + factor, 0, movedPair);

		return true;
	}

	/**
	 * @param {Pullrequest|HTMLTableElement} item
	 * @return {?PullrequestPair}
	 */
	find(item) {
		return this._pullrequestPair.find((pair) => {
			return pair.pullrequest === item || pair.node === item;
		}) || null;
	}

	/**
	 * @param {Pullrequest|HTMLTableElement} item
	 * @return {number}
	 */
	indexOf(item) {
		let index = -1;
		this._pullrequestPair.forEach((pair, i) => {
			if (pair.pullrequest === item || pair.node === item) {
				index = i;
			}
		});

		return index;
	}

	getPairs() {
		return this._pullrequestPair;
	}
}


/**
 * @typedef {{
 *      pullrequest: Pullrequest,
 *      node: HTMLTableElement
 * }}
 */
let PullrequestPair;

export { PullrequestPair };
