import template from './messageview.html';
import controller from './messageview.controller';
import './messageview.scss';

let messageviewComponent = {
  restrict: 'E',
  bindings: {
    messages: '=',
    onCloseChat: '&'
  },
  template,
  controller
};

export default messageviewComponent;
