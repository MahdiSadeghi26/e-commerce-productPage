import { defineStore } from "pinia";

export const useModalStore=defineStore('Modal',{
    state:()=>({
      isActive:null
    }),
    
})