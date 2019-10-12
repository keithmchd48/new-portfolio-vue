<template>
  <div id="app">
      <b-container fluid class="bv-example-row">
          <b-row id="page-1">
              <b-col class="d-flex flex-column justify-content-center align-items-center">
                  <div class="d-flex flex-row flex-wrap-wrap justify-content-center firstLastName">
                      <span class="mr-3">Keith</span>
                      <span>Machado</span>
                  </div>
                  <div class="mb-3 designation">
                      Front-end Developer
                  </div>
                  <b-img rounded="circle" thumbnail
                         :src="image"
                         alt="Responsive image"
                         class="profileImg mb-5"
                  >
                  </b-img>
                  <div>
                      <a href="#page-2">
                          <b-button class="btnGetToKnowMe font-weight-bold"
                                    variant="light"
                                    size="lg"
                          >
                              Get to know me
                          </b-button>
                      </a>
                  </div>
              </b-col>
          </b-row>
          <b-row id="page-2">
              <b-container class="d-flex flex-column justify-content-space-between">
                  <div class="d-flex flex-column">
                      <span class="small-title">
                            {{'A Little Bit' | allUppercase}}
                      </span>
                      <span class="big-title">
                          {{'About Me' | allUppercase}}
                      </span>
                  </div>
                  <div>
                      <p class="aboutMeText">
                          Hello! My name is Keith Machado. I am a Front-end Developer who currently lives and works in Mumbai, India.
                      </p>
                      <p class="aboutMeText">
                          I have always had a passion for creating things. Nowadays I use this creativity to design and develop software to impact, excite and positively influence people.
                      </p>
                      <p class="aboutMeText">
                          When I'm not busy developing I like to pass the time watching all genres of movies, learning new languages, reading or just casually browsing YouTube.
                      </p>
                  </div>
                  <div class="d-flex flex-row justify-content-flex-start flex-wrap-nowrap">
                      <i class="fa fa-linkedin-square"></i>
                  </div>
              </b-container>
          </b-row>
      </b-container>
  </div>
</template>

<script>
    import keithImg from './assets/images/keith-dp.png'
    export default {
        name: 'app',
        data () {
            return {
                image: keithImg
            }
        },
        filters: {
            allUppercase (value) {
                return value.toUpperCase()
            }
        }
    }
</script>
<style>
    html {
        scroll-behavior: smooth;
    }
    .profileImg {
        height: 200px;
        width: 200px;
    }
    #page-1 {
        background: linear-gradient(to right, rgb(219, 54, 164), rgb(247, 255, 0));
        height: 100vh;
    }
    #page-2 {
        height: 100vh;
        padding: 7em 0 7em 0;
    }
    .firstLastName {
        text-transform: uppercase;
        font-size: 40px;
        color: #FFFF;
        font-family: Libre Franklin, sans-serif;
    }
    .designation {
        color: #FFFF;
        font-family: Libre Franklin, sans-serif;
    }
    .btnGetToKnowMe {
        color: #33418A !important;
    }
    .big-title {
        font-family: Libre Franklin, sans-serif;
        color: #133F7F;
        font-style: italic;
        font-size: 50px;
        margin-top: -15px;
    }
    .small-title {
        font-family: BenchNine, sans-serif;
        color: #27AEE8;
        font-size: 30px;
    }
    .aboutMeText {
        font-family: 'Avenir Next', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 20px;
    }
    .fa-linkedin-square {
        color: #0073b0;
        cursor: pointer;
        font-size: 70px;
    }
</style>
