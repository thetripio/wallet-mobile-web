export default {
    set: function (key, value, options) {

        if (key) {
            if (value) {
                value = JSON.stringify(value);
            }
            window.localStorage.setItem(key, value);
        }
    },
    get: function (key) {
        let value = null;
        if (key) {
            value = window.localStorage.getItem(key);

            if (value) {
                value = JSON.parse(value);
            }

        }
        return value;
    },
    remove: function (key) {
        let value = null;
        if (key) {
            value = window.localStorage.removeItem(key);
        }
        return value;

    },
    clear: function () {
        window.localStorage.clear();
    }
}