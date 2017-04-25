import angular from 'angular';
import Sidebar from './sidebar/sidebar';
import Replaceable from './replaceable/replaceable';
import Messageview from './messageview/messageview';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Sidebar,
  Replaceable,
  Messageview,
  User
])
  
.name;

export default commonModule;
