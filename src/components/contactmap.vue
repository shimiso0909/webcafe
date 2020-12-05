<template>
    <section id=location>
        <div class="location-info">
            <h3 class="sub-title">
                カフェ東駅前店
            </h3>
            <p>
                住所：東京都世田谷区<br>
                用賀2−30−1 <br>
                サンマール用賀201 <br>
                電話：080-8558-8341 <br>
                営業時間：~~~~ <br>
                休日：水曜日
            </p>
        </div>
        <div class="location-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.117150886062!2d139.63429595076502!3d35.62483834057297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f471df7b4f1f%3A0x35ee92c7f2e49c80!2z44CSMTU4LTAwOTcg5p2x5Lqs6YO95LiW55Sw6LC35Yy655So6LOA77yS5LiB55uu77yT77yQ4oiS77yR!5e0!3m2!1sja!2sjp!4v1607167968150!5m2!1sja!2sjp" width="800" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        </div>
    </section>
</template>
<style>
#location{
    display:flex;
    justify-content: space-between;
    margin-bottom:4%;


}
.location-info{
    width:22%;
    margin-top:20px;

}
.sub-title{
    font-weight:normal;
    border-bottom:2px #0db solid;
    font-size:1.65rem;
}
.location-info p{
    padding:12px 10px;
}
.location-map{
    width:74%;
}
iframe{
    width:100%;
}
</style>