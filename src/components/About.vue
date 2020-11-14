<template>
    <div class="person" transition="about-fade">
        <div class="pink">
          <h1 class="hi">Hi ich bin Simon,</h1>
          <img id="vinyl" src="../assets/Vinyl@2x.png" alt="Vinyl-Shop">
        </div>
        <div class="about-text">
          <div class="about-small-left">
              <p>23 Jahre alt, komme aus Ingolstadt und studiere seit Oktober 2017 in Wiesbaden.<br/>
              Behütet aufgewachsen ging es für mich ab auf das musische Gnadenthal-Gymnasium, das früher von 
              Klosterschwestern unterrichtet wurde. Leider fiel mir auf dem klassischen Wege der 
              Musik-Lehrer*innen das Lernen ziemlich schwer. Jedoch höre ich seit ich denken kann schon gerne  
              Musik.</p>
          </div>
          <div class="about-smal-right">
              <p>In den Sommerferien habe ich zwischen 14 und 20 Jahren für einige Wochen bei Continental 
              Ferienjobs gemacht. Jedenfalls habe ich dann 2015 mein Abi gemacht und wusste nicht so recht 
              was nun aus mir werden soll. Also habe ich zuerst wenig erfolgreich ein Jahr Geographie, eins 
              Soziologie studiert, nebenbei in einer Bar gearbeitet und bin aus dem Elternhaus gezogen.</p>
          </div>
          <div class="about-small-left">
              <h2>Geflohen vor der Seehofer’schen Kleinstadt-Mentalität der Audi-Stadt im Wandel des Kapitalismus 
                  in die Arme der hessischen Landeshauptstadt, ins Rhein-Main-Gebiet.</h2>
          </div>
          <div class="about-text-right">
              <p>In dieser Zeit habe ich auch das Reisen ganz neu entdeckt und ich bemerkte, dass es überall auf 
                  der Welt so viele interessante Dinge gibt. Und man muss nicht mal sehr weilt dafür Fahren. Ich 
                  hatte bis dahin kaum in Erwägung gezogen, einmal Informatik zu studieren, weil ich zwar ein 
                  recht ordentliches Mathemtik-Verständnis, jedoch kein  ……..
                  Also zog ich 2017 nach Wiesbaden, um dort Medieninformatik an der Hochschule Rhein-Main zu studieren.</p>
          </div>
        </div>
    </div>
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
            if (window.scrollY < 1 ) {
                this.$router.push('/')
            } else if (window.scrollY > 700 ) {
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

.hi{
  position: absolute;
  margin:auto;
  text-align: center;
  padding-top: 5%;
  width: 100%;
  height: 25%;
  color: #555B6E;
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
  position: relative;
  top:0px;
  left: 0pt;
  width: 100%;
  opacity: 0.6;
}

.pink {
  position: relative;
  top: 0%;
  left: 0px;
  width: 100%;
}

.about-fade-enter {
    transition: all 3s ease;
}
.slide-fade-leave {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>