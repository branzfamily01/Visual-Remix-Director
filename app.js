(() => {
  const parts = ['./app.part1.txt','./app.part2.txt','./app.part3.txt','./app.part4.txt'];
  Promise.all(parts.map(p => fetch(p).then(r => { if (!r.ok) throw new Error(`${p}: ${r.status}`); return r.text(); })))
    .then(src => (0, eval)(src.join('')))
    .catch(err => { console.error(err); document.body.insertAdjacentHTML('beforeend','<div style="position:fixed;left:12px;right:12px;bottom:12px;background:#161616;color:#fff;padding:12px;border-radius:10px;z-index:9999">アプリの読み込みに失敗しました。再読み込みしてください。</div>'); });
})();
