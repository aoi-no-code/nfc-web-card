'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('share').addEventListener('click', async () => {
  const status = document.getElementById('share-status');
  if (!/^https?:$/.test(location.protocol) || ['localhost', '127.0.0.1'].includes(location.hostname)) {
    status.textContent = '公開後に、このボタンから名刺のURLをシェアできます。';
    return;
  }
  const url = location.href.split('#')[0];
  try {
    if (navigator.share) {
      await navigator.share({ title: 'suzukiaoi | Web名刺', url });
      status.textContent = 'シェア画面を閉じました。';
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
      status.textContent = '名刺のURLをコピーしました。';
    } else {
      status.textContent = 'このURLをコピーしてください：' + url;
    }
  } catch (error) {
    status.textContent = error.name === 'AbortError' ? '' : 'このURLをコピーしてください：' + url;
  }
});
