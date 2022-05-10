import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

export const eventBus = new Vue({
    methods: {
        listEdit(memo, idx) {
            this.$emit('listEdit', memo, idx)
        }
    }
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
