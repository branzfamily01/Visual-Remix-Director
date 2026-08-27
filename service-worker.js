const CACHE='visual-remix-director-v2';
const ASSETS=['./','./index.html','./style.css','./app.js','./manual.html','./manifest.json','./my-hub.json','./icons/icon.svg','./icons/apple-touch-icon.svg','./app.part1.txt','./app.part2.txt','./app.part3.txt','./app.part4.txt','./style.part1.css','./style.part2.css','./style.part3.css','./manual.part1.txt','./manual.part2.txt'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./index.html'))))});
