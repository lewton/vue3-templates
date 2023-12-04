import { defineStore } from 'pinia'
import { PINIA_USER, PINIA_USER_PERSIST } from '@/config'

const useStore = defineStore(PINIA_USER, {
  state: () => ({}),
  getters: {},
  actions: {},
  persist: {
    key: PINIA_USER_PERSIST
  }
})

export default useStore
