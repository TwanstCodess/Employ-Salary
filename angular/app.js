// module
var app = angular.module('MyApp',['ngRoute','ngAnimate']);

app.config(function($routeProvider){
      $routeProvider
      .when('/',{
            templateUrl:'view/home.html',
            controller:'con'
      })   
      .when('/About',{
            templateUrl:'view/about.php',
            controller:'con'
      })
      .when('/Random',{
            templateUrl:'view/random.php',
            controller:'con'
      })
    
      .otherwise({
            redirectTo:'/'
      })
})



app.directive('randomEmployees',function(){
      return{
            restrict:'E',
            scope:{
                  employees:'='
            },
            templateUrl:'view/randomproccess.html',
            controller:function($scope){
                  $scope.random=Math.floor(Math.random()*4)
            }
      }
})

// var x=4.5 -> 5
// var y=4.4 -> 4

//controller
app.controller('con',['$scope','$http' , function ($scope , $http){

// function delete
$scope.deletes=function(em){
var x = $scope.employees.indexOf(em);
$scope.employees.splice(x,1);
}

// function add or insert
$scope.addem=function(){
      $scope.employees.push({
            name1:$scope.new.name1,
            age1:$scope.new.age1,
            gender:$scope.new.gender,
            salary:$scope.new.salary,
            TJ:$scope.new.TJ,
      });
// Use for Null Input After Insert Data
      $scope.new.name1="";
      $scope.new.age1="";
      $scope.new.gender="";
      $scope.new.salary="";
      $scope.new.TJ="";

}
// json to Object
$http.get('data/employees.json').then(function($hozan){
      $scope.employees=$hozan.data;
})
  
//     object to json
//     console.log(angular.toJson($scope.employees))

}])
