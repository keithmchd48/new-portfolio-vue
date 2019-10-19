<template>
    <div class="container">
        <div class="display-flex flex-direction-column">
            <div class="small-title">
                {{'My Career' | allUppercase}}
            </div>
            <span class="big-title" style="color: #FFFF;">
            {{'Experience' | allUppercase}}
        </span>
            <div class="mt-3 experience-grip">
                <Job namePalce="HNR Tech, Mumbai"
                     jobDate="Feb 2019 - Present"
                     jobDesignation="Front-end Developer"
                ></Job>
                <Job namePalce="Stelcore Technologies, Mumbai"
                     jobDate="Dec 2017 - Jan 2019"
                     jobDesignation="Intern + Full-stack Developer"
                ></Job>
            </div>
        </div>
    </div>
</template>
<script>
    import Job from '../components/Job.vue'
    export default {
      name: 'Experience',
      components: {
        Job
      }
    }
</script>
<style scoped>
    .experience-grip {
        color: #FFFF;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }
</style>