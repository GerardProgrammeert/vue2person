<template>
  <div id="app">
    <b-container fluid>
      <div class="top-header" v-if="isLoggedOn">
        <top-header />
      </div>
      <router-view class="view"></router-view>
    </b-container>
  </div>
</template>

<script>
import TopHeader from "@/components/header/TopHeader"
import {mapState} from "vuex";

export default {
  name: 'App',
  components: {
    TopHeader
  },
  mounted(){

    if(!this.$store.state.isLoggedOn){alert(this.$store.state.isLoggedOn)
      this.$router.push({name:'login'})
    }
  },
  computed: {
    ...mapState({
      isLoggedOn: (state) => state.isLoggedOn,
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
