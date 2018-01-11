import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { HeaderComponent } from './header/header.component';
import './scss/main.scss';

import { AirportsService } from './services/airports.service.js';



angular
    .module('myApp', [uiRouter, Components ])
    .service('AirportsService', AirportsService)
    .component('bookingPage', BookingComponent)
    .component('homePage', HomeComponent)
    .component('headerSection', HeaderComponent)
    .config(($stateProvider , $urlRouterProvider) => {
      $stateProvider
        .state('home', {
          url: '/',
          template: '<home-page></home-page>'
        })
        .state('booking', {
          url: '/booking',
          template: '<booking-page></booking-page>'
       })
       $urlRouterProvider.otherwise("/")
    })
    .name
/*
.component('homePage', HomeComponent)
.component('bookingPage', BookingComponent)
.service('AiportsService', AirportsService)
.service('CheapFlightService', CheapFlightService)
.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '',
      template: '<home-page></home-page>'
    });
  $stateProvider
    .state('booking', {
      url: '/booking',
      template: '<booking-page></booking-page>'
   });
});

*/


/*


.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/")
  $stateProvider
    .state('home', {
      url: '/',
      template: '<home-page></home-page>'
    })
  $stateProvider
    .state('booking', {
      url: '/booking',
      template: '<booking-page></booking-page>'
    })
})

*/
