<template>
  <div>
    <div class="mt-4 mb-4">
      Steps Edit
      <b-progress :value="step" :max="2" show-progress animated></b-progress>
    </div>
    <b-card>
      <form-register-person :personToEdit="person"/>
    </b-card>
  </div>
</template>

<script>
import FormRegisterPerson from '@/components/forms/persons/FormRegister'
import axios from "axios";

export default {
  name: "Edit",
  components:{FormRegisterPerson},
  data() {
    return {
     person:null
    }
  },
  mounted(){
    //this.$store.commit("resetForm", 0)
    var personID = this.$route.params.id

    axios.get('http://localhost:3000/persons/'+personID).then(response =>{
        this.person = response.data
    })
    .catch(error => console.log(error))
    .finally(()=> {

       }
    )
  },
  computed:{
    step:function(){
      return this.$store.state.step
    }
  }
}
</script>

<style scoped>

</style>