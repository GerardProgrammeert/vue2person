<template>
  <div>
    <b-row>
      <b-col>
        <b-button class="mr-2" v-if="currentStep > 0" @click="submit(-1)">
          <span>Previous</span>
        </b-button>
        <b-button  v-if="currentStep < maxStep -1 " @click="submit(1)">
          <span>Next</span>
        </b-button>
        <b-button  v-if="currentStep == maxStep -1 " @click="submit(1)">
          <span>Finish</span>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "FormNav",
  props: {validator:Object},
  data(){
    return{
     maxStep : 2
    }
  },
  methods: {
    submit: function (move) {
      this.validator.validate().then(valid => {
        if (valid) {
          this.$store.commit("updateFormStep", move)
        }
      })
    }
  },
  computed: {
    ...mapState({
      currentStep: (state) => state.step
    })
  },
}
</script>

<style scoped>

</style>