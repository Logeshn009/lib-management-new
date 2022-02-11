// Create AngularJS application
var app = angular.module('Book-details',[]);

// Create Controller with name mainCtrl
app.controller('mainCtrl', function($scope,$http){

	
    $scope.rowlimit=4;
    $scope.Bookname ;
    $scope.price;

    $http.get('https://2147118joshua.github.io/Staff_DetailsJSON/employee.json')
    .success(function(response)
    {
        $scope.names=response.employees;

    });
        
	
});





