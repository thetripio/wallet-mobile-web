import Vue from 'vue';
import Storage from './modules/storage';

Vue.prototype.$storage = Vue.storage = Storage;