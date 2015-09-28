'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ui.router'
  ]).
  constant('ROLES', {
    recruiter: 'RECRUITER',
    administrator: 'ADMINISTRATOR',
    organizor: 'ORGANIZOR'
  });
