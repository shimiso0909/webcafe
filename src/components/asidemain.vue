<template>
    
        <aside>
            <h3 class="sub-title">カテゴリー</h3>
            <ul class="sub-menu">
                <li><a href="#">お店の紹介</a></li>
                <li><a href="#">期間限定メニュー</a></li>
                <li><a href="#">イベント</a></li>
                <li><a href="#">お客様との会話</a></li>

            </ul>
            <h3 class="sub-title">このお店について</h3>
            <p>体に優しい自然食を提供する、WEB CAFE。無添加の食材を利用したメニューが特徴です。
                美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒されてください。</p>

        </aside>
    
</template>
<style scoped>
.sub-title{
    font-size:1.375rem;
    padding:0 8px 8px;
    border-bottom:2px #0db solid;
    font-weight:normal;
}
aside p{
    padding:12px 10px;
}
.sub-menu{
    margin-bottom:60px;
}
.sub-menu li{
    border-bottom:1px #ddd solid;
}
.sub-menu a{
    display:block;
    padding:10px;
    color:#432;
}
.sub-menu a:hover{
    color:#0db;
}
/**モバイル版 */
@media(max-width:600px){
    aside{
        margin-top:60px;
    }
}
</style>

