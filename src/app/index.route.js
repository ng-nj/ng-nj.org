(function () {
  'use strict';

  angular
    .module('ngNjOrg')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/routes/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('events', {
        url: '/events',
        templateUrl: 'app/routes/events/events.html',
        controller: 'EventsController',
        controllerAs: 'ctrl'
      })
      .state('about-us', {
        url: '/about-us',
        templateUrl: 'app/routes/about-us/about-us.html',
        controller: 'AboutUsController',
        controllerAs: 'ctrl'
      })
      .state('code', {
        url: '/code',
        templateUrl: 'app/routes/code/code.html',
        controller: 'CodeController',
        controllerAs: 'ctrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/routes/login/login.html',
        controller: 'RegisterController',
        controllerAs: 'ctrl'
      })
      .state('register', {
      url: '/register',
      templateUrl: 'app/routes/register/register.html',
      controller: 'RegisterController',
      controllerAs: 'ctrl'
    })
      .state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'app/routes/forgot-password/forgot-password.html',
        controller: 'ForgotPasswordController',
        controllerAs: 'ctrl'
      })
      .state('myProfile', {
        url: '/myProfile',
        templateUrl: 'app/routes/my-profile/myProfile.html',
        controller: 'myProfileController',
        controllerAs: 'ctrl'
      })
      .state('terms', {
        url: '/terms',
        templateUrl: 'app/routes/terms/terms.html',
        controller: 'TermsController',
        controllerAs: 'ctrl'
      })
      .state('privacy', {
        url: '/privacy',
        templateUrl: 'app/routes/privacy/privacy.html',
        controller: 'PrivacyController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
