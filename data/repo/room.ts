import {defineStore, type StoreDefinition} from "pinia";
import type {RouteParamValue} from "vue-router";

//export function getRoomRepo(id: string): StoreDefinition {
export const getRoomRepo = defineStore(`websiteStore`, {
    state: () => ({
        name: '',
        description: ''
    }),
    actions: {
        async fetch(id: string) {
            console.log(`${id}`)
            this.name = "0"
            this.description = "0"
            setTimeout(() => {
                if (process.client) {
                    const roomId = localStorage.getItem(`room-${id}`)
                    if (roomId) {
                        this.name = roomId!
                        this.description = roomId!
                    }
                }
            },0)
            setTimeout(() => {
                console.log(`timeout`)
                if (process.client) {
                    localStorage.setItem(`room-${id}`, id)
                }
                this.name = id
                this.description = id
            }, 100)
        }
    }
})
//}