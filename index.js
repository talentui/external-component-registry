const list = [];
const componentRegistry = {
    push(item) {
        if (!item) return false;
        list.push(item);
    },
    get() {
        return list;
    }
};
export default componentRegistry;