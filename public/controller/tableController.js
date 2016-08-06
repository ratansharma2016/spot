app.controller('tableController',['$scope','tableService',
	function($scope,tableService){
		tableService.get(function(result){
			$scope.newTables=[];
         	var tables=result;
			for(var tab in tables){
			var tableData=tables[tab];
			var data=tableData.table;
			var newTable=[{seatNo:1,active:true},{seatNo:2,active:true},{seatNo:3,active:true},{seatNo:4,active:true}];
			
			for(var i=0; i<data.length&&data;i++){
				if(data&&data[i]){
					newTable[(+data[i].seatNo)-1]=data[i];
				}
				
			}
		
			$scope.newTables.push(newTable);
			console.log(newTable);
			}},function(err){
		console.log(err);
		});
		}				
]);