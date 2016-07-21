// firesnap.config(function($stateProvider, $urlRouterProvider){
//   $stateProvider
//   .state('index',{
//       url:'/',
//       templateUrl: 'views/login.html',
//       controller: 'LoginCtrl'
//   }).state('register',{
//     url:'/register',
//     templateUrl: 'views/register.html',
//     controller: 'RegisterCtrl'
//   }).state('home',{
//       url:'/home',
//       templateUrl: 'views/home.html',
//       controller: 'HomeCtrl'
//   }).state('viewsnap',{
//       url:'/viewsnap',
//       templateUrl: 'views/viewsnap.html',
//       controller: 'ViewSnapCtrl'
//   }).state('sendpage',{
//       url:'/sendpage',
//       templateUrl: 'views/sendsnap.html',
//       controller: 'SendSnapCtrl'
//   });
//   $urlRouterProvider.otherwise('/');
// });



firesnap.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('index',{
      url:'/',
      templateUrl: 'app/views/loadinglogin.html',
      controller: 'LoadingCtrl'
  }).state('login',{
    url:'/login',
    templateUrl: 'app/views/login.html',
    controller: 'LoginCtrl'
  }).state('register',{
    url:'/register',
    templateUrl: 'app/views/register.html',
    controller: 'RegisterCtrl'
  }).state('home',{
      url:'/home',
      templateUrl: 'app/views/home.html',
      controller: 'HomeCtrl'
  }).state('viewsnap',{
      url:'/viewsnap',
      templateUrl: 'app/views/viewsnap.html',
      controller: 'ViewSnapCtrl'
  }).state('sendpage',{
      url:'/sendpage',
      templateUrl: 'app/views/sendsnap.html',
      controller: 'SendSnapCtrl'
  });
  $urlRouterProvider.otherwise('/');
});
