import template from './videorenderer.html';
import controller from './videorenderer.controller';
import './videorenderer.scss';

let videorendererComponent = {
  restrict: 'E',
  bindings: {
    isChatOpened: '='
  },
  template,
  controller
};

export default videorendererComponent;
