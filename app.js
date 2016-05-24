var app = angular.module("extraNo", []);

app.controller("extraNo", function($scope) {
  $scope.listEntry = "";
  $scope.reallyNo = "dsgnkfjgof";
  $scope.array = [1,2,3,4,5];
  $scope.addToArray = function() {
    $scope.array.push($scope.listEntry);
  }

  $scope.pizzaToppings = [
    {"name":"cheese", "tastiness":"Heck Yeah"},
    {"name":"tuna", "tastiness":"90%"},
    {"name":"pepperoni", "tastiness":"Heck No"},
    {"name":"olives", "tastiness":"leave the world"},
    {"name":"crabs", "tastiness":"why is this a thing"},
    {"name":"hamburger", "tastiness":"what"}
  ];

  $scope.showAlert = function() {
    alert($scope.alertTextOrWhatever);
  }

});
