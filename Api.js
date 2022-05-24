import AsyncStorage from "@react-native-async-storage/async-storage"

const BASE_API = 'https://a26d-200-149-29-51.sa.ngrok.io'

export default {
    checkToken: async (token) => {
        const req = await fetch(`https://a26d-200-149-29-51.sa.ngrok.io/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json()
        return json
    },

    signIn: async (email, password) => {
        const req = await fetch(`https://a26d-200-149-29-51.sa.ngrok.io/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json()
        return json
    },

    signUp: async (name, email, password) => {
        const req = await fetch(`https://a26d-200-149-29-51.sa.ngrok.io/user`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await req.json()
        return json
    },

    getProf: async () => {
        const token = await AsyncStorage.getItem('token')
        
        const req = await fetch(`https://a26d-200-149-29-51.sa.ngrok.io/workers?token=${token}`)
        const json = await req.json()  
        return json
    }
}
