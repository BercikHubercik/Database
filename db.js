const database = {


    add(pk, type, id, obj) {
        if (database[pk] === undefined) {
            database[pk] = {};
            database[pk][type] = {};
            database[pk][type][id] = obj;
        } else {
            if (database[pk][type] === undefined) {
                database[pk][type] = {};
                database[pk][type][id] = obj;
            } else {
                database[pk][type][id] = obj;
            }
        }
    },
    get(pk, type, id) {
        return database[pk][type][id];
    },
    list(pk, type) {
        return database[pk][type];
    }
    //todo:
    //filter(pk, type, simpleExpression){}
    //query(){}
};
exports.add = database.add()