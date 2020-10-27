<template>
    <div>
        <div class="landing">
            <div id="coding"><h1>Coding.</h1></div>
            <img id="whale" src="../assets/Whale.png" alt="Whale">
            <div id="creative"><h1>Creative.</h1></div>
        </div>
        <div class="person">
            <h1>Siggi Funkl</h1>
            <p>Ich bin ein kleiner blablabla...</p>

        </div>
        <div class="coding">
            <h1>Coding</h1>
            <p>In meinem Studium habe ich schon so viel programmiert...</p>
        </div>
        <div class="creative">
            <h1>Creative</h1>
            <p>Ich bin ja soooo kreativ ...</p>
            <Soundcloud track="683327279" :mini="true" @ready="ready"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
//import SoundCloud from 'vue-soundcloud-player'
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
    name: "Landing",
    components:{
        //SoundCloud
    },
    methods:{
        //ready(){

        //}
    }
})
</script>

<style>
    .landing {
        position: absolute;
        top: 0px;
        left: 15%;
        width: 85%;
        height: 200%;
        float: left;
        background-color:  #555B6E;
        border-style: none none solid solid;
        border-color: #FFC4D1;
        border-width: 4px;
        box-shadow: -5px 0px 12px #86B1AD;
    }

    .person {
        position: absolute;
        top: 200%;
        left: 15%;
        width: 85%;
        height: 200%;
        float: left;
        background-color:#B6F1EB;
    }

    .coding {
        position: absolute;
        top: 400%;
        left: 15%;
        width: 85%;
        height: 200%;
        float: left;
        background-color:  #555B6E;
        border-style: none none solid solid;
        border-color: #FFC4D1;
        border-width: 4px;
        box-shadow: -5px 0px 12px #86B1AD;
    }

    .creative {
        position: absolute;
        top: 600%;
        left: 15%;
        width: 85%;
        height: 200%;
        float: left;
        background-color:  #555B6E;
        border-style: none none solid solid;
        border-color: #FFC4D1;
        border-width: 4px;
        box-shadow: -5px 0px 12px #86B1AD;
    }

    #whale{
        position: fixed;
        top: 10%;
        left:45%;
        max-width: 20%;
    }

    #coding {
        position: absolute;
        top: 3%;
        left: 10%;
    }

    #creative {
        position: absolute;
        top: 20%;
        left: 65%;
    }


</style>