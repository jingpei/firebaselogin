graphApp.controller("graphControllers", function( $scope ){

  $scope.width = 600;
  $scope.height = 250;

  $scope.yAxis = 'Booty Haul';  
  $scope.xAxis = '2015';

  // $scope.max = Math.max(($scope.data).map(function(obj){
  //   return obj.value;
  // }));

  // console.log($scope.max)

  $scope.maxtwo = 342;
    // Data 
    $scope.data = [
    {
      label: 'January',
      value: 36
    },
    {
      label: 'February',
      value: 54
    },
    {
      label: 'March',
      value: 62
    },
    {
      label: 'April',
      value: 82
    },
    {
      label: 'May',
      value: 96
    },
    {
      label: 'June',
      value: 104
    },
    {
      label: 'July',
      value: 122
    },
    {
      label: 'August',
      value: 152
    },
    {
      label: 'September',
      value: 176
    },
    {
      label: 'October',
      value: 180
    },
    {
      label: 'November',
      value: 252
    },
    {
      label: 'December',
      value: 342
    }
    ];

});











