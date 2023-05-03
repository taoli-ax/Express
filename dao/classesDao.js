const {classesModel}=require('../dao/models/classesModel');

module.exports.addclasses= async function(classesName){

    return await classesModel.create(classesName);
     
}

module.exports.getclasses= async function({pageSize,parentPage}){


        const total=await classesModel.estimatedDocumentCount();

        const pages = Math.ceil(total / pageSize);
        const classesData =await classesModel.find().limit(pageSize).skip((parentPage-1)*pageSize);
        
        return {total,pages,classesData}

 
   
   
}