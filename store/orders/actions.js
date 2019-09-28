import { Api } from '../../api'

import {
  ADD_ORDER,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
  ORDER_BY_ID,
  ORDER_BY_ID_SUCCESS,
  ORDER_BY_ID_FAILURE,
  UPDATE_ORDER,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAILURE,
  REMOVE_ORDER,
  REMOVE_ORDER_SUCCESS,
  REMOVE_ORDER_FAILURE,
  ALL_ORDER,
  ALL_ORDER_SUCCESS,
  ALL_ORDER_FAILURE
} from './mutation-types'

export const actions = {
  allOrders({ commit }, header) {
    commit(ALL_ORDER)
    return new Promise((resolve, reject) => {
      Api.Order.allOrders(header).then( response => {
        commit(ALL_ORDER_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_ORDER_FAILURE, err)
        reject(err)
      })
    })
  },

  classById({ commit }, [payload,header]) {
    commit(CLASS_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Class.classById(payload, header).then(response => {
        commit(CLASS_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(CLASS_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },

  addClass ({commit}, [payload,header]) {
    commit(ADD_CLASS)
    return new Promise((resolve, reject) => {
      Api.Class.addClass(payload,header).then(response => {
        commit(ADD_CLASS_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ADD_CLASS_FAILURE, err)
        reject(err)
      })
    })
  },

  updateClass ({commit}, [payload,header]) {
    commit(UPDATE_CLASS)
    return new Promise((resolve, reject) => {
      Api.Class.updateClass(payload, header).then(response => {
        commit(UPDATE_CLASS_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(UPDATE_CLASS_FAILURE, err)
        reject(err)
      })
    })
  },

  removeClass ({commit}, [payload,header]) {
    commit(REMOVE_CLASS)
    return new Promise((resolve, reject) => {
      Api.Class.deleteClass(payload,header).then(response => {
        commit(REMOVE_CLASS_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(REMOVE_CLASS_FAILURE, err)
        reject(err)
      })
    })
  }
}


