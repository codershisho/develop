import './bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// vuetify
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';
// theme
import { customLight, customDark } from './theme';
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'customLight',
    themes: {
      customLight,
      customDark,
    },
  },
});
// plugins
import AxiosPlugin from './plugins/axios';
// pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(AxiosPlugin);
app.use(pinia);
app.mount('#app');
