/**
 * Created by Sandeep on 11/09/14.
 */
angular.module('MyIdeaList.controllers',[]).controller('TodoListController',['$scope','Todo',function($scope,Todo){

    Todo.getAll().success(function(data){
        $scope.items=data.results;
    });

    $scope.todo={};
    $scope.thankYou = "Do you want exclusive access to my progress on these ideas?";
    $scope.addEmail=function() {
      Todo
        .addEmailAddress({email:$scope.todo.email})
        .success(function(data){
          $scope.thankYou = "Thanks! I will share with you updates on the popular ideas and my progress on it.";
          $scope.todo.email = '';
        });

    }

}]).controller('TodoCreationController',['$scope','Todo','$state',function($scope,Todo,$state){

    $scope.todo={};

    $scope.create=function(){
        Todo
          .create({title:$scope.todo.title, description:$scope.todo.description, url:$scope.todo.url, votes:1})
          .success(function(data){
            $state.go('tab.todos');
          });
    }

}]).controller('TodoEditController',['$scope','Todo','$state','$stateParams',function($scope,Todo,$state,$stateParams){

    $scope.todo={id:$stateParams.id,title:$stateParams.title};

    $scope.edit=function(){
        Todo.edit($scope.todo.id,{title:$scope.todo.title}).success(function(data){
            $state.go('tab.todos');
        });
    }

}]).controller('TodoShowController',['$scope','Todo','$state','$stateParams',function($scope,Todo,$state,$stateParams){

    Todo.get($stateParams.id).success(function(data){
      $scope.todo = data;
    });

    $scope.upvote=function(){
        votes = $scope.todo.votes + 1;
        Todo.edit($stateParams.id,{votes:votes}).success(function(data){
          $state.go('tab.todos');
        });
    }

}])

.controller('AboutController', function(){

});
