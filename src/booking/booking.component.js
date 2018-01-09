import template from './booking.component.html';
import './booking.component.scss';

function BookingController(){
  var vm = this;
  vm.name = 'heinner';
}

export const BookingComponent = {
  template: template,
  controller: BookingController,
  controllerAs: 'vm'
};
