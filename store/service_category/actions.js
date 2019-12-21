import { Api } from '../../api'

import {
  ADD_SUBCATEGORY,
  ADD_SUBCATEGORY_SUCCESS,
  ADD_SUBCATEGORY_FAILURE,
  SUBCATEGORY_BY_ID,
  SUBCATEGORY_BY_ID_SUCCESS,
  SUBCATEGORY_BY_ID_FAILURE,
  UPDATE_SUBCATEGORY,
  UPDATE_SUBCATEGORY_SUCCESS,
  UPDATE_SUBCATEGORY_FAILURE,
  REMOVE_SUBCATEGORY,
  REMOVE_SUBCATEGORY_SUCCESS,
  REMOVE_SUBCATEGORY_FAILURE,
  ALL_SUBCATEGORIES,
  ALL_SUBCATEGORIES_SUCCESS,
  ALL_SUBCATEGORIES_FAILURE
} from './mutation-types'

export const actions = {
  allSubCategories({ commit }, header) {
    commit(ALL_SUBCATEGORIES)
    return new Promise((resolve, reject) => {
      Api.SUBCATEGORY.allSubCategories(header).then( response => {
        commit(ALL_SUBCATEGORIES_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_SUBCATEGORIES_FAILURE, err)
        reject(err)
      })
    })
  },

  SUBCATEGORYById({ commit }, [payload,header]) {
    commit(SUBCATEGORY_BY_ID)
    return new Promise((resolve, reject) => {
      Api.SUBCATEGORY.SUBCATEGORYById(payload, header).then(response => {
        commit(SUBCATEGORY_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(SUBCATEGORY_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },

  addSUBCATEGORY ({commit}, [payload,header]) {
    commit(ADD_SUBCATEGORY)
    return new Promise((resolve, reject) => {
      Api.SUBCATEGORY.addSUBCATEGORY(payload,header).then(response => {
        commit(ADD_SUBCATEGORY_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ADD_SUBCATEGORY_FAILURE, err)
        reject(err)
      })
    })
  },

  updateSUBCATEGORY ({commit}, [payload,header]) {
    commit(UPDATE_SUBCATEGORY)
    return new Promise((resolve, reject) => {
      Api.SUBCATEGORY.updateSUBCATEGORY(payload, header).then(response => {
        commit(UPDATE_SUBCATEGORY_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(UPDATE_SUBCATEGORY_FAILURE, err)
        reject(err)
      })
    })
  },

  deleteSUBCATEGORY ({commit}, [payload,header]) {
    commit(REMOVE_SUBCATEGORY)
    return new Promise((resolve, reject) => {
      Api.SUBCATEGORY.deleteSUBCATEGORY(payload,header).then(response => {
        commit(REMOVE_SUBCATEGORY_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(REMOVE_SUBCATEGORY_FAILURE, err)
        reject(err)
      })
    })
  }
}


