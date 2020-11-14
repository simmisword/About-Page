<template>
        <div class="creative" @scroll="redirectUser()">
            <h1>Creative</h1>
            <div class="pics" >
                <a href="https://open.spotify.com/track/448u2yJ8CMXdvi8OTAxmVL"><img class="bild" id="mablues" src="../assets/ma.blues.jpg" alt="Anatolian Lover ft. Jacob W. - ma.blues"></a>
                <a href="https://open.spotify.com/track/2ZO90qZMWIqqmEE9hTUY73"><img class="bild" id="existed" src="../assets/existed_fin2.0.jpg" alt="Anatolian Lover ft. Jacob W. - Existed"></a>
                <a href="https://open.spotify.com/track/4RFhgxXMSFhyKhoMBhAgi1"><img class="bild" id="qtime" src="../assets/qualitytime2.jpg" alt="Anatolian Lover ft. Jacob W. - Qualitytime"></a>
            </div>
            <div class="music">
                <a href="https://soundcloud.com/user-80491418/sets/between-the-sheets"><img class="bild" id="bts" src="../assets/between the sheets.png" alt="BTS"></a>

            </div>
            <Soundcloud track="683327279" :mini="true"/>
        </div>
</template>

<script >
import SoundCloud from "vue-soundcloud-player"
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
    name: "Creative",
    components:{
        SoundCloud
    },

    mounted() {
        window.addEventListener("scroll", this.redirectUser)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.redirectUser)
    },

    methods: {
        redirectUser() {

            if (window.scrollY < 1 ) {
                this.$router.push('/coding')
            }
        }
    }
})
</script>

<style>
    .creative {
        position: absolute;
        top: 1%;
        left: 210px;
        width: 85%;
        height: 200%;
        float: left;
        background-color:  #555B6E;
        border-style: none none solid solid;
        border-color: #FFC4D1;
        border-width: 4px;
        box-shadow: -5px 0px 12px #86B1AD;
    }

    .pics {
        position: absolute;
        padding-left: 1%;
        width: 99%;
        background-color: #FFC4D1;
    }

    .bild {
        float: left;
        max-width: 30%;
        margin: 1%;
        border-style: solid;
        border-color: #FFC4D1;
        border-width: 3px;
    }

    #mablues {
        box-shadow: 4px 4px 15px 1px grey;
    }

    #existed {
        box-shadow: 0px 4px 15px 1px grey;
    }

    #qtime {
        box-shadow: -4px 4px 15px 1px grey;
    }

    #bts{
        position: absolute;
        top: 40%;
        padding-left: 1%;
        width: 99%;
    }

</style>