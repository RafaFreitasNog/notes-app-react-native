import api from "./api"

const NotesService = {
  getByAuthor: async (authorId) => {
    const response = await api.get(`/notes/by/${authorId}`)
    return response
  },
  getById: async (noteId) => {
    const response = await api.get(`/notes/${noteId}`)
    return response
  },
  editNote: async (noteId, params) => {
    const response = await api.put(`/notes/${noteId}`, params)
    return response
  },
  postNote: async (params) => {
    const response = await api.post(`/notes`, params)
    return response
  },
  deleteNote: async (noteId) => {
    const response = await api.delete(`/notes/${noteId}`)
    return response
  }
}

export default NotesService;