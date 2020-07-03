import axios from 'axios'

const state = () => ({
    user:{
        follow:[],
        password:"",
        username:""

    }
});

const actions = {
    get_user(){
       axios("/user.json").then(res=> {
           this.commit('get_user',res.data)
       })
    },
    addFollow(id){

    }
};
const mutations = {
    get_user(state, data ) {
        state.user = data;
    },
    addFollow(state, id){
        state.user.follow.push(id)
    }
};

export default {
    state,
    mutations,
    actions
}
