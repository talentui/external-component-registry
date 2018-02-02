const list = [];
const componentRegistry = {
    push: function(item) {
        if (!item) return false;
        list.push(item);
    },
    get: function() {
        return list;
    }
};
export default componentRegistry;