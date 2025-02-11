<script setup>
  import LinkCard from '../components/LinkCard.vue'
</script>

# NestJS
![nestjs](/nestjs.png)

[NestJS](https://nestjs.com/)でポーカーの役判定APIを実装しました。
OpenAPIでAPI仕様を記述し、[Redoc](https://github.com/Redocly/redoc)と[Github Pages](https://pages.github.com/)を利用してAPIドキュメントを生成しました。

また開発環境としてVS Codeの dev containerを用意しており、全体的に結構作り込んでいます。  

Ruby on Rails中心で開発していた当時の自分にとってDIの概念は新鮮でした。TypeScriptのデコレータに出会ったのもNestJSでした。

## ソースコード
<LinkCard
  img="/poker-api-nest.svg"
  link="https://github.com/satokiy/poker-api-nest"
  alt="poker-api-nest"
/>
