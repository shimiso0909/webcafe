<template>
    <div class="news-contents wrapper">
        <articlemain></articlemain>
        <asidemain></asidemain>
    </div>
    
</template>
<script>
import articlemain from "../components/articlemain"
import asidemain from "../components/asidemain"
export default {
    components:{
        articlemain,
        asidemain

    }
}
</script>
<style>
    .news-contents{
        display:flex;
        justify-content: space-between;
        margin-bottom:50px;
    }
    /**記事部分 */
    article{
        width:74%;
    }
    /**サイドバー部分 */
    aside{
        width:22%;
    }
    /**モバイル版 */
    @media(max-width:600px){
        .news-contents{
        flex-direction: column;
        
    }
    article,aside{
        width:100%;
    }
    }

</style>