import { defineStore } from 'pinia'
import { PINIA_MAIN, PINIA_MAIN_PERSIST } from '@/config'

const useStore = defineStore(PINIA_MAIN, {
  state: () => ({}),
  getters: {},
  actions: {},
  persist: {
    key: PINIA_MAIN_PERSIST
  }
})

export default useStore
