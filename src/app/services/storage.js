export default class Storage {
	constructor() {
		/**
		 * @type {Storage}
		 * @private
		 */
		this._localStorage = window.localStorage;
	}

	/**
	 * @param {string} key
	 * @param {string} value
	 */
	setItem(key, value) {
		this._localStorage.setItem(key, value);
	}

	/**
	 * @param {string} key
	 * @return {string}
	 */
	getItem(key) {
		return this._localStorage.getItem(key);
	}
}
