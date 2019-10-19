<template>
    <div class="view-port-div display-flex flex-direction-column justify-content-space-between align-items-center">
        <div class="firstname-lastname display-flex justify-content-center flex-wrap-wrap">
            <span class="mr-2">Keith</span>
            <span>Machado</span>
        </div>
        <div class="designation display-flex justify-content-center flex-wrap-wrap">
            <span class="mr-2">Front-end</span>
            <span>Developer</span>
        </div>
        <div>
            <b-img rounded="circle" thumbnail
                   :src="profilePic"
                   alt="Responsive image"
                   class="profile-image"
            >
            </b-img>
        </div>
        <div>
            <a href="#page2">
                <b-button class="btn-get-to-know-me font-weight-bold"
                          variant="light"
                          size="lg"
                >
                    Get to know me
                </b-button>
            </a>
        </div>
    </div>
</template>
<script>
  import keithImg from '../assets/images/keith-dp.png'
    export default {
      name: 'Home',
      data () {
        return {
          profilePic: keithImg
        }
      },
    }
</script>
<style scoped>
    .profile-image {
        height: 200px;
        width: 200px;
    }
    .firstname-lastname {
        text-transform: uppercase;
        font-size: 40px;
        color: #FFFF;
        font-family: Libre Franklin, sans-serif;
    }
    .designation {
        color: #FFFF;
        font-family: Libre Franklin, sans-serif;
    }
    .btn-get-to-know-me {
        color: #33418A !important;
    }
    .view-port-div {
        height: 70%;
        width: 100%;
    }
</style>