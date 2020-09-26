[GHP](https://actionpterygii.github.io/blog/)

# ぶろぐつくりについて
## 仕様予定
### 絶対
- React
- Prettier
- microCMS
- Swagger
### オプション(優先度順)
- TypaScript
  - 最低限はわかりますがReactでとなると怖いのと、先にすすめていきたいので
- styled-components
  - 最初からしててもいいかも少し考えます
- StoryBook
  - 優先度ひくい
## 順序予定
1. TOPページのタイトルとかだけ
1. APIやって取得表示ためし
1. APIのことを考える
1. 記事ページ
1. 記事一覧のあるページ(TOP,カテゴリ,タグ)
1. お問い合わせフォーム
1. 検索
## テンプレート
- TOP
  - タイトル
  - 説明
  - 記事ブロック
    - 画像
    - タイトル
    - 日付
    - 内容少し
    - タグ
  - ページャー
  - 検索窓
  - カテゴリ
  - タグ
- カテゴリー記事一覧
- タグ記事一覧
- 記事詳細
- お問い合わせフォーム

# 雑記
- 静的ファイルのみの公開となると、APIにアクセスするどうのこうのは全世界に筒抜けになりますが今の所データ取得のみに使うので叩き放題になってもいいと思いますアクセスするだけですし
  - サーバー処理がいらない静的ファイルのみを公開し、バックエンドサービスへ入力していくだけで反映されていく様は美しいと思いますし、美しいと思ってしまった
- react-helmet、head内をやる
- prettierとeslint共存
  - しない
- TOPページ(記事一覧)はページ遷移じゃなくて更に読み込む感じで下に増やしていきたいね
- カテゴリの親子はなくてよいのか？？
  - ないとどのかんじでやってくかむずそう
- post/999とかない記事idの場合はそれなりの返答をする
- axiosのcatchに渡すのは関数形式
- オブジェクトの階層が2以上の深さになると`annot read property XXXXX of undefined`になるのか？
  - 2階層(aaa.bbb)ならないはずなのに怒らないのに3階層(aaa.bbb.ccc)になると怒られる
    - 処理時間的にたまたまな問題？
  - その内容が参照される条件をわざわざ設定し解決。
- 必要なデータ自体の中に「読み込み中」「成功」「失敗」のデータも入れるのはきもいか？
  - それだけを保持する項目が増えるとたくさん渡さなければいけないのでそれもきしょい
  - やってデータ自体がないやん読込中も失敗も。そこが別々になるんは、その関係もかんがえなあかんからきしょいんとちゃうかて

# 履歴
1. createreactapp
1. index.html変更
1. GitHubPagesで表示できるようにデプロイ用ファイル作成用のMakefile作成
1. microCMSで基本情報(ブログインフォ)を返すAPIを作り、ブログタイトルと説明を入れ
1. axiosでAPI取得から表示まで
1. APIのPATHやKEYはconfig.jsに入れような
1. pretterだけとりあえずやる
1. reduxでする
1. ブログインフォはみんなでつかうからAppでふぇっち
1. 記事,カテゴリ,タグをmicroCMSで追加
1. りあくとるーたーどむですいっちではっしゅで
1. Topページと記事ページ(タイトル,内容だけ)つくり