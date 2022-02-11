<template>
  <div>
    <b-row>
      <b-col style="margin-top:5%" offset-lg="3" lg="6">
        <b-row class="shadow p-3 mb-5 bg-white rounded">
          <b-col>
            <div class="d-flex align-items-center">
              <img :src="image"/>
            </div>
          </b-col>
          <b-col class="mt-3 mb-3">
            <h2>Sign in</h2>
            <b-form>
              <b-form-row class="mt-3 mb-3">
                <b-col>
                  <b-form-group label="Username">
                    <b-input-group>
                      <b-input-group-prepend is-text>
                        <b-icon-person-fill/>
                      </b-input-group-prepend>
                      <b-form-input type="email" v-model="username" v-b-tooltip.hover="'Enter your username'" placeholder="username"/>
                    </b-input-group>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row class="mt-3 mb-3">
                <b-col>
                  <b-form-group label="Password">
                    <b-input-group>
                      <b-input-group-prepend is-text>
                        <b-icon-key-fill/>
                      </b-input-group-prepend>
                      <b-form-input type="password" v-model="password" name="password" v-b-tooltip.hover="'Enter your password'" placeholder="password"/>
                    </b-input-group>
                  </b-form-group>
                </b-col>
              </b-form-row>
              <b-form-row>
                <b-col>
                  <b-form-group>
                    <b-button block class="text-center" style="background:orange;border-color:orange" @click="logIn(username,password)">
                      Sign in
                    </b-button>
                  </b-form-group>
                </b-col>
              </b-form-row>
            </b-form>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import image from "@/assets/logo_bmade.png"
export default {
  name: "LogIn",
  props: {},
  data: function () {
    return {
      image: image,
      username:"gwjvanhattem@gmail.com",
      password: "Gerard12",
      accounts:[
        {username:'gwjvanhattem@gmail.com',password:'Gerard12'},
        {username:'gerard@cmsbiz.nl',password:'Gerard'}
      ]
    }
  },
  methods: {
    logIn: function (username,password) {
      for(let account of this.accounts){
        if(account.username == username && account.password == password){
          this.isLoggedOn = true
          localStorage.setItem('account', JSON.stringify(account))
          this.$store.commit("logIn", account)
          this.$router.push({name:'persons'})
          break
        }
      }
    }
  },
}
</script>

<style scoped>

</style>