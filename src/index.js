import Worker from './components/worker/index.js';

const components = [
	Worker
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  Worker,
}
