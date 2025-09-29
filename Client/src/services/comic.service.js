import api from "./api.js";
const API_URL = import.meta.env.VITE_BASE_URL + "/comics";

const createComics = async (data) => {
  return await api.post(API_URL + "/", data);
};
const getAllComics = async () => {
  return await api.get(API_URL + "/");
};
const getComicById = async (id) => {
  return await api.get(API_URL + "/" + id);
};
const updateComicById = async (id, data) => {
  return await api.put(API_URL + "/" + id, data);
};
const deleteComicById = async (id) => {
  return await api.delete(API_URL + "/" + id);
};
const ComicService = {
  createComics,
  getAllComics,
  getComicById,
  updateComicById,
  deleteComicById,
};
export default ComicService;
