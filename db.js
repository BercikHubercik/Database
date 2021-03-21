const DbMap = new Map();


const Db = {

    add(pk, type, id, obj) {
        if (DbMap[pk] === undefined) {
            DbMap[pk] = {};
            DbMap[pk][type] = {};
            DbMap[pk][type][id] = obj;
        } else {
            if (DbMap[pk][type] === undefined) {
                DbMap[pk][type] = {};
                DbMap[pk][type][id] = obj;
            } else {
                DbMap[pk][type][id] = obj;
            }
        }
    },
    get(pk, type, id) {
        return DbMap[pk][type][id];
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