var app = angular.module('reddit');

app.controller('PostsController', function($scope, firebaseService) {

  $scope.getPosts = function() {

    firebaseService.getPosts($scope.posts).then(function(posts) {

      $scope.posts = getPosts(posts)
    })

    var addPost = function() {
      firebaseService.addPost($scope.newPost).then(function(getPosts()) {

      })

      $scope.post.timestamp = Date.now();
      $scope.post.comments = [];
      $scope.post.karma = 0;
      $scope.post.id = guid();
    }

    var vote = function(post.id, direction) {
      firebaseService.vote()
    }

    var getData = function(data) {
      return data;
    }

    var getData = function(comments) {
      return comments;
    }

  }
});