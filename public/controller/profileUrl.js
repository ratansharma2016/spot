//To update profiel picture the employee with their ID

app.controller('profImageCtrl', ['$scope', 'fileUpload', function($scope,fileUpload){
    
    $scope.uploadFile = function(id){
        var file = $scope.myFile;
        var uploadUrl = "/emp/employees/profimage/"+id;
        fileUpload.uploadFileToUrl(file, uploadUrl);
        }; 
}]);