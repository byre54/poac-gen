import { createApp } from 'vue'
import Vuex from 'vuex'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
// import store from './store'
import {axios} from 'axios'
import {VueAxios} from 'vue-axios'
import { NFTStorage, File } from 'nft.storage'

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdhMTRDNEMyNTlCZDJDZkJFMjY3QmUwNTlDY0NDYkIwMzg0MDU1RDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyOTAxMTI3MjY1MSwibmFtZSI6Im1ldGF3YXJkIn0.lVg78PbFkklgaNM75y86NH0q2uVzyH4z8i-dZBh0F0M'
const client = new NFTStorage({ token: apiKey })

const app = createApp(App)


app.use(VueAxios, axios, Vuex)
app.provide('axios', app.config.globalProperties.axios)
const router = createRouter({
  history: createWebHistory(),
  routes,
})


app.use(router)
app.mount('#app')

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
      
    }
})