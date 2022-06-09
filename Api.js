import AsyncStorage from "@react-native-async-storage/async-storage"

const BASE_API = 'https://756b-200-149-29-51.sa.ngrok.io'

export default {
    checkToken: async (token) => {
        const req = await fetch(`https://e16f-138-121-21-56.sa.ngrok.io/usuarios/token`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        const json = await req.json()
        return json
    },

    signIn: async (email, pass) => {
        const req = await fetch(`https://e16f-138-121-21-56.sa.ngrok.io/usuarios/login`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, pass })
        });
        const json = await req.json()
        return json
    },

    signUp: async (nome, email, pass, endereco) => {
        const req = await fetch(`https://e16f-138-121-21-56.sa.ngrok.io/usuarios`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, pass })
        });
        const json = await req.json()
        return json
    },

    logout: async () => {
        const token = await AsyncStorage.getItem('token')

        const req = await fetch(`https://e16f-138-121-21-56.sa.ngrok.io/usuarios/logout`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        const json = await req.json()
        return json
    },

    getSearch: async (search) => {
        const req = await fetch(`https://e16f-138-121-21-56.sa.ngrok.io/usuarios/profissions`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({ search })
        })
        const json = await req.json()
        return json

    },

    getProf: async () => {
        const token = await AsyncStorage.getItem('token')
        const req = await fetch(`https://e16f-138-121-21-56.sa.ngrok.io/usuarios`, {
            method: 'GET',
            headers: {
                token: token
            }

        })
        const json = await req.json()
        return json
    },

    getProfissonal: async (id) => {
        const token = await AsyncStorage.getItem('token')

        const req = await fetch(`https://e16f-138-121-21-56.sa.ngrok.io/usuarios/${id}?token=${token}`)
        const json = await req.json()
        return json
    },

    setFavorite: async () => {
        const req = await fetch(`https://e16f-138-121-21-56.sa.ngrok.io/usuarios/favoritos`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
        const json = await req.json()
        return json
    },

    editProfile: async (id, nome, email, pass, endereco, fotoUsuario) => {
        const req = await fetch(`https://e16f-138-121-21-56.sa.ngrok.io/usuarios`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                nome: nome,
                email: email,
                pass: pass,
                endereco: endereco,
                fotoUsuario: fotoUsuario

            })
        });
        const json = await req.json()
        return json
    },

    offerService: async (id, profissao, preco, endereco, restricoes) => {
        const req = await fetch(`https://e16f-138-121-21-56.sa.ngrok.io/usuarios`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                profissao,
                preco,
                endereco,
                restricoes
            })
        });
        const json = await req.json()
        return json
    },

    requestService: async (id_usuario, servico_necessario, dia, hora, detalhes_servico_necessario) => {
        const req = await fetch(`https://e16f-138-121-21-56.sa.ngrok.io/usuarios`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_usuario,
                servico_necessario,
                dia,
                hora,
                detalhes_servico_necessario
            })
        });
        const json = await req.json()
        return json
    }
}
