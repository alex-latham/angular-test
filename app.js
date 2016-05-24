var app = angular.module("angularTest", []);

app.controller("angularTest", function($scope) {
  $scope.listEntry = ""; // empty string
  $scope.array = [1,2,3,4,5]; // array of stuff, could be numbers, strings anything
  $scope.addToArray = function() {
    $scope.array.push($scope.listEntry);
  }

  $scope.pizzaToppings = [ // data attribute array
    {"name":"cheese", "tastiness":"Heck Yeah"},
    {"name":"tuna", "tastiness":"90%"},
    {"name":"pepperoni", "tastiness":"maybe??"},
    {"name":"olives", "tastiness":"why"},
    {"name":"crabs", "tastiness":"why is this a thing"},
    {"name":"hamburger", "tastiness":"what"}
  ];

  $scope.showAlert = function() {
    alert($scope.alertTextOrWhatever);
  }

});
