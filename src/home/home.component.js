import template from './home.component.html';
import './home.component.scss';
import logo from '../assets/images/logo.png';
import backImage from '../assets/images/back1.jpg';

function HomeController(){
  var vm = this;
  vm.name = 'heinner';
  vm.logo = logo;
  vm.backImage = backImage;
}

export const HomeComponent = {
  template: template,
  controller: HomeController,
  controllerAs: 'vm'
};
