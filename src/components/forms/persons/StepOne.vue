<template>
  <div>
    <b-form>
      <b-row class="pt-0 pb-2">
        <b-col>
          <b-input-group>
            <b-input-group-prepend is-text>
              <span>First name</span>
            </b-input-group-prepend>
            <b-input v-model="person.first_name" v-validate="{ required: true}" :state="validateState('first_name')" name="first_name" lg="12" type="text" v.b.tooltip.hover title="Enter your first name" placeholder="Please enter your first name"/>
          </b-input-group>
        </b-col>
        <b-col>
          <b-input-group>
            <b-input-group-prepend is-text>
              <span>Last name</span>
            </b-input-group-prepend>
            <b-input v-model="person.last_name" type="text" v.b.tooltip.hover title="Enter your last name" placeholder="Please enter your last name"/>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="pt-2 pb-2">
        <b-col lg="6">
          <b-input-group>
            <b-input-group-prepend is-text>
              <span>Age</span>
            </b-input-group-prepend>
            <b-input v-model="person.age" v-validate="'required|numeric'" :state="validateState('age')" name="age"  type="number" min="0" v.b.tooltip.hover title="Enter your age" placeholder="Please enter your aage name"/>
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
  name: "StepOne",
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