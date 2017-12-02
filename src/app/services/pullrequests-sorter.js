import Pullrequest from '../widgets/pullrequest';
import PullrequestList from '../widgets/pullrequest-list';

export default class PullrequestSorter {
	/**
	 * @param {PullrequestList} pullrequestList
	 */
	constructor(pullrequestList) {
		/**
		 * @type {PullrequestList}
		 * @private
		 */
		this._pullrequestList = pullrequestList;

		/**
		 * @type {?Pullrequest}
		 * @private
		 */
		this._dragEndedPullrequest = null;

		const pullrequestItems = this._pullrequestList.getItems();
		pullrequestItems.forEach((pullrequest) => this._initPullrequest(pullrequest));
	}

	/**
	 * @param {Pullrequest} pullrequest
	 * @private
	 */
	_initPullrequest(pullrequest) {
		pullrequest.setNodePropValue('draggable', true);
		pullrequest.setNodePropValue('onmouseenter', () => {
			if (!this._dragEndedPullrequest) {
				return;
			}

			this._pullrequestList.insertBefore(this._dragEndedPullrequest, pullrequest);
			this._dragEndedPullrequest = null;
		});
		pullrequest.setNodePropValue('ondragend', () => {
			this._dragEndedPullrequest = pullrequest;
		});
	}
}
