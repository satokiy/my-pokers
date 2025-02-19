# ルール 

トランプの手札に対してポーカーの役判定を行うアプリケーションを作成してください。
ルールと言いつつ、作り方は自由です。以下に参考となるルールを記述します。

### 手札
手札は5枚です。基本的に手札は文字列とします。
トランプの表現は自由ですが、以下を参考にして下さい。

|  | 例 |
|----------|----------|
| ハート    | `H`, `♥`   |
| ダイヤ    | `D`, `◆`   |
| クローバー    | `C`, `♣`   |
| スペード    | `S`, `♠`   |
| 数字    | `1`, `2`,`3` ...,`9` (`1`は`A`にする等もOK)  |

| 手札                  | 役 |
|------------------------|-----------|
| H1 D2 C3 S4 H5         | Straight  |
| ♥1 ♥2 ♥13 ♥4 ♥12       | Flush     |


有効な手札であることを判断するためのバリデーションと、エラーハンドリングは必ず実装して下さい。

| 有効ではない手札例               | Error Message                              |
|---------------------|--------------------------------------------|
|                     | 手札を入力して下さい                       |
| あああああ          | 手札の形式になっていません。（具体例: ）   |
| H1 D2 C3 S4 H5 D6   | 手札が5枚ではありません（入力値: 6枚）     |
| H1 D2 C3 S4         | 手札が5枚ではありません（入力値: 4枚）     |
| H1 D2 C3 S4 H1      | H1が重複しています                         |

### 役判定
[ポーカー・ハンドの一覧(wikipedia)](https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%BB%E3%83%8F%E3%83%B3%E3%83%89%E3%81%AE%E4%B8%80%E8%A6%A7) に従って下さい。複数の役に当てはまる場合、最も強い役を判定して下さい。  
ただし、`H1 H10 H11 H12 H13`のようなA-ハイ ストレート（ロイヤルストレートフラッシュ含む）の実装は任意とします。  


