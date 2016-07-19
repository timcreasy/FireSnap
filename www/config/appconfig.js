firesnap.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('index',{
    url:'/',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  }).state('home',{
      url:'/home',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
  });
  $urlRouterProvider.otherwise('/');
});
