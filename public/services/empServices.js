//service used for crud function for imployee
app.factory('empService',function($resource){
		return $resource('/emp/employees/:id',null,
		{ 'get':    {method:'GET'},
		  'save':   {method:'POST'},
		  'query':  {method:'GET', isArray:true},
		  'update': {method:'PUT' },
		  'delete': {method:'DELETE'} 
		});
});