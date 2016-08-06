var mongoose=require('mongoose');

var userSchema = new mongoose.Schema({
	username:String,
	password:String,//hash generated password
	created_at:{type:Date,default:Date.now()}
});


var employeeSchema=new mongoose.Schema({
	empName:String,
	empUrl:String,
	tableNo:{type: Number}, 
	seatNo:{type: Number},
	currProject:String,
	teamName:String,
	designation:String,
	assignDate:Date
});

mongoose.model('users',userSchema);
mongoose.model('employees',employeeSchema);

