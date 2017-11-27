debugger

import PullrequestController from './controllers/pullrequest-controller';

const pullrequestsNode = document.getElementById('bitbucket-pull-request-table').children[1];
const pullrequestController = new PullrequestController(pullrequestsNode);

pullrequestController.hideWIP();
