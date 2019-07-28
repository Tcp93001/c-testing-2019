import Vue from 'vue'
import Vuex from 'vuex'
import {
  SET_USER_COLLECTION,
  SET_EQUIPMENT_COLLECTION,
  SET_CLIENT_COLLECTION
} from './mutation-types'
const fb = require('../firebaseConfig.js')

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    usersCollection: {},
    clientsCollection: {},
    equipmentCollection: {}
  },
  getters: {
    getUsersCollection: (state) => {
      return state.usersCollection
    },
    getClientsCollection: (state) => {
      return state.clientsCollection
    },
    getEquipmentCollection: (state) => {
      return state.equipmentCollection
    }
  },
  mutations: {
    [SET_USER_COLLECTION]: (state, payload) => {
      state.clientsCollection = payload
    }
  },
  actions: {
    accessUsersCollection: async ({ commit }) => {
      console.log('action')
      await fb.usersCollection.get().then(
        (res) => {
          console.log(res.data())
        }
      ).catch(
        err => console.log(err)
      )
    }
  }
})
