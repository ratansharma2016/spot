var express = require('express');
var router = express.Router();
var localStrategy=require('passport-local').Strategy;
var mongoose=require('mongoose');
require('../model/model.js');
var Employee=mongoose.model('employees');
var multer  = require('multer');
var upload = multer({ dest: './public/images/' });


//To check wether the user has access to use this section


var isAuthenticated=function(req,res,next){

	if(req.method==='GET')
	{
		return next();
	}
	if(req.isAuthenticated())
	{
		return next();

	}
	return res.redirect('/login');
	
};

/*Authenticate to use to perform CURD by ID */

router.use('/employees',isAuthenticated);


//Searching employee by ID

router.route('/employees/:id')
.get(function(req,res){
	Employee.findById(req.params.id,function(err,employee){
		if(err){
			return res.send(500,err);
		}
		return res.json(employee);
	});
})



//To modify a employee with employee ID


.put(function(req,res){
	Employee.findById(req.params.id,function(err,employee){
		if(err){
			return res.send(500,err);
		}
        
		Employee.update({_id:req.params.id}, 
			{$set:{
					empName:req.body.empName,
					tableNo:req.body.tableNo,
					seatNo:req.body.seatNo,
					currProject:req.body.currProject,
					teamName:req.body.teamName,
					designation:req.body.designation,
					assignDate:req.body.assignDate
				}
				},
		function(err,employee){
		if(err){
		return res.send(500,err);
		}
		console.log('One employee updated '+employee);
		return res.json(employee);
});

});
})


//To delete a employee with by ID

.delete(function(req,res){
	Employee.remove({_id:req.params.id},function(err,employee){
		if(err){
			return res.send(500,err);
		}
		return res.json(employee);
	});
});

//To update profile image of employee
router.post('/employees/profimage/:id',upload.single('file'),function(req,res,next){
	Employee.update({_id:req.params.id}, {$set:{empUrl:req.file.filename}},
		function(err,employee){
		if(err){
		return res.send(500,err);
		};	
		return res.json(employee);
});
});
// To populate all the employess


router.route('/employees')

.get(function(req,res){

	Employee.find(function(err,employee){
		if(err)
		{
			return res.send(500,err);
		}
		return res.send(employee);
	});
})

// To add new employee

.post(function(req,res){
	var employee=new Employee();
	employee.empName=req.body.empName;
	employee.tableNo=req.body.tableNo;
	employee.seatNo=req.body.seatNo;
	employee.currProject=req.body.currProject;
	employee.teamName=req.body.teamName;
	employee.designation=req.body.designation;
	employee.assignDate=req.body.assignDate;


	employee.save(function(err,employee){
		if(err){
			return res.send(500,err);
		}
		console.log('One employee Added '+employee);
		return res.json(employee);
	});
  
});

module.exports = router;