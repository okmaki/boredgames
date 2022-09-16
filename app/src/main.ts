import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';

import '@/assets/main.scss';

import InjectionKeys from '@/injection-keys';
import PocketBase from 'pocketbase';
import { Authenticator } from '@/services/authenticator';

// 1. create app --------------------------

const app = createApp(App);

// 2. add routing -------------------------

app.use(router);

// 3. add global provide/inject -----------

const pocketBaseClient = new PocketBase(import.meta.env.POCKETBASE_URL);
app.provide(InjectionKeys.POCKETBASE, pocketBaseClient);

const authenticator = new Authenticator(pocketBaseClient);
app.provide(InjectionKeys.AUTHENTICATOR, authenticator);

// 4. mount app ---------------------------

app.mount('#app');
