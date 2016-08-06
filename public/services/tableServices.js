//tableServices.js
app.factory('tableService',function($resource){
		return $resource('/emp/employees/tab/table',null,
		{ 'get':    {method:'GET',isArray:true},
		  'save':   {method:'POST'},
		  'query':  {method:'GET', isArray:true},
		  'update': {method:'PUT' },
		  'delete': {method:'DELETE'} 
		});
});