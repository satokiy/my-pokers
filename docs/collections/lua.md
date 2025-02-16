<script setup>
import LinkCard from '../components/LinkCard.vue'
</script>

# Lua

<div style="margin: 20px 0;">
  <img src="/lua.png" alt="Lua" style="height: auto; width: 40%;">
</div>

Luaと[OpenResty](https://openresty.org/)でポーカーの役判定APIを実装しました。
Luaといえば[NeoVim](https://neovim.io/)の設定ファイルで多少使うだけの印象でしたが、子供向けのプログラミング教室で[Roblox](https://www.roblox.com/)を触り始めたことがきっかけで興味を持ち、APIが作成できるフレームワーク（？）としてOpenRestyを使ってみました。  
Luaは触っていてRubyとJavaScriptの間のような印象を抱きました。はじめこそ動的型付け、スネークケースの楽しさを感じましたが、オブジェクト指向な書き方をテーブルで表現するのには戸惑いました（結局マスターはしていないです）。  
普段の開発でLuaを積極的に使う理由は正直ないかなという感想ですが、[Nginx](https://nginx.org/)を拡張する選択肢としてOpenRestyがあることを知れたのは良かったです。

## ソースコード

<LinkCard
  img="/my-pokers/poker-lua.svg"
  link="https://github.com/satokiy/poker-lua"
  alt="poker-lua"
/>
