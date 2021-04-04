const dbMap = new Map();

function mapToObject(map) {
    const out = Object.create(null)
    map.forEach((value, key) => {
        if (value instanceof Map) {
            out[key] = mapToObject(value);
        }
        else {
            out[key] = value;
        }
    })
    return out;
}


const dbApp = {

    add(pk, type, id, obj) {
        if (dbMap.get(pk) === undefined) {
            dbMap.set(pk, new Map());
        }
        if(dbMap.get(pk).get(type) === undefined) {
            dbMap.get(pk).set(type, new Map());
        }
        dbMap.get(pk).get(type).set(id, obj);
    },

    get(pk, type, id) {
        id = Number(id)
        let obj1 = dbMap?.get(pk);
        if (!obj1){
            return 'Invalid pk';
        }
        let obj2 = obj1?.get(type);
        if(!obj2) {
            return 'Invalid type';
        }
        let obj3 = obj2?.get(id);
        return obj3 ? obj3 : 'No object found at given id';
    },
    list(pk, type) {
        if (!dbMap?.get(pk)){
            return 'Invalid pk';
        }
        else if (!dbMap?.get(pk).get(type)){
            return 'Invalid type';
        }
        else{
            return mapToObject(dbMap.get(pk).get(type));
        }

    }
    //todo:
    //filter(pk, type, simpleExpression){}
    //query(){}
};



module.exports = {
    add : dbApp.add,
    get : dbApp.get,
    list : dbApp.list,
    dbMap  
   };
