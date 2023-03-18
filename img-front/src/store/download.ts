import { defineStore } from "pinia";

export const useDownloadStore = defineStore('download', {
  state(){
    return {
      count: 0
    }
  },
})