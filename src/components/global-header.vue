<template>
<body>

        <header class="page-header wrapper">
            <h1><router-link to="/"><img class="logo" src="../assets/logo.svg" alt="Webcafehome"></router-link></h1>
            <nav>
                <ul class="main-nav">
                    <li ><router-link to="/news">NEWS</router-link></li>
                    <li><router-link to="/menu">MENU</router-link></li>
                    <li><router-link to="/contact">CONTACT</router-link></li>
                </ul> 
            </nav>
        
        </header>
</body>
</template>

<script>

export default {
    
    

}
</script>
<style>
/*header */
 .logo{
     width:210px;
     margin-top:14px;
     
 }
.main-nav{
    display:flex;
    font-size:1.25rem;
    text-transform: uppercase;
    margin-top: 34px;

}
.main-nav li{
    margin-left:36px;
}

.main-nav a{
    color:#432;
}
.main-nav a:hover{
    color:#0bd;
}
.page-header{
    display:flex;
    justify-content: space-between;
}

/*header Home*/
.wrapper{
   max-width:1100px;
   margin:0 auto;
   padding:0 4%;

 }
 /**モバイル版 */
 @media(max-width:600px){
     .main-nav{
         margin-top:10px;
         font-size:1rem;
     }
     .main-nav li{
        margin:0 20px;
    }
    .page-header{
    flex-direction:column;
    align-items: center;
    }
 }

 </style>