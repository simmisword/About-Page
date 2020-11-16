<template>
    <b-container>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <div id="codeTx"><h1 class="biggi-h1">Creative</h1></div>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <h2>Cover:</h2>
        <b-row class="placeholder"></b-row>
        <b-row class="pics">
            <b-col cols="2"></b-col>
            <b-col cols="4">
                <a href="https://open.spotify.com/track/448u2yJ8CMXdvi8OTAxmVL"><b-img thumbnail class="image" src="../assets/ma.blues.jpg" alt="Anatolian Lover ft. Jacob W. - ma.blues"></b-img></a>
            </b-col>
            <b-col cols="6">
                <div>
                <h1>ma blues</h1>
                <h3>Anatolian Lover</h3>
                Das war das erste Cover, das ich für Yasar machen durfte.<br/>
                Dabei habe ich das wunderschöne Bild von <a href="https://www.oliwolff.com/">@oliwolff</a> benutzt.
                </div>
            </b-col>
            <b-col cols="2"></b-col>
        </b-row>
        <b-row class="pics">
            <b-col cols="2"></b-col>
            <b-col cols="4">
                <div id="warnetx">
                <h1>Existed</h1>
                <h3>Anatolian Lover ft. Jacob W.</h3>
                </div>
            </b-col>
            <b-col cols="4">
                <a href="https://open.spotify.com/track/2ZO90qZMWIqqmEE9hTUY73"><b-img thumbnail class="image" src="../assets/existed_fin2.0.jpg" alt="Anatolian Lover ft. Jacob W. - Existed"></b-img></a>
            </b-col>
            <b-col cols="2"></b-col>
        </b-row>
        <b-row class="pics">
            <b-col cols="2"></b-col>
            <b-col cols="4">
                <a href="https://open.spotify.com/track/4RFhgxXMSFhyKhoMBhAgi1"><b-img thumbnail class="image" src="../assets/qualitytime2.jpg" alt="Anatolian Lover ft. Jacob W. - Qualitytime"></b-img></a>
            </b-col>
            <b-col cols="6">
                <div>
                <h1>Qualitytime</h1>
                <h3>Anatolian Lover</h3>
                </div>
            </b-col>
            <b-col cols="2"></b-col>        </b-row>
        <h2>Musik:</h2>

        <b-row class="placeholder"></b-row>
        <div class="centered">
            <h1>Between The Sheets</h1>
            <h3>Siggi Funkl</h3>
        </div>
        <b-row class="placeholder"></b-row>
        <b-row class="pics ">
            <b-col cols="4"></b-col>
            <b-col cols="4">
                <a href="https://soundcloud.com/user-80491418/sets/between-the-sheets"><b-img thumbnail class="image" src="../assets/between the sheets.png" alt="BTS"></b-img></a>
            </b-col>
            <b-col cols="4"></b-col>
        </b-row>
    </b-container>
<!-- 
            </div>
            <Soundcloud track="683327279" :mini="true"/>
        </div> -->
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
        height: 500px;
    }

    .image:hover{
        box-shadow: -3px 3px 10px #FFC4D1;
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