<template>
    <div>
        <div v-for="item in items" :key="item">
            <img :src="item.url" alt="">
            <p>写真オプション</p>

        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            items:[
               {url:'../assets/menu1.jpg'},
               {url:'../assets/menu2.jpg'},
               {url:'../assets/menu3.jpg'},



            ]
        }
    }
}
</script>