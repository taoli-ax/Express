const {Schema,model} = require('mongoose');


const classesSchema =new Schema({
    name:String,

})


const classesModel =model("ClassesModel",classesSchema,'classes');

module.exports.classesModel=classesModel;