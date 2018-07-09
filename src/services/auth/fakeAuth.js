export default {
    isAuthenticated: false,
    async authenticate(user, pass) {
        console.log(`Inside [fakeAuth] services: authenticate() - ${user} ${pass}`)
        if (user === 'root' && pass === 'root')
            this.isAuthenticated = true
        else
            this.isAuthenticated = false

        return {
            data: {
                isAuthenticated: this.isAuthenticated
            }
        }
    },
    logout(user, pass) {
        console.log(`Inside [fakeAuth] services: logout() - ${user} ${pass}`)
        this.isAuthenticated = false
        return {
            data: {
                isAuthenticated: this.isAuthenticated
            }
        }
    }
}