import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import home from './modules/home';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		index,
		home
	}
});
