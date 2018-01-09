import template from './header.component.html';
import './header.component.scss';
import logo from '../assets/images/logo.png';

function HeaderController(){
  var vm = this;
  vm.name = 'heinner';
  vm.logo = logo;
}

export const HeaderComponent = {
  template: template,
  controller: HeaderController,
  controllerAs: 'vm'
};
