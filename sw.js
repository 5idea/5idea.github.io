/**
 * Created by lbg on 2018/3/11.
 */
'use strict';
importScripts('sw-toolbox.js'); toolbox.precache(["index.html","style/style.css"]); toolbox.router.get('/images/*', toolbox.cacheFirst); toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});
