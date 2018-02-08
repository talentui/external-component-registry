const obj = {};
const componentRegistry = {
    set: function(key,value) {
        obj[key] = value;
    },
    get: function() {
        return obj;
    }
};
export default componentRegistry;