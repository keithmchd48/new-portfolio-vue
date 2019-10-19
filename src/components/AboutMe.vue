<template>
    <div class="display-flex flex-direction-column container">
        <div class="small-title">
            {{'A Little Bit' | allUppercase}}
        </div>
        <span class="big-title">
                  {{'About Me' | allUppercase}}
              </span>
        <div class="mt-3">
            <p class="about-me-txt">
                Hello! My name is Keith Machado. I am a Front-end Developer who currently lives and works in Mumbai, India.
            </p>
            <p class="about-me-txt">
                I have always had a passion for creating things. Nowadays I use this creativity to design and develop software to impact, excite and positively influence people.
            </p>
            <p class="about-me-txt">
                When I'm not busy developing I like to pass the time watching all genres of movies, learning new languages, reading or just casually browsing YouTube.
            </p>
        </div>
        <div class="display-flex justify-content-flex-start flex-wrap-nowrap">
            <a href="https://www.linkedin.com/in/keith-machado-591a6181/" target="_blank">
                <i class="fa fa-linkedin-square"></i>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'AboutMe'
    }
</script>
<style scoped>
    .about-me-txt {
        font-family: 'Avenir Next', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 20px;
    }
    .fa-linkedin-square {
        color: #a3a3a3;
        cursor: pointer;
        font-size: 70px;
    }
    .fa-linkedin-square:hover {
        color: #0073b0;
    }
</style>