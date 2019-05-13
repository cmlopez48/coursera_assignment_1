(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "Test";
  $scope.Food_List = "";
  $scope.Message_Food="";
  $scope.Answer_Color="Black";


  $scope.Calculate_Food = function () {
    //return "Yaakov likes to eat healthy snacks at night!";
    $scope.Message_Food=Choose_Message(Num_Items($scope.Food_List));//$scope.Food_List;
  };

//$scope.Num_Items=function (str) {
//var items=0;
//var new_split_string=str.split(',');
//return items=new_split_string.length();
//};

  function Num_Items(str)
  {
      var items=0;
      var char='';
      var new_split_string=str.split(',');
      items=new_split_string.length;
      for (var i = 0; i < new_split_string.length; i++) {
        char=new_split_string[i];

        if (char=='' || char==' ')
        items--;
      }

      return items;
  }
  //this functions provide the right message according to the number of items
  function Choose_Message(Items){

    switch (Items) {
      case 0:
      $scope.Answer_Color="Red";
        return "Please enter data first";
        break;
      case 1:
      case 2:
      case 3:
      $scope.Answer_Color="Green";
        return "Enjoy!";
        break;

      default:  //4 or more
      $scope.Answer_Color="Green";
      return "Too much!";
      break;
}
  }

}

})();
