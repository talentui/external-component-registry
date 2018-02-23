const obj = {};
let hook = null;
const componentRegistry = {
    set: function(key,value) {
        obj[key] = value;
        hook && hook(obj);
    },
    get: function() {
        return obj;
    },
    setHook: function(func){
        hook = func;
    }
};
export default componentRegistry;