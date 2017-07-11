import {getCheckInfo} from '@/api'
import * as types from '@/store/mutation-types'

// init state
const state={
  checkStatus:0 // 0未打卡 1已签到 2已下班
}

// getters
const getters={
  checkStatusMessage(state){
    let msgs=['我该上班了','我要下班了','路上注意安全']
    return msgs[state.checkStatus]
  }
}

// mutations
const mutations={
  [types.SET_IN_STATUS](state){
    state.checkStatus=1
  },
  [types.SET_OUT_STATUS](state){
    state.checkStatus=2
  },
  [types.SET_NO_STATUS](state){
    state.checkStatus=0
  }
}

// actions
const actions={
  getUserCheck({commit},search){
    getCheckInfo(search.username,search.date)
      .then(info=>{
        if(info.length<1){
          commit(types.SET_NO_STATUS)
        }else{
          if(info[0].check.out){
            commit(types.SET_OUT_STATUS)
          }else{
            commit(types.SET_IN_STATUS)
          }
        }
      })
  },
  setUserCheck({commit},status){
    switch(status){
      case 0:
        commit(types.SET_NO_STATUS)
        break
      case 1:
        commit(types.SET_IN_STATUS)
        break
      case 2:
        commit(types.SET_OUT_STATUS)
    }
  }
}

// export
export default {
  state,
  getters,
  mutations,
  actions
}