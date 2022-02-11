<template>
  <div>
    <transition name="fade">
      <b-alert v-if="isStored" variant="success" show>Person Succesfull stored</b-alert>
    </transition>
    <table-persons/>
  </div>
</template>

<script>

import TablePersons from '@/components/person/Table';


export default {
  name: "IndexPerson",
  components:{ TablePersons },
  mounted(){
    setTimeout(() => {
      this.$store.commit("updateIsStored",false)
    }, 3000)
  },
  computed:{
    isStored:function(){
      return this.$store.state.isStored
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>