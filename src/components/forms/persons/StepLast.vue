<template>
  <div>
    <div v-if="isLoading">
      <b-spinner label="Spinning"></b-spinner>
      Data is being processed
    </div>
    <div v-if="hasError">
      <b-alert v-if="hasError" variant="danger" show>Something went wrong! Please try again</b-alert>
      <b-button @click="tryAgain">Try again</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StepLast",
  props: {person:Object},
  data(){
    return {
      isLoading:true,
      hasError:false
    }
  },
  methods:{
    tryAgain: function(){
      this.$store.commit("resetForm")
    }
  },
  mounted() {

    var payload = this.person

    if (this.person.id) {
      axios.patch("http://localhost:3000/persons/" + this.person.id, payload)
          .then(response => {
            console.log(response)
            setTimeout(() => {
              this.isLoading = false
              this.$router.push({name:'persons'})
              this.$store.commit("resetForm")
              this.$store.commit("updateIsStored",true)
            }, 1000)
          })
          .catch(error => {
            console.log(error.response.data)
            setTimeout(() => {
              this.isLoading = false
              this.hasError = true
            }, 1000)
          })
    }
    else {
      axios.post("http://localhost:3000/persons", payload)
          .then(response => {
            console.log(response.data)
            setTimeout(() => {
              this.isLoading = false
              this.$router.push({name:'persons'})
              this.$store.commit("resetForm")
              this.$store.commit("updateIsStored",true)
            }, 1000)
          })
          .catch(error => {
            console.log(error.response.data)
            setTimeout(() => {
              this.isLoading = false
              this.hasError = true
            }, 1000)
          })
    }
  }
}
</script>


<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>