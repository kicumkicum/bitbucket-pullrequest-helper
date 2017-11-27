import PullrequestList from '../widgets/pullrequest-list';
import PullrequestVisual from '../services/pullrequest-visual';

export default class PullrequestController {
	constructor(node) {
		/**
		 * @type {PullrequestList}
		 * @private
		 */
		this._pullrequestList = new PullrequestList(node).pullrequests;
		/**
		 * @type {PullrequestList}
		 * @private
		 */
		this._pullrequestVisual = new PullrequestVisual();
	}

	hideWIP() {
		this._pullrequestList.forEach((pullrequest) => {
			const isWIP = pullrequest.title.indexOf('WIP') === 0 || pullrequest.title.indexOf('[WIP]') === 0;
			if (isWIP) {
				this._pullrequestVisual.setPullrequestVisible(pullrequest, !isWIP);
			}
		});
	}
}
