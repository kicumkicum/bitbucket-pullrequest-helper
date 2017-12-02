import Pullrequest from '../widgets/pullrequest';

export default class PullrequestVisual {
	/**
	 * @param {Pullrequest} pullrequest
	 * @param {boolean} isVisible
	 */
	setPullrequestVisible(pullrequest, isVisible) {
		pullrequest.setNodePropValue('hidden', !isVisible);
	}
}
