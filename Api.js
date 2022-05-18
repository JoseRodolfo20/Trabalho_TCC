import AsyncStorage from "@react-native-async-storage/async-storage"

const BASE_API = 'https://fafa-200-149-29-51.sa.ngrok.io/workers'

export default {
    getProf: async () => {
        const token = await AsyncStorage.getItem('token')
        
        const req = await fetch(`${BASE_API}/workers?token=${token}`)
        const json = await req.json()
        return json
    }
}