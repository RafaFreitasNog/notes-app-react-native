import api from "./api"

const NotesService = {
  getByAuthor: async (authorId) => {
    const response = await api.get(`/notes/by/${authorId}`)
    return response
  },
}

export default NotesService;