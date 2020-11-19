<template>
    <b-container>
        <img class="bg-pic" src="../assets/raytrace.jpeg" alt="raytracing">
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <div id="codeTx"><h1 class="biggi-h1">Coding</h1></div>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="coding-row">
            <b-col cols="1"></b-col>
            <b-col fluid cols="6">
                <b-img id="synth" src="../assets/EIBO_Synth.png"></b-img>
            </b-col>
            <b-col cols="5">
                <div class="text-box">
                <h1>Synthesizer</h1>
                <h3>Entwicklung interaktiver Benutzeroberflächen</h3>
                Wir haben im Zuge eines Moduls in der Uni zu zweit einen digitalen Synthesizer mit entsprechender GUI entwickelt.<br/>
                Man konnte 3 Oszillatoren einstellen, in mehreren Oktaven über Keyboard-Input oder Klick auf die Tasten Töne abspielen, sowie Dreiklänge erzeugen. 
                </div>
            </b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="coding-row" id="warnEtx">
            <b-col cols="2"></b-col>
            <b-col cols="5">
                <div class="text-box" id="warnetx">
                <h1>warnE</h1>
                <h3>Mensch Computer Interaktion</h3>
                Wir haben im Zuge eines Moduls in der Uni zu dritt einen "Warnhelm für Blinde" entwickelt.<br/>
                Die 6 Ultraschall-Sensoren waren an einen Arduino angeschlossen und die Signale wurden anschließend auf 6 Vibrationsmodule gesteuert, sodass man über die Vibrations-Signale ein grobes Bild der direkten Umgebung hatte, ohne seine Augen zu benutzen. 
                </div>
            </b-col>
            <b-col cols="5">
                <b-img id="synth" src="../assets/warnE_1.png"></b-img>
            </b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="coding-row">
            <b-col cols="1"></b-col>
            <b-col cols="4">
                <div class="text-box">
                <h3>Programiersprachen:</h3>
                <ul>
                    <li >Java</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>Vue.js</li>
                    <li>SwiftUI</li>
                    <li>Arduino</li>
                    <li>SQL</li>
                </ul>
                </div>
            </b-col>
            <b-col cols="6"></b-col>
        </b-row>
                <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
        <b-row class="placeholder">
            <b-col cols="12"></b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
    name: "Coding",
    mounted() {
        window.addEventListener("scroll", this.redirectUser)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.redirectUser)
    },

    methods: {
        redirectUser () {
            console.log(window.scrollY)
            if (window.scrollY > 1600 ) {
                this.$router.push('/creative')
            } if (window.scrollY <1 ) {
                this.$router.push('/about')
            }
        }
    }
})
</script>

<style>
    .placeholder{
        height: 100px;
    }

    .coding {
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
    .coding-row{
        height: 300px;
    }
    .prog{
        position: absolute;
        top: 80%;

    }

    #codeTx{
        padding: 100px;
    }

    #warnetx{
        text-align:right;
    }

    .programmiersprachen {
        position: relative;
        text-align: center;
        width: 10%;
    }

    .projects{
        position: absolute;
        width: 100%;
    }

    .synthPr{
        position: relative;
        width: 100%;
        height: 20%;
    }

    .warnEPr{
        position: relative;
        width: 100%;
        height: 20%;
    }



    .bildcod{
        float: left;
        max-width: 30%;
        margin: 1%;
        border-style: solid;
        border-color: #FFC4D1;
        border-width: 3px;
    }

    #synth{
        width: 100%;
    }

    .coding-fade-enter-active {
        animation: opacity 5s;
    }
    .bounce-leave-active {
        animation: opacity 5s reverse;

    }

</style>