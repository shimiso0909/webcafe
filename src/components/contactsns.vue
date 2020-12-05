<template>
    <section id="sns">
        <div class="sns-box">
            <h3 class="sub-title">Facebook</h3>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=315&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div class="sns-box">
            <h3 class="sub-title">Twitter</h3>
        </div>
        <div class="sns-box">
            <h3 class="sub-title">YouTube</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KspXkAV1Bjw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
</template>
<style>
#sns{
    display:flex;
    justify-content: space-between;
    background:#FAF7F0;
    padding:4% 0;

}
#sns .sub-title{
    margin-bottom:30px;
}
.sns-box{
    width:30%;
}
iframe{
    border-radius:10px;
}
/**モバイル版 */
@media(max-width:600px){
    #sns,
    #location{
        flex-direction:column;
        
    }
    .sns-box,
    .location-info,
    .location-map{
       width:100%;
    }
    .sns-box{
        margin-bottom:30px;
    }

}

</style>