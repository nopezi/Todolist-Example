import state from './state'
import actions from './actions'
import mutations from './mutations'

export const namespaced = true

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}