export default {
    isAuthenticated: false,
    async authenticate(user, pass) {
        console.log(`Inside [fakeAuth] services: authenticate() - ${user} ${pass}`)
        if (user && pass && user === pass)
            this.isAuthenticated = true
        else
            this.isAuthenticated = false

        return {
            data: {
                isAuthenticated: this.isAuthenticated,
                userId: user,
                token: 'xyz-abd-eg'
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