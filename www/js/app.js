// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('MyIdeaList', ['ionic','MyIdeaList.controllers','MyIdeaList.services'])

.run(function($ionicPlatform,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $state.go('tab.todos');
  });
}).config(function($stateProvider){
      $stateProvider
      // setup an abstract state for the tabs directive
        .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'views/tabs.html'
        })
        // Each tab has its own nav history stack:
        .state('tab.todos', {
          url: '/todos',
          views: {
            'tab-todos': {
              templateUrl: 'views/todos.html',
              controller: 'TodoListController'
            }
          }
        })
        // .state('showTodo', {
        //   url: '/todo/show/:id',
        //   views: {
        //     'showTodo': {
        //       templateUrl: 'views/show-todo.html',
        //       controller: 'TodoShowController'
        //     }
        //   }
        // })

        // .state('todos',{
        //    url:'/todos',
        //    controller:'TodoListController',
        //    templateUrl:'views/todos.html'
        .state('createTodo',{
            url:'/todo/new',
            controller:'TodoCreationController',
            templateUrl:'views/create-todo.html'
        })
        .state('showTodo',{
            url:'/todo/show/:id',
            controller:'TodoShowController',
            templateUrl:'views/show-todo.html'
        })
        .state('aboutTodo',{
            url:'/about',
            controller:'AboutController',
            templateUrl:'views/about.html'
        })
        .state('tab.about', {
          url: '/about',
          views: {
            'about': {
              templateUrl:'views/about.html',
              controller:'AboutController'
            }
          }
        })
        .state('editTodo',{
            url:'/todo/edit/:id/:title',
            controller:'TodoEditController',
            templateUrl:'views/edit-todo.html'
        });

});
