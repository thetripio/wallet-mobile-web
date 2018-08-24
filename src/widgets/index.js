import Vue from 'vue';
import TripHeader from './header';
import TripTitle from './title';
import TripButton from './button';
import TripAlert from './alert';
import TripInput from './input';
import TripRadio from './radio';
import TripRadioGroup from './radio-group';
import TripForm from './form';
import TripList from './list';
import TripFooter from './footer';
import TripMessage from './message';
import TripModal from './modal';
import TripPopupPage from './popup-page';
import TripQrcode from './qrcode';

const components = {
    TripHeader,
    TripTitle,
    TripButton,
    TripAlert,
    TripForm,
    FormItem: TripForm.Item,
    TripList,
    ListItem: TripList.Item,
    TripInput,
    TripRadio,
    TripRadioGroup,
    TripFooter,
    TripMessage,
    TripModal,
    TripPopupPage,
    TripQrcode
};

const install = function (Vue) {
    //if (install.installed) return;

    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });

    Vue.prototype.$TripModal = TripModal;
    Vue.prototype.$TripMessage = TripMessage;
};

if (typeof window !== 'undefined') {
    install(Vue);
}