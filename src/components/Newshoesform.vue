<template>

<div>
    <input type="text" v-model="shoeName" placeholder="nom de la chaussure">
    <div class="canvas">
        <p>Test de dom to image</p>
        <img src="@/assets/logo.png" alt="">
    </div>
    <button @click="screenShot">Sauvegarde</button>
</div>  
</template>
<script>
/*import axios from "axios";*/
import domtoimage from "dom-to-image-more"

export default{
    data (){
        return{
            shoeName: ''
        }
    },
    methods: {
    screenShot(){

        domtoimage.toJpeg(document.querySelector('.canvas'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
    }
}
}


</script>
<style scoped>

</style>