import api from "./api";

const UserService = {
  signIn: async (params) => {
    const response = await api.post('/users/login', params)
    return response
  },
  revalidate: async () => {
    const response = await api.get('/users/revalidate')
    return response
  },
  getAll: async () => {
    const response = await api.get('/users')
    return response
  }
}

export default UserService