<template>
  <div>
    <b-form>
      <b-row class="pt-0 pb-2">
        <b-col>
          <b-input-group>
            <b-input-group-prepend is-text>
              <span>City</span>
            </b-input-group-prepend>
            <b-input v-model="person.city" v-validate="{ required: true}" :state="validateState('city')" name="city" lg="12" type="text" v.b.tooltip.hover title="Enter your city" placeholder="Please enter your city"/>
          </b-input-group>
        </b-col>
        <b-col>
          <b-input-group>
            <b-input-group-prepend is-text>
              <span>Zipcode</span>
            </b-input-group-prepend>
            <b-input v-model="person.zipcode" v-validate="'required'" type="text" v.b.tooltip.hover title="Enter your zipcode" placeholder="Please enter your zipcode"/>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="pt-2 pb-2">
        <b-col lg="6">
          <b-input-group>
            <b-input-group-prepend is-text>
              <span>Email</span>
            </b-input-group-prepend>
            <b-input v-model="person.email" v-validate="'required|email'" :state="validateState('email')" name="email"  type="email" v.b.tooltip.hover title="Enter your email" placeholder="Please enter your email"/>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="pt-2 pb-2">
        <b-col>
          <form-nav :validator="this.$validator" />
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import FormNav from '@/components/forms/persons/FormNav'
export default {
  name: "StepTwo",
  props: {person:Object},
  components:{
    FormNav
  },
  methods: {
   validateState(ref) {
      if (
          this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      )
      {
        return !this.veeErrors.has(ref);
      }
      return null;
    }
  }
}
</script>

<style scoped>

</style>