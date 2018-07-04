module.exports = {
    isAuthenticated: false,
    authenticate(cb) {
        console.log(`Inside [fakeAuth] services: authenticate`)
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    logout(cb) {
        console.log(`Inside [fakeAuth] services: logout`)
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}