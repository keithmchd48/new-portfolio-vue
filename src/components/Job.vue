<template>
    <div class="job-section">
        <div class="display-flex justify-content-space-between">
            <div class="job-name-place">{{namePalce}}</div>
            <div class="job-date">{{jobDate}}</div>
        </div>
        <div class="job-designation">
            {{jobDesignation}}
        </div>
    </div>
</template>
<script>
    export default {
      name: 'Job',
      props: {
        namePalce: {
          type: String
        },
        jobDate: {
          type: String
        },
        jobDesignation: {
          typ: String
        }
      }
    }
</script>
<style scoped>
    .job-section {
        padding-top: 30px;
        padding-bottom: 30px;
        border-bottom: 1px solid #2A3C57;
    }
    .job-name-place {
        font-weight: 700;
        font-size: 20px;
        opacity: 0.8;
    }
    .job-date {
        color: #485A75;
        font-weight: 600;
    }
    .job-designation {
        font-weight: 500;
        color: #6B7F9C;
        font-size: 15px;
        padding-top: 0.5em;
    }
</style>