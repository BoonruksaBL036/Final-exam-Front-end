import api from "./api.js";
const API_URL = import.meta.env.VITE_BASE_URL + "/journals";

const createNewJournals = async (data) => {
  return await api.post(API_URL + "/", data);
};
const getAllJournals = async () => {
  return await api.get(API_URL + "/");
};
const getJournalById = async (id) => {
  return await api.get(API_URL + "/" + id);
};
const updateJournalById = async (id, data) => {
  return await api.put(API_URL + "/" + id, data);
};
const deleteJournalById = async (id) => {
  return await api.delete(API_URL + "/" + id);
};
const JournalService = {
  createNewJournals,
  getAllJournals,
  getJournalById,
  updateJournalById,
  deleteJournalById,
};
export default JournalService;
