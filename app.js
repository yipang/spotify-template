var data;
var baseUrl = 'https://api.spotify.com/v1/search?type=track&query='
var myApp = angular.module('myApp', [])
var artistUrl = 'https://api.spotify.com/v1/artists/{id}'

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}
  $scope.getSongs = function() {
    $http.get(baseUrl + $scope.track).success(function(response){
      data = $scope.tracks = response.tracks.items     
    })
  }
  $scope.play = function(song) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }
  $scope.sortType = 'name'
  $scope.setOrder = function(value) {
    $scope.order = value
  }
  $scope.getArtist = function() {
    $http.get(artistUrl).success(function(response) {
      data = $scope.artists = response.artists
    })
  }

})

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});
