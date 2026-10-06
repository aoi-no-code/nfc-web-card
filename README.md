# suzukiaoi — Web名刺

薄水色と黄色を使った、美容師・個人開発者のプロフィールサイトです。

## プレビュー

`starter/index.html` をブラウザで開いてください。ビルド・追加インストールは不要です。

## 編集

- `starter/index.html`: 自己紹介・リンク
- `starter/style.css`: 配色・レイアウト
- `starter/script.js`: シェア機能
- `starter/assets/profile.jpg`: プロフィール写真

## 公開

GitHubの新しい公開リポジトリ `nfc-web-card` にこのフォルダをアップロードします。
GitHub Actions の CD が `starter/` を `docs/` にコピーします。
Settings → Pages → Deploy from a branch → main / docs → Save を選びます。
公開URLは `https://<GitHubユーザー名>.github.io/nfc-web-card/` です。

## NFCカード

公開URLをスマホで確認してから、NFC Toolsなどのアプリで「URL / URI」レコードとしてNFCカードに書き込みます。書き込みには実物のカードと対応スマホが必要です。

## 確認状態

公開先: https://aoi-no-code.github.io/nfc-web-card/

リポジトリ: https://github.com/aoi-no-code/nfc-web-card

NFC Toolsでは「書く」→「レコードを追加」→「URL / URI」で上記の公開URLを登録し、「書く」からカードに書き込んでください。実物のNFCカードへの書き込みは未実施です。
