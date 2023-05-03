const {addclasses,getclasses} = require('../dao/classesDao')

module.exports.addclasses=async function(classesName){

    const result = await addclasses(classesName);

    return result

}

module.exports.getclasses=async function(params){
    
    const result = await getclasses(params);

    return result

}

