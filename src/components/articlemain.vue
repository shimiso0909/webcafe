<template>
    
        
        <article>
            <header class="post-info">
                <h2 class="post-title">店内ギャラリーの絵が新しくなりました</h2>
                <p class="post-date">3/30<span>2019</span></p>
                <p class="post-cat">カテゴリー：お店の紹介</p>
            </header>
            <img src="../assets/wall.jpg" alt="店内の様子">
            <p>体に優しい自然食を提供する、WEB CAFE。無添加の食材を利用したメニューが特徴です。
                美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒されてください。
                体に優しい自然食を提供する、WEB CAFE。無添加の食材を利用したメニューが特徴です。
                美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒されてください。
            </p>
            <p>体に優しい自然食を提供する、WEB CAFE。無添加の食材を利用したメニューが特徴です。
                美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒されてください。
                体に優しい自然食を提供する、WEB CAFE。無添加の食材を利用したメニューが特徴です。
                美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒されてください。
                </p>
        </article>
</template>
<style scoped>
.post-info{
    position:relative;
    padding-top:4px;
    margin-bottom:40px;

}
.post-date{
    background:#0bd;
    border-radius:50%;
    color:#fff;
    text-align: center;
    width:100px;
    height:100px;
    padding-top:10px;
    position:absolute;
    top:0;
    font-size:1.625rem;
}
.post-date span{
    display:block;
    font-size:1rem;
    border-top:1px rgba(255,255,255,.5) solid;
    padding-top:5px;
    margin:0 auto;
    width:60%;
}
.post-title{
    font-weight:normal;
    font-size:2rem;
    font-family:"Yu Mincho","YuMincho",serif;
    
}
.post-title , .post-cat{
    margin-left:120px;
}
article img{
    margin-bottom:20px;
}
article p{
    margin-bottom:1rem;
}

/**モバイル版
 */
@media(max-width:600px){
    .post-date{
        height:70px;
        width:70px;
        font-size: 1rem;
    }
    .post-date span{
        font-size: 0.875rem;
        padding-top:2px;
    }
    .post-title{
        font-size:1.375rem;
    }
    .post-title , .post-cat{
    margin-left:80px;
    }
    .post-cat{
        font-size:0.875rem;
        padding-top:10px;
    }
}
</style>
