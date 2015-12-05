'use strict';

(function (window) {
    "use strict";

    var dependencies = {};

    window.use = getDependency;
    window.define = setDependency;

    /**
     * @description get a dependency by its name
     * @param {String} name
     * @returns {Function}
     */
    function getDependency(name) {
        if (dependencies[name] !== null) {
            if (typeof dependencies[name] === 'function') {
                return dependencies[name]();
            } else if (typeof dependencies[name] !== 'undefined') {
                return dependencies[name];
            }
        }

        return null;
    }

    /**
     * @description store a dependency
     * @param {String} name
     * @param {Function} value
     */
    function setDependency(name, value) {
        dependencies[name] = value;
    }
})(window);