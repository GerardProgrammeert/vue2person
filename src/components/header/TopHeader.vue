<template>
  <div>
    <b-row class="mt-4 mb-4">
      <b-col class="top-header-title">
        <h1>{{ currentRouteName }}</h1>
      </b-col>
      <b-col>
        <div class="d-flex flex-row-reverse bd-highlight mr-2">
          <b-button variant="danger" @click="logOut" size="sm" >Log Out</b-button>
          <nav-menu/>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import NavMenu from "@/components/menus/NavMenu"
export default {
  name: "TopHeader",
  components:{
    NavMenu
  },
  props:{isLoggedOn:Boolean},
  methods:{
    logOut(){
      this.isLoggedOn = false
      localStorage.removeItem('account')
      this.$store.commit("logOut")
      this.$router.push({name:'Login'})
    }
  },
  computed: {
    currentRouteName() {

      var routeLabel = this.$route.meta.label

      if(routeLabel){
        return routeLabel
      }

      return ''

    }
  }
}
</script>

<style scoped>
  .top-header-title h1{
    font-size:24px;
  }
</style>