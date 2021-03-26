const DbMap = new Map();

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


const Db = {

    add(pk, type, id, obj) {
        if (DbMap.get(pk) === undefined) {
            DbMap.set(pk, new Map());
        }
        if(DbMap.get(pk).get(type) === undefined) {
            DbMap.get(pk).set(type, new Map());
        }
        DbMap.get(pk).get(type).set(id, obj);
    },

    get(pk, type, id) {
        id = Number(id)
        let obj1 = DbMap?.get(pk);
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
        if (!DbMap?.get(pk)){
            return 'Invalid pk';
        }
        else if (!DbMap?.get(pk).get(type)){
            return 'Invalid type';
        }
        else{
            return mapToObject(DbMap.get(pk).get(type));
        }

    }
    //todo:
    //filter(pk, type, simpleExpression){}
    //query(){}
};

module.exports.add = Db.add;
module.exports.get = Db.get;
module.exports.list = Db.list;
module.exports.DbMap = DbMap;