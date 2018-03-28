"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var obj = {};
var hook = null;
var componentRegistry = {
    set: function set(key, value) {
        obj[key] = value;
        hook && hook(obj);
    },
    get: function get() {
        return obj;
    },
    setHook: function setHook(func) {
        hook = func;
    }
};
exports.default = componentRegistry;
