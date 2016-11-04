angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('agenda', {
    url: '/agenda',
    templateUrl: 'templates/agenda.html',
    controller: 'agendaCtrl'
  })

  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
  })

  .state('mATCHPAL', {
    url: '/celular',
    templateUrl: 'templates/mATCHPAL.html',
    controller: 'mATCHPALCtrl'
  })

  .state('mATCHPAL2', {
    url: '/nome',
    templateUrl: 'templates/mATCHPAL2.html',
    controller: 'mATCHPAL2Ctrl'
  })

  .state('mATCHPAL3', {
    url: '/login',
    templateUrl: 'templates/mATCHPAL3.html',
    controller: 'mATCHPAL3Ctrl'
  })

  .state('mATCHPAL4', {
    url: '/convidados',
    templateUrl: 'templates/mATCHPAL4.html',
    controller: 'mATCHPAL4Ctrl'
  })

  .state('sobre', {
    url: '/sobre',
    templateUrl: 'templates/sobre.html',
    controller: 'sobreCtrl'
  })

$urlRouterProvider.otherwise('/agenda')

  

});