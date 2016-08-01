//empcontroller.js
app.controller('empController',['$scope','empService','$rootScope',
	function($scope,empService,$rootScope){
	$scope.employees=empService.query();
	$scope.newEmployee={empName:'',tableNo:'',seatNo:'',currProject:'',teamName:'',designation:'',assignDate:''};
	
//To add new employee

	$scope.employee=function(){
								$scope.newEmployee.empName=$scope.newEmployee.empName;
								$scope.newEmployee.tableNo=$scope.newEmployee.tableNo; 
								$scope.newEmployee.seatNo=$scope.newEmployee.seatNo;
								$scope.newEmployee.currProject=$scope.newEmployee.currProject;
								$scope.newEmployee.teamName=$scope.newEmployee.teamName;
								$scope.newEmployee.designation=$scope.newEmployee.designation;
								$scope.newEmployee.assignDate=$scope.newEmployee.assignDate;
								console.log($scope.newEmployee);
								empService.save($scope.newEmployee,function(){
								$scope.employees=empService.query();
								$scope.newEmployee={empName:'',tableNo:'',seatNo:'',currProject:'',teamName:'',designation:'',assignDate:''};
								});
								};
	$scope.edit=function(id){
		$scope.newEmployee=empService.get({id:id});
		$rootScope.uptId=id;
		$rootScope.btn=true;
		};

//To update employee by ID

	$scope.update=function(id){
								$scope.newEmployee.empName=$scope.newEmployee.empName;
								$scope.newEmployee.tableNo=$scope.newEmployee.tableNo; 
								$scope.newEmployee.seatNo=$scope.newEmployee.seatNo;
								$scope.newEmployee.currProject=$scope.newEmployee.currProject;
								$scope.newEmployee.teamName=$scope.newEmployee.teamName;
								$scope.newEmployee.designation=$scope.newEmployee.designation;
								$scope.newEmployee.assignDate=$scope.newEmployee.assignDate;
								empService.update({id:id},$scope.newEmployee,function(){
									$scope.employees=empService.query();
									$scope.newEmployee={empName:'',tableNo:'',seatNo:'',currProject:'',teamName:'',designation:'',assignDate:''};
									$rootScope.btn=false;
								});
							
	};

//To delete employee by ID
	$scope.remove=function(id){
		empService.delete({id:id},function(){
			$scope.employees=empService.query();
			$scope.newEmployee={empName:'',tableNo:'',seatNo:'',currProject:'',teamName:'',designation:'',assignDate:''};
		});
	};
}]);