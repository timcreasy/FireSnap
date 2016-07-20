firesnap.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('index',{
      url:'/',
      templateUrl: 'views/loadinglogin.html',
      controller: 'LoadingCtrl'
  }).state('login',{
    url:'/login',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  }).state('register',{
    url:'/register',
    templateUrl: 'views/register.html',
    controller: 'RegisterCtrl'
  }).state('home',{
      url:'/home',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
  }).state('viewsnap',{
      url:'/viewsnap',
      templateUrl: 'views/viewsnap.html',
      controller: 'ViewSnapCtrl'
  });
  $urlRouterProvider.otherwise('/');
});
