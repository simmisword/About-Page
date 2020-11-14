<template>
        <div class="landing" @scroll="isMirrored()">
            <h1 class="txcoding">Coding.</h1>
            <h1  class="txcreative">Creative.</h1>
            <h1  class="txsolution">Solutions.</h1>
            <a href="https://www.instagram.com/smallcornerarts/?hl=de">
            
            <img v-if="!m" class="whale" src="../assets/Whale.png" alt="Whale">
            <img v-if="m" class="whale" src="../assets/whale_mirrored.png" alt="Whale">
            <img class="plant" src="../assets/pflanze.png" alt="plant">
            </a>
        </div>
</template>

<script lang="ts">
import { defineComponent, computed , ref } from '@vue/composition-api'
export default defineComponent({
    name: "Landing",


    setup() {
        const m = ref(false)

        function isMirrored() {
            console.log(window.pageYOffset)
            if (window.pageYOffset > 10){
                if (window.pageYOffset < 250 ){
                    m.value = true;
                }
            }
            else m.value = false;
        }

        return {m , isMirrored};
    },

    mounted() {
        window.addEventListener("scroll", this.redirectUser)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.redirectUser)
    },

    methods: {
        redirectUser() {

            if (window.scrollY > 350 ) {
                this.$router.push('/about')
            }
        }
    }
});
</script>

<style>
    .landing {
        position: absolute;
        /* position:-webkit-sticky; */
        /* position: sticky; */
        top: 0%;
        left: 210.5px;
        width: 85.5%;
        height: 173%;
        float: left;
        background-color:  #555B6E;
        border-style: none none solid solid;
        border-color: #FFC4D1;
        border-width: 4px;
        box-shadow: -5px 0px 12px #86B1AD;
    }

    .whale{
        position: fixed;
        top: 10%;
        left:43%;
        max-width: 25%;
    }

    .txcoding {
        position: absolute;
        top: 40px;
        left: 100px;
    }

    .txcreative {
        position: absolute;
        top: 25%;
        left: 65%;
    }

    .txsolution {
        position: absolute;
        top: 800px;
        left: 80px;
    }

    .plant {
        position: absolute;
        top: 68%;
        left: 40%;
        max-width: 150px;
        transform: rotate(180deg);
    }



</style>