export default defineNuxtRouteMiddleware((to, from) => {
    if (!(isAuthenticated() || isHome(to.path))) {
        return navigateTo(`/?path=${to.fullPath}`)
    }
})

function isHome(path: string) {
    return path === '/';
}

function isAuthenticated():boolean {
    return true
}