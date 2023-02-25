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
}

export default NotesService;