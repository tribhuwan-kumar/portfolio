import './icons'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp, provide, h } from 'vue';
import { ApolloClients } from '@vue/apollo-composable';
import { githubClient } from './apollo-client';

const app = createApp({
    setup() {
        provide(ApolloClients, {
            github: githubClient,
        });
    },
    render: () => h(App),
});

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
