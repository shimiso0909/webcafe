<template>
    <div>
        <div v-for="item in items" :key="item.url">
            <img :src='item.url' :alt="item.alt" />
            
            <p>写真オプション</p>

        </div>
    </div>
    
</template>
<script>
export default {
    
    data(){
        return{
            
            items:[
               {url:require('@/assets/menu1.jpg'),alt:"menu1"},
               {url:require('@/assets/menu2.jpg'),alt:"menu2"}, 
               {url:require('@/assets/menu3.jpg'),alt:"menu3"},
               {url:require('@/assets/menu4.jpg'),alt:"menu4"},
               {url:require('@/assets/menu5.jpg'),alt:"menu3"},
               {url:require('@/assets/menu6.jpg'),alt:"menu3"},
               {url:require('@/assets/menu7.jpg'),alt:"menu3"},
               {url:require('@/assets/menu8.jpg'),alt:"menu3"},
               {url:require('@/assets/menu9.jpg'),alt:"menu3"},
               


            ]
        }
    }

}
</script>