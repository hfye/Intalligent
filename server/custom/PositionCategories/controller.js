var PositionCategories = connection.model('PositionCategories');
require('../../core/controller.js');
function PositionCategoriesController(model) {  
    this.model = model;
    this.searchFields = ['positionCategory'];
}  
PositionCategoriesController.inherits(Controller);   
var controller = new PositionCategoriesController(PositionCategories);  
exports.PositionCategoriesFindAll = function(req,res){
     controller.findAll(req, function(result){ 
         res.send(201, result); 
     }); 
}; 
exports.PositionCategoriesFindOne = function(req,res){
    var user = (req.isAuthenticated()) ? req.user.username : "unsigned user";

    controller.findOne(req, function(result){
        res.send(201, result);
    });
}; 
exports.PositionCategoriesCreate = function(req,res){  
    var data = req.body;

    if (typeof data.positionCategory == 'undefined' ) {
        res.send(201, {result: 0, msg: "'Position Category'is required"}); 
        return; 
    }  

    var user = (req.isAuthenticated()) ? req.user.username : "unsigned user";
    if (!data.nd_history) data.nd_history = [];

    data.nd_history.push({text:'Created on  '+ moment().format('MMMM Do YYYY, h:mm:ss a')+' by '+user,
          user_id : (req.isAuthenticated()) ? req.user.id : null, 
          user_name : (req.isAuthenticated()) ? req.user.username : null
          });

    controller.create(req, function(result){
        res.send(201, result);
    });
};   
exports.PositionCategoriesUpdate = function(req,res){ 
    var data = req.body;

    if (typeof data.positionCategory == 'undefined' ) {
        res.send(201, {result: 0, msg: "'Position Category'is required"}); 
        return; 
    }

    var user = (req.isAuthenticated()) ? req.user.username : "unsigned user";

    controller.update(req, function(result){
        res.send(201, result);
    });
}; 
exports.PositionCategoriesDelete = function(req,res){  
    var data = req.body;

    controller.remove(req, function(result){
        res.send(201, result);
    });
};  
