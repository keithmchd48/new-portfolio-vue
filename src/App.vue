<template>
  <div id="app">
      <div id="page1">
          <Home></Home>
      </div>
      <div id="page2">
          <AboutMe></AboutMe>
      </div>
      <div id="page3">
          <Experience></Experience>
      </div>
      <div id="page4">

      </div>
  </div>
</template>

<script>
    import Home from './components/Home.vue'
    import Experience from './components/Experience.vue'
    import AboutMe from './components/AboutMe.vue'
    export default {
      name: 'app',
      components: {
        Home,
        Experience,
        AboutMe
      }
    }
</script>
<style>
    .justify-content-center {
        justify-content: center;
    }
    .justify-content-space-between {
        justify-content: space-between;
    }
    .justify-content-flex-start {
        justify-content: flex-start;
    }
    .justify-content-space-around {
        justify-content: space-around;
    }
    .display-flex {
        display: flex !important;
    }
    .flex-direction-column {
        flex-direction: column;
    }
    .flex-wrap-nowrap {
        flex-wrap: nowrap;
    }
    .align-items-center {
        align-items: center;
    }
    .align-items-flex-start {
        align-items: flex-start;
    }
    .align-content-space-between {
        align-content: space-between;
    }
    .flex-wrap-wrap {
        flex-wrap: wrap;
    }
    #page1 {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, rgb(219, 54, 164), rgb(247, 255, 0));
    }
    #page2 {
        height: 100vh;
        padding: 7em 0 7em 0;
    }
    #page3 {
        font-family: 'Avenir Next', 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        height: 100vh;
        padding: 7em 0 7em 0;
        background: #152e4e;
    }
    #page4 {
        height: 100vh;
    }
    .small-title {
        font-family: BenchNine, sans-serif;
        color: #27AEE8;
        font-size: 30px;
    }
    .big-title {
        font-family: Libre Franklin, sans-serif;
        color: #133F7F;
        font-style: italic;
        font-size: 50px;
        margin-top: -15px;
    }
</style>
