

import Vuex from 'vuex'
import auth from './auth'
import category from './category'
import service_category from './service_category'

const store = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      auth,
      category,
      service_category
    }

  })
}

export default store
