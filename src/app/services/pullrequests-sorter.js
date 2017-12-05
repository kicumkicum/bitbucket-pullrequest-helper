import Pullrequest from '../widgets/pullrequest';
import PullrequestList from '../widgets/pullrequest-list';
import Storage from './storage';

export default class PullrequestSorter {
	/**
	 * @param {PullrequestList} pullrequestList
	 * @param {Storage} storage
	 */
	constructor(pullrequestList, storage) {
		/**
		 * @type {PullrequestList}
		 * @private
		 */
		this._pullrequestList = pullrequestList;

		/**
		 * @type {Storage}
		 * @private
		 */
		this._storage = storage;

		/**
		 * @type {?Pullrequest}
		 * @private
		 */
		this._dragEndedPullrequest = null;

		try {
			this._restorePullrequestList();
		} catch (e) {
			console.error(e);
		}

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

			this._savePullrequestList(this._pullrequestList);
		});
		pullrequest.setNodePropValue('ondragend', () => {
			this._dragEndedPullrequest = pullrequest;
		});
	}

	_savePullrequestList(pullrequestList) {
		const pullrequestIds = pullrequestList
			.getItems()
			.map((pullrequest) => pullrequest.id);
		this._storage.setItem('sorter:pullrequest-list', pullrequestIds.join(','));
	}

	/**
	 * @throws {Error}
	 * @private
	 */
	_restorePullrequestList() {
		const pullrequestIds = this._storage.getItem('sorter:pullrequest-list').split(',');
		this._pullrequestList.setOrder(pullrequestIds);
	}
}
