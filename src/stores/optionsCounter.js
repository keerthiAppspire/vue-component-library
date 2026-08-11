import { defineStore } from "pinia";
export const useOptionsCounterStore=defineStore('optionsCounter',{
    state:()=>({
        count:0,
        name:'jhon'
    }),
    getters:{
        doubled:(state)=>state.count*2
    },
    actions:{
        increment(){
            this.count++
        }
    }
})