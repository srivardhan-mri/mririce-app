
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 30164, hash: '4e2df6d722e8b9123cbfc21534be6c32aecc3269eabefecefa3bcf7c4c00d0a4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6201, hash: '8243d79331155263b912fb6212c5213bb619d993582aaa5c7f93d5ba5a75b7fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-S2P5AR3E.css': {size: 29182, hash: 'etxs9iO+Aug', text: () => import('./assets-chunks/styles-S2P5AR3E_css.mjs').then(m => m.default)}
  },
};
