import Vue from 'vue';
import TripMessage from './trip-message.vue';

const constructor = Vue.extend(TripMessage);
let instance;

function getInstance(options = {}) {
    instance = instance || new constructor({
        data: options
    });

    //console.log(modalInstance);

    const component = instance.$mount();
    document.body.appendChild(component.$el);

    return instance;
};

function show(options) {
    let instance = getInstance({
        visible: true
    });

    instance.content = options.content;
    instance.type = options.type;
    instance.show();
};

TripMessage.info = function (props = {}) {
    return show(props);
};

TripMessage.error = function (props = {}) {
    props.type = 'error'
    return show(props);
};

export default TripMessage;