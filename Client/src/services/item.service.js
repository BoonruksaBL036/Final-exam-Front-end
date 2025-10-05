import api from "./api.js";
const API_URL = import.meta.env.VITE_BASE_URL + "/items";


const getAllItem = async () => {
  return await api.get(API_URL + "?page=1&limit=10");
};
const search = async (keyword) => {
  return await api.get(API_URL + "/search?q=" + keyword)
}

const ItemService = {
  getAllItem,
  search,
};
export default ItemService