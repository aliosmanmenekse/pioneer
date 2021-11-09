import Vue from 'vue'
import Vuex from 'vuex'
import { Actions, Mutations } from './types'
import ApiEnums from '../Enums/ApiEnums'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userSettings: {},
    partnerSettings: {}
  },

  actions: {
    /**
     * @param {function} commit
     * @return {void}
     */
    async [Actions.GET_USER_AND_PARTNER_SETTINGS] ({ commit }) {
      const response = await window.fetch(ApiEnums.GET_PARTNER_AND_USER_SETTINGS)
      const { userSettings, partnerSettings } = await response.json()

      commit(Mutations.SET_PARTNER_SETTINGS, partnerSettings)
      commit(Mutations.SET_USER_SETTINGS, userSettings)
    }
  },

  mutations: {
    /**
     * @param {object} state
     * @param {object} settings
     * @return {void}
     */
    [Mutations.SET_USER_SETTINGS] (state, settings) {
      state.userSettings = settings
    },

    /**
     * @param {object} state
     * @param {object} settings
     * @return {void}
     */
    [Mutations.SET_PARTNER_SETTINGS] (state, settings) {
      state.partnerSettings = settings
    }
  }
})
