<template>
  <div>
    <div class="mt-4 mb-4">
      Steps
      <b-progress :value="step" :max="2" show-progress animated></b-progress>
    </div>
    <b-card>
      <form-register-person/>
    </b-card>
  </div>
</template>

<script>
import FormRegisterPerson from '@/components/forms/persons/FormRegister'

export default {
  name: "Register",
  components:{FormRegisterPerson},
  computed:{
    step:function(){
      return this.$store.state.step
    }
  }
}
</script>

<style scoped>

</style>