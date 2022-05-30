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

    signIn: async (email, pass) => {
        const req = await fetch(`https://a26d-200-149-29-51.sa.ngrok.io/workers/login`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, pass})
        });
        const json = await req.json()
        return json
    },

    signUp: async (nome, email, pass) => {
        const req = await fetch(`https://a26d-200-149-29-51.sa.ngrok.io/workers/user`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nome, email, pass})
        });
        const json = await req.json()
        return json
    },

    logout: async () => {
        const token = await AsyncStorage.getItem('token')

        const req = await fetch(`https://a26d-200-149-29-51.sa.ngrok.io/workers/logout`, {
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

    getSearch: async (search) => {
        const req = await fetch(`https://a26d-200-149-29-51.sa.ngrok.io/workers/profissions`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({search: search})
        })
        const json = await req.json()
        return json
        
    },

    getProf: async () => {
        const token = await AsyncStorage.getItem('token')
        
        const req = await fetch(`https://a26d-200-149-29-51.sa.ngrok.io/workers?token=${token}`)
        const json = await req.json()  
        return json
    },

    getInfoUser: async () => {
        const req = await fetch(`https://a26d-200-149-29-51.sa.ngrok.io/workers`)
        const json = await req.json()
        return json
    },

    setFavorite: async (workersId) => {
        const req = await fetch(`https://a26d-200-149-29-51.sa.ngrok.io/workers/favoritos`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({workers:workersId})
        });
        const json = await req.json()
        return json
    }
}
