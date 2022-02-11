<template>
  <div>
    <h3>{{view.title}}</h3>
    <component v-bind:is="view.component" :person="person" ></component>
  </div>
</template>

<script>
import StepOne from '@/components/forms/persons/StepOne'
import StepTwo from '@/components/forms/persons/StepTwo'
import StepLast from '@/components/forms/persons/StepLast'
import {mapState} from "vuex"

export default {
  name: "FormRegisterPerson",
  components:{StepOne,StepTwo,StepLast},
  props:{personToEdit:Object},
  data() {
    return {
      step:0,
      loading:true,
      views:[{component:'StepOne',title:'Person Data'},{component:'StepTwo',title:'Contact info'}, {component:'StepLast',title:''}],
    }
  },
  computed:{
    ...mapState({
      currentStep: (state) => state.step
    }),
    view:function(){
      return this.views[this.currentStep]
    },
    person:function(){
      if(this.personToEdit) {
        return this.personToEdit;
      }
      else{
        return {
          first_name:'',
              last_name:'',
              email:'',
              age:'',
              city:'',
              zipcode:'',
        }
      }
    }
  },
}
</script>

<style scoped>
body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
}
</style>