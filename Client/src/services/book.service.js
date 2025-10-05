import api from "./api.js";
const API_URL = import.meta.env.VITE_BASE_URL + "/books";

const getAllBook = async () => {
  return await api.get(API_URL + "/");
};
const createNewBook = async (data) => {
  return await api.post(API_URL + "/", data);
};
const getBookById = async (id) => {
  return await api.get(API_URL + "/" + id);
};
const updateBookById = async (id, data) => {
  return await api.put(API_URL + "/" + id, data);
};
const deleteBookById = async (id) => {
  return await api.delete(API_URL + "/" + id);
};
const search = async (keyword) => {
  return await api.get(API_URL + "/search?q=" + keyword)
}
const BookService = {
  createNewBook,
  getAllBook,
  getBookById,
  updateBookById,
  deleteBookById,
  search
};
export default BookService;
