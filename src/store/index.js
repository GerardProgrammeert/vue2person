import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        step:0,
        isLoggedOn:false,
        maxSteps:null,
        account:null,
        isStored:false,
    },
    mutations: {
        updateIsStored(state,status){
            state.isStored= status
        },
        updateFormStep(state, move){
            state.step = state.step + move;
        },
        resetForm(state){
           state.step =0
           state.maxSteps = 2
        },
        logIn(state,account){
            state.account = account
            state.isLoggedOn = true
        },
        logOut(state){
            state.isLoggedOn = false
        }
    }
});