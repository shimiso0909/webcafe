<template>
    <div>
        <div id="news" class="big-bg">
            <global-header></global-header>
        
            <div class="wrapper">
                <h2 class="page-title">News</h2>
            </div>
        </div>
        <newsmain></newsmain>
        <global-footer></global-footer>
    </div>
</template>
<script>
import GlobalHeader from '../components/global-header'
import GlobalFooter from '../components/global-footer'
import newsmain from '../components/newsmain'


export default {
  components:{
    GlobalHeader,
    GlobalFooter,
    newsmain

}
  
}
</script>
<style scoped>
#news{
background-image:url("../assets/news-bg.jpg");
height:270px;
margin-bottom:40px;
}
#news .page-title{
text-align:center;
text-transform: uppercase;
}
/**モバイル版 */
@media(max-width:600px){
    #news .page-title{
        margin-top:30px;
    }
}
</style>