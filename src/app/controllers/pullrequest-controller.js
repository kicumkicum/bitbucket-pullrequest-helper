import PullrequestList from '../widgets/pullrequest-list';
import PullrequestVisual from '../services/pullrequest-visual';
import PullrequestSorter from '../services/pullrequests-sorter';

export default class PullrequestController {
	constructor(node) {
		/**
		 * @type {PullrequestList}
		 * @private
		 */
		this._pullrequestList = new PullrequestList(node);

		/**
		 * @type {PullrequestList}
		 * @private
		 */
		this._pullrequestVisual = new PullrequestVisual();

		/**
		 * @type {PullrequestSorter}
		 * @private
		 */
		this._pullrequestSorter = new PullrequestSorter(this._pullrequestList);
	}

	hideWIP() {
		this._pullrequestList.getItems().forEach((pullrequest) => {
			const isWIP = pullrequest.title.indexOf('WIP') === 0 || pullrequest.title.indexOf('[WIP]') === 0;
			if (isWIP) {
				this._pullrequestVisual.setPullrequestVisible(pullrequest, !isWIP);
			}
		});
	}
}
