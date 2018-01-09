import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { HeaderComponent } from './header/header.component';
import './scss/main.scss';

import {
  CheapFlightService,
  AirportsService
} from './services';

var app = angular.module('myApp', [uiRouter, Components]);

app.controller('mainCtrl', function(){
  this.hello = 'test HZ';
})

app.component('bookingPage', BookingComponent);
app.component('homePage', HomeComponent)
app.component('headerSection', HeaderComponent)

app.config(function($stateProvider, $urlRouterProvider){
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

.service('AiportsService', AirportsService)
.service('CheapFlightService', CheapFlightService)

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
