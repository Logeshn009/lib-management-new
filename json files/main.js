// Create AngularJS application
var app = angular.module('Bookdetails',[]);

// Create Controller with name mainCtrl
app.controller('mainCtrl', function($scope,$http){

    $scope.rowlimit=4;
    $http.get('https://logeshn009.github.io/Lab08_json_file/book.json')
    .success(function(response)
    {
        $scope.book=response.books;
    });	
});





