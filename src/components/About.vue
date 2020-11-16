<template>
    <b-container>
      <img class="pink" id="vinyl" src="../assets/Vinyl@2x.png" alt="Vinyl-Shop">
              <b-row class="about-row">
          <b-col cols="2"></b-col>

          <b-col cols="2"></b-col>
        </b-row>
      <b-row  align-v="center" class="empty-s">
        <b-col cols="1"></b-col>
        <b-col cols="8">
            <h1 class="biggi-h1" id="hi">Hi ich bin Simon,</h1>
        </b-col>
      </b-row>
        <b-row class="about-row">
          <b-col cols="2"></b-col>

          <b-col cols="2"></b-col>
        </b-row>
      <b-row class="about-row">
        <b-col cols="1"></b-col>
        <b-col cols="7"><h2 >23 Jahre alt, komme aus Ingolstadt und <br/> studiere seit Oktober 2017 in Wiesbaden.</h2></b-col>
        <b-col cols="4"></b-col>
      </b-row>
      <b-row align-v="center" class="empty-s">
        <b-col cols="12"></b-col>
        <b-col></b-col>
      </b-row>
        <b-row class="about-row">
          <b-col cols="2"></b-col>
          <b-col cols="4">
              <div class="text-box">
              <p class="text">Behütet aufgewachsen ging es für mich ab auf das musische Gnadenthal-Gymnasium, das früher von 
              Klosterschwestern unterrichtet wurde. Leider fiel mir auf dem klassischen Wege der 
              Musik-Lehrer*innen das Lernen ziemlich schwer. Jedoch höre ich seit ich denken kann schon gerne  
              Musik.</p>
              </div>
          </b-col>
          <b-col cols="4">
            <div class="text-box">
              <p class="text">In den Sommerferien habe ich zwischen 14 und 20 Jahren für einige Wochen bei Continental 
              Ferienjobs gemacht. Jedenfalls habe ich dann 2015 mein Abi gemacht und wusste nicht so recht 
              was nun aus mir werden soll. Also habe ich zuerst wenig erfolgreich ein Jahr Geographie, eins 
              Soziologie studiert, nebenbei in einer Bar gearbeitet und bin aus dem Elternhaus gezogen.
              </p>
              </div>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
        <b-row class="about-row">
          <b-col cols="2"></b-col>
          <b-col cols="4">
            <div class="text-box">

              <h2 class="text">Geflohen vor der Seehofer’schen Kleinstadt-Mentalität der Audi-Stadt im Wandel des Kapitalismus 
                  in die Arme der hessischen Landeshauptstadt, ins Rhein-Main-Gebiet.</h2>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="text-box">
              <p class="text">In dieser Zeit habe ich auch das Reisen ganz neu entdeckt und ich bemerkte, dass es überall auf 
                  der Welt so viele interessante Dinge gibt. Und man muss nicht mal sehr weilt dafür Fahren. Ich 
                  hatte bis dahin kaum in Erwägung gezogen, einmal Informatik zu studieren, weil ich zwar ein 
                  recht ordentliches Mathemtik-Verständnis, jedoch kein  ……..
                  Also zog ich 2017 nach Wiesbaden, um dort Medieninformatik an der Hochschule Rhein-Main zu studieren.
              </p>
              </div>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
        <b-row class="about-row">
          <b-col cols="2"></b-col>

          <b-col cols="2"></b-col>
        </b-row>
        <b-row class="about-row">
          <b-col cols="2"></b-col>

          <b-col cols="2"></b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "About",
  mounted() {
        window.addEventListener("scroll", this.redirectUser)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.redirectUser)
    },

    methods: {
        redirectUser () {
          console.log(window.scrollY)
            if (window.scrollY < 1 ) {
                this.$router.push('/')
            } else if (window.scrollY > 1720 ) {
                this.$router.push('/coding')
            }
        }
    }
});
</script>

<style>
.person {
  position: absolute;
  top: 1%;
  left: 210px;
  height: 200%;
  background-color: #b6f1eb;
  color: #555b6e;
  text-align: left;
}

.empty-s{
  height: 300px;
}

.about-row{
  height: 350px;
  text-align: left;
}

.text-box{
  background-color: #555B6E;
  opacity: 0.8;
  padding: 30px;
  border-radius: 25px;
  box-shadow: -2px 3px 8px 0px #b6f1eb;
}

.text{
  opacity: 1;
}

#hi{
  text-align: center;
  color: #555B6E;
  opacity: 0.8;
  text-shadow: 3px 2px 2px #b6f1eb;
}

.hi2{
  position: absolute;
  padding-top: 40%;
  padding-left:100px;
  text-align: left;
  padding-bottom: 5%;

  width: 100%;
  height: 25%;
  color:#555B6E;
  opacity: 0.8;
}

.about-text {
  position: absolute;

  top: 47%;
  left: 0px;
  width: 100%;
  margin: 5%;
}

.about-small-left {
  position: relative;
  width: 40%;
  top: 20%;
  left: 0%; 
  float: left;
  margin-right: 5%;
  background-color: antiquewhite;
  opacity: 0.5;
}

.about-small-right {
  position: relative;
    top: 20%;
  left: 0%;
  float: left;
  width: 40%;
  background-color: antiquewhite;
  opacity: 0.5;
}

#vinyl {
  position: fixed;
  width: 100%;
  opacity: 0.5;
}

.pink {
  position: absolute;
  top: 0px;
  left: 140px;
  width: 100%;
}

.about-fade-enter {
    transition: all 3s ease;
}
.slide-fade-leave {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>