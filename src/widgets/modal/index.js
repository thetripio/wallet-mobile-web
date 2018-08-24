import Vue from 'vue';
import Modal from './trip-modal.vue';

const constructor = Vue.extend(Modal);
let modalInstance;

function getModalInstance(options = {}) {
    modalInstance = modalInstance || new constructor({
        data: options
    });

    //console.log(modalInstance);

    const component = modalInstance.$mount();
    document.body.appendChild(component.$el);

    return modalInstance;
};

function confirm(options) {
    let instance = getModalInstance({
        visible: true
    });

    instance.visible = true;
    instance.title = options.title;
    instance.content = options.content;
    instance.buttons = options.buttons;
};

Modal.show = function (props = {}) {
    return confirm(props);
};

Modal.confirm = function (props = {}) {
    return confirm(props);
};

Modal.info = function (props = {}) {
    return confirm(props);
}

Modal.remove = function () {
    if (!modalInstance) {
        return false;
    }

    modalInstance.close();
};


export default Modal;