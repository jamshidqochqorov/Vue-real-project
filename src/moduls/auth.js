import AuthService from "../service/auth";

const state = {
    isLoading:false
}
const mutations = {
    registerStart(state){
        state.isLoading = true
    },
    registerSucces(state){
        state.isLoading = false
    },
    registerFail(state){
        state.isLoading = false
    }

}
const actions = {
    register(context,user) {
       return new Promise(()=>{
           AuthService.register(user)
               .then(response=>{
                   console.log('response',response)
               })
               .catch(error=>{
                   console.log('erorrr',error.response.data)
               })
       })
    }
}
export default {
    state,mutations,actions
}