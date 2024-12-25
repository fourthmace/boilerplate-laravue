import 'vuestic-ui/styles/essential.css';
import 'vuestic-ui/styles/typography.css';

// vue
import { createApp } from 'vue';
// plugins
import { createVuestic } from 'vuestic-ui'
// pages
import LoginPage from './app/pages/auth/login/LoginPage.vue'

// vue init
const app = createApp({});

/**
 * component & pages
 * ----------------------------
 */
app.component("login-page", LoginPage);

/**
 * plugins use
 * ----------------------------
 */
app.use(createVuestic({}))

// vue mount
app.mount("#app");