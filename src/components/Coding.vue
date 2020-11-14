<template>
        <div class="coding" @scroll="redirectUser()">
            <h1 id="codeTx">Coding</h1>
            <div class="projects">
                <div class="syntPr">
                    <img id="Synth" src="../assets/EIBO_Synth.png">
                </div>
                <div class="warnEPr">
                    <img id="warnE" src="../assets/warnE_1.png">
                </div>
            </div>
            <div class="prog">
                <ul class="programmiersprachen">
                    <h3>Programiersprachen:</h3>
                    <li class="programmiersprachen">Java</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>Vue.js</li>
                    <li>SwiftUI</li>
                    <li>Arduino</li>
                    <li>SQL</li>
                </ul>
            </div>
        </div>
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
            if (window.scrollY > 800 ) {
                this.$router.push('/creative')
            } if (window.scrollY <1 ) {
                this.$router.push('/about')
            }
        }
    }
})
</script>

<style>
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

    .prog{
        position: absolute;
        top: 80%;

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

    #Synth{
        position: relative;
        width: 50%;
    }

    #warnE{
        position: relative;
        width: 50%;
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
        position: relative;
        width: 10px;
    }

    .coding-fade-enter-active {
        animation: opacity 5s;
    }
    .bounce-leave-active {
        animation: opacity 5s reverse;

    }
</style>