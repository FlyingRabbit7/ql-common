import Worker from './src/main.vue';

/* istanbul ignore next */
Worker.install = function(Vue) {
  Vue.component('Worker', Worker);
};

export default Worker;