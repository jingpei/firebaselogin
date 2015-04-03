graphApp.controller("graphControllers", function( $scope, $firebaseArray ){

  var ref = new Firebase('https://jp-dataviz.firebaseio.com/data');
  $scope.dbData = $firebaseArray(ref);
  //var trueArr = $firebaseArray(ref).$asArray();
  console.log($scope.dbData);
  $scope.width = 600;
  $scope.height = 250;

  $scope.yAxis = 'Booty Haul';  
  $scope.xAxis = '2015';

    // Data 
    // $scope.data = [
    // {
    //   label: 'January',
    //   value: 36
    // },
    // {
    //   label: 'February',
    //   value: 54
    // },
    // {
    //   label: 'March',
    //   value: 62
    // },
    // {
    //   label: 'April',
    //   value: 82
    // },
    // {
    //   label: 'May',
    //   value: 96
    // },
    // {
    //   label: 'June',
    //   value: 104
    // },
    // {
    //   label: 'July',
    //   value: 122
    // },
    // {
    //   label: 'August',
    //   value: 152
    // },
    // {
    //   label: 'September',
    //   value: 176
    // },
    // {
    //   label: 'October',
    //   value: 180
    // },
    // {
    //   label: 'November',
    //   value: 252
    // },
    // {
    //   label: 'December',
    //   value: 342
    // },
    // {
    //   label: 'Hello',
    //   value: 50
    // }
    // ];

    $scope.max = 342;

  // $scope.max = Math.max.apply(Math, (($scope.dbData).map(function(obj){
  //   return obj.value;
  // })));

});

graphApp.controller("registrationCtrl", function( $scope, $firebaseArray ){
  $scope.login = function( login_info ){
    alert("submitted");
  }
  $scope.$on("$viewContentLoaded", function(){
    console.log($scope.myform);
  })

});











