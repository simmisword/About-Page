<template>
    <b-container>
        <b-container>
            <img class="bg-pic" src="../assets/wasser.jpg" alt="raytracing">
            <b-row align-v="center" id="header">
                <b-col cols="8"></b-col>
            </b-row>
                        <b-row align-v="center" id="header">
                <b-col cols="8"></b-col>
            </b-row>

            <b-row align-v="center" class="landing-row">
                <b-col cols="1"></b-col>
                <b-col cols="2"><h1 class="biggi-h1 land-h">Coding.</h1></b-col>
                <b-col cols="9"></b-col>
            </b-row>
            <b-row align-v="center" class="landing-row">
                <b-col cols="9"></b-col>
                <b-col cols="3"><h1 class="biggi-h1 land-h">Creative.</h1></b-col>
            </b-row>
            <b-row align-v="center" class="landing-row">
                <b-col cols="8"></b-col>
            </b-row>
            <b-row align-v="center" class="landing-row">
                <b-col cols="8"></b-col>
            </b-row>

            <b-row align-v="center" class="landing-row">
                <b-col cols="1"></b-col>
                <b-col cols="2"><h1 class="biggi-h1">Solutions.</h1></b-col>
                <b-col cols="9"></b-col>        
            </b-row>
            <b-row align-v="center" class="landing-row">
                <b-col cols="8"></b-col>
                <b-col cols="2">
                    <div class="plant">
                        <a href="https://www.instagram.com/smallcornerarts/?hl=de">
                            <b-img src="../assets/pflanze.png" alt="plant"></b-img>
                        </a>
                    </div>
                </b-col>
            </b-row>
            <b-row align-v="center" class="landing-row">
                <b-col cols="8"></b-col>
            </b-row>
            <b-row align-v="center" class="landing-row">
                <b-col cols="8"></b-col>
            </b-row>
        </b-container>
        <b-container>
            <div class="whale">
                <a href="https://www.instagram.com/smallcornerarts/?hl=de">
                    <transition name="whale-fade" mode="out-in">
                        <div v-if="!isMirrored"><b-img id="whale-img" src="../assets/Whale.png" alt="Whale"></b-img></div>
                        <div v-else><b-img id="whale-img-mir" src="../assets/whale_mirrored.png" alt="WhaleM"></b-img></div>
                    </transition>
                </a>
            </div>
        </b-container>
    </b-container>
</template>

<script lang="js">
import { defineComponent} from '@vue/composition-api'
export default defineComponent({
    name: "Landing",

    data: function() {
        return {
            isMirrored:Boolean(false)
        }
    },

    mounted() {
        window.addEventListener("scroll", this.scrollHandle)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrollHandle)
    },

    methods: {
        scrollHandle() {
            console.log(window.scrollY, window.pageYOffset);
            console.log("mirrored-s: ",this.$data.isMirrored);
            if (window.scrollY > 200) {
                this.$data.isMirrored = true;
                console.log("mirrored-170: ",this.$data.isMirrored);
                if (window.scrollY > 400) {
                    this.$data.isMirrored = false;
                    console.log("mirrored-300: ",this.$data.isMirrored);                    
                }
                if (window.scrollY > 650 ) {
                    this.$router.push('/about')
                }
            } else this.$data.isMirrored =false;

        },

    }
});
</script>

<style>


    .landing-row{
        height: 200px;
    }

    .whale{
        position: relative;
        width: 30%;

    }

    .land-h{
        text-shadow: -2px 2px 0px gray;
    }

    #whale-img{
        position:fixed;
        top: 10%;
        left:40%;
        max-width: 100%
    }

    #whale-img-mir{
        position:fixed;
        top: 10%;
        left:38%;
        max-width: 100%;
        transform: rotate(5deg);
    }

    .plant {
        position: absolute;
        top: 800px;
        left: 40%;
        width: 20%;
        transform: rotate(180deg);
    }

    #header {
        height: 120px;
    }

    .whale-fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .whale-fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>