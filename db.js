const DbMap = new Map();


const Db = {

    add(pk, type, id, obj) {
        if (DbMap[pk] === undefined) {
            DbMap.set(pk, new Map());
        }
        if(DbMap[pk][type] === undefined) {
            DbMap[pk].set(type, new Map());
        }
        DbMap[pk][type].set(id, obj);
    },

    get(pk, type, id) {
        let obj1 = DbMap ? DbMap[pk] : null;
        console.log(obj1);
        let obj2 = obj1 ? obj1[type] : null;
        console.log(obj2);
        let obj3 = obj2 ? obj2[id] : null;

        return obj3;
    },
    list(pk, type) {
        return DbMap[pk][type];
    }
    //todo:
    //filter(pk, type, simpleExpression){}
    //query(){}
};

module.exports.add = Db.add;
module.exports.get = Db.get;
module.exports.DbMap = DbMap;