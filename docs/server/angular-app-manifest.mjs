
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Routing/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Routing/home",
    "route": "/Routing"
  },
  {
    "renderMode": 2,
    "route": "/Routing/home"
  },
  {
    "renderMode": 2,
    "route": "/Routing/about"
  },
  {
    "renderMode": 2,
    "route": "/Routing/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Routing/contact"
  },
  {
    "renderMode": 2,
    "route": "/Routing/**"
  }
],
  assets: {
    'index.csr.html': {size: 35095, hash: 'e58ebedf9bf447748a6c81f2e08fb4129f1b8e13a661d6edf10c77a752d0d02a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1084, hash: 'd6e44de100ebadcf5038eb3dadd8ee86c777734df1d75965b57d050a710c0c68', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 50010, hash: '8b35e7b6612b3ca11e37788739542f98313d682c7c86c966f0d16fb8684a0a65', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 50010, hash: '8b35e7b6612b3ca11e37788739542f98313d682c7c86c966f0d16fb8684a0a65', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 50010, hash: '8b35e7b6612b3ca11e37788739542f98313d682c7c86c966f0d16fb8684a0a65', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 50010, hash: '8b35e7b6612b3ca11e37788739542f98313d682c7c86c966f0d16fb8684a0a65', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-DEFLZZPN.css': {size: 407449, hash: '5ysfYPKx8Tc', text: () => import('./assets-chunks/styles-DEFLZZPN_css.mjs').then(m => m.default)}
  },
};
