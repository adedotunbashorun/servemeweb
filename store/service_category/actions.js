import { Api } from '../../api'

import {
  ADD_SubCategory,
  ADD_SubCategory_SUCCESS,
  ADD_SubCategory_FAILURE,
  SubCategory_BY_ID,
  SubCategory_BY_ID_SUCCESS,
  SubCategory_BY_ID_FAILURE,
  UPDATE_SubCategory,
  UPDATE_SubCategory_SUCCESS,
  UPDATE_SubCategory_FAILURE,
  REMOVE_SubCategory,
  REMOVE_SubCategory_SUCCESS,
  REMOVE_SubCategory_FAILURE,
  ALL_SubCategoryS,
  ALL_SubCategoryS_SUCCESS,
  ALL_SubCategoryS_FAILURE
} from './mutation-types'

export const actions = {
  allSubCategories({ commit }, header) {
    commit(ALL_SubCategoryS)
    return new Promise((resolve, reject) => {
      Api.SubCategory.allSubCategories(header).then( response => {
        commit(ALL_SubCategoryS_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_SubCategoryS_FAILURE, err)
        reject(err)
      })
    })
  },

  SubCategoryById({ commit }, [payload,header]) {
    commit(SubCategory_BY_ID)
    return new Promise((resolve, reject) => {
      Api.SubCategory.SubCategoryById(payload, header).then(response => {
        commit(SubCategory_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(SubCategory_BY_ID_FAILURE, err)
        reject(err)
      })
    })
  },

  addSubCategory ({commit}, [payload,header]) {
    commit(ADD_SubCategory)
    return new Promise((resolve, reject) => {
      Api.SubCategory.addSubCategory(payload,header).then(response => {
        commit(ADD_SubCategory_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ADD_SubCategory_FAILURE, err)
        reject(err)
      })
    })
  },

  updateSubCategory ({commit}, [payload,header]) {
    commit(UPDATE_SubCategory)
    return new Promise((resolve, reject) => {
      Api.SubCategory.updateSubCategory(payload, header).then(response => {
        commit(UPDATE_SubCategory_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(UPDATE_SubCategory_FAILURE, err)
        reject(err)
      })
    })
  },

  deleteSubCategory ({commit}, [payload,header]) {
    commit(REMOVE_SubCategory)
    return new Promise((resolve, reject) => {
      Api.SubCategory.deleteSubCategory(payload,header).then(response => {
        commit(REMOVE_SubCategory_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(REMOVE_SubCategory_FAILURE, err)
        reject(err)
      })
    })
  }
}


