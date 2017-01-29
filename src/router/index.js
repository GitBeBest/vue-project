/**
 * Created by zpc on 17-1-22.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import found from '../pages/found/found.vue'
import music from '../pages/music/music.vue'
import friends from '../pages/friends/friends.vue'
import account from '../pages/account/account.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/found', component: found},
    {path: '/my-music', component: music},
    {path: '/my-friends', component: friends},
    {path: '/my-account', component: account},
    {path: '*', component: found}
]

const router = new VueRouter({
  routes: routes
})

export default router
