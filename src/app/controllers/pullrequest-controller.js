import PullrequestList from '../widgets/pullrequest-list';

export default class PullrequestController {
	constructor(node) {
		this._pullrequestList = new PullrequestList(node).pullrequests;
	}

	hideWIP() {
		this._pullrequestList.forEach((pullrequest) => {
			const isWIP = pullrequest.title.indexOf('WIP') === 0 || pullrequest.title.indexOf('[WIP]') === 0;
			if (isWIP) {
				pullrequest.hide();
			}
		});
	}
}
