<template>
  <div v-if="loading" class="loading-page">
    <!-- <div class="sk-wave">
      <div class="sk-rect sk-rect1"></div>
      <div class="sk-rect sk-rect2"></div>
      <div class="sk-rect sk-rect3"></div>
      <div class="sk-rect sk-rect4"></div>
      <div class="sk-rect sk-rect5"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    requestCount: 0
  }),
  watch: {
    requestCount(v) {
      if (parseInt(v) <= 0 && this.loading) {
        this.loading = false
      } else if (parseInt(v) > 0 && !this.loading) {
        this.loading = true
      }
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    fail() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
// @import 'spinkit/scss/spinners/4-wandering-cubes.scss';

.loading-page {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 25, 0.4);
  background: transparent;
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  .sk-wave {
    // margin: 40px auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .sk-wave .sk-rect {
    background-color: #0094fe;
    height: 100%;
    width: 6px;
    display: inline-block;
    -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
    animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
  }
  .sk-wave .sk-rect1 {
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }
  .sk-wave .sk-rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .sk-wave .sk-rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  .sk-wave .sk-rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .sk-wave .sk-rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  @-webkit-keyframes sk-waveStretchDelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
  @keyframes sk-waveStretchDelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
}
</style>
