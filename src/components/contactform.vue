<template>
    <div>
        <h2 class="page-title">contact</h2>
        <form action="#">
            <div>
                <label for="name">お名前</label>
                <input type="text" id="name" name="your-name">
            </div>
            <div>
                <label for="email">メールアドレス</label>
                <input type="email" id="email" name="your-email">
            </div>
            <div>
                <label for="message">メッセージ</label>
                <textarea name="your-message" id="message"></textarea>
            </div>
            <input type="submit" value="送信" class="button">


        </form>
    </div>
</template>
<style>
.page-title{
    text-transform:uppercase;
}
form div{
    margin-bottom:14px;
}
label{
    font-size:1.125rem;
    margin-bottom:10px;
    display:block;
}

input[type="text"],
input[type="email"],
textarea {
    background-color:rgba(255,255,255,0.5);
    border:1px #fff solid;
    border-radius:5px;
    padding:10px;
    font-size:1rem;

}
input[type="text"],
input[type="email"] {
    max-width:240px;
    width:100%;
    
}
textarea{
    width:100%;
    max-width:480px;
    height:6rem;
}
input[type="submit"]{
    border:none;
    cursor:pointer;
    line-height:1;
    color:#fff;
}
/**モバイル版 */
@media(max-width:600px){
    .page-title{
        margin-top:40px;
    }
    /**フォーム */
    input[type="text"],
    input[type="email"],
    textarea{
        max-width:100%;
    }
}


</style>

